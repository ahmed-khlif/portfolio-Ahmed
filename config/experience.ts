import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "freelance",
    position: "Full-Stack Developer & AI Engineer",
    company: "Independent / Freelance",
    location: "Sfax, Tunisia · Remote",
    startDate: new Date("2023-05-01"),
    endDate: "Present",
    description: [
      "Designing and shipping full-stack products for clients — from AI assistants and event platforms to business intelligence dashboards.",
      "Delivering end-to-end: requirements, data modelling, API design, frontend implementation and production deployment.",
    ],
    achievements: [
      "Built an AI student-assistant chatbot with Flask, React and classical NLP (NLTK, TF-IDF, Word2Vec, FastText) plus Naive Bayes and KNN models, reaching 78% autonomous resolution of administrative queries without human intervention.",
      "Delivered an event-management platform with task management, real-time chat, polls and notifications, including Kanban boards, role-based permissions and usage analytics.",
      "Built a full-stack sales analytics platform on a SQL Server data warehouse and SSAS multidimensional cube, exposing analytics through a NestJS API and a Next.js dashboard with global filtering and export capabilities.",
      "Own and maintain open-source tooling — including DevSweeper (a C99 Windows disk-cleanup CLI) and a reproducible MLOps pipeline for model training, packaging and serving.",
    ],
    skills: ["Next.js", "NestJS", "React", "Python", "Flask", "NLTK", "Scikit-learn", "SQL Server", "PostgreSQL"],
    companyUrl: "https://github.com/ahmed-khlif",
    logo: "/experience/freelance-logo.svg",
  },
  {
    id: "tawer-digital-group",
    position: "Full-Stack Developer — PFE Intern",
    company: "Tawer Digital Group",
    location: "Sfax, Tunisia",
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-06-30"),
    description: [
      "Architected the TDG Management Platform, consolidating project execution, time tracking and infrastructure monitoring into a single workspace across 2 business units.",
      "Designed a granular role-based access control system covering 12 user roles, with scoped permissions enforced across every module.",
      "Integrated Google's Gemini API into an AI planning assistant for task estimation and sprint prioritisation, keeping AI features advisory-only.",
      "Built a multi-channel notification engine and automated quality assurance with 626 end-to-end tests reaching 94.23% code coverage.",
      "Automated production delivery through a 4-stage Jenkins CI/CD pipeline, from source control to deployment.",
    ],
    achievements: [
      "Consolidated project execution, time tracking and infrastructure monitoring for 2 business units into one platform.",
      "Modelled and enforced 12 user roles with scoped, granular permissions across all modules.",
      "Integrated Google's Gemini API into an advisory-only AI planning assistant for task estimation and sprint prioritisation.",
      "Reached 94.23% code coverage with 626 end-to-end tests wired into the delivery pipeline.",
      "Automated production delivery with a 4-stage Jenkins CI/CD pipeline (source control → build → test → deploy).",
      "Operated the stack behind Nginx with Redis caching and Grafana k6 load testing on Docker.",
    ],
    skills: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Firebase", "Redis", "Docker", "Jenkins", "Nginx", "Grafana K6", "LLM Integration"],
    companyUrl: "https://tawer.tn",
    logo: "/experience/tawer-logo.svg",
  },
  {
    id: "djagora-foundation",
    position: "Full-Stack Developer — PFE Intern",
    company: "Djagora Foundation",
    location: "Sfax, Tunisia",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-30"),
    description: [
      "Architected iDigix, an online profile-management platform that onboarded 47 member profiles during the pilot phase.",
      "Built a scalable, secure backend serving 500+ requests/day with an average response time of 180 ms.",
      "Optimised profile search and filtering across 12+ attributes, cutting average lookup time from 25 s to under 10 s.",
      "Deployed and maintained the platform in production, reaching 98.7% uptime over 4 months with zero critical incidents.",
    ],
    achievements: [
      "Onboarded 47 member profiles during the iDigix pilot phase.",
      "Served 500+ requests/day at an average of 180 ms response time.",
      "Reduced profile lookup time from ~25 s to under 10 s across 12+ filterable attributes.",
      "Maintained 98.7% uptime over 4 months in production with zero critical incidents.",
      "Automated builds and releases with Jenkins and shipped containers behind Nginx.",
    ],
    skills: ["React", "ASP.NET Core", "C#", "SQLite", "Docker", "Nginx", "Jenkins", "CI/CD"],
    companyUrl: "https://djagora.com",
    logo: "/experience/djagora-logo.svg",
  },
  {
    id: "djagora-fablab",
    position: "Full-Stack Developer — Intern",
    company: "Djagora FabLab",
    location: "Sfax, Tunisia",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-08-31"),
    description: [
      "Developed a professional CV management platform, deployed to 34 FabLab members for instant profile sharing via a single contactless tap.",
      "Reduced profile-sharing time from roughly 30 s (manual card exchange) to under 3 s per interaction.",
      "Enabled real-time profile updates synced across shared cards, removing reprints and cutting related material costs by an estimated 90%.",
      "Ran a 2-week pilot with the FabLab team, iterating through 3 rounds of feedback before final handover.",
    ],
    achievements: [
      "Adopted by 34 FabLab members during the pilot.",
      "Cut profile-sharing time from ~30 s to under 3 s per interaction using NFC.",
      "Removed reprints entirely with real-time profile sync, cutting material costs by ~90%.",
      "Completed a 2-week pilot with 3 feedback iterations before handover.",
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Docker"],
    companyUrl: "https://djagora.com",
    logo: "/experience/fablab-logo.svg",
  },
];
