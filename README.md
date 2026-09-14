# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-09-14
<sub>updated 14 September 2026 at 13:01</sub>

## AI Models and Agents
- Perplexity deploys OpenAI's GPT-6 Astra end-to-end for writing communications, modifying software, and monitoring production systems, requiring far less human oversight than prior models <sup>[1](<https://openai.com/index/perplexity-improving-accuracy-with-astra>)</sup>.
- Google's AI Agents Challenge highlights that robust multi-agent systems rely on software engineering patterns: bidirectional MCP for inter-agent communication, async event buses for parallelism, strict unified validation for fallbacks, and tiered routing to reduce inference costs <sup>[2](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Google releases ADK for Kotlin 1.0 with full feature parity to Python/Java, enabling idiomatic multi-agent development on Kotlin Multiplatform, Android-first extensions (LiteRT-LM, Firebase AI, Room, AppSearch), and advanced orchestration like human-in-the-loop and context compaction <sup>[3](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- Autonomous LLM post-training loops using Tunix on TPUs can iteratively optimize LoRA ranks, learning rates, and batch sizes overnight, committing verified improvements to Git <sup>[4](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>.
- OpenAI launches ChatGPT Work's Data agent to let employees query approved company data and build dashboards in plain language, respecting existing permissions and integrating with major BI platforms <sup>[5](<https://openai.com/index/put-data-to-work/>)</sup>.

## RAG, Retrieval, and Embeddings
- Pinterest's Manas retrieval platform scales to billions of embeddings; recent optimizations include 20–30% serving cost cuts via quantization, SSD-backed ANN experiments to reduce memory/CPU, and multi-embedding retrieval beyond two-tower matching <sup>[6](<https://medium.com/pinterest-engineering/evolving-pinterests-embedding-retrieval-platform-aede4e831e01>)</sup>.

