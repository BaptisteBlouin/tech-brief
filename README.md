# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 News automatically published from my tech‑watch on **[baptisteblouin.fr](https://baptisteblouin.fr/veille.en.html)** — generated twice a day, no human in the loop.
>
> Daily tech‑watch digest — AI/ML, LLM tooling, RAG & agents, MLOps, DevOps, cloud, infra and developer tools.
> _Updated twice a day · full archive kept in the repo._
> 🇫🇷 [Version française](README_fr.md)

### Latest digest — 2026-11-16
<sub>updated 16 November 2026 at 12:00</sub>

## Developer tools and data tooling

- Datasette 1.0a43 adds streaming support for output renderers, so plugins can stream every row of a table in one pass via a new `Response.stream()` method <sup>[1](<https://simonwillison.net/2026/Nov/15/datasette/>)</sup>. It also fixes a security issue where private stored queries could expose their title and SQL (not executable) <sup>[1](<https://simonwillison.net/2026/Nov/15/datasette/>)</sup>.
- A backported 0.65.6 release fixes a security issue where a database registered with a route differing from its name could be downloaded by actors denied access to it <sup>[2](<https://simonwillison.net/2026/Nov/15/datasette-2/>)</sup>.
- datasette-maplibre 0.1a0 is a new Datasette geospatial plugin combining MapLibre GL with OpenFreeMap, with a notable feature that renders SVG previews of GeoJSON shapes and loads WebGL previews only when they scroll into view <sup>[3](<https://simonwillison.net/2026/Nov/15/datasette-maplibre/>)</sup>.

## Data engineering and the modern data stack

- Data Engineering Weekly discusses the renewed interest in ontologies and knowledge graphs as AI agents raise their business value <sup>[4](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-296>)</sup>.
- GoDaddy describes building an AI agent for data pipeline creation <sup>[4](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-296>)</sup>.
- PostHog argues the modern data stack era is ending, with data catalogs moving toward context engines <sup>[4](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-296>)</sup>.

## AI industry partnerships

- LVMH's Media Division and OpenAI announced a partnership to support journalism with AI and make its publications more accessible through ChatGPT <sup>[5](<https://openai.com/index/lvmh-media-division-partnership>)</sup>.

## Sources

1. [datasette 1.0a43](<https://simonwillison.net/2026/Nov/15/datasette/>) — _simonwillison.net_
2. [datasette 0.65.6](<https://simonwillison.net/2026/Nov/15/datasette-2/>) — _simonwillison.net_
3. [datasette-maplibre 0.1a0](<https://simonwillison.net/2026/Nov/15/datasette-maplibre/>) — _simonwillison.net_
4. [Data Engineering Weekly #296](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-296>) — _dataengineeringweekly.com_
5. [LVMH’s Media Division announces strategic partnership with OpenAI](<https://openai.com/index/lvmh-media-division-partnership>) — _openai.com_


## Recent archive

_One file per day — the latest 14 are shown below._

| Date | Day | |
|:--|:--|--:|
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
| `2026-11-02` | Monday | [Read →](news/en/2026-11-02.md) |

<sub>[Browse the full archive (153) →](news/en/)</sub>

---
<sub>Auto‑generated twice a day · source: [live tech‑watch](https://baptisteblouin.fr/veille.en.html)</sub>
