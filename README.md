# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-05
<sub>updated 5 October 2026 at 13:00</sub>

## AI Models, Agents, and Tooling
- **Open-Source Decision Models:** Cloudflare released Clef and Clef-flash, open-source System 1 decision models designed to route support tickets, classify websites, or control agent fallback loops by converting text or images directly into choices and probabilities <sup>[1](<https://blog.cloudflare.com/clef-decision-models/>)</sup>.
- **Agent Context Engineering:** Industry discussions emphasize that context packages for AI coding agents require the same versioning, linting, and testing rigor as application code to prevent hallucinations and silent architectural degradation <sup>[2](<https://www.infoq.com/presentations/context-as-code-devops-agents/>)</sup>.
- **Inference Reliability Gaps:** An analysis of production model calls revealed that delivered reasoning budgets can vary sharply under the same model name, indicating that production users may receive far less sequential reasoning than benchmark performance suggests <sup>[3](<https://x.com/Lon/status/2101034933284417614>)</sup>.
- **Cost-Effective Agent Testing:** The open-source `e2e` framework improves AI testing efficiency for web and mobile apps by caching and replaying previous agent actions, reducing redundant reasoning tokens and model calls <sup>[4](<https://tester.army/e2e>)</sup>.
- **Data Agent Design Insights:** OpenAI detailed its internal data agent that queries 70,000 datasets, noting that reliable agent performance relies heavily on rich structural context, continuous learning from corrections, and robust evaluations rather than raw model scale <sup>[5](<https://www.youtube.com/watch?v=82zo4WMcjfU>)</sup>.

## Data Engineering, Storage, and Analytics
- **Direct Lakehouse Querying:** Amazon Aurora PostgreSQL now supports direct querying of Apache Iceberg and Parquet tables in Amazon S3 via an embedded DuckDB engine, enabling predicate pushdown and standard PostgreSQL syntax without separate ETL pipelines <sup>[6](<https://aws.amazon.com/blogs/aws/amazon-aurora-postgresql-now-supports-direct-querying-of-apache-iceberg-and-parquet-data-in-your-data-lake/>)</sup>.
- **Apache Iceberg 1.12.0 Release:** Apache Iceberg 1.12.0 expands production support for v3 features including variant types, row lineage, deletion vectors, and REST catalog operations, while removing deprecated APIs <sup>[7](<https://www.dremio.com/blog/apache-iceberg-1-12-0-whats-new-breaking-changes-and-upgrade-guide>)</sup>.
- **Distributed Query Engines:** Datadog open-sourced Distributed DataFusion, extending Apache DataFusion to distribute single analytical queries across multiple machines to accelerate heavy workloads while keeping lightweight tasks local <sup>[8](<https://www.datadoghq.com/blog/engineering/distributed-datafusion>)</sup>.
- **Semantic Interoperability:** Microsoft and Google backed Apache Ossie, an open JSON/YAML semantic-model interchange specification designed to eliminate metric drift and redundant definitions across diverse BI and data platforms <sup>[9](<https://www.infoworld.com/article/4229785/microsoft-google-back-apache-ossie-to-make-enterprise-data-and-ai-platforms-more-interoperable-2.html>)</sup>.
- **ClickHouse at LinkedIn:** LinkedIn migrated three separate metric metadata systems into a single ClickHouse index, handling over 150,000 queries per minute with an average latency of 68 milliseconds and drastically reduced memory footprints <sup>[10](<https://clickhouse.com/blog/linkedin-observability-at-scale>)</sup>.

## DevOps, Infrastructure, and Software Engineering
- **Pipeline Topology Optimization:** A production AWS Bedrock guardrail pipeline reduced agent action latency from nearly 14 seconds to under 2 seconds simply by parallelizing independent safety layers and short-circuiting cheap rejection rules early <sup>[11](<https://techstrong.ai/contributed-content/why-your-ai-agent-pipeline-is-slow-and-how-to-fix-it-without-changing-models/>)</sup>.
- **Kafka Scalability Overhauls:** LinkedIn addressed extreme-scale limitations in Kafka's partition model by developing Northguard to decouple ordering, replication, and placement, hiding the backend migration from client applications using a compatibility layer <sup>[12](<https://softwaremill.com/linkedin-northguard-xinfra-kafka>)</sup>.
- **Database Query Optimization:** DuckDB case studies highlight that replacing low-cardinality string columns with small integer surrogate keys via dimension tables significantly reduces memory pressure and grouping costs during large analytical aggregations <sup>[13](<https://duckdb.org/2026/10/02/dimension-tables.html>)</sup>.

## Sources

1. [Introducing Clef: our open-source decision models, and new RL fine-tuning platform](<https://blog.cloudflare.com/clef-decision-models/>) — _blog.cloudflare.com_
2. [Context Is the New Code (50 minute video)](<https://www.infoq.com/presentations/context-as-code-devops-agents/>) — _infoq.com_
3. [The Inference Gap](<https://x.com/Lon/status/2101034933284417614>) — _x.com_
4. [e2e (Website)](<https://tester.army/e2e>) — _tester.army_
5. [Diving Through Data at OpenAI: How a Data Agent Navigates 70,000 Datasets (27 minute video)](<https://www.youtube.com/watch?v=82zo4WMcjfU>) — _youtube.com_
6. [Amazon Aurora PostgreSQL now supports direct querying of Apache Iceberg and Parquet data in your data lake](<https://aws.amazon.com/blogs/aws/amazon-aurora-postgresql-now-supports-direct-querying-of-apache-iceberg-and-parquet-data-in-your-data-lake/>) — _aws.amazon.com_
7. [Apache Iceberg 1.12.0: What's New, Breaking Changes, and Upgrade Guide](<https://www.dremio.com/blog/apache-iceberg-1-12-0-whats-new-breaking-changes-and-upgrade-guide>) — _dremio.com_
8. [How we extended Apache DataFusion to execute one query across many machines](<https://www.datadoghq.com/blog/engineering/distributed-datafusion>) — _datadoghq.com_
9. [Microsoft, Google back Apache Ossie to make enterprise data and AI platforms more interoperable](<https://www.infoworld.com/article/4229785/microsoft-google-back-apache-ossie-to-make-enterprise-data-and-ai-platforms-more-interoperable-2.html>) — _infoworld.com_
10. [How LinkedIn extended ClickHouse from distributed tracing to metric discovery and analytics](<https://clickhouse.com/blog/linkedin-observability-at-scale>) — _clickhouse.com_
11. [Why Your AI Agent Pipeline Is Slow (And How to Fix It Without Changing Models)](<https://techstrong.ai/contributed-content/why-your-ai-agent-pipeline-is-slow-and-how-to-fix-it-without-changing-models/>) — _techstrong.ai_
12. [LinkedIn Built Kafka. What Did It Change When Kafka Was No Longer Enough?](<https://softwaremill.com/linkedin-northguard-xinfra-kafka>) — _softwaremill.com_
13. [Faster String Aggregations with Dimension Tables](<https://duckdb.org/2026/10/02/dimension-tables.html>) — _duckdb.org_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-04` | 🗓️ Weekly recap | [Read →](news/en/2026-10-04.md) |
| `2026-10-03` | Saturday | [Read →](news/en/2026-10-03.md) |
| `2026-10-02` | Friday | [Read →](news/en/2026-10-02.md) |
| `2026-10-01` | Thursday | [Read →](news/en/2026-10-01.md) |
| `2026-09-30` | Wednesday | [Read →](news/en/2026-09-30.md) |
| `2026-09-29` | Tuesday | [Read →](news/en/2026-09-29.md) |
| `2026-09-28` | Monday | [Read →](news/en/2026-09-28.md) |
| `2026-09-27` | 🗓️ Weekly recap | [Read →](news/en/2026-09-27.md) |
| `2026-09-26` | Saturday | [Read →](news/en/2026-09-26.md) |
| `2026-09-25` | Friday | [Read →](news/en/2026-09-25.md) |
| `2026-09-24` | Thursday | [Read →](news/en/2026-09-24.md) |
| `2026-09-23` | Wednesday | [Read →](news/en/2026-09-23.md) |
| `2026-09-22` | Tuesday | [Read →](news/en/2026-09-22.md) |
| `2026-09-21` | Monday | [Read →](news/en/2026-09-21.md) |

<sub>[Browse the full archive (112) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