## MLOps and Evaluation
- Google recommends behavioral evaluations—fast, local, unit-style tests asserting discrete intermediate actions (e.g., tool calls, file edits)—to complement slow end-to-end benchmarks like SWE-bench, enabling safer iteration on prompts and model upgrades <sup>[7](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.
- Debugging AI agents requires end-to-end traces of model/tool calls, retrieval inputs/outputs, and separate tests for deterministic system behavior vs. answer quality, as agents can be wrong despite passing CI and evals <sup>[8](<https://thenewstack.io/ai-agent-trace-debugging/>)</sup>.

## DevOps, Infrastructure, and Cloud
- PlanetScale's Neki sharded Postgres achieves 118M queries/sec across 512 shards and 1.22 PiB with a narrow point-select workload, demonstrating clean scaling for primary-key lookups <sup>[9](<https://planetscale.com/blog/118-million-queries-per-second-on-neki>)</sup>.
- DuckDB 2.0 accelerates S3 queries 2–3x via async I/O, improves deep recursive queries, and optimizes semi-structured VARIANT data over JSON, while adding triggers, nested schemas, and data-modifying CTEs <sup>[10](<https://motherduck.com/blog/why-duckdb-20-is-faster/>)</sup>.
- Diskless Kafka (KIP-1150) moves durable storage to object storage with strongly consistent metadata, trading cheaper retention for changes in batching, offset assignment, recovery, compaction, latency, and feature support—making it a workload-specific choice <sup>[11](<https://softwaremill.com/diskless-kafka-object-storage-kip-1150-and-kafkas-future/>)</sup>.
- Estuary details how large PostgreSQL CDC backfills fail due to WAL retention, delayed slot acknowledgments, long-running transactions, and stale snapshots; safer designs keep WAL consumption during chunked reads and reconcile overlaps with watermarks <sup>[12](<https://estuary.dev/blog/postgres-cdc-backfill>)</sup>.

## Developer Tools and Engineering Practices
- Simon Willison releases commit-rewriter 0.1, a web app to edit Git commit messages (e.g., cleaning up coding agent cruft), runnable via `uvx commit-rewriter` <sup>[13](<https://simonwillison.net/2026/Sep/14/commit-rewriter/>)</sup>.
- shot-scraper 1.12 adds WebP support with configurable quality, yielding smaller screenshots than JPEG/PNG <sup>[14](<https://simonwillison.net/2026/Sep/13/shot-scraper/>)</sup>.
- Lyft rebuilds its travel-time map with more accurate ETAs, better coverage, and self-service fields, refreshing every six months and planning time-aware ETAs <sup>[15](<https://eng.lyft.com/refreshing-the-travel-time-map-behind-lyfts-marketplace-rebuilding-neighborhood-reachability-5be3efbc82ea>)</sup>.
- Jetpack (OSDI '26) adds a portable 1-RTT fast-commit path to consensus systems, cutting write-heavy latency by up to 60% with tradeoffs like redundant work and careful leader-change recovery <sup>[16](<https://muratbuffalo.blogspot.com/2026/09/jetpack-consensus-made-generally-fast.html>)</sup>.

## Sources

1. [Perplexity trusts GPT-6 Astra with end-to-end systems](<https://openai.com/index/perplexity-improving-accuracy-with-astra>) — _openai.com_
2. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
3. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
4. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_
5. [Now everyone can put data to work](<https://openai.com/index/put-data-to-work/>) — _openai.com_
6. [Evolving Pinterest's Embedding Retrieval Platform](<https://medium.com/pinterest-engineering/evolving-pinterests-embedding-retrieval-platform-aede4e831e01>) — _medium.com_
7. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
8. [It passed CI. It passed your evals. The customer still got the wrong answer](<https://thenewstack.io/ai-agent-trace-debugging/>) — _thenewstack.io_
9. [118 million queries per second on Neki](<https://planetscale.com/blog/118-million-queries-per-second-on-neki>) — _planetscale.com_
10. [Why DuckDB 2.0 is faster](<https://motherduck.com/blog/why-duckdb-20-is-faster/>) — _motherduck.com_
11. [Diskless Kafka: What Happens When Brokers Stop Owning the Data?](<https://softwaremill.com/diskless-kafka-object-storage-kip-1150-and-kafkas-future/>) — _softwaremill.com_
12. [PostgreSQL CDC Backfills at Scale: Running a Multi-Day Backfill While Production Keeps Writing](<https://estuary.dev/blog/postgres-cdc-backfill>) — _estuary.dev_
13. [commit-rewriter 0.1](<https://simonwillison.net/2026/Sep/14/commit-rewriter/>) — _simonwillison.net_
14. [shot-scraper 1.12](<https://simonwillison.net/2026/Sep/13/shot-scraper/>) — _simonwillison.net_
15. [Refreshing the Travel-Time Map Behind Lyft's Marketplace: Rebuilding Neighborhood Reachability Signals](<https://eng.lyft.com/refreshing-the-travel-time-map-behind-lyfts-marketplace-rebuilding-neighborhood-reachability-5be3efbc82ea>) — _eng.lyft.com_
16. [Jetpack: Consensus Made Generally Fast (OSDI '26)](<https://muratbuffalo.blogspot.com/2026/09/jetpack-consensus-made-generally-fast.html>) — _muratbuffalo.blogspot.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-09-13` | 🗓️ Weekly recap | [Read →](news/en/2026-09-13.md) |
| `2026-09-12` | Saturday | [Read →](news/en/2026-09-12.md) |
| `2026-09-11` | Friday | [Read →](news/en/2026-09-11.md) |
| `2026-09-10` | Thursday | [Read →](news/en/2026-09-10.md) |
| `2026-09-09` | Wednesday | [Read →](news/en/2026-09-09.md) |
| `2026-09-08` | Tuesday | [Read →](news/en/2026-09-08.md) |
| `2026-09-07` | Monday | [Read →](news/en/2026-09-07.md) |
| `2026-09-06` | 🗓️ Weekly recap | [Read →](news/en/2026-09-06.md) |
| `2026-09-05` | Saturday | [Read →](news/en/2026-09-05.md) |
| `2026-09-04` | Friday | [Read →](news/en/2026-09-04.md) |
| `2026-09-03` | Thursday | [Read →](news/en/2026-09-03.md) |
| `2026-09-02` | Wednesday | [Read →](news/en/2026-09-02.md) |
| `2026-09-01` | Tuesday | [Read →](news/en/2026-09-01.md) |
| `2026-08-31` | Monday | [Read →](news/en/2026-08-31.md) |

<sub>[Browse the full archive (91) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
