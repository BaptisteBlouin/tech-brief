// Génère le briefing techno (Markdown) à partir du Worker de veille.
//
// Pipeline : Cloudflare Worker (calcule la veille 2×/jour, expose GET /news) →
// GitHub Actions (ce script) → commit sur le dépôt public.
//
//   • README.md / README_fr.md  : dernier digest « Actualités », régénéré à CHAQUE run.
//   • news/{en,fr}/<date>.md     : archive du jour, écrite UNIQUEMENT au 2e run (soir),
//                                  quand la journée écoulée est complète. Conservée KEEP_DAYS jours
//                                  (rétention longue, pour le référencement) ; seules les LIST_DAYS
//                                  dernières sont listées dans le README.
//
// Le contenu (résumé + traduction FR) vient déjà tout fait du Worker : ce script ne fait
// que la mise en forme Markdown et l'archivage. Aucune clé secrète requise (route publique).
//
// Variables d'env :
//   WRITE_ARCHIVE=true   écrit aussi news/<lang>/<date>.md (run du soir).
//   BACKFILL_DAYS=N      pré-remplit les N dernières journées archivées (one-shot, contenu initial).

import { writeFileSync, readFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WORKER_URL = process.env.WORKER_URL || 'https://baptiste-agent.blouin-baptiste94.workers.dev';
const SITE_URL = 'https://baptisteblouin.fr';
const WRITE_ARCHIVE = process.env.WRITE_ARCHIVE === 'true';
const BACKFILL_DAYS = Math.max(0, parseInt(process.env.BACKFILL_DAYS || '0', 10) || 0);
// Rétention des fichiers d'archive sur le disque (référencement : chaque jour = une page
// unique indexable). Affichage dans le README borné à LIST_DAYS pour rester lisible.
const KEEP_DAYS = Math.max(1, parseInt(process.env.KEEP_DAYS || '365', 10) || 365);
const LIST_DAYS = Math.max(1, parseInt(process.env.LIST_DAYS || '14', 10) || 14);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const REPO = 'BaptisteBlouin/tech-brief';
const BADGE = `[![Tech Brief](https://github.com/${REPO}/actions/workflows/veille.yml/badge.svg)](https://github.com/${REPO}/actions/workflows/veille.yml)`;

const LANGS = {
  en: {
    file: 'README.md',
    title: 'Tech Brief',
    tagline: 'Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.',
    autopub: (url) => `📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](${url})** — generated twice a day, no human in the loop.`,
    cadence: `Updated twice a day · full archive kept in the repo.`,
    other: '🇫🇷 [Version française](README_fr.md)',
    latest: 'Latest digest',
    recap: (from, to) => `Weekly recap (${from} → ${to})`,
    updated: 'updated',
    sources: 'Sources',
    empty: 'No news for this day.',
    archiveTitle: 'Recent archive',
    archiveHint: `One file per day — the latest ${LIST_DAYS} are shown below.`,
    veille: `${SITE_URL}/veille.en.html`,
    footer: (url) => `Auto‑generated twice a day · source: [live tech‑watch](${url})`,
    archiveHeader: (date) => `Tech Brief — ${date}`,
    backToReadme: '← Back to the latest digest',
    thDay: 'Day',
    read: 'Read',
    weeklyTag: '🗓️ Weekly recap',
    fullHistory: 'Browse the full archive',
    indexTitle: 'Archive',
    indexHint: (n) => `${n} daily digest${n > 1 ? 's' : ''} archived · newest first.`,
    navAll: '🗂 All archives',
  },
  fr: {
    file: 'README_fr.md',
    title: 'Tech Brief',
    tagline: 'Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.',
    autopub: (url) => `📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](${url})** — générées deux fois par jour, sans intervention humaine.`,
    cadence: `Mis à jour 2×/jour · archive complète conservée dans le dépôt.`,
    other: '🇬🇧 [English version](README.md)',
    latest: 'Dernier digest',
    recap: (from, to) => `Récap de la semaine (du ${from} au ${to})`,
    updated: 'mis à jour le',
    sources: 'Sources',
    empty: 'Aucune actualité pour ce jour.',
    archiveTitle: 'Archive récente',
    archiveHint: `Un fichier par jour — les ${LIST_DAYS} derniers sont affichés ci‑dessous.`,
    veille: `${SITE_URL}/veille.html`,
    footer: (url) => `Généré automatiquement 2×/jour · source : [veille en direct](${url})`,
    archiveHeader: (date) => `Tech Brief — ${date}`,
    backToReadme: '← Retour au dernier digest',
    thDay: 'Jour',
    read: 'Lire',
    weeklyTag: '🗓️ Récap hebdo',
    fullHistory: 'Parcourir toute l’archive',
    indexTitle: 'Archive',
    indexHint: (n) => `${n} digest${n > 1 ? 's' : ''} quotidien${n > 1 ? 's' : ''} archivé${n > 1 ? 's' : ''} · du plus récent au plus ancien.`,
    navAll: '🗂 Toutes les archives',
  },
};

const PARIS_WD = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
// Jour de semaine Paris (1=lundi … 7=dimanche) d'un dayKey 'YYYY-MM-DD'.
function parisWeekday(dayKey) {
  const wd = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Paris', weekday: 'short' })
    .format(new Date(`${dayKey}T12:00:00Z`));
  return PARIS_WD[wd] || 1;
}

// Le dimanche, la « news du jour » est le récap hebdo (Lun→Dim) : on le signale dans l'archive.
const isWeekly = (dayKey) => parisWeekday(dayKey) === 7;
const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const locale = (lang) => (lang === 'fr' ? 'fr-FR' : 'en-GB');
// Libellé localisé (Europe/Paris) d'un dayKey 'YYYY-MM-DD'.
const intlDate = (dayKey, lang, opts) =>
  new Intl.DateTimeFormat(locale(lang), { timeZone: 'Europe/Paris', ...opts }).format(new Date(`${dayKey}T12:00:00Z`));
const weekdayLabel = (dayKey, lang) => cap(intlDate(dayKey, lang, { weekday: 'long' }));
const monthLabel = (dayKey, lang) => cap(intlDate(dayKey, lang, { month: 'long', year: 'numeric' }));
// Cellule « jour » d'une ligne de tableau : récap hebdo signalé, sinon le nom du jour.
const dayCell = (dayKey, lang) => (isWeekly(dayKey) ? LANGS[lang].weeklyTag : weekdayLabel(dayKey, lang));

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
  })
  // Fusionne les renvois collés (`[1][2][3]` → un seul exposant `1, 2, 3`) : sinon
  // les `<sup>` adjacents se rendent « ¹²³ » sans séparateur lisible.
  .replace(/<\/sup><sup>/g, ', ');
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

