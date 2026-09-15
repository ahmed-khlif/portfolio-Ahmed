"use client";

import Link from "next/link";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const navItems = [...routesConfig.mainNav, ...routesConfig.secondaryNav];

  return (
    <footer aria-label="Site footer" className={cn("border-t border-border/70", className)}>
      <div className="container flex flex-col gap-10 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-3">
            <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
              {siteConfig.authorName}
            </Link>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              {siteConfig.role} building AI-powered applications and scalable web &amp; mobile
              systems from {siteConfig.location}.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {SocialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${item.name}`}
                  className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <item.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation" className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              {navItems.map((item: { title: string; href: string }) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Get in touch
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 break-all text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icons.gmail className="size-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icons.contact className="size-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-muted-foreground">
                <Icons.gitOrgBuilding className="size-4 shrink-0" />
                {siteConfig.location}
              </li>
            </ul>
            <div className="pt-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                What I&apos;m listening to
              </p>
              <iframe
                title="Spotify playlist"
                src="https://open.spotify.com/embed/playlist/5HEFQpaI5smcqLBYJhq4pv?utm_source=generator"
                width="100%"
                height="152"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="w-full rounded-xl border border-border"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.authorName}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-10 w-fit rounded-full px-4")}
            aria-label="Back to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
