import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { Certifications } from "@/components/skills/certifications";
import { pagesConfig } from "@/config/pages";
import { skills } from "@/config/skills";
import { certifications } from "@/config/certifications";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  return (
    <PageContainer
      translationKey="skills"
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <SkillsCard skills={skills} />
      <Certifications certifications={certifications} />
    </PageContainer>
  );
}
