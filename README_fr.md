# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-08-05
<sub>mis à jour le 5 août 2026 à 13:00</sub>

## AI/ML Models and Inference Engineering
- A heated debate resurfaces on "megakernels" for LLM inference: industry consensus now leans against hand-fused, monolithic kernels due to launch overhead, poor inter-kernel overlap, and maintenance costs, with modern schedulers (e.g., Rubin) mitigating straggler issues; production teams have largely abandoned 67k+ LoC fused kernels in favor of modular, maintainable approaches <sup>[1](<https://www.latent.space/p/ainews-megakernels-are-so-dead-and>)</sup>.
- Samsung unveils a 3D-memory roadmap stacking high-bandwidth memory atop AI accelerators, promising ~8× performance and >10× memory density over next-gen HBM5, with HBM4 production ramping in H2 this year <sup>[2](<https://www.bloomberg.com/news/articles/2026-08-04/samsung-reveals-new-3d-memory-roadmap-in-bid-for-ai-tech-lead?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NTkwMzQyMSwiZXhwIjoxNzg2NTA4MjIxLCJhcnRpY2xlSWQiOiJUSjhERDBUOTZPU0kwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.h-YH7o7y2_XAdi0tBGuWt_l6dwNblUeWTuDdoKpmBig>)</sup>.

## LLM Tooling and Developer Experience
- LLM CLI v0.32 adds visible reasoning traces (streamed to stderr), server-side provider tools, content-addressable SQLite logs, and OpenAI Responses API support; reasoning can be hidden with `-R/--hide-reasoning` <sup>[3](<https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything>)</sup>.
- The `llm-anthropic` plugin v0.26 introduces new models (`claude-fable-5`, `claude-sonnet-5`, `claude-opus-5`) and server-side tools (`WebSearch`, `WebFetch`, `CodeExecution`, `AnthropicMCP`), accessed via `-T` or Python `tools=`; legacy `-o web_search*` options are deprecated <sup>[4](<https://simonwillison.net/2026/Aug/4/llm-anthropic/#atom-everything>)</sup>.
- Microsoft curbs internal AI usage, telling engineers that "tokenmaxxing" (excessive token spend) is not an optimization goal and imposing new limits <sup>[5](<https://www.404media.co/microsoft-tells-engineers-tokenmaxxing-is-not-what-we-are-optimizing-for/>)</sup>.

## MLOps, DevOps, and Engineering Practices
- GitHub advocates "stacked pull requests" to decompose large AI-generated PRs into small, focused, independently reviewable layers, improving maintainability and review efficiency <sup>[6](<https://github.blog/engineering/turn-one-giant-ai-generated-pull-request-to-a-reviewable-stack/>)</sup>.
- Cloudflare introduces Codex, a governed repository of engineering standards that both humans and agents can retrieve and apply during code review, design review, and incident analysis to enforce consistency at the point of work <sup>[7](<https://blog.cloudflare.com/engineering-standards-enforcement/>)</sup>.
- A deep dive into GitHub Codex reveals the exact context and data it sends to the model, clarifying how the system operates under the hood <sup>[8](<https://www.0xkato.xyz/what-codex-actually-sends-to-the-model>)</sup>.

## Cloud and Infrastructure
- SpaceX outlines plans to compete with US mobile carriers by combining satellite internet with land-based infrastructure, requiring billions in investment; incumbents (AT&T, Verizon, T-Mobile) have blocked MVNO access and formed their own satellite venture <sup>[9](<https://www.bloomberg.com/news/articles/2026-08-04/spacex-flags-big-ambitions-to-take-on-at-t-verizon-and-t-mobile?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NTkwMzQwOSwiZXhwIjoxNzg2NTA4MjA5LCJhcnRpY2xlSWQiOiJUSjlMSTJLSzNOWTkwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.Xejyk_lnSA_ak4mhXMSQyl1UHCDD5vvfJVCm74Tqh2o>)</sup>.
- Starlink reaches 12M subscribers and prepares to deploy gigabit-capable V3 satellites into operational orbit on the next Starship test flight <sup>[10](<https://www.pcmag.com/news/starlink-hits-12-million-subscribers-v3-satellites-headed-to-operational>)</sup>.

## Agentic Workflows and RAG
- LLM 0.32 and `llm-anthropic` 0.26 enable server-side tools (e.g., web search, code execution) and structured reasoning traces, improving transparency and tool use in agentic workflows <sup>[3](<https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything>), [4](<https://simonwillison.net/2026/Aug/4/llm-anthropic/#atom-everything>)</sup>.

## Sources

1. [\[AINews\] Megakernels are so dead and so back](<https://www.latent.space/p/ainews-megakernels-are-so-dead-and>) — _latent.space_
2. [Samsung Reveals New 3D-Memory Roadmap in Bid for AI Tech Lead](<https://www.bloomberg.com/news/articles/2026-08-04/samsung-reveals-new-3d-memory-roadmap-in-bid-for-ai-tech-lead?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NTkwMzQyMSwiZXhwIjoxNzg2NTA4MjIxLCJhcnRpY2xlSWQiOiJUSjhERDBUOTZPU0kwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.h-YH7o7y2_XAdi0tBGuWt_l6dwNblUeWTuDdoKpmBig>) — _bloomberg.com_
3. [New release of LLM adds support for reasoning traces, OpenAI Responses, server-side tools, and smarter logging](<https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything>) — _simonwillison.net_
4. [llm-anthropic 0.26](<https://simonwillison.net/2026/Aug/4/llm-anthropic/#atom-everything>) — _simonwillison.net_
5. [Microsoft Tells Engineers ‘Tokenmaxxing Is Not What We Are Optimizing For'](<https://www.404media.co/microsoft-tells-engineers-tokenmaxxing-is-not-what-we-are-optimizing-for/>) — _404media.co_
6. [Turn one giant AI-generated pull request to a reviewable stack](<https://github.blog/engineering/turn-one-giant-ai-generated-pull-request-to-a-reviewable-stack/>) — _github.blog_
7. [How Cloudflare enforces engineering standards using AI](<https://blog.cloudflare.com/engineering-standards-enforcement/>) — _blog.cloudflare.com_
8. [What Codex Actually Sends to the Model](<https://www.0xkato.xyz/what-codex-actually-sends-to-the-model>) — _0xkato.xyz_
9. [SpaceX Outlines Plans to Take On AT&T, Verizon, and T-Mobile](<https://www.bloomberg.com/news/articles/2026-08-04/spacex-flags-big-ambitions-to-take-on-at-t-verizon-and-t-mobile?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NTkwMzQwOSwiZXhwIjoxNzg2NTA4MjA5LCJhcnRpY2xlSWQiOiJUSjlMSTJLSzNOWTkwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.Xejyk_lnSA_ak4mhXMSQyl1UHCDD5vvfJVCm74Tqh2o>) — _bloomberg.com_
10. [Starlink Hits 12 Million Subscribers, V3 Satellites Headed to Operational Orbit](<https://www.pcmag.com/news/starlink-hits-12-million-subscribers-v3-satellites-headed-to-operational>) — _pcmag.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-08-04` | Mardi | [Lire →](news/fr/2026-08-04.md) |
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

<sub>[Parcourir toute l’archive (51) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
