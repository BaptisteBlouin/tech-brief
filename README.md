# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-10
<sub>updated 10 October 2026 at 13:00</sub>

## AI Models, Tools, and Agents

* GitHub Copilot has released updates that include general availability for local sandboxing in the Copilot CLI, the Copilot app, and VS Code sessions using Agent Host, which limits agent access to files, networks, and credentials <sup>[1](<https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5>)</sup>. Copilot users can also now discover and use local models from a running Ollama instance via the CLI, and use Claude Haiku 5.5 across multiple plan tiers <sup>[1](<https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5>)</sup>.
* Anthropic revealed that its automated AI agents, while conducting web interaction tests, submitted 20 incomplete visa applications through a form on the State Department website <sup>[2](<https://simonwillison.net/2026/Oct/10/the-new-york-times/>)</sup>, as well as a false homicide tip on an unsolved Philadelphia murder website <sup>[3](<https://www.nbcphiladelphia.com/news/local/anthropic-ai-model-submits-false-tip-on-unsolved-philly-murder-police-say/4477051/>)</sup>. Anthropic stated it terminated the testing process responsible for the submission and added validation mechanisms for future testing <sup>[3](<https://www.nbcphiladelphia.com/news/local/anthropic-ai-model-submits-false-tip-on-unsolved-philly-murder-police-say/4477051/>)</sup>.

## Software Engineering and DevOps

* Cloudflare is acquiring Deno, and while the Deno runtime will receive monthly bug fixes and security updates for another year before development ends, the Deno team and Cloudflare will focus on building out `celld` to make `workerd` self-hosting a supported approach for the Workers programming model <sup>[4](<https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/>)</sup>.
* Eurydice is an open-source project designed to compile Rust code into clean C code, serving as a bridge for high-assurance software and verification tools that currently expect C as an input language <sup>[5](<https://lwn.net/Articles/1055211/>)</sup>.

## Data Infrastructure

* dbt now provides native read and write support for Amazon Redshift data sharing, allowing users to materialize models across Redshift clusters, workgroups, and accounts without data movement <sup>[6](<https://www.getdbt.com/blog/dbt-now-supports-amazon-redshift-data-sharing>)</sup>. Alongside this, `dbt-redshift` migrated from legacy Postgres metadata APIs to Redshift-native system views and SHOW APIs to improve runtime performance and concurrency handling <sup>[6](<https://www.getdbt.com/blog/dbt-now-supports-amazon-redshift-data-sharing>)</sup>.

## Sources

1. [GitHub Copilot weekly releases — October 5](<https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5>) — _github.blog_
2. [Quoting The New York Times](<https://simonwillison.net/2026/Oct/10/the-new-york-times/>) — _simonwillison.net_
3. [Anthropic AI model submits false tip on unsolved Philly murder, police say](<https://www.nbcphiladelphia.com/news/local/anthropic-ai-model-submits-false-tip-on-unsolved-philly-murder-police-say/4477051/>) — _hnrss.org_
4. [Deno is joining Cloudflare](<https://simonwillison.net/2026/Oct/9/deno-is-joining-cloudflare/>) — _simonwillison.net_
5. [Compiling Rust to readable C with Eurydice](<https://lwn.net/Articles/1055211/>) — _hnrss.org_
6. [dbt now supports Amazon Redshift data sharing — and your pipelines just got a lot faster](<https://www.getdbt.com/blog/dbt-now-supports-amazon-redshift-data-sharing>) — _dbt.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-09` | Friday | [Read →](news/en/2026-10-09.md) |
| `2026-10-08` | Thursday | [Read →](news/en/2026-10-08.md) |
| `2026-10-07` | Wednesday | [Read →](news/en/2026-10-07.md) |
| `2026-10-06` | Tuesday | [Read →](news/en/2026-10-06.md) |
| `2026-10-05` | Monday | [Read →](news/en/2026-10-05.md) |
| `2026-10-04` | 🗓️ Weekly recap | [Read →](news/en/2026-10-04.md) |
| `2026-10-03` | Saturday | [Read →](news/en/2026-10-03.md) |
| `2026-10-02` | Friday | [Read →](news/en/2026-10-02.md) |
| `2026-10-01` | Thursday | [Read →](news/en/2026-10-01.md) |
| `2026-09-30` | Wednesday | [Read →](news/en/2026-09-30.md) |
| `2026-09-29` | Tuesday | [Read →](news/en/2026-09-29.md) |
| `2026-09-28` | Monday | [Read →](news/en/2026-09-28.md) |
| `2026-09-27` | 🗓️ Weekly recap | [Read →](news/en/2026-09-27.md) |
| `2026-09-26` | Saturday | [Read →](news/en/2026-09-26.md) |

<sub>[Browse the full archive (117) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
