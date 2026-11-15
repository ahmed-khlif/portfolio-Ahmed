import type { LanguageCode } from "./i18n";

export type LocalizedString = Partial<Record<LanguageCode, string>>;

export interface ProjectLocalizedCopy {
  role?: LocalizedString;
  shortDescription?: LocalizedString;
  metrics?: LocalizedString[];
  pages?: Array<{
    title?: LocalizedString;
    description?: LocalizedString;
  }>;
  paragraphs?: LocalizedString[];
  bullets?: LocalizedString[];
}

export interface ExperienceLocalizedCopy {
  position?: LocalizedString;
  location?: LocalizedString;
  description?: LocalizedString[];
  achievements?: LocalizedString[];
}

export interface EducationLocalizedCopy {
  degree?: LocalizedString;
  focus?: LocalizedString;
  highlights?: LocalizedString[];
}

export interface CertificationLocalizedCopy {
  name?: LocalizedString;
  date?: LocalizedString;
  credential?: LocalizedString;
}

export interface BlogLocalizedCopy {
  title?: LocalizedString;
  description?: LocalizedString;
}

export function resolveLocalized(
  value: LocalizedString | undefined,
  language: LanguageCode,
  fallback: string,
) {
  return value?.[language] ?? fallback;
}

export const categoryTranslations: Record<string, LocalizedString> = {
  "Full Stack": { fr: "Full-stack", ar: "Full-Stack" },
  Backend: { fr: "Backend", ar: "الواجهة الخلفية" },
  DevOps: { fr: "DevOps", ar: "DevOps" },
  "Web Dev": { fr: "Développement web", ar: "تطوير الويب" },
  "UI/UX": { fr: "UI/UX", ar: "UI/UX" },
  "Mobile Dev": { fr: "Développement mobile", ar: "تطوير الهاتف" },
  "Data & BI": { fr: "Données et BI", ar: "البيانات وذكاء الأعمال" },
  "AI / ML": { fr: "IA / ML", ar: "الذكاء الاصطناعي / تعلم الآلة" },
  Frontend: { fr: "Frontend", ar: "الواجهة الأمامية" },
  Systems: { fr: "Systèmes", ar: "الأنظمة" },
};

