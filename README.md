# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · archives kept 14 days._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-06-29
<sub>updated 29 June 2026 at 13:01</sub>

## AI/ML Models, Tooling, and Agents
- OpenAI Economic Research extends its AI Jobs Transition Framework to the EU, using ESCO taxonomy and Eurostat data to map near‑term occupational change and finding a smaller share of high‑automation jobs than in the US <sup>[1](<https://openai.com/index/mapping-ai-jobs-transition-eu>)</sup>.
- US partially lifts its ban on Anthropic’s Mythos 5, allowing trusted companies and government partners to access it while keeping Fable 5 and broader Mythos 5 restrictions in place pending new federal evaluation standards <sup>[2](<https://www.wsj.com/tech/ai/trump-administration-rolls-back-part-of-anthropic-model-ban-e8284434?st=mEYCim&reflink=desktopwebshare_permalink>)</sup>.
- Google caps Meta’s access to Gemini due to compute shortages, pushing Meta to urge token efficiency and shift workloads to its own Muse Spark model <sup>[3](<https://thenextweb.com/news/google-caps-meta-gemini-compute-shortage>)</sup>.
- Dropbox improves Dash Chat using DSPy: LLM-as-judge evaluations, human labels, offline replay, and statistical validation cut incomplete answers, broaden intent coverage, and reduce token use without quality loss <sup>[4](<https://dropbox.tech/machine-learning/how-we-turned-ai-evaluations-into-better-responses-in-dash-chat>)</sup>.
- Wix runs 250 agent evaluations showing optimized docs outperform skills-only setups for CLI tasks (87% vs 67% completion, −35% tokens), while for API tasks docs are faster and skills are more token‑efficient; recommends docs as foundation with skills as a caching layer <sup>[5](<https://www.wix.engineering/post/we-ran-250-ai-agent-evals-to-find-out-if-skills-beat-docs-the-answer-is-more-complicated-than-we-ex>)</sup>.
- A practical tutorial demonstrates a fully local coding agent stack: locally served LLM with file read/write, command execution, and change verification for transparent, inspectable, and cost‑predictable workflows <sup>[6](<https://magazine.sebastianraschka.com/p/using-local-coding-agents>)</sup>.
- A 17‑minute deep‑dive on 12TB of AI coding agent logs argues for token efficiency over token maxing, emphasizing upfront planning, right‑sized sessions, clean context, API‑first tooling, strong CI, and focused human review <sup>[7](<https://www.youtube.com/watch?v=3abXSMZUbbM>)</sup>.
- Manticore rebuilds its ONNX embedding pipeline on ONNX Runtime, achieving up to 14× throughput gains via shared thread‑safe sessions, disabled intra‑op spinning, and per‑document processing to avoid lock contention and padding overhead <sup>[8](<https://manticoresearch.com/blog/onnx-embeddings-speedup/>)</sup>.

## Data, RAG, and Search
- LangChain details SmithDB’s inverted index construction: efficient JSON parsing, tokenization, string interning (~2.2× speedup), streaming compaction for bounded memory, aligned chunks and request coalescing to cut object‑storage GETs, and hybrid local-SSD/object‑storage queries for sub‑second freshness <sup>[9](<https://www.langchain.com/blog/full-text-search-in-smithdb-constructing-and-querying-our-inverted-index-pt-2>)</sup>.
- Common Crawl releases host- and domain-level web graphs (6B+ edges) for April–June 2026 to support large-scale link analysis without running a crawler <sup>[10](<https://commoncrawl.org/blog/host--and-domain-level-web-graphs-april-may-and-june-2026>)</sup>.

## MLOps, Data Engineering, and DevOps
- Apache Flink 2.3.0 advances a declarative streaming platform with evolving materialized tables (DDL/query changes without full reprocessing), SQL changelog conversion, explicit upsert conflict handling, and native S3 support without Hadoop dependencies <sup>[11](<https://flink.apache.org/2026/06/25/apache-flink-2.3.0-release-announcement/>)</sup>.
- Pinterest implements automated schema evolution for CDC across Kafka, Flink, Spark, and Iceberg, treating schema as a contract with push/pull drift detection, PR auditability, SLA-based recovery, and backfill fallbacks <sup>[12](<https://medium.com/pinterest-engineering/automated-schema-evolution-in-pinterests-next-generation-db-ingestion-framework-36c5c07070de>)</sup>.
- Razorpay builds an in-house Customer Data Platform using Airflow+Spark for daily segment computation, Temporal workflows for reliable DynamoDB ingestion with zero-downtime versioning, and privacy-preserving hashed lookups to unify 500M+ profiles <sup>[13](<https://engineering.razorpay.com/turning-scattered-data-into-queryable-segments-at-scale-how-razorpay-built-its-customer-data-3937c4b012de>)</sup>.
- Hardwood 1.0 launches as a fast, JVM-native Parquet reader for Java 21+, with no mandatory deps, parallel page decoding, projections, predicate push-down, and benchmarks at 16.5M rows/sec with ~17–18× selective speedups <sup>[14](<https://www.morling.dev/blog/hardwood-1-0-fast-lightweight-apache-parquet-reader-for-the-jvm/>)</sup>.
- A self-hosted dbt Cloud alternative combines dbt Core with React/FastAPI and Prefect, stressing API-driven job management, logs, deployments, and real-time run status over CLI scraping <sup>[15](<https://medium.com/@diedericks.dan/building-my-own-self-hosted-dbt-cloud-d3b737ae885c>)</sup>.

## Cloud and Infrastructure
- Snowflake argues that real workload performance (real data, concurrency, latency, scale, cost) trumps headline benchmarks, and urges evaluating whether the workload matches yours, the setup is production-ready, and results hold as data grows <sup>[16](<https://www.snowflake.com/en/blog/engineering/measuring-real-workload-performance/>)</sup>.

## Sources

1. [Mapping Europe’s AI Workforce Opportunity](<https://openai.com/index/mapping-ai-jobs-transition-eu>) — _openai.com_
2. [Trump Administration Rolls Back Part of Anthropic Model Ban](<https://www.wsj.com/tech/ai/trump-administration-rolls-back-part-of-anthropic-model-ban-e8284434?st=mEYCim&reflink=desktopwebshare_permalink>) — _wsj.com_
3. [Google is rationing Gemini access to Meta because it cannot provide enough compute](<https://thenextweb.com/news/google-caps-meta-gemini-compute-shortage>) — _thenextweb.com_
4. [How we used DSPy to turn AI evaluations into better responses in Dash chat](<https://dropbox.tech/machine-learning/how-we-turned-ai-evaluations-into-better-responses-in-dash-chat>) — _dropbox.tech_
5. [We Ran 250 AI Agent Evals to Find Out if Skills Beat Docs. The Answer Is More Complicated Than We Expected](<https://www.wix.engineering/post/we-ran-250-ai-agent-evals-to-find-out-if-skills-beat-docs-the-answer-is-more-complicated-than-we-ex>) — _wix.engineering_
6. [Using Local Coding Agents](<https://magazine.sebastianraschka.com/p/using-local-coding-agents>) — _magazine.sebastianraschka.com_
7. [12TB of AI Coding Agent Logs (17 minute video)](<https://www.youtube.com/watch?v=3abXSMZUbbM>) — _youtube.com_
8. [14x faster embeddings: how we rebuilt the ONNX path in Manticore](<https://manticoresearch.com/blog/onnx-embeddings-speedup/>) — _manticoresearch.com_
9. [How we built SmithDB's inverted index for full-text search](<https://www.langchain.com/blog/full-text-search-in-smithdb-constructing-and-querying-our-inverted-index-pt-2>) — _langchain.com_
10. [Host- and Domain-Level Web Graphs April, May, and June 2026](<https://commoncrawl.org/blog/host--and-domain-level-web-graphs-april-may-and-june-2026>) — _commoncrawl.org_
11. [Apache Flink 2.3.0 Release Announcement](<https://flink.apache.org/2026/06/25/apache-flink-2.3.0-release-announcement/>) — _flink.apache.org_
12. [Automated Schema Evolution in Pinterest's Next-Generation DB Ingestion Framework](<https://medium.com/pinterest-engineering/automated-schema-evolution-in-pinterests-next-generation-db-ingestion-framework-36c5c07070de>) — _medium.com_
13. [Turning Scattered Data Into Queryable Segments at Scale: How Razorpay Built Its Customer Data Platform](<https://engineering.razorpay.com/turning-scattered-data-into-queryable-segments-at-scale-how-razorpay-built-its-customer-data-3937c4b012de>) — _engineering.razorpay.com_
14. [Hardwood 1.0: A Fast, Lightweight Apache Parquet Reader for the JVM](<https://www.morling.dev/blog/hardwood-1-0-fast-lightweight-apache-parquet-reader-for-the-jvm/>) — _morling.dev_
15. [Building My Own Self-Hosted dbt Cloud](<https://medium.com/@diedericks.dan/building-my-own-self-hosted-dbt-cloud-d3b737ae885c>) — _medium.com_
16. [Why Real Workload Performance is the Metric that Matters](<https://www.snowflake.com/en/blog/engineering/measuring-real-workload-performance/>) — _snowflake.com_


## Recent archive

_One file per day (kept 14 days)._

- [2026-06-28](news/en/2026-06-28.md)
- [2026-06-27](news/en/2026-06-27.md)
- [2026-06-26](news/en/2026-06-26.md)
- [2026-06-25](news/en/2026-06-25.md)
- [2026-06-24](news/en/2026-06-24.md)
- [2026-06-23](news/en/2026-06-23.md)
- [2026-06-22](news/en/2026-06-22.md)
- [2026-06-21](news/en/2026-06-21.md)

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