// Toutes les dates d'archive présentes pour une langue (récent → ancien).
function allArchiveDates(lang) {
  const dir = join(ROOT, 'news', lang);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md') && DATE_RE.test(f.slice(0, 10)))
    .map((f) => f.slice(0, 10))
    .sort().reverse();
}

// Dates listées dans le README (bornées à LIST_DAYS ; l'index d'archive, lui, liste tout).
const archiveDates = (lang) => allArchiveDates(lang).slice(0, LIST_DAYS);

// Tableau Markdown « date · jour · lien » pour une liste de dates (base = préfixe de lien).
function archiveTable(lang, dates, base) {
  const L = LANGS[lang];
  const rows = dates.map((dt) => `| \`${dt}\` | ${dayCell(dt, lang)} | [${L.read} →](${base}${dt}.md) |`);
  return [`| Date | ${L.thDay} | |`, '|:--|:--|--:|', ...rows].join('\n');
}

function buildReadme(lang, d) {
  const L = LANGS[lang];
  const { text, sources } = digestBody(d, lang);
  const dates = archiveDates(lang);
  const all = allArchiveDates(lang);
  const more = all.length > dates.length
    ? `\n\n<sub>[${L.fullHistory} (${all.length}) →](news/${lang}/)</sub>`
    : '';
  const archive = dates.length
    ? `\n## ${L.archiveTitle}\n\n_${L.archiveHint}_\n\n${archiveTable(lang, dates, `news/${lang}/`)}${more}\n`
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
    // Navigation préc./suiv. remplie par refreshArchiveNav() une fois les voisins connus.
    NAV_START,
    NAV_END,
    '',
    `<sub>[${L.backToReadme}](../../${L.file})</sub>`,
    '',
  ].join('\n');
}

