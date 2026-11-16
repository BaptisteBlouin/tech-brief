# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-16
<sub>mis à jour le 16 novembre 2026 à 12:00</sub>

## Outils pour développeurs et outillage de données

- Datasette 1.0a43 ajoute la prise en charge du streaming pour les moteurs de rendu, afin que les plugins puissent diffuser chaque ligne d'une table en une seule passe grâce à une nouvelle méthode `Response.stream()` <sup>[1](<https://simonwillison.net/2026/Nov/15/datasette/>)</sup>. Il corrige aussi un problème de sécurité où des requêtes stockées privées pouvaient exposer leur titre et leur SQL (non exécutable) <sup>[1](<https://simonwillison.net/2026/Nov/15/datasette/>)</sup>.
- Une version 0.65.6 rétroportée corrige un problème de sécurité où une base de données enregistrée avec une route différente de son nom pouvait être téléchargée par des acteurs privés d'accès <sup>[2](<https://simonwillison.net/2026/Nov/15/datasette-2/>)</sup>.
- datasette-maplibre 0.1a0 est un nouveau plugin géospatial pour Datasette combinant MapLibre GL et OpenFreeMap, avec une fonctionnalité remarquable : il affiche des aperçus SVG des formes GeoJSON et ne charge les aperçus WebGL que lorsqu'ils entrent dans la zone visible <sup>[3](<https://simonwillison.net/2026/Nov/15/datasette-maplibre/>)</sup>.

## Ingénierie des données et la stack de données moderne

- Data Engineering Weekly évoque le regain d'intérêt pour les ontologies et les graphes de connaissances à mesure que les agents d'IA gagnent en valeur commerciale <sup>[4](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-296>)</sup>.
- GoDaddy décrit la création d'un agent d'IA pour la création de pipelines de données <sup>[4](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-296>)</sup>.
- PostHog affirme que l'ère de la stack de données moderne touche à sa fin, les catalogues de données évoluant vers des moteurs de contexte <sup>[4](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-296>)</sup>.

## Partenariats dans l'industrie de l'IA

- La division médias de LVMH et OpenAI ont annoncé un partenariat visant à soutenir le journalisme grâce à l'IA et à rendre ses publications plus accessibles via ChatGPT <sup>[5](<https://openai.com/index/lvmh-media-division-partnership>)</sup>.

## Sources

1. [datasette 1.0a43](<https://simonwillison.net/2026/Nov/15/datasette/>) — _simonwillison.net_
2. [datasette 0.65.6](<https://simonwillison.net/2026/Nov/15/datasette-2/>) — _simonwillison.net_
3. [datasette-maplibre 0.1a0](<https://simonwillison.net/2026/Nov/15/datasette-maplibre/>) — _simonwillison.net_
4. [Data Engineering Weekly #296](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-296>) — _dataengineeringweekly.com_
5. [LVMH’s Media Division announces strategic partnership with OpenAI](<https://openai.com/index/lvmh-media-division-partnership>) — _openai.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-15` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-15.md) |
| `2026-11-14` | Samedi | [Lire →](news/fr/2026-11-14.md) |
| `2026-11-13` | Vendredi | [Lire →](news/fr/2026-11-13.md) |
| `2026-11-12` | Jeudi | [Lire →](news/fr/2026-11-12.md) |
| `2026-11-11` | Mercredi | [Lire →](news/fr/2026-11-11.md) |
| `2026-11-10` | Mardi | [Lire →](news/fr/2026-11-10.md) |
| `2026-11-09` | Lundi | [Lire →](news/fr/2026-11-09.md) |
| `2026-11-08` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-08.md) |
| `2026-11-07` | Samedi | [Lire →](news/fr/2026-11-07.md) |
| `2026-11-06` | Vendredi | [Lire →](news/fr/2026-11-06.md) |
| `2026-11-05` | Jeudi | [Lire →](news/fr/2026-11-05.md) |
| `2026-11-04` | Mercredi | [Lire →](news/fr/2026-11-04.md) |
| `2026-11-03` | Mardi | [Lire →](news/fr/2026-11-03.md) |
| `2026-11-02` | Lundi | [Lire →](news/fr/2026-11-02.md) |

<sub>[Parcourir toute l’archive (153) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
