# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-07-10
<sub>mis à jour le 10 juillet 2026 à 13:00</sub>

## Modèles d'IA et capacités
- OpenAI lance la famille GPT‑5.6 (Sol, Terra, Luna) sur ChatGPT Work, Codex et l'API, avec une intelligence accrue par token, un coût réduit pour les travaux complexes et de meilleures performances agentiques ; un nouveau niveau d'effort "ultra" coordonne plusieurs agents en parallèle pour les tâches exigeantes <sup>[1](<https://www.latent.space/p/ainews-openai-launches-gpt-56-solterraluna>), [2](<https://www.testingcatalog.com/openai-launches-gpt-5-6-sol-terra-and-luna-on-apps-and-api/>)</sup>.
- Meta lance Muse Spark 1.1 dans son API Model, le positionnant comme l'état de l'art pour le raisonnement agentique et l'utilisation d'outils, et introduit un niveau payant tarifé à environ 25 % des modèles haut de gamme concurrents <sup>[1](<https://www.latent.space/p/ainews-openai-launches-gpt-56-solterraluna>), [3](<https://www.bloomberg.com/news/articles/2026-07-09/meta-starts-charging-for-ai-with-muse-spark-1-1-agentic-model?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4MzY0NzUxMSwiZXhwIjoxNzg0MjUyMzExLCJhcnRpY2xlSWQiOiJUSFZDVENSS1YyVTYwMCIsImJjb25uZWN0SWQiOiI2NTc1NjkyN0UwMkM0N0MwQkQ0MDNEQTJGMEUyNzIyMyJ9.036PyX7IFhgdqyc5QHadS6Ans-LlAztL8vSoBa_ytUk>)</sup>.

## Outils LLM et agents
- ChatGPT Work et Codex sont positionnés comme une superapplication unifiée, avec les conversations Work dans le cloud et les fils Work de bureau restant locaux ; les conversations Work cloud et bureau ne se synchronisent pas au lancement <sup>[4](<https://simonwillison.net/2026/Jul/10/openai/#atom-everything>)</sup>.
- PostHog propose de déléguer les revues de code générées par IA à des agents pour supprimer le goulot d'étranglement humain tout en maintenant la qualité <sup>[5](<https://newsletter.posthog.com/p/code-review-tips>)</sup>.

## MLOps / DevOps et pratiques d'ingénierie
- GitHub Mobile ajoute des filtres et un tri améliorés pour les sessions Copilot (statut, dépôt, type, agent) avec un contexte de tri conservé, disponible maintenant sur iOS et Android <sup>[6](<https://github.blog/changelog/2026-07-10-github-mobile-improved-filters-and-sorting-for-copilot-sessions>)</sup>.
- GitHub explique comment il a attribué des propriétaires validés à chaque dépôt interne actif en moins de 45 jours, archivant les autres, pour faire de la propriété la base de la sécurité et des opérations <sup>[7](<https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/>)</sup>.

## Cloud, infrastructure et IA embarquée
- Apple explore l'exécution de modèles beaucoup plus grands sur iPhone, y compris un Qwen 3.6 de 27 milliards de paramètres réduit via PrismML, pour activer davantage de fonctionnalités Apple Intelligence embarquées et améliorer la confidentialité <sup>[8](<https://www.macrumors.com/2026/07/09/apple-prismml-larger-on-device-ai-models/>)</sup>.
- Des robots humanoïdes téléopérés par des chirurgiens ont réalisé des ablations de vésicule biliaire sur des porcs vivants, démontrant une approche chirurgicale peu coûteuse et économe en espace utilisant des robots Unitree G1 <sup>[9](<https://arstechnica.com/ai/2026/07/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs/>)</sup>.

## Outils de développement et profilage
- Hugging Face publie un guide sur le profilage de l'attention dans PyTorch, offrant des techniques pratiques pour l'analyse des performances des modèles transformers <sup>[10](<https://huggingface.co/blog/torch-attention-profile>)</sup>.

## Sources

1. [\[AINews\] OpenAI launches GPT 5.6 Sol/Terra/Luna, Codex becomes ChatGPT superapp](<https://www.latent.space/p/ainews-openai-launches-gpt-56-solterraluna>) — _latent.space_
2. [OpenAI launches GPT-5.6 Sol, Terra, and Luna on apps and API](<https://www.testingcatalog.com/openai-launches-gpt-5-6-sol-terra-and-luna-on-apps-and-api/>) — _testingcatalog.com_
3. [Zuckerberg Pledges ‘Aggressive' Pricing With Meta's First Pay-to-Use AI](<https://www.bloomberg.com/news/articles/2026-07-09/meta-starts-charging-for-ai-with-muse-spark-1-1-agentic-model?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4MzY0NzUxMSwiZXhwIjoxNzg0MjUyMzExLCJhcnRpY2xlSWQiOiJUSFZDVENSS1YyVTYwMCIsImJjb25uZWN0SWQiOiI2NTc1NjkyN0UwMkM0N0MwQkQ0MDNEQTJGMEUyNzIyMyJ9.036PyX7IFhgdqyc5QHadS6Ans-LlAztL8vSoBa_ytUk>) — _bloomberg.com_
4. [Quoting OpenAI](<https://simonwillison.net/2026/Jul/10/openai/#atom-everything>) — _simonwillison.net_
5. [Stop being the code review bottleneck](<https://newsletter.posthog.com/p/code-review-tips>) — _newsletter.posthog.com_
6. [GitHub Mobile: Improved filters and sorting for Copilot sessions](<https://github.blog/changelog/2026-07-10-github-mobile-improved-filters-and-sorting-for-copilot-sessions>) — _github.blog_
7. [How GitHub gave every repository a durable owner](<https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/>) — _github.blog_
8. [Apple Exploring Ways to Run Much Larger AI Models Directly on iPhones](<https://www.macrumors.com/2026/07/09/apple-prismml-larger-on-device-ai-models/>) — _macrumors.com_
9. [Humanoid robots controlled by surgeons did world-first operation on live pigs](<https://arstechnica.com/ai/2026/07/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs/>) — _arstechnica.com_
10. [Profiling in PyTorch (Part 3): Attention is all you profile](<https://huggingface.co/blog/torch-attention-profile>) — _huggingface.co_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-07-09` | Jeudi | [Lire →](news/fr/2026-07-09.md) |
| `2026-07-08` | Mercredi | [Lire →](news/fr/2026-07-08.md) |
| `2026-07-07` | Mardi | [Lire →](news/fr/2026-07-07.md) |
| `2026-07-06` | Lundi | [Lire →](news/fr/2026-07-06.md) |
| `2026-07-05` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-07-05.md) |
| `2026-07-04` | Samedi | [Lire →](news/fr/2026-07-04.md) |
| `2026-07-03` | Vendredi | [Lire →](news/fr/2026-07-03.md) |
| `2026-07-02` | Jeudi | [Lire →](news/fr/2026-07-02.md) |
| `2026-07-01` | Mercredi | [Lire →](news/fr/2026-07-01.md) |
| `2026-06-30` | Mardi | [Lire →](news/fr/2026-06-30.md) |
| `2026-06-29` | Lundi | [Lire →](news/fr/2026-06-29.md) |
| `2026-06-28` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-06-28.md) |
| `2026-06-27` | Samedi | [Lire →](news/fr/2026-06-27.md) |
| `2026-06-26` | Vendredi | [Lire →](news/fr/2026-06-26.md) |

<sub>[Parcourir toute l’archive (25) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
