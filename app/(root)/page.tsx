import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { ShareProfileButton } from "@/components/common/share-profile-button";
import { EducationTimeline } from "@/components/education/education-timeline";
import ExperienceTimeline from "@/components/experience/timeline";
import ProjectCard from "@/components/projects/project-card";
import { buttonVariants } from "@/components/ui/button";
import { certifications } from "@/config/certifications";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { skills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
  alternates: { canonical: siteConfig.url },
};

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-4 border-b border-border pb-6 md:grid-cols-[5rem_1fr_22rem] md:items-end">
      <span className="font-mono text-sm text-muted-foreground">{number}</span>
      <h2 className="font-heading text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-6 text-muted-foreground md:text-right">
        {description}
      </p>
    </div>
  );
}

const focusAreas = [
  "Full-stack delivery",
  "Applied AI systems",
  "CI/CD & DevOps automation",
];

const spokenLanguages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Proficient" },
];

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile-img.jpg`,
    jobTitle: siteConfig.role,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    knowsLanguage: ["Arabic", "English", "French"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sfax",
      addressCountry: "TN",
    },
    knowsAbout: [
      "Full-stack development",
      "Artificial intelligence",
      "React",
      "Next.js",
      "NestJS",
      "Flutter",
      "Python",
      "DevOps",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": `${siteConfig.url}/#person` },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <section className="relative isolate overflow-hidden border-b border-border py-16 sm:py-24 lg:min-h-[calc(100vh-4rem)] lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <div className="max-w-4xl">
            <AnimatedText as="p" className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="inline-block size-2 rounded-full bg-foreground motion-safe:animate-pulse" aria-hidden="true" /> {siteConfig.role} / {siteConfig.location}
            </AnimatedText>
            <AnimatedText as="h1" delay={0.1} className="max-w-4xl font-heading text-[clamp(3.4rem,8.2vw,7.6rem)] font-medium leading-[0.9] tracking-[-0.075em]">
              Building <span className="text-muted-foreground">AI-powered</span><br className="hidden sm:block" /> products.
            </AnimatedText>
            <AnimatedText as="p" delay={0.2} className="mt-9 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              I&apos;m {siteConfig.authorName} — a full-stack engineer who turns requirements into production systems: React and Next.js interfaces, NestJS and Spring Boot services, Flutter apps, and AI features that stay advisory, measured and honest.
            </AnimatedText>
            <AnimatedText delay={0.3} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/resume" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-none px-6")}>
                Download CV <Icons.externalLink className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-none px-6")}>
                Start a conversation <Icons.arrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#work" className="inline-flex h-12 items-center justify-center rounded-none border border-transparent px-2 text-sm font-medium text-muted-foreground underline decoration-border underline-offset-8 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
                See selected work
              </Link>
              <ShareProfileButton />
            </AnimatedText>
          </div>

<AnimatedSection direction="up" delay={0.25} className="group relative lg:pt-10">
            <div className="absolute -inset-3 -z-10 border border-border/50 transition-transform duration-700 ease-out group-hover:rotate-3 group-hover:scale-105" aria-hidden="true" />
            <div className="border border-border bg-muted/20 p-2 transition-transform duration-700 ease-out group-hover:-translate-y-1">
              <Image
                src={profileImg}
                alt={`Portrait of ${siteConfig.authorName}`}
                priority
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                sizes="(min-width: 1024px) 20rem, 90vw"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4 text-xs text-muted-foreground">
              <span>Currently</span>
              <span className="max-w-[10rem] text-right text-foreground">{siteConfig.availability}</span>
            </div>
            <div className="mt-3 flex items-start justify-between gap-4 text-xs text-muted-foreground">
              <span>Based in</span>
              <span className="text-right text-foreground">{siteConfig.location} · {siteConfig.timezone}</span>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-16 border-t border-border pt-5">
          <div className="grid gap-3 sm:grid-cols-3">
            {focusAreas.map((item, index) => (
              <div key={item} tabIndex={0} className="group rounded-lg px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-muted/70 focus-visible:-translate-y-1 focus-visible:bg-muted/70 focus-visible:outline-none">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-foreground">0{index + 1}</p>
                <p className="mt-2 text-muted-foreground transition-colors group-hover:text-foreground">{item}</p>
                <span className="mt-3 block h-px w-0 bg-foreground transition-all duration-300 group-hover:w-10" aria-hidden="true" />
              </div>
            ))}
          </div>
          <a href="#work" className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
            Scroll to explore <span className="text-base leading-none transition-transform duration-300 hover:translate-y-1" aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

