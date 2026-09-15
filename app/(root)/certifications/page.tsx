import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { certifications } from "@/config/certifications";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.certifications.metadata.title,
  description: pagesConfig.certifications.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/certifications`,
  },
};

export default function CertificationsPage() {
  return (
    <ClientPageWrapper>
      <div className="container px-0 sm:px-6">
        <AnimatedSection
          className="border-t border-border py-20 sm:py-28"
          direction="up"
        >
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              01 / Verified credentials
            </p>

            <h1 className="font-heading text-3xl sm:text-4xl font-medium tracking-[-0.04em]">
              Certifications
            </h1>

            <p className="mt-4 max-w-xl text-muted-foreground">
              Professional certifications from SCRUMstudy and CDOSS — each with a
              public verification link you can check independently.
            </p>

            <ul className="mt-10 space-y-8">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="rounded-xl border border-border/70 bg-background/50 p-6"
                >
                  <div className="flex items-start gap-4">
                    <Icons.check
                      className="mt-1 size-5 shrink-0 text-foreground"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-base font-medium text-foreground">
                        {cert.name}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {cert.issuer} · {cert.date}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {cert.credential}
                      </p>

                      {cert.href && (
                        <div className="mt-4">
                          <Link
                            href={cert.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({ variant: "outline" }),
                              "h-9 rounded-lg text-xs"
                            )}
                          >
                            Verify credential
                            <Icons.externalLink className="ml-2 h-3.5 w-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-border/60 pt-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Want the fuller picture? The{" "}
                <Link
                  href="/education"
                  className="text-foreground underline-offset-4 hover:underline font-medium"
                >
                  education timeline
                </Link>{" "}
                covers degrees, the certifications above and the languages I work
                in.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
