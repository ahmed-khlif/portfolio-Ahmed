"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Icons } from "@/components/common/icons";
import { useLanguage } from "@/components/common/language-provider";
import { getRouteTranslationKey } from "@/config/i18n";
import { routesConfig } from "@/config/routes";
import { cn } from "@/lib/utils";

const commandRoutes = [
  { key: "nav.home", href: "/", shortcut: "H" },
  ...routesConfig.mainNav.map((item: { title: string; href: string }) => ({ key: getRouteTranslationKey(item.href), href: item.href })),
  ...routesConfig.secondaryNav.map((item: { title: string; href: string }) => ({ key: getRouteTranslationKey(item.href), href: item.href })),
];

export function CommandMenu() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const commands = commandRoutes.map((command) => ({ ...command, title: t(command.key) }));
  const filtered = commands.filter((command) =>
    command.title.toLowerCase().includes(query.toLowerCase())
  );

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const selectCommand = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-9 items-center gap-2 border border-border px-3 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:flex"
        aria-label={t("nav.openSearch")}
      >
        <Icons.chevronRight className="h-3.5 w-3.5" />
        <span>{t("command.search")}</span>
        <kbd className="ml-2 border border-border px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
      </button>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-background/80 px-4 pt-[16vh] backdrop-blur-sm" onMouseDown={() => setOpen(false)}>
          <div role="dialog" aria-modal="true" aria-label={t("command.searchNavigation")} className="w-full max-w-xl overflow-hidden border border-border bg-background shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Icons.chevronRight className="h-4 w-4 text-muted-foreground" />
              <input ref={inputRef} value={query} onChange={(event) => { setQuery(event.target.value); setActiveIndex(0); }} onKeyDown={(event) => {
                if (event.key === "ArrowDown") { event.preventDefault(); setActiveIndex((index) => Math.min(index + 1, filtered.length - 1)); }
                if (event.key === "ArrowUp") { event.preventDefault(); setActiveIndex((index) => Math.max(index - 1, 0)); }
                if (event.key === "Enter" && filtered[activeIndex]) selectCommand(filtered[activeIndex].href);
              }} placeholder={t("command.searchPages")} className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" aria-label={t("command.searchPages")} />
              <kbd className="border border-border px-1.5 py-0.5 font-mono text-[10px]">ESC</kbd>
            </div>
            <div className="p-2">
              {filtered.length ? filtered.map((command, index) => (
                <Link key={command.href} href={command.href} onClick={() => setOpen(false)} className={cn("flex min-h-11 items-center justify-between px-3 text-sm", index === activeIndex ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/70 hover:text-foreground")}>
                  <span>{command.title}</span>
                  {command.shortcut && <span className="font-mono text-[10px] text-muted-foreground">{command.shortcut}</span>}
                </Link>
              )) : <p className="px-3 py-8 text-center text-sm text-muted-foreground">{t("command.noMatchingPages")}</p>}
            </div>
            <div className="border-t border-border px-4 py-2 text-[11px] text-muted-foreground">Use ↑ ↓ to navigate · Enter to open · Esc to close</div>
          </div>
        </div>
      )}
    </>
  );
}
