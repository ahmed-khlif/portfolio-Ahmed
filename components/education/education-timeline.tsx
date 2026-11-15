import { AnimatedSection } from "@/components/common/animated-section";
import { LocalizedText } from "@/components/common/localized-text";
import { education } from "@/config/education";

export function EducationTimeline() {
  return (
    <div className="relative mt-10 space-y-5 before:absolute before:bottom-6 before:left-[7px] before:top-6 before:w-px before:bg-border sm:space-y-6 sm:before:left-[9px]">
      {education.map((item, index) => (
        <AnimatedSection key={item.id} delay={index * 0.12} direction="up" className="relative pl-8 sm:pl-12">
          <span className="absolute left-0 top-6 flex h-4 w-4 items-center justify-center rounded-full border-4 border-background bg-foreground ring-1 ring-border sm:h-5 sm:w-5" aria-hidden="true" />
          <article className="group rounded-2xl border border-border/70 bg-background/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-lg sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.institution} · {item.location}</p>
              </div>
              <span className="w-fit rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"><LocalizedText id="common.education" fallback="Education" /></span>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">{item.focus}</p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {item.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50" aria-hidden="true" />{highlight}</li>)}
            </ul>
          </article>
        </AnimatedSection>
      ))}
    </div>
  );
}
