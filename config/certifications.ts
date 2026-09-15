export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credential: string;
  href?: string;
}

export const certifications: Certification[] = [
  {
    name: "Machine Learning with Python",
    issuer: "CDOSS",
    date: "May 2025",
    credential:
      "Supervised & unsupervised learning, data preprocessing and model evaluation",
    href: "https://cdoss.org/ahmed-khlif/",
  },
  {
    name: "Scrum Fundamentals Certified (SFC™)",
    issuer: "SCRUMstudy",
    date: "Feb 2024",
    credential: "Scrum framework, Agile principles and the SBOK® Guide · ID 1015805",
    href: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1015805",
  },
];
