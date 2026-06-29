# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archives conservées 14 jours._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-06-29
<sub>mis à jour le 29 juin 2026 à 13:01</sub>

## Modèles IA/ML, outils et agents
- OpenAI Economic Research étend son cadre de transition des emplois liés à l'IA à l'UE, en utilisant la taxonomie ESCO et les données d'Eurostat pour cartographier les changements occupationnels à court terme, et constate une part plus faible d'emplois à forte automatisation qu'aux États-Unis <sup>[1](<https://openai.com/index/mapping-ai-jobs-transition-eu>)</sup>.
- Les États-Unis lèvent partiellement leur interdiction sur Mythos 5 d'Anthropic, permettant aux entreprises de confiance et aux partenaires gouvernementaux d'y accéder tout en maintenant les restrictions sur Fable 5 et Mythos 5 dans son ensemble en attendant de nouveaux standards d'évaluation fédéraux <sup>[2](<https://www.wsj.com/tech/ai/trump-administration-rolls-back-part-of-anthropic-model-ban-e8284434?st=mEYCim&reflink=desktopwebshare_permalink>)</sup>.
- Google limite l'accès de Meta à Gemini en raison de pénuries de ressources de calcul, poussant Meta à prôner l'efficacité des tokens et à déplacer les charges de travail vers son propre modèle Muse Spark <sup>[3](<https://thenextweb.com/news/google-caps-meta-gemini-compute-shortage>)</sup>.
- Dropbox améliore Dash Chat en utilisant DSPy : les évaluations LLM-en-tant-que-juge, les étiquettes humaines, la relecture hors ligne et la validation statistique réduisent les réponses incomplètes, élargissent la couverture des intentions et diminuent l'utilisation des tokens sans perte de qualité <sup>[4](<https://dropbox.tech/machine-learning/how-we-turned-ai-evaluations-into-better-responses-in-dash-chat>)</sup>.
- Wix mène 250 évaluations d'agents montrant que des documents optimisés surpassent les configurations basées uniquement sur des compétences pour les tâches CLI (87 % vs 67 % de complétion, −35 % de tokens), tandis que pour les tâches API, les documents sont plus rapides et les compétences plus économes en tokens ; recommande les documents comme base avec les compétences en couche de cache <sup>[5](<https://www.wix.engineering/post/we-ran-250-ai-agent-evals-to-find-out-if-skills-beat-docs-the-answer-is-more-complicated-than-we-ex>)</sup>.
- Un tutoriel pratique démontre une pile d'agent de codage entièrement locale : LLM servi localement avec lecture/écriture de fichiers, exécution de commandes et vérification des modifications pour des flux de travail transparents, inspectables et prévisibles en termes de coûts <sup>[6](<https://magazine.sebastianraschka.com/p/using-local-coding-agents>)</sup>.
- Une analyse approfondie de 12 To de journaux d'agents de codage IA (17 minutes) plaide pour l'efficacité des tokens plutôt que leur maximisation, insistant sur la planification préalable, des sessions de taille adaptée, un contexte propre, des outils API-first, une CI robuste et une relecture humaine ciblée <sup>[7](<https://www.youtube.com/watch?v=3abXSMZUbbM>)</sup>.
- Manticore reconstruit son pipeline d'embeddings ONNX sur ONNX Runtime, obtenant jusqu'à 14× de gains de débit via des sessions partagées thread-safe, la désactivation du spinning intra-opération, et un traitement par document pour éviter les contentions de verrous et les surcoûts de remplissage <sup>[8](<https://manticoresearch.com/blog/onnx-embeddings-speedup/>)</sup>.

## Données, RAG et recherche
- LangChain détaille la construction de l'index inversé de SmithDB : analyse JSON efficace, tokenisation, internement de chaînes (~2,2× d'accélération), compaction en streaming pour une mémoire bornée, chunks alignés et coalescence des requêtes pour réduire les GETs dans le stockage d'objets, et requêtes hybrides SSD local/stockage d'objets pour une fraîcheur sous la seconde <sup>[9](<https://www.langchain.com/blog/full-text-search-in-smithdb-constructing-and-querying-our-inverted-index-pt-2>)</sup>.
- Common Crawl publie des graphes web au niveau hôte et domaine (6B+ arêtes) pour avril–juin 2026 afin de soutenir l'analyse de liens à grande échelle sans exécuter de crawler <sup>[10](<https://commoncrawl.org/blog/host--and-domain-level-web-graphs-april-may-and-june-2026>)</sup>.

## MLOps, ingénierie des données et DevOps
- Apache Flink 2.3.0 fait avancer une plateforme de streaming déclarative avec des tables matérialisées évolutives (modifications DDL/requêtes sans retraitement complet), conversion de changelog SQL, gestion explicite des conflits d'upsert, et support natif de S3 sans dépendances Hadoop <sup>[11](<https://flink.apache.org/2026/06/25/apache-flink-2.3.0-release-announcement/>)</sup>.
- Pinterest implémente une évolution de schéma automatisée pour le CDC à travers Kafka, Flink, Spark et Iceberg, traitant le schéma comme un contrat avec détection des dérives push/pull, auditabilité des PR, récupération basée sur les SLA et solutions de repli pour le backfill <sup>[12](<https://medium.com/pinterest-engineering/automated-schema-evolution-in-pinterests-next-generation-db-ingestion-framework-36c5c07070de>)</sup>.
- Razorpay construit une plateforme de données client interne avec Airflow+Spark pour le calcul quotidien de segments, des workflows Temporal pour une ingestion fiable dans DynamoDB avec versionnage sans temps d'arrêt, et des recherches hachées préservant la confidentialité pour unifier 500M+ de profils <sup>[13](<https://engineering.razorpay.com/turning-scattered-data-into-queryable-segments-at-scale-how-razorpay-built-its-customer-data-3937c4b012de>)</sup>.
- Hardwood 1.0 est lancé en tant que lecteur Parquet rapide et natif pour JVM (Java 21+), sans dépendances obligatoires, avec décodage parallèle des pages, projections, push-down de prédicats, et des benchmarks à 16,5M de lignes/sec avec des accélérations sélectives de ~17–18× <sup>[14](<https://www.morling.dev/blog/hardwood-1-0-fast-lightweight-apache-parquet-reader-for-the-jvm/>)</sup>.
- Une alternative auto-hébergée à dbt Cloud combine dbt Core avec React/FastAPI et Prefect, mettant l'accent sur la gestion des emplois via API, les logs, les déploiements et le statut d'exécution en temps réel plutôt que le scraping CLI <sup>[15](<https://medium.com/@diedericks.dan/building-my-own-self-hosted-dbt-cloud-d3b737ae885c>)</sup>.

## Cloud et infrastructure
- Snowflake affirme que les performances réelles des charges de travail (données réelles, concourance, latence, échelle, coût) priment sur les benchmarks médiatisés, et recommande d'évaluer si la charge de travail correspond à la vôtre, si la configuration est prête pour la production, et si les résultats tiennent à mesure que les données croissent <sup>[16](<https://www.snowflake.com/en/blog/engineering/measuring-real-workload-performance/>)</sup>.

## Sources

1. [Mapping Europe’s AI Workforce Opportunity](<https://openai.com/index/mapping-ai-jobs-transition-eu>) — _openai.com_
2. [Trump Administration Rolls Back Part of Anthropic Model Ban](<https://www.wsj.com/tech/ai/trump-administration-rolls-back-part-of-anthropic-model-ban-e8284434?st=mEYCim&reflink=desktopwebshare_permalink>) — _wsj.com_
3. [Google is rationing Gemini access to Meta because it cannot provide enough compute](<https://thenextweb.com/news/google-caps-meta-gemini-compute-shortage>) — _thenextweb.com_
4. [How we used DSPy to turn AI evaluations into better responses in Dash chat](<https://dropbox.tech/machine-learning/how-we-turned-ai-evaluations-into-better-responses-in-dash-chat>) — _dropbox.tech_
5. [We Ran 250 AI Agent Evals to Find Out if Skills Beat Docs. The Answer Is More Complicated Than We Expected](<https://www.wix.engineering/post/we-ran-250-ai-agent-evals-to-find-out-if-skills-beat-docs-the-answer-is-more-complicated-than-we-ex>) — _wix.engineering_
6. [Using Local Coding Agents](<https://magazine.sebastianraschka.com/p/using-local-coding-agents>) — _magazine.sebastianraschka.com_
7. [12TB of AI Coding Agent Logs (17 minute video)](<https://www.youtube.com/watch?v=3abXSMZUbbM>) — _youtube.com_
8. [14x faster embeddings: how we rebuilt the ONNX path in Manticore](<https://manticoresearch.com/blog/onnx-embeddings-speedup/>) — _manticoresearch.com_
9. [How we built SmithDB's inverted index for full-text search](<https://www.langchain.com/blog/full-text-search-in-smithdb-constructing-and-querying-our-inverted-index-pt-2>) — _langchain.com_
10. [Host- and Domain-Level Web Graphs April, May, and June 2026](<https://commoncrawl.org/blog/host--and-domain-level-web-graphs-april-may-and-june-2026>) — _commoncrawl.org_
11. [Apache Flink 2.3.0 Release Announcement](<https://flink.apache.org/2026/06/25/apache-flink-2.3.0-release-announcement/>) — _flink.apache.org_
12. [Automated Schema Evolution in Pinterest's Next-Generation DB Ingestion Framework](<https://medium.com/pinterest-engineering/automated-schema-evolution-in-pinterests-next-generation-db-ingestion-framework-36c5c07070de>) — _medium.com_
13. [Turning Scattered Data Into Queryable Segments at Scale: How Razorpay Built Its Customer Data Platform](<https://engineering.razorpay.com/turning-scattered-data-into-queryable-segments-at-scale-how-razorpay-built-its-customer-data-3937c4b012de>) — _engineering.razorpay.com_
14. [Hardwood 1.0: A Fast, Lightweight Apache Parquet Reader for the JVM](<https://www.morling.dev/blog/hardwood-1-0-fast-lightweight-apache-parquet-reader-for-the-jvm/>) — _morling.dev_
15. [Building My Own Self-Hosted dbt Cloud](<https://medium.com/@diedericks.dan/building-my-own-self-hosted-dbt-cloud-d3b737ae885c>) — _medium.com_
16. [Why Real Workload Performance is the Metric that Matters](<https://www.snowflake.com/en/blog/engineering/measuring-real-workload-performance/>) — _snowflake.com_


## Archive récente

_Un fichier par jour (conservé 14 jours)._

- [2026-06-28](news/fr/2026-06-28.md)
- [2026-06-27](news/fr/2026-06-27.md)
- [2026-06-26](news/fr/2026-06-26.md)
- [2026-06-25](news/fr/2026-06-25.md)
- [2026-06-24](news/fr/2026-06-24.md)
- [2026-06-23](news/fr/2026-06-23.md)
- [2026-06-22](news/fr/2026-06-22.md)
- [2026-06-21](news/fr/2026-06-21.md)

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
