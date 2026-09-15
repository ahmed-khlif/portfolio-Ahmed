import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();
  const pathname = usePathname();

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-label="Mobile navigation"
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-black/30 p-4 pb-32 shadow-md backdrop-blur-sm md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-semibold tracking-tight">
            {siteConfig.authorName}
          </span>
        </Link>
        <nav aria-label="Mobile navigation links" className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex min-h-11 w-full items-center rounded-xl p-3 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
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
  );
}
