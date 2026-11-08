# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-08
<sub>updated 8 November 2026 at 12:00</sub>

## Web and browser engineering

- Simon Willison found that Datasette table pages sent an HTTP `link: rel="next"` header that made Firefox prefetch the next page of rows, which wastes bandwidth and server rendering for the few visitors who actually click "next" <sup>[1](<https://simonwillison.net/2026/Nov/7/link-rel-next/>)</sup>. He patched Datasette (issue #3046) to stop serving that header to Firefox on HTML pages <sup>[1](<https://simonwillison.net/2026/Nov/7/link-rel-next/>)</sup>.
- The Firefox behaviour he hit has been an open issue for about 24 years, and he noted that he had forgotten his own 2002 blog post complaining about it <sup>[1](<https://simonwillison.net/2026/Nov/7/link-rel-next/>)</sup>.

## Sources

1. [datasette #3046: Don't serve link: rel=next HTTP headers to Firefox for HTML pages](<https://simonwillison.net/2026/Nov/7/link-rel-next/>) — _simonwillison.net_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-10-26` | Monday | [Read →](news/en/2026-10-26.md) |
| `2026-10-24` | Saturday | [Read →](news/en/2026-10-24.md) |

<sub>[Browse the full archive (145) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
