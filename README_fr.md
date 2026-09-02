# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-09-02
<sub>mis à jour le 2 septembre 2026 à 13:00</sub>

## AI/ML Models & Benchmarks
- Anthropic releases **Claude Fable 5.1** and **Mythos 5.1**, with Fable 5.1 GA and Mythos 5.1 in restricted access; Fable cache reads drop **75% in price**, though output token usage rises ~70%, leading to a net **~20% per-task cost increase** for long sessions <sup>[1](<https://www.latent.space/p/ainews-claude-fablemythos-51-new>), [2](<https://venturebeat.com/technology/anthropics-claude-fable-5-1-and-mythos-5-1-arrive-with-a-75-cost-reduction-for-fable-cache-reads>)</sup>. Fable 5.1 sets new SOTA on coding/knowledge benchmarks and scores **52.6% on Terminal-Bench-Science 0.1** (vs. 24.7% for Fable 5) <sup>[1](<https://www.latent.space/p/ainews-claude-fablemythos-51-new>), [3](<https://simonwillison.net/2026/Sep/1/claude-fable-5-1/>)</sup>.
- Google prepares a new **Flash model** (smaller, cheaper, faster) that internal testers prefer over Anthropic’s Opus for coding, narrowing the gap; Pro series update is delayed due to insufficient gains over Flash <sup>[4](<https://www.wsj.com/tech/ai/new-google-ai-model-said-to-narrow-gap-on-coding-ability-264c6052?st=TqBXaT&reflink=desktopwebshare_permalink>)</sup>.
- Google introduces **agentic video understanding with Gemini**, cutting token use by **up to 88%**, costs by **up to 66%**, and improving quality by **up to 7%** <sup>[5](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/>)</sup>.

## LLM Tooling & Agents
- **Agentic testing** emerges: developers set goals, agents autonomously iterate (look → act → look), with Meta reporting only ~25% of outputs retained but the loop still effective due to automatic discard of failures <sup>[6](<https://theaiengineer.substack.com/p/what-is-agentic-testing-fa2>)</sup>.
- **Android Studio Quail 4** integrates **Gemma 4** and supports **23 curated skills** plus custom skills to extend Agent Mode for specialized workflows <sup>[7](<https://android-developers.googleblog.com/2026/09/leverage-gemma-4-android-studio-quail.html>)</sup>.
- Analysis of **MCP (Model Context Protocol) "tax"**: schema fetching can add hidden costs per server before the first prompt; Claude Code defers schema loads until tool use, reducing overhead <sup>[8](<https://okaneland.com/study/the-mcp-context-tax/>)</sup>.

## MLOps & Engineering Insights
- **Type systems as search oracles**: Models excel more in **Rust/Lean** than C++ due to stricter compilers (Rust) and cheap verifiers (Lean), which constrain search space and improve correctness <sup>[9](<https://hiraditya.github.io/posts/a-type-system-is-a-search-oracle/>)</sup>.
- **Small models catching up**: Reasoning performance of smaller LLMs is improving rapidly, though large models remain dominant for now <sup>[10](<https://blog.dshr.org/2026/09/small-is-beautiful.html>)</sup>.

## DevOps & Infrastructure
- **GitHub Enterprise Live Migrations (ELM)** from GHES to GitHub Enterprise Cloud (with Data Residency) is now **GA**, enabling near-zero-downtime migrations for large monorepos with continuous sync and cutover in minutes <sup>[11](<https://github.blog/changelog/2026-09-01-enterprise-live-migrations-from-ghes-to-ghe-com-generally-available>)</sup>.
- **Apple simplifies dropping Intel support** for macOS developers by easing the transition to arm64-only builds, reducing testing and binary footprint <sup>[12](<https://reverseeverything.com/blog/apple-makes-it-easier-for-mac-developers-to-drop-intel-support/>)</sup>.

## Notable Developer Tooling
- **Paint.NET** adds **internal, clean-room Direct2D rewrite** for WINE compatibility, authored by Claude; the 180K-line implementation is "vibe coded" and unreviewed but functional <sup>[13](<https://simonwillison.net/2026/Sep/2/rick-brewster/>)</sup>.

## Sources

1. [\[AINews\] Claude Fable/Mythos 5.1: new SOTA model, 75% cache price cut but 70% more output tokens](<https://www.latent.space/p/ainews-claude-fablemythos-51-new>) — _latent.space_
2. [Anthropic's Claude Fable 5.1 and Mythos 5.1 arrive with a 75% cost reduction for Fable cache reads](<https://venturebeat.com/technology/anthropics-claude-fable-5-1-and-mythos-5-1-arrive-with-a-75-cost-reduction-for-fable-cache-reads>) — _venturebeat.com_
3. [Claude Fable 5.1 made me a really nice animated pelican](<https://simonwillison.net/2026/Sep/1/claude-fable-5-1/>) — _simonwillison.net_
4. [New Google AI Model Said to Narrow Gap on Coding Ability](<https://www.wsj.com/tech/ai/new-google-ai-model-said-to-narrow-gap-on-coding-ability-264c6052?st=TqBXaT&reflink=desktopwebshare_permalink>) — _wsj.com_
5. [Introducing agentic video understanding with Gemini](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-agentic-video-in-gemini/>) — _blog.google_
6. [What is Agentic Testing?](<https://theaiengineer.substack.com/p/what-is-agentic-testing-fa2>) — _theaiengineer.substack.com_
7. [Leverage Android skills and Gemma 4 in Android Studio Quail 4](<https://android-developers.googleblog.com/2026/09/leverage-gemma-4-android-studio-quail.html>) — _android-developers.googleblog.com_
8. [The MCP tax: what each server costs before your first prompt](<https://okaneland.com/study/the-mcp-context-tax/>) — _okaneland.com_
9. [A Type System Is a Search Oracle](<https://hiraditya.github.io/posts/a-type-system-is-a-search-oracle/>) — _hiraditya.github.io_
10. [Small Is Beautiful](<https://blog.dshr.org/2026/09/small-is-beautiful.html>) — _blog.dshr.org_
11. [Enterprise Live Migrations from GHES to ghe.com generally available](<https://github.blog/changelog/2026-09-01-enterprise-live-migrations-from-ghes-to-ghe-com-generally-available>) — _github.blog_
12. [Apple Makes It Easier for Mac Developers to Drop Intel Support](<https://reverseeverything.com/blog/apple-makes-it-easier-for-mac-developers-to-drop-intel-support/>) — _reverseeverything.com_
13. [Quoting Rick Brewster](<https://simonwillison.net/2026/Sep/2/rick-brewster/>) — _simonwillison.net_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-09-01` | Mardi | [Lire →](news/fr/2026-09-01.md) |
| `2026-08-31` | Lundi | [Lire →](news/fr/2026-08-31.md) |
| `2026-08-30` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-08-30.md) |
| `2026-08-29` | Samedi | [Lire →](news/fr/2026-08-29.md) |
| `2026-08-28` | Vendredi | [Lire →](news/fr/2026-08-28.md) |
| `2026-08-27` | Jeudi | [Lire →](news/fr/2026-08-27.md) |
| `2026-08-26` | Mercredi | [Lire →](news/fr/2026-08-26.md) |
| `2026-08-25` | Mardi | [Lire →](news/fr/2026-08-25.md) |
| `2026-08-24` | Lundi | [Lire →](news/fr/2026-08-24.md) |
| `2026-08-23` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-08-23.md) |
| `2026-08-22` | Samedi | [Lire →](news/fr/2026-08-22.md) |
| `2026-08-21` | Vendredi | [Lire →](news/fr/2026-08-21.md) |
| `2026-08-20` | Jeudi | [Lire →](news/fr/2026-08-20.md) |
| `2026-08-19` | Mercredi | [Lire →](news/fr/2026-08-19.md) |

<sub>[Parcourir toute l’archive (79) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
