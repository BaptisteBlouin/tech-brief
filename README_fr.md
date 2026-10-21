# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-10-21
<sub>mis à jour le 21 octobre 2026 à 13:01</sub>

## Modèles d'IA et LLM

- DeepSeek a publié en open source DeepInfer, sa pile d'inférence en production, une personnalisation de vLLM qui crédite SGLang et TensorRT-LLM ; la version publiée omet le cache KV de DeepSeek, la désagrégation PD et l'équilibrage de charge, et l'article affirme une mise en cache des prompts pouvant atteindre 72 heures <sup>[1](<https://www.latent.space/p/ainews-deepseek-deepinfer-open-source>)</sup>.
- Le modèle Claude d'Anthropic a servi à concevoir des mini-liants protéiques contre les neurotoxines de scorpion : 17 des 211 conceptions ont satisfait aux critères d'Anthropic, mais leur capacité à neutraliser le venin dans des cellules n'est pas confirmée, de sorte qu'ils ne sont pas présentés comme un antivenin <sup>[2](<https://www.anthropic.com/research/claude-scorpion-toxin-binder-design>)</sup>.
- Le projet de S-1 d'Anthropic fait état d'une perte nette supérieure à 80 milliards de dollars au premier semestre, parallèlement à une croissance rapide du chiffre d'affaires et à des dépenses de calcul pouvant atteindre 750 milliards de dollars sur les prochaines années <sup>[3](<https://www.wsj.com/tech/ai/anthropic-revenue-growth-ipo-accaf0f1>)</sup>.

## Sécurité

- Huit certificats intermédiaires de l'autorité de certification eMudhra avaient des clés privées compromises ; ils se rattachent à des racines approuvées par les principaux programmes racines des navigateurs et des systèmes d'exploitation, si bien qu'un attaquant pourrait forger des certificats pour n'importe quel domaine <sup>[4](<https://blog.cloudflare.com/emudhra-certificate-compromise/>), [5](<https://simonwillison.net/2026/Oct/20/emudhra-certificates/>), [6](<https://arstechnica.com/security/2026/10/the-internet-goes-on-high-alert-after-discovery-of-8-compromised-tls-certs/>)</sup>.
- Cloudflare a corrigé ses services critiques, a publié des mises à jour pour ses clients WARP et 1.1.1.1, et ne signale à ce jour aucune exploitation active sur ses services <sup>[4](<https://blog.cloudflare.com/emudhra-certificate-compromise/>)</sup>.
- Les outils Python ont livré des listes de certificats mises à jour : uv 0.13.4, pip 26.2.2 et certifi 2026.10.19 <sup>[5](<https://simonwillison.net/2026/Oct/20/emudhra-certificates/>)</sup>.
- PHP a signalé deux failles critiques d'exécution de code à distance (CVE-2026-109618 et CVE-2026-109619) touchant PHP 5 à 8, avec des correctifs d'urgence attendus le lendemain <sup>[7](<https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/>)</sup>.

## Robotique et simulation

- NVIDIA a publié SimReady Central sur Hugging Face : plus de 2 000 ressources OpenUSD prêtes pour la simulation, gratuites et sans restriction d'accès, couvrant bras robotisés, pinces, racks et équipements de refroidissement, destinées aux jumeaux numériques de robotique et des usines d'IA <sup>[8](<https://huggingface.co/blog/nvidia/simready-central-assets-robotics-ai-factories>)</sup>.

## Pratique d'ingénierie

- L'intervention de Tenex sur un cycle de développement logiciel natif de l'IA décrit une rémunération des ingénieurs basée sur les livrables produits plutôt que sur les heures, tout en utilisant encore les story points dans la rémunération <sup>[9](<https://www.latent.space/p/tenex>)</sup>.

## Sources

1. [\[AINews\] DeepSeek DeepInfer: Open Source SOTA Inference running 155T toks/day/cluster making $22m/day at ~80% margin for a 81 day payback](<https://www.latent.space/p/ainews-deepseek-deepinfer-open-source>) — _latent.space_
2. [How Claude designed protein binders against scorpion neurotoxins](<https://www.anthropic.com/research/claude-scorpion-toxin-binder-design>) — _anthropic.com_
3. [Anthropic S-1 Shows Red-Hot Growth, Risks, and Massive Computing Costs](<https://www.wsj.com/tech/ai/anthropic-revenue-growth-ipo-accaf0f1>) — _wsj.com_
4. [8 eMudhra certificates are compromised. Here's what you need to know](<https://blog.cloudflare.com/emudhra-certificate-compromise/>) — _blog.cloudflare.com_
5. [eMudhra Intermediate CA Compromise](<https://simonwillison.net/2026/Oct/20/emudhra-certificates/>) — _simonwillison.net_
6. [The Internet goes on high alert after discovery of 8 compromised TLS certs](<https://arstechnica.com/security/2026/10/the-internet-goes-on-high-alert-after-discovery-of-8-compromised-tls-certs/>) — _arstechnica.com_
7. [PHP warns admins of two critical flaws, emergency patches coming tomorrow](<https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/>) — _bleepingcomputer.com_
8. [Announcing SimReady Central: An Open Library of Simulation-Ready 3D Assets for Robotics and AI Factories](<https://huggingface.co/blog/nvidia/simready-central-assets-robotics-ai-factories>) — _huggingface.co_
9. [AI for the Fortune 2000: How Tenex Builds an AI-Native SDLC — Alex Lieberman & CJ Hess](<https://www.latent.space/p/tenex>) — _latent.space_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
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
| `2026-10-10` | Samedi | [Lire →](news/fr/2026-10-10.md) |
| `2026-10-09` | Vendredi | [Lire →](news/fr/2026-10-09.md) |
| `2026-10-08` | Jeudi | [Lire →](news/fr/2026-10-08.md) |
| `2026-10-07` | Mercredi | [Lire →](news/fr/2026-10-07.md) |

<sub>[Parcourir toute l’archive (128) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
