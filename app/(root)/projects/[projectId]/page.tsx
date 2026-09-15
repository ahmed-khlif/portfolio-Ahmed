import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

const githubUsername = siteConfig.username;

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;
  let project = Projects.find((val) => val.id === projectId);
  if (!project) {
    redirect("/projects");
  }

  return (
    <article className="container relative max-w-5xl py-8 lg:py-14">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>
      <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_16rem] lg:gap-16">
        <div>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{project.type} / Case study</p>
        {project.role ? <p className="mb-4 text-sm font-medium text-foreground">{project.role}</p> : null}
        <time
          dateTime={Date.now().toString()}
          className="block font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
        >
          {formatDateFromObj(project.startDate)}
        </time>
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {project.companyName}
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={project.category} />
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt={siteConfig.authorName}
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{siteConfig.authorName}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
        </div>
        <aside className="flex flex-col justify-end gap-5 border-l border-border pl-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Built with</p>
          <ChipContainer textArr={project.techStack.slice(0, 4)} />
          <p className="text-sm leading-6 text-muted-foreground">A focused case study on the decisions, systems, and details behind this work.</p>
        </aside>
      </div>

      <Image
        src={project.companyLogoImg}
        alt={project.companyName}
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />

      {project.metrics?.length ? (
        <section
          aria-label="Project highlights"
          className="mb-10 grid gap-4 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {project.metrics.map((metric) => (
            <p
              key={metric}
              className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
            >
              <Icons.check className="mt-0.5 size-4 shrink-0 text-foreground" />
              {metric}
            </p>
          ))}
        </section>
      ) : null}

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Tech Stack
        </h2>
        <ChipContainer textArr={project.techStack} />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Description
        </h2>
        {/* {<project.descriptionComponent />} */}
        <ProjectDescription
          paragraphs={project.descriptionDetails.paragraphs}
          bullets={project.descriptionDetails.bullets}
        />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
          Page Info
        </h2>
        {project.pagesInfoArr.map((page, ind) => (
          <div key={ind}>
            <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
              <Icons.star className="h-5 w-5 mr-2" /> {page.title}
            </h3>
            <div>
              <p>{page.description}</p>
              {page.imgArr.map((img, ind) => (
                <Image
                  src={img}
                  key={ind}
                  alt={img}
                  width={720}
                  height={405}
                  className="my-4 rounded-md border bg-muted transition-colors"
                  priority
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
