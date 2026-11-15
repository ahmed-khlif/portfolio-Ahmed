"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { LocalizedDuration } from "@/components/common/localized-date";
import { useLanguage } from "@/components/common/language-provider";
import { experienceTranslations, resolveLocalized } from "@/config/content-translations";
import {
  skillHoverFallback,
  skillHoverStyles,
} from "@/components/skills/skill-hover";
import { ExperienceInterface } from "@/config/experience";

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const { language, t } = useLanguage();
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <ol className="mx-auto flex w-full max-w-4xl flex-col gap-5 pb-24 sm:gap-6">
      {sortedExperiences.map((experience, index) => {
        const isCurrent = experience.endDate === "Present";
        const copy = experienceTranslations[experience.id];
        return (
          <AnimatedSection
            key={experience.id}
            delay={0.06 * (index + 1)}
            direction="up"
          >
            <li>
              <Link
                href={`/experience/${experience.id}`}
                className="group relative block overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-7"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary via-primary/60 to-transparent transition-transform duration-300 group-hover:scale-y-100"
                />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <div className="flex shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background p-1.5 shadow-sm">
                    {experience.logo ? (
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={48}
                        height={48}
                        className="size-11 rounded-lg object-contain sm:size-12"
                      />
                    ) : (
                      <span className="flex size-11 items-center justify-center rounded-lg bg-muted font-mono text-xs text-muted-foreground sm:size-12">
                        0{index + 1}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1 pr-10 sm:pr-12">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        <LocalizedDuration startDate={experience.startDate} endDate={experience.endDate} />
                      </p>
                      <span
                        aria-hidden
                        className="hidden h-1 w-1 rounded-full bg-border sm:inline-block"
                      />
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {resolveLocalized(copy?.location, language, experience.location)}
                      </p>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <span className="relative flex size-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                          </span>
                          {t("common.current")}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2.5 text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
                      {resolveLocalized(copy?.position, language, experience.position)}
                    </h3>

                    <p className="mt-1.5 flex items-center gap-1.5 text-[15px] font-medium text-foreground/90">
                      {experience.company}
                      {experience.companyUrl && (
                        <Icons.externalLink className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
                      )}
                    </p>

                    <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                      {resolveLocalized(copy?.description?.[0], language, experience.description[0])}
                    </p>
                    {/* skills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-full border border-border/80 bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 ${skillHoverStyles[skill] ?? skillHoverFallback}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* cta */}
                    <span className="mt-5 inline-flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                        {t("common.viewDetails")}
                        <Icons.chevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-border/70 bg-background text-muted-foreground shadow-sm transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background sm:right-6 sm:top-6"
                    >
                      <Icons.arrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </AnimatedSection>
        );
      })}
    </ol>
  );
};

export default Timeline;
