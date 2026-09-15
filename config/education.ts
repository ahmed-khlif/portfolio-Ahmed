export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    id: "iit-glid",
    degree: "Engineering Degree — Software Engineering & Decision Intelligence",
    institution: "International Institute of Technology (IIT)",
    location: "Sfax, Tunisia",
    period: "2025 — 2027",
    focus:
      "Engineering curriculum focused on software architecture, decision intelligence and data-driven systems used in production.",
    highlights: [
      "Software engineering at scale: architecture, quality and delivery",
      "Decision intelligence: data analysis, optimisation and applied AI",
    ],
  },
  {
    id: "iset-master",
    degree: "Professional Master's Degree — Software Engineering & New Technologies",
    institution: "Higher Institute of Technological Studies of Sfax (ISET)",
    location: "Sfax, Tunisia",
    period: "2024 — 2026",
    focus:
      "Advanced software systems and networks: distributed architectures, service design, security and modern delivery practices.",
    highlights: [
      "Software systems and networks engineering",
      "Applied work on web, mobile and AI-powered platforms",
    ],
  },
  {
    id: "iset-bachelor",
    degree: "Bachelor's Degree — Information Systems Development",
    institution: "Higher Institute of Technological Studies of Sfax (ISET)",
    location: "Sfax, Tunisia",
    period: "2021 — 2024",
    focus:
      "Foundations of information systems: programming, databases, web development and software analysis.",
    highlights: [
      "First production projects shipped during studies",
      "Databases, algorithms and web development fundamentals",
    ],
  },
];
