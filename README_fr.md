# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-07-02
<sub>mis à jour le 2 juillet 2026 à 13:01</sub>

## Modèles IA/ML et outils
- Anthropic relance Claude Fable 5 avec des mécanismes de sécurité visibles, redirigeant certaines requêtes vers Opus 4.8 tout en reconnaissant des classifieurs trop larges en biologie/chimie <sup>[1](<https://www.latent.space/p/ainews-not-much-happened-today-900>)</sup>.
- Google Research présente TabFM, un modèle de fondation zero-shot pour la classification et la régression tabulaires qui surpasse les modèles basés sur des arbres ajustés sur TabArena, sans entraînement par jeu de données ni ingénierie de caractéristiques <sup>[2](<https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/>)</sup>.
- L’assistant interne DeMate de Meta pour les ingénieurs données combine RAG sur des catalogues internes, un raisonnement multi-étapes et des retours humains en boucle pour étendre SQL, la génération de pipelines et la revue de code <sup>[3](<https://medium.com/@AnalyticsAtMeta/how-we-built-demate-taming-llms-for-data-engineering-at-meta-d134e69637c5>)</sup>.
- ZCode, l’environnement de développement officiel pour GLM-5.2, est désormais disponible sur macOS, Windows et Linux, avec des quotas d’utilisation augmentés pour les abonnés au GLM Coding Plan <sup>[4](<https://x.com/Zai_org/status/2072349453361557898>)</sup>.

## Agents, RAG et autoresearch
- AIEWF met en avant l’**autoresearch** comme une « boucle externe » où les agents maintiennent et améliorent les systèmes principaux à l’aide de retours, d’évaluations et d’apports humains ; Introspection le présente comme une infrastructure pour des agents auto-améliorants <sup>[5](<https://www.latent.space/p/aiewf-daily-dispatch-agency>), [6](<https://www.latent.space/p/autoresearch-introspection>)</sup>.
- Expedia utilise des LLM pour analyser les plans d’exécution Spark SQL, accélérant le débogage des tâches longues en identifiant les goulots d’étranglement, les données déséquilibrées et les opérateurs sous-optimaux <sup>[7](<https://medium.com/expedia-group-tech/using-llms-to-analyze-spark-sql-plans-a-practical-approach-to-debugging-long-running-jobs-35eace7eeec4>)</sup>.
- Les ontologies réapparaissent comme une couche critique pour les agents IA, offrant une sémantique métier explicite (relations typées, contraintes) au-delà des schémas ou tableaux de bord, souvent via des graphes de connaissances ou des couches sémantiques <sup>[8](<https://handsondata.substack.com/p/ontology-everywhere>)</sup>.

## MLOps et ingénierie des données
- Arcesium migre d’Athena/Trino vers DuckDB, réduisant les coûts et le temps des requêtes d’environ 50 % pour les charges de travail petites à moyennes, avec une empreinte mémoire inférieure d’environ 40 % <sup>[9](<https://medium.com/arcesium-engineering-blog/query-faster-query-smarter-our-move-to-duckdb-and-what-we-learned-c935128e80bc>)</sup>.
- Apache Hudi détaille des stratégies d’indexation pour des jeux de données en mise à jour continue, équilibrant fraîcheur, performance des requêtes, surcharge d’écriture et évolutivité dans les lacs de données <sup>[10](<https://hudi.apache.org/blog/2026/06/25/building-indexes-on-a-moving-target/>)</sup>.
- La résidence des données est un défi de conception d’infrastructure : les charges de travail réglementées doivent contrôler où les données sont stockées, traitées, journalisées et accédées, nécessitant des plateformes sensibles aux régions avec CI/CD reproductible et calcul portable <sup>[11](<https://hackernoon.com/data-residency-is-not-a-legal-problem-it-is-an-infrastructure-design-problem>)</sup>.

## DevOps, Cloud et Infrastructure
- GitHub rend les **champs de problème (Issue Fields)** généralement disponibles, ajoutant des métadonnées structurées et typées (priorité, effort, dates) aux problèmes, avec visibilité dans les listes, les projets publics et l’intégration MCP <sup>[12](<https://github.blog/changelog/2026-07-02-issue-fields-are-now-generally-available>)</sup>.
- GitHub ajoute un **suivi public du scanning de secrets** en préversion pour les entreprises, alertant sur les secrets divulgués sur l’ensemble de github.com et les attribuant à l’entreprise <sup>[13](<https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises>)</sup>.
- GitHub permet aux entreprises de définir par défaut les conversations Copilot sur **la sélection automatique de modèle** via managed-settings.json pour la gouvernance <sup>[14](<https://github.blog/changelog/2026-07-01-enterprises-can-default-to-auto-model-selection>)</sup>.
- Meta prévoit une activité cloud pour vendre son excédent de calcul IA et des modèles hébergés, similaire à AWS Bedrock ou CoreWeave <sup>[15](<https://www.bloomberg.com/news/articles/2026-07-01/meta-is-building-a-cloud-business-to-sell-excess-ai-compute?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4Mjk3NDg0MSwiZXhwIjoxNzgzNTc5NjQxLCJhcnRpY2xlSWQiOiJUSEVOTzNUOU5KTFQwMCIsImJjb25uZWN0SWQiOiI0NUZGMzc2RThENDg0NzYxQTkwQ0JEMzc4OTMzQjg2RiJ9.kpiVb0aBaxaGvO7WPEUSvdMTw10YAUjtWL4lBYHetpI>)</sup>.
- SedonaDB 0.4 introduit **RayBooster**, un moteur de jointure spatiale accéléré par GPU utilisant les cœurs de lancer de rayons NVIDIA, offrant des jointures jusqu’à ~5,9 fois plus rapides et des économies de coûts <sup>[16](<https://sedona.apache.org/latest/blog/2026/06/26/sedonadb-04-gpu-accelerated-spatial-joins/>)</sup>.

## Outils et pratiques de développement
- Chrome introduit l’élément HTML **`<usermedia>`** pour réduire le code répétitif pour l’accès aux médias, améliorer la sécurité et simplifier la récupération par l’utilisateur après un refus d’autorisation <sup>[17](<https://developer.chrome.com/blog/usermedia-html-element#validation_of_the_concept?utm_source=tldrnewsletter>)</sup>.
- Les performances de PostgreSQL se dégradent avec un excès de tables en raison du gonflement du catalogue et de la surcharge de planification ; la consolidation et le partitionnement sont recommandés <sup>[18](<https://www.cybertec-postgresql.com/en/too-many-tables-are-bad/>)</sup>.

## Sources

1. [\[AINews\] not much happened today](<https://www.latent.space/p/ainews-not-much-happened-today-900>) — _latent.space_
2. [Introducing TabFM: A zero-shot foundation model for tabular data](<https://research.google/blog/introducing-tabfm-a-zero-shot-foundation-model-for-tabular-data/>) — _research.google_
3. [How We Built DEmate: Taming LLMs for Data Engineering at Meta](<https://medium.com/@AnalyticsAtMeta/how-we-built-demate-taming-llms-for-data-engineering-at-meta-d134e69637c5>) — _medium.com_
4. [ZCode](<https://x.com/Zai_org/status/2072349453361557898>) — _x.com_
5. [AIEWF Daily Dispatch: Autoresearch and the tension between AI and human agency](<https://www.latent.space/p/aiewf-daily-dispatch-agency>) — _latent.space_
6. [Autoresearch: The feedback loop behind self-improving agents](<https://www.latent.space/p/autoresearch-introspection>) — _latent.space_
7. [Using LLMs to Analyze Spark SQL Plans: A Practical Approach to Debugging Long-Running Jobs](<https://medium.com/expedia-group-tech/using-llms-to-analyze-spark-sql-plans-a-practical-approach-to-debugging-long-running-jobs-35eace7eeec4>) — _medium.com_
8. [Ontology Everywhere!](<https://handsondata.substack.com/p/ontology-everywhere>) — _handsondata.substack.com_
9. [Query Faster, Query Smarter: Our Move to DuckDB and What We Learned](<https://medium.com/arcesium-engineering-blog/query-faster-query-smarter-our-move-to-duckdb-and-what-we-learned-c935128e80bc>) — _medium.com_
10. [Building Indexes on a Moving Target](<https://hudi.apache.org/blog/2026/06/25/building-indexes-on-a-moving-target/>) — _hudi.apache.org_
11. [Data Residency Is Not a Legal Problem. It Is An Infrastructure Design Problem](<https://hackernoon.com/data-residency-is-not-a-legal-problem-it-is-an-infrastructure-design-problem>) — _hackernoon.com_
12. [Issue fields are now generally available](<https://github.blog/changelog/2026-07-02-issue-fields-are-now-generally-available>) — _github.blog_
13. [Secret scanning public monitoring for enterprises](<https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises>) — _github.blog_
14. [Enterprises can default to auto model selection](<https://github.blog/changelog/2026-07-01-enterprises-can-default-to-auto-model-selection>) — _github.blog_
15. [Meta Is Planning a Cloud Business to Sell AI Computing Power](<https://www.bloomberg.com/news/articles/2026-07-01/meta-is-building-a-cloud-business-to-sell-excess-ai-compute?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4Mjk3NDg0MSwiZXhwIjoxNzgzNTc5NjQxLCJhcnRpY2xlSWQiOiJUSEVOTzNUOU5KTFQwMCIsImJjb25uZWN0SWQiOiI0NUZGMzc2RThENDg0NzYxQTkwQ0JEMzc4OTMzQjg2RiJ9.kpiVb0aBaxaGvO7WPEUSvdMTw10YAUjtWL4lBYHetpI>) — _bloomberg.com_
16. [SedonaDB 0.4: GPU-Accelerated Spatial Joins](<https://sedona.apache.org/latest/blog/2026/06/26/sedonadb-04-gpu-accelerated-spatial-joins/>) — _sedona.apache.org_
17. [Introducing the 'usermedia' HTML element](<https://developer.chrome.com/blog/usermedia-html-element#validation_of_the_concept?utm_source=tldrnewsletter>) — _developer.chrome.com_
18. [Too many tables are bad for you](<https://www.cybertec-postgresql.com/en/too-many-tables-are-bad/>) — _cybertec-postgresql.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-07-01` | Mercredi | [Lire →](news/fr/2026-07-01.md) |
| `2026-06-30` | Mardi | [Lire →](news/fr/2026-06-30.md) |
| `2026-06-29` | Lundi | [Lire →](news/fr/2026-06-29.md) |
| `2026-06-28` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-06-28.md) |
| `2026-06-27` | Samedi | [Lire →](news/fr/2026-06-27.md) |
| `2026-06-26` | Vendredi | [Lire →](news/fr/2026-06-26.md) |
| `2026-06-25` | Jeudi | [Lire →](news/fr/2026-06-25.md) |
| `2026-06-24` | Mercredi | [Lire →](news/fr/2026-06-24.md) |
| `2026-06-23` | Mardi | [Lire →](news/fr/2026-06-23.md) |
| `2026-06-22` | Lundi | [Lire →](news/fr/2026-06-22.md) |
| `2026-06-21` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-06-21.md) |
| `2026-06-20` | Samedi | [Lire →](news/fr/2026-06-20.md) |
| `2026-06-19` | Vendredi | [Lire →](news/fr/2026-06-19.md) |
| `2026-06-18` | Jeudi | [Lire →](news/fr/2026-06-18.md) |

<sub>[Parcourir toute l’archive (17) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
