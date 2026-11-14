import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  /** My role on the project, shown on the case-study page. */
  role?: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  /** Headline numbers that make the impact of the work concrete. */
  metrics?: string[];
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "tdg-management-platform",
    type: "Professional",
    companyName: "TDG Management Platform",
    role: "Full-Stack Developer — PFE Intern @ Tawer Digital Group",
    category: ["Full Stack", "Backend", "DevOps"],
    shortDescription:
      "One workspace for project execution, time tracking and infrastructure monitoring — consolidating how 2 business units plan and ship work.",
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "Docker",
      "Jenkins",
      "Nginx",
      "LLM Integration",
      "Grafana K6",
    ],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-06-30"),
    companyLogoImg: "/projects/tdg-platform/cover.svg",
    metrics: [
      "2 business units on one workspace",
      "12 user roles with scoped permissions",
      "626 end-to-end tests",
      "94.23% code coverage",
      "4-stage Jenkins CI/CD pipeline",
    ],
    pagesInfoArr: [
      {
        title: "Platform architecture",
        description:
          "Next.js front end on a NestJS API, with Prisma over PostgreSQL, Redis for caching, Firebase for notifications and a 4-stage Jenkins pipeline delivering behind Nginx.",
        imgArr: ["/projects/tdg-platform/architecture.svg"],
      },
      {
        title: "What it replaced",
        description:
          "Project execution, time tracking and infrastructure monitoring previously lived in separate tools per business unit — this consolidated them into a single workspace with shared reporting.",
        imgArr: ["/projects/tdg-platform/cover.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The TDG Management Platform was my final-year engineering project at Tawer Digital Group. The goal was to consolidate project execution, time tracking and infrastructure monitoring into a single workspace shared by 2 business units.",
        "I designed a granular role-based access control model covering 12 user roles, with permissions scoped and enforced consistently across every module rather than checked ad hoc in the UI.",
        "To support planning, I integrated Google's Gemini API into an AI planning assistant that suggests task estimates and sprint priorities. The assistant is deliberately advisory-only: it never writes to the plan, so engineers stay in control.",
        "Quality was automated rather than hoped for — 626 end-to-end tests reached 94.23% code coverage, and delivery runs through a 4-stage Jenkins pipeline from source control to deployment. The stack runs containerised behind Nginx, with Redis caching and Grafana k6 load tests validating performance.",
      ],
      bullets: [
        "Consolidated project execution, time tracking and infrastructure monitoring for 2 business units into one workspace.",
        "Designed and enforced a granular RBAC system covering 12 user roles with module-scoped permissions.",
        "Integrated Google's Gemini API into an advisory-only AI planning assistant for estimation and sprint prioritisation.",
        "Built a multi-channel notification engine for assignment, deadline and status events.",
        "Automated quality assurance with 626 end-to-end tests reaching 94.23% code coverage.",
        "Automated production delivery with a 4-stage Jenkins CI/CD pipeline.",
      ],
    },
  },
{
    id: "idigix",
    type: "Professional",
    companyName: "iDigix",
    role: "Full-Stack Developer — PFE Intern @ Djagora Foundation",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "An online profile-management platform for a foundation community — searchable member profiles that replaced scattered documents and slow manual lookups.",
    techStack: ["React", "ASP.NET Core", "C#", "SQLite", "Nginx", "Docker", "Jenkins", "CI/CD"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-30"),
    companyLogoImg: "/projects/idigix/cover.svg",
    metrics: [
      "47 member profiles onboarded in the pilot",
      "500+ requests/day served",
      "180 ms average response time",
      "Profile lookup: 25 s → under 10 s",
      "98.7% uptime over 4 months",
    ],
    pagesInfoArr: [
      {
        title: "Profile management",
        description:
          "Members create and maintain a structured profile — skills, experience and contact details — that the foundation can search and filter across 12+ attributes.",
        imgArr: ["/projects/idigix/cover.svg"],
      },
      {
        title: "Search & filtering",
        description:
          "Server-side filtering and pagination cut the average lookup time from 25 seconds to under 10 seconds for the same queries.",
        imgArr: ["/projects/idigix/search.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "iDigix is an online profile-management platform I architected during my internship at Djagora Foundation. It gives a member community a single, searchable source of truth for profiles that were previously spread across documents and manual lists.",
        "During the pilot phase the platform onboarded 47 member profiles. I built the backend to stay fast under real usage — serving 500+ requests per day at an average response time of 180 ms.",
        "Search was the part users felt most. I optimised filtering across 12+ attributes, which cut average lookup time from about 25 seconds to under 10 seconds.",
        "Deployment and maintenance were part of the work too: the application ran in production for 4 months with 98.7% uptime and zero critical incidents, with builds and releases automated through Jenkins and containers served behind Nginx.",
      ],
      bullets: [
        "Architected and shipped the platform, onboarding 47 member profiles during the pilot.",
        "Built a scalable, secure backend handling 500+ requests/day at ~180 ms average response time.",
        "Optimised profile search and filtering across 12+ attributes, reducing lookup from ~25 s to under 10 s.",
        "Ran the platform in production with 98.7% uptime over 4 months and zero critical incidents.",
        "Automated build and release with Jenkins and containerised delivery behind Nginx.",
        "Integrated directly with the foundation's team, iterating on feedback through the pilot.",
      ],
    },
  },
  {
    id: "fablab-tap-profiles",
    type: "Professional",
    companyName: "FabLab Tap Card Profiles",
    role: "Full-Stack Developer — Intern @ Djagora FabLab",
    category: ["Full Stack", "Mobile Dev", "UI/UX"],
    shortDescription:
      "Contactless profile sharing for a maker community: one tap on an NFC card opens a live CV that keeps itself up to date — no reprints, no manual card exchange.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Docker"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-08-31"),
    companyLogoImg: "/projects/fablab-tap/cover.svg",
    metrics: [
      "34 FabLab members onboarded",
      "Sharing time: ~30 s → under 3 s",
      "Estimated ~90% lower print costs",
      "2-week pilot, 3 feedback iterations",
    ],
    pagesInfoArr: [
      {
        title: "Tap to share",
        description:
          "Each member carries an NFC card. A single contactless tap opens their profile page — ready to show, and always current, without an app install.",
        imgArr: ["/projects/fablab-tap/cover.svg"],
      },
      {
        title: "Live profiles, no reprints",
        description:
          "Profiles are edited in the web app and synced to every shared card instantly, so members never need a new physical card after a role or project change.",
        imgArr: ["/projects/fablab-tap/tap.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The FabLab tap-card project replaced classic business cards inside a maker community. Instead of swapping paper, each of the 34 members carries an NFC card that opens their own live profile page.",
        "The experience is the point: profile sharing dropped from roughly 30 seconds of manual card exchange to under 3 seconds per interaction.",
        "Because the profile lives in the application rather than on the card, updates sync everywhere immediately. That removed reprints entirely and cut related material costs by an estimated 90%.",
        "I ran a 2-week pilot with the FabLab team, iterating through 3 rounds of feedback before handover — the version that shipped reflected how people actually used it.",
      ],
      bullets: [
        "Deployed to 34 FabLab members for instant profile sharing via a single contactless tap.",
        "Reduced profile-sharing time from ~30 s to under 3 s per interaction.",
        "Enabled real-time profile updates across shared cards, eliminating reprints and cutting material costs by ~90%.",
        "Built the React front end, Node.js/Express API and MongoDB data layer, packaged with Docker.",
        "Completed a 2-week pilot with 3 rounds of feedback before final handover.",
      ],
    },
  },
  {
    id: "invited-plus",
    type: "Freelance",
    companyName: "Invited+",
    role: "Full-Stack Developer (Freelance)",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "An event-management platform covering the whole lifecycle — planning, task management, team collaboration and post-event analytics in one product.",
    websiteLink: "https://invited-plus.vercel.app",
    githubLink: "https://github.com/ahmed-khlif/InvitedPlus",
    techStack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    startDate: new Date("2025-07-22"),
    endDate: new Date("2025-09-29"),
    companyLogoImg: "/projects/invited-plus/cover.png",
    metrics: [
      "Task management with Kanban boards",
      "Real-time chat, polls & notifications",
      "RBAC: admin, organizer, guest",
      "Email verification + OAuth (Google, GitHub)",
    ],
    pagesInfoArr: [
      {
        title: "Landing & product surface",
        description:
          "A focused landing page that explains the workflow, then hands off to authenticated event workspaces.",
        imgArr: ["/projects/invited-plus/cover.png"],
      },
      {
        title: "Collaboration core",
        description:
          "Events, tasks and boards are the backbone; chat, polls and notifications keep everyone in sync without leaving the platform.",
        imgArr: ["/projects/invited-plus/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Invited+ is an event-management platform I designed and built end to end. It streamlines planning, task management and team collaboration for events of any size — from a simple creation flow to complex multi-user project management.",
        "Authentication is production-grade: email verification with 6-digit codes, secure token-based password reset, OAuth through Google and GitHub, and profile management with avatar upload.",
        "Access is role-based across admin, organizer and guest, so an event team can hand out exactly the permissions each collaborator needs.",
        "Collaboration features sit on top of that foundation — Kanban boards and task management, real-time chat, polls, notifications, and analytics to see how an event is tracking.",
      ],
      bullets: [
        "Built a comprehensive event-management platform with Next.js, Prisma and PostgreSQL.",
        "Implemented email verification (6-digit codes), password reset and OAuth with Google and GitHub.",
        "Designed role-based access control for admin, organizer and guest roles.",
        "Delivered task management with Kanban boards, real-time chat, polls and notifications.",
        "Added analytics so organisers can track progress instead of guessing.",
        "Open-sourced the codebase on GitHub and deployed it on Vercel.",
      ],
    },
  },
  {
    id: "saleslens-bi",
    type: "Freelance",
    companyName: "SalesLens BI",
    role: "Full-Stack Developer & BI Engineer",
    category: ["Data & BI", "Full Stack", "Backend"],
    shortDescription:
      "Sales analytics end to end — a SQL Server warehouse and SSAS multidimensional cube behind a NestJS API and a Next.js dashboard built for exploration.",
    githubLink: "https://github.com/ahmed-khlif/salesBi",
    techStack: ["SQL Server", "NestJS", "Next.js", "TypeScript"],
    startDate: new Date("2026-06-05"),
    endDate: new Date("2026-06-06"),
    companyLogoImg: "/projects/saleslens-bi/cover.svg",
    metrics: [
      "Source DB → SSIS → warehouse → SSAS cube → API → dashboard",
      "Executive overview plus products, customers, reps and time analysis",
      "Global filter bar shared across every page",
      "Reports and CSV-style exports instead of spreadsheet digging",
    ],
    pagesInfoArr: [
      {
        title: "BI architecture",
        description:
          "An SSAS multidimensional cube sits on a modelled data warehouse loaded through SSIS. A NestJS API exposes the analytics, and a Next.js dashboard turns them into answers.",
        imgArr: ["/projects/saleslens-bi/architecture.svg"],
      },
      {
        title: "Dashboard surface",
        description:
          "Executive overview, products, customers, sales reps, time analysis, calendar, explorer, reports and settings — all driven by one shared global filter.",
        imgArr: ["/projects/saleslens-bi/cover.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "SalesLens BI is an end-to-end sales analytics platform. Rather than analysing an operational database directly, the project models the data properly: source database → SSIS → data warehouse → SSAS multidimensional cube.",
        "On top of the cube I built a NestJS analytics API and a Next.js dashboard, with shared contract types between them so the front end and API cannot drift apart.",
        "The dashboard is built for exploration rather than one-off reports: an executive overview plus products, customers, sales reps, time analysis, calendar, explorer, reports and settings routes.",
        "A single global filter bar is shared across every page, so narrowing to a region or period carries through the whole analysis instead of being re-entered page by page. Export capabilities close the loop for people who still need a file.",
      ],
      bullets: [
        "Modelled a SQL Server data warehouse and SSAS multidimensional cube for sales analysis.",
        "Built a NestJS analytics API with shared TypeScript contracts to the front end.",
        "Delivered a Next.js dashboard with an executive overview and dedicated analysis routes.",
        "Implemented a global filter bar shared across all pages plus export capabilities.",
        "Covered products, customers, sales reps, time, calendar, explorer and reports views.",
      ],
    },
  },
  {
    id: "nim-production",
    type: "Freelance",
    companyName: "NIM Production",
    role: "Full-Stack Developer (Freelance)",
    category: ["Full Stack", "Backend", "DevOps"],
    shortDescription:
      "An industrial production-management and real-time traceability platform that connects piece intake, machine assignments, production, quality control and audited history.",
    githubLink: "https://github.com/ahmed-khlif/NIM_production",
    techStack: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Socket.io", "Docker"],
    startDate: new Date("2026-11-08"),
    endDate: new Date("2026-11-14"),
    companyLogoImg: "/projects/nim-production/cover.png",
    metrics: [
      "Piece-level traceability from intake to quality control",
      "Realtime production, assignment and quality events after DB commit",
      "CSV, Tekla HTML .xls and .xlsx import workflows",
      "Machine planning, maintenance and operator tablet flows",
    ],
    pagesInfoArr: [
      {
        title: "Production manager dashboard",
        description:
          "A live operational view of production progress, machine load, delayed pieces, quality status, recent activity and maintenance work.",
        imgArr: ["/projects/nim-production/cover.png"],
      },
      {
        title: "Traceability workbench",
        description:
          "Piece and unit-level workflows cover imports, machine assignments, production execution, quality checks and append-only history across the full lifecycle.",
        imgArr: ["/projects/nim-production/screens.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "NIM Production is an industrial production-management platform for La Nouvelle Industrie Des Metaux. It brings production planning and real-time traceability into one workspace for managers, operators, quality controllers and administrators.",
        "The core domain follows each piece through its full lifecycle: Piece -> PieceUnit -> Assignment -> ProductionOperation -> QualityControl -> HistoryEvent. That model keeps quantity-one progression, reassignment history and audited production events explicit instead of hiding them in UI state.",
        "The implementation is a pnpm monorepo with a Next.js and React application shell, a NestJS API, Prisma over PostgreSQL, TanStack Query/Table, authenticated Socket.IO realtime events and Docker-based delivery.",
        "The current product includes role-protected dashboards, machine and operator administration, import validation for CSV and Excel sources, machine planning, production execution, quality control, authenticated piece-photo galleries and traceability history.",
      ],
      bullets: [
        "Designed the piece-to-history domain model for unit-level industrial traceability.",
        "Built server-backed production, machine assignment, quality control and audited history workflows.",
        "Implemented import preview and commit flows for CSV, Tekla HTML .xls and .xlsx files with validation feedback.",
        "Added manager dashboards with production, quality, priority, machine and due-date metrics.",
        "Connected authenticated Socket.IO realtime updates after database commit for production, planning, assignment and quality events.",
        "Structured the application as a Next.js/NestJS monorepo with Prisma, PostgreSQL and Docker delivery.",
      ],
    },
  },
  {
    id: "student-qa-assistant",
    type: "Freelance",
    companyName: "Student Q&A Assistant",
    role: "AI Engineer (Freelance)",
    category: ["AI / ML", "Backend", "Full Stack"],
    shortDescription:
      "An NLP chatbot that answers students' administrative questions — reaching 78% autonomous resolution, so most people never need to wait for a human.",
    techStack: ["Python", "Flask", "React", "NLTK", "Scikit-learn"],
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-11-30"),
    companyLogoImg: "/projects/student-qa/cover.svg",
    metrics: [
      "78% of queries resolved without human intervention",
      "Classical NLP: TF-IDF, Word2Vec, FastText",
      "Naive Bayes & KNN intent models",
      "React chat UI on a Flask + Python API",
    ],
    pagesInfoArr: [
      {
        title: "Conversation flow",
        description:
          "Students ask in natural language. The assistant classifies intent, retrieves the relevant administrative answer and only escalates to a person when confidence drops.",
        imgArr: ["/projects/student-qa/cover.svg"],
      },
      {
        title: "NLP pipeline",
        description:
          "Text is cleaned, tokenised and vectorised with TF-IDF, Word2Vec and FastText embeddings, then classified with Naive Bayes and KNN to pick the right answer.",
        imgArr: ["/projects/student-qa/pipeline.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Student Q&A Assistant was built to take the load off student administrative enquiries — the repeated questions that consume staff time and leave students waiting.",
        "The pipeline is deliberately classical rather than trendy: text cleaning and tokenisation with NLTK, feature extraction using TF-IDF alongside Word2Vec and FastText embeddings, and intent classification with Naive Bayes and KNN models.",
        "The result is measurable: 78% of queries were resolved autonomously, without a human in the loop, while low-confidence questions still route to a person rather than guessing.",
        "The product wraps this in a Flask API with a React chat interface, so the model stays a service and the interface stays free to evolve.",
      ],
      bullets: [
        "Built an AI chatbot with Flask and React for student administrative queries.",
        "Achieved 78% autonomous resolution without human intervention.",
        "Implemented NLP techniques with NLTK: TF-IDF, Word2Vec and FastText.",
        "Trained and compared Naive Bayes and KNN classification models.",
        "Designed a confidence-aware escalation path so uncertain answers reach a human.",
        "Kept the model behind a Flask API so the interface and model can evolve independently.",
      ],
    },
  },
  {
    id: "spiralis",
    type: "Personal",
    companyName: "SPIRALIS",
    role: "Design & Front-end Developer (Personal project)",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "A premium skincare showcase: a complete marketing site plus an interactive 3D product experience, built with Next.js and a strong art direction.",
    websiteLink: "https://spiralis-mocha.vercel.app",
    githubLink: "https://github.com/ahmed-khlif/SPIRALIS",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    startDate: new Date("2026-07-02"),
    endDate: new Date("2026-07-03"),
    companyLogoImg: "/projects/spiralis/cover.png",
    metrics: [
      "8 routes: produits, gamme, routine, recharge, actifs, à propos…",
      "Interactive 3D product exploration",
      "Motion-led, mobile-first layout",
      "Deployed on Vercel",
    ],
    pagesInfoArr: [
      {
        title: "Product showcase",
        description:
          "The range, routines and refills are presented as a guided narrative — typography and spacing do the work rather than decoration.",
        imgArr: ["/projects/spiralis/cover.png"],
      },
      {
        title: "3D experience",
        description:
          "A dedicated route lets visitors explore the product in three dimensions, with the rest of the site kept deliberately calm so the moment lands.",
        imgArr: ["/projects/spiralis/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "SPIRALIS is a product-showcase site I built end to end — design direction, front-end implementation and deployment — for a skincare brand aimed at combination to oily skin.",
        "It is a full marketing surface rather than a single page: products, the range, routines, refills, active ingredients, an about section and contact, all sharing one consistent visual language.",
        "The centrepiece is an interactive 3D experience route where the product can be explored in three dimensions — the kind of moment that only works when the surrounding pages stay restrained.",
        "Everything is built with Next.js, TypeScript and Tailwind CSS, with Framer Motion handling the micro-interactions, then deployed on Vercel.",
      ],
      bullets: [
        "Designed and built a complete product-showcase site with 8 routes from scratch.",
        "Implemented an interactive 3D product experience page.",
        "Established a consistent typographic and motion system with Tailwind CSS and Framer Motion.",
        "Built mobile-first and responsive across all breakpoints.",
        "Shipped and deployed the production build on Vercel.",
      ],
    },
  },
  {
    id: "smartcare-bracelet",
    type: "Personal",
    companyName: "SmartCare Bracelet",
    role: "Front-end Developer (Personal project)",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "A premium landing experience for a connected bracelet concept designed for children with Down syndrome — clarity for families, polish for the pitch.",
    websiteLink: "https://smart-care-puce.vercel.app",
    githubLink: "https://github.com/ahmed-khlif/SmartCare",
    techStack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    startDate: new Date("2026-01-03"),
    endDate: new Date("2026-02-12"),
    companyLogoImg: "/projects/smartcare/cover.png",
    metrics: [
      "Premium landing page for a medical-device concept",
      "Family-first content hierarchy",
      "Animation-led, fully responsive UI",
      "Deployed on Vercel",
    ],
    pagesInfoArr: [
      {
        title: "Landing experience",
        description:
          "The device story is told in order: what it is, why it matters for families, and what it does day to day — without diving straight into specifications.",
        imgArr: ["/projects/smartcare/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "SmartCare Bracelet is a landing experience for a connected medical-device concept aimed at children with Down syndrome — a product that has to communicate care, not just capability.",
        "The design work was about hierarchy and tone: reassuring language, generous spacing and a clear narrative that leads with what the bracelet does for a family before touching on how it works.",
        "It is built as a modern Next.js site with Tailwind CSS and motion used deliberately — enough to feel premium and current, never enough to distract from the message.",
        "The project is finished and deployed, which is what makes it a useful reference for how I approach product marketing surfaces.",
      ],
      bullets: [
        "Designed and built a premium landing page for a smart medical-device concept.",
        "Structured content around families first, then device detail.",
        "Implemented a responsive, animation-led interface with Tailwind CSS.",
        "Deployed the production site on Vercel.",
      ],
    },
  },
  {
    id: "tensho-academy",
    type: "Personal",
    companyName: "Tensho International Sports Academy",
    role: "Front-end Developer (Personal project)",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "A full academy platform for a martial-arts organisation: a 20+ section landing page plus dedicated pages for programs, masters, certificates and events.",
    websiteLink: "https://tensho-project.vercel.app",
    githubLink: "https://github.com/ahmed-khlif/tensho_Project",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    startDate: new Date("2026-04-11"),
    endDate: new Date("2026-04-12"),
    companyLogoImg: "/projects/tensho/cover.png",
    metrics: [
      "20+ section landing page",
      "Dedicated routes: programs, masters, certificates, events, shop, dashboard…",
      "Custom magnetic cursor, particles and scroll progress",
      "Mobile-first across all breakpoints",
    ],
    pagesInfoArr: [
      {
        title: "Landing page",
        description:
          "More than 20 sections — hero, about, stats, programs, masters, academies, certificates, membership, events and testimonials — assembled into one continuous story.",
        imgArr: ["/projects/tensho/cover.png"],
      },
      {
        title: "Academy system pages",
        description:
          "Full pages for about, blogs, calendar, certificates, contact, dashboard, events, FAQ, gallery, leadership, login, masters, membership, programs, register, resources, shop and testimonials.",
        imgArr: ["/projects/tensho/cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Tensho is the largest front-end build in my personal portfolio: a complete platform for an international martial-arts academy covering certification, dojo management and membership.",
        "The landing page alone runs to more than 20 sections, and a full set of dedicated routes handles everything from the program catalogue to certificates, events, resources and a member dashboard.",
        "The interaction layer is where the craft shows — a custom magnetic cursor, particle background, scroll progress indicator, parallax reveals and magnetic buttons, all built with Framer Motion.",
        "Throughout, the layout is mobile-first and adaptive, so the experience holds together from a phone screen up to a desktop display.",
      ],
      bullets: [
        "Built a 20+ section single-page landing experience for a martial-arts academy.",
        "Delivered dedicated pages for programs, masters, certificates, events, membership, shop, gallery, FAQ and more.",
        "Implemented a magnetic cursor, particle background, scroll progress and parallax motion.",
        "Built mobile-first with adaptive layouts across all screen sizes.",
        "Shipped with Next.js, TypeScript, Tailwind CSS and Framer Motion, deployed on Vercel.",
      ],
    },
  },
  {
    id: "iris-mlops-pipeline",
    type: "Personal",
    companyName: "Iris MLOps Pipeline",
    role: "ML / DevOps Engineer (Personal project)",
    category: ["AI / ML", "DevOps", "Backend"],
    shortDescription:
      "A reproducible machine-learning pipeline: versioned data, tracked experiments, a packaged RandomForest model and a FastAPI service that serves it.",
    githubLink: "https://github.com/ahmed-khlif/iris-mlops-pipeline",
    techStack: ["Python", "Scikit-learn", "FastAPI", "Pandas", "NumPy"],
    startDate: new Date("2025-04-28"),
    endDate: new Date("2025-05-05"),
    companyLogoImg: "/projects/iris-mlops/cover.svg",
    metrics: [
      "Version-controlled data and training runs",
      "RandomForest classifier with evaluation",
      "Model packaged and served through FastAPI",
      "Reproducible env: venv + pinned requirements",
    ],
    pagesInfoArr: [
      {
        title: "Pipeline stages",
        description:
          "Data preparation → training → evaluation → packaging → serving. Each stage is a script you can re-run and get the same result from.",
        imgArr: ["/projects/iris-mlops/pipeline.svg"],
      },
      {
        title: "Inference API",
        description:
          "The trained model is exposed through a FastAPI endpoint, so the pipeline ends in something a product could actually call.",
        imgArr: ["/projects/iris-mlops/cover.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project exists because training a model is the easy half. I wanted the other half: a workflow where the data, the experiment and the served model are all reproducible.",
        "The pipeline covers data preparation, training a RandomForestClassifier, evaluating it, packaging the artefact and serving predictions through a FastAPI endpoint.",
        "Environments are pinned and virtualised so a fresh machine produces the same result, and each stage is a standalone script — which makes the whole thing something you can inspect rather than trust.",
        "It is a small dataset on purpose. The point of the project is the shape of the pipeline, not the accuracy on Iris.",
      ],
      bullets: [
        "Built an end-to-end MLOps pipeline for Iris flower classification.",
        "Trained and evaluated a RandomForestClassifier with reproducible runs.",
        "Packaged the model artefact and served predictions via a FastAPI endpoint.",
        "Kept environments reproducible with virtualenv and pinned requirements.",
        "Structured each stage as an independent, re-runnable script.",
      ],
    },
  },
  {
    id: "devsweeper",
    type: "Personal",
    companyName: "DevSweeper",
    role: "Systems Developer (Personal project)",
    category: ["Systems", "Backend", "DevOps"],
    shortDescription:
      "A Windows-native command-line tool written in pure C99 that finds developer junk — node_modules, .venv, build, dist, target — and reclaims the disk space safely.",
    githubLink: "https://github.com/ahmed-khlif/DevSweeper",
    techStack: ["C", "Git"],
    startDate: new Date("2026-07-13"),
    endDate: new Date("2026-07-13"),
    companyLogoImg: "/projects/devsweeper/cover.svg",
    metrics: [
      "Zero runtime dependencies — pure C99 and Win32",
      "Finds node_modules, .venv, build, dist, target and more",
      "Git-aware detection with cloud-sync warnings",
      "Safe deletion with full logging",
    ],
    pagesInfoArr: [
      {
        title: "Scan and report",
        description:
          "A recursive scan reports what each junk folder is costing you, presented in coloured tables so the biggest wins are obvious at a glance.",
        imgArr: ["/projects/devsweeper/cover.svg"],
      },
      {
        title: "Safe by design",
        description:
          "Deletion is deliberate: Git-aware checks, warnings for cloud-synced directories, and a log of everything removed.",
        imgArr: ["/projects/devsweeper/safety.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "DevSweeper scratches a personal itch: developer machines quietly fill with node_modules, .venv, build, dist and target folders until gigabytes have vanished.",
        "I built it in pure C99 against Win32 with no runtime dependencies, because a cleanup tool that needs an installer and a framework to remove build artefacts is missing the point.",
        "It scans and reports rather than deleting blindly: coloured tables make the cost of each folder visible, detection is Git-aware so repositories are treated with care, and cloud-synced directories raise warnings.",
        "Deletion is logged in full, so nothing disappears without a record of what happened — which is exactly what you want from a tool pointed at your disk.",
      ],
      bullets: [
        "Wrote a Windows-native CLI in pure C99 with no runtime dependencies.",
        "Implemented fast recursive scanning for common developer junk folders.",
        "Added Git-aware detection and cloud-sync warnings to avoid destructive mistakes.",
        "Built coloured, readable reporting of reclaimable space per folder.",
        "Implemented safe deletion with complete logging of removed paths.",
      ],
    },
  },
  {
    id: "savora-microservices",
    type: "Personal",
    companyName: "SAVORA — After-Sales Service",
    role: "Backend Developer (Personal project)",
    category: ["Backend", "Full Stack", "DevOps"],
    shortDescription:
      "An after-sales service (SAV) application built as .NET 8 microservices, with a Blazor WebAssembly front end and Docker Compose orchestration.",
    githubLink: "https://github.com/ahmed-khlif/SAVORA_MicroService",
    techStack: ["ASP.NET Core", "C#", "Blazor", "SQLite", "Docker"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-01-02"),
    companyLogoImg: "/projects/savora/cover.svg",
    metrics: [
      ".NET 8 microservices architecture",
      "Blazor WebAssembly front end",
      "Per-service persistence with SQLite",
      "Docker Compose orchestration",
    ],
    pagesInfoArr: [
      {
        title: "Service architecture",
        description:
          "The after-sales domain is split into independently deployable .NET 8 services, each owning its own data and exposed as an API.",
        imgArr: ["/projects/savora/architecture.svg"],
      },
      {
        title: "Client application",
        description:
          "A Blazor WebAssembly front end consumes the services directly in the browser, giving the SAV team one interface across claims, repairs and customer history.",
        imgArr: ["/projects/savora/cover.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "SAVORA is an after-sales service application — service après-vente — covering the workflow a company needs after a product is sold.",
        "It is built as a microservices system on .NET 8 rather than a monolith, so each part of the after-sales domain can be developed and deployed independently with its own data store.",
        "The client is a Blazor WebAssembly application, which keeps the front end in C# and lets the browser talk to the services without a separate JavaScript layer.",
        "Docker Compose brings the whole system up locally in one command, which is what makes a multi-service architecture practical during development.",
      ],
      bullets: [
        "Designed and built an after-sales (SAV) application on a .NET 8 microservices architecture.",
        "Implemented independently deployable services with their own SQLite persistence.",
        "Built a Blazor WebAssembly front end in C# against the service APIs.",
        "Orchestrated the full stack with Docker Compose for one-command local startup.",
        "Documented the architecture and setup so the project can be picked up by anyone.",
      ],
    },
  },
];

/**
 * Home-page highlights. Kept explicit so the curation is intentional rather
 * than "whatever happens to be first in the array".
 */
export const featuredProjectIds = [
  "tdg-management-platform",
  "invited-plus",
  "smartcare-bracelet",
];

export const featuredProjects = featuredProjectIds
  .map((id) => Projects.find((project) => project.id === id))
  .filter(Boolean) as ProjectInterface[];
