interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <div className="mx-auto mt-10 max-w-6xl border-b border-border/70 pb-8 pt-2 md:mt-14 md:pb-10">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"><span className="mr-2 inline-block size-1.5 rounded-full bg-foreground align-middle" aria-hidden="true" />Portfolio / {title}</p>
        <div className="max-w-3xl space-y-3">
          <h1 className="font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
        </div>
      </div>
    </>
  );
}
