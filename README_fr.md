# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-01
<sub>mis à jour le 1 novembre 2026 à 12:01</sub>

## Sécurité

- Parameter Labs décrit une chaîne d'exploitation visant les aperçus HTML de ChatGPT (anciennement « Canvas »), la fonctionnalité d'iframes sandboxées permettant d'exécuter des applications HTML personnalisées et interactives <sup>[1](<https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/>)</sup>. L'attaque a exploité la bibliothèque MathLive et son clavier virtuel, qui peut être déclenché depuis un cadre sandboxé via postMessage() et utilise innerHTML dans la page parente. Ainsi, du code non fiable exécuté dans l'iframe pouvait injecter du HTML dans la page parente et, selon l'article, accéder à des données privées et aux API d'OpenAI <sup>[1](<https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/>)</sup>.
- Leçon pour les développeurs : les iframes sandboxées ne sont aussi sûres que chaque gestionnaire de messages qu'elles peuvent atteindre. Tout récepteur postMessage qui écrit du innerHTML à partir de données fournies par le cadre doit donc vérifier l'origine et assainir ces données <sup>[1](<https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/>)</sup>.

## Sources

1. [How We Took Over ChatGPT Accounts](<https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/>) — _simonwillison.net_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-10-31` | Samedi | [Lire →](news/fr/2026-10-31.md) |
| `2026-10-30` | Vendredi | [Lire →](news/fr/2026-10-30.md) |
| `2026-10-29` | Jeudi | [Lire →](news/fr/2026-10-29.md) |
| `2026-10-28` | Mercredi | [Lire →](news/fr/2026-10-28.md) |
| `2026-10-27` | Mardi | [Lire →](news/fr/2026-10-27.md) |
| `2026-10-26` | Lundi | [Lire →](news/fr/2026-10-26.md) |
| `2026-10-24` | Samedi | [Lire →](news/fr/2026-10-24.md) |
| `2026-10-23` | Vendredi | [Lire →](news/fr/2026-10-23.md) |
| `2026-10-22` | Jeudi | [Lire →](news/fr/2026-10-22.md) |
| `2026-10-21` | Mercredi | [Lire →](news/fr/2026-10-21.md) |
| `2026-10-20` | Mardi | [Lire →](news/fr/2026-10-20.md) |
| `2026-10-19` | Lundi | [Lire →](news/fr/2026-10-19.md) |
| `2026-10-18` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-10-18.md) |
| `2026-10-17` | Samedi | [Lire →](news/fr/2026-10-17.md) |

<sub>[Parcourir toute l’archive (138) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
