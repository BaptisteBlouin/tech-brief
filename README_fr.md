# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-08-04
<sub>mis à jour le 4 août 2026 à 13:00</sub>

## AI Models & Capabilities
- Alibaba’s Qwen releases Qwen 3.8 Max (2.4T) and 27B open-weight models, with autonomous long-horizon coding (10+ days unattended), self-evolving research loops, and competitive data science performance; API pricing is $2/$6 per M tokens input/output, with open weights promised <sup>[1](<https://www.latent.space/p/ainews-qwen-38-max24t-and-27b-new>)</sup>.
- Steve Yegge reports his "Gas Town" agent system broke with Opus 4.7 due to a persistent "just two more things" behavior preventing task convergence, illustrating agentic model reliability challenges <sup>[2](<https://simonwillison.net/2026/Aug/4/steve-yegge/#atom-everything>)</sup>.

## LLM Tooling & Agents
- GitHub Copilot cloud agent now supports configurable reasoning levels for models that expose it, trading higher quality for token/credit cost; available on Pro/Pro+/Business/Enterprise/Max plans <sup>[3](<https://github.blog/changelog/2026-08-03-customize-the-reasoning-level-for-copilot-cloud-agent>)</sup>.
- Cloudflare introduces Cloudflare Computer: a virtual file system in a Durable Object with SQLite state and pluggable execution (isolate/container/browser) to optimize agent efficiency and scalability <sup>[4](<https://blog.cloudflare.com/cloudflare-computer/>)</sup>.
- OpenRouter launches Ori Eval to help users benchmark and select the best model for their use case <sup>[5](<https://openrouter.ai/ori/eval>)</sup>.

## MLOps & Governance
- GitHub adds enterprise team specialization for managed settings, letting admins mark keys as overridable so teams can tailor Copilot governance without central bottlenecks <sup>[6](<https://github.blog/changelog/2026-08-03-enterprise-team-specialization-for-managed-settings>)</sup>.
- The Linux Foundation’s Tokenomics Foundation aims to standardize AI cost/benefit metrics (energy per token, model selection, token usage) to bring transparency to enterprise AI spending <sup>[7](<https://www.nytimes.com/2026/08/03/business/economy/ai-spending-tokenomics.html?unlocked_article_code=1.21A.BmOO.lBmFxXLGMXVE&smid=url-share>)</sup>.

## Developer & Engineering Practices
- Niklas Gruhn coins "meat proxy" to criticize blindly relaying AI output; emphasizes reading, validating, and rewriting in one’s own words as added value <sup>[8](<https://simonwillison.net/2026/Aug/3/dont-be-a-meat-proxy/#atom-everything>)</sup>.
- Sean Goedecke argues domain expertise remains critical for effective prompting, as it enables better problem framing and solution recognition <sup>[9](<https://www.seangoedecke.com/llms-reward-expertise/>)</sup>.
- curl maintainers share lessons from a month-long pause in vulnerability reporting, reflecting on sustainability in OSS maintenance <sup>[10](<https://daniel.haxx.se/blog/2026/08/03/what-the-bliss-taught-us/>)</sup>.

## Industry & Strategy
- OpenAI publicly rebuts Apple’s lawsuit, providing documentation to counter claims about employee conduct <sup>[11](<https://openai.com/index/apple-is-getting-this-wrong>)</sup>.
- Akash Bajwa analyzes vertical integration trends: model labs build apps to compete with customers, while agent labs move into model training to co-design intelligence per dollar at better margins <sup>[12](<https://www.akashbajwa.co/p/the-endgame-of-vertical-integration>)</sup>.
- a16z contends AI in drug discovery will accelerate failure generation without deeper biological measurement and insight, not serve as a "magic wand" <sup>[13](<https://www.a16z.news/p/drug-discovery-has-no-magic-wands>)</sup>.

## Sources

1. [\[AINews\] Qwen 3.8 Max(2.4T) and 27B, new open weights models for Coding and Cowork](<https://www.latent.space/p/ainews-qwen-38-max24t-and-27b-new>) — _latent.space_
2. [Quoting Steve Yegge](<https://simonwillison.net/2026/Aug/4/steve-yegge/#atom-everything>) — _simonwillison.net_
3. [Customize the reasoning level for Copilot cloud agent](<https://github.blog/changelog/2026-08-03-customize-the-reasoning-level-for-copilot-cloud-agent>) — _github.blog_
4. [Cloudflare Computer](<https://blog.cloudflare.com/cloudflare-computer/>) — _blog.cloudflare.com_
5. [Ori Eval (Website)](<https://openrouter.ai/ori/eval>) — _openrouter.ai_
6. [Enterprise team specialization for managed settings](<https://github.blog/changelog/2026-08-03-enterprise-team-specialization-for-managed-settings>) — _github.blog_
7. [What Are Companies Getting for All That AI Spending?](<https://www.nytimes.com/2026/08/03/business/economy/ai-spending-tokenomics.html?unlocked_article_code=1.21A.BmOO.lBmFxXLGMXVE&smid=url-share>) — _nytimes.com_
8. [Don't be a meat proxy](<https://simonwillison.net/2026/Aug/3/dont-be-a-meat-proxy/#atom-everything>) — _simonwillison.net_
9. [LLMs reward expertise](<https://www.seangoedecke.com/llms-reward-expertise/>) — _seangoedecke.com_
10. [What the bliss taught us](<https://daniel.haxx.se/blog/2026/08/03/what-the-bliss-taught-us/>) — _daniel.haxx.se_
11. [Apple is getting this wrong](<https://openai.com/index/apple-is-getting-this-wrong>) — _openai.com_
12. [The Endgame Of Vertical Integration](<https://www.akashbajwa.co/p/the-endgame-of-vertical-integration>) — _akashbajwa.co_
13. [Drug Discovery Has No Magic Wands](<https://www.a16z.news/p/drug-discovery-has-no-magic-wands>) — _a16z.news_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-08-03` | Lundi | [Lire →](news/fr/2026-08-03.md) |
| `2026-08-02` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-08-02.md) |
| `2026-08-01` | Samedi | [Lire →](news/fr/2026-08-01.md) |
| `2026-07-31` | Vendredi | [Lire →](news/fr/2026-07-31.md) |
| `2026-07-30` | Jeudi | [Lire →](news/fr/2026-07-30.md) |
| `2026-07-29` | Mercredi | [Lire →](news/fr/2026-07-29.md) |
| `2026-07-28` | Mardi | [Lire →](news/fr/2026-07-28.md) |
| `2026-07-27` | Lundi | [Lire →](news/fr/2026-07-27.md) |
| `2026-07-26` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-07-26.md) |
| `2026-07-25` | Samedi | [Lire →](news/fr/2026-07-25.md) |
| `2026-07-24` | Vendredi | [Lire →](news/fr/2026-07-24.md) |
| `2026-07-23` | Jeudi | [Lire →](news/fr/2026-07-23.md) |
| `2026-07-22` | Mercredi | [Lire →](news/fr/2026-07-22.md) |
| `2026-07-21` | Mardi | [Lire →](news/fr/2026-07-21.md) |

<sub>[Parcourir toute l’archive (50) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
