import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
  onClose: () => void;
}

export function MobileNav({ items, children, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation menu"
        className="fixed inset-0 z-40 bg-foreground/5 backdrop-blur-[2px] md:hidden"
        onClick={onClose}
      />
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(calc(100vw-2rem),24rem)] md:hidden"
      >
        <div className="grid max-h-[calc(100dvh-6rem)] gap-4 overflow-y-auto rounded-2xl border border-border/70 bg-popover p-4 text-popover-foreground shadow-2xl shadow-foreground/15">
          <Link href="/" onClick={onClose} className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-semibold tracking-tight">
              {siteConfig.authorName}
            </span>
          </Link>
          <nav aria-label="Mobile navigation links" className="grid grid-flow-row auto-rows-max text-sm">
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