export const skillTranslations: Record<string, LocalizedString> = {
  Java: { fr: "Développement backend orienté objet, recherche d'information et projets académiques.", ar: "تطوير Backend كائني التوجه واسترجاع المعلومات والمشاريع الأكاديمية." },
  Python: { fr: "Machine learning, pipelines NLP et prototypage rapide de services FastAPI/Flask.", ar: "التعلم الآلي ومسارات NLP والنمذجة السريعة لخدمات FastAPI وFlask." },
  TypeScript: { fr: "JavaScript typé pour des interfaces, APIs et contrats partagés maintenables.", ar: "JavaScript مضبوط الأنواع لواجهات وواجهات API وعقود مشتركة قابلة للصيانة." },
  JavaScript: { fr: "Le runtime de mes applications web, services Node et scripts d'outillage.", ar: "البيئة المشغلة لتطبيقات الويب وخدمات Node وأدوات البرمجة." },
  Dart: { fr: "Le langage de mes applications Flutter multiplateformes.", ar: "اللغة التي أستخدمها لتطبيقات Flutter متعددة المنصات." },
  "C#": { fr: "Services ASP.NET Core, interfaces Blazor et microservices .NET.", ar: "خدمات ASP.NET Core وواجهات Blazor وmicroservices بـ .NET." },
  C: { fr: "Développement système, notamment DevSweeper en C99 et Win32.", ar: "تطوير الأنظمة، خصوصاً DevSweeper باستخدام C99 وWin32." },
  React: { fr: "Interfaces composées de composants avec hooks, état et design systems.", ar: "واجهات مبنية بالمكونات باستخدام hooks وإدارة الحالة وأنظمة التصميم." },
  "Next.js": { fr: "React full-stack avec App Router, composants serveur, routage et APIs.", ar: "React Full-Stack مع App Router ومكونات الخادم والمسارات وواجهات API." },
  Angular: { fr: "Applications monopage structurées et typées avec TypeScript de bout en bout.", ar: "تطبيقات صفحة واحدة منظمة ومضبوطة الأنواع باستخدام TypeScript." },
  Flutter: { fr: "Une base de code pour des applications mobiles Android et iOS soignées.", ar: "قاعدة كود واحدة لتطبيقات هاتف Android وiOS متقنة." },
  "Tailwind CSS": { fr: "Style utility-first pour des interfaces cohérentes et responsive.", ar: "تنسيق utility-first لواجهات متناسقة ومتجاوبة." },
  "HTML 5": { fr: "Balisage sémantique et accessible à la base de chaque interface.", ar: "ترميز دلالي يسهل الوصول إليه كأساس لكل واجهة." },
  "CSS 3": { fr: "Mise en page, responsive et motion avec attention aux détails.", ar: "التخطيط والتجاوب والحركة مع عناية بالتفاصيل." },
  NestJS: { fr: "APIs Node modulaires avec injection, guards et frontières métier claires.", ar: "واجهات Node معيارية مع الحقن والحماية وحدود واضحة للمجال." },
  "Node.js": { fr: "Services JavaScript côté serveur, intégrations et automatisation.", ar: "خدمات JavaScript على الخادم والتكاملات والأتمتة." },
  FastAPI: { fr: "APIs Python typées, adaptées au service de modèles de machine learning.", ar: "واجهات Python مضبوطة الأنواع لخدمة نماذج التعلم الآلي." },
  "Spring Boot": { fr: "Services Java fondés sur les conventions, le découpage et la configuration.", ar: "خدمات Java تعتمد على الاصطلاحات والتقسيم والإعداد." },
  "Express.js": { fr: "APIs REST légères et pipelines middleware pour Node.", ar: "واجهات REST خفيفة ومسارات middleware لخدمات Node." },
  Flask: { fr: "Backends Python compacts, notamment le chatbot NLP étudiant.", ar: "خلفيات Python خفيفة، ومنها روبوت المحادثة الطلابي بـ NLP." },
  "ASP.NET Core": { fr: "Backends C# sécurisés et microservices .NET à haut débit.", ar: "خلفيات C# آمنة وmicroservices .NET عالية الأداء." },
  PostgreSQL: { fr: "Modélisation relationnelle, indexation et optimisation des requêtes en production.", ar: "نمذجة علائقية وفهرسة وتحسين استعلامات بيانات الإنتاج." },
  MongoDB: { fr: "Stockage documentaire pour les données produit flexibles et évolutives.", ar: "تخزين مستندي لبيانات المنتجات المرنة والسريعة التغير." },
  Firebase: { fr: "Authentification, données temps réel et notifications web et mobile.", ar: "المصادقة والبيانات الفورية والإشعارات للويب والهاتف." },
  Redis: { fr: "Cache, sessions et files d'attente pour garder les APIs rapides.", ar: "التخزين المؤقت والجلسات والطوابير للحفاظ على سرعة واجهات API." },
  "SQL Server": { fr: "Entrepôts de données et cubes SSAS derrière des dashboards BI.", ar: "مستودعات بيانات ومكعبات SSAS خلف لوحات ذكاء الأعمال." },
  Prisma: { fr: "Accès typé aux bases, migrations et schéma lisible comme source de vérité.", ar: "وصول مضبوط للبيانات وترحيلات ومخطط واضح كمصدر للحقيقة." },
  SQLite: { fr: "Bases embarquées pour des applications légères et autonomes.", ar: "قواعد بيانات مدمجة لتطبيقات خفيفة ومستقلة." },
  "LLM Integration": { fr: "APIs Gemini et OpenAI intégrées à des fonctionnalités utiles, mesurées et observables.", ar: "دمج Gemini وOpenAI في ميزات عملية قابلة للقياس والمراقبة." },
  LangChain: { fr: "Chaînes de prompts, outils et workflows de retrieval sur données privées.", ar: "سلاسل prompts واستدعاء الأدوات ومسارات الاسترجاع فوق البيانات الخاصة." },
  "Scikit-learn": { fr: "Entraînement, réglage et évaluation de modèles classiques de machine learning.", ar: "تدريب وضبط وتقييم نماذج التعلم الآلي الكلاسيكية." },
  NLTK: { fr: "Tokenisation, stemming et pipelines TF-IDF/Word2Vec pour le texte.", ar: "تجزئة الكلمات وstemming ومسارات TF-IDF وWord2Vec لتصنيف النصوص." },
  Pandas: { fr: "Nettoyage, transformation et exploration des données avant modélisation.", ar: "تنظيف البيانات وتشكيلها واستكشافها قبل النمذجة أو التقارير." },
  NumPy: { fr: "Calcul numérique rapide pour le feature engineering et l'évaluation.", ar: "حسابات عددية سريعة لهندسة الخصائص وتقييم النماذج." },
  Langfuse: { fr: "Traçage et évaluation des appels LLM pour mesurer la qualité des réponses.", ar: "تتبع وتقييم استدعاءات LLM لقياس جودة الإجابات." },
  FAISS: { fr: "Recherche de similarité sur embeddings pour des fonctions de retrieval.", ar: "بحث التشابه على embeddings لميزات الاسترجاع." },
  Docker: { fr: "Images reproductibles et stacks Compose avec parité local/production.", ar: "صور قابلة لإعادة الإنتاج وبيئات Compose متطابقة محلياً وفي الإنتاج." },
  Git: { fr: "Branches, revues et livraison de changements en confiance.", ar: "الفروع والمراجعات وتسليم التغييرات بثقة." },
  "CI/CD": { fr: "Pipelines automatisés qui conduisent un commit jusqu'au déploiement.", ar: "مسارات مؤتمتة تنقل التغيير من commit إلى النشر." },
  Jenkins: { fr: "Pipelines en plusieurs étapes pour build, tests, qualité et release.", ar: "مسارات متعددة المراحل للبناء والاختبار والجودة والإصدار." },
  Nginx: { fr: "Reverse proxy, TLS et livraison statique devant les services.", ar: "Reverse proxy وTLS وتسليم الملفات الثابتة أمام الخدمات." },
  GitLab: { fr: "Dépôts, merge requests et runners CI au quotidien.", ar: "المستودعات وطلبات الدمج وCI runners يومياً." },
  Linux: { fr: "Administration serveur, scripts shell et fondamentaux du déploiement.", ar: "إدارة الخوادم وShell وأساسيات النشر." },
  Terraform: { fr: "Infrastructure déclarative pour garder des environnements reproductibles.", ar: "بنية تحتية تعريفية للحفاظ على بيئات قابلة لإعادة الإنتاج." },
  "Grafana K6": { fr: "Tests de charge et validation des performances avant une release.", ar: "اختبارات الحمل والتحقق من الأداء قبل الإصدار." },
};

