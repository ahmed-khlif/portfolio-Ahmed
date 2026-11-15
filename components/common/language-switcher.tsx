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

const flagSources = {
  gb: "https://cdn-icons-png.flaticon.com/512/9193/9193350.png",
  fr: "https://cdn-icons-png.flaticon.com/512/206/206657.png",
  tn: "https://cdn-icons-png.flaticon.com/512/5975/5975682.png",
} as const;

function FlagIcon({ country }: { country: "gb" | "fr" | "tn" }) {
  return (
    <span className="grid size-5 shrink-0 place-items-center overflow-hidden rounded-[4px] bg-muted/50 shadow-sm" aria-hidden="true">
      <img
        src={flagSources[country]}
        alt=""
        width={20}
        height={20}
        loading="eager"
        referrerPolicy="no-referrer"
        className="size-full object-contain"
      />
    </span>
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
