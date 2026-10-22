# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-22
<sub>updated 22 October 2026 at 13:01</sub>

## AI Models and Research

- Shopify trains and hosts specialist open models for Sidekick's focused tasks, using production failures and human feedback. Its GraphQL specialist slightly outperformed the frontier model on Shopify's evaluation while responding 7x faster and costing about 90% less to serve <sup>[1](<https://shopify.engineering/open-model-task-experts>)</sup>.
- A solo engineer reportedly trained a 3.848B-parameter LLM from scratch for $998, finishing in 43 hours on eight rented B200s and reaching 0.384 CORE on DCLM, roughly 50% above GPT-2's reported score <sup>[2](<https://blog.gopenai.com/one-engineer-trained-a-3-8b-parameter-llm-from-scratch-for-998-7ef5cd7809b7>)</sup>.
- Ensemble forecasting with IBM's Granite time-series models is covered in a Hugging Face blog post, with the ibm-granite/granite-timeseries-ensemble-r1 model listed on the hub <sup>[3](<https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1>)</sup>.
- A Cohere Labs open science project tested whether models understand culture using Hungarian riddles; the models gave answers that sounded right but were missing culturally specific facts, and in some cases hallucinated <sup>[4](<https://cohere.com/blog/can-ai-understand-culture>)</sup>.

## Security

- OpenAI's Patch the Planet program, using GPT-5.6 Sol, is one of two parties that independently found PHP2Shell vulnerabilities in core PHP, which the write-up says affect about 70% of the web; the other party is Wiz, now part of Google Cloud <sup>[5](<https://www.latent.space/p/ainews-openais-patch-the-planet-program>)</sup>.
- The NSA advised organizations using PHP to update immediately or take their systems offline until they can <sup>[6](<https://techcrunch.com/2026/10/21/the-internet-is-having-a-very-bad-cybersecurity-day/>)</sup>. PHP's security release fixes two critical vulnerabilities that let unauthenticated attackers execute code on servers <sup>[7](<https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/>)</sup>.
- Node.js released an update fixing four high-severity vulnerabilities, and LiteLLM was compromised through injected malicious code <sup>[6](<https://techcrunch.com/2026/10/21/the-internet-is-having-a-very-bad-cybersecurity-day/>)</sup>.

## AI Agents and Enterprise Tooling

- Anthropic's Claude Duet joins the agent race. It connects to more than 6,000 outside apps, shows users its planned actions before acting, blocks some actions even with approval, and its waitlist is open to Pro and Max subscribers <sup>[8](<https://www.nytimes.com/2026/10/21/technology/anthropic-ai-agent-claude-duet.html>)</sup>.
- Meta says Muse has over 10M users, with over a quarter of engaged users shopping through the AI agent at an average purchase above $200 <sup>[9](<https://techcrunch.com/2026/10/21/meta-says-muse-has-over-10m-users-with-shopping-a-top-activity/>)</sup>.
- A write-up on agent loop topology argues an agent is a model, an agentic loop, and a set of tools, and that where these run affects cost, capability and security <sup>[10](<https://blog.exe.dev/topology>)</sup>.
- Snowflake agent governance recommends identifying sensitive data, applying access and masking policies, and adding agent-specific permissions and prompt-injection checks <sup>[11](<https://medium.com/snowflake/governing-data-and-ai-agents-in-snowflake-a-data-engineers-field-notes-0662c602b404>)</sup>.

## Data Engineering and Analytics

- DuckDB 2.0.0 LTS "Cinnamon Teal" adds client-server support, faster file reads, an AI agent mode and SQL triggers, supported until at least October 2027, though files created in 2.0 cannot be read by older versions <sup>[12](<https://duckdb.org/2026/10/21/announcing-duckdb-200>)</sup>.
- Mercedes-Benz open-sourced dbt_iterative_snapshot for Databricks, which processes batches chronologically and repairs historical records when late data arrives <sup>[13](<https://blog.dataengineerthings.org/dbt-snapshots-cant-handle-late-data-so-we-built-one-that-can-ef107cc9e02e>)</sup>.
- PyDebeziumAI embeds Debezium's CDC engine in a Python process to keep vector stores fresh without Kafka or Connect, supporting Chroma, PGVector and Milvus <sup>[14](<https://github.com/debezium/debezium-ai-python>)</sup>.
- Meta reduced repeated product-analytics work to seven parameterized measurement patterns, which power more than 9,000 production pipelines <sup>[15](<https://medium.com/@AnalyticsAtMeta/scaling-ai-native-analytics-patterns-at-meta-b29162cb46bf>)</sup>.

## Software Engineering and Infrastructure

- Storage costs from inference are often overlooked in AI infrastructure planning, since inference runs continuously and every request leaves data behind <sup>[16](<https://www.technologyreview.com/2026/10/22/1146948/ais-hidden-storage-bill-what-inference-leaves-behind/>)</sup>.
- An event-sourcing analysis argues Dynamic Consistency Boundaries avoid false conflicts, but tag-based versions may just move fixed boundaries into high-cardinality indexes; it recommends multi-stream transactions unless narrower contention is proven <sup>[17](<https://www.architecture-weekly.com/p/thoughts-on-dynamic-consistency-boundary>)</sup>.
- Apache Arrow targets in-memory analytics with contiguous typed buffers, reducing serialization between engines like Spark, pandas and DuckDB, unlike Parquet's storage focus <sup>[18](<https://medium.com/@rongalinaidu/from-disk-pages-to-columnar-memory-why-apache-arrow-77d9147244cb>)</sup>.

## Sources

1. [How Shopify turns open models into task experts](<https://shopify.engineering/open-model-task-experts>) — _shopify.engineering_
2. [One Engineer Trained a 3.8B Parameter LLM from Scratch for $998](<https://blog.gopenai.com/one-engineer-trained-a-3-8b-parameter-llm-from-scratch-for-998-7ef5cd7809b7>) — _blog.gopenai.com_
3. [Ensemble forecasting with IBM Granite time-series models](<https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1>) — _huggingface.co_
4. [Can AI understand culture?](<https://cohere.com/blog/can-ai-understand-culture>) — _cohere_
5. [\[AINews\] OpenAI’s Patch the Planet program is 1 of 2 parties to discover PHP2Shell vulnerabilities in core PHP affecting 70% of the web, using GPT-5.6 Sol; coordinated response over 2 months](<https://www.latent.space/p/ainews-openais-patch-the-planet-program>) — _latent.space_
6. [The internet is having a very bad cybersecurity day](<https://techcrunch.com/2026/10/21/the-internet-is-having-a-very-bad-cybersecurity-day/>) — _techcrunch.com_
7. [Today's PHP Security Release, and How We're Strengthening PHP Security](<https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/>) — _thephp.foundation_
8. [Anthropic Joins the AI Agent Race With Claude Duet](<https://www.nytimes.com/2026/10/21/technology/anthropic-ai-agent-claude-duet.html>) — _nytimes.com_
9. [Meta says Muse has over 10M users, with shopping a top activity](<https://techcrunch.com/2026/10/21/meta-says-muse-has-over-10m-users-with-shopping-a-top-activity/>) — _techcrunch.com_
10. [The Topology of an LLM Agent Loop With Tool Use](<https://blog.exe.dev/topology>) — _blog.exe.dev_
11. [Governing Data and AI Agents in Snowflake: A Data Engineer's Field Notes](<https://medium.com/snowflake/governing-data-and-ai-agents-in-snowflake-a-data-engineers-field-notes-0662c602b404>) — _medium.com_
12. [Announcing DuckDB 2.0.0 LTS “Cinnamon Teal”](<https://duckdb.org/2026/10/21/announcing-duckdb-200>) — _duckdb.org_
13. [dbt Snapshots Can't Handle Late Data. So We Built One That Can](<https://blog.dataengineerthings.org/dbt-snapshots-cant-handle-late-data-so-we-built-one-that-can-ef107cc9e02e>) — _blog.dataengineerthings.org_
14. [PyDebeziumAI](<https://github.com/debezium/debezium-ai-python>) — _github.com_
15. [Scaling AI-Native Analytics Patterns at Meta](<https://medium.com/@AnalyticsAtMeta/scaling-ai-native-analytics-patterns-at-meta-b29162cb46bf>) — _medium.com_
16. [AI’s hidden storage bill: What inference leaves behind](<https://www.technologyreview.com/2026/10/22/1146948/ais-hidden-storage-bill-what-inference-leaves-behind/>) — _technologyreview.com_
17. [Thoughts on Dynamic Consistency Boundary](<https://www.architecture-weekly.com/p/thoughts-on-dynamic-consistency-boundary>) — _architecture-weekly.com_
18. [From Disk Pages to Columnar Memory: Why Apache Arrow?](<https://medium.com/@rongalinaidu/from-disk-pages-to-columnar-memory-why-apache-arrow-77d9147244cb>) — _medium.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-10-10` | Saturday | [Read →](news/en/2026-10-10.md) |
| `2026-10-09` | Friday | [Read →](news/en/2026-10-09.md) |
| `2026-10-08` | Thursday | [Read →](news/en/2026-10-08.md) |

<sub>[Browse the full archive (129) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