export const projectTranslations: Record<string, ProjectLocalizedCopy> = {
  "tdg-management-platform": {
    role: {
      fr: "Développeur full-stack — stagiaire PFE chez Tawer Digital Group",
      ar: "مطور Full-Stack — متدرب مشروع نهاية الدراسة لدى Tawer Digital Group",
    },
    shortDescription: {
      fr: "Un espace unique pour l'exécution des projets, le suivi du temps et la supervision de l'infrastructure de deux unités métier.",
      ar: "مساحة موحدة لتنفيذ المشاريع وتتبع الوقت ومراقبة البنية التحتية لوحدتين تجاريتين.",
    },
    metrics: [
      { fr: "2 unités métier dans un seul espace", ar: "وحدتان تجاريتان في مساحة عمل واحدة" },
      { fr: "12 rôles avec permissions ciblées", ar: "12 دوراً بصلاحيات محددة" },
      { fr: "626 tests de bout en bout", ar: "626 اختباراً من البداية إلى النهاية" },
      { fr: "94,23 % de couverture de code", ar: "94.23٪ تغطية للكود" },
      { fr: "Pipeline Jenkins CI/CD en 4 étapes", ar: "خط CI/CD عبر Jenkins من 4 مراحل" },
    ],
  },
  idigix: {
    role: {
      fr: "Développeur full-stack — stagiaire PFE chez Djagora Foundation",
      ar: "مطور Full-Stack — متدرب مشروع نهاية الدراسة لدى Djagora Foundation",
    },
    shortDescription: {
      fr: "Une plateforme de gestion de profils pour une communauté, avec recherche et filtrage des membres au lieu de documents dispersés.",
      ar: "منصة لإدارة ملفات أعضاء المجتمع مع البحث والتصفية بدلاً من الوثائق المتفرقة.",
    },
    metrics: [
      { fr: "47 profils intégrés pendant le pilote", ar: "إدماج 47 ملفاً خلال المرحلة التجريبية" },
      { fr: "Plus de 500 requêtes par jour", ar: "أكثر من 500 طلب يومياً" },
      { fr: "180 ms de temps de réponse moyen", ar: "180 مللي ثانية متوسط زمن الاستجابة" },
      { fr: "Recherche : 25 s → moins de 10 s", ar: "البحث: 25 ثانية → أقل من 10 ثوانٍ" },
      { fr: "98,7 % de disponibilité pendant 4 mois", ar: "98.7٪ توفر خلال 4 أشهر" },
    ],
  },
  "fablab-tap-profiles": {
    role: {
      fr: "Développeur full-stack — stagiaire chez Djagora FabLab",
      ar: "مطور Full-Stack — متدرب لدى Djagora FabLab",
    },
    shortDescription: {
      fr: "Le partage de profils sans contact pour une communauté de makers : un geste NFC ouvre un CV vivant, toujours à jour.",
      ar: "مشاركة الملفات الشخصية دون لمس لمجتمع المبدعين: لمسة NFC واحدة تفتح سيرة ذاتية محدثة دائماً.",
    },
    metrics: [
      { fr: "34 membres du FabLab intégrés", ar: "إدماج 34 عضواً من FabLab" },
      { fr: "Partage : environ 30 s → moins de 3 s", ar: "المشاركة: حوالي 30 ثانية → أقل من 3 ثوانٍ" },
      { fr: "Environ 90 % de coûts d'impression en moins", ar: "خفض تكاليف الطباعة بحوالي 90٪" },
      { fr: "Pilote de 2 semaines, 3 itérations", ar: "تجربة لمدة أسبوعين و3 جولات تحسين" },
    ],
  },
  "invited-plus": {
    role: {
      fr: "Développeur full-stack (freelance)",
      ar: "مطور Full-Stack (عمل حر)",
    },
    shortDescription: {
      fr: "Une plateforme de gestion d'événements couvrant la planification, les tâches, la collaboration et l'analyse après événement.",
      ar: "منصة لإدارة الأحداث تشمل التخطيط والمهام والتعاون والتحليلات بعد انتهاء الحدث.",
    },
    metrics: [
      { fr: "Gestion des tâches avec tableaux Kanban", ar: "إدارة المهام عبر لوحات Kanban" },
      { fr: "Chat en temps réel, sondages et notifications", ar: "محادثة فورية واستطلاعات وإشعارات" },
      { fr: "RBAC : administrateur, organisateur, invité", ar: "صلاحيات: مدير ومنظم وضيف" },
      { fr: "Vérification e-mail et OAuth Google/GitHub", ar: "تأكيد البريد وOAuth عبر Google وGitHub" },
    ],
  },
  "saleslens-bi": {
    role: {
      fr: "Développeur full-stack et ingénieur BI",
      ar: "مطور Full-Stack ومهندس ذكاء أعمال",
    },
    shortDescription: {
      fr: "Une solution analytique commerciale de bout en bout : entrepôt SQL Server, cube SSAS, API NestJS et tableau de bord Next.js.",
      ar: "منصة متكاملة لتحليلات المبيعات: مستودع SQL Server ومكعب SSAS وواجهة NestJS ولوحة Next.js.",
    },
    metrics: [
      { fr: "Base source → SSIS → entrepôt → cube SSAS → API → dashboard", ar: "قاعدة المصدر ← SSIS ← المستودع ← مكعب SSAS ← API ← لوحة التحكم" },
      { fr: "Vue direction, produits, clients, commerciaux et temps", ar: "تحليل الإدارة والمنتجات والعملاء والمبيعات والوقت" },
      { fr: "Barre de filtres globale partagée partout", ar: "شريط تصفية شامل مشترك بين كل الصفحات" },
      { fr: "Rapports et exports CSV", ar: "تقارير وتصدير بصيغة CSV" },
    ],
  },
  "nim-production": {
    role: {
      fr: "Développeur full-stack (freelance)",
      ar: "مطور Full-Stack (عمل حر)",
    },
    shortDescription: {
      fr: "Une plateforme industrielle de gestion de production et de traçabilité en temps réel, de la réception des pièces au contrôle qualité.",
      ar: "منصة صناعية لإدارة الإنتاج والتتبع الفوري، من استلام القطع إلى مراقبة الجودة.",
    },
    metrics: [
      { fr: "Traçabilité de chaque pièce jusqu'au contrôle qualité", ar: "تتبع كل قطعة حتى مراقبة الجودة" },
      { fr: "Événements de production, affectation et qualité en temps réel", ar: "أحداث الإنتاج والتعيين والجودة في الوقت الفعلي" },
      { fr: "Imports CSV, Tekla HTML .xls et .xlsx", ar: "استيراد CSV وTekla HTML .xls و.xlsx" },
      { fr: "Planification des machines, maintenance et parcours tablette", ar: "تخطيط الآلات والصيانة ومسارات أجهزة المشغلين" },
    ],
    pages: [
      {
        title: { fr: "Tableau de bord du responsable production", ar: "لوحة تحكم مدير الإنتاج" },
        description: { fr: "Une vue opérationnelle en direct de l'avancement, de la charge machine, des pièces en retard, de la qualité et de la maintenance.", ar: "عرض تشغيلي مباشر لتقدم الإنتاج وحمل الآلات والقطع المتأخرة والجودة وأعمال الصيانة." },
      },
      {
        title: { fr: "Atelier de traçabilité", ar: "مساحة عمل التتبع" },
        description: { fr: "Les workflows couvrent les imports, affectations, opérations de production, contrôles qualité et historique append-only.", ar: "تشمل مسارات العمل الاستيراد وتعيين الآلات وتنفيذ الإنتاج وفحوص الجودة وسجل الأحداث غير القابل للحذف." },
      },
    ],
    paragraphs: [
      { fr: "NIM Production est une plateforme industrielle de gestion de production pour La Nouvelle Industrie Des Metaux. Elle rassemble la planification et la traçabilité en temps réel dans un espace partagé par les responsables, opérateurs, contrôleurs qualité et administrateurs.", ar: "NIM Production منصة صناعية لإدارة الإنتاج لصالح La Nouvelle Industrie Des Metaux. تجمع تخطيط الإنتاج والتتبع الفوري في مساحة واحدة للمديرين والمشغلين ومراقبي الجودة والمسؤولين." },
      { fr: "Le domaine suit chaque pièce pendant tout son cycle : Piece → PieceUnit → Assignment → ProductionOperation → QualityControl → HistoryEvent. Cette modélisation rend explicites la progression à l'unité, les réaffectations et les événements audités.", ar: "يتتبع النظام كل قطعة عبر دورة حياتها الكاملة: Piece → PieceUnit → Assignment → ProductionOperation → QualityControl → HistoryEvent. تجعل هذه النمذجة التقدم وإعادة التعيين والأحداث المدققة واضحة." },
      { fr: "L'implémentation est un monorepo pnpm avec une application Next.js/React, une API NestJS, Prisma sur PostgreSQL, TanStack Query/Table, des événements Socket.IO authentifiés et un déploiement Docker.", ar: "التنفيذ عبارة عن monorepo باستخدام pnpm يضم Next.js وReact وواجهة NestJS وPrisma فوق PostgreSQL وTanStack Query/Table وأحداث Socket.IO موثقة وتسليم Docker." },
      { fr: "Le produit comprend des tableaux de bord protégés par rôle, l'administration des machines et opérateurs, la validation des imports CSV/Excel, la planification, l'exécution, le contrôle qualité, les galeries photo et l'historique de traçabilité.", ar: "يشمل المنتج لوحات محمية حسب الدور وإدارة الآلات والمشغلين والتحقق من ملفات CSV وExcel والتخطيط والتنفيذ ومراقبة الجودة ومعارض الصور وسجل التتبع." },
    ],
    bullets: [
      { fr: "Conception du modèle pièce → historique pour une traçabilité industrielle à l'unité.", ar: "تصميم نموذج القطعة ← السجل للتتبع الصناعي على مستوى الوحدة." },
      { fr: "Workflows serveur pour la production, les affectations, la qualité et l'historique audité.", ar: "بناء مسارات خادمية للإنتاج والتعيين والجودة والسجل المدقق." },
      { fr: "Imports avec prévisualisation et validation pour CSV, Tekla HTML .xls et .xlsx.", ar: "تنفيذ معاينة وتحقق من استيراد CSV وTekla HTML .xls و.xlsx." },
      { fr: "Tableaux de bord responsables avec indicateurs de production, qualité, priorité, machines et échéances.", ar: "إضافة لوحات مؤشرات للإنتاج والجودة والأولوية والآلات والمواعيد." },
      { fr: "Mises à jour Socket.IO authentifiées après validation en base de données.", ar: "ربط تحديثات Socket.IO الموثقة بعد تأكيد قاعدة البيانات." },
      { fr: "Monorepo Next.js/NestJS structuré avec Prisma, PostgreSQL et Docker.", ar: "تنظيم monorepo باستخدام Next.js وNestJS وPrisma وPostgreSQL وDocker." },
    ],
  },
  "student-qa-assistant": {
    role: { fr: "Ingénieur IA (freelance)", ar: "مهندس ذكاء اصطناعي (عمل حر)" },
    shortDescription: {
      fr: "Un chatbot NLP qui répond aux questions administratives des étudiants et atteint 78 % de résolution autonome.",
      ar: "روبوت محادثة NLP يجيب عن أسئلة الطلبة الإدارية ويحقق حلاً ذاتياً بنسبة 78٪.",
    },
  },
  spiralis: {
    role: { fr: "Designer et développeur front-end (projet personnel)", ar: "مصمم ومطور Front-End (مشروع شخصي)" },
    shortDescription: {
      fr: "Un site premium pour une marque de soins avec une expérience produit 3D interactive, construit avec Next.js.",
      ar: "واجهة عرض فاخرة لمنتجات العناية بالبشرة مع تجربة ثلاثية الأبعاد تفاعلية باستخدام Next.js.",
    },
  },
  "smartcare-bracelet": {
    role: { fr: "Développeur front-end (projet personnel)", ar: "مطور Front-End (مشروع شخصي)" },
    shortDescription: {
      fr: "Une expérience de landing page premium pour un bracelet connecté destiné aux enfants porteurs de trisomie 21.",
      ar: "تجربة صفحة هبوط فاخرة لسوار متصل مخصص للأطفال من ذوي متلازمة داون.",
    },
  },
  "tensho-academy": {
    role: { fr: "Développeur front-end (projet personnel)", ar: "مطور Front-End (مشروع شخصي)" },
    shortDescription: {
      fr: "Une plateforme complète pour une académie d'arts martiaux avec plus de 20 sections et des pages dédiées.",
      ar: "منصة متكاملة لأكاديمية فنون قتالية تضم أكثر من 20 قسماً وصفحات متخصصة.",
    },
  },
  "iris-mlops-pipeline": {
    role: { fr: "Ingénieur ML / DevOps (projet personnel)", ar: "مهندس ML وDevOps (مشروع شخصي)" },
    shortDescription: {
      fr: "Un pipeline de machine learning reproductible avec données versionnées, expériences suivies, modèle RandomForest et API FastAPI.",
      ar: "خط أنابيب تعلم آلي قابل لإعادة الإنتاج مع بيانات وإصدارات وتجارب ونموذج RandomForest وواجهة FastAPI.",
    },
  },
  devsweeper: {
    role: { fr: "Développeur systèmes (projet personnel)", ar: "مطور أنظمة (مشروع شخصي)" },
    shortDescription: {
      fr: "Un outil CLI Windows en C99 qui détecte les fichiers inutiles des développeurs et récupère l'espace disque en sécurité.",
      ar: "أداة سطر أوامر لنظام Windows بلغة C99 تكتشف مخلفات المطورين وتستعيد مساحة القرص بأمان.",
    },
  },
  "savora-microservices": {
    role: { fr: "Développeur backend (projet personnel)", ar: "مطور Backend (مشروع شخصي)" },
    shortDescription: {
      fr: "Une application de service après-vente en microservices .NET 8, avec front end Blazor WebAssembly et Docker Compose.",
      ar: "تطبيق لخدمة ما بعد البيع مبني على microservices بـ .NET 8 وواجهة Blazor WebAssembly وDocker Compose.",
    },
  },
};

