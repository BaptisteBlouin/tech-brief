// Génère le briefing techno (Markdown) à partir du Worker de veille.
//
// Pipeline : Cloudflare Worker (calcule la veille 2×/jour, expose GET /news) →
// GitHub Actions (ce script) → commit sur le dépôt public.
//
//   • README.md / README_fr.md  : dernier digest « Actualités », régénéré à CHAQUE run.
//   • news/{en,fr}/<date>.md     : archive du jour, écrite UNIQUEMENT au 2e run (soir),
//                                  quand la journée écoulée est complète. Conservé KEEP_DAYS jours.
//
// Le contenu (résumé + traduction FR) vient déjà tout fait du Worker : ce script ne fait
// que la mise en forme Markdown et l'archivage. Aucune clé secrète requise (route publique).
//
// Variables d'env :
//   WRITE_ARCHIVE=true   écrit aussi news/<lang>/<date>.md (run du soir).
//   BACKFILL_DAYS=N      pré-remplit les N dernières journées archivées (one-shot, contenu initial).

import { writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WORKER_URL = process.env.WORKER_URL || 'https://baptiste-agent.blouin-baptiste94.workers.dev';
const SITE_URL = 'https://baptisteblouin.fr';
const WRITE_ARCHIVE = process.env.WRITE_ARCHIVE === 'true';
const BACKFILL_DAYS = Math.max(0, parseInt(process.env.BACKFILL_DAYS || '0', 10) || 0);
const KEEP_DAYS = 14;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const REPO = 'BaptisteBlouin/tech-brief';
const BADGE = `[![Tech Brief](https://github.com/${REPO}/actions/workflows/veille.yml/badge.svg)](https://github.com/${REPO}/actions/workflows/veille.yml)`;

const LANGS = {
  en: {
    file: 'README.md',
    title: 'Tech Brief',
    tagline: 'Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.',
    autopub: (url) => `📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](${url})** — generated twice a day, no human in the loop.`,
    cadence: `Updated twice a day · archives kept ${KEEP_DAYS} days.`,
    other: '🇫🇷 [Version française](README_fr.md)',
    latest: 'Latest digest',
    recap: (from, to) => `Weekly recap (${from} → ${to})`,
    updated: 'updated',
    sources: 'Sources',
    empty: 'No news for this day.',
    archiveTitle: 'Recent archive',
    archiveHint: `One file per day (kept ${KEEP_DAYS} days).`,
    veille: `${SITE_URL}/veille.en.html`,
    footer: (url) => `Auto‑generated twice a day · source: [live tech‑watch](${url})`,
    archiveHeader: (date) => `Tech Brief — ${date}`,
    backToReadme: '← Back to the latest digest',
  },
  fr: {
    file: 'README_fr.md',
    title: 'Tech Brief',
    tagline: 'Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.',
    autopub: (url) => `📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](${url})** — générées deux fois par jour, sans intervention humaine.`,
    cadence: `Mis à jour 2×/jour · archives conservées ${KEEP_DAYS} jours.`,
    other: '🇬🇧 [English version](README.md)',
    latest: 'Dernier digest',
    recap: (from, to) => `Récap de la semaine (du ${from} au ${to})`,
    updated: 'mis à jour le',
    sources: 'Sources',
    empty: 'Aucune actualité pour ce jour.',
    archiveTitle: 'Archive récente',
    archiveHint: `Un fichier par jour (conservé ${KEEP_DAYS} jours).`,
    veille: `${SITE_URL}/veille.html`,
    footer: (url) => `Généré automatiquement 2×/jour · source : [veille en direct](${url})`,
    archiveHeader: (date) => `Tech Brief — ${date}`,
    backToReadme: '← Retour au dernier digest',
  },
};

const PARIS_WD = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
// Jour de semaine Paris (1=lundi … 7=dimanche) d'un dayKey 'YYYY-MM-DD'.
function parisWeekday(dayKey) {
  const wd = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Paris', weekday: 'short' })
    .format(new Date(`${dayKey}T12:00:00Z`));
  return PARIS_WD[wd] || 1;
}

async function fetchJson(path) {
  const res = await fetch(`${WORKER_URL}${path}`, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`GET ${path} → ${res.status}`);
  return res.json();
}

// Échappe le texte de lien Markdown (crochets → littéraux, ex. titre « [AINews] … »).
const esc = (t) => String(t || '').replace(/([\\[\]])/g, '\\$1').replace(/\s+/g, ' ').trim();
// Destination de lien sûre : <…> tolère #, parenthèses et espaces dans l'URL.
const mdLink = (text, url) => (url ? `[${esc(text)}](<${url}>)` : esc(text));

// Table label → ordinal d'affichage, dans l'ordre d'apparition des citations [label]
// dans le résumé (sources non citées en fin). Réplique la logique du site.
function citationOrder(summary, sources) {
  const byLabel = new Map((sources || []).map((s) => [s.label, s]));
  const ordered = [];
  const seen = new Set();
  const push = (label) => {
    if (!seen.has(label) && byLabel.has(label)) { seen.add(label); ordered.push(byLabel.get(label)); }
  };
  for (const m of String(summary || '').matchAll(/\[([^\]]+)\]/g)) {
    for (const part of m[1].split(',')) push(part.trim());
  }
  for (const s of sources || []) push(s.label);
  return { ord: new Map(ordered.map((s, i) => [s.label, i + 1])), byLabel };
}

