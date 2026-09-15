// Hover styles for skill pills — SAME pattern as the footer social dock
// (`components/common/social-dock.tsx` `hoverStyles`).
// IMPORTANT: every class here is a literal string so Tailwind's scanner
// sees it and generates the CSS. (Dynamic `hover:border-[${color}]`
// template strings NEVER get generated — that's why nothing changed before.)
export const skillHoverStyles: Record<string, string> = {
  // Languages
  Java: "hover:border-[#ED8B00]/40 hover:bg-[#ED8B00]/10 hover:text-[#b86600]",
  Python:
    "hover:border-[#3776AB]/40 hover:bg-[#3776AB]/10 hover:text-[#3776AB]",
  TypeScript:
    "hover:border-[#3178C6]/40 hover:bg-[#3178C6]/10 hover:text-[#3178C6]",
  JavaScript:
    "hover:border-[#eab308]/50 hover:bg-[#eab308]/10 hover:text-[#a16207]",
  Dart: "hover:border-[#0175C2]/40 hover:bg-[#0175C2]/10 hover:text-[#0175C2]",
  "C#": "hover:border-[#512BD4]/40 hover:bg-[#512BD4]/10 hover:text-[#7C5CE6]",
  C: "hover:border-[#5C6BC0]/40 hover:bg-[#5C6BC0]/10 hover:text-[#5C6BC0]",
  // Frontend & mobile
  React: "hover:border-[#61DAFB]/50 hover:bg-[#61DAFB]/10 hover:text-[#087ea4]",
  "Next.js": "hover:border-foreground/40 hover:bg-muted hover:text-foreground",
  Angular:
    "hover:border-[#DD0031]/40 hover:bg-[#DD0031]/10 hover:text-[#DD0031]",
  Flutter:
    "hover:border-[#02569B]/40 hover:bg-[#02569B]/10 hover:text-[#02569B]",
  "Tailwind CSS":
    "hover:border-[#06B6D4]/40 hover:bg-[#06B6D4]/10 hover:text-[#0e7490]",
  "HTML 5": "hover:border-[#E34F26]/40 hover:bg-[#E34F26]/10 hover:text-[#E34F26]",
  "CSS 3": "hover:border-[#1572B6]/40 hover:bg-[#1572B6]/10 hover:text-[#1572B6]",
  // Backend & APIs
  NestJS: "hover:border-[#E0234E]/40 hover:bg-[#E0234E]/10 hover:text-[#E0234E]",
  "Node.js":
    "hover:border-[#339933]/40 hover:bg-[#339933]/10 hover:text-[#2f7d32]",
  "Express.js": "hover:border-foreground/40 hover:bg-muted hover:text-foreground",
  FastAPI: "hover:border-[#009688]/40 hover:bg-[#009688]/10 hover:text-[#00796b]",
  "Spring Boot":
    "hover:border-[#6DB33F]/40 hover:bg-[#6DB33F]/10 hover:text-[#4d7f2c]",
  Flask: "hover:border-foreground/40 hover:bg-muted hover:text-foreground",
  "ASP.NET Core":
    "hover:border-[#512BD4]/40 hover:bg-[#512BD4]/10 hover:text-[#7C5CE6]",
  // Data & storage
  PostgreSQL:
    "hover:border-[#4169E1]/40 hover:bg-[#4169E1]/10 hover:text-[#4169E1]",
  MongoDB:
    "hover:border-[#47A248]/40 hover:bg-[#47A248]/10 hover:text-[#2f7d32]",
  Firebase:
    "hover:border-[#FFCA28]/60 hover:bg-[#FFCA28]/10 hover:text-[#b45309]",
  Redis: "hover:border-[#FF4438]/40 hover:bg-[#FF4438]/10 hover:text-[#d32f2f]",
  "SQL Server":
    "hover:border-[#CC2927]/40 hover:bg-[#CC2927]/10 hover:text-[#CC2927]",
  Prisma: "hover:border-[#5A67D8]/40 hover:bg-[#5A67D8]/10 hover:text-[#5A67D8]",
  SQLite: "hover:border-[#003B57]/40 hover:bg-[#003B57]/10 hover:text-[#0b7285]",
  // Applied AI
  "LLM Integration":
    "hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-[#7C3AED]",
  "Gen AI": "hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-[#7C3AED]",
  LangChain:
    "hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/10 hover:text-[#0f766e]",
  Langfuse:
    "hover:border-[#A855F7]/40 hover:bg-[#A855F7]/10 hover:text-[#A855F7]",
  FAISS: "hover:border-[#0467DF]/40 hover:bg-[#0467DF]/10 hover:text-[#0467DF]",
  "Scikit-learn":
    "hover:border-[#F7931E]/50 hover:bg-[#F7931E]/10 hover:text-[#b86600]",
  NLTK: "hover:border-[#4B8BBE]/40 hover:bg-[#4B8BBE]/10 hover:text-[#4B8BBE]",
  Pandas: "hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6]",
  NumPy: "hover:border-[#4DABCF]/40 hover:bg-[#4DABCF]/10 hover:text-[#0e7490]",
  // Delivery & DevOps
  Docker: "hover:border-[#2496ED]/40 hover:bg-[#2496ED]/10 hover:text-[#2496ED]",
  Git: "hover:border-[#F05032]/40 hover:bg-[#F05032]/10 hover:text-[#F05032]",
  GitLab: "hover:border-[#FC6D26]/40 hover:bg-[#FC6D26]/10 hover:text-[#c2410c]",
  "CI/CD": "hover:border-[#F97316]/40 hover:bg-[#F97316]/10 hover:text-[#c2410c]",
  Jenkins: "hover:border-[#D33833]/40 hover:bg-[#D33833]/10 hover:text-[#D33833]",
  Terraform:
    "hover:border-[#844FBA]/40 hover:bg-[#844FBA]/10 hover:text-[#844FBA]",
  Nginx: "hover:border-[#009639]/40 hover:bg-[#009639]/10 hover:text-[#009639]",
  Linux: "hover:border-[#FCC624]/60 hover:bg-[#FCC624]/10 hover:text-[#b45309]",
  "Grafana K6":
    "hover:border-[#F46800]/40 hover:bg-[#F46800]/10 hover:text-[#c2410c]",
  // Kept for legacy/experimental technology pills
  GraphQL: "hover:border-[#E535AB]/40 hover:bg-[#E535AB]/10 hover:text-[#E535AB]",
  MySQL: "hover:border-[#4479A1]/40 hover:bg-[#4479A1]/10 hover:text-[#4479A1]",
  Supabase:
    "hover:border-[#3FCF8E]/40 hover:bg-[#3FCF8E]/10 hover:text-[#0f766e]",
  AWS: "hover:border-[#FF9900]/50 hover:bg-[#FF9900]/10 hover:text-[#b86d00]",
};

export const skillHoverFallback =
  "hover:border-foreground/40 hover:bg-muted hover:text-foreground";
