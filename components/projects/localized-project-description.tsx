"use client";

import ProjectDescription from "@/components/projects/project-description";
import { useLanguage } from "@/components/common/language-provider";
import { projectTranslations, resolveLocalized } from "@/config/content-translations";

interface LocalizedProjectDescriptionProps {
  projectId: string;
  paragraphs: string[];
  bullets: string[];
}

export function LocalizedProjectDescription({ projectId, paragraphs, bullets }: LocalizedProjectDescriptionProps) {
  const { language } = useLanguage();
  const copy = projectTranslations[projectId];

  return (
    <ProjectDescription
      paragraphs={paragraphs.map((paragraph, index) => resolveLocalized(copy?.paragraphs?.[index], language, paragraph))}
      bullets={bullets.map((bullet, index) => resolveLocalized(copy?.bullets?.[index], language, bullet))}
    />
  );
}
