import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description:
      "Software Engineer building AI-powered applications and scalable web & mobile systems.",
    metadata: {
      title: "Software Engineer & Full-Stack Developer",
      description:
        "Ahmed Khlif — Software Engineer in Sfax, Tunisia. Full-stack developer specialised in AI-powered applications, scalable web and mobile systems, and DevOps automation.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Languages, frameworks and tooling I use to design, build and ship production software.",
    metadata: {
      title: "Skills",
      description:
        "Ahmed Khlif's technical skills — Java, Python, TypeScript, React, Next.js, Flutter, NestJS, Spring Boot, PostgreSQL, Docker, Jenkins and applied AI.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Selected platforms, products and open-source tools — from enterprise workspaces to AI-powered systems.",
    metadata: {
      title: "Projects",
      description:
        "Ahmed Khlif's projects — AI-powered applications, full-stack platforms, business intelligence and developer tooling.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's talk about a role, a project or a collaboration.",
    metadata: {
      title: "Contact",
      description:
        "Contact Ahmed Khlif — khlif.ahmed.dev@gmail.com — Sfax, Tunisia.",
    },
  },
  contributions: {
    title: "Contributions",
    description:
      "Open-source projects I build, ship and maintain on GitHub.",
    metadata: {
      title: "Contributions",
      description:
        "Ahmed Khlif's open-source work — developer tooling, MLOps pipelines, microservices and analytics platforms.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ahmed Khlif's resume — experience, skills and education.",
    metadata: {
      title: "Resume",
      description: "Download Ahmed Khlif's resume.",
    },
  },
  blogs: {
    title: "Notes",
    description:
      "Short write-ups on software engineering, applied AI and shipping products.",
    metadata: {
      title: "Notes",
      description:
        "Ahmed Khlif's notes — software engineering, applied AI and building production systems.",
    },
  },
  experience: {
    title: "Experience",
    description: "Roles, internships and freelance work across software and AI.",
    metadata: {
      title: "Experience",
      description:
        "Ahmed Khlif's professional experience — full-stack and AI engineering roles in Sfax, Tunisia.",
    },
  },
  education: {
    title: "Education",
    description:
      "Engineering and software degrees, plus the certifications that keep the work current.",
    metadata: {
      title: "Education",
      description:
        "Ahmed Khlif's education — Engineering Degree in Software Engineering & Decision Intelligence (IIT) and Professional Master's in Software Engineering & New Technologies (ISET).",
    },
  },
  certifications: {
    title: "Certifications",
    description:
      "Professional certifications and credentials that validate the skills behind the work.",
    metadata: {
      title: "Certifications",
      description:
        "Ahmed Khlif's professional certifications — Scrum Fundamentals Certified (SFC™) and Machine Learning with Python.",
    },
  },
};
