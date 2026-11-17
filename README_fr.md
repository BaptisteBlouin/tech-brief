# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-17
<sub>mis à jour le 17 novembre 2026 à 12:01</sub>

## Modèles d'IA et industrie

- Perplexity a atteint un chiffre d'affaires annuel récurrent de 1 milliard de dollars, a déclaré son PDG Aravind Srinivas, la croissance récente étant en partie attribuée à son produit Computer <sup>[1](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>)</sup>. Selon le même rapport, l'entreprise dispose désormais d'un laboratoire de recherche dédié, avec accès à plus de 10 000 GPU <sup>[1](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>)</sup>.
- Parmi les lancements récents de Perplexity figurent les automatisations et les coéquipiers Computer pour les tâches récurrentes, une API Monitor qui envoie des webhooks lors de changements de sujet ou de page, et un fonctionnement entièrement local sur les Mac compatibles <sup>[1](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>)</sup>.

## Sécurité de l'IA et cyberdéfense

- OpenAI collabore avec l'OTAN et des agences cyber alliées pour aider les défenseurs de confiance à identifier les vulnérabilités, tester les correctifs et protéger les systèmes essentiels <sup>[2](<https://openai.com/index/strengthening-nato-allied-cyber-defences-ai>)</sup>.

## Pipelines de données et d'IA

- Un atelier DuckDB a construit un pipeline sur 2,1 millions d'avis Amazon sur l'électroménager : DuckDB filtre les données, un LLM résume les réclamations, et le résultat est déployé sous forme de Space Hugging Face appelable comme API <sup>[3](<https://duckdb.org/2026/11/17/duckdb-user-group-workshop-ai-powered-review-analysis.html>)</sup>.
- Les participants ont prototypé localement sur un échantillon de 22 Mo, puis ont exécuté les deux mêmes fichiers Parquet sur l'ensemble complet des données sur Hugging Face <sup>[3](<https://duckdb.org/2026/11/17/duckdb-user-group-workshop-ai-powered-review-analysis.html>)</sup>.

## Outillage LLM

- La version corrective llm 0.37.3 résout une panne causée par SQLite 3.54.1, qui a modifié le comportement de json_object pour les sous-requêtes renvoyant des résultats json_array <sup>[4](<https://simonwillison.net/2026/Nov/16/llm/>)</sup>.
- Le correctif SQLite est intentionnel : une sous-requête utilisant json_array renvoie du texte SQL, la solution de contournement consiste donc à l'encapsuler dans json() <sup>[4](<https://simonwillison.net/2026/Nov/16/llm/>)</sup>.

## DevOps et outillage pour développeurs

- Les demandes de rejet délégué d'alertes Dependabot restent désormais ouvertes pendant un an au lieu d'une semaine, laissant aux relecteurs plus de temps avant une nouvelle soumission ; cette modification est disponible sur github.com et dans GitHub Enterprise Server 3.24 <sup>[5](<https://github.blog/changelog/2026-11-16-dependabot-alert-dismissal-requests-now-last-one-year>)</sup>.

## Pratique du génie logiciel

- Les Go Proverbs conseillent que « un peu de copie vaut mieux qu'une petite dépendance », citation mise en avant par Simon Willison <sup>[6](<https://simonwillison.net/2026/Nov/17/go-proverbs/>)</sup>.

## Sources

1. [\[AINews\] Perplexity hits a $1B revenue run rate, up 4x in 2026](<https://latent.space/p/ainews-perplexity-hits-a-1b-revenue-run-rate-up-4x-in-2026/>) — _latent.space_
2. [Strengthening NATO and allied cyber defenses with AI](<https://openai.com/index/strengthening-nato-allied-cyber-defences-ai>) — _openai.com_
3. [DuckDB User Group Workshop on AI-Powered Review Analysis with Hugging Face](<https://duckdb.org/2026/11/17/duckdb-user-group-workshop-ai-powered-review-analysis.html>) — _duckdb.org_
4. [llm 0.37.3](<https://simonwillison.net/2026/Nov/16/llm/>) — _simonwillison.net_
5. [Dependabot alert dismissal requests now last one year](<https://github.blog/changelog/2026-11-16-dependabot-alert-dismissal-requests-now-last-one-year>) — _github.blog_
6. [Quoting Go Proverbs](<https://simonwillison.net/2026/Nov/17/go-proverbs/>) — _simonwillison.net_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-16` | Lundi | [Lire →](news/fr/2026-11-16.md) |
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

<sub>[Parcourir toute l’archive (154) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
