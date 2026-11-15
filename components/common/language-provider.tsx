"use client";

import * as React from "react";

import {
  getTranslation,
  languageOptions,
  type LanguageCode,
} from "@/config/i18n";

const STORAGE_KEY = "ahmed-portfolio-language";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  direction: "ltr" | "rtl";
  t: (key: string, values?: Record<string, string | number>) => string;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

function applyDocumentLanguage(language: LanguageCode) {
  const option = languageOptions.find((item) => item.code === language) ?? languageOptions[0];
  const pathname = window.location.pathname;
  const pageKey = pathname === "/"
    ? "home"
    : pathname.startsWith("/projects")
      ? "projects"
      : pathname.startsWith("/experience")
        ? "experience"
        : pathname.startsWith("/education")
          ? "education"
          : pathname.startsWith("/certifications")
            ? "certifications"
            : pathname.startsWith("/skills")
              ? "skills"
              : pathname.startsWith("/contact")
                ? "contact"
                : pathname.startsWith("/contributions")
                  ? "contributions"
                  : pathname.startsWith("/blogs")
                    ? "blogs"
                    : pathname.startsWith("/resume")
                      ? "resume"
                      : null;

  document.documentElement.lang = language;
  document.documentElement.dir = option.direction;
  document.body.dataset.language = language;
  if (pageKey) {
    const pageTitle = getTranslation(language, `pages.${pageKey}.title`);
    document.title = `${pageTitle} | Ahmed Khlif`;
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<LanguageCode>("en");

  React.useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    const browserLanguage = window.navigator.language.toLowerCase();
    const detected: LanguageCode = saved === "en" || saved === "fr" || saved === "ar"
      ? saved
      : browserLanguage.startsWith("ar")
        ? "ar"
        : browserLanguage.startsWith("fr")
          ? "fr"
          : "en";

    setLanguageState(detected);
  }, []);

  React.useEffect(() => {
    applyDocumentLanguage(language);
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = React.useCallback((nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
  }, []);

  const option = languageOptions.find((item) => item.code === language) ?? languageOptions[0];
  const value = React.useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      direction: option.direction,
      t: (key, values) => getTranslation(language, key, values),
    }),
    [language, option.direction, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
