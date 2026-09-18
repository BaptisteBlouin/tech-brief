# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-09-18
<sub>mis à jour le 18 septembre 2026 à 13:01</sub>

## Modèles et agents IA
- Anthropic lance **Claude Code Projects**, permettant à une seule conversation de générer des sessions cloud parallèles, de transmettre le contexte entre les fils de discussion et de continuer à fonctionner après la déconnexion de l'utilisateur ; décrit en interne comme une abstraction de coordinateur avec une mémoire persistante et des mises à jour d'état agrégées <sup>[1](<https://www.latent.space/p/ainews-not-much-happened-today-612>)</sup>.
- Anthropic indique que **Claude alimente 26 % de sa R&D**, avec plus de 30 000 agents actifs à tout moment et le personnel collaborant avec le modèle pour ~90 % de leur travail <sup>[2](<https://www.bloomberg.com/news/articles/2026-09-17/anthropic-says-claude-drives-26-of-its-research-and-development?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4OTcxMDY4NywiZXhwIjoxNzkwMzE1NDg3LCJhcnRpY2xlSWQiOiJUTElaRDlSMjRVOFEwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.fTu1G_CGaCwSN3j0oCYF2DV7eS4Q4BFX-e_vcQx3qTY>)</sup>.
- **Helix 2.5 de Figure** démontre une généralisation zero-shot sur 30 foyers inconnus, accomplissant des tâches comme ranger et plier des serviettes, suggérant qu'une intelligence corporelle complète peut être apprise à partir de données comportementales humaines à grande échelle <sup>[3](<https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization>)</sup>.
- Google met en avant des **modèles d'ingénierie pour des agents IA robustes** : MCP bidirectionnel pour la communication inter-agents, bus d'événements asynchrones, validation unifiée et routage hiérarchisé pour réduire la latence et les coûts <sup>[4](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>)</sup>.
- Google publie **ADK pour Kotlin 1.0**, atteignant la parité fonctionnelle avec Python/Java pour des agents prêts pour la production, avec des extensions Android en priorité (LiteRT-LM, Firebase AI, Room, AppSearch) <sup>[5](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>)</sup>.

## Outils et flux de travail LLM
- **Safari 27.0** introduit **Safari MCP**, offrant aux agents de codage le contrôle des fenêtres de navigateur, du DOM, des requêtes réseau, des captures d'écran et de la sortie de la console pour simplifier les flux de travail de développement web <sup>[6](<https://webkit.org/blog/18325/webkit-features-for-safari-27-0/>)</sup>.
- **Bend** émerge comme un nouveau langage pour communiquer l'intention à l'IA, visant à combler la collaboration humain-IA <sup>[7](<https://github.com/bendlang/bend>)</sup>.
- Conseils pratiques sur **l'écriture assistée par LLM** : utiliser les modèles comme correcteurs, éviter d'adopter leurs tournures de phrase, et les exploiter pour la vérification des faits et la grammaire <sup>[8](<https://simonwillison.net/2026/Sep/17/how-to-write-with-an-llm/>), [9](<https://sockpuppet.org/blog/2026/09/17/how-to-write-with-an-llm/>)</sup>.

## Sécurité et gouvernance
- **Comptes OpenAI compromis** via des vulnérabilités en chaîne, permettant l'accès à des dépôts internes et des connecteurs ; une chronologie de divulgation complète est publiée <sup>[10](<https://www.hacktron.ai/blog/hacking-openai>)</sup>.
- **Attaques ciblées contre les mainteneurs de Rust** : une campagne en cours utilise de fausses visioconférences pour tromper les cibles et les inciter à installer des logiciels malveillants ou à exécuter des commandes, à la suite d'une récente attaque sur la chaîne d'approvisionnement du crate `arrayref` <sup>[11](<https://simonwillison.net/2026/Sep/17/targeted-attacks-on-rustaceans/>)</sup>.
- La plateforme **Gemini Enterprise Agent Platform** de Google ajoute la **détection des anomalies des agents** (version privée) pour analyser les traces OpenTelemetry et les appels d'outils en vue des risques comportementaux, basée sur l'OWASP Agentic Top 10 <sup>[12](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>)</sup>.
- Les **agents IA à confiance zéro** passent d'une gouvernance statique à une gouvernance dynamique à l'exécution avec **Model Armor**, des **politiques de gouvernance sémantique** et la détection des anomalies pour juger l'intention, et non seulement la syntaxe <sup>[13](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>)</sup>.

## MLOps et DevOps
- Google préconise des **évaluations comportementales** pour les agents IA : des tests rapides et locaux de type unitaire pour les actions intermédiaires (par exemple, les appels d'outils) afin de compléter les benchmarks macro comme SWE-bench, permettant des itérations plus sûres <sup>[14](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>)</sup>.
- **Post-formation autonome des LLM** avec **Tunix sur TPU** automatise les boucles de fine-tuning (par exemple, les rangs LoRA, les taux d'apprentissage) en utilisant la pile IA de Google (Gemma, Cloud TPU, Antigravity CLI, Gemini Flash 3.7) <sup>[15](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>)</sup>.
- Google open-source la **génération de SDK OpenAPI** (via Speakeasy) sous AGPLv3, offrant des générateurs déterministes, multi-langages, avec typage strict et diffusion SSE pour l'intégration CI <sup>[16](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>)</sup>.

## Cloud et infrastructure
- **Huawei** prévoit de lancer deux nouvelles puces IA l'année prochaine, ayant livré plus de 1 000 systèmes IA à plus de 370 clients, alors que le marché chinois des puces IA vise 67 milliards de dollars d'ici 2030 <sup>[17](<https://www.wsj.com/tech/ai/huaweis-plan-to-become-chinas-nvidia-8af8d8a1?st=uMfgNY&reflink=desktopwebshare_permalink>)</sup>.
- **Crusoe** passe des centres de données IA massifs à des **micro-centres de données modulaires et construits en usine** pour un déploiement d'inférence plus rapide et moins coûteux <sup>[18](<https://www.wsj.com/tech/ai/the-startup-that-built-openais-biggest-data-center-is-now-making-tiny-ones-71f36a4f?st=CxscFN&reflink=desktopwebshare_permalink>)</sup>.
- **PyTorch Day Japan 2026** (10 décembre) annoncé, avec appel à contributions ouvert ; les sujets incluent l'IA souveraine, l'IA de pointe/physique et les projets de l'écosystème PyTorch (vLLM, DeepSpeed, Ray) <sup>[19](<https://pytorch.org/blog/pytorch-day-japan-2026-comes-to-tokyo/>)</sup>.

## Sources

1. [\[AINews\] not much happened today](<https://www.latent.space/p/ainews-not-much-happened-today-612>) — _latent.space_
2. [Anthropic Says Claude Drives 26% of Its Research and Development](<https://www.bloomberg.com/news/articles/2026-09-17/anthropic-says-claude-drives-26-of-its-research-and-development?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc4OTcxMDY4NywiZXhwIjoxNzkwMzE1NDg3LCJhcnRpY2xlSWQiOiJUTElaRDlSMjRVOFEwMCIsImJjb25uZWN0SWQiOiJBOEExRDhFQTI5OTc0OTRGQTQ1QUE2REJBMjAwNTM3MSJ9.fTu1G_CGaCwSN3j0oCYF2DV7eS4Q4BFX-e_vcQx3qTY>) — _bloomberg.com_
3. [Helix 2.5: Zero-Shot 30-Home Generalization](<https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization>) — _figure.ai_
4. [4 engineering patterns behind the strongest AI Agents Challenge submissions](<https://developers.googleblog.com/4-engineering-patterns-behind-the-strongest-ai-agents-challenge-submissions/>) — _google ai_
5. [Announcing ADK for Kotlin 1.0: Building Production-Ready AI Agents in Kotlin, Android, and Beyond](<https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/>) — _google ai_
6. [WebKit Features for Safari 27.0](<https://webkit.org/blog/18325/webkit-features-for-safari-27-0/>) — _webkit.org_
7. [Bend](<https://github.com/bendlang/bend>) — _github.com_
8. [How To Write With An LLM](<https://simonwillison.net/2026/Sep/17/how-to-write-with-an-llm/>) — _simonwillison.net_
9. [How To Write With An LLM](<https://sockpuppet.org/blog/2026/09/17/how-to-write-with-an-llm/>) — _sockpuppet.org_
10. [Hacking OpenAI](<https://www.hacktron.ai/blog/hacking-openai>) — _hacktron.ai_
11. [Be alert: targeted attacks on prominent Rustaceans](<https://simonwillison.net/2026/Sep/17/targeted-attacks-on-rustaceans/>) — _simonwillison.net_
12. [Agent Anomaly Detection, now in Private Preview on the Gemini Enterprise Agent Platform](<https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/>) — _google ai_
13. [Build zero-trust AI agents that judge intent, not just syntax](<https://developers.googleblog.com/build-zero-trust-ai-agents-that-judge-intent-not-just-syntax/>) — _google ai_
14. [The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents](<https://developers.googleblog.com/the-anatomy-of-harness-engineering-how-to-evaluate-iterate-and-guard-ai-coding-agents/>) — _google ai_
15. [Autonomous LLM post-training with Tunix on TPUs](<https://developers.googleblog.com/autonomous-llm-post-training-with-tunix-on-tpus/>) — _google ai_
16. [Why client SDK generation belongs in the open](<https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/>) — _google ai_
17. [Huawei's Plan to Become China's Nvidia](<https://www.wsj.com/tech/ai/huaweis-plan-to-become-chinas-nvidia-8af8d8a1?st=uMfgNY&reflink=desktopwebshare_permalink>) — _wsj.com_
18. [The Startup That Built OpenAI's Biggest Data Center Is Now Making Tiny Ones](<https://www.wsj.com/tech/ai/the-startup-that-built-openais-biggest-data-center-is-now-making-tiny-ones-71f36a4f?st=CxscFN&reflink=desktopwebshare_permalink>) — _wsj.com_
19. [PyTorch Day Japan 2026 Comes to Tokyo on December 10](<https://pytorch.org/blog/pytorch-day-japan-2026-comes-to-tokyo/>) — _pytorch.org_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-09-17` | Jeudi | [Lire →](news/fr/2026-09-17.md) |
| `2026-09-16` | Mercredi | [Lire →](news/fr/2026-09-16.md) |
| `2026-09-15` | Mardi | [Lire →](news/fr/2026-09-15.md) |
| `2026-09-14` | Lundi | [Lire →](news/fr/2026-09-14.md) |
| `2026-09-13` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-13.md) |
| `2026-09-12` | Samedi | [Lire →](news/fr/2026-09-12.md) |
| `2026-09-11` | Vendredi | [Lire →](news/fr/2026-09-11.md) |
| `2026-09-10` | Jeudi | [Lire →](news/fr/2026-09-10.md) |
| `2026-09-09` | Mercredi | [Lire →](news/fr/2026-09-09.md) |
| `2026-09-08` | Mardi | [Lire →](news/fr/2026-09-08.md) |
| `2026-09-07` | Lundi | [Lire →](news/fr/2026-09-07.md) |
| `2026-09-06` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-09-06.md) |
| `2026-09-05` | Samedi | [Lire →](news/fr/2026-09-05.md) |
| `2026-09-04` | Vendredi | [Lire →](news/fr/2026-09-04.md) |

<sub>[Parcourir toute l’archive (95) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