const NAV_START = '<!-- NAV:START -->';
const NAV_END = '<!-- NAV:END -->';

// Ligne de navigation d'un fichier d'archive : ⟵ jour plus ancien · toutes les archives · jour plus récent ⟶.
function navLine(lang, older, newer) {
  const L = LANGS[lang];
  const parts = [];
  if (older) parts.push(`[⟵ ${older}](${older}.md)`);
  parts.push(`[${L.navAll}](./)`);
  if (newer) parts.push(`[${newer} ⟶](${newer}.md)`);
  return `<sub>${parts.join(' · ')}</sub>`;
}

// (Re)calcule les liens préc./suiv. de chaque fichier d'archive à partir des dates présentes
// sur le disque (pur local, sans réseau) et ne réécrit que les fichiers dont la nav change.
function refreshArchiveNav(lang) {
  const dir = join(ROOT, 'news', lang);
  const dates = allArchiveDates(lang); // récent → ancien
  for (let i = 0; i < dates.length; i++) {
    const file = join(dir, `${dates[i]}.md`);
    const cur = readFileSync(file, 'utf8');
    if (!cur.includes(NAV_START)) continue; // ancien format sans marqueurs : ignoré
    const block = `${NAV_START}\n${navLine(lang, dates[i + 1], dates[i - 1])}\n${NAV_END}`;
    const next = cur.replace(new RegExp(`${NAV_START}[\\s\\S]*?${NAV_END}`), block);
    if (next !== cur) writeFileSync(file, next);
  }
}

// Page d'index de l'archive (news/<lang>/README.md) : toutes les dates, groupées par mois.
// GitHub l'affiche à l'ouverture du dossier → une page unique qui lie tout l'historique.
function writeArchiveIndex(lang) {
  const L = LANGS[lang];
  const dates = allArchiveDates(lang);
  const dir = join(ROOT, 'news', lang);
  if (!existsSync(dir)) return;
  if (!dates.length) return;
  const groups = [];
  for (const dt of dates) {
    const m = monthLabel(dt, lang);
    if (!groups.length || groups[groups.length - 1].month !== m) groups.push({ month: m, rows: [] });
    groups[groups.length - 1].rows.push(dt);
  }
  const sections = groups
    .map((g) => `### ${g.month}\n\n${archiveTable(lang, g.rows, '')}`)
    .join('\n\n');
  const content = [
    `# ${L.title} — ${L.indexTitle}`,
    '',
    `<sub>${L.indexHint(dates.length)}</sub>`,
    '',
    sections,
    '',
    '---',
    `<sub>[${L.backToReadme}](../../${L.file})</sub>`,
    '',
  ].join('\n');
  writeFileSync(join(dir, 'README.md'), content);
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

  // Nav préc./suiv. + page d'index de l'archive : recalculées à chaque run (local, idempotent)
  // pour que tout fichier reste crawlable même une fois sorti des LIST_DAYS listées au README.
  for (const lang of Object.keys(LANGS)) {
    refreshArchiveNav(lang);
    writeArchiveIndex(lang);
    writeFileSync(join(ROOT, LANGS[lang].file), buildReadme(lang, latest));
  }
  console.log(`README régénéré (${latest.weekly ? 'récap hebdo' : 'digest'} ${dayKey}, ${latest.count || 0} sources).`);
}

main().catch((e) => { console.error(e); process.exit(1); });
