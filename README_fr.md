# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-09-17
<sub>mis à jour le 17 septembre 2026 à 13:01</sub>

## AI Agents, Models and Tooling
- Steve Yegge shuts down Gas Town, admitting coding agents were unreliable for end-to-end tasks despite heavy spending, echoing broader concerns about agent dependability <sup>[1](<https://www.latent.space/p/ainews-reality-checks-on-ai-news>)</sup>.
- LangChain’s paid-media agent uses LLMs for judgment, code for calculations/safeguards, and human approvals for critical actions, cutting costs while maintaining performance <sup>[2](<https://www.langchain.com/blog/paid-media-agent>)</sup>.
- Google’s AI Agents Challenge highlights winning patterns: bidirectional MCP, async event buses, unified validation, and tiered routing for resilient, low-latency multi-agent systems <sup>[3](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Google releases ADK for Kotlin 1.0 with full feature parity to Python/Java, enabling idiomatic multi-agent development and Android-first extensions (LiteRT-LM, Firebase AI, Room, AppSearch) <sup>[4](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- Google introduces Home MCP (early access) to let agents interact with Google Home devices and event history, with safety guardrails <sup>[5](<https://support.google.com/googlehome/thread/467705013/introducing-home-mcp-enabling-your-agent-to-interact-with-your-home>)</sup>.
- Agent Anomaly Detection (private preview) on Gemini Enterprise Agent Platform monitors OpenTelemetry traces for behavioral risks without adding latency, grounded in OWASP Agentic Top 10 <sup>[6](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>)</sup>.
- Google advocates behavioral evaluations (fast, local unit-style tests) over end-to-end benchmarks for diagnosing agent failures and iterating safely <sup>[7](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.
- Google’s Retrieve-for-Train reduces query-generation latency by 12–20x by teaching a smaller model to produce complementary searches upfront <sup>[8](<https://research.google/blog/bypassing-inference-bottlenecks-accelerating-complex-ai-search-with-retrieve-for-train/>)</sup>.
- A 4B model post-trained with supervised fine-tuning and agentic RL can generate Postgres query plans 81% faster than Postgres’ default optimizer <sup>[9](<https://rohanbansal.com/qorl>)</sup>.
- Airbnb’s Insight Miner encodes extract-embed-cluster workflows and prompt tuning to accelerate support conversation analysis from months to days <sup>[10](<https://airbnb.tech/ai-ml/beyond-the-model-engineering-ai-infra-with-scientific-judgement/>)</sup>.

## MLOps, DevOps, Cloud and Infrastructure
- Apple is reportedly building an AI server with 2–4 M8 Ultra chips, marking its first server release in nearly 20 years, expected in 2029 <sup>[11](<https://arstechnica.com/ai/2026/09/apple-reportedly-building-server-packed-with-m-series-ultra-chips-for-ai/>)</sup>.
- Form3 runs a payment platform active-active-active across AWS, GCP, and Azure, using Kubernetes, NATS JetStream, and CockroachDB, with architecture tailored to regulatory and latency needs <sup>[12](<https://www.infoq.com/presentations/form3-multicloud-architecture/>)</sup>.
- PyIceberg 0.12.0 adds REST-catalog views, conflict-aware retries, incremental scans, Iceberg v3 types, and Python 3.14 support, with correctness and security fixes <sup>[13](<https://iceberg.apache.org/blog/apache-iceberg-python-0.12.0-release/>)</sup>.
- FastRP graph embeddings with Apache DataFusion replace Node2Vec’s random walks with iterative neighbor aggregation, processing 8M-node graphs in ~15 minutes <sup>[14](<https://semyonsinchenko.github.io/ssinchenko/post/fastrp-datafusion/>)</sup>.

## Developer Tools and Software Engineering
- Datasette 1.0a40 and 0.65.5 releases: 1.0a40 adds plugin-managed background tasks and migrates to httpx2; 0.65.5 patches a security bypass via trailing newlines in table names <sup>[15](<https://simonwillison.net/2026/Sep/16/datasette/>), [16](<https://simonwillison.net/2026/Sep/16/datasette-2/>)</sup>.
- PostgreSQL 19’s `pg_plan_advice` serializes plan guidance (join order, scan type) for replayable, diffable query optimization, with selective pinning recommended <sup>[17](<https://tapoueh.org/blog/2026/09/plan-advice-in-postgresql-19/>)</sup>.
- TIN is introduced as a fast, full-featured full-text search extension for Postgres <sup>[18](<https://planetscale.com/blog/introducing-tin>)</sup>.
- DuckDB Skills for Claude Code enable agents to query local/remote files or Iceberg tables directly, with format conversion and session recall <sup>[19](<https://duckdb.org/2026/09/16/duckdb-skills>)</sup>.
- Redis performance pitfalls: single-threaded execution means `KEYS`, `FLUSHALL`, or large `DEL` operations block all clients; use `SCAN`, `UNLINK`, and sharding instead <sup>[20](<https://ankit-rana.com/logs/53-redis-single-threaded-keys-command/>)</sup>.

## Sources

1. [\[AINews\] Reality Checks on AI News (Yegge shuts down Gas Town, Databricks’ +60% Astra cost)](<https://www.latent.space/p/ainews-reality-checks-on-ai-news>) — _latent.space_
2. [How we built LangChain's Paid Media Agent](<https://www.langchain.com/blog/paid-media-agent>) — _langchain.com_
3. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
4. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
5. [Introducing Home MCP: enabling your agent to interact with your home](<https://support.google.com/googlehome/thread/467705013/introducing-home-mcp-enabling-your-agent-to-interact-with-your-home>) — _support.google.com_
6. [Agent Anomaly Detection, now in Private Preview on the Gemini Enterprise Agent Platform](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>) — _google ai_
7. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
8. [Bypassing inference bottlenecks with Retrieve-for-Train](<https://research.google/blog/bypassing-inference-bottlenecks-accelerating-complex-ai-search-with-retrieve-for-train/>) — _research.google_
9. [Training a 4B model to produce 81% faster query plans than Postgres](<https://rohanbansal.com/qorl>) — _rohanbansal.com_
10. [Beyond the model: Engineering AI infra with scientific judgement](<https://airbnb.tech/ai-ml/beyond-the-model-engineering-ai-infra-with-scientific-judgement/>) — _airbnb.tech_
11. [Apple reportedly building server packed with M-series Ultra chips for AI](<https://arstechnica.com/ai/2026/09/apple-reportedly-building-server-packed-with-m-series-ultra-chips-for-ai/>) — _arstechnica.com_
12. [How To Run on Three Clouds at Once, and When Not To (45 minute presentation)](<https://www.infoq.com/presentations/form3-multicloud-architecture/>) — _infoq.com_
13. [Apache Iceberg Python 0.12.0 Release](<https://iceberg.apache.org/blog/apache-iceberg-python-0.12.0-release/>) — _iceberg.apache.org_
14. [FastRP graph embeddings with Apache DataFusion](<https://semyonsinchenko.github.io/ssinchenko/post/fastrp-datafusion/>) — _semyonsinchenko.github.io_
15. [datasette 1.0a40](<https://simonwillison.net/2026/Sep/16/datasette/>) — _simonwillison.net_
16. [datasette 0.65.5](<https://simonwillison.net/2026/Sep/16/datasette-2/>) — _simonwillison.net_
17. [Plan Advice in PostgreSQL 19](<https://tapoueh.org/blog/2026/09/plan-advice-in-postgresql-19/>) — _tapoueh.org_
18. [Introducing TIN: full-text search for Postgres](<https://planetscale.com/blog/introducing-tin>) — _planetscale.com_
19. [DuckDB Skills for Claude Code](<https://duckdb.org/2026/09/16/duckdb-skills>) — _duckdb.org_
20. [Why your Redis is slow: it is single threaded and you sent it KEYS](<https://ankit-rana.com/logs/53-redis-single-threaded-keys-command/>) — _ankit-rana.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-09-16` | Mercredi | [Lire →](news/fr/2026-09-16.md) |
| `2026-09-15` | Mardi | [Lire →](news/fr/2026-09-15.md) |
| `2026-09-14` | Lundi | [Lire →](news/fr/2026-09-14.md) |
| `2026-09-13` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-13.md) |
| `2026-09-12` | Samedi | [Lire →](news/fr/2026-09-12.md) |
| `2026-09-11` | Vendredi | [Lire →](news/fr/2026-09-11.md) |
| `2026-09-10` | Jeudi | [Lire →](news/fr/2026-09-10.md) |
| `2026-09-09` | Mercredi | [Lire →](news/fr/2026-09-09.md) |
| `2026-09-08` | Mardi | [Lire →](news/fr/2026-09-08.md) |
| `2026-09-07` | Lundi | [Lire →](news/fr/2026-09-07.md) |
| `2026-09-06` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-06.md) |
| `2026-09-05` | Samedi | [Lire →](news/fr/2026-09-05.md) |
| `2026-09-04` | Vendredi | [Lire →](news/fr/2026-09-04.md) |
| `2026-09-03` | Jeudi | [Lire →](news/fr/2026-09-03.md) |

<sub>[Parcourir toute l’archive (94) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
