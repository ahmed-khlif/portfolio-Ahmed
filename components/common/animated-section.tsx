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
  id,
}: AnimatedSectionProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={false}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
          transition: prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: 0.55,
                delay: Math.min(delay, 0.35),
                ease: "easeOut" as const,
              },
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};
