# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-16
<sub>updated 16 July 2026 at 13:00</sub>

## AI/ML Models & Multimodal
- Thinky releases **Inkling**, a 975B-parameter (41B active) Mixture-of-Experts multimodal model with 1M-token context, pretrained on 45T tokens across text, images, audio, and video, alongside a 12B-active **Inkling-Small** variant; both are Apache 2.0 open models <sup>[1](<https://www.latent.space/p/ainews-thinkys-inkling-975b-a41b>)</sup>.
- Google DeepMind and Isomorphic Labs outline their joint **approach to bioresilience**, emphasizing AI model applications in biological systems <sup>[2](<https://deepmind.google/blog/our-approach-to-bioresilience/>)</sup>.

## LLM Tooling, RAG & Agents
- Google Cloud integrates **Parallel Web Search** as a grounding provider for the **Gemini Enterprise Agent Platform**, enabling real-time web verification and programmable caching for enterprise agents <sup>[3](<https://developers.googleblog.com/expanding-choice-in-gemini-enterprise-agent-platform-introducing-grounding-with-parallel-web-search/>)</sup>.
- **G-Eval** explained: an LLM-based evaluation method that generates scoring steps from rubrics via chain-of-thought and computes weighted token-level probabilities for stable, open-ended text assessment; best practices include cross-family judge models and rubric calibration <sup>[4](<https://arpitbhayani.me/blogs/g-eval/>)</sup>.
- **Agent memory remains unsolved**: a proposed pipeline uses ontologies, LLM-based graph extraction, validation, deduplication, and MCP-served queries, with MongoDB for hybrid search and graph DBs for deep traversal <sup>[5](<https://www.decodingai.com/p/how-to-implement-a-unified-memory-from-scratch>)</sup>.

## MLOps & Data Engineering
- Grab migrates petabyte-scale Hive Parquet tables to **Apache Iceberg**, achieving **10x query speedups**, **95% lower S3 API costs**, and **50% compute savings** for ML pipelines, with a custom **UnifiedSparkCatalog** abstracting multiple table formats <sup>[6](<https://engineering.grab.com/our-journey-to-apache-iceberg-adoption>)</sup>.
- Razorpay **10x faster data warehouse refreshes** by replacing full scans with incremental graph traversal, using silver-layer deduplication, secondary indexes, and dependency-aware graph updates <sup>[7](<https://engineering.razorpay.com/how-we-refresh-razorpays-data-warehouse-10x-faster-with-graphs-and-indexes-538abc244703>)</sup>.
- **ACID on data lakes** (Hudi/Iceberg/Delta) relies on metadata logs and atomic publishes, offering per-table guarantees, second-scale commits, and snapshot isolation <sup>[8](<https://hudi.apache.org/blog/2026/07/17/what-is-acid-on-a-data-lake/>)</sup>.
- Expedia Group’s **scalable AI framework** requires measurable business outcomes, shared platform foundations, and cross-functional ownership for production models <sup>[9](<https://medium.com/expedia-group-tech/how-expedia-group-builds-ai-that-lasts-at-scale-434677770fe9>)</sup>.

## DevOps, Cloud & Infrastructure
- **Arroyo (Rust-based SQL stream processor) joins Cloudflare**, remaining Apache 2.0 open source, to add SQL processing to Cloudflare Pipelines <sup>[10](<https://www.arroyo.dev/blog/arroyo-is-joining-cloudflare/>)</sup>.
- **Prefect acquires Dagster**, merging orchestration ecosystems while retaining both brands, roadmaps, and open-source commitments <sup>[11](<https://thenewstack.io/prefect-acquires-dagster-orchestrator/>)</sup>.
- Netflix’s **service topology system** uses eBPF, app metrics, and traces in a three-stage streaming pipeline, solving 100x load variance via multi-stage redistribution <sup>[12](<https://netflixtechblog.com/building-service-topology-at-scale-architecture-challenges-and-lessons-learned-f4b792f3f0d8>)</sup>.
- **Cloudflare as a data platform**: early experiments pair R2 with Iceberg for a lightweight lakehouse, though orchestration remains a gap <sup>[13](<https://dataengineeringcentral.substack.com/p/cloudflare-as-a-data-platform>)</sup>.

## Developer Tools & Practices
- xAI open-sources **grok-build** (Apache 2.0) after backlash over unintended directory uploads; the CLI now disables the feature and deletes prior data <sup>[14](<https://simonwillison.net/2026/Jul/15/grok-build/#atom-everything>)</sup>.
- GitHub enhances **secret scanning**: adds Resend and APIclub token detection, blocks VolcEngine secrets by default, and introduces insight cards for public monitoring alerts <sup>[15](<https://github.blog/changelog/2026-07-15-improvements-to-secret-scanning-and-public-monitoring>)</sup>.
- **Polars benchmark**: distributed setups outperform single-node only on I/O-bound queries due to network burst bandwidth; join-heavy workloads favor single-node to avoid shuffle overhead <sup>[16](<https://pola.rs/posts/single-node-vs-distributed/>)</sup>.
- **Cache layer pitfalls** at scale: stampedes, hot keys, stale data, and avalanches; mitigations include TTL jitter, request coalescing, key splitting, and consistent hashing <sup>[17](<https://redis.io/blog/cache-layer-architecture-guide/>)</sup>.

## Sources

1. [\[AINews\] Thinky's Inkling: 975B-A41B multimodal, new best American Apache 2.0 open model (with Inkling-Small, 276B-A12B)](<https://www.latent.space/p/ainews-thinkys-inkling-975b-a41b>) — _latent.space_
2. [Our approach to bioresilience](<https://deepmind.google/blog/our-approach-to-bioresilience/>) — _deepmind.google_
3. [Expanding Choice in Gemini Enterprise Agent Platform: Introducing Grounding with Parallel Web Search](<https://developers.googleblog.com/expanding-choice-in-gemini-enterprise-agent-platform-introducing-grounding-with-parallel-web-search/>) — _google ai_
4. [G-Eval, Explained](<https://arpitbhayani.me/blogs/g-eval/>) — _arpitbhayani.me_
5. [Nobody Has Cracked Agent Memory](<https://www.decodingai.com/p/how-to-implement-a-unified-memory-from-scratch>) — _decodingai.com_
6. [Scaling Grab's Data Lake: Our journey to Apache Iceberg adoption](<https://engineering.grab.com/our-journey-to-apache-iceberg-adoption>) — _engineering.grab.com_
7. [How We Refresh Razorpay's Data Warehouse 10x Faster with Graphs and Indexes](<https://engineering.razorpay.com/how-we-refresh-razorpays-data-warehouse-10x-faster-with-graphs-and-indexes-538abc244703>) — _engineering.razorpay.com_
8. [What is ACID on a Data Lake?](<https://hudi.apache.org/blog/2026/07/17/what-is-acid-on-a-data-lake/>) — _hudi.apache.org_
9. [How Expedia Group Builds AI That Lasts at Scale](<https://medium.com/expedia-group-tech/how-expedia-group-builds-ai-that-lasts-at-scale-434677770fe9>) — _medium.com_
10. [Arroyo is joining Cloudflare](<https://www.arroyo.dev/blog/arroyo-is-joining-cloudflare/>) — _arroyo.dev_
11. [Prefect just bought Dagster, another big Airflow rival — and it's not a data pipeline story](<https://thenewstack.io/prefect-acquires-dagster-orchestrator/>) — _thenewstack.io_
12. [Building Service Topology at Scale: Architecture, Challenges, and Lessons Learned](<https://netflixtechblog.com/building-service-topology-at-scale-architecture-challenges-and-lessons-learned-f4b792f3f0d8>) — _netflixtechblog.com_
13. [Cloudflare as a Data Platform?](<https://dataengineeringcentral.substack.com/p/cloudflare-as-a-data-platform>) — _dataengineeringcentral.substack.com_
14. [xai-org/grok-build, now open source](<https://simonwillison.net/2026/Jul/15/grok-build/#atom-everything>) — _simonwillison.net_
15. [Improvements to secret scanning and public monitoring](<https://github.blog/changelog/2026-07-15-improvements-to-secret-scanning-and-public-monitoring>) — _github.blog_
16. [Benchmarking Single Node vs Distributed](<https://pola.rs/posts/single-node-vs-distributed/>) — _pola.rs_
17. [Cache Layer Architecture: A Practical Guide to Speed & Scale](<https://redis.io/blog/cache-layer-architecture-guide/>) — _redis.io_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-07-15` | Wednesday | [Read →](news/en/2026-07-15.md) |
| `2026-07-14` | Tuesday | [Read →](news/en/2026-07-14.md) |
| `2026-07-13` | Monday | [Read →](news/en/2026-07-13.md) |
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

<sub>[Browse the full archive (31) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
