# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-09-14
<sub>mis à jour le 14 septembre 2026 à 13:01</sub>

## Modèles et agents IA
- Perplexity déploie GPT-6 Astra d'OpenAI de bout en bout pour la rédaction de communications, la modification de logiciels et la surveillance des systèmes de production, nécessitant bien moins de supervision humaine que les modèles précédents <sup>[1](<https://openai.com/index/perplexity-improving-accuracy-with-astra>)</sup>.
- Le défi Google AI Agents souligne que les systèmes multi-agents robustes reposent sur des modèles d'ingénierie logicielle : MCP bidirectionnel pour la communication inter-agents, bus d'événements asynchrones pour le parallélisme, validation unifiée stricte pour les replis, et routage hiérarchisé pour réduire les coûts d'inférence <sup>[2](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Google publie ADK pour Kotlin 1.0 avec une parité complète des fonctionnalités par rapport à Python/Java, permettant un développement multi-agents idiomatique sur Kotlin Multiplatform, des extensions prioritaires Android (LiteRT-LM, Firebase AI, Room, AppSearch), et une orchestration avancée comme l'interaction humaine dans la boucle et la compaction de contexte <sup>[3](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.
- Les boucles de post-entraînement autonomes de LLM utilisant Tunix sur les TPU peuvent optimiser itérativement les rangs LoRA, les taux d'apprentissage et les tailles de lots pendant la nuit, en validant les améliorations dans Git <sup>[4](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>.
- OpenAI lance l'agent Data de ChatGPT Work pour permettre aux employés d'interroger les données approuvées de l'entreprise et de créer des tableaux de bord en langage naturel, en respectant les permissions existantes et en s'intégrant aux principales plateformes BI <sup>[5](<https://openai.com/index/put-data-to-work/>)</sup>.

## RAG, récupération et embeddings
- La plateforme de récupération Manas de Pinterest passe à l'échelle avec des milliards d'embeddings ; les optimisations récentes incluent des réductions de 20 à 30 % des coûts de service grâce à la quantification, des expériences ANN basées sur SSD pour réduire la mémoire/CPU, et une récupération multi-embeddings au-delà de l'appariement à deux tours <sup>[6](<https://medium.com/pinterest-engineering/evolving-pinterests-embedding-retrieval-platform-aede4e831e01>)</sup>.

## MLOps et évaluation
- Google recommande des évaluations comportementales — tests rapides, locaux et de type unitaire, vérifiant des actions intermédiaires discrètes (par exemple, appels d'outils, modifications de fichiers) — pour compléter les benchmarks end-to-end lents comme SWE-bench, permettant une itération plus sûre sur les prompts et les mises à niveau de modèles <sup>[7](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.
- Le débogage des agents IA nécessite des traces end-to-end des appels modèle/outils, des entrées/sorties de récupération, et des tests séparés pour le comportement déterministe du système par rapport à la qualité des réponses, car les agents peuvent se tromper malgré la réussite des CI et des évaluations <sup>[8](<https://thenewstack.io/ai-agent-trace-debugging/>)</sup>.

## DevOps, infrastructure et cloud
- Le Postgres shardé Neki de PlanetScale atteint 118 millions de requêtes/sec sur 512 shards et 1,22 PiB avec une charge de travail de sélection par point, démontrant une mise à l'échelle propre pour les recherches par clé primaire <sup>[9](<https://planetscale.com/blog/118-million-queries-per-second-on-neki>)</sup>.
- DuckDB 2.0 accélère les requêtes S3 de 2 à 3 fois via l'E/S asynchrone, améliore les requêtes récursives profondes et optimise les données semi-structurées VARIANT sur JSON, tout en ajoutant des déclencheurs, des schémas imbriqués et des CTE modifiant les données <sup>[10](<https://motherduck.com/blog/why-duckdb-20-is-faster/>)</sup>.
- Kafka sans disque (KIP-1150) déplace le stockage durable vers le stockage objet avec des métadonnées fortement cohérentes, échangeant une rétention moins coûteuse contre des modifications dans le regroupement, l'assignation des offsets, la récupération, la compaction, la latence et la prise en charge des fonctionnalités — ce qui en fait un choix spécifique à la charge de travail <sup>[11](<https://softwaremill.com/diskless-kafka-object-storage-kip-1150-and-kafkas-future/>)</sup>.
- Estuary explique comment les grands backfills CDC PostgreSQL échouent en raison de la rétention du WAL, des accusés de réception de slot retardés, des transactions de longue durée et des snapshots obsolètes ; les conceptions plus sûres maintiennent la consommation du WAL pendant les lectures par blocs et réconcilient les chevauchements avec des watermarks <sup>[12](<https://estuary.dev/blog/postgres-cdc-backfill>)</sup>.

## Outils de développement et pratiques d'ingénierie
- Simon Willison publie commit-rewriter 0.1, une application web pour modifier les messages de commit Git (par exemple, nettoyer les résidus d'agents de codage), exécutable via `uvx commit-rewriter` <sup>[13](<https://simonwillison.net/2026/Sep/14/commit-rewriter/>)</sup>.
- shot-scraper 1.12 ajoute la prise en charge du WebP avec une qualité configurable, produisant des captures d'écran plus petites que JPEG/PNG <sup>[14](<https://simonwillison.net/2026/Sep/13/shot-scraper/>)</sup>.
- Lyft reconstruit sa carte des temps de trajet avec des ETA plus précis, une meilleure couverture et des champs en libre-service, actualisés tous les six mois et prévoyant des ETA sensibles au temps <sup>[15](<https://eng.lyft.com/refreshing-the-travel-time-map-behind-lyfts-marketplace-rebuilding-neighborhood-reachability-5be3efbc82ea>)</sup>.
- Jetpack (OSDI '26) ajoute un chemin portable de validation rapide en 1-RTT aux systèmes de consensus, réduisant la latence des écritures intensives jusqu'à 60 % avec des compromis comme le travail redondant et une récupération minutieuse en cas de changement de leader <sup>[16](<https://muratbuffalo.blogspot.com/2026/09/jetpack-consensus-made-generally-fast.html>)</sup>.

## Sources

1. [Perplexity trusts GPT-6 Astra with end-to-end systems](<https://openai.com/index/perplexity-improving-accuracy-with-astra>) — _openai.com_
2. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
3. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
4. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_
5. [Now everyone can put data to work](<https://openai.com/index/put-data-to-work/>) — _openai.com_
6. [Evolving Pinterest's Embedding Retrieval Platform](<https://medium.com/pinterest-engineering/evolving-pinterests-embedding-retrieval-platform-aede4e831e01>) — _medium.com_
7. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
8. [It passed CI. It passed your evals. The customer still got the wrong answer](<https://thenewstack.io/ai-agent-trace-debugging/>) — _thenewstack.io_
9. [118 million queries per second on Neki](<https://planetscale.com/blog/118-million-queries-per-second-on-neki>) — _planetscale.com_
10. [Why DuckDB 2.0 is faster](<https://motherduck.com/blog/why-duckdb-20-is-faster/>) — _motherduck.com_
11. [Diskless Kafka: What Happens When Brokers Stop Owning the Data?](<https://softwaremill.com/diskless-kafka-object-storage-kip-1150-and-kafkas-future/>) — _softwaremill.com_
12. [PostgreSQL CDC Backfills at Scale: Running a Multi-Day Backfill While Production Keeps Writing](<https://estuary.dev/blog/postgres-cdc-backfill>) — _estuary.dev_
13. [commit-rewriter 0.1](<https://simonwillison.net/2026/Sep/14/commit-rewriter/>) — _simonwillison.net_
14. [shot-scraper 1.12](<https://simonwillison.net/2026/Sep/13/shot-scraper/>) — _simonwillison.net_
15. [Refreshing the Travel-Time Map Behind Lyft's Marketplace: Rebuilding Neighborhood Reachability Signals](<https://eng.lyft.com/refreshing-the-travel-time-map-behind-lyfts-marketplace-rebuilding-neighborhood-reachability-5be3efbc82ea>) — _eng.lyft.com_
16. [Jetpack: Consensus Made Generally Fast (OSDI '26)](<https://muratbuffalo.blogspot.com/2026/09/jetpack-consensus-made-generally-fast.html>) — _muratbuffalo.blogspot.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-09-13` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-13.md) |
| `2026-09-12` | Samedi | [Lire →](news/fr/2026-09-12.md) |
| `2026-09-11` | Vendredi | [Lire →](news/fr/2026-09-11.md) |
| `2026-09-10` | Jeudi | [Lire →](news/fr/2026-09-10.md) |
| `2026-09-09` | Mercredi | [Lire →](news/fr/2026-09-09.md) |
| `2026-09-08` | Mardi | [Lire →](news/fr/2026-09-08.md) |
| `2026-09-07` | Lundi | [Lire →](news/fr/2026-09-07.md) |
| `2026-09-06` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-06.md) |
| `2026-09-05` | Samedi | [Lire →](news/fr/2026-09-05.md) |
| `2026-09-04` | Vendredi | [Lire →](news/fr/2026-09-04.md) |
| `2026-09-03` | Jeudi | [Lire →](news/fr/2026-09-03.md) |
| `2026-09-02` | Mercredi | [Lire →](news/fr/2026-09-02.md) |
| `2026-09-01` | Mardi | [Lire →](news/fr/2026-09-01.md) |
| `2026-08-31` | Lundi | [Lire →](news/fr/2026-08-31.md) |

<sub>[Parcourir toute l’archive (91) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
