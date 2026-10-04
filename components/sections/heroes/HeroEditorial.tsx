/**
 * HeroEditorial — centered editorial hero.
 * Announcement pill, oversized Fraunces headline, subcopy, dual CTA, logo strip.
 * Props: override any copy block. Dependencies: ui/Button, ui/Badge, ui/Eyebrow, lib/reveal, lucide-react, motion.
 */
"use client";

import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/lib/reveal";

export type HeroEditorialProps = {
  announcement?: string;
  headline?: string;
  subcopy?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  logos?: string[];
};

const DEFAULT_LOGOS = [
  "Nortide",
  "Kalvo",
  "Fenwick",
  "Osmo",
  "Lindqvist",
  "Barlow & Co",
];

export function HeroEditorial({
  announcement = "Meridian Benchmarks 2026 — the state of SaaS revenue is live",
  headline = "Know exactly why revenue moves.",
  subcopy = "Meridian connects your billing, product, and marketing data into one live revenue picture — so every decision starts from what actually happened, not what someone guessed in a spreadsheet.",
  primaryCta = { label: "Start free trial", href: "#waitlist" },
  secondaryCta = { label: "Watch the demo", href: "#heroes" },
  logos = DEFAULT_LOGOS,
}: HeroEditorialProps) {
  return (
    <section className="relative overflow-hidden bg-sand dark:bg-ink">
      {/* soft radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-coral)_0%,transparent_70%)] opacity-[0.14] dark:opacity-[0.10]"
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:pt-32">
        <Reveal>
          <Badge href="#waitlist">{announcement}</Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="font-display mx-auto mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.04] text-ink dark:text-sand sm:text-7xl">
            {headline}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink/65 dark:text-sand/65">
            {subcopy}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              <Play className="size-4" aria-hidden />
              {secondaryCta.label}
            </Button>
          </div>
          <p className="mt-4 text-sm text-ink/60 dark:text-sand/60">
            Free 14-day trial · No credit card · Cancel anytime
          </p>
        </Reveal>

        <Reveal delay={0.32} className="mt-16 sm:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 dark:text-sand/60">
            Trusted by finance teams at
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div
              className="animate-marquee flex w-max items-center gap-14 pr-14"
              aria-label={logos.join(", ")}
            >
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={`${logo}-${i}`}
                  aria-hidden={i >= logos.length}
                  className="font-display whitespace-nowrap text-2xl font-medium text-ink/45 transition-colors hover:text-ink/75 dark:text-sand/45 dark:hover:text-sand/75"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
