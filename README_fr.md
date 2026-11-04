# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-04
<sub>mis à jour le 4 novembre 2026 à 12:00</sub>

## DevOps et outils pour développeurs

- L'API de métriques d'utilisation de Copilot de GitHub indique désormais séparément l'utilisation BYOK (bring-your-own-key) de l'utilisation des modèles hébergés par Copilot <sup>[1](<https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api>)</sup>. Les requêtes BYOK locales, émises depuis Copilot CLI ou l'application Copilot directement vers la clé fournisseur d'un développeur ou vers un modèle local, sont suivies via `used_local_byok` et `totals_by_local_byok` <sup>[1](<https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api>)</sup>.
- Le BYOK local couvre les modèles locaux servis par des outils tels qu'Ollama, Foundry Local, LM Studio et llama-server <sup>[1](<https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api>)</sup>.
- Les modèles personnalisés d'entreprise, configurés par les administrateurs et routés via GitHub vers le fournisseur, sont identifiés par `is_custom_enterprise_model` dans `totals_by_client` <sup>[1](<https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api>)</sup>.
- Les deux types de BYOK apparaissent dans les rapports des entreprises et des organisations, au niveau utilisateur et agrégé, dans les rapports sur 1 jour et sur 28 jours <sup>[1](<https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api>)</sup>.

## Sources

1. [BYOK and enterprise custom models in the Copilot usage API](<https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api>) — _github.blog_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
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
| `2026-10-21` | Mercredi | [Lire →](news/fr/2026-10-21.md) |
| `2026-10-20` | Mardi | [Lire →](news/fr/2026-10-20.md) |

<sub>[Parcourir toute l’archive (141) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
