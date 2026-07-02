# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-02
<sub>updated 2 July 2026 at 13:01</sub>

## AI/ML Models and Tooling
- Anthropic relaunches Claude Fable 5 with visible safety fallbacks, routing some requests to Opus 4.8 while acknowledging overly broad biology/chemistry classifiers <sup>[1](<https://www.latent.space/p/ainews-not-much-happened-today-900>)</sup>.
- Google Research introduces TabFM, a zero-shot foundation model for tabular classification and regression that outperforms tuned tree-based baselines on TabArena without per-dataset training or feature engineering <sup>[2](<https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/>)</sup>.
- Meta’s internal DeMate assistant for data engineers combines RAG over internal catalogs, multi-step reasoning, and human-in-the-loop feedback to scale SQL, pipeline generation, and code review <sup>[3](<https://medium.com/@AnalyticsAtMeta/how-we-built-demate-taming-llms-for-data-engineering-at-meta-d134e69637c5>)</sup>.
- ZCode, the official development environment for GLM-5.2, is now available on macOS, Windows, and Linux, with increased usage quotas for GLM Coding Plan subscribers <sup>[4](<https://x.com/Zai_org/status/2072349453361557898>)</sup>.

## Agents, RAG, and Autoresearch
- AIEWF highlights **autoresearch** as an "outer loop" where agents maintain and improve primary systems using feedback, evals, and human input; Introspection frames it as infrastructure for self-improving agents <sup>[5](<https://www.latent.space/p/aiewf-daily-dispatch-agency>), [6](<https://www.latent.space/p/autoresearch-introspection>)</sup>.
- Expedia uses LLMs to analyze Spark SQL execution plans, accelerating debugging of long-running jobs by identifying bottlenecks, skewed data, and suboptimal operators <sup>[7](<https://medium.com/expedia-group-tech/using-llms-to-analyze-spark-sql-plans-a-practical-approach-to-debugging-long-running-jobs-35eace7eeec4>)</sup>.
- Ontologies resurface as a critical layer for AI agents, providing explicit business semantics (typed relationships, constraints) beyond schemas or dashboards, often via knowledge graphs or semantic layers <sup>[8](<https://handsondata.substack.com/p/ontology-everywhere>)</sup>.

## MLOps and Data Engineering
- Arcesium migrates from Athena/Trino to DuckDB, cutting query costs and runtime by ~50% for small-to-medium workloads with a ~40% lower memory footprint <sup>[9](<https://medium.com/arcesium-engineering-blog/query-faster-query-smarter-our-move-to-duckdb-and-what-we-learned-c935128e80bc>)</sup>.
- Apache Hudi details strategies for indexing continuously updating datasets, balancing freshness, query performance, write overhead, and scalability in data lakes <sup>[10](<https://hudi.apache.org/blog/2026/06/25/building-indexes-on-a-moving-target/>)</sup>.
- Data residency is an infrastructure design challenge: regulated workloads must control where data is stored, processed, logged, and accessed, requiring region-aware platforms with reproducible CI/CD and portable compute <sup>[11](<https://hackernoon.com/data-residency-is-not-a-legal-problem-it-is-an-infrastructure-design-problem>)</sup>.

## DevOps, Cloud, and Infrastructure
- GitHub makes **Issue Fields** generally available, adding structured, typed metadata (priority, effort, dates) to issues with visibility in lists, public projects, and MCP integration <sup>[12](<https://github.blog/changelog/2026-07-02-issue-fields-are-now-generally-available>)</sup>.
- GitHub adds **public monitoring for secret scanning** in preview for enterprises, alerting on leaked secrets across all of github.com and attributing them back to the enterprise <sup>[13](<https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises>)</sup>.
- GitHub enables enterprises to default Copilot conversations to **auto model selection** via managed-settings.json for governance <sup>[14](<https://github.blog/changelog/2026-07-01-enterprises-can-default-to-auto-model-selection>)</sup>.
- Meta is planning a cloud business to sell excess AI compute and hosted models, similar to AWS Bedrock or CoreWeave <sup>[15](<https://www.bloomberg.com/news/articles/2026-07-01/meta-is-building-a-cloud-business-to-sell-excess-ai-compute?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4Mjk3NDg0MSwiZXhwIjoxNzgzNTc5NjQxLCJhcnRpY2xlSWQiOiJUSEVOTzNUOU5KTFQwMCIsImJjb25uZWN0SWQiOiI0NUZGMzc2RThENDg0NzYxQTkwQ0JEMzc4OTMzQjg2RiJ9.kpiVb0aBaxaGvO7WPEUSvdMTw10YAUjtWL4lBYHetpI>)</sup>.
- SedonaDB 0.4 introduces **RayBooster**, a GPU-accelerated spatial join engine using NVIDIA ray tracing cores, delivering up to ~5.9x faster joins and cost savings <sup>[16](<https://sedona.apache.org/latest/blog/2026/06/26/sedonadb-04-gpu-accelerated-spatial-joins/>)</sup>.

## Developer Tools and Practices
- Chrome introduces the **`<usermedia>` HTML element** to reduce boilerplate for media access, improve security, and simplify user recovery after permission denial <sup>[17](<https://developer.chrome.com/blog/usermedia-html-element#validation_of_the_concept?utm_source=tldrnewsletter>)</sup>.
- PostgreSQL performance degrades with excessive tables due to catalog bloat and planning overhead; consolidation and partitioning are recommended <sup>[18](<https://www.cybertec-postgresql.com/en/too-many-tables-are-bad/>)</sup>.

## Sources

1. [\[AINews\] not much happened today](<https://www.latent.space/p/ainews-not-much-happened-today-900>) — _latent.space_
2. [Introducing TabFM: A zero-shot foundation model for tabular data](<https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/>) — _research.google_
3. [How We Built DEmate: Taming LLMs for Data Engineering at Meta](<https://medium.com/@AnalyticsAtMeta/how-we-built-demate-taming-llms-for-data-engineering-at-meta-d134e69637c5>) — _medium.com_
4. [ZCode](<https://x.com/Zai_org/status/2072349453361557898>) — _x.com_
5. [AIEWF Daily Dispatch: Autoresearch and the tension between AI and human agency](<https://www.latent.space/p/aiewf-daily-dispatch-agency>) — _latent.space_
6. [Autoresearch: The feedback loop behind self-improving agents](<https://www.latent.space/p/autoresearch-introspection>) — _latent.space_
7. [Using LLMs to Analyze Spark SQL Plans: A Practical Approach to Debugging Long-Running Jobs](<https://medium.com/expedia-group-tech/using-llms-to-analyze-spark-sql-plans-a-practical-approach-to-debugging-long-running-jobs-35eace7eeec4>) — _medium.com_
8. [Ontology Everywhere!](<https://handsondata.substack.com/p/ontology-everywhere>) — _handsondata.substack.com_
9. [Query Faster, Query Smarter: Our Move to DuckDB and What We Learned](<https://medium.com/arcesium-engineering-blog/query-faster-query-smarter-our-move-to-duckdb-and-what-we-learned-c935128e80bc>) — _medium.com_
10. [Building Indexes on a Moving Target](<https://hudi.apache.org/blog/2026/06/25/building-indexes-on-a-moving-target/>) — _hudi.apache.org_
11. [Data Residency Is Not a Legal Problem. It Is An Infrastructure Design Problem](<https://hackernoon.com/data-residency-is-not-a-legal-problem-it-is-an-infrastructure-design-problem>) — _hackernoon.com_
12. [Issue fields are now generally available](<https://github.blog/changelog/2026-07-02-issue-fields-are-now-generally-available>) — _github.blog_
13. [Secret scanning public monitoring for enterprises](<https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises>) — _github.blog_
14. [Enterprises can default to auto model selection](<https://github.blog/changelog/2026-07-01-enterprises-can-default-to-auto-model-selection>) — _github.blog_
15. [Meta Is Planning a Cloud Business to Sell AI Computing Power](<https://www.bloomberg.com/news/articles/2026-07-01/meta-is-building-a-cloud-business-to-sell-excess-ai-compute?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4Mjk3NDg0MSwiZXhwIjoxNzgzNTc5NjQxLCJhcnRpY2xlSWQiOiJUSEVOTzNUOU5KTFQwMCIsImJjb25uZWN0SWQiOiI0NUZGMzc2RThENDg0NzYxQTkwQ0JEMzc4OTMzQjg2RiJ9.kpiVb0aBaxaGvO7WPEUSvdMTw10YAUjtWL4lBYHetpI>) — _bloomberg.com_
16. [SedonaDB 0.4: GPU-Accelerated Spatial Joins](<https://sedona.apache.org/latest/blog/2026/06/26/sedonadb-04-gpu-accelerated-spatial-joins/>) — _sedona.apache.org_
17. [Introducing the 'usermedia' HTML element](<https://developer.chrome.com/blog/usermedia-html-element#validation_of_the_concept?utm_source=tldrnewsletter>) — _developer.chrome.com_
18. [Too many tables are bad for you](<https://www.cybertec-postgresql.com/en/too-many-tables-are-bad/>) — _cybertec-postgresql.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-07-01` | Wednesday | [Read →](news/en/2026-07-01.md) |
| `2026-06-30` | Tuesday | [Read →](news/en/2026-06-30.md) |
| `2026-06-29` | Monday | [Read →](news/en/2026-06-29.md) |
| `2026-06-28` | 🗓️ Weekly recap | [Read →](news/en/2026-06-28.md) |
| `2026-06-27` | Saturday | [Read →](news/en/2026-06-27.md) |
| `2026-06-26` | Friday | [Read →](news/en/2026-06-26.md) |
| `2026-06-25` | Thursday | [Read →](news/en/2026-06-25.md) |
| `2026-06-24` | Wednesday | [Read →](news/en/2026-06-24.md) |
| `2026-06-23` | Tuesday | [Read →](news/en/2026-06-23.md) |
| `2026-06-22` | Monday | [Read →](news/en/2026-06-22.md) |
| `2026-06-21` | 🗓️ Weekly recap | [Read →](news/en/2026-06-21.md) |
| `2026-06-20` | Saturday | [Read →](news/en/2026-06-20.md) |
| `2026-06-19` | Friday | [Read →](news/en/2026-06-19.md) |
| `2026-06-18` | Thursday | [Read →](news/en/2026-06-18.md) |

<sub>[Browse the full archive (17) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
