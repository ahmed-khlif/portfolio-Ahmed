import type { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { EducationTimeline } from "@/components/education/education-timeline";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.education.metadata.title,
  description: pagesConfig.education.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/education`,
  },
};

export default function EducationPage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <EducationTimeline />
    </PageContainer>
  );
}
