export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "DevSweeper",
    contibutionDescription:
      "Blazing-fast Windows-native CLI written in pure C99 that finds developer junk folders (node_modules, .venv, build, dist, target) and reclaims gigabytes safely — Git-aware detection, coloured tables and full deletion logs.",
    repoOwner: "ahmed-khlif",
    link: "https://github.com/ahmed-khlif/DevSweeper",
  },
  {
    repo: "iris-mlops-pipeline",
    contibutionDescription:
      "End-to-end MLOps pipeline for Iris classification: data versioning, experiment tracking, a packaged RandomForest model and a FastAPI inference service.",
    repoOwner: "ahmed-khlif",
    link: "https://github.com/ahmed-khlif/iris-mlops-pipeline",
  },
  {
    repo: "salesBi",
    contibutionDescription:
      "SalesLens BI — a full-stack analytics platform built on a SQL Server data warehouse and SSAS multidimensional cube, served by a NestJS API and a Next.js dashboard with global filtering and exports.",
    repoOwner: "ahmed-khlif",
    link: "https://github.com/ahmed-khlif/salesBi",
  },
  {
    repo: "SAVORA_MicroService",
    contibutionDescription:
      "After-sales service (SAV) application built as .NET 8 microservices with a Blazor WebAssembly front end, SQLite persistence and Docker Compose orchestration.",
    repoOwner: "ahmed-khlif",
    link: "https://github.com/ahmed-khlif/SAVORA_MicroService",
  },
  {
    repo: "Document_Search_System",
    contibutionDescription:
      "Java information-retrieval system implementing automatic indexing of text corpora alongside Boolean and Vector Space retrieval models.",
    repoOwner: "ahmed-khlif",
    link: "https://github.com/ahmed-khlif/Document_Search_System",
  },
  {
    repo: "InvitedPlus",
    contibutionDescription:
      "Invited+ — a modern event management platform with task management, team collaboration, role-based access control, OAuth and email verification, built on Next.js, Prisma and PostgreSQL.",
    repoOwner: "ahmed-khlif",
    link: "https://github.com/ahmed-khlif/InvitedPlus",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
