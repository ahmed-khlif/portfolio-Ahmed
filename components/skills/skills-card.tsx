import { skillsInterface } from "@/config/skills";
import {
  skillHoverFallback,
  skillHoverStyles,
} from "@/components/skills/skill-hover";

interface SkillsCardProps {
  skills: skillsInterface[];
}

const groups = [
  {
    number: "01",
    title: "Languages",
    description:
      "The languages I reach for across back ends, front ends, mobile apps and systems work.",
    names: ["Java", "Python", "TypeScript", "JavaScript", "Dart", "C#", "C"],
  },
  {
    number: "02",
    title: "Frontend & mobile",
    description:
      "Interfaces and applications that stay fast, accessible and maintainable as they grow.",
    names: ["React", "Next.js", "Angular", "Flutter", "Tailwind CSS", "HTML 5", "CSS 3"],
  },
  {
    number: "03",
    title: "Backend & APIs",
    description:
      "Service design, domain modelling, authentication and API contracts that hold up in production.",
    names: ["NestJS", "Node.js", "FastAPI", "Spring Boot", "Express.js", "Flask", "ASP.NET Core"],
  },
  {
    number: "04",
    title: "Data & storage",
    description:
      "Relational and document modelling, caching, and the analytics stores behind reporting.",
    names: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "SQL Server", "Prisma", "SQLite"],
  },
  {
    number: "05",
    title: "Applied AI",
    description:
      "Practical machine learning and LLM features — integrated into real products, measured, never magic.",
    names: ["LLM Integration", "LangChain", "Scikit-learn", "NLTK", "Pandas", "NumPy", "Langfuse", "FAISS"],
  },
  {
    number: "06",
    title: "Delivery & DevOps",
    description:
      "Automation, containers and infrastructure that turn a commit into a reliable release.",
    names: ["Docker", "Git", "CI/CD", "Jenkins", "Nginx", "GitLab", "Linux", "Terraform", "Grafana K6"],
  },
];

export default function SkillsCard({ skills }: SkillsCardProps) {
  const byName = new Map(skills.map((skill) => [skill.name, skill]));

  return (
    <div className="mx-auto max-w-6xl border-t border-border/70">
      {groups.map((group, groupIndex) => {
        const groupSkills = group.names.map((name) => byName.get(name)).filter(Boolean) as skillsInterface[];

        return (
          <section
            key={group.title}
            className="grid gap-6 border-b border-border/70 py-10 md:grid-cols-[5rem_18rem_1fr] md:gap-8 md:py-12"
          >
            <span className="font-mono text-xs text-muted-foreground">{group.number}</span>
            <h2 className="font-heading text-2xl tracking-tight md:text-3xl">{group.title}</h2>
            <div>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {groupSkills.map((skill) => {
                  const Icon = skill.icon;
                  const hover = skillHoverStyles[skill.name] ?? skillHoverFallback;
                  return (
                    <span
                      key={skill.name}
                      title={`${skill.name} · ${skill.rating}/5`}
                      className={`group inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${hover}`} tabIndex={0}
                    >
                      <Icon className="size-4 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
