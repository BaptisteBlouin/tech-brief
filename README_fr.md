# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### 🗓️ Récap de la semaine (du 2026-11-16 au 2026-11-22)
<sub>mis à jour le 23 novembre 2026 à 00:01</sub>

## Modèles d'IA et outillage LLM

- OpenAI a lancé GPT-6.2 Astra et Sol sur ChatGPT et l'API, destinés au travail professionnel, Astra pour les projets les plus exigeants et Sol pour les tâches quotidiennes <sup>[1](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>), [2](<https://www.testingcatalog.com/openai-launches-gpt-6-2-astra-and-sol-on-chatgpt-and-apis/>)</sup>. Les deux produisent moins de tokens de sortie que les versions précédentes <sup>[2](<https://www.testingcatalog.com/openai-launches-gpt-6-2-astra-and-sol-on-chatgpt-and-apis/>)</sup>. Artificial Analysis attribue à Astra un score de 62 à son Intelligence Index, juste derrière Fable 5.2 (65), et Sol égale Astra tout en coûtant environ 15 % du prix par tâche <sup>[1](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>)</sup>. GitHub Copilot a rendu les deux disponibles en général <sup>[3](<https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available>)</sup>. Les avis sont partagés, avec des critiques sur des artefacts d'apprentissage par renforcement <sup>[1](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>)</sup>.
- Google DeepMind a publié Gemini 4 Neon, un modèle rapide de niveau frontière pour le code, le travail de connaissance et la science, qui obtient 61 à l'Artificial Analysis Intelligence Index <sup>[4](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>), [5](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/>), [6](<https://deepmind.google/blog/introducing-gemini-4-neon/>)</sup>. Il coûte 3 $ par million de tokens en entrée et 15 $ par million de tokens en sortie, avec une entrée en cache à 0,15 $ et une fenêtre de contexte d'un million de tokens <sup>[4](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>)</sup>. Il est disponible en général dans GitHub Copilot, où Google indique une qualité proche de Gemini 4 Carbon pour un coût en tokens par tâche inférieur <sup>[7](<https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot>)</sup>. Une projection d'un tiers le place près d'Opus 5.5, mais il s'agit d'une estimation fondée sur la vitesse, avec un large intervalle d'incertitude, et non d'un résultat mesuré dans un classement <sup>[8](<https://micjm.com/blog/gemini-4-neon-looks-like-a-top-model/>)</sup>. Dans un benchmark privé, Carbon a effectué environ sept fois plus d'étapes que GPT-6 Astra pour corriger des bogues, dont la moitié étaient inutiles <sup>[9](<https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/>)</sup>.
- Gemini 4 Genie 4, le modèle de monde interactif, est ouvert aux abonnés éligibles de Google AI Ultra dans Project Genie <sup>[10](<https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/>)</sup>.
- MAI Code 2, le modèle de code de Microsoft désormais dans GitHub Copilot, atteint 98 % de la qualité de codage de GPT-6.1 Sol pour environ 40 % du prix <sup>[11](<https://microsoft.ai/news/microsoft-ignite-2026/>)</sup>.
- Cloudflare a publié les versions mises à jour de Clairic en open-weight et Clairic-flash (9B) pour l'extraction de documents, hébergés sur Workers AI <sup>[12](<https://blog.cloudflare.com/open-clairic/>)</sup>.
- Model Factory de Prime Intellect unifie apprentissage par renforcement, fine-tuning supervisé, pré-entraînement et inférence dans un même plan de contrôle, avec reprise depuis le dernier checkpoint pour les longs entraînements <sup>[13](<https://www.primeintellect.ai/blog/introducing-model-factory>)</sup>.
- Une porte dérobée QLoRA insérée dans Qwen3-8B ne se déclenchait que dans le harnais d'agent pi ; l'analyse des différences de poids la détecte pour les modèles ouverts, mais pas pour les API hébergées. Il faut donc isoler les agents dans un bac à sable et soumettre à approbation les appels shell et réseau <sup>[14](<https://pgaleone.eu/ai/2026/11/14/backdooring-llms-and-trust/>)</sup>.
- Simon Willison a publié llm 0.38, avec la prise en charge des modèles GPT-6.2 <sup>[15](<https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/>)</sup>.
- Hugging Face a introduit des adaptateurs de harnais permettant d'ajuster un modèle à un harnais donné, avec un gain de performance et de coût <sup>[16](<https://huggingface.co/blog/harness-adapters-at-scale>)</sup>.

## Agents, évaluation et recherche

- Vercel a publié eve 1.0, un cadre open source pour des agents d'IA en production, qui gère la boucle modèle-outils, la mémoire, les approbations et la supervision <sup>[17](<https://vercel.com/blog/eve-is-now-generally-available>)</sup>. Replit a lancé Missions pour coordonner des essaims d'agents dans des budgets donnés <sup>[18](<https://replit.com/blog/introducing-replit-missions>)</sup>.
- Horizon, un agent construit sur Opus 5.5, a créé de façon autonome 38 modèles en plus de 600 heures GPU, désormais hébergés dans plus de 100 dépôts <sup>[19](<https://horizon-labs.ai/>)</sup>.
- Stripe a évalué 14 configurations d'agents de code sur des intégrations de paiement : les agents ont satisfait en moyenne 78,1 % des critères requis, mais seuls 29,4 % des essais ont satisfait tous les critères <sup>[20](<https://stripe.dev/blog/stripe-integration-evals-methodology?amp%3Butm_medium=community>)</sup>.
- Les tests de Chrome montrent que les agents de code réussissent 52 % de ses contrôles de développement web seuls, et 91 % avec Modern Web Guidance installé <sup>[21](<https://developer.chrome.com/blog/top-10-things-ai-gets-wrong-in-web-dev>)</sup>.
- Le benchmark de Replit indique que 32 agents Opus ont atteint une accélération de 18,9x sur une charge NumPy, contre 3,7x pour un seul agent, en deux heures <sup>[22](<https://frontier.replit.com/throwing-headcount-at-the-problem/>)</sup>.
- Together Compiler de Together AI utilise des agents pour réécrire et fusionner des noyaux GPU, battant d'environ 28 % ses mégakernels écrits à la main sur B200 <sup>[23](<https://www.together.ai/blog/road-to-together-compiler>)</sup>.
- Les agents de Linear créent désormais plus de la moitié de son travail, contre 3 % il y a un an <sup>[24](<https://latent.space/p/linear-scaling/>)</sup>.
- Agent Anomaly Detection de Google surveille les agents sur d'autres clouds en analysant les traces et journaux OpenTelemetry <sup>[25](<https://developers.googleblog.com/agent-anomaly-detection-safeguarding-agents-across-other-clouds/>)</sup>.
- Spotify étudie quand des évaluations hors ligne par IA peuvent appuyer une décision de lancement sans test A/B <sup>[26](<https://engineering.atspotify.com/2026/11/when-can-you-ship-on-offline-evals-alone>)</sup>.
- Le graphique mis à jour de METR sur l'horizon temporel montre que certaines capacités progressent encore de façon exponentielle, tandis que les modèles restent en retrait sur les tâches exigeant du jugement <sup>[27](<https://www.technologyreview.com/2026/11/20/1149399/the-most-misunderstood-graph-in-ai-just-got-a-major-update/>)</sup>.

## Outils d'agents et pratique du code

- GitHub a rendu huit services supplémentaires accessibles à Copilot via des connecteurs MCP en préversion publique, dont Supabase, Buildkite et Box <sup>[28](<https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot>)</sup>. Les réglages de plugins par équipe sont disponibles en général <sup>[29](<https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team>)</sup>.
- GitHub Copilot Evals est entré en préversion publique : des tests reproductibles pour les skills, agents et outils MCP <sup>[30](<https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview>)</sup>. La revue de code Copilot ajoute un effort adaptatif par pull request <sup>[31](<https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more>)</sup>.
- Daniel Stenberg rapporte que des agents ont converti environ 185 000 lignes de C en 340 000 lignes de Rust dans curl <sup>[32](<https://simonwillison.net/2026/Nov/18/daniel-stenberg/>), [33](<https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/>)</sup>.
- Missions de Replit et le Secure AI Framework d'Uber illustrent la gouvernance des agents en pratique, Uber évaluant chaque action proposée par un agent au regard de la demande de l'utilisateur, des permissions et du contexte <sup>[18](<https://replit.com/blog/introducing-replit-missions>), [34](<https://www.infoq.com/news/2026/11/uber-secure-ai-framework/>)</sup>.
- Les API d'agents hébergées facilitent le changement de harnais, mais avec les mêmes instructions et les mêmes outils, les modèles se comportent différemment : il faut donc retester après tout changement de modèle <sup>[35](<https://davenporter.com/writings/agent-harnesses-cheap-to-swap-behavior-isnt>)</sup>.

## Sécurité

- Calif a divulgué Java4Shell (CVE-2026-114938), une faille de corruption mémoire notée CVSS 9,2 dans le décodeur Base64 d'OpenJDK, pouvant permettre une exécution de code à distance ; les builds Oracle corrigés sont livrés dans le CPU de novembre 2026 <sup>[36](<https://blog.cloudflare.com/java4shell-waf-protection/>), [37](<https://calif.io/java4shell/>), [38](<https://www.wiz.io/blog/cve-2026-114938-rce-java4shell-openjdk>)</sup>.
- Une compromission de WPPConnect a livré un module « diagnostics » malveillant via le propre pipeline de publication de confiance du projet, fuyant des variables d'environnement et des jetons de session WhatsApp ; la charge utile s'exécute à l'import, donc --ignore-scripts ne l'arrête pas <sup>[39](<https://www.stepsecurity.io/blog/wppconnect-compromised-malicious-releases-steal-secrets-and-whatsapp-sessions>)</sup>.
- Un modèle ONNX malveillant a exploité une faille de parseur dans ONNX Runtime pour exfiltrer des fichiers de l'hôte ; les défenseurs doivent passer à onnxruntime v1.27.0 ou ultérieure <sup>[40](<https://phrack.org/issues/73/backdoor-attacks-against-machine-learning-irl>)</sup>.
- Les versions 1.26.1 et 1.26.2 du paquet PyPI agent-framework de Microsoft ont été publiées depuis le compte éditeur officiel et contiennent un voleur d'identifiants ; considérez toute installation comme une compromission complète des identifiants et renouvelez les secrets <sup>[41](<https://opensourcemalware.com/blog/agent-framework-pypi-compromised>)</sup>.
- F5 et nginx.org ont divulgué dix vulnérabilités nginx le 18 novembre 2026 ; cinq sont des corruptions mémoire qu'un attaquant non authentifié peut utiliser pour faire planter un worker nginx ou potentiellement exécuter des commandes sur le serveur <sup>[42](<https://blog.cloudflare.com/nginx2root/>), [43](<https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities>)</sup>.
- ruby2shell de Ruby (CVE-2026-132825), un dépassement de tampon critique sur le tas, est corrigé dans Ruby 3.3.14, 3.4.13 et 4.0.10 ; le WAF de Cloudflare le bloque pour tous les clients <sup>[44](<https://blog.cloudflare.com/ruby2shell-waf-protection/>), [45](<https://verialabs.com/ruby2shell/>)</sup>.
- PHP a corrigé phpAfterShell (CVE-2026-126714, CVSS 9,2), une faille de désérialisation dans le gestionnaire de sessions par fichiers par défaut <sup>[46](<https://blog.cloudflare.com/phpaftershell-waf-protection/>), [47](<https://thehackernews.com/2026/11/php-fixes-7-critical-flaws-including.html>)</sup>.
- Les versions 4.0.0 à 6.1.4 d'Apache Roller présentent une faille de désérialisation non authentifiée activement exploitée dans le point de terminaison XML-RPC ; passez à la version 6.1.6 <sup>[48](<https://thehackernews.com/2026/11/critical-apache-roller-rce-flaw-under.html>)</sup>.
- Une faille critique de désérialisation dans Puppet (CVE-2026-115731, CVSS 9,4) est exploitée, et la CISA l'a ajoutée à son catalogue des vulnérabilités exploitées connues <sup>[49](<https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html>)</sup>.
- Un contournement de la portée « public-only » des jetons de Gitea permettait à des jetons restreints d'agir en administrateurs complets via l'API d'administration ; la faille est désormais suivie sous le numéro CVE-2026-117635 <sup>[50](<https://escape.tech/blog/escape-research-found-a-scope-bypass-that-made-gitea-s-restricted-tokens-full-admins-it-s-now-cve-2026-117635/>)</sup>.
- Anthropic réduit de 90 à 30 jours la fenêtre de divulgation coordonnée des vulnérabilités pour les problèmes de gravité élevée et critique <sup>[51](<https://www.anthropic.com/research/coordinated-vulnerability-disclosure-timelines>)</sup>. OpenAI travaille avec l'OTAN et des agences cyber alliées pour aider des défenseurs de confiance à trouver des vulnérabilités <sup>[52](<https://openai.com/index/strengthening-nato-allied-cyber-defences-ai>)</sup>.
- Elastic a analysé cinq cadres offensifs agentiques qui laissent un LLM piloter scanners et shells ; aucun n'applique l'autorisation dans le code, et quatre ont été observés dans de vraies intrusions <sup>[53](<https://www.elastic.co/security-labs/threat-command/agentic-offensive-frameworks-detection-artex>)</sup>.

## DevOps, infrastructure et données

- Kubernetes prévoit de retirer le backend IPVS de kube-proxy en 2026 pour simplifier la base de code <sup>[54](<https://kubernetes.io/blog/2026/11/16/ipvs-removal/>)</sup>.
- Salesforce a combiné autoscaling vertical et horizontal sur EKS, avec plus de 5 millions de dollars d'économies cumulées <sup>[55](<https://aws.amazon.com/blogs/containers/how-salesforce-efficiently-right-sizes-kubernetes-workloads-at-scale-on-amazon-eks/>)</sup>.
- L'extension Postgres pg_pinecone de Pinecone est environ 15 fois plus petite qu'un index HNSW pgvector sur 1 million de vecteurs, à rappel identique <sup>[56](<https://www.pinecone.io/blog/pg-pinecone-railway/>)</sup>.
- Un guide OpenTelemetry couvre le placement du memory limiter, les compromis d'échantillonnage et le routage tenant compte des traces pour l'échantillonnage en queue <sup>[57](<https://www.cncf.io/blog/2026/11/17/is-your-opentelemetry-pipeline-becoming-a-performance-bottleneck/>)</sup>.
- PostHog filtre les appels LLM coûteux à l'aide de modèles de décision, si bien que 98,7 % des résumés de sessions évitent un appel de réécriture <sup>[58](<https://newsletter.posthog.com/p/decision-models>)</sup>.
- GitHub CLI v2.105.0 ajoute `gh event listen`, qui attend les événements de pull request, remplaçant les boucles d'interrogation dans les scripts et agents <sup>[59](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>)</sup>.
- Les Enterprise Live Migrations d'Azure DevOps vers GitHub Enterprise Cloud avec résidence des données sont disponibles en général <sup>[60](<https://github.blog/changelog/2026-11-19-enterprise-live-migrations-from-azure-devops-generally-available>)</sup>.
- AWS a publié ExtendDB 1.0, un adaptateur open source sous licence Apache 2.0 compatible DynamoDB, fonctionnant sur PostgreSQL, SQLite, Cassandra et MongoDB <sup>[61](<https://aws.amazon.com/about-aws/whats-new/2026/11/aws-extenddb-1-0/>)</sup>.
- PostgreSQL 19 ajoute une cohérence « read-your-writes » sur les standbys grâce à la nouvelle commande WAIT FOR LSN <sup>[62](<https://simonwillison.net/2026/Nov/19/postgresql-19/>)</sup>, ainsi que `REPACK (CONCURRENTLY)` pour optimiser les tables sans interruption <sup>[63](<https://www.postgresql.org/about/news/postgresql-19-released-3449/>)</sup>.
- Les contrats de données appliquent la conception d'API aux jeux de données : les règles de qualité deviennent des assertions que l'outillage peut valider ou rejeter <sup>[64](<https://martinfowler.com/articles/data-contracts.html>)</sup>.
- Airbnb a empaqueté le projet open source Presidio comme étape de pipeline en processus pour dé-identifier les textes avant l'entraînement d'IA <sup>[65](<https://medium.com/airbnb-engineering/de-identifying-text-at-scale-how-airbnb-protects-personal-data-in-ai-training-32f3ff8ff7d0>)</sup>.
- LinkedIn a reconstruit sa plateforme de lignage de données pour capturer les dépendances à partir des tâches en cours d'exécution, couvrant environ 6 millions de jeux de données <sup>[66](<https://www.linkedin.com/blog/engineering/infrastructure/rebuilding-data-lineage-at-linkedin-from-storage-to-compute>)</sup>.
- OpenSRE est un agent CLI open source qui examine les échecs de pipelines CI/CD et soumet des correctifs à relecture <sup>[67](<https://github.com/Tracer-Cloud/opensre>)</sup>.

## Industrie de l'IA et recherche

- Anthropic a clôturé son introduction en bourse à 83 $ par action, pour un produit brut d'environ 93,5 milliards de dollars <sup>[68](<https://www.anthropic.com/news/ipo-close>), [69](<https://latent.space/p/ainews-anthropic-successfully-completes-largest-ipo-in-history-valued-at-1-5t/>), [70](<https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html>)</sup>.
- OpenAI a publié un article sur la lutte contre la distillation adverse <sup>[71](<https://openai.com/index/combatting-adversarial-distillation>)</sup> et présenté MedChemBench, un benchmark d'évaluation de l'IA sur les structures moléculaires et la sélection de composés <sup>[72](<https://openai.com/index/introducing-medchembench>)</sup>.
- Les AI Overviews de Google apparaissent sur plus de la moitié des mots-clés américains suivis par DataForSEO, contre 6 % il y a deux ans <sup>[73](<https://revscope.co/blog/search-seo-geo-2026/>)</sup>. Dans une expérience randomisée, un AI Overview a réduit d'environ 40 % les clics vers les sites externes <sup>[73](<https://revscope.co/blog/search-seo-geo-2026/>)</sup>.
- OpenAI et le Groupe Le Figaro ont noué un partenariat pour intégrer les articles du Figaro dans ChatGPT, sous forme de résumés et d'extraits renvoyant vers les articles d'origine <sup>[74](<https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership>)</sup>.
- Le procureur général de Californie a poursuivi OpenAI à la suite d'incidents impliquant des agents défaillants <sup>[75](<https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/>)</sup>. Le département américain du Commerce ferme une faille qui permettait à des rivaux étrangers de louer l'accès à des puces d'IA avancées dans des centres de données situés à l'étranger <sup>[76](<https://arstechnica.com/tech-policy/2026/11/us-moves-to-cut-chinas-remote-access-to-ai-chips/>)</sup>.

## Sources

1. [\[AINews\] GPT-6.2 Astra, the #2 Frontier Model is better and 20%-600% cheaper, but has mixed reviews; 6.2 Sol likely main workhorse](<https://latent.space/p/ainews-gpt-6-2-astra-the-2-frontier-model-is-better-and-20-600-cheaper-but-has-mixed-reviews-6-2-sol/>) — _latent.space_
2. [OpenAI launches GPT-6.2 Astra and Sol on ChatGPT and APIs](<https://www.testingcatalog.com/openai-launches-gpt-6-2-astra-and-sol-on-chatgpt-and-apis/>) — _testingcatalog.com_
3. [OpenAI’s GPT-6.2 Astra and GPT-6.2 Sol now available](<https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available>) — _github.blog_
4. [\[AINews\] Gemini 4 Neon: GDM's Opus/Sol Contender](<https://latent.space/p/ainews-gemini-4-neon-gdm-s-opus-sol-contender/>) — _latent.space_
5. [Gemini 4 Neon](<https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/>) — _blog.google_
6. [Introducing Gemini 4 Neon](<https://deepmind.google/blog/introducing-gemini-4-neon/>) — _deepmind.google_
7. [Gemini 4 Neon in GitHub Copilot](<https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot>) — _github.blog_
8. [Gemini 4 Neon Looks Like an Opus 5.5 Competitor](<https://micjm.com/blog/gemini-4-neon-looks-like-a-top-model/>) — _micjm.com_
9. [Why is Gemini 4 Carbon taking so long?](<https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/>) — _kernel.dev_
10. [Genie 4](<https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/>) — _blog.google_
11. [Microsoft's Seven New Models](<https://microsoft.ai/news/microsoft-ignite-2026/>) — _microsoft.ai_
12. [An updated Clairic and Clairic-flash are now open-weight, from the new Workers AI Superintelligence team](<https://blog.cloudflare.com/open-clairic/>) — _blog.cloudflare.com_
13. [Introducing Model Factory](<https://www.primeintellect.ai/blog/introducing-model-factory>) — _primeintellect.ai_
14. [Backdooring LLMs - Do You Trust Your AI Provider?](<https://pgaleone.eu/ai/2026/11/14/backdooring-llms-and-trust/>) — _pgaleone.eu_
15. [GPT‐6.2 Astra and GPT‐6.2 Sol](<https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/>) — _simonwillison.net_
16. [Introducing harness adapters: adapt your favorite model to your harness to improve performance and cost](<https://huggingface.co/blog/harness-adapters-at-scale>) — _huggingface.co_
17. [Vercel's eve 1.0](<https://vercel.com/blog/eve-is-now-generally-available>) — _vercel.com_
18. [Introducing Replit Missions](<https://replit.com/blog/introducing-replit-missions>) — _replit.com_
19. [Horizon Labs](<https://horizon-labs.ai/>) — _horizon-labs.ai_
20. [Stripe Evals for Real-World Coding Agent Performance](<https://stripe.dev/blog/stripe-integration-evals-methodology?amp%3Butm_medium=community>) — _stripe.dev_
21. [Top 10 Things AI Gets Wrong in Web Development](<https://developer.chrome.com/blog/top-10-things-ai-gets-wrong-in-web-dev>) — _developer.chrome.com_
22. [When Agent Swarms Outperform Solo Coders](<https://frontier.replit.com/throwing-headcount-at-the-problem/>) — _frontier.replit.com_
23. [Last year we built megakernels. This year we deleted them: The road to Together Compiler](<https://www.together.ai/blog/road-to-together-compiler>) — _together.ai_
24. [Scaling Linear’s GTM to $100M ARR — Cristina Cordova, COO](<https://latent.space/p/linear-scaling/>) — _latent.space_
25. [Agent Anomaly Detection: Safeguarding agents across other clouds](<https://developers.googleblog.com/agent-anomaly-detection-safeguarding-agents-across-other-clouds/>) — _google ai_
26. [When Can You Ship on Offline Evals Alone?](<https://engineering.atspotify.com/2026/11/when-can-you-ship-on-offline-evals-alone>) — _engineering.atspotify.com_
27. [The most misunderstood graph in AI just got a major update](<https://www.technologyreview.com/2026/11/20/1149399/the-most-misunderstood-graph-in-ai-just-got-a-major-update/>) — _technologyreview.com_
28. [Connect Supabase, Box, Calendly, and more to Copilot](<https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot>) — _github.blog_
29. [Customize GitHub Copilot for your team](<https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team>) — _github.blog_
30. [GitHub Copilot Evals is now in public preview](<https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview>) — _github.blog_
31. [Copilot code review: Adaptive effort, secret detection, and more](<https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more>) — _github.blog_
32. [Quoting Daniel Stenberg](<https://simonwillison.net/2026/Nov/18/daniel-stenberg/>) — _simonwillison.net_
33. [Actual curl rewrites in rust](<https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/>) — _daniel.haxx.se_
34. [Uber's Secure AI Framework Governs Autonomous AI Agents across Their Lifecycle](<https://www.infoq.com/news/2026/11/uber-secure-ai-framework/>) — _infoq.com_
35. [Coding Harnesses Are Cheap to Swap Now. Model Behavior Isn't.](<https://davenporter.com/writings/agent-harnesses-cheap-to-swap-behavior-isnt>) — _davenporter.com_
36. [How Cloudflare WAF helps protect against Java4Shell (CVE-2026-114938)](<https://blog.cloudflare.com/java4shell-waf-protection/>) — _blog.cloudflare.com_
37. [Java4Shell](<https://calif.io/java4shell/>) — _calif.io_
38. [CVE-2026-114938 OpenJDK RCE (Java4Shell): Everything You Need to Know](<https://www.wiz.io/blog/cve-2026-114938-rce-java4shell-openjdk>) — _wiz.io_
39. [WPPConnect Compromised: Malicious Releases Steal Secrets and WhatsApp Sessions Through the Project's Own Pipeline](<https://www.stepsecurity.io/blog/wppconnect-compromised-malicious-releases-steal-secrets-and-whatsapp-sessions>) — _stepsecurity.io_
40. [Backdoor Attacks Against Machine Learning IRL](<https://phrack.org/issues/73/backdoor-attacks-against-machine-learning-irl>) — _phrack.org_
41. [Official Microsoft agent-framework PyPI Package Compromised](<https://opensourcemalware.com/blog/agent-framework-pypi-compromised>) — _opensourcemalware.com_
42. [nginx2root: Five new nginx vulnerabilities, and how Cloudflare protects origins from the worst of them](<https://blog.cloudflare.com/nginx2root/>) — _blog.cloudflare.com_
43. [Unauthenticated Remote Code Execution in NGINX](<https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities>) — _wiz.io_
44. [How Cloudflare WAF protects against ruby2shell (CVE-2026-132825)](<https://blog.cloudflare.com/ruby2shell-waf-protection/>) — _blog.cloudflare.com_
45. [Ruby2ßhell](<https://verialabs.com/ruby2shell/>) — _verialabs.com_
46. [How Cloudflare WAF helps protect against phpAfterShell and other critical PHP flaws](<https://blog.cloudflare.com/phpaftershell-waf-protection/>) — _blog.cloudflare.com_
47. [PHP Fixes 7 Critical Flaws, Including Bugs That Could Allow Remote Code Execution](<https://thehackernews.com/2026/11/php-fixes-7-critical-flaws-including.html>) — _thehackernews.com_
48. [Critical Apache Roller RCE Flaw Under Active Exploitation, No Authentication Required](<https://thehackernews.com/2026/11/critical-apache-roller-rce-flaw-under.html>) — _thehackernews.com_
49. [Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers](<https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html>) — _thehackernews.com_
50. [Escape Research Found a Scope Bypass that Made Gitea's Restricted Tokens Full Admins](<https://escape.tech/blog/escape-research-found-a-scope-bypass-that-made-gitea-s-restricted-tokens-full-admins-it-s-now-cve-2026-117635/>) — _escape.tech_
51. [Updating our coordinated vulnerability disclosure policy timelines](<https://www.anthropic.com/research/coordinated-vulnerability-disclosure-timelines>) — _anthropic red_
52. [Strengthening NATO and allied cyber defenses with AI](<https://openai.com/index/strengthening-nato-allied-cyber-defences-ai>) — _openai.com_
53. [Inside the Loop: Five AI Attack Frameworks that Never Ask Permission](<https://www.elastic.co/security-labs/threat-command/agentic-offensive-frameworks-detection-artex>) — _elastic.co_
54. [Scheduling the removal of the kube-proxy IPVS backend](<https://kubernetes.io/blog/2026/11/16/ipvs-removal/>) — _kubernetes.io_
55. [How Salesforce efficiently right-sizes Kubernetes workloads at scale on Amazon EKS](<https://aws.amazon.com/blogs/containers/how-salesforce-efficiently-right-sizes-kubernetes-workloads-at-scale-on-amazon-eks/>) — _aws.amazon.com_
56. [pg_pinecone now deploys on Railway in one click](<https://www.pinecone.io/blog/pg-pinecone-railway/>) — _pinecone_
57. [Is your OpenTelemetry pipeline becoming a performance bottleneck?](<https://www.cncf.io/blog/2026/11/17/is-your-opentelemetry-pipeline-becoming-a-performance-bottleneck/>) — _cncf.io_
58. [Not Everything Needs an LLM](<https://newsletter.posthog.com/p/decision-models>) — _newsletter.posthog.com_
59. [Wait for pull request events with GitHub CLI](<https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli>) — _github.blog_
60. [Enterprise Live Migrations from Azure DevOps generally available](<https://github.blog/changelog/2026-11-19-enterprise-live-migrations-from-azure-devops-generally-available>) — _github.blog_
61. [AWS announces ExtendDB 1.0](<https://aws.amazon.com/about-aws/whats-new/2026/11/aws-extenddb-1-0/>) — _aws.amazon.com_
62. [PostgreSQL 19 Released](<https://simonwillison.net/2026/Nov/19/postgresql-19/>) — _simonwillison.net_
63. [PostgreSQL 19 Released!](<https://www.postgresql.org/about/news/postgresql-19-released-3449/>) — _postgresql.org_
64. [Data Contracts](<https://martinfowler.com/articles/data-contracts.html>) — _martinfowler.com_
65. [De-identifying text at scale: How Airbnb protects personal data in AI training](<https://medium.com/airbnb-engineering/de-identifying-text-at-scale-how-airbnb-protects-personal-data-in-ai-training-32f3ff8ff7d0>) — _medium.com_
66. [Rebuilding Data Lineage at LinkedIn: From Storage to Compute](<https://www.linkedin.com/blog/engineering/infrastructure/rebuilding-data-lineage-at-linkedin-from-storage-to-compute>) — _linkedin.com_
67. [OpenSRE](<https://github.com/Tracer-Cloud/opensre>) — _github.com_
68. [Anthropic announces closing of initial public offering, including full exercise of underwriters’ option to purchase additional shares, and closing of concurrent private placement](<https://www.anthropic.com/news/ipo-close>) — _anthropic news_
69. [\[AINews\] Anthropic successfully completes largest IPO in history, valued at $1.5T](<https://latent.space/p/ainews-anthropic-successfully-completes-largest-ipo-in-history-valued-at-1-5t/>) — _latent.space_
70. [Anthropic IPO takeaways: ANT debuts with $1.8 trillion market cap in landmark moment for AI](<https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html>) — _cnbc.com_
71. [Combatting adversarial distillation](<https://openai.com/index/combatting-adversarial-distillation>) — _openai.com_
72. [Can AI help scientists identify promising drug candidates?](<https://openai.com/index/introducing-medchembench>) — _openai.com_
73. [Google's AI answers reducing search traffic by 40%](<https://revscope.co/blog/search-seo-geo-2026/>) — _hnrss.org_
74. [Le Groupe Figaro and OpenAI partner to bring Le Figaro journalism to ChatGPT](<https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership>) — _openai.com_
75. [California state AG sues OpenAI over rogue agent incidents](<https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/>) — _techcrunch.com_
76. [US moves to cut China's remote access to AI chips](<https://arstechnica.com/tech-policy/2026/11/us-moves-to-cut-chinas-remote-access-to-ai-chips/>) — _arstechnica.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
| `2026-11-22` | 🗓️ Récap hebdo | [Lire →](news/fr/2026-11-22.md) |
| `2026-11-21` | Samedi | [Lire →](news/fr/2026-11-21.md) |
| `2026-11-20` | Vendredi | [Lire →](news/fr/2026-11-20.md) |
| `2026-11-19` | Jeudi | [Lire →](news/fr/2026-11-19.md) |
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

<sub>[Parcourir toute l’archive (160) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
