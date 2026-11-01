# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-01
<sub>updated 1 November 2026 at 12:01</sub>

## Security

- Parameter Labs describe an exploit chain against ChatGPT's HTML previews (formerly "Canvas"), the sandboxed iframe feature for interactive custom HTML apps <sup>[1](<https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/>)</sup>. The attack abused the MathLive library's virtual keyboard, which can be triggered from a sandboxed frame via postMessage() and uses innerHTML in the parent page, so untrusted iframe code could inject HTML into the parent and, per the write-up, reach private data and OpenAI APIs <sup>[1](<https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/>)</sup>.
- Lesson for builders: sandboxed iframes are only as safe as every message handler they can reach, so any postMessage receiver that writes innerHTML from frame-supplied data needs origin checks and sanitization <sup>[1](<https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/>)</sup>.

## Sources

1. [How We Took Over ChatGPT Accounts](<https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/>) — _simonwillison.net_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
| `2026-10-31` | Saturday | [Read →](news/en/2026-10-31.md) |
| `2026-10-30` | Friday | [Read →](news/en/2026-10-30.md) |
| `2026-10-29` | Thursday | [Read →](news/en/2026-10-29.md) |
| `2026-10-28` | Wednesday | [Read →](news/en/2026-10-28.md) |
| `2026-10-27` | Tuesday | [Read →](news/en/2026-10-27.md) |
| `2026-10-26` | Monday | [Read →](news/en/2026-10-26.md) |
| `2026-10-24` | Saturday | [Read →](news/en/2026-10-24.md) |
| `2026-10-23` | Friday | [Read →](news/en/2026-10-23.md) |
| `2026-10-22` | Thursday | [Read →](news/en/2026-10-22.md) |
| `2026-10-21` | Wednesday | [Read →](news/en/2026-10-21.md) |
| `2026-10-20` | Tuesday | [Read →](news/en/2026-10-20.md) |
| `2026-10-19` | Monday | [Read →](news/en/2026-10-19.md) |
| `2026-10-18` | 🗓️ Weekly recap | [Read →](news/en/2026-10-18.md) |
| `2026-10-17` | Saturday | [Read →](news/en/2026-10-17.md) |

<sub>[Browse the full archive (138) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
