# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-10-15
<sub>mis à jour le 15 octobre 2026 à 13:00</sub>

## Infrastructure IA et industrie

- Modal indique avoir franchi le cap du milliard de dollars de chiffre d'affaires annualisé et levé 16 milliards de dollars en série D, avec une utilisation et une valorisation multipliées par trois en cinq mois <sup>[1](<https://www.latent.space/p/ainews-modals-1b-arr-16b-series-d>)</sup>.
- Cohere a annoncé un accord proposé pour acquérir AISLE, une entreprise qui développe des systèmes autonomes destinés à détecter et corriger des vulnérabilités logicielles inconnues, afin de renforcer sa plateforme d'IA souveraine et sa présence en Europe <sup>[2](<https://cohere.com/blog/cohere-and-aisle-sign-letter-of-intent-to-advance-cyber-resilient-sovereign-ai>)</sup>.
- Anthropic aurait indiqué à ses investisseurs que son chiffre d'affaires du troisième trimestre a progressé d'environ 45 % par rapport au trimestre précédent, pour atteindre 16,8 milliards de dollars, à l'approche d'une éventuelle introduction en bourse qui pourrait valoriser l'entreprise à 2 000 milliards de dollars <sup>[3](<https://www.nytimes.com/2026/10/14/technology/anthropic-ipo-revenue-profit.html>)</sup>.
- Une analyse publiée sur Substack indique que plus de la moitié des entreprises paient désormais pour l'IA, et que la croissance proviendra de plus en plus d'une adoption plus approfondie plutôt que de nouveaux clients <sup>[4](<https://econlab.substack.com/p/ai-index-oct-2026>)</sup>.

## Outillage LLM, RAG et agents

- L'équipe de Jev indique avoir sélectionné en premier la bonne page dans 88 % des cas sur 168 questions de test, contre 70 % pour la recherche par embeddings, et avoir ramené les résultats non pertinents de 33 % à 3 % en répondant « aucune » lorsqu'aucune page ne convenait <sup>[5](<https://sayora.ai/many-hands/jev-vs-embeddings/>)</sup>.
- Phoenix est une plateforme d'observabilité open source, auto-hébergée, qui capture les traces OpenTelemetry et propose des évaluations de recherche et de réponses, des jeux de données, des expériences et le rejeu de prompts pour les applications LLM <sup>[6](<https://github.com/Arize-ai/phoenix>)</sup>.
- XERJ est un moteur de recherche local sous licence Apache 2.0, compatible avec Elasticsearch, qui indexe automatiquement le code, les journaux, les PDF et les CSV pour la recherche documentaire des agents et le RAG, avec un reclassement optionnel pouvant transmettre des textes à un fournisseur externe <sup>[7](<https://github.com/xerj-org/xerj>)</sup>.
- Une preuve de concept montre la sécurité au niveau des lignes pour les tableaux de bord Claude via MCP : un serveur MCP authentifie les utilisateurs et interroge DuckDB, de sorte que les règles d'accès s'appliquent avant que les données n'atteignent Claude <sup>[8](<https://thedatavist.substack.com/p/need-to-know-implementing-row-level>)</sup>.
- Le guide de Docker décrit les risques liés aux agents, tels que l'injection de prompts, le détournement d'outils et une autonomie excessive, et préconise de restreindre ce à quoi un agent peut accéder et de superviser ses actions <sup>[9](<https://www.docker.com/blog/ai-agent-security-risks/>)</sup>.
- Addy Osmani recommande une vérification agentique : des tests de bout en bout comme référence, des tests basés sur les propriétés pour rechercher les états interdits, et des tests déterministes et rapides afin que les agents puissent réessayer de manière fiable <sup>[10](<https://addyo.substack.com/p/agentic-verification>)</sup>.

## Service de modèles et infrastructure d'inférence

- Meta décrit l'utilisation de capacités d'inférence inactives et opportunistes pour classer davantage de publicités ou orienter les requêtes vers des modèles plus performants, en réduisant rapidement l'usage lorsque cette capacité disparaît, tout en préservant la latence et la fiabilité habituelles <sup>[11](<https://engineering.fb.com/2026/10/12/ml-applications/turning-opportunistic-ai-inference-capacity-into-better-ads-recommendations/>)</sup>.

## Données, bases de données et DevOps

- Un tutoriel sur la réplication logique rapporte une mise à niveau majeure de PostgreSQL avec une interruption d'écriture de 181 ms, puis de 179 ms lors du retour arrière, sans perte de données, en utilisant des clusters ancien et nouveau fonctionnant en parallèle <sup>[12](<https://tapoueh.org/blog/2026/10/zero-downtime-postgres-upgrades-with-logical-replication>)</sup>.
- SQLBuild est un framework open source SQL et Python qui vérifie les contrats et la lignée des données avant exécution, et permet des renommages sûrs ainsi que des comparaisons avec la production sur Snowflake, Postgres, BigQuery et Databricks <sup>[13](<https://github.com/chio-labs/sqlbuild>)</sup>.
- pg_vectorsearch est une extension PostgreSQL pour la recherche approximative du plus proche voisin <sup>[14](<https://github.com/timescale/pg_vectorsearch>)</sup>.
- Des tests de performance portant sur 1 000 identifiants ont montré que les jointures IN, ANY et VALUES ont des performances similaires dans PostgreSQL ; les équipes doivent donc vérifier avec EXPLAIN sur leurs propres données <sup>[15](<https://explainmeasured.com/posts/arguments-that-came-out-even>)</sup>.

## Pratiques de développement et outillage

- Jared Palmer soutient que reconnaître un code propre reste utile, mais que savoir quelle forme donner à un programme avant de l'écrire est une capacité que l'IA ne possède pas encore <sup>[16](<https://jaredpalmer.com/blog/code-you-didnt-write>)</sup>.
- Un benchmark a traité 7,6 Go de JSON en environ 0,12 seconde avec fastsimdjson sur Python en mode multi-threads libre, réparti sur 64 cœurs, soit environ 66 Go/s, en parallélisant le traitement et en ne construisant des objets Python que pour les champs nécessaires <sup>[17](<https://lemire.me/blog/2026/10/12/parsing-json-at-tens-of-gigabytes-per-second-in-python/>)</sup>.

## Sources

1. [\[AINews\] Modal’s $1B ARR, $16B Series D makes it NYC’s newest AI Infra Decacorn, 3x usage and 3x valuation in 5 months, 15x in 1 yr](<https://www.latent.space/p/ainews-modals-1b-arr-16b-series-d>) — _latent.space_
2. [Cohere and AISLE sign letter of intent to advance cyber-resilient sovereign AI](<https://cohere.com/blog/cohere-and-aisle-sign-letter-of-intent-to-advance-cyber-resilient-sovereign-ai>) — _cohere_
3. [Anthropic Says Revenue Jumped 45% to $16.8 Billion in Third Quarter](<https://www.nytimes.com/2026/10/14/technology/anthropic-ipo-revenue-profit.html>) — _nytimes.com_
4. [Cracks in the AI Thesis Part 3](<https://econlab.substack.com/p/ai-index-oct-2026>) — _econlab.substack.com_
5. [Jev handed our LLM the wrong page a tenth as often as our embeddings](<https://sayora.ai/many-hands/jev-vs-embeddings/>) — _sayora.ai_
6. [Phoenix](<https://github.com/Arize-ai/phoenix>) — _github.com_
7. [XERJ](<https://github.com/xerj-org/xerj>) — _github.com_
8. [Need to Know: Implementing row-level security for Claude Dashboards via Model Context Protocol](<https://thedatavist.substack.com/p/need-to-know-implementing-row-level>) — _thedatavist.substack.com_
9. [AI Agent Security Risks: What Can Go Wrong When Agents Act on Their Own](<https://www.docker.com/blog/ai-agent-security-risks/>) — _docker.com_
10. [Agentic Verification](<https://addyo.substack.com/p/agentic-verification>) — _addyo.substack.com_
11. [Turning Opportunistic AI Inference Capacity Into Better Ads Recommendations](<https://engineering.fb.com/2026/10/12/ml-applications/turning-opportunistic-ai-inference-capacity-into-better-ads-recommendations/>) — _engineering.fb.com_
12. [Zero-downtime Postgres upgrades with logical replication](<https://tapoueh.org/blog/2026/10/zero-downtime-postgres-upgrades-with-logical-replication>) — _tapoueh.org_
13. [SQLBuild: safe refactoring for warehouse SQL](<https://github.com/chio-labs/sqlbuild>) — _github.com_
14. [pg_vectorsearch](<https://github.com/timescale/pg_vectorsearch>) — _github.com_
15. [Four PostgreSQL arguments that came out even](<https://explainmeasured.com/posts/arguments-that-came-out-even>) — _explainmeasured.com_
16. [Code you didn't write](<https://jaredpalmer.com/blog/code-you-didnt-write>) — _jaredpalmer.com_
17. [Parsing JSON at tens of gigabytes per second… in Python](<https://lemire.me/blog/2026/10/12/parsing-json-at-tens-of-gigabytes-per-second-in-python/>) — _lemire.me_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-10-14` | Mercredi | [Lire →](news/fr/2026-10-14.md) |
| `2026-10-13` | Mardi | [Lire →](news/fr/2026-10-13.md) |
| `2026-10-12` | Lundi | [Lire →](news/fr/2026-10-12.md) |
| `2026-10-11` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-10-11.md) |
| `2026-10-10` | Samedi | [Lire →](news/fr/2026-10-10.md) |
| `2026-10-09` | Vendredi | [Lire →](news/fr/2026-10-09.md) |
| `2026-10-08` | Jeudi | [Lire →](news/fr/2026-10-08.md) |
| `2026-10-07` | Mercredi | [Lire →](news/fr/2026-10-07.md) |
| `2026-10-06` | Mardi | [Lire →](news/fr/2026-10-06.md) |
| `2026-10-05` | Lundi | [Lire →](news/fr/2026-10-05.md) |
| `2026-10-04` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-10-04.md) |
| `2026-10-03` | Samedi | [Lire →](news/fr/2026-10-03.md) |
| `2026-10-02` | Vendredi | [Lire →](news/fr/2026-10-02.md) |
| `2026-10-01` | Jeudi | [Lire →](news/fr/2026-10-01.md) |

<sub>[Parcourir toute l’archive (122) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
