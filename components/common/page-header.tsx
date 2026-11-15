"use client";

import { useLanguage } from "@/components/common/language-provider";

interface PageHeaderProps {
  title: string;
  description: string;
  translationKey?: string;
}

export default function PageHeader({ title, description, translationKey }: PageHeaderProps) {
  const { t } = useLanguage();
  const localizedTitle = translationKey ? t(`pages.${translationKey}.title`) : title;
  const localizedDescription = translationKey ? t(`pages.${translationKey}.description`) : description;

  return (
    <>
      <div className="mx-auto mt-10 max-w-6xl border-b border-border/70 pb-8 pt-2 md:mt-14 md:pb-10">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{t("common.portfolio")} / {localizedTitle}</p>
        <div className="max-w-3xl space-y-3">
          <h1 className="font-heading text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            {localizedTitle}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{localizedDescription}</p>
        </div>
      </div>
    </>
  );
}