export const experienceTranslations: Record<string, ExperienceLocalizedCopy> = {
  freelance: {
    position: { fr: "Développeur full-stack et ingénieur IA", ar: "مطور Full-Stack ومهندس ذكاء اصطناعي" },
    location: { fr: "Sfax, Tunisie · À distance", ar: "صفاقس، تونس · عن بُعد" },
    description: [
      { fr: "Conception et livraison de produits full-stack pour des clients — assistants IA, plateformes événementielles et tableaux de bord BI.", ar: "تصميم وتسليم منتجات Full-Stack للعملاء — مساعدين للذكاء الاصطناعي ومنصات أحداث ولوحات ذكاء أعمال." },
      { fr: "Livraison de bout en bout : besoins, modélisation des données, API, interface et déploiement en production.", ar: "تنفيذ متكامل يبدأ من المتطلبات ونمذجة البيانات وواجهات API إلى الواجهة والنشر في الإنتاج." },
    ],
    achievements: [
      { fr: "Création d'un chatbot étudiant avec Flask, React et NLP classique, atteignant 78 % de résolution autonome.", ar: "بناء روبوت محادثة للطلبة باستخدام Flask وReact وNLP كلاسيكي حقق حلاً ذاتياً بنسبة 78٪." },
      { fr: "Livraison d'une plateforme événementielle avec tâches, chat temps réel, sondages, notifications, Kanban et permissions.", ar: "تسليم منصة لإدارة الأحداث مع المهام والمحادثة الفورية والاستطلاعات والإشعارات وKanban والصلاحيات." },
      { fr: "Construction d'une plateforme d'analyse commerciale sur SQL Server/SSAS avec API NestJS et dashboard Next.js.", ar: "بناء منصة تحليلات مبيعات فوق SQL Server وSSAS مع API بـ NestJS ولوحة Next.js." },
      { fr: "Maintenance d'outils open source comme DevSweeper et d'un pipeline MLOps reproductible.", ar: "صيانة أدوات مفتوحة المصدر مثل DevSweeper وخط MLOps قابل لإعادة الإنتاج." },
    ],
  },
  "tawer-digital-group": {
    position: { fr: "Développeur full-stack — stagiaire PFE", ar: "مطور Full-Stack — متدرب مشروع نهاية الدراسة" },
    description: [
      { fr: "Architecture de la plateforme TDG Management pour réunir exécution des projets, suivi du temps et supervision de l'infrastructure de deux unités.", ar: "هندسة منصة TDG Management لجمع تنفيذ المشاريع وتتبع الوقت ومراقبة البنية التحتية لوحدتين." },
      { fr: "Conception d'un contrôle d'accès par rôles couvrant 12 rôles avec des permissions ciblées.", ar: "تصميم نظام صلاحيات حسب الدور يغطي 12 دوراً بصلاحيات محددة." },
      { fr: "Intégration de l'API Gemini dans un assistant de planification qui reste volontairement consultatif.", ar: "دمج Gemini API في مساعد تخطيط يقدم اقتراحات فقط ولا يتخذ القرارات." },
      { fr: "Mise en place de 626 tests end-to-end atteignant 94,23 % de couverture.", ar: "إضافة 626 اختباراً من البداية إلى النهاية مع تغطية 94.23٪." },
      { fr: "Automatisation de la livraison avec un pipeline Jenkins CI/CD en quatre étapes.", ar: "أتمتة التسليم عبر خط Jenkins CI/CD من أربع مراحل." },
    ],
    achievements: [
      { fr: "Réunion de l'exécution, du temps et de l'infrastructure de deux unités dans une plateforme.", ar: "جمع تنفيذ المشاريع والوقت والبنية التحتية لوحدتين في منصة واحدة." },
      { fr: "Modélisation et application de 12 rôles avec permissions granulaires.", ar: "نمذجة وتطبيق 12 دوراً بصلاحيات دقيقة." },
      { fr: "Intégration d'un assistant Gemini consultatif pour l'estimation et la priorisation des sprints.", ar: "دمج مساعد Gemini استشاري لتقدير المهام وترتيب أولويات السبرنت." },
      { fr: "94,23 % de couverture avec 626 tests dans le pipeline de livraison.", ar: "تحقيق تغطية 94.23٪ عبر 626 اختباراً ضمن خط التسليم." },
      { fr: "Livraison automatisée avec Jenkins, Nginx, Redis, Docker et Grafana k6.", ar: "أتمتة التسليم باستخدام Jenkins وNginx وRedis وDocker وGrafana k6." },
    ],
  },
  "djagora-foundation": {
    position: { fr: "Développeur full-stack — stagiaire PFE", ar: "مطور Full-Stack — متدرب مشروع نهاية الدراسة" },
    description: [
      { fr: "Architecture d'iDigix, plateforme de gestion de profils qui a intégré 47 profils pendant le pilote.", ar: "هندسة iDigix، منصة لإدارة الملفات أدمجت 47 ملفاً خلال التجربة." },
      { fr: "Construction d'un backend sécurisé traitant plus de 500 requêtes par jour avec une réponse moyenne de 180 ms.", ar: "بناء Backend آمن يعالج أكثر من 500 طلب يومياً بمتوسط استجابة 180 مللي ثانية." },
      { fr: "Optimisation de la recherche sur plus de 12 attributs, réduisant la recherche de 25 secondes à moins de 10.", ar: "تحسين البحث عبر أكثر من 12 خاصية وتقليل الزمن من 25 ثانية إلى أقل من 10." },
      { fr: "Déploiement et maintenance avec 98,7 % de disponibilité en quatre mois sans incident critique.", ar: "نشر وصيانة المنصة بنسبة توفر 98.7٪ خلال أربعة أشهر دون حوادث حرجة." },
    ],
    achievements: [
      { fr: "47 profils intégrés lors du pilote iDigix.", ar: "إدماج 47 ملفاً خلال تجربة iDigix." },
      { fr: "Plus de 500 requêtes quotidiennes avec 180 ms de réponse moyenne.", ar: "معالجة أكثر من 500 طلب يومياً بمتوسط 180 مللي ثانية." },
      { fr: "Recherche réduite de 25 secondes à moins de 10 secondes.", ar: "تقليل زمن البحث من 25 ثانية إلى أقل من 10 ثوانٍ." },
      { fr: "98,7 % de disponibilité pendant quatre mois, sans incident critique.", ar: "توفر بنسبة 98.7٪ خلال أربعة أشهر دون حوادث حرجة." },
      { fr: "Builds et releases automatisés avec Jenkins, Docker et Nginx.", ar: "أتمتة البناء والإصدارات باستخدام Jenkins وDocker وNginx." },
    ],
  },
  "djagora-fablab": {
    position: { fr: "Développeur full-stack — stagiaire", ar: "مطور Full-Stack — متدرب" },
    description: [
      { fr: "Développement d'une plateforme de CV professionnel déployée auprès de 34 membres pour un partage instantané par NFC.", ar: "تطوير منصة للسير الذاتية المهنية نُشرت لـ34 عضواً للمشاركة الفورية عبر NFC." },
      { fr: "Réduction du partage d'un profil d'environ 30 secondes à moins de 3 secondes.", ar: "تقليل مشاركة الملف من حوالي 30 ثانية إلى أقل من 3 ثوانٍ." },
      { fr: "Synchronisation des profils en temps réel, suppression des réimpressions et réduction des coûts d'environ 90 %.", ar: "مزامنة الملفات فورياً وإلغاء إعادة الطباعة وخفض التكاليف بحوالي 90٪." },
      { fr: "Pilotage de deux semaines avec trois itérations de retours avant la livraison.", ar: "تنفيذ تجربة لمدة أسبوعين مع ثلاث جولات ملاحظات قبل التسليم." },
    ],
    achievements: [
      { fr: "Adoption par 34 membres du FabLab pendant le pilote.", ar: "اعتمادها من قبل 34 عضواً خلال التجربة." },
      { fr: "Partage NFC réduit à moins de trois secondes.", ar: "تقليل المشاركة عبر NFC إلى أقل من ثلاث ثوانٍ." },
      { fr: "Réimpressions supprimées grâce à la synchronisation en temps réel.", ar: "إلغاء إعادة الطباعة بفضل المزامنة الفورية." },
      { fr: "Pilote de deux semaines avec trois cycles de feedback.", ar: "تجربة لمدة أسبوعين مع ثلاث دورات من الملاحظات." },
    ],
  },
};

