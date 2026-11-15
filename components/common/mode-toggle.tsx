"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { Icons } from "@/components/common/icons";
import { useLanguage } from "@/components/common/language-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Every palette defined in `app/globals.css` is selectable. The template
 * shipped with seven themes but only exposed light/dark in the UI.
 */
const themes = [
  { name: "light", label: "Light", translationKey: "theme.light", icon: Icons.sun },
  { name: "dark", label: "Dark", translationKey: "theme.dark", icon: Icons.moon },
  { name: "paper", label: "Paper", translationKey: "theme.paper", icon: Icons.paper },
  { name: "retro", label: "Retro", translationKey: "theme.retro", icon: Icons.retro },
  { name: "aurora", label: "Aurora", translationKey: "theme.aurora", icon: Icons.aurora },
  { name: "synthwave", label: "Synthwave", translationKey: "theme.synthwave", icon: Icons.synthwave },
  { name: "cyberpunk", label: "Cyberpunk", translationKey: "theme.cyberpunk", icon: Icons.cyberpunk },
];

export function ModeToggle() {
  const { t } = useLanguage();
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a stable, theme-independent SSR/placeholder button so the
  // server HTML matches the first client render. next-themes only knows
  // the real theme after hydration (it reads localStorage/media query),
  // so using `theme` directly in aria-label/title causes a hydration mismatch.
  const label = mounted ? `Change theme. Current theme: ${theme ?? "system"}` : "Change theme";
  const title = mounted ? `Theme: ${theme ?? "system"}` : "Theme";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="size-9 rounded-full border border-border/70 p-0 focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={label}
          title={title}
        >
          <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Open theme menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-navigation-portal>
        {themes.map((item) => {
          const ThemeIcon = item.icon;
          return (
            <DropdownMenuItem key={item.name} onClick={() => setTheme(item.name)}>
              <ThemeIcon className="mr-2 h-4 w-4" />
              <span>{t(item.translationKey)}</span>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Icons.laptop className="mr-2 h-4 w-4" />
          <span>{t("theme.system")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
