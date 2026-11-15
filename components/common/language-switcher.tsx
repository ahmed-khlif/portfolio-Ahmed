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
          <span className="text-base leading-none" aria-hidden="true">{current.flag}</span>
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
            <span className="text-base leading-none" aria-hidden="true">{option.flag}</span>
            <span className="flex-1">{option.label}</span>
            {option.code === language ? <Check className="size-4" aria-hidden="true" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
