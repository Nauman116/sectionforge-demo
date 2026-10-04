"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** App-wide providers: next-themes (class strategy) + Motion reduced-motion handling. */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
