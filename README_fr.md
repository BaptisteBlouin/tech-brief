# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-08
<sub>mis à jour le 8 novembre 2026 à 12:00</sub>

## Ingénierie web et navigateur

- Simon Willison a constaté que les pages de tables de Datasette envoyaient un en-tête HTTP `link: rel="next"` qui poussait Firefox à précharger la page suivante de lignes. Cela gaspille de la bande passante et du rendu côté serveur, alors que seule une minorité de visiteurs clique réellement sur « suivant » <sup>[1](<https://simonwillison.net/2026/Nov/7/link-rel-next/>)</sup>. Il a corrigé Datasette (ticket #3046) pour cesser de servir cet en-tête à Firefox sur les pages HTML <sup>[1](<https://simonwillison.net/2026/Nov/7/link-rel-next/>)</sup>.
- Ce comportement de Firefox constitue un problème ouvert depuis environ 24 ans, et il a noté qu'il avait oublié son propre billet de blog de 2002 qui se plaignait de ce problème <sup>[1](<https://simonwillison.net/2026/Nov/7/link-rel-next/>)</sup>.

## Sources

1. [datasette #3046: Don't serve link: rel=next HTTP headers to Firefox for HTML pages](<https://simonwillison.net/2026/Nov/7/link-rel-next/>) — _simonwillison.net_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
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
| `2026-10-26` | Lundi | [Lire →](news/fr/2026-10-26.md) |
| `2026-10-24` | Samedi | [Lire →](news/fr/2026-10-24.md) |

<sub>[Parcourir toute l’archive (145) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
