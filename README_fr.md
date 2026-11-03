# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-03
<sub>mis à jour le 3 novembre 2026 à 12:01</sub>

## Modèles et outils LLM

- L'article « Weight Space Programming » montre qu'un modèle capable peut lire et modifier les poids d'un modèle plus faible, avec une démonstration d'entraînement autonome d'un modèle sans expertise humaine <sup>[1](<https://latent.space/p/ainews-llms-can-read-write-neural-network-weights-weight-space-programming-cuts-autoresearch-out-of/>)</sup>. L'article présente ce travail comme une suite de l'autoresearch de Karpathy, qui a soulevé des inquiétudes sur l'auto-amélioration récursive <sup>[1](<https://latent.space/p/ainews-llms-can-read-write-neural-network-weights-weight-space-programming-cuts-autoresearch-out-of/>)</sup>.
- Simon Willison a publié llm 0.37, qui ajoute les modèles gpt-6.1-sol et gpt-6.1-terra ainsi qu'une commande `llm openai endpoint add` pour les points d'accès compatibles OpenAI <sup>[2](<https://simonwillison.net/2026/Nov/2/llm/>)</sup>. Le modèle par défaut passe à gpt-6-luna, que les notes de version décrivent comme deux fois moins cher que l'ancien modèle par défaut <sup>[2](<https://simonwillison.net/2026/Nov/2/llm/>)</sup>.
- Cette même version ajoute la prise en charge de l'intégration (embeddings) pour différents types de contenu, dont Gemini Embedding 2 a besoin pour le texte, l'audio, les images et la vidéo <sup>[2](<https://simonwillison.net/2026/Nov/2/llm/>)</sup>.

## Inférence et MLOps

- Un billet de Hugging Face présente les Transformers Model Integration Contracts, avec un exemple de modèle smollm <sup>[3](<https://huggingface.co/blog/transformers-mic>)</sup>.
- Un compte rendu de PyTorchKR et XCENA sur le KVCache Meetup Korea 2026 traite de l'optimisation du cache KV pour l'inférence des LLM, avec des interventions sur l'extension de mémoire CXL, les goulets d'étranglement GPU et HBM, l'ordonnancement des requêtes sur RNGD et le mode MP de LMCache <sup>[4](<https://pytorch.org/blog/kvcache-meetup-korea-2026-event-recap/>)</sup>.

## Agents et IA appliquée

- Latent Space interroge Jacob Lauritzen, CTO de Legora, sur la conception d'agents pour les juristes : l'agent rédige et modifie des documents Word, examine des milliers de contrats simultanément et coordonne avocats, clients et autres agents <sup>[5](<https://latent.space/p/building-ai-for-lawyers-jacob-lauritzen-cto-of-legora/>)</sup>.
- OpenAI décrit comment Heimstaden utilise ChatGPT Enterprise et Codex pour la gestion immobilière, avec des réductions de coûts et une autonomisation des employés en Europe <sup>[6](<https://openai.com/index/heimstaden>)</sup>.

## Sécurité et confidentialité

- Un billet de Simon Willison met en avant une technique d'OSINT qui retrouve la localisation d'une vidéo à partir des courbes Doppler du bruit de fond des avions, recoupées avec les données ADS-B <sup>[7](<https://simonwillison.net/2026/Nov/3/a-sound-that-leaks-your-exact-location/>)</sup>.

## Contexte industriel

- MIT Technology Review rapporte qu'un décret de septembre a demandé aux agences américaines de remplacer l'expression « intelligence artificielle » par « Super Intelligence » <sup>[8](<https://www.technologyreview.com/2026/11/02/1147932/heres-who-is-falling-in-line-for-trumps-super-intelligence-loyalty-test/>)</sup>.

## Sources

1. [\[AINews\] LLMs can read & write neural network weights: "Weight Space Programming" cuts Autoresearch out of the RSI loop](<https://latent.space/p/ainews-llms-can-read-write-neural-network-weights-weight-space-programming-cuts-autoresearch-out-of/>) — _latent.space_
2. [llm 0.37](<https://simonwillison.net/2026/Nov/2/llm/>) — _simonwillison.net_
3. [Transformers Model Integration Contracts](<https://huggingface.co/blog/transformers-mic>) — _huggingface.co_
4. [KVCache Meetup Korea 2026: Event Recap](<https://pytorch.org/blog/kvcache-meetup-korea-2026-event-recap/>) — _pytorch.org_
5. [Building AI for Lawyers - Jacob Lauritzen, CTO of Legora](<https://latent.space/p/building-ai-for-lawyers-jacob-lauritzen-cto-of-legora/>) — _latent.space_
6. [Heimstaden is changing residential real estate management with AI](<https://openai.com/index/heimstaden>) — _openai.com_
7. [I discovered a sound that leaks your exact location (and it's everywhere) - YouTube](<https://simonwillison.net/2026/Nov/3/a-sound-that-leaks-your-exact-location/>) — _simonwillison.net_
8. [Here’s who is falling in line for Trump’s “Super Intelligence” loyalty test](<https://www.technologyreview.com/2026/11/02/1147932/heres-who-is-falling-in-line-for-trumps-super-intelligence-loyalty-test/>) — _technologyreview.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
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
| `2026-10-19` | Lundi | [Lire →](news/fr/2026-10-19.md) |

<sub>[Parcourir toute l’archive (140) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
