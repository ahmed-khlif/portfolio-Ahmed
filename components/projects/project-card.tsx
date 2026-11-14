"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={false}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={prefersReducedMotion ? undefined : { y: -5 }}
      className="group relative flex h-full w-full flex-col overflow-hidden border border-border/70 bg-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_18px_45px_-28px_hsl(var(--foreground)/0.45)] focus-within:border-foreground/40 focus-within:shadow-[0_18px_45px_-28px_hsl(var(--foreground)/0.45)]" aria-label={`${project.companyName} case study`}
    >
      <div className="relative h-[220px] w-full flex-shrink-0 overflow-hidden border-b border-border/70 bg-muted">
        <motion.div
          className="absolute inset-0 overflow-hidden"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
        <Image
          className="object-cover grayscale-[15%] transition-[filter] duration-500 group-hover:grayscale-0"
          src={project.companyLogoImg}
          alt={`${project.companyName} project preview`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 pt-14 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
          <div className="flex items-end justify-between gap-3 text-white">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/75">
              {project.techStack.slice(0, 3).join(" / ")}
            </span>
            <Icons.arrowUpRight className="size-4 shrink-0" aria-hidden="true" />
          </div>
        </div>
        </motion.div>
      </div>
      <div className="flex flex-grow flex-col space-y-4 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{project.type}</p><span className="font-mono text-[10px] text-muted-foreground">{String(project.category.length).padStart(2, "0")} tags</span></div>
        <h3 className="font-heading text-3xl font-medium leading-[0.98] tracking-[-0.05em] text-foreground">
          {project.companyName}
        </h3>
        <p className="line-clamp-3 flex-grow text-sm leading-7 text-muted-foreground">
          {project.shortDescription}
        </p>
        {project.metrics?.[0] ? (
          <p className="border-l-2 border-foreground/20 pl-3 text-xs font-medium leading-5 text-foreground">
            {project.metrics[0]}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-2">
          <ChipContainer textArr={project.category} />
        </div>
          <Link href={`/projects/${project.id}`} className="mt-auto inline-flex min-h-11 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <span className="mt-2 inline-flex w-full items-center justify-between gap-2 border-t border-border pt-3 text-xs font-medium uppercase tracking-[0.12em] transition-all group-hover:gap-3">
            Explore case study <Icons.chevronRight className="size-4" />
          </span>
        </Link>
      </div>
      <div className="absolute left-4 top-4 hidden border border-background/60 bg-background/85 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground backdrop-blur-sm md:block">{project.category[0]}</div>
    </motion.article>
  );
}
