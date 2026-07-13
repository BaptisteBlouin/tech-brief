# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-13
<sub>updated 13 July 2026 at 13:00</sub>

## AI/ML Models, Evaluation and Agents
- Apple sues OpenAI, alleging it solicited Apple trade secrets from job candidates and used them to approach Apple manufacturing partners, seeking injunctions and return of IP <sup>[1](<https://www.nytimes.com/2026/07/10/technology/apple-openai-lawsuit.html?unlocked_article_code=1.xVA.ioDl._RZeRJKFIYdf&smid=url-share>)</sup>.
- Text-to-SQL benchmarks (e.g., BIRD, Spider) contain incorrect "gold" queries, so execution accuracy can reward wrong answers; sqlsure argues evaluations must also validate SQL against declared data semantics like join cardinality and grain <sup>[2](<https://sqlsure.ai/blog/bird-benchmark-wrong-gold/>)</sup>.
- Databricks reports several models, including open-source GLM 5.2, now perform well on real internal coding tasks, highlighting maturing agentic coding capabilities <sup>[3](<https://threadreaderapp.com/thread/2074943612631273730.html>)</sup>.
- GitHub improved Copilot code review by rewriting instructions to start from diffs and narrow with grep/glob, cutting average review cost by 20% without quality loss after generic tools had worsened results <sup>[4](<https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it/>)</sup>.
- Zhipu’s co-founder outlines a two-year plan to return to foundation-model research, emphasizing AGI, safety, open source, autonomous agents, and self-training <sup>[5](<https://www.geopolitechs.org/p/tang-jies-letter-to-zhipu-employee>)</sup>.

## MLOps, Data Engineering and Tooling
- Apache Airflow adds AI-driven controls: semantic schema validation, persistent state for reconnecting failed jobs, and LLM-based retry decisions to reduce pipeline firefighting <sup>[6](<https://blog.dataengineerthings.org/how-airflow-is-using-ai-to-make-data-engineering-more-resilient-not-more-complex-36ff44fd8df7>)</sup>.
- Arcesium migrated a 170TB, 15-trillion-record warehouse from an RDBMS to Apache Iceberg on S3 with DuckDB, cutting ingestion runtime by 80% and infrastructure spend by ~40% using a custom DuckDB-Iceberg layer (Swiftlake) and KEDA autoscaling <sup>[7](<https://medium.com/arcesium-engineering-blog/modern-data-warehousing-at-scale-arcesiums-migration-to-duckdb-and-iceberg-d316af0def46>)</sup>.
- Lakekeeper’s Generic Table API enables governance of non-Iceberg assets (e.g., Lance) as catalog objects without conversion, reusing Iceberg controls for access and lifecycle <sup>[8](<https://medium.com/fresha-data-engineering/lakekeeper-generic-table-api-design-1aaaeca3749c>)</sup>.
- Privacy-safe data platforms require more than redaction: continuous classification, purpose-based access, fit-for-use controls, enforcement, and auditable policy tracking; deterministic tokenization supports joins while preserving pseudonymity <sup>[9](<https://www.dataengineeringweekly.com/p/beyond-redaction-anatomy-of-a-privacy>)</sup>.

## DevOps, Infrastructure and Cloud
- ClickHouse now offers hardened Docker images with zero medium-severity CVEs, built on a minimal base without shell or package managers, with a debug variant for tooling; migration is a one-line change <sup>[10](<https://clickhouse.com/blog/docker-hardened-images>)</sup>.
- Affirm rebuilt its pre-checkout messaging from a Python monolith to a Kotlin microservice with a rule engine, cutting P99 latency by 50% and reducing experiment setup time from 2 months to 4 days <sup>[11](<https://medium.com/affirmengineering/re-architecting-affirms-upfunnel-platform-how-we-cut-experiment-cycle-time-from-months-to-days-20a047eb6599>)</sup>.

## Developer Tools and Software Engineering
- crates.io adds a "Code" tab to browse exact published crate files (including normalized Cargo.toml), making dependency audits easier without relying on linked repositories <sup>[12](<https://blog.rust-lang.org/2026/07/13/crates-io-development-update/>)</sup>.
- PostgreSQL can prune partitions on non-partition keys if the column’s ranges correlate with the partition key; adding CHECK constraints for those ranges enables the optimizer to skip irrelevant partitions <sup>[13](<https://hakibenita.com/postgresql-partition-pruning>)</sup>.
- The Shift Left Manifesto v2 emphasizes code-level, release-linked lineage starting in producer code to expose ownership, sensitive-data flows, and impact analysis directly in PRs, especially as coding agents accelerate cross-system change <sup>[14](<https://dataproducts.substack.com/p/the-shift-left-manifesto-v2>)</sup>.

## Sources

1. [Apple Sues OpenAI, Accusing It of Stealing Company Secrets](<https://www.nytimes.com/2026/07/10/technology/apple-openai-lawsuit.html?unlocked_article_code=1.xVA.ioDl._RZeRJKFIYdf&smid=url-share>) — _nytimes.com_
2. [The benchmark grading every text-to-SQL model has wrong answers in its key](<https://sqlsure.ai/blog/bird-benchmark-wrong-gold/>) — _sqlsure.ai_
3. [We benchmarked coding agents on our own internal tasks at Databricks and learned a lot!](<https://threadreaderapp.com/thread/2074943612631273730.html>) — _threadreaderapp.com_
4. [Better tools made Copilot code review worse. Here's how we actually improved it](<https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it/>) — _github.blog_
5. [The Wave Has Arrived”: Zhipu Co-Founder Tang Jie's Letter to Staff](<https://www.geopolitechs.org/p/tang-jies-letter-to-zhipu-employee>) — _geopolitechs.org_
6. [How Airflow is using AI to make data engineering more resilient, not more complex](<https://blog.dataengineerthings.org/how-airflow-is-using-ai-to-make-data-engineering-more-resilient-not-more-complex-36ff44fd8df7>) — _blog.dataengineerthings.org_
7. [Modern Data Warehousing at Scale: Arcesium's Migration to DuckDB and Iceberg](<https://medium.com/arcesium-engineering-blog/modern-data-warehousing-at-scale-arcesiums-migration-to-duckdb-and-iceberg-d316af0def46>) — _medium.com_
8. [Lakekeeper Generic Table API Design](<https://medium.com/fresha-data-engineering/lakekeeper-generic-table-api-design-1aaaeca3749c>) — _medium.com_
9. [Beyond Redaction: Anatomy of a Privacy-Safe Data Platform](<https://www.dataengineeringweekly.com/p/beyond-redaction-anatomy-of-a-privacy>) — _dataengineeringweekly.com_
10. [ClickHouse on Docker Hardened Images](<https://clickhouse.com/blog/docker-hardened-images>) — _clickhouse.com_
11. [Re-architecting Affirm's Upfunnel Platform: How We Cut Experiment Cycle Time from Months to Days](<https://medium.com/affirmengineering/re-architecting-affirms-upfunnel-platform-how-we-cut-experiment-cycle-time-from-months-to-days-20a047eb6599>) — _medium.com_
12. [crates.io: development update](<https://blog.rust-lang.org/2026/07/13/crates-io-development-update/>) — _blog.rust-lang.org_
13. [How to Achieve Pruning When Querying by Non-Partitioned Columns in PostgreSQL](<https://hakibenita.com/postgresql-partition-pruning>) — _hakibenita.com_
14. [The Shift Left Manifesto - v2](<https://dataproducts.substack.com/p/the-shift-left-manifesto-v2>) — _dataproducts.substack.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-07-12` | 🗓️ Weekly recap | [Read →](news/en/2026-07-12.md) |
| `2026-07-11` | Saturday | [Read →](news/en/2026-07-11.md) |
| `2026-07-10` | Friday | [Read →](news/en/2026-07-10.md) |
| `2026-07-09` | Thursday | [Read →](news/en/2026-07-09.md) |
| `2026-07-08` | Wednesday | [Read →](news/en/2026-07-08.md) |
| `2026-07-07` | Tuesday | [Read →](news/en/2026-07-07.md) |
| `2026-07-06` | Monday | [Read →](news/en/2026-07-06.md) |
| `2026-07-05` | 🗓️ Weekly recap | [Read →](news/en/2026-07-05.md) |
| `2026-07-04` | Saturday | [Read →](news/en/2026-07-04.md) |
| `2026-07-03` | Friday | [Read →](news/en/2026-07-03.md) |
| `2026-07-02` | Thursday | [Read →](news/en/2026-07-02.md) |
| `2026-07-01` | Wednesday | [Read →](news/en/2026-07-01.md) |
| `2026-06-30` | Tuesday | [Read →](news/en/2026-06-30.md) |
| `2026-06-29` | Monday | [Read →](news/en/2026-06-29.md) |

<sub>[Browse the full archive (28) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
