import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // ── 01. Languages & fundamentals ───────────────────────────────────────
  {
    name: "Java",
    description:
      "Object-oriented backend development, information retrieval and academic projects.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "Python",
    description:
      "Machine learning, NLP pipelines and fast FastAPI/Flask service prototyping.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "TypeScript",
    description:
      "Typed JavaScript for maintainable front ends, APIs and shared contracts.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description:
      "The runtime behind my web apps, Node services and tooling scripts.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Dart",
    description: "The language powering my cross-platform Flutter applications.",
    rating: 4,
    icon: Icons.dart,
  },
  {
    name: "C#",
    description:
      "ASP.NET Core services, Blazor front ends and .NET microservices.",
    rating: 4,
    icon: Icons.csharp,
  },
  {
    name: "C",
    description:
      "Systems-level work — including DevSweeper, a pure C99 Win32 command-line tool.",
    rating: 3,
    icon: Icons.c,
  },
  // ── 02. Frontend & mobile ──────────────────────────────────────────────
  {
    name: "React",
    description:
      "Component-driven interfaces with hooks, state management and design systems.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Full-stack React with App Router, server components, routing and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "Angular",
    description:
      "Structured, opinionated single-page applications with TypeScript end to end.",
    rating: 4,
    icon: Icons.angular,
  },
  {
    name: "Flutter",
    description:
      "One codebase for polished Android and iOS mobile applications.",
    rating: 4,
    icon: Icons.flutter,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first styling for consistent, responsive product interfaces.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "HTML 5",
    description: "Semantic, accessible markup that anchors every interface.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Layout, responsiveness and motion — with careful attention to detail.",
    rating: 4,
    icon: Icons.css3,
  },
// ── 03. Backend & APIs ─────────────────────────────────────────────────
  {
    name: "NestJS",
    description:
      "Modular Node.js APIs with dependency injection, guards and clean domain boundaries.",
    rating: 5,
    icon: Icons.nestjs,
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript services, integrations and automation tooling.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "FastAPI",
    description:
      "Typed Python APIs — my usual choice for serving machine-learning models.",
    rating: 4,
    icon: Icons.fastapi,
  },
  {
    name: "Spring Boot",
    description:
      "Convention-driven Java services with solid layering and configuration.",
    rating: 4,
    icon: Icons.springboot,
  },
  {
    name: "Express.js",
    description:
      "Lightweight REST APIs and middleware pipelines for Node services.",
    rating: 4,
    icon: Icons.express,
  },
  {
    name: "Flask",
    description:
      "Compact Python back ends, including the NLP chatbot behind my student assistant.",
    rating: 4,
    icon: Icons.flask,
  },
  {
    name: "ASP.NET Core",
    description:
      "Secure, high-throughput C# back ends and .NET microservices.",
    rating: 4,
    icon: Icons.dotnet,
  },
  // ── 04. Data & storage ────────────────────────────────────────────────
  {
    name: "PostgreSQL",
    description:
      "Relational modelling, indexing and query tuning for production data.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "MongoDB",
    description:
      "Document storage for flexible, fast-moving product data and content.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Firebase",
    description:
      "Authentication, realtime data and notifications for web and mobile apps.",
    rating: 4,
    icon: Icons.firebase,
  },
  {
    name: "Redis",
    description: "Caching, sessions and queues that keep APIs responsive.",
    rating: 4,
    icon: Icons.redis,
  },
  {
    name: "SQL Server",
    description:
      "Data warehouses and SSAS multidimensional cubes behind BI dashboards.",
    rating: 4,
    icon: Icons.sqlserver,
  },
  {
    name: "Prisma",
    description:
      "Type-safe database access, migrations and a readable schema as the source of truth.",
    rating: 4,
    icon: Icons.prisma,
  },
  {
    name: "SQLite",
    description:
      "Embedded databases for lightweight, self-contained applications.",
    rating: 3,
    icon: Icons.sqlite,
  },
// ── 05. Applied AI ───────────────────────────────────────────────────
  {
    name: "LLM Integration",
    description:
      "Gemini and OpenAI APIs wired into real product features — advisory, measured and observable.",
    rating: 4,
    icon: Icons.llm,
  },
  {
    name: "LangChain",
    description:
      "Prompt chains, tool calling and retrieval-augmented workflows over private data.",
    rating: 4,
    icon: Icons.langchain,
  },
  {
    name: "Scikit-learn",
    description:
      "Training, tuning and evaluating classical machine-learning models.",
    rating: 4,
    icon: Icons.scikitlearn,
  },
  {
    name: "NLTK",
    description:
      "Tokenising, stemming and TF-IDF/Word2Vec pipelines for text classification.",
    rating: 4,
    icon: Icons.nlp,
  },
  {
    name: "Pandas",
    description:
      "Cleaning, shaping and exploring datasets before modelling or reporting.",
    rating: 4,
    icon: Icons.pandas,
  },
  {
    name: "NumPy",
    description:
      "Fast numerical work for feature engineering and model evaluation.",
    rating: 4,
    icon: Icons.numpy,
  },
  {
    name: "Langfuse",
    description:
      "Tracing and evaluating LLM calls so answer quality is measurable.",
    rating: 3,
    icon: Icons.observability,
  },
  {
    name: "FAISS",
    description:
      "Similarity search over embeddings for retrieval-based features.",
    rating: 3,
    icon: Icons.vector,
  },
  // ── 06. Delivery & DevOps ─────────────────────────────────────────────
  {
    name: "Docker",
    description:
      "Reproducible images and Compose stacks with real local/production parity.",
    rating: 5,
    icon: Icons.docker,
  },
  {
    name: "Git",
    description:
      "Branching, reviewing and shipping changes with confidence.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "CI/CD",
    description:
      "Automated pipelines that take a commit all the way to deployment.",
    rating: 4,
    icon: Icons.ciCd,
  },
  {
    name: "Jenkins",
    description:
      "Multi-stage pipelines for build, test, quality gates and release.",
    rating: 4,
    icon: Icons.jenkins,
  },
  {
    name: "Nginx",
    description:
      "Reverse proxying, TLS and static delivery in front of services.",
    rating: 4,
    icon: Icons.nginx,
  },
  {
    name: "GitLab",
    description: "Repositories, merge requests and CI runners day to day.",
    rating: 4,
    icon: Icons.gitlab,
  },
  {
    name: "Linux",
    description:
      "Server administration, shell scripting and deployment fundamentals.",
    rating: 4,
    icon: Icons.linux,
  },
  {
    name: "Terraform",
    description:
      "Declarative infrastructure so environments stay reproducible.",
    rating: 3,
    icon: Icons.terraform,
  },
  {
    name: "Grafana K6",
    description:
      "Load testing and performance validation before a release goes out.",
    rating: 3,
    icon: Icons.gauge,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);