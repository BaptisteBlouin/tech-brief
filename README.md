# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-17
<sub>updated 17 November 2026 at 12:01</sub>

## AI models and industry

- Perplexity has reached a $1B annual revenue run rate, CEO Aravind Srinivas said, with recent growth attributed partly to its Computer product <sup>[1](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>)</sup>. The same report says the company now has a dedicated research lab with access to 10,000+ GPUs <sup>[1](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>)</sup>.
- Perplexity's recent launches include Computer automations and teammates for recurring tasks, a Monitor API that sends webhooks on topic or page changes, and fully local operation on supported Macs <sup>[1](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>)</sup>.

## AI security and cyber defense

- OpenAI is working with NATO and allied cyber agencies to help trusted defenders find vulnerabilities, test fixes and protect essential systems <sup>[2](<https://openai.com/index/strengthening-nato-allied-cyber-defences-ai>)</sup>.

## Data and AI pipelines

- A DuckDB workshop built a pipeline over 2.1 million Amazon appliance reviews: DuckDB filters the data, an LLM summarizes the complaints, and the result is deployed as a Hugging Face Space callable as an API <sup>[3](<https://duckdb.org/2026/11/17/duckdb-user-group-workshop-ai-powered-review-analysis.html>)</sup>.
- Attendees prototyped on a 22 MB sample locally, then ran the same two Parquet-based files against the full dataset on Hugging Face <sup>[3](<https://duckdb.org/2026/11/17/duckdb-user-group-workshop-ai-powered-review-analysis.html>)</sup>.

## LLM tooling

- The llm 0.37.3 bug-fix release addresses a breakage caused by SQLite 3.54.1, which changed json_object behaviour for subqueries returning json_array results <sup>[4](<https://simonwillison.net/2026/Nov/16/llm/>)</sup>.
- The SQLite fix is intended: a subquery using json_array returns SQL text, so the workaround is wrapping it in json() <sup>[4](<https://simonwillison.net/2026/Nov/16/llm/>)</sup>.

## DevOps and developer tooling

- Dependabot delegated alert dismissal requests now stay open for one year instead of one week, giving reviewers more time before resubmission; the change ships on github.com and in GitHub Enterprise Server 3.24 <sup>[5](<https://github.blog/changelog/2026-11-16-dependabot-alert-dismissal-requests-now-last-one-year>)</sup>.

## Software engineering practice

- Go Proverbs advise that "a little copying is better than a little dependency," a quote Simon Willison highlighted <sup>[6](<https://simonwillison.net/2026/Nov/17/go-proverbs/>)</sup>.

## Sources

1. [\[AINews\] Perplexity hits a $1B revenue run rate, up 4x in 2026](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>) — _latent.space_
2. [Strengthening NATO and allied cyber defenses with AI](<https://openai.com/index/strengthening-nato-allied-cyber-defences-ai>) — _openai.com_
3. [DuckDB User Group Workshop on AI-Powered Review Analysis with Hugging Face](<https://duckdb.org/2026/11/17/duckdb-user-group-workshop-ai-powered-review-analysis.html>) — _duckdb.org_
4. [llm 0.37.3](<https://simonwillison.net/2026/Nov/16/llm/>) — _simonwillison.net_
5. [Dependabot alert dismissal requests now last one year](<https://github.blog/changelog/2026-11-16-dependabot-alert-dismissal-requests-now-last-one-year>) — _github.blog_
6. [Quoting Go Proverbs](<https://simonwillison.net/2026/Nov/17/go-proverbs/>) — _simonwillison.net_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-11-16` | Monday | [Read →](news/en/2026-11-16.md) |
| `2026-11-15` | 🗓️ Weekly recap | [Read →](news/en/2026-11-15.md) |
| `2026-11-14` | Saturday | [Read →](news/en/2026-11-14.md) |
| `2026-11-13` | Friday | [Read →](news/en/2026-11-13.md) |
| `2026-11-12` | Thursday | [Read →](news/en/2026-11-12.md) |
| `2026-11-11` | Wednesday | [Read →](news/en/2026-11-11.md) |
| `2026-11-10` | Tuesday | [Read →](news/en/2026-11-10.md) |
| `2026-11-09` | Monday | [Read →](news/en/2026-11-09.md) |
| `2026-11-08` | 🗓️ Weekly recap | [Read →](news/en/2026-11-08.md) |
| `2026-11-07` | Saturday | [Read →](news/en/2026-11-07.md) |
| `2026-11-06` | Friday | [Read →](news/en/2026-11-06.md) |
| `2026-11-05` | Thursday | [Read →](news/en/2026-11-05.md) |
| `2026-11-04` | Wednesday | [Read →](news/en/2026-11-04.md) |
| `2026-11-03` | Tuesday | [Read →](news/en/2026-11-03.md) |

<sub>[Browse the full archive (154) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
