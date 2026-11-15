"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import * as React from "react";

interface HeroVisualProps {
  src: StaticImageData;
  alt: string;
  availability: string;
  location: string;
  timezone: string;
}

export function HeroVisual({ src, alt, availability, location, timezone }: HeroVisualProps) {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 180, damping: 22, mass: 0.35 });
  const rotateY = useSpring(pointerX, { stiffness: 180, damping: 22, mass: 0.35 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 7);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -7);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className="group relative [perspective:1200px] lg:pt-10"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
      style={prefersReducedMotion ? undefined : { rotateX, rotateY }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 -z-10 border border-border/50"
        animate={prefersReducedMotion ? undefined : { rotate: [0, 1.5, -1, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-3 z-10 grid size-10 place-items-center rounded-full border border-border bg-background/85 shadow-sm backdrop-blur"
        animate={prefersReducedMotion ? undefined : { y: [0, -5, 0], rotate: [0, 90, 180] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="size-1.5 rounded-full bg-primary" />
      </motion.div>
      <motion.div
        className="relative border border-border bg-muted/20 p-2 will-change-transform transition-transform duration-700 ease-out group-hover:-translate-y-1"
        animate={prefersReducedMotion ? undefined : { y: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={src}
          alt={alt}
          priority
          className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          sizes="(min-width: 1024px) 20rem, 90vw"
        />
      </motion.div>
      <div className="mt-4 flex items-start justify-between gap-4 text-xs text-muted-foreground">
        <span>Currently</span>
        <span className="max-w-[10rem] text-right text-foreground">{availability}</span>
      </div>
      <div className="mt-3 flex items-start justify-between gap-4 text-xs text-muted-foreground">
        <span>Based in</span>
        <span className="text-right text-foreground">
          {location} · {timezone}
        </span>
      </div>
    </motion.div>
  );
}
