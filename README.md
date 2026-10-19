# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-10-19
<sub>updated 19 October 2026 at 13:01</sub>

## AI Models and Research

- Anthropic's Claude Opus 4.7 agents were stranded alone on a virtual desert island for 30 hours; without instructions they set their own goals and began arranging blocks into patterns and constellations <sup>[1](<https://www.technologyreview.com/2026/10/19/1147095/ai-stranded-claude-virtual-desert-island-play/>)</sup>.
- Terence Tao argues that LLMs' ability to generate proofs could lead either to a golden age for science or to knowledge concentrating in few hands and becoming alien to human understanding <sup>[2](<https://terrytao.wordpress.com/2026/10/18/will-it-be-a-golden-age-or-a-dark-age-for-mathematics-and-science/#more-18496>)</sup>.
- Tao is reportedly doing little mathematics at present, feeling used after OpenAI's recent mathematical results, which he sees mainly as model evaluation <sup>[3](<https://www.nytimes.com/2026/10/16/us/math-ai-terence-tao.html>)</sup>.
- TabPFN is a foundation model trained on synthetic data that performs classification and regression on new tabular datasets without per-dataset training <sup>[4](<https://github.com/PriorLabs/tabpfn>)</sup>.

## Agents, RAG and LLM Tooling

- Simon Willison released llm-echo 0.5, a no-LLM debug model whose simulated token usage now counts tool calls, system prompts and reasoning tokens <sup>[5](<https://simonwillison.net/2026/Oct/18/llm-echo/>)</sup>.
- llm-tools-datasette 0.1.1 is out, fixing a breakage caused by the LLM move to httpx2 that affected plugins relying on httpx without declaring it <sup>[6](<https://simonwillison.net/2026/Oct/18/llm-tools-datasette/>)</sup>.
- DeepSeek's Search API returns structured web results and its Fetch API returns a page as Markdown, useful for grounding agents <sup>[7](<https://api-docs.deepseek.com/guides/search/>)</sup>.
- Production agent guidance stresses that agents can fail silently while telemetry stays green, so continuous evals, separate agent identities with tiered permissions, and human approval of business risk are needed <sup>[8](<https://www.infoq.com/news/2026/10/ai-systems-production/>)</sup>.
- A cost comparison for agentic analytics found Opus gave the best reports but cost more, with routing by task (Sonnet, Gemini Flash, Opus) balancing quality and cost <sup>[9](<https://trangntr.substack.com/p/which-llm-should-run-your-agentic>)</sup>.
- For MCP graph tools, a design argument is to return focused, bounded views with explicit scope rather than broad subgraphs <sup>[10](<https://inferenceengineer.substack.com/p/on-holons-and-focus>)</sup>.

## MLOps and Data Engineering

- Datalogy open-sourced Zephon, which applies late-binding, deterministic online execution to AI training data loading instead of offline ETL materialization <sup>[11](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-292>)</sup>.
- Large Spark and Ray jobs give slow feedback for autonomous coding agents, so representative tests and cost-aware guardrails are recommended <sup>[12](<https://www.ssp.sh/blog/cache-invalidation-problem-data-engineering/>)</sup>.
- DuckDB's duckdb-differential adds snapshots, time travel, branches and clones through SQL, with optional S3 publishing <sup>[13](<https://tobilg.com/posts/differential-storage-for-duckdb>)</sup>.
- MotherDuck's prompt_jev() analyses images in SQL, processing 1,010 photos for about $0.06 at 90.2% accuracy, rising to 97.7% when keeping the 81% of high-confidence results <sup>[14](<https://motherduck.com/blog/motherduck-announce-jev-image/>)</sup>.

## DevOps, Infrastructure and Developer Tools

- GitHub's CodeQL will not support traced scans on macOS 27 or Xcode 27, nor Swift 6.4; users should pin to macOS 26 and Xcode 26 or use build mode none, and Intel Mac support is deprecated in mid-December 2026 <sup>[15](<https://github.blog/changelog/2026-10-19-codeql-changes-for-macos-27-xcode-27-and-swift-6-4>)</sup>.
- Grafana Tempo 3.1 adds TLS and extra auth for Kafka-backed tracing, query-based trace redaction, and sampling-aware TraceQL metrics, with a redaction dry run advised before time-bounded deletions <sup>[16](<https://grafana.com/blog/tempo-3-1-release-all-the-latest-features/>)</sup>.
- Neon's Realtime public beta turns SQL queries, including joins and aggregates, into live subscriptions that update as Postgres data changes, with no polling or separate service <sup>[17](<https://neon.com/blog/neon-now-has-realtime>)</sup>.

## Sources

1. [AI researchers stranded Claude on a virtual desert island. It started to “play.”](<https://www.technologyreview.com/2026/10/19/1147095/ai-stranded-claude-virtual-desert-island-play/>) — _technologyreview.com_
2. [Will it be a golden age or a dark age for mathematics (and science)?](<https://terrytao.wordpress.com/2026/10/18/will-it-be-a-golden-age-or-a-dark-age-for-mathematics-and-science/#more-18496>) — _terrytao.wordpress.com_
3. [Why One of the World's Greatest Mathematicians Is on a ‘War Footing'](<https://www.nytimes.com/2026/10/16/us/math-ai-terence-tao.html>) — _nytimes.com_
4. [TabPFN](<https://github.com/PriorLabs/tabpfn>) — _github.com_
5. [llm-echo 0.5](<https://simonwillison.net/2026/Oct/18/llm-echo/>) — _simonwillison.net_
6. [llm-tools-datasette 0.1.1](<https://simonwillison.net/2026/Oct/18/llm-tools-datasette/>) — _simonwillison.net_
7. [Search & Fetch](<https://api-docs.deepseek.com/guides/search/>) — _api-docs.deepseek.com_
8. [AI in Production: Panellists Highlight Silent Failures, Harness Engineering, and Agent Governance](<https://www.infoq.com/news/2026/10/ai-systems-production/>) — _infoq.com_
9. [Which LLM should run your agentic analytics? Accuracy vs. cost of Claude, Gemini and GPT](<https://trangntr.substack.com/p/which-llm-should-run-your-agentic>) — _trangntr.substack.com_
10. [A Graph Has No Centre](<https://inferenceengineer.substack.com/p/on-holons-and-focus>) — _inferenceengineer.substack.com_
11. [Data Engineering Weekly #292](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-292>) — _dataengineeringweekly.com_
12. [Data Engineering Is the Cache Invalidation Problem Ft. Josh Wills](<https://www.ssp.sh/blog/cache-invalidation-problem-data-engineering/>) — _ssp.sh_
13. [Differential storage for DuckDB](<https://tobilg.com/posts/differential-storage-for-duckdb>) — _tobilg.com_
14. [prompt_jev() now works on images](<https://motherduck.com/blog/motherduck-announce-jev-image/>) — _motherduck.com_
15. [CodeQL changes for macOS 27, Xcode 27, and Swift 6.4](<https://github.blog/changelog/2026-10-19-codeql-changes-for-macos-27-xcode-27-and-swift-6-4>) — _github.blog_
16. [Tempo 3.1 Release: Kafka, Trace Redaction, and TraceQL Metrics](<https://grafana.com/blog/tempo-3-1-release-all-the-latest-features/>) — _grafana.com_
17. [Neon now has realtime](<https://neon.com/blog/neon-now-has-realtime>) — _neon.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-10-07` | Wednesday | [Read →](news/en/2026-10-07.md) |
| `2026-10-06` | Tuesday | [Read →](news/en/2026-10-06.md) |
| `2026-10-05` | Monday | [Read →](news/en/2026-10-05.md) |

<sub>[Browse the full archive (126) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