export const educationTranslations: Record<string, EducationLocalizedCopy> = {
  "iit-glid": {
    degree: { fr: "Diplôme d'ingénieur — Génie logiciel et intelligence décisionnelle", ar: "شهادة مهندس — هندسة البرمجيات وذكاء القرار" },
    focus: { fr: "Programme d'ingénierie centré sur l'architecture logicielle, l'intelligence décisionnelle et les systèmes orientés données en production.", ar: "منهج هندسي يركز على هندسة البرمجيات وذكاء القرار والأنظمة المعتمدة على البيانات في الإنتاج." },
    highlights: [
      { fr: "Génie logiciel à grande échelle : architecture, qualité et livraison", ar: "هندسة البرمجيات على نطاق واسع: الهندسة والجودة والتسليم" },
      { fr: "Intelligence décisionnelle : analyse, optimisation et IA appliquée", ar: "ذكاء القرار: التحليل والتحسين والذكاء الاصطناعي التطبيقي" },
    ],
  },
  "iset-master": {
    degree: { fr: "Master professionnel — Génie logiciel et nouvelles technologies", ar: "ماجستير مهني — هندسة البرمجيات والتقنيات الحديثة" },
    focus: { fr: "Systèmes logiciels et réseaux avancés : architectures distribuées, conception de services, sécurité et pratiques modernes de livraison.", ar: "أنظمة البرمجيات والشبكات المتقدمة: الهندسات الموزعة وتصميم الخدمات والأمن وممارسات التسليم الحديثة." },
    highlights: [
      { fr: "Ingénierie des systèmes logiciels et des réseaux", ar: "هندسة أنظمة البرمجيات والشبكات" },
      { fr: "Travaux appliqués sur les plateformes web, mobiles et IA", ar: "أعمال تطبيقية على منصات الويب والهاتف والذكاء الاصطناعي" },
    ],
  },
  "iset-bachelor": {
    degree: { fr: "Licence — Développement des systèmes d'information", ar: "إجازة — تطوير نظم المعلومات" },
    focus: { fr: "Bases des systèmes d'information : programmation, bases de données, développement web et analyse logicielle.", ar: "أساسيات نظم المعلومات: البرمجة وقواعد البيانات وتطوير الويب وتحليل البرمجيات." },
    highlights: [
      { fr: "Premiers projets de production livrés pendant les études", ar: "تسليم أول مشاريع إنتاجية أثناء الدراسة" },
      { fr: "Bases de données, algorithmes et fondamentaux du web", ar: "قواعد البيانات والخوارزميات وأساسيات تطوير الويب" },
    ],
  },
};

