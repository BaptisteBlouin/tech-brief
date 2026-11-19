# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-19
<sub>mis à jour le 19 novembre 2026 à 12:01</sub>

## Modèles d'IA et outillage LLM

- Google DeepMind a publié Gemini 4 Neon, son quatrième modèle Gemini 4 en environ sept semaines, tandis que le modèle précédent Argon est désormais retiré <sup>[1](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>)</sup>. Neon est facturé 3 dollars par million de jetons en entrée et 15 dollars par million de jetons en sortie, et la gamme de Google se décline désormais en Carbon, Neon, Hydrogen, du plus cher au moins cher, Carbon étant actuellement proposé à moitié prix jusqu'au 1er décembre <sup>[1](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>)</sup>.
- Un lecteur de la communauté ayant commenté le billet de Simon Willison note que la tarification de Gemini 4 est devenue plus difficile à suivre, car la remise sur Hydrogen et la promotion arrivant à échéance sur Carbon modifient l'ordre des offres <sup>[2](<https://simonwillison.net/2026/Nov/18/llm-gemini/>)</sup>.

## Outils pour développeurs et DevOps

- GitHub CLI v2.105.0 ajoute `gh event listen`, qui attend les événements d'une pull request, comme une revue soumise, des conflits de fusion ou des suites de vérifications terminées, remplaçant les boucles d'interrogation dans les scripts et les agents <sup>[3](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>)</sup>.
- Les agents utilisant `gh pr create`, `gh pr view`, `gh run watch` ou `gh api` sont désormais orientés vers `gh event listen` au lieu de recourir à l'interrogation <sup>[3](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>)</sup>.

## Cloud, sécurité et infrastructure

- GitHub Enterprise Cloud avec résidence des données (GHE.com) prend désormais en charge la diffusion en continu des journaux d'audit d'entreprise vers Amazon S3 via OpenID Connect, ce qui évite de stocker des identifiants AWS de longue durée sur GitHub <sup>[4](<https://github.blog/changelog/2026-11-19-s3-audit-log-streaming-with-openid-connect-expands-to-ghe-com>)</sup>.

## Sources

1. [\[AINews\] Gemini 4 Neon: GDM's Opus/Sol Contender](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>) — _latent.space_
2. [llm-gemini 0.38](<https://simonwillison.net/2026/Nov/18/llm-gemini/>) — _simonwillison.net_
3. [Wait for pull request events with GitHub CLI](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>) — _github.blog_
4. [S3 audit log streaming with OpenID Connect expands to GHE.com](<https://github.blog/changelog/2026-11-19-s3-audit-log-streaming-with-openid-connect-expands-to-ghe-com>) — _github.blog_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-18` | Mercredi | [Lire →](news/fr/2026-11-18.md) |
| `2026-11-17` | Mardi | [Lire →](news/fr/2026-11-17.md) |
| `2026-11-16` | Lundi | [Lire →](news/fr/2026-11-16.md) |
| `2026-11-15` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-15.md) |
| `2026-11-14` | Samedi | [Lire →](news/fr/2026-11-14.md) |
| `2026-11-13` | Vendredi | [Lire →](news/fr/2026-11-13.md) |
| `2026-11-12` | Jeudi | [Lire →](news/fr/2026-11-12.md) |
| `2026-11-11` | Mercredi | [Lire →](news/fr/2026-11-11.md) |
| `2026-11-10` | Mardi | [Lire →](news/fr/2026-11-10.md) |
| `2026-11-09` | Lundi | [Lire →](news/fr/2026-11-09.md) |
| `2026-11-08` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-08.md) |
| `2026-11-07` | Samedi | [Lire →](news/fr/2026-11-07.md) |
| `2026-11-06` | Vendredi | [Lire →](news/fr/2026-11-06.md) |
| `2026-11-05` | Jeudi | [Lire →](news/fr/2026-11-05.md) |

<sub>[Parcourir toute l’archive (156) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
