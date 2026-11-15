import Link from "next/link";
import { ArrowUpRight, Award } from "lucide-react";

import { LocalizedText } from "@/components/common/localized-text";
import { LocalizedValue } from "@/components/common/localized-value";
import { certificationTranslations } from "@/config/content-translations";
import type { Certification } from "@/config/certifications";

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className="mt-24 border-t border-border/70 pt-10" aria-labelledby="certifications-title">
      <div className="mb-8 grid gap-4 md:grid-cols-[5rem_18rem_1fr] md:gap-8">
        <span className="font-mono text-xs text-muted-foreground">07</span>
        <div>
          <h2 id="certifications-title" className="font-heading text-2xl tracking-tight md:text-3xl"><LocalizedText id="pages.certifications.title" fallback="Certifications" /></h2>
          <LocalizedText as="p" id="skills.selectedCredentials" fallback="Selected credentials and continued learning." className="mt-2 text-sm leading-7 text-muted-foreground" />
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {certifications.map((certification) => {
          const copy = certificationTranslations[certification.name];
          return (
          <article key={`${certification.issuer}-${certification.name}`} className="group flex min-h-44 flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/35 hover:shadow-lg hover:shadow-foreground/5">
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-10 place-items-center rounded-full border border-border bg-muted text-muted-foreground" aria-hidden="true"><Award className="size-4" /></span>
              {certification.href ? <Link href={certification.href} target="_blank" rel="noreferrer" aria-label={`Verify ${certification.name} credential`} className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ArrowUpRight className="size-4" /></Link> : <span className="rounded-full border border-dashed border-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"><LocalizedText id="common.linkSoon" fallback="Link soon" /></span>}
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"><LocalizedValue values={copy?.date} fallback={certification.date} /> / {certification.issuer}</p>
              <h3 className="mt-2 font-medium leading-6"><LocalizedValue values={copy?.name} fallback={certification.name} /></h3>
              <div className="mt-1 flex items-center justify-between gap-3"><p className="text-sm text-muted-foreground"><LocalizedValue values={copy?.credential} fallback={certification.credential} /></p>{certification.href ? <Link href={certification.href} target="_blank" rel="noreferrer" className="shrink-0 text-xs font-medium text-foreground underline-offset-4 hover:underline"><LocalizedText id="common.verify" fallback="Verify" /></Link> : null}</div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