export const certificationTranslations: Record<string, CertificationLocalizedCopy> = {
  "Machine Learning with Python": {
    name: { fr: "Machine learning avec Python", ar: "التعلم الآلي باستخدام Python" },
    date: { fr: "mai 2025", ar: "مايو 2025" },
    credential: { fr: "Apprentissage supervisé et non supervisé, prétraitement des données et évaluation des modèles", ar: "التعلم الخاضع للإشراف وغير الخاضع له، معالجة البيانات وتقييم النماذج" },
  },
  "Scrum Fundamentals Certified (SFC™)": {
    name: { fr: "Scrum Fundamentals Certified (SFC™)", ar: "شهادة أساسيات Scrum (SFC™)" },
    date: { fr: "févr. 2024", ar: "فبراير 2024" },
    credential: { fr: "Framework Scrum, principes Agile et guide SBOK® · ID 1015805", ar: "إطار Scrum ومبادئ Agile ودليل SBOK® · المعرّف 1015805" },
  },
};

export const contributionTranslations: Record<string, LocalizedString> = {
  DevSweeper: {
    fr: "CLI Windows ultra-rapide en C99 qui détecte les dossiers inutiles des développeurs et récupère des gigaoctets en sécurité.",
    ar: "أداة CLI سريعة لنظام Windows مكتوبة بـ C99 تكتشف مجلدات المطورين غير الضرورية وتستعيد مساحة كبيرة بأمان.",
  },
  "iris-mlops-pipeline": {
    fr: "Pipeline MLOps complet pour la classification Iris : versionnement des données, suivi des expériences, modèle RandomForest et service FastAPI.",
    ar: "خط MLOps متكامل لتصنيف Iris مع إصدارات للبيانات وتتبع التجارب ونموذج RandomForest وخدمة FastAPI.",
  },
  salesBi: {
    fr: "SalesLens BI : plateforme analytique full-stack sur entrepôt SQL Server et cube SSAS, servie par NestJS et un dashboard Next.js.",
    ar: "SalesLens BI: منصة تحليلات Full-Stack فوق مستودع SQL Server ومكعب SSAS عبر NestJS ولوحة Next.js.",
  },
  SAVORA_MicroService: {
    fr: "Application de service après-vente en microservices .NET 8 avec front end Blazor WebAssembly, SQLite et Docker Compose.",
    ar: "تطبيق لخدمة ما بعد البيع على microservices بـ .NET 8 مع Blazor WebAssembly وSQLite وDocker Compose.",
  },
  Document_Search_System: {
    fr: "Système Java de recherche d'information avec indexation automatique et modèles booléen et vectoriel.",
    ar: "نظام Java لاسترجاع المعلومات مع فهرسة تلقائية ونماذج البحث المنطقي والفضاء المتجهي.",
  },
  InvitedPlus: {
    fr: "Invited+ : plateforme moderne de gestion d'événements avec tâches, collaboration, RBAC, OAuth et vérification e-mail.",
    ar: "Invited+: منصة حديثة لإدارة الأحداث مع المهام والتعاون والصلاحيات وOAuth وتأكيد البريد الإلكتروني.",
  },
};

