"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import CustomTooltip from "@/components/ui/custom-tooltip";
import { useLanguage } from "@/components/common/language-provider";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

const hoverStyles: Record<string, string> = {
  Github: "hover:border-foreground/40 hover:bg-muted hover:text-foreground",
  LinkedIn: "hover:border-[#0a66c2]/30 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2]",
  WhatsApp: "hover:border-[#25d366]/30 hover:bg-[#25d366]/10 hover:text-[#168a43]",
  Gmail: "hover:border-[#ea4335]/30 hover:bg-[#ea4335]/10 hover:text-[#c5221f]",
};

export function SocialDock() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const revealAfter = Math.min(window.innerHeight * 0.72, 160);
      setVisible(window.scrollY > revealAfter);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-label={t("common.socialLinks")}
      className={cn(
        "pointer-events-none fixed bottom-5 left-1/2 z-40 -translate-x-1/2 translate-y-5 opacity-0 transition-all duration-500 ease-out sm:bottom-7",
        visible && "pointer-events-auto translate-y-0 opacity-100",
      )}
    >
      <div className="flex items-center gap-1 rounded-full border border-border/70 bg-background/85 px-2 py-1.5 shadow-xl shadow-foreground/5 backdrop-blur-xl">
        <span className="hidden px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">{t("common.elsewhere")}</span>
        {SocialLinks.map((item) => (
          <CustomTooltip icon={item.icon} text={item.username} key={item.name}>
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${item.name}`}
              className={cn("group flex size-9 items-center justify-center rounded-full border border-transparent text-muted-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", hoverStyles[item.name] ?? "hover:border-foreground/40 hover:bg-muted hover:text-foreground")}
            >
              <item.icon className="size-4 transition-transform duration-200 group-hover:scale-110" />
            </Link>
          </CustomTooltip>
        ))}
      </div>
    </div>
  );
}
