# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-14
<sub>mis à jour le 15 novembre 2026 à 00:00</sub>

## Modèles d'IA et outillage

- Anthropic a repensé les Projets de Claude Code selon un modèle fondé sur la conversation : Claude cadre un objectif, le délègue à des fils parallèles, examine les résultats et assemble le produit final, le travail se poursuivant même lorsque l'utilisateur s'éloigne. Cette fonctionnalité est en bêta pour certains abonnés Claude Pro et Max disposant de sessions cloud et n'ayant pas encore de projets ; un accès plus large est prévu dans la semaine à venir <sup>[1](<https://claude.com/resources/articles/projects-redesigned>)</sup>.
- Le manifeste « No AI Slop », présenté lors de la conférence de clôture d'AIE CODE et cosigné par de nombreux intervenants de la conférence, est désormais public et sert d'outil de discussion pour les équipes <sup>[2](<https://latent.space/p/ainews-the-no-ai-slop-manifesto/>)</sup>.
- llama.cpp et ggml ont atteint la version 1.0, annonçant leur stabilité et supprimant 35 fonctions obsolètes de l'en-tête public de llama.cpp ; SGLang a également annoncé sa version 1.0 lors de son récent sommet <sup>[2](<https://latent.space/p/ainews-the-no-ai-slop-manifesto/>)</sup>.

## Industrie et infrastructure

- Selon un rapport du Wall Street Journal relayé par TechPowerUp, NVIDIA aurait gonflé la pénurie de GPU et de mémoire en investissant dans des start-ups d'IA, lesquelles ont ensuite acheté ses GPU et construit des centres de données, en partie pour écouler la surproduction de TSMC. Le rapport évoque un désaccord interne sur la réduction de l'accord de 250 milliards de dollars conclu par NVIDIA avec OpenAI <sup>[3](<https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus>)</sup>.

## DevOps et observabilité

- Un atelier consacré au traçage des agents Claude avec OpenTelemetry et Sentry montre comment suivre, dans une même trace, les appels d'outils échoués, les nouvelles tentatives et le succès final. Cela permet aux équipes de déterminer si un problème de coût en jetons relève du prompt, de l'outil ou du service sous-jacent, par exemple une API lente ou une base de données <sup>[4](<https://blog.bytebytego.com/p/ep233-kubernetes-explained-for-busy>)</sup>.

## Outils de développement

- datasette-cluster-map 0.19 fonctionne désormais avec Datasette 1.0a42 et dépend du nouveau datasette-leaflet, afin de garantir que les tuiles OpenStreetMap soient demandées avec un en-tête referrer <sup>[5](<https://simonwillison.net/2026/Nov/13/datasette-cluster-map/>)</sup>.

## Sources

1. [Anthropic upgrades Claude Code Projects to run parallel AI workers](<https://claude.com/resources/articles/projects-redesigned>) — _hnrss.org_
2. [\[AINews\] The No AI Slop Manifesto](<https://latent.space/p/ainews-the-no-ai-slop-manifesto/>) — _latent.space_
3. [Nvidia allegedly engineered scarcity by funding AI startups to buy its GPUs](<https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus>) — _hnrss.org_
4. [EP233: Kubernetes Explained for Busy Engineers](<https://blog.bytebytego.com/p/ep233-kubernetes-explained-for-busy>) — _blog.bytebytego.com_
5. [datasette-cluster-map 0.19](<https://simonwillison.net/2026/Nov/13/datasette-cluster-map/>) — _simonwillison.net_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
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
| `2026-11-04` | Mercredi | [Lire →](news/fr/2026-11-04.md) |
| `2026-11-03` | Mardi | [Lire →](news/fr/2026-11-03.md) |
| `2026-11-02` | Lundi | [Lire →](news/fr/2026-11-02.md) |
| `2026-11-01` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-01.md) |

<sub>[Parcourir toute l’archive (152) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
