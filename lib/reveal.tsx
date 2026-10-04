"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** stagger delay in seconds */
  delay?: number;
  /** vertical travel distance in px */
  y?: number;
  className?: string;
};

/**
 * Scroll reveal: fades + slides content in once when it enters the viewport.
 * Respects prefers-reduced-motion via the app-level MotionConfig.
 */
export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
