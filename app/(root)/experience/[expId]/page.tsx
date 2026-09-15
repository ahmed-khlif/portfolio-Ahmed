import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChipContainer from "@/components/ui/chip-container";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { formatDuration } from "@/lib/utils";

interface ExperienceDetailPageProps {
  params: Promise<{
    expId: string;
  }>;
}

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${experience.position} at ${experience.company} | Experience`,
    description: `Detailed information about my role as ${experience.position} at ${experience.company}.`,
    alternates: {
      canonical: `${siteConfig.url}/experience/${expId}`,
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    redirect("/experience");
  }

  const tabItems = [
    {
      value: "summary",
      label: "Summary",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Role Summary
            </h3>
            <ul className="space-y-3">
              {experience.description.map((desc, idx) => (
                <li
                  key={idx}
                  className="text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "achievements",
      label: "Achievements",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Key Achievements
            </h3>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "skills",
      label: "Skills",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Technologies & Skills
            </h3>
            <ChipContainer textArr={experience.skills} />
            <p className="mt-4 text-sm text-muted-foreground">
              These are the primary technologies and skills utilized during my
              time at {experience.company}.
            </p>
          </div>
        </AnimatedSection>
      ),
    },
  ];

  return (
    <ClientPageWrapper>
      <div className="container mx-auto max-w-5xl px-4 py-8 lg:py-14">
        <AnimatedSection className="mb-6">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="overflow-hidden rounded-none border border-border bg-card shadow-none transition-colors duration-300">
            <CardHeader className="border-b border-border p-6 pb-8 sm:p-8">
              <div className="flex flex-col gap-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Selected role / {experience.company}</p>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                    {experience.logo && (
                      <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-white p-2">
                        <Image
                          src={experience.logo}
                          alt={experience.company}
                          width={80}
                          height={80}
                          className="size-full rounded-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1 text-center sm:text-left">
                      <h1 className="text-center text-3xl font-semibold tracking-[-0.04em] sm:text-left sm:text-4xl">
                        {experience.position}
                      </h1>
                      <div className="mt-3 flex items-center justify-center gap-2 sm:justify-start">
                        <span className="text-md font-medium text-muted-foreground">
                          {experience.company}
                        </span>
                        {experience.companyUrl && (
                          <a
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Icons.externalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{experience.location}</p>
                    </div>
                  </div>
                  <div className="flex justify-center sm:justify-end">
                    <span className="inline-flex items-center border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {formatDuration(
                        experience.startDate,
                        experience.endDate
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
              <ResponsiveTabs items={tabItems} defaultValue="summary" />
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              View All Experience
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
