/**
 * PricingSingle — single-plan focus card.
 * Built for the $0+ lite funnel: one clear offer, no decision fatigue.
 * Props: override copy. Dependencies: ui/Button, ui/Eyebrow, lib/reveal, lucide-react.
 */
"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/lib/reveal";

export function PricingSingle({
  eyebrow = { index: "05", label: "Lite plan" },
  headline = "One plan. Everything you need to start.",
  subcopy = "Meridian Solo is the free-forever starting point: real dashboards, real exports, no feature-gated trial. Upgrade only when your team outgrows it.",
  planName = "Meridian Solo",
  price = "$0",
  priceNote = "free forever",
  cta = { label: "Get Solo free", href: "#waitlist" },
  features = [
    "2 data sources (Stripe + one more)",
    "Live revenue dashboard",
    "Weekly email digest",
    "CSV exports",
    "Community support",
  ],
}: {
  eyebrow?: { index: string; label: string };
  headline?: string;
  subcopy?: string;
  planName?: string;
  price?: string;
  priceNote?: string;
  cta?: { label: string; href: string };
  features?: string[];
}) {
  return (
    <section className="bg-sand-deep/60 dark:bg-petrol-deep">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        <Reveal>
          <Eyebrow
            index={eyebrow.index}
            label={eyebrow.label}
            className="justify-center"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.06] text-ink dark:text-sand sm:text-5xl">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-ink/65 dark:text-sand/65">
            {subcopy}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <article className="relative mx-auto mt-12 max-w-xl rounded-2xl border border-ink/12 bg-sand p-8 text-left shadow-[0_24px_48px_-24px_rgba(10,15,14,0.25)] dark:border-sand/12 dark:bg-ink sm:p-10">
            <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-sage px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink">
              <Sparkles className="size-3.5" aria-hidden />
              Free forever
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl font-semibold text-ink dark:text-sand">
                {planName}
              </h3>
              <p className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold text-ink dark:text-sand">
                  {price}
                </span>
                <span className="text-sm text-ink/65 dark:text-sand/65">
                  {priceNote}
                </span>
              </p>
            </div>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sage/25 dark:bg-sage/20">
                    <Check
                      className="size-3.5 text-petrol dark:text-sage"
                      aria-hidden
                    />
                  </span>
                  <span className="text-[15px] font-medium text-ink/80 dark:text-sand/80">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <Button href={cta.href} size="lg" className="mt-8 w-full">
              {cta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <p className="mt-4 text-center text-sm text-ink/60 dark:text-sand/60">
              No credit card · Set up in 12 minutes · Yours forever
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
