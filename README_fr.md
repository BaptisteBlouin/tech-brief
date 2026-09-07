# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-09-07
<sub>mis à jour le 7 septembre 2026 à 13:00</sub>

## AI Models and Research
- OpenAI publishes details on its progress toward Recursive Self-Improvement (RSI), framing it as a step toward AGI and advocating for public transparency and governance of highly capable systems <sup>[1](<https://openai.com/index/research-acceleration-view-inside-openai/>)</sup>.
- OpenAI also launches an AI program with AIRPPU and WAN-IFRA to support Ukrainian news organizations in strengthening innovation and independent journalism <sup>[2](<https://openai.com/index/supporting-independent-journalism-in-ukraine>)</sup>.

## Agentic Systems and Tooling
- Google’s AI Agents Challenge highlights that top multi-agent systems rely on software engineering patterns: bidirectional MCP for inter-agent communication, async event buses for parallel execution, unified validation for fallbacks, and tiered routing to reduce inference costs <sup>[3](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Spotify’s Portal routes bulk I/O (e.g., reading files) to lightweight, declarative modes using cheaper models (Gemini 2.5 Flash), cutting Claude Code token usage by 90% and reserving frontier models for complex reasoning <sup>[4](<https://engineering.atspotify.com/2026/9/portal-by-spotify-cut-my-claude-code-token-usage-by-90>)</sup>.
- Governed agentic analytics should avoid free-form SQL against inconsistent metadata; instead, use verified semantic layers, parameterized calls, and explicit refusal paths, reserving open-ended SQL for human inspection <sup>[5](<https://www.eckerson.com/articles/configuring-agentic-ai-analytics-from-free-text-to-sql-to-model-context-protocol>)</sup>.
- Nao recommends starting agentic analytics with a focused use case, measuring results, and improving data models before investing in a full semantic layer <sup>[6](<https://www.youtube.com/watch?v=BbWfELhzQRU>)</sup>.
- A primer explains how context, semantic, and ontology layers help agents interpret data, but humans must keep the knowledge accurate and current <sup>[7](<https://motherduck.com/blog/context-layer-vs-semantic-layer-ontology/>)</sup>.

## MLOps and Data Engineering
- Vortex, an open-source columnar format, streams training data from S3 to GPUs with minimal copying, using lightweight encodings, layout-aware pruning, and zero-copy memory paths to reduce CPU/NVMe bottlenecks <sup>[8](<https://www.infoq.com/presentations/vortex-columnar-file-format-gpu-streaming/>)</sup>.
- Polars 2.0 pre-release switches the streaming engine as the default for lazy queries, lowering memory use and speeding execution, while tightening type coercion and removing deprecated APIs to fail fast on mismatches <sup>[9](<https://pola.rs/posts/announcing-polars-2/>)</sup>.
- Sail 0.7 adds stateless compute with durable job state, persisting shuffle outputs as compressed Arrow streams and supporting checkpoints to improve resilience under preemption <sup>[10](<https://lakesail.com/blog/sail-0-7-blocking-shuffle-checkpoint/>)</sup>.
- DuckFlight enables PostgreSQL tools and Arrow Flight SQL clients to read/write live DuckDB databases without a separate service or data copying <sup>[11](<https://github.com/sidequery/duckflight-extension>)</sup>.

## DevOps and Infrastructure
- Meta’s ZGateway proxy in front of ZippyDB reduces client connection fan-in by ~97–98%, enables batching/coalescing across clients, rejects noisy tenant traffic, and centralizes failover/load-balancing policies <sup>[12](<https://engineering.fb.com/2026/09/03/core-infra/zgateway-proxy-zippydb-meta/>)</sup>.
- A real-world Postgres example shows COPY reducing a 100,000-row load from 41 minutes (row-by-row) to 11 seconds by eliminating round trips, parse overhead, and WAL flush barriers <sup>[13](<https://ankit-rana.com/logs/47-batching-one-round-trip-beats-a-thousand/>)</sup>.
- Apache Iggy, a Rust streaming engine, offers Kafka-like logs with thread-per-core execution and modern Linux I/O, suited for low-latency single-node or simpler deployments, though Kafka remains stronger for replication and multi-region ops <sup>[14](<https://softwaremill.com/apache-kafka-vs-apache-iggy-same-log-different-engine/>)</sup>.
- PostgreSQL 19 Beta 3 introduces temporal SQL, idempotent upsert-and-fetch, concurrent repacking, and stricter NULL handling <sup>[15](<https://tapoueh.org/blog/2026/09/getting-ready-for-postgresql-19/>)</sup>.

## Developer Tools and Practices
- Warner Music Group built a resilient pipeline to ingest hand-edited Google Sheets into governed Databricks tables, handling shifting tabs, renamed headers, and late edits for executive reporting <sup>[16](<https://tech.wmg.com/handling-the-messy-reality-of-google-sheets-building-a-resilient-counterfeit-takedown-pipeline-d4c3502664bd>)</sup>.
- A Lean 4-based Terraform alternative, "infra," reconciles declared resources with cloud state, demonstrating rapid IaC development with compile-time guarantees <sup>[17](<https://ngrislain.github.io/blog/2026-9-6-terraform-in-lean-4-if-it-compiles-it-will-likely-deploy/>)</sup>.

## Sources

1. [Research acceleration: The view inside OpenAI](<https://openai.com/index/research-acceleration-view-inside-openai/>) — _openai.com_
2. [Supporting independent journalism in Ukraine](<https://openai.com/index/supporting-independent-journalism-in-ukraine>) — _openai.com_
3. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
4. [Portal by Spotify cut my Claude Code token usage by 90%](<https://engineering.atspotify.com/2026/9/portal-by-spotify-cut-my-claude-code-token-usage-by-90>) — _engineering.atspotify.com_
5. [Configuring agentic AI analytics: From free-text-to-SQL to Model Context Protocol](<https://www.eckerson.com/articles/configuring-agentic-ai-analytics-from-free-text-to-sql-to-model-context-protocol>) — _eckerson.com_
6. [Taking Analytics by Storm with Agents (49 minute video)](<https://www.youtube.com/watch?v=BbWfELhzQRU>) — _youtube.com_
7. [Context, Semantics, and Ontology: A Primer for the Agentic Era](<https://motherduck.com/blog/context-layer-vs-semantic-layer-ontology/>) — _motherduck.com_
8. [From S3 to GPU in one copy: Rethinking data loading for ML training (50 minute video)](<https://www.infoq.com/presentations/vortex-columnar-file-format-gpu-streaming/>) — _infoq.com_
9. [Pre-release of Polars 2.0](<https://pola.rs/posts/announcing-polars-2/>) — _pola.rs_
10. [Sail 0.7: Stateless Compute, Durable Job State](<https://lakesail.com/blog/sail-0-7-blocking-shuffle-checkpoint/>) — _lakesail.com_
11. [DuckFlight](<https://github.com/sidequery/duckflight-extension>) — _github.com_
12. [ZGateway: Learnings from putting a proxy in front of ZippyDB](<https://engineering.fb.com/2026/09/03/core-infra/zgateway-proxy-zippydb-meta/>) — _engineering.fb.com_
13. [One round trip beats a thousand, and your batch API probably is not batching](<https://ankit-rana.com/logs/47-batching-one-round-trip-beats-a-thousand/>) — _ankit-rana.com_
14. [Apache Kafka vs Apache Iggy: Same log, different engine](<https://softwaremill.com/apache-kafka-vs-apache-iggy-same-log-different-engine/>) — _softwaremill.com_
15. [Getting ready for PostgreSQL 19](<https://tapoueh.org/blog/2026/09/getting-ready-for-postgresql-19/>) — _tapoueh.org_
16. [When the source of truth is a Google Sheet](<https://tech.wmg.com/handling-the-messy-reality-of-google-sheets-building-a-resilient-counterfeit-takedown-pipeline-d4c3502664bd>) — _tech.wmg.com_
17. [Terraform in Lean 4: If It Compiles, It Will Likely Deploy](<https://ngrislain.github.io/blog/2026-9-6-terraform-in-lean-4-if-it-compiles-it-will-likely-deploy/>) — _ngrislain.github.io_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-09-06` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-06.md) |
| `2026-09-05` | Samedi | [Lire →](news/fr/2026-09-05.md) |
| `2026-09-04` | Vendredi | [Lire →](news/fr/2026-09-04.md) |
| `2026-09-03` | Jeudi | [Lire →](news/fr/2026-09-03.md) |
| `2026-09-02` | Mercredi | [Lire →](news/fr/2026-09-02.md) |
| `2026-09-01` | Mardi | [Lire →](news/fr/2026-09-01.md) |
| `2026-08-31` | Lundi | [Lire →](news/fr/2026-08-31.md) |
| `2026-08-30` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-08-30.md) |
| `2026-08-29` | Samedi | [Lire →](news/fr/2026-08-29.md) |
| `2026-08-28` | Vendredi | [Lire →](news/fr/2026-08-28.md) |
| `2026-08-27` | Jeudi | [Lire →](news/fr/2026-08-27.md) |
| `2026-08-26` | Mercredi | [Lire →](news/fr/2026-08-26.md) |
| `2026-08-25` | Mardi | [Lire →](news/fr/2026-08-25.md) |
| `2026-08-24` | Lundi | [Lire →](news/fr/2026-08-24.md) |

<sub>[Parcourir toute l’archive (84) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
