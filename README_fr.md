# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-10-26
<sub>mis à jour le 26 octobre 2026 à 12:01</sub>

## IA, LLM et agents

- Dan Luu soutient que l'IA peut désormais réaliser en un seul essai de nombreux projets, de sorte que presque n'importe qui peut créer un logiciel, mais que les modèles peinent encore sur les tâches plus difficiles, et que les développeurs devraient viser plus haut à mesure que les modèles s'améliorent <sup>[1](<https://danluu.com/ambitious/>)</sup>.
- L'ingénierie du contexte est décrite comme difficile pour des raisons structurelles : les modèles sont conçus, optimisés et entraînés de manières qui engendrent des modes de défaillance spécifiques, de sorte que ce défi persistera à mesure que les modèles progressent <sup>[2](<https://www.dbreunig.com/2026/10/24/the-state-of-context-engineering.html>)</sup>.
- Tiger Data a construit trois systèmes de mémoire pour son agent Slack (une liste de faits, un graphe de connaissances et un arbre) ; les agents ont eu du mal à interpréter les arêtes du graphe, tandis qu'un arbre construit sur l'extension ltree de Postgres a mieux fonctionné et a fait passer le classement d'un résumé de fil de plusieurs dizaines de tours à un seul appel d'outil <sup>[3](<https://www.tigerdata.com/blog/we-built-three-memory-systems-most-expressive-wasnt-most-useful>)</sup>.
- Un test de RAG agentique portant sur 298 questions et 2 000 articles arXiv a montré que le fait de laisser l'agent relancer la recherche n'apporte que 1,2 point, un écart compris dans la marge de bruit <sup>[4](<https://towardsdatascience.com/does-agentic-rag-actually-retrieve-better-evidence-i-tested-it-on-298-questions/>)</sup>.
- Sutura est un runtime Rust sous licence Apache-2.0 qui expose aux agents IA des métriques certifiées et des définitions sémantiques via HTTP ou MCP, avec des requêtes fédérées et l'application de politiques, afin que les agents n'improvisent pas face aux tables de l'entrepôt de données <sup>[5](<https://github.com/telekom/sutura>)</sup>.
- Un podcast dbt rapporte que les agents de données peinent encore sur des tâches analytiques réalistes : le meilleur agent réussit 61 % des requêtes de référence du premier coup, et une couche sémantique améliore nettement la précision ; l'ingénierie de prompts seule ne devrait pas suffire à combler l'écart <sup>[6](<https://roundup.getdbt.com/p/can-data-agents-do-real-analysis>)</sup>.
- OpenAI et Anthropic ont réduit leurs prix d'LLM de jusqu'à 80 % en quelques mois, ce que l'auteur trouve étrange compte tenu de leurs pertes et de leurs introductions en bourse prévues <sup>[7](<https://minimaxir.com/2026/10/cheap-llms/>)</sup>.

## Ingénierie des données et stockage

- Lance est présenté comme un format de fichier pour les charges de travail IA nécessitant un accès aléatoire rapide aux embeddings et aux données multimodales, cas où la conception de Parquet, orientée lecture séquentielle, montre ses limites ; il affirme être 100 fois plus rapide que Parquet pour ce type d'accès <sup>[8](<https://vutr.substack.com/p/free-a-file-format-claims-to-be-100x>)</sup>.
- L'extension hf pour DuckDB permet de lire, interroger et écrire des jeux de données, modèles et buckets de stockage Hugging Face en SQL via des URL hf://, avec mise en cache et déduplication <sup>[9](<https://github.com/lhoestq/duckdb-hf-extension>)</sup>.
- Pinterest présente la gestion des métriques à grande échelle et la construction d'une couche de métriques prête pour les agents, destinée à remplacer des définitions de métriques dispersées <sup>[10](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-293>)</sup>.
- Le retard de réplication d'Oracle GoldenGate se diagnostique au mieux comme un problème de files d'attente le long du pipeline : on mesure chaque étape avec des horodatages de heartbeat plutôt que d'accuser Replicat par défaut <sup>[11](<https://hackernoon.com/hunting-replication-lag-a-queue-by-queue-method-for-diagnosing-oracle-goldengate>)</sup>.

## Infrastructure, cloud et DevOps

- Netflix ajoute un mode mono-locataire à Titus afin que les charges sensibles puissent obtenir une VM dédiée au sein de sa plateforme de conteneurs, motivé par les pics de latence de queue causés au niveau matériel par les voisins bruyants ; les nœuds dédiés améliorent la stabilité, mais les lancements sont plus lents et la capacité préchauffée demande plus de planification <sup>[12](<https://netflixtechblog.com/single-tenant-titus-vm-level-isolation-on-a-multi-tenant-container-platform-6d8b1909d163>)</sup>.
- LinkedIn a fait migrer son pipeline de suivi, qui traite des centaines de milliards d'événements par jour, de Java 8 et Play Framework vers gRPC et un runtime Java moderne, en envoyant 10 % des événements dans les deux pipelines pour comparer les sorties avant la bascule ; l'utilisation réseau entrante a chuté d'environ 89 % <sup>[13](<https://www.linkedin.com/blog/engineering/infrastructure/rebuilding-linkedins-tracking-infrastructure-scaling-migrating-and-hardening-a-high-volume-event-pipeline>)</sup>.
- Un article de recherche de Varonis signale une faille inter-locataires dans GCP Dataflow : des noms prévisibles des buckets de staging par défaut permettraient à un attaquant de détourner les artefacts stockés et d'atteindre une exécution de code à distance sur les workers ; Google a corrigé le problème, et la leçon est de vérifier la propriété et l'intégrité des artefacts plutôt que de faire confiance aux noms par défaut <sup>[14](<https://www.varonis.com/blog/shadow-dependency-in-gcp-dataflow-cross-tenant>)</sup>.

## Outillage développeur et génie logiciel

- bbtree est une map ordonnée en Rust dont les benchmarks annoncent des performances jusqu'à 5 fois supérieures à BTreeMap en mono-thread et une consommation mémoire inférieure de 30 %, construite avec du code écrit par un LLM guidé par un expert des bases de données et vérifiée par preuve formelle et tests <sup>[15](<https://bbtree.xiangpeng.systems/post/>)</sup>.
- Cap 0.6.1 est la première version de Cap sans navigateur web intégré, après sa migration vers GPUI <sup>[16](<https://cap.so/blog/rebuilding-cap-in-gpui>)</sup>.
- HPTS 2026 a conclu que les systèmes d'IA progressent plus vite que notre capacité à les spécifier, les vérifier et les auditer, faisant des journaux, des vérifications formelles et de la revue humaine le véritable plan de contrôle <sup>[17](<https://muratbuffalo.blogspot.com/2026/10/hpts-2026-day-1.html>)</sup>.

## Sources

1. [We should be more ambitious with the software we build](<https://danluu.com/ambitious/>) — _danluu.com_
2. [The State of Context Engineering](<https://www.dbreunig.com/2026/10/24/the-state-of-context-engineering.html>) — _dbreunig.com_
3. [We built three memory systems. The most expressive one wasn't the most useful](<https://www.tigerdata.com/blog/we-built-three-memory-systems-most-expressive-wasnt-most-useful>) — _tigerdata.com_
4. [Does Agentic RAG Actually Retrieve Better Evidence? I Tested It on 298 Questions](<https://towardsdatascience.com/does-agentic-rag-actually-retrieve-better-evidence-i-tested-it-on-298-questions/>) — _towardsdatascience.com_
5. [Sutura](<https://github.com/telekom/sutura>) — _github.com_
6. [Can data agents do real analysis? (51 minute podcast)](<https://roundup.getdbt.com/p/can-data-agents-do-real-analysis>) — _roundup.getdbt.com_
7. [OpenAI and Anthropic cut their LLM prices by up to 80% within a few months. Why?](<https://minimaxir.com/2026/10/cheap-llms/>) — _minimaxir.com_
8. [A file format claims to be 100x faster than Parquet](<https://vutr.substack.com/p/free-a-file-format-claims-to-be-100x>) — _vutr.substack.com_
9. [DuckDB hf extension — read and write Hugging Face assets](<https://github.com/lhoestq/duckdb-hf-extension>) — _github.com_
10. [Data Engineering Weekly #293](<https://www.dataengineeringweekly.com/p/data-engineering-weekly-293>) — _dataengineeringweekly.com_
11. [Hunting Replication Lag: A Queue-by-Queue Method for Diagnosing Oracle GoldenGate](<https://hackernoon.com/hunting-replication-lag-a-queue-by-queue-method-for-diagnosing-oracle-goldengate>) — _hackernoon.com_
12. [Single-tenant Titus: VM-level isolation on a multi-tenant container platform](<https://netflixtechblog.com/single-tenant-titus-vm-level-isolation-on-a-multi-tenant-container-platform-6d8b1909d163>) — _netflixtechblog.com_
13. [Rebuilding LinkedIn's Tracking Infrastructure](<https://www.linkedin.com/blog/engineering/infrastructure/rebuilding-linkedins-tracking-infrastructure-scaling-migrating-and-hardening-a-high-volume-event-pipeline>) — _linkedin.com_
14. [Go With the Flow: Taking a Shadow Dependency in GCP Dataflow Cross Tenant](<https://www.varonis.com/blog/shadow-dependency-in-gcp-dataflow-cross-tenant>) — _varonis.com_
15. [bbtree: fastest ordered map](<https://bbtree.xiangpeng.systems/post/>) — _bbtree.xiangpeng.systems_
16. [A technical deep dive into Cap's migration to GPUI](<https://cap.so/blog/rebuilding-cap-in-gpui>) — _cap.so_
17. [HPTS 2026 (Day 1)](<https://muratbuffalo.blogspot.com/2026/10/hpts-2026-day-1.html>) — _muratbuffalo.blogspot.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-10-24` | Samedi | [Lire →](news/fr/2026-10-24.md) |
| `2026-10-23` | Vendredi | [Lire →](news/fr/2026-10-23.md) |
| `2026-10-22` | Jeudi | [Lire →](news/fr/2026-10-22.md) |
| `2026-10-21` | Mercredi | [Lire →](news/fr/2026-10-21.md) |
| `2026-10-20` | Mardi | [Lire →](news/fr/2026-10-20.md) |
| `2026-10-19` | Lundi | [Lire →](news/fr/2026-10-19.md) |
| `2026-10-18` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-10-18.md) |
| `2026-10-17` | Samedi | [Lire →](news/fr/2026-10-17.md) |
| `2026-10-16` | Vendredi | [Lire →](news/fr/2026-10-16.md) |
| `2026-10-15` | Jeudi | [Lire →](news/fr/2026-10-15.md) |
| `2026-10-14` | Mercredi | [Lire →](news/fr/2026-10-14.md) |
| `2026-10-13` | Mardi | [Lire →](news/fr/2026-10-13.md) |
| `2026-10-12` | Lundi | [Lire →](news/fr/2026-10-12.md) |
| `2026-10-11` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-10-11.md) |

<sub>[Parcourir toute l’archive (132) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
