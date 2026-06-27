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

import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WORKER_URL = process.env.WORKER_URL || 'https://baptiste-agent.blouin-baptiste94.workers.dev';
const SITE_URL = 'https://baptisteblouin.fr';
// Au 2e cron (soir) on archive la journée complète ; le matin on ne touche qu'au README.
const WRITE_ARCHIVE = process.env.WRITE_ARCHIVE === 'true';
const KEEP_DAYS = 14;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const LANGS = {
  en: {
    file: 'README.md',
    title: 'Tech Brief',
    tagline: 'Automated daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.',
    other: '🇫🇷 [Version française](README_fr.md)',
    latest: 'Latest digest',
    updated: 'updated',
    sources: 'Sources',
    empty: 'No news for this day.',
    archiveTitle: 'Recent archive',
    archiveHint: `One file per day (kept ${KEEP_DAYS} days).`,
    veille: `${SITE_URL}/veille.en.html`,
    footer: (url) => `Auto‑generated twice a day · source: [live tech‑watch](${url}) · pipeline: Cloudflare Worker → GitHub Actions`,
    archiveHeader: (date) => `Tech Brief — ${date}`,
    backToReadme: '← Back to the latest digest',
  },
  fr: {
    file: 'README_fr.md',
    title: 'Tech Brief',
    tagline: 'Veille techno quotidienne et automatisée — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.',
    other: '🇬🇧 [English version](README.md)',
    latest: 'Dernier digest',
    updated: 'mis à jour le',
    sources: 'Sources',
    empty: 'Aucune actualité pour ce jour.',
    archiveTitle: 'Archive récente',
    archiveHint: `Un fichier par jour (conservé ${KEEP_DAYS} jours).`,
    veille: `${SITE_URL}/veille.html`,
    footer: (url) => `Généré automatiquement 2×/jour · source : [veille en direct](${url}) · pipeline : Cloudflare Worker → GitHub Actions`,
    archiveHeader: (date) => `Tech Brief — ${date}`,
    backToReadme: '← Retour au dernier digest',
  },
};

async function fetchDigest() {
  const res = await fetch(`${WORKER_URL}/news`, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`GET /news → ${res.status}`);
  return res.json();
}

// Table label → ordinal d'affichage, dans l'ordre d'apparition des citations [label]
// dans le résumé (les sources non citées suivent). Réplique la logique du site.
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
  return new Map(ordered.map((s, i) => [s.label, i + 1]));
}

// Résumé prêt pour Markdown : on retire un éventuel bloc « Sources » de fin (rendu à part)
// et on remplace les citations [label] / [a, b] par des renvois numériques [n].
function renderSummary(summary, ord) {
  const clean = String(summary || '')
    .replace(/\n+(?:#{1,3}\s*Sources?\b|Sources?\s*:)[\s\S]*$/i, '')
    .trim();
  return clean.replace(/\[([^\]]+)\]/g, (m, grp) => {
    const nums = grp.split(',').map((p) => ord.get(p.trim())).filter(Boolean);
    return nums.length ? `[${nums.join(', ')}]` : m;
  });
}

function renderSources(sources, ord, L) {
  if (!sources || !sources.length) return '';
  const rows = [...sources]
    .sort((a, b) => (ord.get(a.label) || 1e9) - (ord.get(b.label) || 1e9))
    .map((s) => {
      const n = ord.get(s.label) || '•';
      const title = (s.title || s.source || s.link || '').trim();
      const link = s.link ? `[${esc(title)}](${s.link})` : esc(title);
      const from = s.source ? ` — _${esc(s.source)}_` : '';
      return `${n}. ${link}${from}`;
    });
  return `## ${L.sources}\n\n${rows.join('\n')}\n`;
}

const esc = (t) => String(t || '').replace(/([\[\]])/g, '\\$1');

function digestBody(d, L) {
  const ord = citationOrder((d.summary && d.summary.en) || '', d.sources);
  const md = d.summary && typeof d.summary === 'object' ? d.summary[L === LANGS.en ? 'en' : 'fr'] : '';
  const body = (md || '').trim();
  if (!body || /^No new items|^Aucun élément nouveau/i.test(body)) {
    return { text: `_${L.empty}_`, sources: '' };
  }
  return { text: renderSummary(body, ord), sources: renderSources(d.sources, ord, L) };
}

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
  const { text, sources } = digestBody(d, L);
  const dates = archiveDates(lang);
  const archive = dates.length
    ? `\n## ${L.archiveTitle}\n\n_${L.archiveHint}_\n\n${dates.map((dt) => `- [${dt}](news/${lang}/${dt}.md)`).join('\n')}\n`
    : '';
  return [
    `# ${L.title}`,
    '',
    `> ${L.tagline}`,
    `> ${L.other}`,
    '',
    `### ${L.latest} — ${d.dayKey || ''}`,
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
  const { text, sources } = digestBody(d, L);
  return [
    `# ${L.archiveHeader(d.dayKey || '')}`,
    `<sub>${L.updated} ${fmtDateTime(d.generatedAt, lang)} · [${L.title}](../../${L.file})</sub>`,
    '',
    text,
    '',
    sources,
    '---',
    `<sub>${L.backToReadme}: [../../${L.file}](../../${L.file})</sub>`,
    '',
  ].join('\n');
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

async function main() {
  const d = await fetchDigest();
  const dayKey = d.dayKey && DATE_RE.test(d.dayKey) ? d.dayKey : new Date().toISOString().slice(0, 10);

  // Archive d'abord (au run du soir) → le README liste ensuite la date du jour.
  if (WRITE_ARCHIVE) {
    for (const lang of Object.keys(LANGS)) {
      const dir = join(ROOT, 'news', lang);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, `${dayKey}.md`), buildArchive(lang, d));
    }
    prune(dayKey);
    console.log(`Archive écrite pour ${dayKey} (en + fr), prune > ${KEEP_DAYS} j.`);
  }

  for (const lang of Object.keys(LANGS)) {
    writeFileSync(join(ROOT, LANGS[lang].file), buildReadme(lang, d));
  }
  console.log(`README.md + README_fr.md régénérés (digest ${dayKey}, ${d.count || 0} sources).`);
}

main().catch((e) => { console.error(e); process.exit(1); });