<AnimatedSection id="work" className="space-y-10 py-20 sm:py-28" direction="up">
        <SectionHeading number="01" title="Selected work" description="Platforms, products and tools — with the outcomes written down rather than implied." />
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.08} direction="up">
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
        <Link href="/projects" className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-none")}>
          View all projects <Icons.arrowRight className="ml-2 h-4 w-4" />
        </Link>
      </AnimatedSection>

      <AnimatedSection id="toolkit" className="border-y border-border py-20 sm:py-28" direction="up">
        <SectionHeading number="02" title="Toolkit" description="What I reach for daily — from languages and frameworks to the pipelines that ship them." />
        <div className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 12).map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <div key={skill.name} className="group flex items-start gap-3 border-b border-border/60 py-3 transition-colors hover:border-foreground/40">
                <SkillIcon className="mt-0.5 size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{skill.name}</p>
                  <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link href="/skills" className={cn(buttonVariants({ variant: "outline" }), "mt-8 h-11 rounded-none")}>
          All skills & certifications <Icons.arrowRight className="ml-2 h-4 w-4" />
        </Link>
      </AnimatedSection>

<AnimatedSection id="experience" className="py-20 sm:py-28" direction="up">
        <SectionHeading number="03" title="Experience" description="Internships and freelance work across enterprise platforms, AI features and delivery automation." />
        <div className="mt-10">
          <ExperienceTimeline experiences={experiences} />
        </div>
        <Link href="/experience" className={cn(buttonVariants({ variant: "outline" }), "mt-8 h-11 rounded-none")}>
          View all experience <Icons.arrowRight className="ml-2 h-4 w-4" />
        </Link>
      </AnimatedSection>

      <AnimatedSection id="education" className="border-y border-border py-20 sm:py-28" direction="up">
        <SectionHeading number="04" title="Education & credentials" description="Engineering and software degrees, the certifications, and the languages I work in." />
        <EducationTimeline />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Certifications
            </h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((certification) => (
                <li
                  key={certification.name}
                  className="flex items-start gap-3 border-b border-border/60 pb-4"
                >
                  <Icons.check className="mt-1 size-4 shrink-0 text-foreground" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{certification.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {certification.issuer} · {certification.date}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {certification.credential}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Languages
            </h3>
            <ul className="mt-5 space-y-4">
              {spokenLanguages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-center justify-between border-b border-border/60 pb-3 text-sm"
                >
                  <span className="font-medium text-foreground">{language.name}</span>
                  <span className="text-muted-foreground">{language.level}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-6 text-muted-foreground">
              Comfortable working in English across international teams, and in French for
              client-facing projects in Tunisia and France.
            </p>
          </div>
        </div>

        <Link href="/education" className={cn(buttonVariants({ variant: "outline" }), "mt-10 h-11 rounded-none")}>
          View education journey <Icons.arrowRight className="ml-2 h-4 w-4" />
        </Link>
      </AnimatedSection>

      <AnimatedSection className="border-t border-border py-20 sm:py-28" direction="up">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              05 / A useful next step
            </p>
            <h2 className="font-heading max-w-2xl text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
              Let&apos;s build something reliable.
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              I&apos;m open to full-time roles, freelance missions and AI collaborations — and I
              answer every message within two working days. The CV is a two-minute read if you
              want the short version first.
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline">
                <Icons.gmail className="size-4" /> {siteConfig.email}
              </a>
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline">
                <Icons.contact className="size-4" /> {siteConfig.phone}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link href="/resume" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-none px-7")}>
              Download CV <Icons.externalLink className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-none px-7")}>
              Contact me <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
