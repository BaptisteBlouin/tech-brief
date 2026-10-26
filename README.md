# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-26
<sub>updated 26 October 2026 at 12:01</sub>

## AI, LLMs and agents

- Dan Luu argues that AI can now one-shot many projects, so almost anyone can create software, but models still struggle with harder tasks, and developers should be more ambitious as models improve <sup>[1](<https://danluu.com/ambitious/>)</sup>.
- Context engineering is described as hard for structural reasons: models are built, optimized and trained in ways that create specific failure modes, so the challenge will persist as models get better <sup>[2](<https://www.dbreunig.com/2026/10/24/the-state-of-context-engineering.html>)</sup>.
- Tiger Data built three memory systems for its Slack agent (a fact list, a knowledge graph and a tree); agents struggled to interpret graph edges, while a tree built on Postgres's ltree extension worked better and cut a thread-summary filing from dozens of turns to one tool call <sup>[3](<https://www.tigerdata.com/blog/we-built-three-memory-systems-most-expressive-wasnt-most-useful>)</sup>.
- A test of agentic RAG across 298 questions and 2,000 arXiv papers found that letting the agent search again gained 1.2 points, a difference within noise <sup>[4](<https://towardsdatascience.com/does-agentic-rag-actually-retrieve-better-evidence-i-tested-it-on-298-questions/>)</sup>.
- Sutura is an Apache-2.0 Rust runtime that exposes certified metrics and semantic definitions to AI agents over HTTP or MCP, with federated queries and policy enforcement, so agents don't improvise against warehouse tables <sup>[5](<https://github.com/telekom/sutura>)</sup>.
- A dbt podcast reports that data agents still struggle on realistic analytics tasks, with the best agent passing 61% of benchmark queries on the first attempt and a semantic layer significantly improving accuracy; prompt engineering alone is not expected to close the gap <sup>[6](<https://roundup.getdbt.com/p/can-data-agents-do-real-analysis>)</sup>.
- OpenAI and Anthropic cut their LLM prices by up to 80% within a few months, which the author finds strange given their losses and planned IPOs <sup>[7](<https://minimaxir.com/2026/10/cheap-llms/>)</sup>.

## Data engineering and storage

- Lance is presented as a file format for AI workloads that need fast random access to embeddings and multimodal data, where Parquet's scan-oriented design is strained; it claims to be 100x faster than Parquet for such access <sup>[8](<https://vutr.substack.com/p/free-a-file-format-claims-to-be-100x>)</sup>.
- The DuckDB hf extension lets users read, query and write Hugging Face datasets, models and storage buckets with SQL via hf:// URLs, with caching and deduplication <sup>[9](<https://github.com/lhoestq/duckdb-hf-extension>)</sup>.
- Pinterest writes about managing metrics at scale and building an agent-ready metrics layer to replace scattered metric definitions <sup>[10](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-293>)</sup>.
- Oracle GoldenGate replication lag is best diagnosed as a queueing problem across the pipeline, measuring each hop with heartbeat timestamps rather than blaming Replicat by default <sup>[11](<https://hackernoon.com/hunting-replication-lag-a-queue-by-queue-method-for-diagnosing-oracle-goldengate>)</sup>.

## Infrastructure, cloud and DevOps

- Netflix is adding a single-tenant mode to Titus so sensitive workloads can get a dedicated VM within its container platform, motivated by hardware-level noisy-neighbor tail-latency spikes; dedicated nodes improved stability but launches are slower and warm capacity needs more planning <sup>[12](<https://netflixtechblog.com/single-tenant-titus-vm-level-isolation-on-a-multi-tenant-container-platform-6d8b1909d163>)</sup>.
- LinkedIn moved its tracking pipeline, which handles hundreds of billions of events a day, from Java 8 and Play Framework to gRPC and a modern Java runtime, sending 10% of events through both pipelines to compare output before switching; inbound network usage fell about 89% <sup>[13](<https://www.linkedin.com/blog/engineering/infrastructure/rebuilding-linkedins-tracking-infrastructure-scaling-migrating-and-hardening-a-high-volume-event-pipeline>)</sup>.
- A Varonis research post reports a cross-tenant GCP Dataflow flaw where predictable default staging bucket names could let an attacker hijack staged artifacts and reach remote code execution on workers; Google has fixed it, and the lesson is to verify artifact ownership and integrity rather than trust default names <sup>[14](<https://www.varonis.com/blog/shadow-dependency-in-gcp-dataflow-cross-tenant>)</sup>.

## Developer tooling and software engineering

- bbtree is a Rust ordered map whose benchmarks report up to 5x faster single-threaded performance than BTreeMap and 30% lower memory use, built with LLM-written code guided by a database expert and checked through formal verification and testing <sup>[15](<https://bbtree.xiangpeng.systems/post/>)</sup>.
- Cap 0.6.1 is the first version of Cap with no embedded web browser, following its migration to GPUI <sup>[16](<https://cap.so/blog/rebuilding-cap-in-gpui>)</sup>.
- HPTS 2026 concluded that AI systems advance faster than our ability to specify, verify and audit them, making logs, formal checks and human review the real control plane <sup>[17](<https://muratbuffalo.blogspot.com/2026/10/hpts-2026-day-1.html>)</sup>.

## Sources

1. [We should be more ambitious with the software we build](<https://danluu.com/ambitious/>) — _danluu.com_
2. [The State of Context Engineering](<https://www.dbreunig.com/2026/10/24/the-state-of-context-engineering.html>) — _dbreunig.com_
3. [We built three memory systems. The most expressive one wasn't the most useful](<https://www.tigerdata.com/blog/we-built-three-memory-systems-most-expressive-wasnt-most-useful>) — _tigerdata.com_
4. [Does Agentic RAG Actually Retrieve Better Evidence? I Tested It on 298 Questions](<https://towardsdatascience.com/does-agentic-rag-actually-retrieve-better-evidence-i-tested-it-on-298-questions/>) — _towardsdatascience.com_
5. [Sutura](<https://github.com/telekom/sutura>) — _github.com_
6. [Can data agents do real analysis? (51 minute podcast)](<https://roundup.getdbt.com/p/can-data-agents-do-real-analysis>) — _roundup.getdbt.com_
7. [OpenAI and Anthropic cut their LLM prices by up to 80% within a few months. Why?](<https://minimaxir.com/2026/10/cheap-llms/>) — _minimaxir.com_
8. [A file format claims to be 100x faster than Parquet](<https://vutr.substack.com/p/free-a-file-format-claims-to-be-100x>) — _vutr.substack.com_
9. [DuckDB hf extension — read and write Hugging Face assets](<https://github.com/lhoestq/duckdb-hf-extension>) — _github.com_
10. [Data Engineering Weekly #293](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-293>) — _dataengineeringweekly.com_
11. [Hunting Replication Lag: A Queue-by-Queue Method for Diagnosing Oracle GoldenGate](<https://hackernoon.com/hunting-replication-lag-a-queue-by-queue-method-for-diagnosing-oracle-goldengate>) — _hackernoon.com_
12. [Single-tenant Titus: VM-level isolation on a multi-tenant container platform](<https://netflixtechblog.com/single-tenant-titus-vm-level-isolation-on-a-multi-tenant-container-platform-6d8b1909d163>) — _netflixtechblog.com_
13. [Rebuilding LinkedIn's Tracking Infrastructure](<https://www.linkedin.com/blog/engineering/infrastructure/rebuilding-linkedins-tracking-infrastructure-scaling-migrating-and-hardening-a-high-volume-event-pipeline>) — _linkedin.com_
14. [Go With the Flow: Taking a Shadow Dependency in GCP Dataflow Cross Tenant](<https://www.varonis.com/blog/shadow-dependency-in-gcp-dataflow-cross-tenant>) — _varonis.com_
15. [bbtree: fastest ordered map](<https://bbtree.xiangpeng.systems/post/>) — _bbtree.xiangpeng.systems_
16. [A technical deep dive into Cap's migration to GPUI](<https://cap.so/blog/rebuilding-cap-in-gpui>) — _cap.so_
17. [HPTS 2026 (Day 1)](<https://muratbuffalo.blogspot.com/2026/10/hpts-2026-day-1.html>) — _muratbuffalo.blogspot.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-24` | Saturday | [Read →](news/en/2026-10-24.md) |
| `2026-10-23` | Friday | [Read →](news/en/2026-10-23.md) |
| `2026-10-22` | Thursday | [Read →](news/en/2026-10-22.md) |
| `2026-10-21` | Wednesday | [Read →](news/en/2026-10-21.md) |
| `2026-10-20` | Tuesday | [Read →](news/en/2026-10-20.md) |
| `2026-10-19` | Monday | [Read →](news/en/2026-10-19.md) |
| `2026-10-18` | 🗓️ Weekly recap | [Read →](news/en/2026-10-18.md) |
| `2026-10-17` | Saturday | [Read →](news/en/2026-10-17.md) |
| `2026-10-16` | Friday | [Read →](news/en/2026-10-16.md) |
| `2026-10-15` | Thursday | [Read →](news/en/2026-10-15.md) |
| `2026-10-14` | Wednesday | [Read →](news/en/2026-10-14.md) |
| `2026-10-13` | Tuesday | [Read →](news/en/2026-10-13.md) |
| `2026-10-12` | Monday | [Read →](news/en/2026-10-12.md) |
| `2026-10-11` | 🗓️ Weekly recap | [Read →](news/en/2026-10-11.md) |

<sub>[Browse the full archive (132) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