// Résumé prêt pour Markdown : retire un éventuel bloc « Sources » de fin (rendu à part)
// et transforme les citations [label] / [a, b] en renvois cliquables en exposant.
function renderSummary(summary, ord, byLabel) {
  const clean = String(summary || '')
    .replace(/\n+(?:#{1,3}\s*Sources?\b|Sources?\s*:)[\s\S]*$/i, '')
    .trim();
  return clean.replace(/\[([^\]]+)\]/g, (m, grp) => {
    const links = grp.split(',').map((p) => {
      const label = p.trim();
      const n = ord.get(label);
      const s = byLabel.get(label);
      return n && s && s.link ? `[${n}](<${s.link}>)` : null;
    }).filter(Boolean);
    return links.length ? `<sup>${links.join(', ')}</sup>` : m;
  });
}

function renderSources(sources, ord, L) {
  if (!sources || !sources.length) return '';
  const rows = [...sources]
    .sort((a, b) => (ord.get(a.label) || 1e9) - (ord.get(b.label) || 1e9))
    .map((s) => {
      const n = ord.get(s.label) || '•';
      const title = (s.title || s.source || s.link || '').trim();
      const from = s.source ? ` — _${esc(s.source)}_` : '';
      return `${n}. ${mdLink(title, s.link)}${from}`;
    });
  return `## ${L.sources}\n\n${rows.join('\n')}\n`;
}

function digestBody(d, lang) {
  const L = LANGS[lang];
  const { ord, byLabel } = citationOrder((d.summary && d.summary.en) || '', d.sources);
  const md = d.summary && typeof d.summary === 'object' ? d.summary[lang] : '';
  const body = (md || '').trim();
  if (!body || /^No new items|^Aucun élément nouveau/i.test(body)) {
    return { text: `_${L.empty}_`, sources: '' };
  }
  return { text: renderSummary(body, ord, byLabel), sources: renderSources(d.sources, ord, L) };
}

const hasContent = (d) => {
  const en = d && d.summary && d.summary.en ? d.summary.en.trim() : '';
  return !!en && !/^No new items/i.test(en) && (d.count || 0) > 0;
};

function fmtDateTime(iso, lang) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
      dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Paris',
    });
  } catch { return iso; }
}

// Dates d'archive présentes pour une langue (récent → ancien), bornées à KEEP_DAYS.
function archiveDates(lang) {
  const dir = join(ROOT, 'news', lang);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md') && DATE_RE.test(f.slice(0, 10)))
    .map((f) => f.slice(0, 10))
    .sort().reverse().slice(0, KEEP_DAYS);
}

function buildReadme(lang, d) {
  const L = LANGS[lang];
  const { text, sources } = digestBody(d, lang);
  const dates = archiveDates(lang);
  const archive = dates.length
    ? `\n## ${L.archiveTitle}\n\n_${L.archiveHint}_\n\n${dates.map((dt) => `- [${dt}](news/${lang}/${dt}.md)`).join('\n')}\n`
    : '';
  return [
    `# ${L.title}`,
    '',
    BADGE,
    '',
    `> ${L.autopub(L.veille)}`,
    `>`,
    `> ${L.tagline}`,
    `> _${L.cadence}_`,
    `> ${L.other}`,
    '',
    d.weekly ? `### 🗓️ ${L.recap(d.from || '', d.to || d.dayKey || '')}` : `### ${L.latest} — ${d.dayKey || ''}`,
    `<sub>${L.updated} ${fmtDateTime(d.generatedAt, lang)}</sub>`,
    '',
    text,
    '',
    sources,
    archive,
    '---',
    `<sub>${L.footer(L.veille)}</sub>`,
    '',
  ].join('\n');
}

