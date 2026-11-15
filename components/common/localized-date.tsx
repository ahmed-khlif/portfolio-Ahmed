"use client";

import { useLanguage } from "@/components/common/language-provider";

interface LocalizedDateProps {
  value: Date | string;
  format?: Intl.DateTimeFormatOptions;
}

export function LocalizedDate({ value, format = { month: "long", day: "numeric", year: "numeric" } }: LocalizedDateProps) {
  const { language } = useLanguage();
  const locale = language === "ar" ? "ar-TN" : language === "fr" ? "fr-FR" : "en-US";
  return new Date(value).toLocaleDateString(locale, format);
}

interface LocalizedDurationProps {
  startDate: Date | string;
  endDate: Date | string | "Present";
}

export function LocalizedDuration({ startDate, endDate }: LocalizedDurationProps) {
  const { language, t } = useLanguage();
  const locale = language === "ar" ? "ar-TN" : language === "fr" ? "fr-FR" : "en-US";
  const format = (value: Date | string | "Present") => value === "Present"
    ? t("common.present")
    : new Date(value).toLocaleDateString(locale, { month: "short", year: "numeric" });

  return `${format(startDate)} – ${format(endDate)}`;
}
