# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-10-24
<sub>mis à jour le 25 octobre 2026 à 01:00</sub>

## Modèles d'IA

- Kimi K3.1 Pro, une version post-entraînée de Kimi K3 avec une puissance de calcul d'entraînement post-entraînement nettement plus importante, est présenté comme un modèle à poids ouverts de 2,8 T de paramètres que Latent Space affirme surpasser Fable 5.1 <sup>[1](<https://latent.space/p/ainews-kimi-31/>)</sup>. La sortie s'accompagne également d'une API Pro Highspeed, que la même lettre d'information dit deux à trois fois plus rapide <sup>[1](<https://latent.space/p/ainews-kimi-31/>)</sup>.
- Sebastian Raschka a publié un cours gratuit de huit vidéos (environ 11 heures) qui construit des modèles de raisonnement à partir d'un LLM pré-entraîné en PyTorch, couvrant le passage à l'échelle de l'inférence, l'apprentissage par renforcement et la distillation, en complément de son livre Build Reasoning Model (From Scratch) <sup>[2](<https://magazine.sebastianraschka.com/p/building-reasoning-models>)</sup>.

## Outils pour développeurs et agents de codage

- L'API des métriques d'usage de Copilot de GitHub inclut désormais un nouveau tableau `totals_by_client` dans les rapports sur 1 jour et 28 jours, au niveau de l'entreprise, de l'organisation et de chaque utilisateur <sup>[3](<https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode>)</sup>. Chaque entrée indique, par client, le nombre de requêtes, le nombre de sessions et la consommation de tokens, ce qui permet de suivre l'usage d'outils comme OpenCode, Claude Code et Codex <sup>[3](<https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode>)</sup>.
- Chaque entrée client détaille aussi l'usage par modèle, avec un champ `model_selection_mode` indiquant si le modèle a été choisi directement par l'utilisateur ou sélectionné automatiquement <sup>[3](<https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode>)</sup>.

## Ingénierie IA et RAG

- ByteByteGo explique la différence entre le RAG standard, qui interroge une base de connaissances une seule fois et ajoute les résultats au prompt, et le RAG agentique, où un agent décide comment et quand effectuer la recherche <sup>[4](<https://blog.bytebytego.com/p/ep230-rag-vs-agentic-rag>)</sup>.

## Projets et expérimentations

- Battledrones de Simon Willison a reçu une carte à quatre joueurs « Compass Rose », développée avec Claude Opus 5.5, qui ajoute une symétrie de rotation à quatre voies et la prise en charge du multijoueur WebSocket pour jusqu'à quatre humains, les places libres étant occupées par des IA <sup>[5](<https://simonwillison.net/2026/Oct/24/battledrones/>)</sup>.

## Sources

1. [\[AINews\] Kimi 3.1 Pro 104BA-2.8T: Fable-5.1-Class Open Weights narrows Closed-AI lead to 1 month... and Pro Highspeed API with 2-3× speed](<https://latent.space/p/ainews-kimi-31/>) — _latent.space_
2. [Building Reasoning Models from the Ground Up: A Full Video Course](<https://magazine.sebastianraschka.com/p/building-reasoning-models>) — _magazine.sebastianraschka.com_
3. [Usage metrics API adds usage from tools like OpenCode](<https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode>) — _github.blog_
4. [EP230: RAG vs Agentic RAG](<https://blog.bytebytego.com/p/ep230-rag-vs-agentic-rag>) — _blog.bytebytego.com_
5. [battledrones v14: Compass Rose, a four player map](<https://simonwillison.net/2026/Oct/24/battledrones/>) — _simonwillison.net_


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
