# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-13
<sub>mis à jour le 14 novembre 2026 à 00:01</sub>

## Actualités IA et LLM

- NVIDIA a annoncé que Jensen Huang a quitté ses fonctions de directeur général, de président et d'administrateur après 33 ans, la directrice financière Colette Kress assurant l'intérim au poste de directrice générale <sup>[1](<https://latent.space/p/ainews-jensen-huang-resigns-after-33-years-leading-nvidia/>)</sup>. Des informations de presse ont lié ce changement à des controverses personnelles, bien que le lien de causalité ne soit pas confirmé <sup>[1](<https://latent.space/p/ainews-jensen-huang-resigns-after-33-years-leading-nvidia/>)</sup>.
- Les mêmes informations font état d'un débat en cours sur la question de savoir si certains modèles chinois ont été entraînés sur des GPU Blackwell auxquels ils n'auraient pas dû avoir accès, l'ampleur de ce cas étant contestée <sup>[1](<https://latent.space/p/ainews-jensen-huang-resigns-after-33-years-leading-nvidia/>)</sup>.

## Open source et outils pour développeurs

- Lors de l'AI Engineer Code Summit, ArtCraft a présenté sa démarche open source : 17 versions d'outils open source à ce jour, dont PhotoCraft, une alternative à Photoshop développée from scratch en Rust, et PdfCraft, un clone d'Adobe Acrobat <sup>[2](<https://latent.space/p/artcraft/>)</sup>.

## IA vocale et applications métier

- Une interview en podcast du fondateur de fonio.ai décrit une croissance passant de 1,5 million à un ARR projeté de 30 millions, avec une IA vocale utilisée pour le support téléphonique et la vente, l'entreprise visant à devenir un système d'exploitation IA pour les processus métier <sup>[3](<https://ai-first.ai/podcast/von-0-auf-25-mio-arr-mit-voice-ai-mit-daniel-keinrath>)</sup>.

## Modèles et outils IA

- Google a présenté Gemini 4 Hydrogen, un modèle rapide optimisé pour le code et les workflows agentiques, obtenant un score de 51 sur l'Artificial Analysis Intelligence Index et tarifé 1,50 $ par million de tokens en entrée et 7,50 $ par million de tokens en sortie <sup>[4](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/>)</sup>. Il est désormais généralement disponible dans GitHub Copilot pour les formules Pro, Pro+, Max, Business et Enterprise, avec un déploiement progressif <sup>[5](<https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot>)</sup>.
- GitHub va déprécier plusieurs modèles Copilot le 14 décembre 2026, dont Claude Fable 5, Claude Haiku 4.5 (qui reste disponible pour les abonnés individuels à l'offre annuelle), Gemini 3.8 Flash, Gemini 4 Argon, Grok 4.6 et Kimi K3, avec les remplacements suggérés listés <sup>[6](<https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december>)</sup>.
- Perplexity a publié Decider v1.3 et Decider Flash v1.3, des classifieurs qui renvoient des probabilités pour la classification, le routage, le classement et l'évaluation, ainsi qu'une mise en évidence pour la reconnaissance d'entités nommées et le QA extractif <sup>[7](<https://www.perplexity.ai/hub/blog/perplexity-decider>)</sup>.
- llama.cpp v1.0.0 a été publié, llama.cpp et ggml s'engageant à signaler les incompatibilités d'API et d'ABI par des montées de version majeure <sup>[8](<https://huggingface.co/blog/ggml-org/llama-cpp-v1>)</sup>.
- Liquid AI a présenté LiquidCodec, un tokenizer audio visant une génération vocale rapide avec une faible empreinte mémoire pour les applications conversationnelles locales <sup>[9](<https://www.liquid.ai/blog/liquidcodec>)</sup>.

## Agents et outils pour développeurs

- Anthropic a publié un guide sur les agents toujours actifs, qui fonctionnent indéfiniment d'une session à l'autre et reposent sur des primitives contrôlant quand ils se réveillent, quel état persiste entre les exécutions et comment la sortie parvient à l'utilisateur <sup>[10](<https://claude.com/resources/articles/building-always-on-agents>)</sup>.
- Cloudflare a publié en open source Kitesurf sous licence Apache 2.0, un navigateur sans état pour agents qui tourne sur Workers et prend en charge le Chrome DevTools Protocol <sup>[11](<https://blog.cloudflare.com/kitesurf-open-source/>)</sup>.
- Cloudflare a introduit Spend Management en bêta pour les clients à la consommation, avec des seuils de dépenses pouvant suspendre l'activité lorsqu'ils sont atteints, en commençant par Workers et Durable Objects <sup>[12](<https://blog.cloudflare.com/spend-management/>)</sup>.
- Resend a migré son API d'e-mail de Node.js vers Go en sept semaines ; pendant un déploiement à 50 %, la latence médiane est passée de 58 ms à 31 ms et la mémoire par tâche est tombée d'environ 1,3 Go à 180 Mo <sup>[13](<https://resend.com/blog/migrating-our-email-api-to-go>)</sup>.
- OpenAI a annoncé ChatGPT Wallet, permettant aux agents de finaliser des achats avec l'approbation de l'utilisateur et les protections existantes des cartes <sup>[14](<https://openai.com/index/introducing-chatgpt-wallet>)</sup>.
- GitHub a ajouté un paramètre repository_scan à l'API REST pour AI Scan, afin que les organisations puissent le déployer via des scripts <sup>[15](<https://github.blog/changelog/2026-11-13-manage-ai-scan-for-repositories-using-the-rest-api>)</sup>.

## Sécurité

- Une RCE critique dans mod_http2 d'Apache HTTP Server (CVE-2026-119618, CVSS 9.8) affecte les versions 2.4.55 à 2.4.70 lorsque HTTP/2 est activé ; le correctif consiste à passer à la version 2.4.71 ou à désactiver h2 et h2c <sup>[16](<https://thehackernews.com/2026/11/critical-apache-http2-flaw-could-let.html>), [17](<https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability>)</sup>.
- Une campagne a diffusé un voleur de secrets CI vers des dizaines de milliers de dépôts en utilisant des identifiants GitHub volés, 1 835 dépôts ayant été signalés comme ayant exécuté la charge utile et perdu leurs identifiants <sup>[18](<https://www.aikido.dev/blog/compromised-github-accounts-push-ci-secret-stealer-to-tens-of-thousands-of-repositories>)</sup>.
- Microsoft a signalé une hausse de 356 % des détections de C2 basés sur GSocket entre mars et août, et recommande de bloquer les sorties de relais et de monter /dev/shm en noexec <sup>[19](<https://www.microsoft.com/en-us/security/blog/2026/11/11/global-socket-how-threat-actors-weaponizing-gsocket-stealthy-c2/>)</sup>.
- Le FORGE Lab de Microsoft a utilisé des modèles d'IA pour trouver des bogues dans le noyau Linux, produisant 59 signalements en amont et 33 CVE, tandis que le correctif médian a pris 41 jours, ce qui, selon lui, montre que la découverte dépasse désormais la réparation <sup>[20](<https://www.microsoft.com/en-us/security/blog/2026/11/11/lessons-from-59-linux-kernel-bug-reports/>)</sup>.

## DevOps, infrastructure et plateformes

- Istio 1.32.0 prend en charge Kubernetes 1.33 à 1.37 et ajoute un ciblage expérimental de l'autorisation Gateway API pour HTTPRoute <sup>[21](<https://istio.io/latest/news/releases/1.32.x/announcing-1.32/>)</sup>.
- Open Cluster Management est devenu un projet CNCF en incubation ; eBay l'utilise avec Argo CD sur plus de 190 clusters <sup>[22](<https://www.cncf.io/blog/2026/11/10/open-cluster-management-ocm-becomes-a-cncf-incubating-project/>)</sup>.
- Une faille critique de Red Hat Quay (CVE-2026-123710, CVSS 9.8) permet à un utilisateur du registre d'implanter une clé de signature sans expiration donnant accès à tous les dépôts, sans correctif publié à ce jour <sup>[23](<https://www.securityweek.com/critical-red-hat-quay-vulnerability-could-expose-private-container-images/>)</sup>.
- PlanetScale a publié en open source un Heroku Migrator pour des bases de données de plusieurs téraoctets, utilisant la réplication par déclencheurs de Bucardo, en séparant le transfert et la reconstruction des index pour accélérer les copies d'environ cinq fois <sup>[24](<https://planetscale.com/blog/migrate-from-heroku-to-planetscale>)</sup>.

## Sources

1. [\[AINews\] Jensen Huang resigns after 33 years leading NVIDIA](<https://latent.space/p/ainews-jensen-huang-resigns-after-33-years-leading-nvidia/>) — _latent.space_
2. [AI Ambition: ArtCraft Cloned Photoshop and Now Wants to "Rebuild Everything"](<https://latent.space/p/artcraft/>) — _latent.space_
3. [Von 0 auf 25 Mio. ARR mit Voice AI – mit Daniel Keinrath](<https://ai-first.ai/podcast/von-0-auf-25-mio-arr-mit-voice-ai-mit-daniel-keinrath>) — _ai first podcast_
4. [Gemini 4 Hydrogen](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/>) — _blog.google_
5. [Gemini 4 Hydrogen in GitHub Copilot](<https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot>) — _github.blog_
6. [Upcoming deprecation of selected GitHub Copilot models in December](<https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december>) — _github.blog_
7. [Perplexity Decider](<https://www.perplexity.ai/hub/blog/perplexity-decider>) — _perplexity.ai_
8. [llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem](<https://huggingface.co/blog/ggml-org/llama-cpp-v1>) — _huggingface.co_
9. [LiquidCodec: High-Fidelity Audio Tokenization Optimized for Speed](<https://www.liquid.ai/blog/liquidcodec>) — _liquid.ai_
10. [Building always-on agents](<https://claude.com/resources/articles/building-always-on-agents>) — _claude_
11. [Kitesurf is now open source](<https://blog.cloudflare.com/kitesurf-open-source/>) — _blog.cloudflare.com_
12. [Introducing Spend Management: Spending limits and alerts for Cloudflare](<https://blog.cloudflare.com/spend-management/>) — _blog.cloudflare.com_
13. [Migrating Our Email API to Go](<https://resend.com/blog/migrating-our-email-api-to-go>) — _resend.com_
14. [Introducing ChatGPT Wallet](<https://openai.com/index/introducing-chatgpt-wallet>) — _openai.com_
15. [Manage AI Scan for repositories using the REST API](<https://github.blog/changelog/2026-11-13-manage-ai-scan-for-repositories-using-the-rest-api>) — _github.blog_
16. [Critical Apache HTTP/2 Flaw Could Let Unauthenticated Attackers Execute Code Remotely](<https://thehackernews.com/2026/11/critical-apache-http2-flaw-could-let.html>) — _thehackernews.com_
17. [Critical RCE Vulnerability in Apache HTTP Server: Everything You Need To Know](<https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability>) — _wiz.io_
18. [wfx-loot campaign pushes CI secret stealer to tens of thousands of repositories](<https://www.aikido.dev/blog/compromised-github-accounts-push-ci-secret-stealer-to-tens-of-thousands-of-repositories>) — _aikido.dev_
19. [The global socket: how threat actors are weaponizing GSocket for stealthy C2](<https://www.microsoft.com/en-us/security/blog/2026/11/11/global-socket-how-threat-actors-weaponizing-gsocket-stealthy-c2/>) — _microsoft.com_
20. [Lessons from 59 Linux Kernel Bug Reports](<https://www.microsoft.com/en-us/security/blog/2026/11/11/lessons-from-59-linux-kernel-bug-reports/>) — _microsoft.com_
21. [Announcing Istio 1.32.0](<https://istio.io/latest/news/releases/1.32.x/announcing-1.32/>) — _istio.io_
22. [Open Cluster Management (OCM) becomes a CNCF Incubating Project](<https://www.cncf.io/blog/2026/11/10/open-cluster-management-ocm-becomes-a-cncf-incubating-project/>) — _cncf.io_
23. [Critical Red Hat Quay Vulnerability Could Expose Private Container Images](<https://www.securityweek.com/critical-red-hat-quay-vulnerability-could-expose-private-container-images/>) — _securityweek.com_
24. [How we migrate TBs from Heroku without logical replication](<https://planetscale.com/blog/migrate-from-heroku-to-planetscale>) — _planetscale.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
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
| `2026-10-31` | Samedi | [Lire →](news/fr/2026-10-31.md) |

<sub>[Parcourir toute l’archive (151) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
