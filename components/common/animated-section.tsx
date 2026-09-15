"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
}: AnimatedSectionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion
    ? { opacity: 1, x: 0, y: 0 }
    : {
        opacity: 0,
        x: direction === "left" ? -18 : direction === "right" ? 18 : 0,
        y: direction === "up" ? 18 : direction === "down" ? -18 : 0,
      };

  return (
    <motion.div
      id={id}
      className={className}
      initial={offset}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.55,
              delay: Math.min(Math.max(delay, 0), 0.35),
              ease: [0.22, 1, 0.36, 1],
            },
      }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8%" }}
    >
      {children}
    </motion.div>
  );
};