function buildArchive(lang, d) {
  const L = LANGS[lang];
  const { text, sources } = digestBody(d, lang);
  const heading = d.weekly ? `${L.title} — 🗓️ ${L.recap(d.from || '', d.to || d.dayKey || '')}` : L.archiveHeader(d.dayKey || '');
  return [
    `# ${heading}`,
    `<sub>${L.updated} ${fmtDateTime(d.generatedAt, lang)} · ${L.autopub(L.veille)}</sub>`,
    '',
    text,
    '',
    sources,
    '---',
    `<sub>[${L.backToReadme}](../../${L.file})</sub>`,
    '',
  ].join('\n');
}

function writeArchiveFiles(d, dayKey) {
  for (const lang of Object.keys(LANGS)) {
    const dir = join(ROOT, 'news', lang);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, `${dayKey}.md`), buildArchive(lang, d));
  }
}

// Supprime les archives plus vieilles que KEEP_DAYS jours (par rapport au dayKey courant).
function prune(dayKey) {
  const cutoff = new Date(`${dayKey}T00:00:00Z`).getTime() - KEEP_DAYS * 86400000;
  for (const lang of Object.keys(LANGS)) {
    const dir = join(ROOT, 'news', lang);
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir)) {
      const day = f.slice(0, 10);
      if (!DATE_RE.test(day)) continue;
      if (new Date(`${day}T00:00:00Z`).getTime() < cutoff) rmSync(join(dir, f));
    }
  }
}

// Digest à présenter pour une date. Le dimanche (ou entrée d'index marquée weekly),
// la « news du jour » est le récap hebdo (Lun→Dim) plutôt que le seul digest du dimanche.
async function digestForDay(dayKey, weekly) {
  if (weekly || parisWeekday(dayKey) === 7) {
    const w = await fetchJson(`/weekly?kind=news&date=${dayKey}`);
    if (hasContent(w)) return w;
  }
  return fetchJson(`/news?date=${dayKey}`);
}

async function main() {
  const d = await fetchJson('/news');
  const dayKey = d.dayKey && DATE_RE.test(d.dayKey) ? d.dayKey : new Date().toISOString().slice(0, 10);
  // Dimanche : on présente le récap hebdo (Lun→Dim) à la place du digest quotidien,
  // dès qu'il existe pour cette date (généré le dimanche soir).
  let latest = d;
  if (parisWeekday(dayKey) === 7) {
    const w = await fetchJson(`/weekly?kind=news&date=${dayKey}`);
    if (hasContent(w)) latest = w;
  }

  // Backfill one-shot : pré-remplit les N dernières entrées de l'index (jours + récaps
  // du dimanche). Une entrée { weekly: true } → récupérée via /weekly.
  if (BACKFILL_DAYS > 0) {
    const idx = await fetchJson('/archive?kind=news');
    const entries = (idx.dates || [])
      .filter((x) => x.date && DATE_RE.test(x.date) && (x.count || 0) > 0)
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, BACKFILL_DAYS);
    for (const e of entries) {
      const dd = await digestForDay(e.date, e.weekly);
      if (!hasContent(dd)) continue;
      writeArchiveFiles(dd, dd.dayKey && DATE_RE.test(dd.dayKey) ? dd.dayKey : e.date);
    }
    prune(dayKey);
    console.log(`Backfill : ${entries.map((e) => e.date + (e.weekly ? '*' : '')).join(', ')}.`);
  }

  // Archive du jour (run du soir) avant de régénérer le README (pour lister la date).
  if (WRITE_ARCHIVE && hasContent(latest)) {
    writeArchiveFiles(latest, dayKey);
    prune(dayKey);
    console.log(`Archive écrite pour ${dayKey}${latest.weekly ? ' (récap hebdo)' : ''} (en + fr), prune > ${KEEP_DAYS} j.`);
  }

  for (const lang of Object.keys(LANGS)) {
    writeFileSync(join(ROOT, LANGS[lang].file), buildReadme(lang, latest));
  }
  console.log(`README régénéré (${latest.weekly ? 'récap hebdo' : 'digest'} ${dayKey}, ${latest.count || 0} sources).`);
}

main().catch((e) => { console.error(e); process.exit(1); });
