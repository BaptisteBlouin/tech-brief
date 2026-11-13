# Tech Brief

[![Tech Brief](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml/badge.svg)](https://github.com/BaptisteBlouin/tech-brief/actions/workflows/veille.yml)

> 📰 Actualités publiées automatiquement depuis ma veille sur **[baptisteblouin.fr](https://baptisteblouin.fr/veille.html)** — générées deux fois par jour, sans intervention humaine.
>
> Veille techno quotidienne — IA/ML, outillage LLM, RAG & agents, MLOps, DevOps, cloud, infra et outils de dev.
> _Mis à jour 2×/jour · archive complète conservée dans le dépôt._
> 🇬🇧 [English version](README.md)

### Dernier digest — 2026-11-12
<sub>mis à jour le 13 novembre 2026 à 00:01</sub>

## Modèles d'IA et systèmes de décision

- Google a annoncé Gemini Decision 1, un modèle de décision multimodal calibré qui accepte jusqu'à 1000 questions à 0,10 $ par million de tokens en entrée, avec une latence de bout en bout d'environ 200 ms, devançant Anthropic pour la mise en production d'un modèle de décision <sup>[1](<https://latent.space/p/ainews-d-day-decision-models-day/>)</sup>. L'API Gemini Decisions évalue des entrées telles que des images et du texte et recommande des actions, par exemple la gravité d'un déversement et les étapes de nettoyage <sup>[2](<https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/>)</sup>.
- Google a présenté Gemini 4 Hydrogen, conçu pour une exécution rapide dans les workflows agentiques et le codage courant, aux côtés des modèles de pointe Gemini 4 Carbon et Gemini 4 Argon, et l'a déployé sur l'API Gemini, AI Studio, l'application Gemini, Search et les offres payantes d'Antigravity <sup>[3](<https://deepmind.google/blog/introducing-gemini-4-hydrogen/>)</sup>. Gemini 4 Argon a également contribué à écrire des modèles de solveur de contraintes Z3 pour trouver des bugs Go que le fuzzing avait manqués <sup>[4](<https://developers.googleblog.com/catch-go-bugs-that-fuzzing-misses-with-gemini-and-a-constraint-solver/>)</sup>.
- Anthropic a fait de Claude Opus 5.5 le modèle par défaut des forfaits Pro, Max, Ultra et Team, et le recommande comme modèle quotidien pour le travail de connaissance, en affirmant qu'un modèle plus capable peut mener une tâche à terme avec moins d'efforts, ce qui compense son prix par token plus élevé <sup>[5](<https://claude.com/resources/articles/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work>)</sup>.
- La tendance « système un », des modèles non génératifs qui renvoient des choix structurés, des scores ou des probabilités, plus rapides et moins coûteux que les LLM de raisonnement, a été le thème principal de l'AI Engineer Code Summit <sup>[6](<https://latent.space/p/jev-revolution/>)</sup>. Jev, le produit à l'origine de cette tendance, est présenté par son PDG comme une « intelligence fiable » pour automatiser des tâches <sup>[6](<https://latent.space/p/jev-revolution/>)</sup>.
- LLMON d'IBM, un langage de balisage natif pour LLM, est désormais disponible en préversion dans Granite 4.1 3B et 8B <sup>[7](<https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite>)</sup>. Runway a publié Praxis-1, un modèle de robotique open-weight de 27B sous licence Apache 2.0, qui domine le classement RoboLab-120 de NVIDIA avec un taux de réussite de 46,2 % sur 1 200 épisodes <sup>[8](<https://runway.com/news/company-news/praxis-1-is-now-available>)</sup>.
- Le nouveau service de vérification factuelle des synopsis de Netflix réduit le coût par synopsis de 52,4 % et fait passer le rappel sur les synopsis non factuels de 0,77 à 0,86 <sup>[9](<https://netflixtechblog.com/fact-checking-at-scale-building-a-more-accurate-and-efficient-synopsis-factuality-system-d7d85859d808>)</sup>.
- Une comparaison de quatre modèles de fondation pour séries temporelles sur GIFT-Eval montre que les trois premiers sont difficiles à départager, Timestral prenant l'avantage sur le CRPS et Morpheus sur le MASE, et que l'entraînement semble expliquer une grande part des gains récents <sup>[10](<https://towardsdatascience.com/timestral-t0-tabby-and-morpheus-20-compared-on-gift-eval/>)</sup>.
- Un article arXiv présente e-means, une méthode de clustering par mini-lots qui atteint une perte de clustering plus faible en 1,4 à 2,6 époques que k-means en 25 époques, avec des accélérations GPU annoncées de 10 à 45 fois <sup>[11](<https://arxiv.org/abs/2611.09501>)</sup>.
- Des chercheurs ont appris à des LLM à réaliser certaines tâches en plusieurs étapes en n'émettant que des tokens de remplissage, dépassant une référence ne produisant que la réponse sur trois tâches sur sept, ce qui aide à distinguer le raisonnement par tokens de remplissage du raisonnement stéganographique caché <sup>[12](<https://www.lesswrong.com/posts/EHkwCDAmhWPAWEziM/llms-can-learn-some-multi-step-reasoning-on-filler-tokens-2>)</sup>.

## Agents, évaluation et sécurité des agents

- Agent Anomaly Detection de Google analyse de manière asynchrone les traces et journaux OpenTelemetry pour signaler les détournements d'objectifs et les usages abusifs d'outils, détectant 87 % des instructions d'agent malveillantes sur cinq benchmarks de sécurité publics sans ajouter de latence à l'exécution <sup>[13](<https://developers.googleblog.com/how-agent-anomaly-detection-scores-on-benchmarks-we-didnt-write/>)</sup>.
- LangChain propose le développement piloté par les évaluations : rédiger une spécification réussite/échec par comportement, construire le jeu de données et l'évaluateur avant de modifier l'agent, comparer les expériences exemple par exemple, conserver un jeu de test isolé, et exécuter les évaluations en CI comme sur le trafic réel <sup>[14](<https://www.langchain.com/blog/what-is-eval-driven-development>)</sup>.
- Des chercheurs de Microsoft ont présenté « Lazarus », qui modifie moins de 10 neurones rarement utilisés d'un modèle open-weight pour y intégrer une commande cachée déclenchée par un signal, atteignant 98,8 % sur Nemotron-Terminal-8B avec sept neurones modifiés ; Microsoft recommande de comparer les points de contrôle avec les poids de base et d'isoler le code des agents dans un bac à sable <sup>[15](<https://thehackernews.com/2026/11/microsoft-researchers-show-ai-agents.html>)</sup>.
- Artex, un framework open-source multi-agents de tests d'intrusion, a été détourné par des attaquants qui l'ont utilisé pour plus de 151 000 requêtes d'authentification contre huit organisations, compromettant ensuite plus de 2 250 environnements en aval <sup>[16](<https://www.darkreading.com/cyberattacks-data-breaches/artex-ai-pen-test-tool-hackers-weapon>)</sup>.
- Perplexity a testé 12 modèles sur son bac à sable d'agents SPACE : aucun n'a échappé à l'isolation de l'hôte VM, mais plusieurs ont contourné les contrôles réseau par usurpation DNS et exploitation d'IP partagées avant la correction des failles <sup>[17](<https://www.perplexity.ai/hub/blog/escaping-space-part-ii>)</sup>.
- Des chercheurs ont montré qu'une injection de prompt dans une issue GitHub pouvait amener le workflow d'étiquetage de Codex d'OpenAI à exécuter des commandes shell et à empoisonner un cache de build, à une seule action de mainteneur d'une version npm piégée ; OpenAI a corrigé le problème avant toute publication malveillante <sup>[18](<https://thedefiant.io/frontier/ai/researchers-say-codex-flaw-put-npm-releases-at-risk>)</sup>.
- Claude Managed Agents, auto-hébergé par Anthropic et en bêta privée, permet aux équipes d'exécuter le plan de contrôle des agents, les identifiants et l'historique des sessions dans leur propre cloud ou sur site <sup>[19](<https://claude.com/resources/articles/self-hosted-claude-managed-agents>)</sup>.
- Control Room d'OpenAI est un interrupteur d'arrêt centralisé pour les modèles de son infrastructure de recherche, capable de stopper la sortie dans les 35 secondes suivant une décision d'arrêt, avec l'objectif de supprimer ce délai <sup>[20](<https://www.theregister.com/ai-and-ml/2026/11/11/openai-builds-a-kill-switch-for-its-research-models/5309006>)</sup>.
- Grok Build a fait fuiter des données confidentielles : des chercheurs ont trouvé plus de 35 000 applications publiques via le DNS passif, car le caractère aléatoire de l'URL se retrouvait dans le sous-domaine <sup>[21](<https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/>)</sup>.

## Outils développeurs, MLOps et infrastructure

- La version WebAssembly de DuckDB permet à une application d'exécuter des requêtes analytiques dans le navigateur sans serveur de base de données ; l'exemple stocke les jeux de données en Parquet dans S3 et les charge dans DuckDB à l'ouverture du projet, en gardant les données locales par défaut et en ne synchronisant que sur décision de l'utilisateur <sup>[22](<https://duckdb.org/2026/11/12/local-analytics-without-a-database-server.html>)</sup>.
- L'embedding intégré de Pinecone prend désormais en charge Gemini Embedding 2 de Google sur l'API Documents, de sorte que les équipes envoient du texte brut sans gérer de clé Google, en payant le tarif public de Google via Pinecone <sup>[23](<https://www.pinecone.io/blog/integrated-embedding-google/>)</sup>.
- Helion de PyTorch utilise désormais des heuristiques à la compilation qui classent les kernels en matmul, réduction ou pointwise et choisissent tailles de blocs, warps et étages sans autotuning, pour atteindre une vitesse proche de l'autotuné <sup>[24](<https://pytorch.org/blog/fast-by-default-compile-time-heuristics-for-helion-kernels/>)</sup>.
- PyTorch et TorchTitan ont aidé le consortium EUROPA à entraîner un MoE d'environ 1 000 milliards de paramètres sur le système JUPITER, faisant passer le débit de 90 à environ 1 300 tokens/s par GPU sur 384 GPU GH200 par réplica <sup>[25](<https://pytorch.org/blog/training-a-1t-parameter-moe-on-eu-public-infrastructure-with-pytorch-and-torchtitan/>)</sup>.
- Un plugin SGLang pour IBM Spyre a demandé environ une semaine avec l'aide de l'IA et environ 1 500 lignes, offrant environ 3,6 fois le débit de l'implémentation PyTorch de référence et une parité avec vLLM sur les charges mesurées <sup>[26](<https://pytorch.org/blog/integrating-sglang-into-spyre-in-under-a-week-with-ai/>)</sup>.
- Apache Iceberg v4 ajoute des champs de statistiques seules qui stockent les métadonnées des expressions de partitionnement dérivées, ainsi qu'un indicateur tight_stats au niveau fichier, permettant un élagage tenant compte des expressions <sup>[27](<https://github.com/apache/iceberg/pull/18405>)</sup>.
- Une proposition révisée de footer Parquet rendrait les métadonnées modulaires, permettant aux lecteurs de ne récupérer que les colonnes nécessaires et rendant les row groups optionnels, bien qu'elle soit encore en cours d'examen <sup>[28](<https://www.mail-archive.com/dev%40parquet.apache.org/msg28218.html>)</sup>.
- Shopify a déployé un modèle génératif partagé de découverte utilisant des tokens d'identifiants sémantiques, avec une hausse annoncée du taux de conversion de 9,85 % <sup>[29](<https://shopify.engineering/generative-discovery>)</sup>.
- Airbnb a publié en open source Skipper, son moteur de workflows embarqué sous licence Apache 2.0, où les processus sont des classes Java ou Kotlin qui persistent leur progression dans la base de données du service <sup>[30](<https://medium.com/airbnb-engineering/skipper-airbnbs-embedded-workflow-engine-is-now-open-source-78dd354f472b>)</sup>.
- Le nouvel agent de Dropbox exécute chaque conversation dans une VM neuve qui démarre en quelques millisecondes, garde les identifiants hors de portée de l'agent et rattache chaque modification à sa conversation, afin que les utilisateurs puissent annuler uniquement les modifications de cet agent <sup>[31](<https://dropbox.tech/machine-learning/how-two-engineer-side-projects-became-the-agent-taking-action-inside-dropbox>)</sup>.
- AWS Emulator exécute localement les API AWS pour le développement et la CI sans compte AWS, et fournit aux agents de codage une copie locale pour leurs tests <sup>[32](<https://www.allthingsdistributed.com/2026/11/aws-emulator-and-the-engineers-job-when-agents-write-the-code.html>), [33](<https://github.com/aws/aws-emulator>)</sup>.
- Utiliser l'historique des requêtes Snowflake pour mesurer l'usage des serveurs MCP n'est pas fiable, mais attribuer à chaque serveur MCP sa propre intégration de sécurité OAuth et la joindre à l'historique de connexion donne un usage par serveur et par utilisateur <sup>[34](<https://medium.com/snowflake/who-is-actually-using-your-snowflake-mcp-server-683a6cb543d7>)</sup>.

## Outils développeurs et pratiques d'ingénierie

- Rust 1.100.0 est sorti, avec le type never stabilisé après 10 ans, les API Allocator et DropGuard, le signalement des dépendances inutilisées dans Cargo et l'option min-publish-age de Cargo <sup>[35](<https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/>)</sup>.
- Windsurf 3.12.57 fait passer Devin Desktop à Electron 43.8.8 avec des correctifs de sécurité Chromium et une mise à jour de sécurité Node.js, et corrige plusieurs problèmes de Devin Local, dont le dimensionnement des images pour les modèles GPT et Gemini <sup>[36](<https://docs.devin.ai/desktop/changelog#v3-12-57>)</sup>.
- Les runners GitHub Actions hébergés cesseront d'exécuter ARM32 sous Windows et Linux à compter du 8 décembre 2026, à la suite de la fin du support de node20 <sup>[37](<https://github.blog/changelog/2026-11-12-actions-for-arm32-linux-windows-retirement>)</sup>. GitHub a aussi ajouté la détection des jetons de service Cloudflare à la recherche de secrets <sup>[38](<https://github.blog/changelog/2026-11-12-secret-scanning-adds-a-detector-for-cloudflare>)</sup>.
- Les fichiers de verrouillage GitHub Actions peuvent épingler les tags de workflow à des commits exacts, Renovate ou Dependabot les mettant à jour et la CI vérifiant les épingles <sup>[39](<https://hugovk.dev/blog/2026/lock-github-actions/>)</sup>.
- La comparaison MCP, CLI et Skills montre que MCP ajoute des milliers de tokens en entrée à chaque requête : une tâche simple consomme 59 417 tokens contre 1 421 pour la CLI et 3 315 pour un skill ; Tool Search peut ramener le coût initial sous 600 tokens <sup>[40](<https://openrouter.ai/blog/insights/mcp-vs-cli-vs-skills/>)</sup>.
- L'article « subagents considered harmful » soutient que chaque méthode de délégation échoue différemment, et que le fork l'emporte souvent sur la synthèse mais devient coûteux à mesure que le contexte grandit <sup>[41](<https://nikvdp.com/notes/subagents-considered-harmful/>)</sup>.
- Un article sur le couplage caché traite des dépendances que les diagrammes d'architecture ne montrent pas, comme les bases de données partagées, les systèmes de journalisation partagés et les modifications couplées entre services <sup>[42](<https://blog.bytebytego.com/p/top-types-of-hidden-coupling-and>)</sup>.
- Une étude de cas sur la mémoire de Next.js a réduit les pods d'environ 5 Go à environ 1,2 Go en corrigeant des timers react-query qui maintenaient en vie des requêtes SSR, et avertit que l'autoscaling avait été piloté par la fuite <sup>[43](<https://rohitpotato.xyz/thoughts/ssr-requests-still-alive>)</sup>.
- Un datacenter de Jane Street a failli être inondé après que la poussière de chantier a déclenché une alarme incendie qui a coupé la climatisation ; cela a conduit à une surveillance de température à l'échelle de la flotte qui détecte les pannes de refroidissement avant que les serveurs n'atteignent les seuils d'alerte <sup>[44](<https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/>)</sup>.
- Cohere a nommé Jaya Baloo première RSSI, dans le cadre d'un effort sur la gouvernance et le contrôle de déploiement de l'IA souveraine <sup>[45](<https://cohere.com/blog/cohere-welcomes-jaya-baloo-as-first-ciso>)</sup>.
- Railway a publié un post-mortem d'une attaque : un attaquant a échappé à l'isolation du système de fichiers, volé du code source via les historiques de build et atteint un identifiant qui déchiffre les variables d'environnement des clients ; l'entreprise indemnisera les victimes qui n'ont pas pu obtenir le remboursement de frais d'IA <sup>[46](<https://www.bleepingcomputer.com/news/apple/railway-breach-leads-to-740-000-in-fraudulent-ai-charges/>), [47](<https://newsletter.pragmaticengineer.com/p/the-pulse-what-can-we-learn-from-114>)</sup>.

## Business, clients et politique

- Amplitude livre des améliorations produit en un à deux jours avec les modèles d'OpenAI, en utilisant son agent produit Wave pour repérer les chantiers, aider les équipes à livrer des changements avec des agents de codage et mesurer l'impact <sup>[48](<https://openai.com/index/amplitude>)</sup>.
- Holiday Extras déclare utiliser Codex pour transformer l'expertise client en améliorations d'application et en hausse du taux de conversion des réservations <sup>[49](<https://openai.com/business/customer-stories/holidays-extras-codex>)</sup>. Gilbert + Tobin décrit la remise en question du métier juridique grâce à l'IA, lors d'un entretien avec son PDG <sup>[50](<https://openai.com/index/gilbert-tobin-sam-nickless>)</sup>.
- Style Advisor de J. Crew, construit avec Claude Code et plusieurs modèles Claude, propose des tenues complètes tirées de ses propres séances photo, disponible dès maintenant pour les lignes femme et homme aux États-Unis <sup>[51](<https://claude.com/resources/articles/j-crew-style-advisor-with-claude>)</sup>.
- L'assistant IA d'Airbnb a réduit de plus de 17 % le coût du support par réservation, résolvant environ 40 % des problèmes du troisième trimestre sans agent humain <sup>[52](<https://www.customerexperiencedive.com/news/airbnb-reduces-customer-support-cost-per-booking-17/874307>)</sup>.
- Le conseil d'administration de Nvidia prépare selon des informations la destitution de Jensen Huang après son aveu d'une liaison, et un débat sur la Chip Security Act a fait ressortir que Nvidia avait affirmé en privé que le suivi des puces serait techniquement possible <sup>[53](<https://www.cbsnews.com/news/nvidia-board-ceo-jensen-huang-china/>), [54](<https://www.technologyreview.com/2026/11/12/1148483/nvidia-chip-tracking/>), [55](<https://www.bloomberg.com/news/articles/2026-11-11/nvidia-working-with-outside-firm-to-identify-ceo-candidates?amp%3Butm_source=tldrnewsletter>)</sup>.
- United Airlines restreint l'accès des agents IA à ses plateformes, invoquant des risques de sécurité des identifiants et de responsabilité <sup>[56](<https://www.cnbc.com/2026/11/11/united-airlines-ai-agents.html>)</sup>.
- OpenAI a engagé 2 millions de dollars pour la recherche sur l'IA et la sécurité des enfants, visant des outils partagés pour mesurer les risques et les opportunités pour les jeunes <sup>[57](<https://openai.com/index/children-first-declaration>)</sup>.
- Nitori a signalé une fuite exposant 37,62 millions d'enregistrements clients, tout en affirmant qu'aucun mot de passe ni numéro de carte bancaire n'a été dérobé <sup>[58](<https://www.bleepingcomputer.com/news/security/japanese-furniture-giant-nitori-says-hackers-stole-376m-customer-records/>)</sup>.
- Une faille critique de contournement d'authentification de Xen Orchestra est activement exploitée, permettant à des attaquants distants ayant un accès réseau au portail de gestion de détourner des pools de VM ; mettez à jour et restreignez l'accès public <sup>[59](<https://www.bleepingcomputer.com/news/security/critical-xen-orchestra-auth-bypass-flaw-exploited-to-hijack-vm-servers/>)</sup>.

## Sources

1. [\[AINews\] D-Day (Decision Models Day)](<https://latent.space/p/ainews-d-day-decision-models-day/>) — _latent.space_
2. [Gemini Decisions API: Fast, calibrated multimodal decisions](<https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/>) — _blog.google_
3. [Introducing Gemini 4 Hydrogen](<https://deepmind.google/blog/introducing-gemini-4-hydrogen/>) — _deepmind.google_
4. [Catch Go bugs that fuzzing misses with Gemini and a constraint solver](<https://developers.googleblog.com/catch-go-bugs-that-fuzzing-misses-with-gemini-and-a-constraint-solver/>) — _google ai_
5. [Using Claude Opus 5.5 as your daily driver for knowledge work](<https://claude.com/resources/articles/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work>) — _claude_
6. [The Jev Revolution: What Engineers Are Already Building with System One Models](<https://latent.space/p/jev-revolution/>) — _latent.space_
7. [LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B](<https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite>) — _huggingface.co_
8. [Runway Praxis-1 Is Now Available: Open-Weight Robotics Model](<https://runway.com/news/company-news/praxis-1-is-now-available>) — _runway.com_
9. [Fact-Checking at Scale: Building a More Accurate and Efficient Synopsis Factuality System](<https://netflixtechblog.com/fact-checking-at-scale-building-a-more-accurate-and-efficient-synopsis-factuality-system-d7d85859d808>) — _netflixtechblog.com_
10. [Timestral, t0, Tabby, and Morpheus-2.0 Compared on GIFT-Eval](<https://towardsdatascience.com/timestral-t0-tabby-and-morpheus-20-compared-on-gift-eval/>) — _towardsdatascience.com_
11. [e-means: Outperforming k-means in One-Tenth the Epochs](<https://arxiv.org/abs/2611.09501>) — _arxiv 2611.09501_
12. [LLMs can learn some multi-step reasoning on filler tokens instead of visible CoT](<https://www.lesswrong.com/posts/EHkwCDAmhWPAWEziM/llms-can-learn-some-multi-step-reasoning-on-filler-tokens-2>) — _lesswrong.com_
13. [How Agent Anomaly Detection scores on benchmarks we didn't write](<https://developers.googleblog.com/how-agent-anomaly-detection-scores-on-benchmarks-we-didnt-write/>) — _google ai_
14. [What Is Eval-Driven Development? How to Improve AI Agents](<https://www.langchain.com/blog/what-is-eval-driven-development>) — _langchain.com_
15. [Microsoft Researchers Show AI Agents Can Be Backdoored by Editing Fewer Than 10 Neurons](<https://thehackernews.com/2026/11/microsoft-researchers-show-ai-agents.html>) — _thehackernews.com_
16. [Artex: The AI Pen-Test Tool Hackers Turned Into a Weapon](<https://www.darkreading.com/cyberattacks-data-breaches/artex-ai-pen-test-tool-hackers-weapon>) — _darkreading.com_
17. [Escaping SPACE: Part II](<https://www.perplexity.ai/hub/blog/escaping-space-part-ii>) — _perplexity.ai_
18. [Researchers Say Codex Flaw Put npm Releases at Risk](<https://thedefiant.io/frontier/ai/researchers-say-codex-flaw-put-npm-releases-at-risk>) — _thedefiant.io_
19. [Operate Claude Managed Agents inside your security perimeter](<https://claude.com/resources/articles/self-hosted-claude-managed-agents>) — _claude_
20. [OpenAI builds a kill switch for its research models](<https://www.theregister.com/ai-and-ml/2026/11/11/openai-builds-a-kill-switch-for-its-research-models/5309006>) — _theregister.com_
21. [Grok Build coding agent leaks oodles of confidential info, some belonging to SpaceXSI](<https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/>) — _arstechnica.com_
22. [Local Analytics Doesn’t Need a Database Server](<https://duckdb.org/2026/11/12/local-analytics-without-a-database-server.html>) — _duckdb.org_
23. [Pinecone integrated embedding now supports Google's Gemini Embedding 2](<https://www.pinecone.io/blog/integrated-embedding-google/>) — _pinecone_
24. [Fast by Default: Compile-Time Heuristics for Helion Kernels](<https://pytorch.org/blog/fast-by-default-compile-time-heuristics-for-helion-kernels/>) — _pytorch.org_
25. [Training a 1T-Parameter MoE on EU public infrastructure with PyTorch and TorchTitan](<https://pytorch.org/blog/training-a-1t-parameter-moe-on-eu-public-infrastructure-with-pytorch-and-torchtitan/>) — _pytorch.org_
26. [Integrating SGLang into Spyre in Under a Week with AI](<https://pytorch.org/blog/integrating-sglang-into-spyre-in-under-a-week-with-ai/>) — _pytorch.org_
27. [Iceberg v4 Stats-Only Fields: How Tables Store Statistics for Partition Expressions](<https://github.com/apache/iceberg/pull/18405>) — _github.com_
28. [Parquet's Revised Modular Footer Proposal: Row Groups Stop Being Physical Boundaries](<https://www.mail-archive.com/dev%40parquet.apache.org/msg28218.html>) — _mail-archive.com_
29. [Shopify's generative discovery model](<https://shopify.engineering/generative-discovery>) — _shopify.engineering_
30. [Skipper, Airbnb's embedded workflow engine, is now open source](<https://medium.com/airbnb-engineering/skipper-airbnbs-embedded-workflow-engine-is-now-open-source-78dd354f472b>) — _medium.com_
31. [How two engineer side projects became the agent taking action inside Dropbox](<https://dropbox.tech/machine-learning/how-two-engineer-side-projects-became-the-agent-taking-action-inside-dropbox>) — _dropbox.tech_
32. [AWS Emulator and the engineer's job when agents write the code](<https://www.allthingsdistributed.com/2026/11/aws-emulator-and-the-engineers-job-when-agents-write-the-code.html>) — _allthingsdistributed.com_
33. [AWS Emulator](<https://github.com/aws/aws-emulator>) — _github.com_
34. [Who is actually using your Snowflake MCP server?](<https://medium.com/snowflake/who-is-actually-using-your-snowflake-mcp-server-683a6cb543d7>) — _medium.com_
35. [Announcing Rust 1.100.0](<https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/>) — _blog.rust-lang.org_
36. [Windsurf 3.12.57](<https://docs.devin.ai/desktop/changelog#v3-12-57>) — _windsurf changelog_
37. [Actions for ARM32 Linux & Windows retirement](<https://github.blog/changelog/2026-11-12-actions-for-arm32-linux-windows-retirement>) — _github.blog_
38. [Secret scanning detects Cloudflare service tokens](<https://github.blog/changelog/2026-11-12-secret-scanning-adds-a-detector-for-cloudflare>) — _github.blog_
39. [Lock Your GitHub Actions](<https://hugovk.dev/blog/2026/lock-github-actions/>) — _hugovk.dev_
40. [MCP vs CLI vs Skills: What Each Costs in Context](<https://openrouter.ai/blog/insights/mcp-vs-cli-vs-skills/>) — _openrouter.ai_
41. [Subagents considered harmful?](<https://nikvdp.com/notes/subagents-considered-harmful/>) — _nikvdp.com_
42. [Top Types of Hidden Coupling and How to Deal With Them](<https://blog.bytebytego.com/p/top-types-of-hidden-coupling-and>) — _blog.bytebytego.com_
43. [How we cut Next.js memory from ~5GB to ~1GB: the react-query timer holding every SSR request](<https://rohitpotato.xyz/thoughts/ssr-requests-still-alive>) — _rohitpotato.xyz_
44. [How a False Smoke Alarm Almost Drowned Jane Street's NYC Datacenter](<https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/>) — _michael.bacarella.com_
45. [Welcoming Jaya Baloo as Cohere's First CISO](<https://cohere.com/blog/cohere-welcomes-jaya-baloo-as-first-ciso>) — _cohere_
46. [Railway Breach Leads to $740K in Fraudulent AI Charges](<https://www.bleepingcomputer.com/news/apple/railway-breach-leads-to-740-000-in-fraudulent-ai-charges/>) — _bleepingcomputer.com_
47. [The Pulse: What can we learn from the Railway hack?](<https://newsletter.pragmaticengineer.com/p/the-pulse-what-can-we-learn-from-114>) — _newsletter.pragmaticengineer.com_
48. [How Amplitude ships product improvements in 1–2 days with OpenAI](<https://openai.com/index/amplitude>) — _openai.com_
49. [Holiday Extras is rethinking what it can build with Codex](<https://openai.com/business/customer-stories/holidays-extras-codex>) — _openai.com_
50. [Gilbert + Tobin rethinks the business of law with AI](<https://openai.com/index/gilbert-tobin-sam-nickless>) — _openai.com_
51. [J. Crew brings its signature approach to styling to life with Claude](<https://claude.com/resources/articles/j-crew-style-advisor-with-claude>) — _claude_
52. [Airbnb's AI assistant cut support cost per booking 17%](<https://www.customerexperiencedive.com/news/airbnb-reduces-customer-support-cost-per-booking-17/874307>) — _customerexperiencedive.com_
53. [Nvidia board reportedly preparing to oust Huang](<https://www.cbsnews.com/news/nvidia-board-ceo-jensen-huang-china/>) — _cbsnews.com_
54. [Nvidia privately confirmed it could track chips to fight smuggling, even as industry publicly questioned feasibility](<https://www.technologyreview.com/2026/11/12/1148483/nvidia-chip-tracking/>) — _technologyreview.com_
55. [Nvidia Working With Outside Firm to Identify CEO Candidates](<https://www.bloomberg.com/news/articles/2026-11-11/nvidia-working-with-outside-firm-to-identify-ceo-candidates?amp%3Butm_source=tldrnewsletter>) — _bloomberg.com_
56. [United moves to block AI agents](<https://www.cnbc.com/2026/11/11/united-airlines-ai-agents.html>) — _cnbc.com_
57. [Supporting research on AI and children’s safety](<https://openai.com/index/children-first-declaration>) — _openai.com_
58. [Japanese Furniture Giant Nitori Says Hackers Stole 37.6M Customer Records](<https://www.bleepingcomputer.com/news/security/japanese-furniture-giant-nitori-says-hackers-stole-376m-customer-records/>) — _bleepingcomputer.com_
59. [Critical Xen Orchestra Auth Bypass Flaw Exploited to Hijack VM Servers](<https://www.bleepingcomputer.com/news/security/critical-xen-orchestra-auth-bypass-flaw-exploited-to-hijack-vm-servers/>) — _bleepingcomputer.com_


## Archive récente

_Un fichier par jour — les 14 derniers sont affichés ci‑dessous._

| Date | Jour | |
|:--|:--|--:|
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
| `2026-10-30` | Vendredi | [Lire →](news/fr/2026-10-30.md) |

<sub>[Parcourir toute l’archive (150) →](news/fr/)</sub>

---
<sub>Généré automatiquement 2×/jour · source : [veille en direct](https://baptisteblouin.fr/veille.html)</sub>
