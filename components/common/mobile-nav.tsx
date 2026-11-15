import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/common/language-provider";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
  onClose: () => void;
}

export function MobileNav({ items, children, onClose }: MobileNavProps) {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label={t("nav.closeMenu")}
        className="fixed inset-0 z-[55] bg-foreground/5 backdrop-blur-[2px] md:hidden"
        onClick={onClose}
      />
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label={t("nav.openMenu")}
        className="fixed inset-x-3 top-[calc(4rem+0.75rem+env(safe-area-inset-top))] z-[60] md:hidden"
      >
        <div className="mx-auto grid max-h-[calc(100dvh-6.5rem-env(safe-area-inset-top)-env(safe-area-inset-bottom))] w-full max-w-sm gap-4 overflow-y-auto overscroll-contain rounded-2xl border border-border/70 bg-popover p-4 text-popover-foreground shadow-2xl shadow-foreground/15">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <Image
              src={siteConfig.logoIcon}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-xl object-cover object-center"
            />
            <span className="font-heading text-2xl font-semibold tracking-tight">{siteConfig.authorName}</span>
          </Link>
          <nav aria-label={t("nav.openMenu")} className="grid grid-flow-row auto-rows-max text-sm">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                onClick={onClose}
                className={cn(
                  "flex min-h-12 w-full items-center rounded-xl p-3 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  pathname === item.href && "bg-foreground text-background",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          {children ? <div className="border-t border-border/70 pt-3">{children}</div> : null}
        </div>
      </div>
    </>
  );
}
