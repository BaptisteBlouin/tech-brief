# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-10
<sub>updated 10 November 2026 at 12:01</sub>

## AI models and releases

- Anthropic released Claude Fable 5.2 and Mythos 5.2, and Fable 5.2 is currently ranked first on Artificial Analysis <sup>[1](<https://simonwillison.net/2026/Nov/9/llm-anthropic/>), [2](<https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/>)</sup>.
- Fable 5.2 is priced at $8 per million input tokens and $40 per million output tokens, down from $10 and $50 for Fable 5.1 <sup>[2](<https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/>)</sup>.
- On the GDPx professional-task benchmark run by SemiAnalysis, Fable 5.2 took first place at 16.4%, but cost rose to $88.15 per task from $67.16 because it wrote far more test cases and spawned subagents to check its work <sup>[2](<https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/>)</sup>.
- Meta launched Muse Ember, its smallest and most efficient model, aimed at tool calls, coding subtasks, routing and extraction; for shorter prompts it is priced the same as GPT-6 Luna and Claude Haiku 5.5 at $0.10 per million input and $0.50 per million output tokens <sup>[3](<https://simonwillison.net/2026/Nov/10/muse-ember/>)</sup>.
- Anthropic's documentation says that telling Fable 5.2 the codebase is its own made it merge repeated code in about half of tries, versus under a tenth without that statement <sup>[4](<https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/>)</sup>.

## LLM tooling and developer workflows

- The llm-anthropic 0.31 release adds Fable 5.2 support, but the max reasoning setting failed to return an image because it ran out of tokens after 128,000 thinking tokens <sup>[1](<https://simonwillison.net/2026/Nov/9/llm-anthropic/>)</sup>.
- A developer built Beep Locator with Claude Code, a multi-device system that triangulates a beep's source from phones and tablets acting as listeners <sup>[5](<https://simonwillison.net/2026/Nov/9/mysterious-beeps/>)</sup>.

## Data engineering

- DuckDB's columnar storage means a query touching three of fifty columns reads only those three; values are processed in vectors of 2,048 and compress well because each column holds one type <sup>[6](<https://duckdb.org/2026/11/10/ducks-in-a-column.html>)</sup>.

## Finance and infrastructure

- CoreWeave's bond yield topped 16% as AI credit stress rose, making AI compute financing more expensive <sup>[7](<https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html>)</sup>.

## Sources

1. [llm-anthropic 0.31](<https://simonwillison.net/2026/Nov/9/llm-anthropic/>) — _simonwillison.net_
2. [\[AINews\] Fable 5.2 retakes World #1 LLM spot as $ANT IPO roadshow begins](<https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/>) — _latent.space_
3. [Introducing Our Smallest, Most Efficient Model: Muse Ember](<https://simonwillison.net/2026/Nov/10/muse-ember/>) — _simonwillison.net_
4. [Quoting Prompting Claude Fable 5.2](<https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/>) — _simonwillison.net_
5. [Locating the source of a mysterious beep with Claude](<https://simonwillison.net/2026/Nov/9/mysterious-beeps/>) — _simonwillison.net_
6. [Ducks in a Column](<https://duckdb.org/2026/11/10/ducks-in-a-column.html>) — _duckdb.org_
7. [CoreWeave bond yield tops 16% as AI credit stress rises](<https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html>) — _hnrss.org_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-11-09` | Monday | [Read →](news/en/2026-11-09.md) |
| `2026-11-08` | 🗓️ Weekly recap | [Read →](news/en/2026-11-08.md) |
| `2026-11-07` | Saturday | [Read →](news/en/2026-11-07.md) |
| `2026-11-06` | Friday | [Read →](news/en/2026-11-06.md) |
| `2026-11-05` | Thursday | [Read →](news/en/2026-11-05.md) |
| `2026-11-04` | Wednesday | [Read →](news/en/2026-11-04.md) |
| `2026-11-03` | Tuesday | [Read →](news/en/2026-11-03.md) |
| `2026-11-02` | Monday | [Read →](news/en/2026-11-02.md) |
| `2026-11-01` | 🗓️ Weekly recap | [Read →](news/en/2026-11-01.md) |
| `2026-10-31` | Saturday | [Read →](news/en/2026-10-31.md) |
| `2026-10-30` | Friday | [Read →](news/en/2026-10-30.md) |
| `2026-10-29` | Thursday | [Read →](news/en/2026-10-29.md) |
| `2026-10-28` | Wednesday | [Read →](news/en/2026-10-28.md) |
| `2026-10-27` | Tuesday | [Read →](news/en/2026-10-27.md) |

<sub>[Browse the full archive (147) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
