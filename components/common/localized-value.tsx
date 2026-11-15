"use client";

import * as React from "react";

import { useLanguage } from "@/components/common/language-provider";
import { resolveLocalized, type LocalizedString } from "@/config/content-translations";

interface LocalizedValueProps extends React.HTMLAttributes<HTMLElement> {
  values?: LocalizedString;
  fallback: string;
  as?: React.ElementType;
}

export function LocalizedValue({ values, fallback, as: Component = "span", ...props }: LocalizedValueProps) {
  const { language } = useLanguage();
  return <Component {...props}>{resolveLocalized(values, language, fallback)}</Component>;
}