export const blogTranslations: Record<string, BlogLocalizedCopy> = {
  "ai-chatbot-78-percent-autonomous-resolution": {
    title: { fr: "Construire un chatbot IA qui résout 78 % des questions étudiantes", ar: "بناء روبوت محادثة يحل 78٪ من أسئلة الطلبة بشكل مستقل" },
    description: { fr: "Retour pratique sur la création d'un chatbot administratif avec Flask, React et NLP classique, sans appel à un LLM.", ar: "تجربة عملية لبناء روبوت دعم إداري باستخدام Flask وReact وتقنيات NLP الكلاسيكية دون استخدام LLM." },
  },
  "ai-planning-assistant-gemini": {
    title: { fr: "IA et gestion de projet : intégrer Gemini dans un workflow de planification", ar: "الذكاء الاصطناعي وإدارة المشاريع: دمج Gemini في سير التخطيط" },
    description: { fr: "Comment intégrer Gemini dans un assistant consultatif utile sans lui laisser prendre les décisions qui reviennent aux humains.", ar: "كيفية دمج Gemini في مساعد تخطيط استشاري مفيد دون منحه القرارات التي يجب أن تبقى بيد الإنسان." },
  },
  "fablab-nfc-tap-profile": {
    title: { fr: "De 30 secondes à 3 : réinventer le networking professionnel avec NFC", ar: "من 30 ثانية إلى 3: إعادة تصور التواصل المهني باستخدام NFC" },
    description: { fr: "La construction d'une plateforme de partage de profils sans contact pour une communauté FabLab, avec environ 90 % de réimpressions en moins.", ar: "بناء منصة لمشاركة الملفات المهنية دون لمس لمجتمع FabLab مع تقليل إعادة الطباعة بحوالي 90٪." },
  },
  "tdg-management-platform": {
    title: { fr: "Construire la plateforme TDG Management, de zéro à la production", ar: "بناء منصة TDG Management من الصفر إلى الإنتاج" },
    description: { fr: "Comment réunir l'exécution des projets, le suivi du temps et la supervision de l'infrastructure de deux unités dans un seul espace.", ar: "كيفية جمع تنفيذ المشاريع وتتبع الوقت ومراقبة البنية التحتية لوحدتين في مساحة واحدة." },
  },
};
