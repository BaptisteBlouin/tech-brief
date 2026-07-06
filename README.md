# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-07-06
<sub>updated 6 July 2026 at 13:01</sub>

## AI/ML Models and Tooling
- Hugging Face introduces a dedicated "kernel" repository type for Kernels, with improved security (trusted publishers, kernel signing), revamped CLIs, broader framework/backend coverage, and foundations for agentic kernel development <sup>[1](<https://huggingface.co/blog/revamped-kernels>)</sup>.
- GPT-5.6 Sol Ultra is confirmed to be integrated into GitHub Codex <sup>[2](<https://twitter.com/thsottiaux/status/2073933490513752151>)</sup>.
- t0-alpha, a 102M-parameter open-weights time-series LLM, demonstrates strong zero-shot forecasting with causal transformer architecture and probabilistic outputs, outperforming classical baselines on 96/97 configurations <sup>[3](<https://towardsdatascience.com/time-series-llms-explained-with-t0-alpha/>)</sup>.
- Newer Anthropic models may solve tasks correctly but fail stricter tool schemas by adding invalid fields, indicating overfitting to forgiving tool formats and a need for stricter schema validation in agent harnesses <sup>[4](<https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/>)</sup>.
- Claude Science, an AI workbench for scientists, launches to support literature review, hypothesis generation, data analysis, experiment design, and code writing <sup>[5](<https://www.anthropic.com/news/claude-science-ai-workbench>)</sup>.

## RAG, Agents, and Context Engineering
- Context engineering emerges as a discipline to structure company knowledge for reliable agentic Q&A, with clean data models and documentation driving accuracy from 40% to 90%, while query logs add limited value; best practices include starting with 10–20 high-value tables, CI/CD testing, and Git-backed governance <sup>[6](<https://roundup.getdbt.com/p/the-context-engineering-playbook>)</sup>.
- Agentic workflows can automate compliance and risk audits by combining unstructured policy documents with structured data, using ontology mappings, LLM-Wiki, and Text2SQL to reach ≥80/100 confidence <sup>[7](<https://blog.gopenai.com/bridging-the-gap-blending-structured-data-auditing-with-unstructured-policy-intelligence-17710e04c8de>)</sup>.

## MLOps, DevOps, and Infrastructure
- Meta shares its AI Storage Blueprint, detailing a multi-tier hierarchy, intelligent data placement, caching, erasure coding, and networking optimizations for large-scale AI storage <sup>[8](<https://engineering.fb.com/2026/07/01/data-infrastructure/metas-ai-storage-blueprint-at-scale/>)</sup>.
- Inference now dominates AI costs, accounting for ~two-thirds of compute and 80–90% of lifetime model cost; key levers include KV cache management, batching, quantization, and speculative decoding, with physical bottlenecks (HBM, NVLink, optics, power) as durable advantages <sup>[9](<https://www.datagravity.dev/p/how-an-ai-token-travels-through-a>)</sup>.
- Grab migrates its high-QPS fraud Counter Service from a wide-column DB to Aerospike, achieving zero downtime via storage facades, shadow reads/writes, and deterministic traffic splitting, while cutting record cardinality, disk usage, p99 latency, and per-node costs by ~50% <sup>[10](<https://engineering.grab.com/counter-service-storage-migration>)</sup>.

## Developer Tools and Data Engineering
- sqlite-utils 4.0rc3 adds support for compound foreign keys (with a breaking change to `table.foreign_keys`) and aligns with SQLite’s case-insensitive column name convention, among other fixes <sup>[11](<https://simonwillison.net/2026/Jul/6/sqlite-utils/#atom-everything>)</sup>.
- StreamFusion is an open-source Flink SQL accelerator that transparently replaces supported streaming operators with native Rust/Apache Arrow/DataFusion execution over JNI, maintaining byte-identical parity <sup>[12](<https://github.com/datafusion-contrib/StreamFusion>)</sup>.
- Redis publishes a benchmark-driven comparison of open-source vector databases, highlighting Redis for ultra-low latency/high QPS hybrid search, Qdrant/Weaviate for rich metadata filtering, and Milvus for massive scale <sup>[13](<https://redis.io/blog/best-open-source-vector-databases-comparison/>)</sup>.
- Instacart details variance reduction techniques for A/B testing and causal inference below the randomization grain, using CUPED and stratification to enable more precise measurements <sup>[14](<https://tech.instacart.com/variance-reduction-below-the-randomization-grain-31719f87a7d2>)</sup>.
- GitBiased offers a customizable dashboard for GitHub activity, consolidating PRs, CI checks, issues, DORA metrics, deployments, and weekly summaries <sup>[15](<https://gitbiased.com/>)</sup>.
- Allemannsdata provides 23 no-key MCP servers for Norway’s open public data across domains like transport, weather, energy, and health <sup>[16](<https://allemannsdata.com/>)</sup>.

## Sources

1. [🤗 Kernels: Major Updates](<https://huggingface.co/blog/revamped-kernels>) — _huggingface.co_
2. [GPT-5.6 Sol Ultra will be in Codex](<https://twitter.com/thsottiaux/status/2073933490513752151>) — _hnrss.org_
3. [Time-Series LLMs, Explained with t0-alpha](<https://towardsdatascience.com/time-series-llms-explained-with-t0-alpha/>) — _towardsdatascience.com_
4. [Better Models: Worse Tools](<https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/>) — _lucumr.pocoo.org_
5. [Claude Science, an AI Workbench for Scientists, Is Now Available](<https://www.anthropic.com/news/claude-science-ai-workbench>) — _anthropic.com_
6. [The context engineering playbook](<https://roundup.getdbt.com/p/the-context-engineering-playbook>) — _roundup.getdbt.com_
7. [Bridging the Gap: Blending Structured Data Auditing with Unstructured Policy Intelligence](<https://blog.gopenai.com/bridging-the-gap-blending-structured-data-auditing-with-unstructured-policy-intelligence-17710e04c8de>) — _blog.gopenai.com_
8. [Meta's AI Storage Blueprint at Scale](<https://engineering.fb.com/2026/07/01/data-infrastructure/metas-ai-storage-blueprint-at-scale/>) — _engineering.fb.com_
9. [How an AI Token Travels Through a Data Center](<https://www.datagravity.dev/p/how-an-ai-token-travels-through-a>) — _datagravity.dev_
10. [Migrating Counter Service storage: Design choices and learnings](<https://engineering.grab.com/counter-service-storage-migration>) — _engineering.grab.com_
11. [sqlite-utils 4.0rc3](<https://simonwillison.net/2026/Jul/6/sqlite-utils/#atom-everything>) — _simonwillison.net_
12. [StreamFusion](<https://github.com/datafusion-contrib/StreamFusion>) — _github.com_
13. [Comparing the Best Open Source Vector databases](<https://redis.io/blog/best-open-source-vector-databases-comparison/>) — _redis.io_
14. [Variance Reduction Below the Randomization Grain](<https://tech.instacart.com/variance-reduction-below-the-randomization-grain-31719f87a7d2>) — _tech.instacart.com_
15. [GitBiased (Tool)](<https://gitbiased.com/>) — _gitbiased.com_
16. [Norwegian public-data MCP servers (Tool)](<https://allemannsdata.com/>) — _allemannsdata.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-06-24` | Wednesday | [Read →](news/en/2026-06-24.md) |
| `2026-06-23` | Tuesday | [Read →](news/en/2026-06-23.md) |
| `2026-06-22` | Monday | [Read →](news/en/2026-06-22.md) |

<sub>[Browse the full archive (21) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
