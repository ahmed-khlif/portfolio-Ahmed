"use client";

import { Check, ChevronDown } from "lucide-react";

import { useLanguage } from "@/components/common/language-provider";
import { languageOptions } from "@/config/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function FlagIcon({ country }: { country: "gb" | "fr" | "tn" }) {
  if (country === "fr") {
    return (
      <svg viewBox="0 0 24 16" className="size-5 shrink-0 overflow-hidden rounded-[3px] shadow-sm" aria-hidden="true">
        <path fill="#1b3f8f" d="M0 0h8v16H0z" />
        <path fill="#fff" d="M8 0h8v16H8z" />
        <path fill="#ed2939" d="M16 0h8v16h-8z" />
      </svg>
    );
  }

  if (country === "tn") {
    return (
      <svg viewBox="0 0 24 16" className="size-5 shrink-0 overflow-hidden rounded-[3px] shadow-sm" aria-hidden="true">
        <rect width="24" height="16" rx="2" fill="#e70013" />
        <circle cx="12" cy="8" r="5" fill="#fff" />
        <circle cx="13" cy="8" r="2.4" fill="#e70013" />
        <circle cx="14" cy="8" r="1.8" fill="#fff" />
        <path fill="#e70013" d="m15.8 8 .9-1.2-.1 1.5 1.3.8-1.5.1-.8 1.3-.1-1.5-1.3-.8 1.5-.2z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 16" className="size-5 shrink-0 overflow-hidden rounded-[3px] shadow-sm" aria-hidden="true">
      <rect width="24" height="16" rx="2" fill="#012169" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#c8102e" strokeWidth="1.8" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="2.5" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const current = languageOptions.find((item) => item.code === language) ?? languageOptions[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 gap-1.5 rounded-full border border-border/70 px-2.5 text-xs font-semibold"
          aria-label={t("language.select")}
          title={t("language.select")}
        >
          <FlagIcon country={current.code === "en" ? "gb" : current.code === "fr" ? "fr" : "tn"} />
          <span>{current.shortLabel}</span>
          <ChevronDown className="size-3.5 text-muted-foreground" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44" data-navigation-portal>
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onSelect={() => setLanguage(option.code)}
            className="gap-2"
          >
            <FlagIcon country={option.code === "en" ? "gb" : option.code === "fr" ? "fr" : "tn"} />
            <span className="flex-1">{option.label}</span>
            {option.code === language ? <Check className="size-4" aria-hidden="true" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
