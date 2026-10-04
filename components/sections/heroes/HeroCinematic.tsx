/**
 * HeroCinematic — dark cinematic hero.
 * Layered gradient mesh + film grain, centered copy, single bold statement.
 * Always dark by design. Props: override copy. Dependencies: ui/Button, lib/reveal, lucide-react.
 */
"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/lib/reveal";

export type HeroCinematicProps = {
  headline?: string;
  subcopy?: string;
  cta?: { label: string; href: string };
  secondary?: { label: string; href: string };
  stats?: { value: string; label: string }[];
};

export function HeroCinematic({
  headline = "The board meeting is in 10 minutes. Be ready.",
  subcopy = "Meridian turns your scattered revenue data into one number you can defend — with the drill-downs to back it up when the hard questions come.",
  cta = { label: "Get Meridian", href: "#waitlist" },
  secondary = { label: "See how it works", href: "#pricing" },
  stats = [
    { value: "4.9/5", label: "on G2 from 2,100+ reviews" },
    { value: "38%", label: "faster month-end close" },
    { value: "12 min", label: "median setup time" },
  ],
}: HeroCinematicProps) {
  return (
    <section className="grain relative overflow-hidden bg-ink text-sand">
      {/* gradient mesh */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -left-32 top-[-20%] size-[560px] rounded-full bg-petrol blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] size-[480px] rounded-full bg-coral opacity-25 blur-[140px]" />
        <div className="absolute bottom-[-30%] left-[30%] size-[520px] rounded-full bg-sage opacity-15 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent_40%,var(--color-ink)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-40">
        <Reveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-sage">
            Meridian for finance teams
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mx-auto mt-7 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] sm:text-7xl">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-sand/65">
            {subcopy}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={cta.href} size="lg">
              {cta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href={secondary.href} variant="ghost" size="lg" className="text-sand/80 hover:text-sand">
              {secondary.label}
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 border-t border-sand/10 pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-sand">
                  {s.value}
                </dd>
                <dd className="mt-1 text-sm text-sand/65">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
