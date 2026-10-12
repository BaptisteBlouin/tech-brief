# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-12
<sub>updated 12 October 2026 at 13:00</sub>

## AI Agents and Models

- Meta delayed its Muse AI agent for months over safety concerns, then pushed for launch after a startup's agent (Instinct) succeeded, fearing a loss of competitive edge <sup>[1](<https://www.nytimes.com/2026/10/09/technology/inside-mark-zuckerbergs-decision-to-pull-the-trigger-on-metas-ai-agent.html>)</sup>. The launch gave Meta an early lead in agents, though the agent had safety hiccups, such as giving a user's address to a Facebook Marketplace seller without permission <sup>[1](<https://www.nytimes.com/2026/10/09/technology/inside-mark-zuckerbergs-decision-to-pull-the-trigger-on-metas-ai-agent.html>)</sup>.
- Anthropic's Claude Dashboards beta can build a dashboard without manual chart creation, and numbers can be traced to their sources; it lacks row-level security, refresh, and audit logging for now <sup>[2](<https://thedatavist.substack.com/p/claude-dashboards-and-the-shift-from>)</sup>.
- DuckDB's CLI now detects when an AI agent is using it, switching to compact output, flagging truncated results, stopping runaway queries, and returning JSON errors; across 132 TPC-H runs, agents read about 60% fewer tokens and still answered every question correctly <sup>[3](<https://duckdb.org/2026/10/09/agent-mode>)</sup>.
- Elastic describes a context engine aimed at cutting agent token use by 71%, based on the observation that agents waste tokens rediscovering what tables and fields mean on each question <sup>[4](<https://www.elastic.co/search-labs/blog/context-engineering-for-agents>)</sup>.
- Pinterest replaced a fragile keyword-clustering pipeline with a fine-tuned 4B LLM that turns user activity into ranked, localized goals, using teacher-model distillation for cost and strict output validation and safety filters <sup>[5](<https://medium.com/pinterest-engineering/from-activity-to-intent-generating-user-journeys-with-llms-9652b9417626>)</sup>.
- Researchers released 36 preprints produced with BootLoops, a harness that finds and solves problems in unrelated scientific fields sharing the same mathematical structure <sup>[6](<https://www.science.org/content/article/problems-22-scientific-fields-had-solutions-hiding-plain-sight-ai-has-found-them>)</sup>.
- Anthropic signed a deal worth up to $45 billion to lease computing power from SpaceX, a sign of compute demand outpacing supply <sup>[7](<https://www.wsj.com/articles/the-ai-computing-crunch-is-making-rivals-into-partners-09431721>)</sup>.

## Data Engineering and Context for Agents

- LinkedIn's data context layer combines LLM-written profiles from schemas, query logs, and code with notes teams write and review in Git; after connecting its analytics agent, acceptable answers in one test rose from 25.9% to 79.5% and median answer time fell from 10.7 to 4.7 minutes <sup>[8](<https://www.linkedin.com/blog/engineering/infrastructure/inside-linkedins-data-context-layer-curating-trustworthy-context-for-humans-and-agents>)</sup>.
- Salesforce runs about 8 million Spark jobs a day and found some workloads left executors idle over 90% of the time; sizing workloads to measured usage cut weekly compute costs by 31% without pushing runtime, failures, or retries beyond acceptable levels <sup>[9](<https://engineering.salesforce.com/apache-spark-resource-optimization-lessons-from-eight-million-jobs-a-day/>)</sup>.
- A Reddit user reported that a single-node DuckDB beat Trino on the same hardware by 1.7 to 2.1 times on 10 TB queries after running four times as many read threads as cores, and was 2 to 3 times slower than a 5 to 13 node Trino cluster at about half the cost <sup>[10](<https://www.reddit.com/r/DuckDB/comments/1x1h4f4/im_now_convinced_singlenode_duckdb_is_the_best/>)</sup>.
- Apache Fluss's "Streamhouse" concept proposes one maintained logical table covering streaming, serving, and analytics, unifying fresh stream data and historical lakehouse data behind shared metadata and tiering <sup>[11](<https://ipolyzos.substack.com/p/what-defines-the-streamhouse-architecture>)</sup>.
- Netflix uses an ontology-driven knowledge graph to make observability data, incident discussion, and service topology queryable together, aiming at faster automated triage and root-cause analysis <sup>[12](<https://www.infoq.com/presentations/netflix-observability-aiops-ontology-scale>)</sup>.

## DevOps, Infrastructure and Databases

- GitHub is rebuilding its Git storage architecture, decoupling writes from reads and offloading maintenance to object storage, with early internal testing showing a 35x write improvement; developer workflows and security controls are said to be unchanged <sup>[13](<https://www.theregister.com/devops/2026/10/09/so-long-spokes-github-rewrites-storage-to-restore-reliability-just-in-time-for-agentic-hordes/5302148>)</sup>.
- Let's Encrypt will begin issuing 64-day certificates starting October 14, its first reduction in certificate lifetime <sup>[14](<https://scotthelme.co.uk/the-first-reduction-in-their-history-64-day-lets-encrypt-certificates/>)</sup>.
- Five PostgreSQL benchmarks show that unnecessary deduplication, CTE materialization, random sorting, extra column retrieval, and unindexed expressions can slow queries sharply, with small SQL changes or a matching index yielding large speedups <sup>[15](<https://explainmeasured.com/posts/queries-doing-extra-work/>)</sup>.
- Eight to ten major features were pulled from Postgres 19 during beta, some very late in the cycle <sup>[16](<https://peter.eisentraut.org/blog/2026/10/09/the-reverts-will-continue-until-morale-improves>)</sup>.

## Sources

1. [Inside Mark Zuckerberg's Decision to Pull the Trigger on Meta's AI Agent](<https://www.nytimes.com/2026/10/09/technology/inside-mark-zuckerbergs-decision-to-pull-the-trigger-on-metas-ai-agent.html>) — _nytimes.com_
2. [Claude Dashboards and the shift from chart builder to chart specifier](<https://thedatavist.substack.com/p/claude-dashboards-and-the-shift-from>) — _thedatavist.substack.com_
3. [Agent Mode in the DuckDB CLI](<https://duckdb.org/2026/10/09/agent-mode>) — _duckdb.org_
4. [How we're building a context engine to cut agent token use by 71%](<https://www.elastic.co/search-labs/blog/context-engineering-for-agents>) — _elastic.co_
5. [From Activity to Intent: Generating User Journeys with LLMs](<https://medium.com/pinterest-engineering/from-activity-to-intent-generating-user-journeys-with-llms-9652b9417626>) — _medium.com_
6. [Problems in 22 scientific fields had solutions hiding in plain sight. An AI has found them](<https://www.science.org/content/article/problems-22-scientific-fields-had-solutions-hiding-plain-sight-ai-has-found-them>) — _science.org_
7. [The AI Computing Crunch Is Making Rivals Into Partners](<https://www.wsj.com/articles/the-ai-computing-crunch-is-making-rivals-into-partners-09431721>) — _wsj.com_
8. [Inside LinkedIn's data context layer: curating trustworthy context for humans and agents](<https://www.linkedin.com/blog/engineering/infrastructure/inside-linkedins-data-context-layer-curating-trustworthy-context-for-humans-and-agents>) — _linkedin.com_
9. [Apache Spark Resource Optimization: Lessons From Eight Million Jobs a Day](<https://engineering.salesforce.com/apache-spark-resource-optimization-lessons-from-eight-million-jobs-a-day/>) — _engineering.salesforce.com_
10. [I'm now convinced single-node DuckDB is the best engine at any realistic scale (Reddit Thread)](<https://www.reddit.com/r/DuckDB/comments/1x1h4f4/im_now_convinced_singlenode_duckdb_is_the_best/>) — _reddit.com_
11. [What Defines The Streamhouse Architecture?](<https://ipolyzos.substack.com/p/what-defines-the-streamhouse-architecture>) — _ipolyzos.substack.com_
12. [Ontology‐Driven Observability: Building the E2E Knowledge Graph at Netflix Scale (51 minute video)](<https://www.infoq.com/presentations/netflix-observability-aiops-ontology-scale>) — _infoq.com_
13. [So long, Spokes: GitHub rewrites storage to restore reliability, just in time for agentic hordes](<https://www.theregister.com/devops/2026/10/09/so-long-spokes-github-rewrites-storage-to-restore-reliability-just-in-time-for-agentic-hordes/5302148>) — _theregister.com_
14. [The First Reduction in Their History: 64-Day Let's Encrypt Certificates](<https://scotthelme.co.uk/the-first-reduction-in-their-history-64-day-lets-encrypt-certificates/>) — _scotthelme.co.uk_
15. [Five PostgreSQL queries that did more work than I asked for](<https://explainmeasured.com/posts/queries-doing-extra-work/>) — _explainmeasured.com_
16. [The reverts will continue until morale improves](<https://peter.eisentraut.org/blog/2026/10/09/the-reverts-will-continue-until-morale-improves>) — _peter.eisentraut.org_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-11` | 🗓️ Weekly recap | [Read →](news/en/2026-10-11.md) |
| `2026-10-10` | Saturday | [Read →](news/en/2026-10-10.md) |
| `2026-10-09` | Friday | [Read →](news/en/2026-10-09.md) |
| `2026-10-08` | Thursday | [Read →](news/en/2026-10-08.md) |
| `2026-10-07` | Wednesday | [Read →](news/en/2026-10-07.md) |
| `2026-10-06` | Tuesday | [Read →](news/en/2026-10-06.md) |
| `2026-10-05` | Monday | [Read →](news/en/2026-10-05.md) |
| `2026-10-04` | 🗓️ Weekly recap | [Read →](news/en/2026-10-04.md) |
| `2026-10-03` | Saturday | [Read →](news/en/2026-10-03.md) |
| `2026-10-02` | Friday | [Read →](news/en/2026-10-02.md) |
| `2026-10-01` | Thursday | [Read →](news/en/2026-10-01.md) |
| `2026-09-30` | Wednesday | [Read →](news/en/2026-09-30.md) |
| `2026-09-29` | Tuesday | [Read →](news/en/2026-09-29.md) |
| `2026-09-28` | Monday | [Read →](news/en/2026-09-28.md) |

<sub>[Browse the full archive (119) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
