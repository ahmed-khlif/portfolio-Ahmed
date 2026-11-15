"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  children: React.ReactNode;
}

export function SiteHeader({ children }: SiteHeaderProps) {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b border-border/60 backdrop-blur-xl transition-[background-color,box-shadow] duration-500 supports-[backdrop-filter]:bg-background/70 md:isolate",
        scrolled
          ? "bg-background/95 shadow-[0_14px_34px_-24px_hsl(var(--foreground)/0.65)]"
          : "bg-background/80",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden"
      >
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0"
          style={{ scaleX: progress }}
        />
      </div>
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center px-4 transition-[height,padding] duration-500 sm:px-6 lg:px-8",
          scrolled ? "h-14 py-2" : "h-16 py-3",
        )}
      >
        {children}
      </div>
    </motion.header>
  );
}
