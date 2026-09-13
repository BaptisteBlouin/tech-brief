# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-09-13
<sub>mis à jour le 13 septembre 2026 à 13:01</sub>

## Agents IA & Outils pour LLM
- GPT-6 Astra (Max) dans ChatGPT Work démontre une utilisation avancée d'outils en générant des itinéraires de course personnalisés de 5 km/10 km à partir d'une adresse, produisant des visualisations intégrées et des fichiers GPX/GeoJSON téléchargeables à l'aide de données OSM sur une session de 27 minutes <sup>[1](<https://simonwillison.net/2026/Sep/12/astra-running-routes/>)</sup>.
- Google met en avant quatre modèles d'ingénierie derrière les meilleures soumissions du défi AI Agents : MCP bidirectionnel pour la communication inter-agents, bus d'événements asynchrones pour l'exécution parallèle, validation unifiée stricte pour les replis de modèle, et routage hiérarchisé pour réduire les coûts d'inférence <sup>[2](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Google publie ADK pour Kotlin 1.0 avec une parité complète avec les cœurs Python/Java, exploitant Kotlin Multiplatform, KSP sans réflexion, des workflows avec humain dans la boucle, la compaction de contexte, et des extensions prioritaires pour Android (LiteRT-LM, Firebase AI, Room, AppSearch) <sup>[3](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.

## Évaluation, Tests & MLOps
- Google préconise des évaluations comportementales—tests rapides, locaux, de type unitaire, vérifiant des actions discrètes d'agents (par exemple, appels d'outils, modifications de fichiers)—pour compléter les benchmarks coûteux de bout en bout comme SWE-bench, permettant des itérations plus sûres sur les prompts et les mises à niveau de modèles <sup>[4](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.
- Le programme DevEx de Google organise des sprints pour affiner la gouvernance IA en entreprise, améliorant les configurations d'Agent Gateway et de Gouvernance Sémantique via des documentations mises à jour et des exemples de code standardisés <sup>[5](<https://developers.googleblog.com/driving-developer-excellence-inside-the-program-sprints/>)</sup>.

## Formation & Infrastructure
- Google présente le post-entraînement autonome de LLM avec Tunix sur des TPU : les agents auto-optimisent les rangs LoRA, les taux d'apprentissage et les tailles de lots, validant les améliorations dans Git, en utilisant Gemma, Cloud TPUs, l'interface Antigravity CLI et Gemini Flash 3.7 <sup>[6](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>.

## Sources

1. [Generating running routes with GPT-6 Astra and ChatGPT Work](<https://simonwillison.net/2026/Sep/12/astra-running-routes/>) — _simonwillison.net_
2. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
3. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
4. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
5. [Driving Developer Excellence: Inside the Program Sprints](<https://developers.googleblog.com/driving-developer-excellence-inside-the-program-sprints/>) — _google ai_
6. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
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
| `2026-08-30` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-08-30.md) |

<sub>[Parcourir toute l’archive (90) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
