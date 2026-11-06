# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-06
<sub>mis à jour le 6 novembre 2026 à 12:01</sub>

## Modèles et versions d'IA

- Thinking Machines a publié Inkling 2 Small, pré-entraîné depuis zéro en moins de 3 jours sur moins de 12 000 milliards de tokens en NVFP4 natif, avec une seule exécution conjointe d'apprentissage par renforcement ; il est présenté comme compétitif, et souvent supérieur, face aux modèles chinois de même taille <sup>[1](<https://latent.space/p/ainews-inkling-2-small-17a-594b-trained-in-68-hours-on-12t-tokens-beating-muse-spark/>)</sup>.

## Outils pour développeurs et assistants de codage IA

- L'API de métriques d'utilisation de GitHub indique désormais, par dépôt, le nombre de commentaires de revue de code Copilot auxquels les développeurs ont donné suite, ainsi qu'un taux de prise en compte calculé (commentaires traités divisés par les commentaires évalués), avec une ventilation par gravité, niveau de revue, type de commentaire et personnalisation <sup>[2](<https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate>)</sup>.
- La même API signale désormais les utilisateurs dont la télémétrie client est manquante ou dont les versions de l'IDE ou de l'extension Copilot sont inférieures aux minimums requis pour les métriques d'utilisation, avec des décomptes quotidiens d'utilisateurs concernés au niveau de l'entreprise et de l'organisation <sup>[3](<https://github.blog/changelog/2026-11-05-usage-metrics-api-flags-telemetry-and-version-gaps>)</sup>.

## Agents et infrastructure pour agents

- Docker Sandboxes est présenté comme une technologie distincte des conteneurs : des microVM dédiées, avec leur propre noyau Linux, leur système de fichiers, leur réseau et leur propre Docker Engine, conçues pour les agents de codage autonomes, alors que les conteneurs partagent le noyau de l'hôte <sup>[4](<https://www.docker.com/blog/docker-sandboxes-vs-containers/>)</sup>.
- Le compte rendu d'un webinaire de Pinecone soutient que les agents IA ont besoin de plus que la similarité vectorielle : un résultat sémantiquement pertinent peut mener à une mauvaise réponse, par exemple lorsqu'une promotion d'un jour est comptée comme de la demande ; la logique de décision doit donc se situer en dehors de l'étape de recherche <sup>[5](<https://www.pinecone.io/blog/webinar-recap-data-to-vectors-to-context/>)</sup>.

## Robotique

- Tau Robotics exploite à San Francisco un service de nettoyage par robots humanoïdes pilotés à distance par des humains ; les données collectées doivent servir plus tard à entraîner des robots de nettoyage plus autonomes <sup>[6](<https://www.technologyreview.com/2026/11/06/1148090/i-watched-a-humanoid-robot-clean-my-apartment-it-felt-like-a-taste-of-the-future/>)</sup>.

## Reconnaissance vocale et benchmarks ouverts

- Le Open ASR Leaderboard a ajouté l'anglais égyptien et l'anglais nigérian <sup>[7](<https://huggingface.co/blog/open-asr-leaderboard-liva>)</sup>.

## Pratiques d'ingénierie et adoption de l'IA

- Un épisode du podcast AI FIRST décrit le système d'exploitation IA interne de cette entreprise, construit autour d'un seul agent doté de compétences plutôt que de 25 spécialistes, et soutient que ce sont les compétences et le contexte qui déterminent le succès de l'approche <sup>[8](<https://ai-first.ai/podcast/wie-wir-bei-ai-first-mit-ki-arbeiten-blick-hinter-die-kulissen-die-groessten-fehler-und-unser-bestes-ki-setup>)</sup>.

## Sources

1. [\[AINews\] Inkling 2 Small: 17A-594B trained in 68 hours on 12T tokens, beating Muse Spark](<https://latent.space/p/ainews-inkling-2-small-17a-594b-trained-in-68-hours-on-12t-tokens-beating-muse-spark/>) — _latent.space_
2. [Usage metrics API adds code review details and addressed rate](<https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate>) — _github.blog_
3. [Usage metrics API flags telemetry and version gaps](<https://github.blog/changelog/2026-11-05-usage-metrics-api-flags-telemetry-and-version-gaps>) — _github.blog_
4. [Docker Sandboxes vs. Containers: Choosing the Right Isolation for AI Agents](<https://www.docker.com/blog/docker-sandboxes-vs-containers/>) — _docker.com_
5. [Webinar Recap: From Data to Vectors to Context](<https://www.pinecone.io/blog/webinar-recap-data-to-vectors-to-context/>) — _pinecone_
6. [I watched a humanoid robot clean my apartment. It felt like a taste of the future.](<https://www.technologyreview.com/2026/11/06/1148090/i-watched-a-humanoid-robot-clean-my-apartment-it-felt-like-a-taste-of-the-future/>) — _technologyreview.com_
7. [Egyptian and Nigerian English join the Open ASR Leaderboard](<https://huggingface.co/blog/open-asr-leaderboard-liva>) — _huggingface.co_
8. [Wie wir bei AI FIRST mit KI arbeiten: Blick hinter die Kulissen, die größten Fehler und unser bestes KI-Setup](<https://ai-first.ai/podcast/wie-wir-bei-ai-first-mit-ki-arbeiten-blick-hinter-die-kulissen-die-groessten-fehler-und-unser-bestes-ki-setup>) — _ai first podcast_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-05` | Jeudi | [Lire →](news/fr/2026-11-05.md) |
| `2026-11-04` | Mercredi | [Lire →](news/fr/2026-11-04.md) |
| `2026-11-03` | Mardi | [Lire →](news/fr/2026-11-03.md) |
| `2026-11-02` | Lundi | [Lire →](news/fr/2026-11-02.md) |
| `2026-11-01` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-01.md) |
| `2026-10-31` | Samedi | [Lire →](news/fr/2026-10-31.md) |
| `2026-10-30` | Vendredi | [Lire →](news/fr/2026-10-30.md) |
| `2026-10-29` | Jeudi | [Lire →](news/fr/2026-10-29.md) |
| `2026-10-28` | Mercredi | [Lire →](news/fr/2026-10-28.md) |
| `2026-10-27` | Mardi | [Lire →](news/fr/2026-10-27.md) |
| `2026-10-26` | Lundi | [Lire →](news/fr/2026-10-26.md) |
| `2026-10-24` | Samedi | [Lire →](news/fr/2026-10-24.md) |
| `2026-10-23` | Vendredi | [Lire →](news/fr/2026-10-23.md) |
| `2026-10-22` | Jeudi | [Lire →](news/fr/2026-10-22.md) |

<sub>[Parcourir toute l’archive (143) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
