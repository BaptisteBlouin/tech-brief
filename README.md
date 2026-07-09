# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-09
<sub>updated 9 July 2026 at 13:00</sub>

## AI/ML Models & Tooling
- SpaceXAI releases Grok 4.5, an Opus-class model with twice the token efficiency of peers and pricing at $2/$6 per million input/output tokens; it is positioned as a GPT‑5.5 equivalent and performs comparably to current top models on standard evals, though some benchmarks like SWE-Bench Pro are now considered saturated <sup>[1](<https://www.latent.space/p/ainews-spacexai-launches-grok-45>), [2](<https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/>)</sup>.
- OpenAI upgrades ChatGPT’s voice mode with GPT‑Live, which maintains natural conversation while offloading complex tasks to GPT‑5.5 (and future frontier models) in the background, enabling hour-long, uninterrupted interactions <sup>[3](<https://simonwillison.net/2026/Jul/8/introducing-gptlive/#atom-everything?utm_source=tldrnewsletter>), [4](<https://simonwillison.net/2026/Jul/8/introducing-gptlive/#atom-everything>)</sup>.

## Agents, RAG & Data Infrastructure
- Modal argues that cloud infrastructure must evolve for agent workloads: agents need tight feedback loops, inspectable environments, and rich context to debug and iterate, unlike human developers who can fill gaps manually <sup>[5](<https://www.latent.space/p/modal2026>)</sup>.
- HubSpot details scaling a vector retrieval platform to 20B+ vectors across 140+ clusters, moving from manual Helm to Kubernetes operators to automate provisioning, scaling, and recovery, reducing spin-up from hours to minutes <sup>[6](<https://product.hubspot.com/blog/building-the-ai-retrieval-infrastructure-behind-20-billion-vectors-at-hubspot>)</sup>.
- Apache Hudi adds native vector search to the lakehouse, enabling semantic search and RAG directly on Hudi tables with HNSW indexing and hybrid search, removing the need for a separate vector DB <sup>[7](<https://hudi.apache.org/blog/2026/07/06/bringing-vector-search-to-the-lakehouse-with-apache-hudi/>)</sup>.
- Apache Iceberg v3 introduces a Variant type to store semi-structured JSON as compact binary with shredded fields, accelerating analytics via typed reads, column pruning, and statistics while avoiding schema migrations <sup>[8](<https://iceberglakehouse.com/posts/iceberg-v3-variant-type-ai-json-payloads/>)</sup>.
- Apache Ossie (incubating) standardizes semantic data modeling for datasets, fields, metrics, and relationships to keep definitions consistent across tools and provide governed business context to agents <sup>[9](<https://ossie.apache.org/>)</sup>.

## MLOps & Developer Tools
- Bun’s core is rewritten from Zig to Rust to eliminate memory-safety bugs; the process used agentic engineering with Anthropic models, yielding a faster, smaller runtime with lower memory usage <sup>[10](<https://simonwillison.net/2026/Jul/8/rewriting-bun-in-rust/#atom-everything>), [11](<https://bun.com/blog/bun-in-rust>)</sup>.
- TypeScript 7.0 delivers native-code speed and shared-memory multithreading, with typical full-build speedups of 8–12× <sup>[12](<https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/>)</sup>.

## DevOps & Cloud/Infra
- Cloudflare introduces Meerkat, an experimental global consensus service for small control-plane state management <sup>[13](<https://blog.cloudflare.com/meerkat-introduction/>)</sup>.
- Kafka performance deep dive: tuning `linger.ms` trades latency for throughput by controlling batch size and send frequency <sup>[14](<https://jack-vanlightly.com/blog/2026/7/7/apache-kafka-performance-1-lingerms>)</sup>.

## Data Engineering & Practices
- For AI-generated pipelines, enforce Write-Audit-Publish contracts, parameterization, idempotency, and schema inspection via database MCPs to prevent silent errors <sup>[15](<https://motherduck.com/blog/robust-data-pipelines-with-ai/>)</sup>.
- A correctness layer for data engineering with agents should validate SQL, schemas, lineage, and blast radius deterministically rather than relying on model confidence <sup>[16](<https://www.ssp.sh/blog/where-agents-belong-in-de/>)</sup>.
- Apache DataFusion runs billion-edge graph algorithms (e.g., PageRank) on a laptop with 5–10 GB RAM by leveraging disk-backed, spill-aware execution <sup>[17](<https://semyonsinchenko.github.io/ssinchenko/post/datafusion-graphs-cc-2/>)</sup>.

## Sources

1. [\[AINews\] SpaceXAI launches Grok 4.5, first Opus-class model post Cursor acquisition](<https://www.latent.space/p/ainews-spacexai-launches-grok-45>) — _latent.space_
2. [SpaceXAI releases Grok 4.5, which Elon describes as an ‘Opus-class model'](<https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/>) — _techcrunch.com_
3. [GPT‑Live](<https://simonwillison.net/2026/Jul/8/introducing-gptlive/#atom-everything?utm_source=tldrnewsletter>) — _simonwillison.net_
4. [Introducing GPT‑Live](<https://simonwillison.net/2026/Jul/8/introducing-gptlive/#atom-everything>) — _simonwillison.net_
5. [Why AI Infrastructure must evolve for Agent Experience — Akshat Bubna, Modal CTO](<https://www.latent.space/p/modal2026>) — _latent.space_
6. [Building the AI Retrieval Infrastructure Behind 20 Billion+ Vectors at HubSpot](<https://product.hubspot.com/blog/building-the-ai-retrieval-infrastructure-behind-20-billion-vectors-at-hubspot>) — _product.hubspot.com_
7. [Bringing Vector Search to the Lakehouse with Apache Hudi](<https://hudi.apache.org/blog/2026/07/06/bringing-vector-search-to-the-lakehouse-with-apache-hudi/>) — _hudi.apache.org_
8. [The Variant Type in Apache Iceberg: How Shredding Turns Messy JSON Into Fast Analytics](<https://iceberglakehouse.com/posts/iceberg-v3-variant-type-ai-json-payloads/>) — _iceberglakehouse.com_
9. [Apache Ossie (incubating) is the universal standard for semantic data](<https://ossie.apache.org/>) — _ossie.apache.org_
10. [Rewriting Bun in Rust](<https://simonwillison.net/2026/Jul/8/rewriting-bun-in-rust/#atom-everything>) — _simonwillison.net_
11. [Rewriting Bun in Rust](<https://bun.com/blog/bun-in-rust>) — _bun.com_
12. [Announcing TypeScript 7.0](<https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/>) — _devblogs.microsoft.com_
13. [Introducing Meerkat: an experiment in global consensus](<https://blog.cloudflare.com/meerkat-introduction/>) — _blog.cloudflare.com_
14. [Apache Kafka performance #1 - linger.ms](<https://jack-vanlightly.com/blog/2026/7/7/apache-kafka-performance-1-lingerms>) — _jack-vanlightly.com_
15. [How to Build Robust Data Pipelines with AI](<https://motherduck.com/blog/robust-data-pipelines-with-ai/>) — _motherduck.com_
16. [Where AI Agents Belong in Data Engineering: The Correctness Layer](<https://www.ssp.sh/blog/where-agents-belong-in-de/>) — _ssp.sh_
17. [Algorithms on billion-scale graph using 10GB RAM: I love DataFusion!](<https://semyonsinchenko.github.io/ssinchenko/post/datafusion-graphs-cc-2/>) — _semyonsinchenko.github.io_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-06-28` | 🗓️ Weekly recap | [Read →](news/en/2026-06-28.md) |
| `2026-06-27` | Saturday | [Read →](news/en/2026-06-27.md) |
| `2026-06-26` | Friday | [Read →](news/en/2026-06-26.md) |
| `2026-06-25` | Thursday | [Read →](news/en/2026-06-25.md) |

<sub>[Browse the full archive (24) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
