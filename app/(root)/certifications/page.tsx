import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { LocalizedText } from "@/components/common/localized-text";
import { LocalizedValue } from "@/components/common/localized-value";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { certifications } from "@/config/certifications";
import { certificationTranslations } from "@/config/content-translations";
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
              <LocalizedText id="certifications.verified" fallback="01 / Verified credentials" />
            </p>

            <h1 className="font-heading text-3xl sm:text-4xl font-medium tracking-[-0.04em]">
              <LocalizedText id="pages.certifications.title" fallback="Certifications" />
            </h1>

            <p className="mt-4 max-w-xl text-muted-foreground">
              <LocalizedText id="certifications.description" fallback="Professional certifications from SCRUMstudy and CDOSS — each with a public verification link you can check independently." />
              <span className="hidden">
              Professional certifications from SCRUMstudy and CDOSS — each with a
              public verification link you can check independently.
              </span>
            </p>

            <ul className="mt-10 space-y-8">
              {certifications.map((cert) => {
                const copy = certificationTranslations[cert.name];
                return (
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
                          <LocalizedValue values={copy?.name} fallback={cert.name} />
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {cert.issuer} · <LocalizedValue values={copy?.date} fallback={cert.date} />
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          <LocalizedValue values={copy?.credential} fallback={cert.credential} />
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
                            <LocalizedText id="common.verifyCredential" fallback="Verify credential" />
                            <Icons.externalLink className="ml-2 h-3.5 w-3.5" />
                          </Link>
                        </div>
                      )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 border-t border-border/60 pt-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <LocalizedText id="certifications.fullerBefore" fallback="Want the fuller picture? The" />{" "}
                <Link
                  href="/education"
                  className="text-foreground underline-offset-4 hover:underline font-medium"
                >
                  education timeline
                </Link>{" "}
                <LocalizedText id="certifications.fullerAfter" fallback="covers degrees, the certifications above and the languages I work in." />
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
