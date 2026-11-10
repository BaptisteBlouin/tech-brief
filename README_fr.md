# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-10
<sub>mis à jour le 10 novembre 2026 à 12:01</sub>

## Modèles d'IA et sorties

- Anthropic a publié Claude Fable 5.2 et Mythos 5.2, et Fable 5.2 est actuellement classé premier sur Artificial Analysis <sup>[1](<https://simonwillison.net/2026/Nov/9/llm-anthropic/>), [2](<https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/>)</sup>.
- Fable 5.2 est tarifé 8 dollars par million de tokens en entrée et 40 dollars par million de tokens en sortie, contre 10 et 50 dollars pour Fable 5.1 <sup>[2](<https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/>)</sup>.
- Sur le benchmark de tâches professionnelles GDPx mené par SemiAnalysis, Fable 5.2 se classe premier avec 16,4 %, mais son coût grimpe à 88,15 dollars par tâche contre 67,16 dollars, car il a écrit beaucoup plus de cas de test et lancé des sous-agents pour vérifier son travail <sup>[2](<https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/>)</sup>.
- Meta a lancé Muse Ember, son modèle le plus petit et le plus efficace, destiné aux appels d'outils, aux sous-tâches de codage, au routage et à l'extraction ; pour les prompts courts, il est tarifé au même prix que GPT-6 Luna et Claude Haiku 5.5, soit 0,10 dollar par million de tokens en entrée et 0,50 dollar par million de tokens en sortie <sup>[3](<https://simonwillison.net/2026/Nov/10/muse-ember/>)</sup>.
- La documentation d'Anthropic indique que le fait de préciser à Fable 5.2 que la base de code lui appartient le conduit à fusionner du code répété dans environ la moitié des essais, contre moins d'un dixième sans cette précision <sup>[4](<https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/>)</sup>.

## Outils LLM et workflows de développement

- La version 0.31 de llm-anthropic ajoute la prise en charge de Fable 5.2, mais le réglage de raisonnement maximal n'a pas permis de renvoyer une image : les tokens se sont épuisés après 128 000 tokens de réflexion <sup>[1](<https://simonwillison.net/2026/Nov/9/llm-anthropic/>)</sup>.
- Un développeur a créé Beep Locator avec Claude Code, un système multi-appareils qui localise par triangulation la source d'un bip à partir de téléphones et de tablettes utilisés comme écouteurs <sup>[5](<https://simonwillison.net/2026/Nov/9/mysterious-beeps/>)</sup>.

## Ingénierie des données

- Le stockage en colonnes de DuckDB signifie qu'une requête portant sur trois colonnes parmi cinquante ne lit que ces trois colonnes ; les valeurs sont traitées par vecteurs de 2 048 et se compressent bien, car chaque colonne ne contient qu'un seul type <sup>[6](<https://duckdb.org/2026/11/10/ducks-in-a-column.html>)</sup>.

## Finance et infrastructure

- Le rendement obligataire de CoreWeave a dépassé 16 % alors que les tensions sur le crédit lié à l'IA s'accentuent, rendant le financement de la puissance de calcul pour l'IA plus coûteux <sup>[7](<https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html>)</sup>.

## Sources

1. [llm-anthropic 0.31](<https://simonwillison.net/2026/Nov/9/llm-anthropic/>) — _simonwillison.net_
2. [\[AINews\] Fable 5.2 retakes World #1 LLM spot as $ANT IPO roadshow begins](<https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/>) — _latent.space_
3. [Introducing Our Smallest, Most Efficient Model: Muse Ember](<https://simonwillison.net/2026/Nov/10/muse-ember/>) — _simonwillison.net_
4. [Quoting Prompting Claude Fable 5.2](<https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/>) — _simonwillison.net_
5. [Locating the source of a mysterious beep with Claude](<https://simonwillison.net/2026/Nov/9/mysterious-beeps/>) — _simonwillison.net_
6. [Ducks in a Column](<https://duckdb.org/2026/11/10/ducks-in-a-column.html>) — _duckdb.org_
7. [CoreWeave bond yield tops 16% as AI credit stress rises](<https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html>) — _hnrss.org_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-09` | Lundi | [Lire →](news/fr/2026-11-09.md) |
| `2026-11-08` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-08.md) |
| `2026-11-07` | Samedi | [Lire →](news/fr/2026-11-07.md) |
| `2026-11-06` | Vendredi | [Lire →](news/fr/2026-11-06.md) |
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

<sub>[Parcourir toute l’archive (147) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
