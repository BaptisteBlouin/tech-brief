# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-30
<sub>updated 30 July 2026 at 13:00</sub>

## AI/ML Models, Security & Evaluation
- A new ICML paper argues a fundamental LLM flaw—how models identify instruction sources—makes them inherently vulnerable to adversarial attacks that bypass safety guardrails, with researchers demonstrating extraction of restricted knowledge (e.g., synthesis instructions, sabotage methods) and suggesting the problem may be unsolvable <sup>[1](<https://www.technologyreview.com/2026/07/30/1140927/a-fundamental-flaw-leaves-llms-vulnerable-to-attack/>)</sup>.
- OpenAI’s July annualized recurring revenue surpasses its entire Q2, driven by GPT-5.6, ChatGPT Work, and Codex adoption, as the company races to justify its valuation and infrastructure spend ahead of a potential IPO <sup>[2](<https://www.cnbc.com/2026/07/29/openai-cfo-sarah-friar-tells-employees-arr-in-july-topped-all-of-q2.html>)</sup>.
- Airbnb details an eval-driven development workflow: manual review of 100+ prototype outputs to surface failure modes, then automated checks and calibrated LLM judges (high-80% agreement with humans) for agentic systems across tool calls, reasoning, and final outputs <sup>[3](<https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788>)</sup>.
- PerplexityAI open-sources **numbat**, a tool for endpoint visibility into AI agent activity with local detection, optional pre-action blocking, and forensic reconstruction <sup>[4](<https://github.com/perplexityai/numbat>)</sup>.

## Agents, RAG & LLM Tooling
- LangChain migrates to an agent-first data stack, replacing legacy BI with Hex to combine dbt definitions, semantic models, trusted datasets, guides, and LangSmith traces, enabling agents to generate reliable SQL under centralized governance <sup>[5](<https://www.langchain.com/blog/agent-data-stack>)</sup>.
- MotherDuck’s upcoming **Guides** feature introduces a context layer for agents, storing business definitions, exceptions, and rules alongside data with database/personal/org scoping, SQL support, and versioning to prevent hallucinations on company data <sup>[6](<https://www.youtube.com/watch?v=hmjRc6KJ-hw>)</sup>.
- ByteByteGo explains how frontier labs optimize agent loops via harness layers, API efficiency, and inference cost reduction to make tasks cheaper and more reliable <sup>[7](<https://blog.bytebytego.com/p/how-chatgpt-optimizes-its-agent-loop>)</sup>.
- Monte Carlo’s 2026 guide highlights agent observability as a production must-have, with 73% of enterprises refusing to ship agents without monitoring; it distinguishes tracing-first, eval-first, gateway, and platform tools but notes most miss upstream data quality/lineage issues <sup>[8](<https://montecarlo.ai/blog-agent-observability-tool>)</sup>.
- A practical engineering take: treat prompt changes like code deploys—test, gate, and default to blocking—since prompts are dependencies that can silently alter production behavior <sup>[9](<https://luke.geek.nz/azure/eval-gates-for-prompts/>)</sup>.

## MLOps & Data Engineering
- Spotify engineers an external index for petabyte-scale data lakes, mapping keys to Parquet file offsets/row numbers to replace distributed SQL scans with parallel ranged reads, while write-time optimizations (per-key page flushing, ZSTD resets, column interleaving) reduce I/O and latency for hybrid batch/interactive workloads <sup>[10](<https://engineering.atspotify.com/2026/7/indexing-the-data-lake-for-online-point-queries>)</sup>.
- Atlassian scales **StreamHub** from 22B to 145B daily events by migrating from Kinesis to Kafka (AWS MSK), leveraging Tiered Storage for cost savings while navigating broker, S3, and disk limits; lessons emphasize quotas, sharding, spare capacity, and failover planning <sup>[11](<https://www.atlassian.com/blog/how-we-build/scaling-streamhub-transitioning-from-kinesis-to-kafka-for-145-billion-daily-events>)</sup>.
- New streaming log platforms (Iggy, S2, OpenData Log) diverge from Kafka compatibility, betting on Rust/TCP/QUIC/HTTP or object storage for bottomless retention and key-based routing, potentially complementing or replacing Kafka <sup>[12](<https://www.streamingdata.tech/p/the-new-wave-of-the-streaming-log-tech>)</sup>.
- dltHub advocates **composable canonicals**: versioned domain models that encode ontology and identity rules across systems, letting agents use stable concepts rather than raw tables <sup>[13](<https://dlthub.com/blog/composable-canonicals>)</sup>.
- CockroachLabs proposes consolidating AI production stacks under a single database with serializable SQL, row-level TTL, changefeeds, and distributed vector indexing for transactional data, ephemeral state, and embeddings <sup>[14](<https://cockroachlabs.com/blog/database-consolidation-production-ai>)</sup>.

## DevOps, Infra & Cloud
- Data center demand drives a hiring spree for electricians and carpenters, with AI companies offering high pay and bonuses to skilled trades for remote builds <sup>[15](<https://www.nytimes.com/2026/07/29/business/economy/data-center-electricians-training.html?unlocked_article_code=1.1VA.e8sV.PdyR8boC53M4&smid=nytcore-ios-share>)</sup>.
- A cautionary note: compute costs for AI may rise 10x+ as labs prioritize training over inference spending, signaling potential stalls in model progress if inference becomes prohibitively expensive <sup>[16](<https://www.dwarkesh.com/p/why-compute-might-get-10x-more-expensive>)</sup>.

## Sources

1. [A fundamental flaw leaves LLMs strikingly vulnerable to attack](<https://www.technologyreview.com/2026/07/30/1140927/a-fundamental-flaw-leaves-llms-vulnerable-to-attack/>) — _technologyreview.com_
2. [OpenAI CFO Sarah Friar tells employees that annualized revenue in July topped all of Q2](<https://www.cnbc.com/2026/07/29/openai-cfo-sarah-friar-tells-employees-arr-in-july-topped-all-of-q2.html>) — _cnbc.com_
3. [Eval-driven development: Lessons from evaluating GenAI at scale](<https://medium.com/airbnb-engineering/eval-driven-development-lessons-from-evaluating-genai-at-scale-e817e5ae5788>) — _medium.com_
4. [numbat](<https://github.com/perplexityai/numbat>) — _github.com_
5. [How LangChain Built an Agent-First Data Stack](<https://www.langchain.com/blog/agent-data-stack>) — _langchain.com_
6. [Your AI Agent Doesn't Know Your Business | Context Layers Explained (31 minute video)](<https://www.youtube.com/watch?v=hmjRc6KJ-hw>) — _youtube.com_
7. [How ChatGPT Optimizes its Agent Loop: Harness, API, and Inference](<https://blog.bytebytego.com/p/how-chatgpt-optimizes-its-agent-loop>) — _blog.bytebytego.com_
8. [The 2026 Guide to Agent Observability Tools](<https://montecarlo.ai/blog-agent-observability-tool>) — _montecarlo.ai_
9. [Treat prompt changes like code deploys](<https://luke.geek.nz/azure/eval-gates-for-prompts/>) — _luke.geek.nz_
10. [Indexing the Data Lake for Online Point Queries](<https://engineering.atspotify.com/2026/7/indexing-the-data-lake-for-online-point-queries>) — _engineering.atspotify.com_
11. [Scaling StreamHub: Transitioning from Kinesis to Kafka for 145 Billion Daily Events](<https://www.atlassian.com/blog/how-we-build/scaling-streamhub-transitioning-from-kinesis-to-kafka-for-145-billion-daily-events>) — _atlassian.com_
12. [The New Wave of the Streaming Log Technologies](<https://www.streamingdata.tech/p/the-new-wave-of-the-streaming-log-tech>) — _streamingdata.tech_
13. [Composable canonicals: from tribal data knowledge to versioned artifact](<https://dlthub.com/blog/composable-canonicals>) — _dlthub.com_
14. [How to Consolidate Your Database Stack for Production AI](<https://cockroachlabs.com/blog/database-consolidation-production-ai>) — _cockroachlabs.com_
15. [AI Companies Are Recruiting Electricians and Carpenters by the Thousands](<https://www.nytimes.com/2026/07/29/business/economy/data-center-electricians-training.html?unlocked_article_code=1.1VA.e8sV.PdyR8boC53M4&smid=nytcore-ios-share>) — _nytimes.com_
16. [Why compute might get 10x+ more expensive in coming years](<https://www.dwarkesh.com/p/why-compute-might-get-10x-more-expensive>) — _dwarkesh.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-07-29` | Wednesday | [Read →](news/en/2026-07-29.md) |
| `2026-07-28` | Tuesday | [Read →](news/en/2026-07-28.md) |
| `2026-07-27` | Monday | [Read →](news/en/2026-07-27.md) |
| `2026-07-26` | 🗓️ Weekly recap | [Read →](news/en/2026-07-26.md) |
| `2026-07-25` | Saturday | [Read →](news/en/2026-07-25.md) |
| `2026-07-24` | Friday | [Read →](news/en/2026-07-24.md) |
| `2026-07-23` | Thursday | [Read →](news/en/2026-07-23.md) |
| `2026-07-22` | Wednesday | [Read →](news/en/2026-07-22.md) |
| `2026-07-21` | Tuesday | [Read →](news/en/2026-07-21.md) |
| `2026-07-20` | Monday | [Read →](news/en/2026-07-20.md) |
| `2026-07-19` | 🗓️ Weekly recap | [Read →](news/en/2026-07-19.md) |
| `2026-07-18` | Saturday | [Read →](news/en/2026-07-18.md) |
| `2026-07-17` | Friday | [Read →](news/en/2026-07-17.md) |
| `2026-07-16` | Thursday | [Read →](news/en/2026-07-16.md) |

<sub>[Browse the full archive (45) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
