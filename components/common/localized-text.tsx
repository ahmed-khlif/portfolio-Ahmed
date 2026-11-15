"use client";

import * as React from "react";

import { useLanguage } from "@/components/common/language-provider";

interface LocalizedTextProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  fallback: string;
  as?: React.ElementType;
}

export function LocalizedText({ id, fallback, as: Component = "span", ...props }: LocalizedTextProps) {
  const { t } = useLanguage();
  const translated = t(id);

  return <Component {...props}>{translated === id ? fallback : translated}</Component>;
}
