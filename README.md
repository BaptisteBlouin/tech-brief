# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-08-13
<sub>updated 13 August 2026 at 13:01</sub>

## AI Models & Agents
- SpaceXAI releases **Grok 4.6**, a 1.5T model optimized for long-running agents, coding, and knowledge work, surpassing Kimi K3 and matching GPT-5.6 Sol on Artificial Analysis; API pricing starts at $2/$6 per million input/output tokens, undercutting GPT-5.6 Sol by >50% <sup>[1](<https://www.latent.space/p/ainews-spacexai-grok-46-and-grok>), [2](<https://venturebeat.com/technology/spacexai-debuts-grok-4-6-overtaking-kimi-k3s-performance-and-matching-gpt-5-6-sol-for-worlds-third-best-on-artificial-analysis>)</sup>.
- **DeepSeek V4 Pro 0813** is now available via OpenRouter (API-only), with reasoning modes producing visibly distinct outputs; prior DeepSeek V4 models had open weights, suggesting this may follow <sup>[3](<https://simonwillison.net/2026/Aug/12/deepseek-v4-pro-0813/>)</sup>.
- Meta releases **Muse Glimmer (30B)**, an open-weight model quantizable to <20 GB for local agent workflows on consumer GPUs <sup>[4](<https://www.testingcatalog.com/meta-releases-muse-glimmer-for-local-ai-agents/>)</sup>.
- DeepSeek is building a team to challenge **Claude Code**, signaling intensified competition in AI coding agents <sup>[5](<https://www.bloomberg.com/news/articles/2026-08-12/deepseek-publicizes-efforts-to-challenge-anthropic-s-claude-code?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NjU5MjA0MCwiZXhwIjoxNzg3MTk2ODQwLCJhcnRpY2xlSWQiOiJUSk5XRU5UOU5KTFYwMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.aybpc7rfFGTcwTN6BlU1XCafnXRg4sYT3XYvrFKJKdU>)</sup>.

## RAG, Vector Search & Knowledge Graphs
- Qdrant analyzes **filtered vector search trade-offs**, comparing filterable HNSW, ACORN expansion, and full scans; ACORN helps in some cases, but extra index-time edges can outperform query-time repairs <sup>[6](<https://qdrant.tech/articles/filtered-vector-search-acorn/>)</sup>.
- Knowledge graphs often fail due to SQL-like design mistakes; best practices include use-case-specific scopes, staged/federated graphs, SHACL validation, and query-time graph construction <sup>[7](<https://ontologist.substack.com/p/why-knowledge-graph-projects-fail>)</sup>.

## MLOps & AI Reliability
- **AI model drift** requires monitoring data, concept, pipeline, prompt, embedding, and output drift in LLM/RAG systems, combining baselines, distribution checks, telemetry, and user feedback <sup>[8](<https://www.honeycomb.io/blog/ai-model-drift>)</sup>.
- Data teams should prepare for **AI agents in data work** with strong evals, explicit business context, and low-latency infra for bursty, parallel workloads; proactive insights remain hard due to relevance/false-positive challenges <sup>[9](<https://www.infoworld.com/article/4203157/agents-are-coming-for-data-just-slowly.html>)</sup>.
- **Databricks acquires Electric** to integrate PGlite (WASM Postgres) into AI agent sandboxes, enabling local DBs with sync to Lakebase for governed, distributed agent state <sup>[10](<https://www.databricks.com/blog/electric-joins-databricks-bring-wasm-postgres-ai-agent-sandboxes>)</sup>.

## DevOps, Infrastructure & Cloud
- **Stripe** automates MongoDB incident recovery using **graph search + state machines**, reducing pager alerts by ~30% and avoiding ~12 days of unhealthy shard states/year via Dijkstra-based planning <sup>[11](<https://stripe.dev/blog/how-stripe-uses-graph-search-and-state-machines-to-auto-remediate-a-global-database-fleet>)</sup>.
- **Vercel** migrates its build warm pool state from Redis to DynamoDB, using dual writes, shadow reads, and feature flags; the move exposed a hidden dependency on Redis’s ultra-low latency, forcing a concurrency redesign <sup>[12](<https://vercel.com/blog/how-we-migrated-the-database-behind-every-vercel-build>)</sup>.
- **NATS 2.12** adds **atomic batch publishing** for JetStream, ensuring all-or-nothing message commits for event-sourced systems and state replacement workflows <sup>[13](<https://www.synadia.com/blog/atomic-batch-publishing-nats-2-12/>)</sup>.
- **Tailscale** and SQLite maintainers collaborate to fix a **16-year-old SQLite WAL reset bug**, showcasing cross-team debugging at scale <sup>[14](<https://tailscale.com/blog/sqlite-wal-reset-bug>)</sup>.

## Developer Tools & Engineering Practices
- **sqlfmt** launches as a **gofmt-style SQL formatter**, enforcing "river alignment" with lowercase keywords, consistent indentation, and semantic-preserving tokenization; runs as CLI or WASM in-browser <sup>[15](<https://tapoueh.org/blog/2026/08/introducing-sqlfmt-an-sql-gofmt-style-formatter/>)</sup>.
- **Netflix’s Maestro** (Apache-2.0) is an open-source **workflow orchestrator** for large-scale data/ML/batch pipelines, offering a production-tested alternative/complement to Airflow <sup>[16](<https://github.com/Netflix/maestro>)</sup>.
- **Salesforce** standardizes product telemetry via a **Product Data Platform**, reducing time-to-insight by 97% while processing 45B rows/day across 19K events <sup>[17](<https://engineering.salesforce.com/how-standardizing-product-telemetry-reduced-time-to-insight-by-97>)</sup>.

## Sources

1. [\[AINews\] SpaceXAI Grok 4.6 and Grok @Bot](<https://www.latent.space/p/ainews-spacexai-grok-46-and-grok>) — _latent.space_
2. [SpaceXAI debuts Grok 4.6, overtaking Kimi K3's performance and matching GPT-5.6 Sol for world's third best on Artificial Analysis](<https://venturebeat.com/technology/spacexai-debuts-grok-4-6-overtaking-kimi-k3s-performance-and-matching-gpt-5-6-sol-for-worlds-third-best-on-artificial-analysis>) — _venturebeat.com_
3. [DeepSeek V4 Pro 0813 (on OpenRouter)](<https://simonwillison.net/2026/Aug/12/deepseek-v4-pro-0813/>) — _simonwillison.net_
4. [Meta releases Muse Glimmer for local AI agents](<https://www.testingcatalog.com/meta-releases-muse-glimmer-for-local-ai-agents/>) — _testingcatalog.com_
5. [DeepSeek Publicizes Efforts to Challenge Anthropic's Claude Code](<https://www.bloomberg.com/news/articles/2026-08-12/deepseek-publicizes-efforts-to-challenge-anthropic-s-claude-code?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4NjU5MjA0MCwiZXhwIjoxNzg3MTk2ODQwLCJhcnRpY2xlSWQiOiJUSk5XRU5UOU5KTFYwMCIsImJjb25uZWN0SWQiOiIwOThFNzNDQTE5QTA0RDkxODEyQzQ4MjcwRDZERTI0QiJ9.aybpc7rfFGTcwTN6BlU1XCafnXRg4sYT3XYvrFKJKdU>) — _bloomberg.com_
6. [Filtered Vector Search: What ACORN Fixes, and What Fixes ACORN](<https://qdrant.tech/articles/filtered-vector-search-acorn/>) — _qdrant.tech_
7. [Why Knowledge Graph Projects Fail — and How to Make Them Succeed](<https://ontologist.substack.com/p/why-knowledge-graph-projects-fail>) — _ontologist.substack.com_
8. [AI Model Drift: How to Keep Models Reliable](<https://www.honeycomb.io/blog/ai-model-drift>) — _honeycomb.io_
9. [Agents are coming for data (just slowly)](<https://www.infoworld.com/article/4203157/agents-are-coming-for-data-just-slowly.html>) — _infoworld.com_
10. [Electric joins Databricks to bring WASM Postgres to AI agent sandboxes](<https://www.databricks.com/blog/electric-joins-databricks-bring-wasm-postgres-ai-agent-sandboxes>) — _databricks.com_
11. [Stripe Uses Graph Search and State Machines to Automate Database Remediation](<https://stripe.dev/blog/how-stripe-uses-graph-search-and-state-machines-to-auto-remediate-a-global-database-fleet>) — _stripe.dev_
12. [How we migrated the database behind every Vercel build](<https://vercel.com/blog/how-we-migrated-the-database-behind-every-vercel-build>) — _vercel.com_
13. [Atomic Batch Publishing in NATS 2.12: All-or-Nothing Message Guarantees](<https://www.synadia.com/blog/atomic-batch-publishing-nats-2-12/>) — _synadia.com_
14. [How we tracked down a 16-year-old SQLite bug](<https://tailscale.com/blog/sqlite-wal-reset-bug>) — _tailscale.com_
15. [Introducing sqlfmt: an SQL gofmt-style formatter](<https://tapoueh.org/blog/2026/08/introducing-sqlfmt-an-sql-gofmt-style-formatter/>) — _tapoueh.org_
16. [Maestro: Netflix's open-source workflow orchestrator keeps moving](<https://github.com/Netflix/maestro>) — _github.com_
17. [How Standardizing Product Telemetry Reduced Time to Insight by 97%](<https://engineering.salesforce.com/how-standardizing-product-telemetry-reduced-time-to-insight-by-97>) — _engineering.salesforce.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-08-12` | Wednesday | [Read →](news/en/2026-08-12.md) |
| `2026-08-11` | Tuesday | [Read →](news/en/2026-08-11.md) |
| `2026-08-10` | Monday | [Read →](news/en/2026-08-10.md) |
| `2026-08-09` | 🗓️ Weekly recap | [Read →](news/en/2026-08-09.md) |
| `2026-08-08` | Saturday | [Read →](news/en/2026-08-08.md) |
| `2026-08-07` | Friday | [Read →](news/en/2026-08-07.md) |
| `2026-08-06` | Thursday | [Read →](news/en/2026-08-06.md) |
| `2026-08-05` | Wednesday | [Read →](news/en/2026-08-05.md) |
| `2026-08-04` | Tuesday | [Read →](news/en/2026-08-04.md) |
| `2026-08-03` | Monday | [Read →](news/en/2026-08-03.md) |
| `2026-08-02` | 🗓️ Weekly recap | [Read →](news/en/2026-08-02.md) |
| `2026-08-01` | Saturday | [Read →](news/en/2026-08-01.md) |
| `2026-07-31` | Friday | [Read →](news/en/2026-07-31.md) |
| `2026-07-30` | Thursday | [Read →](news/en/2026-07-30.md) |

<sub>[Browse the full archive (59) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
