# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-10-05
<sub>mis à jour le 5 octobre 2026 à 13:00</sub>

## Modèles d'IA, agents et outils
- **Modèles de décision open source :** Cloudflare a publié Clef et Clef-flash, des modèles de décision de Système 1 open source conçus pour acheminer les tickets de support, classifier des sites web ou contrôler les boucles de repli des agents en convertissant directement du texte ou des images en choix et en probabilités <sup>[1](<https://blog.cloudflare.com/clef-decision-models/>)</sup>.
- **Ingénierie du contexte des agents :** Les discussions de l'industrie soulignent que les packages de contexte pour les agents de codage IA nécessitent le même niveau de rigueur en matière de gestion des versions, de linting et de tests que le code applicatif afin d'éviter les hallucinations et la dégradation architecturale silencieuse <sup>[2](<https://www.infoq.com/presentations/context-as-code-devops-agents/>)</sup>.
- **Lacunes dans la fiabilité de l'inférence :** Une analyse des appels aux modèles en production a révélé que les budgets de raisonnement alloués peuvent varier fortement sous le même nom de modèle, ce qui indique que les utilisateurs en production peuvent recevoir beaucoup moins de raisonnement séquentiel que ne le suggèrent les performances des benchmarks <sup>[3](<https://x.com/Lon/status/2101034933284417614>)</sup>.
- **Tests d'agents économiques :** Le framework open source `e2e` améliore l'efficacité des tests d'IA pour les applications web et mobiles en mettant en cache et en rejouant les actions précédentes des agents, ce qui réduit les jetons de raisonnement redondants et les appels aux modèles <sup>[4](<https://tester.army/e2e>)</sup>.
- **Aperçus de la conception des agents de données :** OpenAI a détaillé son agent de données interne qui interroge 70 000 jeux de données, notant que des performances d'agent fiables reposent largement sur un contexte structurel riche, un apprentissage continu à partir des corrections et des évaluations robustes plutôt que sur la simple échelle brute du modèle <sup>[5](<https://www.youtube.com/watch?v=82zo4WMcjfU>)</sup>.

## Ingénierie des données, stockage et analytique
- **Requêtes directes sur Lakehouse :** Amazon Aurora PostgreSQL prend désormais en charge l'interrogation directe des tables Apache Iceberg et Parquet dans Amazon S3 via un moteur DuckDB intégré, permettant la descente des prédicats et l'utilisation de la syntaxe PostgreSQL standard sans pipelines ETL distincts <sup>[6](<https://aws.amazon.com/blogs/aws/amazon-aurora-postgresql-now-supports-direct-querying-of-apache-iceberg-and-parquet-data-in-your-data-lake/>)</sup>.
- **Sortie d'Apache Iceberg 1.12.0 :** Apache Iceberg 1.12.0 étend la prise en charge en production des fonctionnalités v3, notamment les types de variantes, la lignée des lignes, les vecteurs de suppression et les opérations de catalogue REST, tout en supprimant les API obsolètes <sup>[7](<https://www.dremio.com/blog/apache-iceberg-1-12-0-whats-new-breaking-changes-and-upgrade-guide>)</sup>.
- **Moteurs de requêtes distribuées :** Datadog a mis en open source Distributed DataFusion, étendant Apache DataFusion pour distribuer des requêtes analytiques uniques sur plusieurs machines afin d'accélérer les charges de travail lourdes tout en maintenant les tâches légères en local <sup>[8](<https://www.datadoghq.com/blog/engineering/distributed-datafusion>)</sup>.
- **Interopérabilité sémantique :** Microsoft et Google ont soutenu Apache Ossie, une spécification d'échange de modèles sémantiques ouverte en JSON/YAML conçue pour éliminer la dérive des métriques et les définitions redondantes sur diverses plateformes de BI et de données <sup>[9](<https://www.infoworld.com/article/4229785/microsoft-google-back-apache-ossie-to-make-enterprise-data-and-ai-platforms-more-interoperable-2.html>)</sup>.
- **ClickHouse chez LinkedIn :** LinkedIn a migré trois systèmes de métadonnées de métriques distincts vers un index ClickHouse unique, gérant plus de 150 000 requêtes par minute avec une latence moyenne de 68 millisecondes et une réduction drastique de l'empreinte mémoire <sup>[10](<https://clickhouse.com/blog/linkedin-observability-at-scale>)</sup>.

## DevOps, infrastructure et génie logiciel
- **Optimisation de la topologie des pipelines :** Un pipeline de garde-fou AWS Bedrock en production a réduit la latence des actions des agents de près de 14 secondes à moins de 2 secondes simplement en parallélisant des couches de sécurité indépendantes et en court-circuitant rapidement les règles de rejet peu coûteuses <sup>[11](<https://techstrong.ai/contributed-content/why-your-ai-agent-pipeline-is-slow-and-how-to-fix-it-without-changing-models/>)</sup>.
- **Refontes de la scalabilité de Kafka :** LinkedIn a résolu les limitations d'échelle extrême dans le modèle de partition de Kafka en développant Northguard pour dissocier l'ordonnancement, la réplication et le placement, tout en masquant la migration du backend aux applications clientes grâce à une couche de compatibilité <sup>[12](<https://softwaremill.com/linkedin-northguard-xinfra-kafka>)</sup>.
- **Optimisation des requêtes de base de données :** Des études de cas sur DuckDB soulignent que le remplacement des colonnes de chaînes à faible cardinalité par de petites clés de substitution entières via des tables de dimensions réduit considérablement la pression sur la mémoire et les coûts de regroupement lors de grandes agrégations analytiques <sup>[13](<https://duckdb.org/2026/10/02/dimension-tables.html>)</sup>.

## Sources

1. [Introducing Clef: our open-source decision models, and new RL fine-tuning platform](<https://blog.cloudflare.com/clef-decision-models/>) — _blog.cloudflare.com_
2. [Context Is the New Code (50 minute video)](<https://www.infoq.com/presentations/context-as-code-devops-agents/>) — _infoq.com_
3. [The Inference Gap](<https://x.com/Lon/status/2101034933284417614>) — _x.com_
4. [e2e (Website)](<https://tester.army/e2e>) — _tester.army_
5. [Diving Through Data at OpenAI: How a Data Agent Navigates 70,000 Datasets (27 minute video)](<https://www.youtube.com/watch?v=82zo4WMcjfU>) — _youtube.com_
6. [Amazon Aurora PostgreSQL now supports direct querying of Apache Iceberg and Parquet data in your data lake](<https://aws.amazon.com/blogs/aws/amazon-aurora-postgresql-now-supports-direct-querying-of-apache-iceberg-and-parquet-data-in-your-data-lake/>) — _aws.amazon.com_
7. [Apache Iceberg 1.12.0: What's New, Breaking Changes, and Upgrade Guide](<https://www.dremio.com/blog/apache-iceberg-1-12-0-whats-new-breaking-changes-and-upgrade-guide>) — _dremio.com_
8. [How we extended Apache DataFusion to execute one query across many machines](<https://www.datadoghq.com/blog/engineering/distributed-datafusion>) — _datadoghq.com_
9. [Microsoft, Google back Apache Ossie to make enterprise data and AI platforms more interoperable](<https://www.infoworld.com/article/4229785/microsoft-google-back-apache-ossie-to-make-enterprise-data-and-ai-platforms-more-interoperable-2.html>) — _infoworld.com_
10. [How LinkedIn extended ClickHouse from distributed tracing to metric discovery and analytics](<https://clickhouse.com/blog/linkedin-observability-at-scale>) — _clickhouse.com_
11. [Why Your AI Agent Pipeline Is Slow (And How to Fix It Without Changing Models)](<https://techstrong.ai/contributed-content/why-your-ai-agent-pipeline-is-slow-and-how-to-fix-it-without-changing-models/>) — _techstrong.ai_
12. [LinkedIn Built Kafka. What Did It Change When Kafka Was No Longer Enough?](<https://softwaremill.com/linkedin-northguard-xinfra-kafka>) — _softwaremill.com_
13. [Faster String Aggregations with Dimension Tables](<https://duckdb.org/2026/10/02/dimension-tables.html>) — _duckdb.org_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-10-04` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-10-04.md) |
| `2026-10-03` | Samedi | [Lire →](news/fr/2026-10-03.md) |
| `2026-10-02` | Vendredi | [Lire →](news/fr/2026-10-02.md) |
| `2026-10-01` | Jeudi | [Lire →](news/fr/2026-10-01.md) |
| `2026-09-30` | Mercredi | [Lire →](news/fr/2026-09-30.md) |
| `2026-09-29` | Mardi | [Lire →](news/fr/2026-09-29.md) |
| `2026-09-28` | Lundi | [Lire →](news/fr/2026-09-28.md) |
| `2026-09-27` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-27.md) |
| `2026-09-26` | Samedi | [Lire →](news/fr/2026-09-26.md) |
| `2026-09-25` | Vendredi | [Lire →](news/fr/2026-09-25.md) |
| `2026-09-24` | Jeudi | [Lire →](news/fr/2026-09-24.md) |
| `2026-09-23` | Mercredi | [Lire →](news/fr/2026-09-23.md) |
| `2026-09-22` | Mardi | [Lire →](news/fr/2026-09-22.md) |
| `2026-09-21` | Lundi | [Lire →](news/fr/2026-09-21.md) |

<sub>[Parcourir toute l’archive (112) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
