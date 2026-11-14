"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * i,
      duration: 0.35,
      ease: "easeOut" as const,
    },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!showMobileMenu) return;

    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowMobileMenu(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowMobileMenu(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [showMobileMenu]);

  return (
    <div ref={navRef} className="relative flex w-full min-w-0 items-center gap-3 md:gap-5">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="shrink-0"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.authorName} home`}
        >
          <Image
            src={siteConfig.logoIcon}
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-xl object-cover object-center shadow-sm transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.04]"
            priority
          />
          <span className="flex flex-col justify-center leading-none">
            <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-foreground">
              {siteConfig.authorName}
            </span>
            <span className="mt-1 whitespace-nowrap text-[11px] font-medium tracking-wide text-muted-foreground">
              {siteConfig.role}
            </span>
          </span>
        </Link>
      </motion.div>
      {items?.length ? (
        <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileTap={{ opacity: 0.55 }}
            >
              <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "relative flex min-h-9 items-center whitespace-nowrap rounded-full px-3.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  pathname === item.href || (segment && item.href.startsWith(`/${segment}`))
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
                  aria-current={pathname === item.href || (segment && item.href.startsWith(`/${segment}`)) ? "page" : undefined}
                >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </nav>
      ) : null}
      <div className="ml-auto hidden shrink-0 items-center gap-2 md:flex">
        {children}
      </div>
      <button
        type="button"
        aria-expanded={showMobileMenu}
        aria-controls="mobile-navigation"
        aria-label={showMobileMenu ? "Close navigation menu" : "Open navigation menu"}
        className="ml-auto grid size-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close className="h-5 w-5" /> : <Icons.menu className="h-5 w-5" />}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} onClose={() => setShowMobileMenu(false)}>{children}</MobileNav>
      )}
    </div>
  );
}
