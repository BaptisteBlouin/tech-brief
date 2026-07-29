# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-07-29
<sub>mis à jour le 29 juillet 2026 à 13:00</sub>

## AI/ML Frontiers and Safety
- Over 1,000 employees from major frontier labs (OpenAI, Anthropic, Google DeepMind, Meta, etc.) cosign a letter warning that AI progress may soon accelerate beyond human control, urging a measured pace in development <sup>[1](<https://www.latent.space/p/ainews-fearing-rsi-openai-anthropic>)</sup>.
- Anthropic’s Claude Mythos Preview autonomously discovers novel flaws in a weakened AES variant and HAWK, achieving attacks 200–1,000× faster than prior human research; verification took human researchers ~1 month <sup>[2](<https://simonwillison.net/2026/Jul/28/discovering-cryptographic-weaknesses-with-claude/#atom-everything>), [3](<https://www.nytimes.com/2026/07/28/us/politics/anthropic-ai-encryption-security-aes.html?unlocked_article_code=1.1VA.kWg5.C7htJ8NC3S5z&smid=url-share>)</sup>.
- Hugging Face details a machine-speed offensive cyberattack scenario, underscoring emerging AI-driven security threats <sup>[1](<https://www.latent.space/p/ainews-fearing-rsi-openai-anthropic>)</sup>.

## LLM Tooling, Agents, and RAG
- The Model Context Protocol (MCP) releases its largest update (2026-07-28): stateless design enables serverless/edge deployments and horizontal scaling; a formal extension path is now available <sup>[4](<https://threadreaderapp.com/thread/2082164248697069935.html>)</sup>.
- Martin Fowler introduces the "Orchestrator’s Tax": subagents should protect an orchestrator’s working memory by offloading reasoning, with explicit delegation rules <sup>[5](<https://martinfowler.com/articles/orchestrator-tax.html>)</sup>.
- DoorDash, Instacart, and Uber Eats integrate LLMs into search differently: offline knowledge-graph enrichment, query understanding, and fine-tuned embeddings for two-tower retrieval, respectively <sup>[6](<https://blog.bytebytego.com/p/why-doordash-instacart-and-uber-eats>)</sup>.

## MLOps, DevOps, and Security
- npm introduces publish-time malware scanning: new packages are scanned before availability, adding a ~5–15 minute delay; dual-use content now requires metadata <sup>[7](<https://github.blog/changelog/2026-07-28-npm-publish-time-malware-scanning-and-dual-use-metadata>)</sup>.
- GitHub Copilot app usage metrics expand: activity is now attributed per user in enterprise/organization reports and broken out in feature, model, and language rollups <sup>[8](<https://github.blog/changelog/2026-07-28-github-copilot-app-usage-metrics-now-expand-across-report-rollups>)</sup>.
- CodeQL 2.26.1 improves analysis accuracy with expanded framework coverage (Go log/slog, Java/Kotlin Apache POI, JS/TS Angular decorators) and reduced Rust false positives <sup>[9](<https://github.blog/changelog/2026-07-29-codeql-2-26-1-improves-analysis-accuracy-and-framework-coverage>)</sup>.
- Modal clarifies a recent incident: a customer’s unauthenticated endpoint exposed sandbox code execution to the internet; Modal’s platform and isolation were not compromised <sup>[10](<https://simonwillison.net/2026/Jul/28/akshat-bubna/#atom-everything>)</sup>.

## Cloud, Infrastructure, and Hardware
- The US FCC bans new imports of foreign-made (primarily Chinese) humanoid robots and grid inverters on national-security grounds <sup>[11](<https://thenextweb.com/news/fcc-covered-list-foreign-robots-inverters-china>)</sup>.

## Applied AI and Robotics
- Tau launches an invite-only humanoid cleaning service in San Francisco at $30/hour, with joint human-AI control <sup>[12](<https://threadreaderapp.com/thread/2082135074615763251.html>)</sup>.

## Sources

1. [\[AINews\] Fearing RSI: OpenAI, Anthropic, GDM, Meta, Thinky cosign letter to "Pace" AI development, as HuggingFace details Machine-Speed Offensive Cyberattack](<https://www.latent.space/p/ainews-fearing-rsi-openai-anthropic>) — _latent.space_
2. [Discovering cryptographic weaknesses with Claude](<https://simonwillison.net/2026/Jul/28/discovering-cryptographic-weaknesses-with-claude/#atom-everything>) — _simonwillison.net_
3. [Anthropic AI Model Finds Flaws in Tough-to-Crack Encryption Algorithms](<https://www.nytimes.com/2026/07/28/us/politics/anthropic-ai-encryption-security-aes.html?unlocked_article_code=1.1VA.kWg5.C7htJ8NC3S5z&smid=url-share>) — _nytimes.com_
4. [MCP 2026-07-28 is live](<https://threadreaderapp.com/thread/2082164248697069935.html>) — _threadreaderapp.com_
5. [The Orchestrator's Tax](<https://martinfowler.com/articles/orchestrator-tax.html>) — _martinfowler.com_
6. [Why DoorDash, Instacart, and Uber Eats Integrated LLMs Into Search Three Different Ways](<https://blog.bytebytego.com/p/why-doordash-instacart-and-uber-eats>) — _blog.bytebytego.com_
7. [npm publish-time malware scanning and dual-use metadata](<https://github.blog/changelog/2026-07-28-npm-publish-time-malware-scanning-and-dual-use-metadata>) — _github.blog_
8. [GitHub Copilot app usage metrics now expand across report rollups](<https://github.blog/changelog/2026-07-28-github-copilot-app-usage-metrics-now-expand-across-report-rollups>) — _github.blog_
9. [CodeQL 2.26.1 improves analysis accuracy and framework coverage](<https://github.blog/changelog/2026-07-29-codeql-2-26-1-improves-analysis-accuracy-and-framework-coverage>) — _github.blog_
10. [Quoting Akshat Bubna](<https://simonwillison.net/2026/Jul/28/akshat-bubna/#atom-everything>) — _simonwillison.net_
11. [The US just banned ‘foreign' robots and inverters, and it means China](<https://thenextweb.com/news/fcc-covered-list-foreign-robots-inverters-china>) — _thenextweb.com_
12. [Tau's humanoid cleaning service](<https://threadreaderapp.com/thread/2082135074615763251.html>) — _threadreaderapp.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-07-28` | Mardi | [Lire →](news/fr/2026-07-28.md) |
| `2026-07-27` | Lundi | [Lire →](news/fr/2026-07-27.md) |
| `2026-07-26` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-07-26.md) |
| `2026-07-25` | Samedi | [Lire →](news/fr/2026-07-25.md) |
| `2026-07-24` | Vendredi | [Lire →](news/fr/2026-07-24.md) |
| `2026-07-23` | Jeudi | [Lire →](news/fr/2026-07-23.md) |
| `2026-07-22` | Mercredi | [Lire →](news/fr/2026-07-22.md) |
| `2026-07-21` | Mardi | [Lire →](news/fr/2026-07-21.md) |
| `2026-07-20` | Lundi | [Lire →](news/fr/2026-07-20.md) |
| `2026-07-19` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-07-19.md) |
| `2026-07-18` | Samedi | [Lire →](news/fr/2026-07-18.md) |
| `2026-07-17` | Vendredi | [Lire →](news/fr/2026-07-17.md) |
| `2026-07-16` | Jeudi | [Lire →](news/fr/2026-07-16.md) |
| `2026-07-15` | Mercredi | [Lire →](news/fr/2026-07-15.md) |

<sub>[Parcourir toute l’archive (44) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
