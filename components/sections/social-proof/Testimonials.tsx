/**
 * Testimonials — three proof cards with ratings, quote, name, and role.
 * Real-sounding voices, not "this changed everything!!!" filler.
 * Props: override headline/testimonials. Dependencies: ui/Eyebrow, lib/reveal, lucide-react, motion.
 */
"use client";

import { Star } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/lib/reveal";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type TestimonialsProps = {
  eyebrow?: string;
  headline?: string;
  testimonials?: Testimonial[];
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We killed our Monday metrics meeting. The dashboard answers the three questions we used to spend an hour arguing about, and everyone trusts the numbers because they can see the source.",
    name: "Priya Raman",
    role: "VP Finance, Kalvo",
    initials: "PR",
  },
  {
    quote:
      "The alert caught a churn spike in our EU cohort on a Friday night. We had the cause — a failed dunning flow on one plan — before support tickets even started coming in.",
    name: "Daniel Okafor",
    role: "Head of Revenue, Fenwick",
    initials: "DO",
  },
  {
    quote:
      "I exported our board deck from Meridian in twenty minutes. Our investors asked what changed. Nothing changed — we just finally showed our work.",
    name: "Sofia Lindqvist",
    role: "Founder, Osmo",
    initials: "SL",
  },
];

export function Testimonials({
  eyebrow = "Loved by finance teams",
  headline = "Teams stopped guessing.",
  testimonials = DEFAULT_TESTIMONIALS,
}: TestimonialsProps) {
  return (
    <section className="border-y border-ink/10 bg-white/40 py-24 dark:border-sand/10 dark:bg-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow index="08" label={eyebrow} />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 max-w-2xl text-balance text-4xl font-semibold leading-[1.06] text-ink dark:text-sand sm:text-5xl">
            {headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * (i + 1)} y={36}>
              <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-sand p-8 dark:border-sand/10 dark:bg-sand/[0.04]">
                <div
                  className="flex gap-1 text-coral"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty text-[17px] leading-relaxed text-ink/80 dark:text-sand/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="font-display flex size-11 items-center justify-center rounded-full bg-petrol text-sm font-semibold text-sand"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold tracking-tight text-ink dark:text-sand">
                      {t.name}
                    </span>
                    <span className="block text-sm text-ink/60 dark:text-sand/60">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
