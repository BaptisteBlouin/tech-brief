# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-23
<sub>mis à jour le 23 novembre 2026 à 12:00</sub>

## Ingénierie des données

- Flock a migré son lakehouse, comprenant près de 480 modèles dbt, d'AWS Glue vers DuckDB exécuté en processus, ce qui a réduit de 74 % la durée des builds du cœur et de 91 % les dépenses quotidiennes de calcul <sup>[1](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-297>)</sup>. La migration repose sur un stockage Iceberg ouvert, qui permet de remplacer Spark distribué par un moteur mono-nœud dimensionné à la charge réelle <sup>[1](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-297>)</sup>.
- Flock a utilisé des agents IA via un serveur MCP et une compétence Claude réutilisable pour vérifier la parité des tables pendant la migration et pour passer à DuckDB 2.0 <sup>[1](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-297>)</sup>.

## Outils de développement et pratiques de recrutement

- Un éditorial de newsletter soutient que les entretiens de programmation évoluent de la génération de code vers des formats « corriger et expliquer », où les candidats relisent et débogguent du code existant <sup>[1](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-297>)</sup>.
- LeetCode.ai a introduit une fonctionnalité de « revue de code » qui évalue la compréhension du code par le candidat et sa capacité à corriger des bogues, afin de préparer les ingénieurs de données aux épreuves de type revue <sup>[1](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-297>)</sup>.

## Sources

1. [Data Engineering Weekly #297](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-297>) — _dataengineeringweekly.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-22` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-22.md) |
| `2026-11-21` | Samedi | [Lire →](news/fr/2026-11-21.md) |
| `2026-11-20` | Vendredi | [Lire →](news/fr/2026-11-20.md) |
| `2026-11-19` | Jeudi | [Lire →](news/fr/2026-11-19.md) |
| `2026-11-18` | Mercredi | [Lire →](news/fr/2026-11-18.md) |
| `2026-11-17` | Mardi | [Lire →](news/fr/2026-11-17.md) |
| `2026-11-16` | Lundi | [Lire →](news/fr/2026-11-16.md) |
| `2026-11-15` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-15.md) |
| `2026-11-14` | Samedi | [Lire →](news/fr/2026-11-14.md) |
| `2026-11-13` | Vendredi | [Lire →](news/fr/2026-11-13.md) |
| `2026-11-12` | Jeudi | [Lire →](news/fr/2026-11-12.md) |
| `2026-11-11` | Mercredi | [Lire →](news/fr/2026-11-11.md) |
| `2026-11-10` | Mardi | [Lire →](news/fr/2026-11-10.md) |
| `2026-11-09` | Lundi | [Lire →](news/fr/2026-11-09.md) |

<sub>[Parcourir toute l’archive (160) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
