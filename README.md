# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-15
<sub>updated 15 October 2026 at 13:00</sub>

## AI Infrastructure and Industry

- Modal says it has crossed $1B in annualized run rate and raised a $16B Series D, with usage and valuation tripling in five months <sup>[1](<https://www.latent.space/p/ainews-modals-1b-arr-16b-series-d>)</sup>.
- Cohere announced a proposed agreement to acquire AISLE, a company building autonomous systems to find and fix unknown software vulnerabilities, to strengthen its sovereign AI platform and European presence <sup>[2](<https://cohere.com/blog/cohere-and-aisle-sign-letter-of-intent-to-advance-cyber-resilient-sovereign-ai>)</sup>.
- Anthropic reportedly told investors its third-quarter revenue rose about 45% from the prior quarter to $16.8 billion, ahead of a possible IPO that could value it at $2 trillion <sup>[3](<https://www.nytimes.com/2026/10/14/technology/anthropic-ipo-revenue-profit.html>)</sup>.
- A Substack analysis says more than half of businesses now pay for AI and growth will increasingly come from deeper adoption rather than new customers <sup>[4](<https://econlab.substack.com/p/ai-index-oct-2026>)</sup>.

## LLM Tooling, RAG and Agents

- Jev's team reports it picked the right page first 88% of the time across 168 test questions, versus 70% for embedding search, and cut irrelevant results from 33% to 3% by answering "none" when no page fit <sup>[5](<https://sayora.ai/many-hands/jev-vs-embeddings/>)</sup>.
- Phoenix is an open-source, self-hosted observability platform that captures OpenTelemetry traces and offers retrieval and response evaluations, datasets, experiments and prompt replay for LLM applications <sup>[6](<https://github.com/Arize-ai/phoenix>)</sup>.
- XERJ is an Apache-2.0, Elasticsearch-compatible local search engine that auto-indexes code, logs, PDFs and CSVs for agent retrieval and RAG, with optional reranking that can send text to an external provider <sup>[7](<https://github.com/xerj-org/xerj>)</sup>.
- A proof of concept shows row-level security for Claude Dashboards via MCP, with an MCP server authenticating users and querying DuckDB so access rules apply before data reaches Claude <sup>[8](<https://thedatavist.substack.com/p/need-to-know-implementing-row-level>)</sup>.
- Docker's guide describes agent risks such as prompt injection, tool misuse and excessive autonomy, and argues for containing what an agent can reach and overseeing its actions <sup>[9](<https://www.docker.com/blog/ai-agent-security-risks/>)</sup>.
- Addy Osmani recommends agentic verification: end-to-end tests as ground truth, property-based testing to hunt for forbidden states, and fast deterministic tests so agents can retry reliably <sup>[10](<https://addyo.substack.com/p/agentic-verification>)</sup>.

## Model Serving and Inference Infrastructure

- Meta describes using opportunistic idle inference capacity to rank more ads or route requests to stronger models, scaling back quickly when that capacity disappears while protecting normal latency and reliability <sup>[11](<https://engineering.fb.com/2026/10/12/ml-applications/turning-opportunistic-ai-inference-capacity-into-better-ads-recommendations/>)</sup>.

## Data, Databases and DevOps

- A logical-replication walkthrough reports a PostgreSQL major upgrade with 181 ms of write interruption and 179 ms during rollback, with no data loss, using parallel old and new clusters <sup>[12](<https://tapoueh.org/blog/2026/10/zero-downtime-postgres-upgrades-with-logical-replication>)</sup>.
- SQLBuild is an open-source SQL and Python framework that checks contracts and lineage before execution and supports safe renames and production diffs across Snowflake, Postgres, BigQuery and Databricks <sup>[13](<https://github.com/chio-labs/sqlbuild>)</sup>.
- pg_vectorsearch is a PostgreSQL extension for approximate nearest neighbor search <sup>[14](<https://github.com/timescale/pg_vectorsearch>)</sup>.
- Benchmarks on 1,000 IDs found IN, ANY and VALUES joins performed similarly in PostgreSQL, so teams should verify with EXPLAIN on their own data <sup>[15](<https://explainmeasured.com/posts/arguments-that-came-out-even>)</sup>.

## Developer Practices and Tooling

- Jared Palmer argues that recognizing clean code remains useful, but knowing the right program shape before writing it is something AI cannot yet do <sup>[16](<https://jaredpalmer.com/blog/code-you-didnt-write>)</sup>.
- A benchmark processed 7.6 GB of JSON in about 0.12 seconds using fastsimdjson on free-threaded Python across 64 cores, roughly 66 GB/s, by parallelizing and building Python objects only for needed fields <sup>[17](<https://lemire.me/blog/2026/10/12/parsing-json-at-tens-of-gigabytes-per-second-in-python/>)</sup>.

## Sources

1. [\[AINews\] Modal’s $1B ARR, $16B Series D makes it NYC’s newest AI Infra Decacorn, 3x usage and 3x valuation in 5 months, 15x in 1 yr](<https://www.latent.space/p/ainews-modals-1b-arr-16b-series-d>) — _latent.space_
2. [Cohere and AISLE sign letter of intent to advance cyber-resilient sovereign AI](<https://cohere.com/blog/cohere-and-aisle-sign-letter-of-intent-to-advance-cyber-resilient-sovereign-ai>) — _cohere_
3. [Anthropic Says Revenue Jumped 45% to $16.8 Billion in Third Quarter](<https://www.nytimes.com/2026/10/14/technology/anthropic-ipo-revenue-profit.html>) — _nytimes.com_
4. [Cracks in the AI Thesis Part 3](<https://econlab.substack.com/p/ai-index-oct-2026>) — _econlab.substack.com_
5. [Jev handed our LLM the wrong page a tenth as often as our embeddings](<https://sayora.ai/many-hands/jev-vs-embeddings/>) — _sayora.ai_
6. [Phoenix](<https://github.com/Arize-ai/phoenix>) — _github.com_
7. [XERJ](<https://github.com/xerj-org/xerj>) — _github.com_
8. [Need to Know: Implementing row-level security for Claude Dashboards via Model Context Protocol](<https://thedatavist.substack.com/p/need-to-know-implementing-row-level>) — _thedatavist.substack.com_
9. [AI Agent Security Risks: What Can Go Wrong When Agents Act on Their Own](<https://www.docker.com/blog/ai-agent-security-risks/>) — _docker.com_
10. [Agentic Verification](<https://addyo.substack.com/p/agentic-verification>) — _addyo.substack.com_
11. [Turning Opportunistic AI Inference Capacity Into Better Ads Recommendations](<https://engineering.fb.com/2026/10/12/ml-applications/turning-opportunistic-ai-inference-capacity-into-better-ads-recommendations/>) — _engineering.fb.com_
12. [Zero-downtime Postgres upgrades with logical replication](<https://tapoueh.org/blog/2026/10/zero-downtime-postgres-upgrades-with-logical-replication>) — _tapoueh.org_
13. [SQLBuild: safe refactoring for warehouse SQL](<https://github.com/chio-labs/sqlbuild>) — _github.com_
14. [pg_vectorsearch](<https://github.com/timescale/pg_vectorsearch>) — _github.com_
15. [Four PostgreSQL arguments that came out even](<https://explainmeasured.com/posts/arguments-that-came-out-even>) — _explainmeasured.com_
16. [Code you didn't write](<https://jaredpalmer.com/blog/code-you-didnt-write>) — _jaredpalmer.com_
17. [Parsing JSON at tens of gigabytes per second… in Python](<https://lemire.me/blog/2026/10/12/parsing-json-at-tens-of-gigabytes-per-second-in-python/>) — _lemire.me_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-14` | Wednesday | [Read →](news/en/2026-10-14.md) |
| `2026-10-13` | Tuesday | [Read →](news/en/2026-10-13.md) |
| `2026-10-12` | Monday | [Read →](news/en/2026-10-12.md) |
| `2026-10-11` | 🗓️ Weekly recap | [Read →](news/en/2026-10-11.md) |
| `2026-10-10` | Saturday | [Read →](news/en/2026-10-10.md) |
| `2026-10-09` | Friday | [Read →](news/en/2026-10-09.md) |
| `2026-10-08` | Thursday | [Read →](news/en/2026-10-08.md) |
| `2026-10-07` | Wednesday | [Read →](news/en/2026-10-07.md) |
| `2026-10-06` | Tuesday | [Read →](news/en/2026-10-06.md) |
| `2026-10-05` | Monday | [Read →](news/en/2026-10-05.md) |
| `2026-10-04` | 🗓️ Weekly recap | [Read →](news/en/2026-10-04.md) |
| `2026-10-03` | Saturday | [Read →](news/en/2026-10-03.md) |
| `2026-10-02` | Friday | [Read →](news/en/2026-10-02.md) |
| `2026-10-01` | Thursday | [Read →](news/en/2026-10-01.md) |

<sub>[Browse the full archive (122) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
