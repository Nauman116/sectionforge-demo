/**
 * CtaBanner — compact conversion banner: headline, urgency line, dual CTA.
 * A self-contained band that drops in anywhere above the final waitlist/footer.
 * Props: override copy and CTAs. Dependencies: ui/Button, ui/Eyebrow, lib/reveal, lucide-react, motion.
 */
"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/lib/reveal";

export type CtaBannerProps = {
  eyebrow?: string;
  headline?: string;
  subcopy?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  footnote?: string;
};

export function CtaBanner({
  eyebrow = "Ready when you are",
  headline = "Stop building reports. Start answering questions.",
  subcopy = "Connect your first data source in under ten minutes. Meridian does the modeling, the matching, and the math — you get the answers.",
  primaryCta = { label: "Start free trial", href: "#waitlist" },
  secondaryCta = { label: "Talk to sales", href: "#waitlist" },
  footnote = "Free 14-day trial · No credit card required · Live in minutes",
}: CtaBannerProps) {
  return (
    <section className="bg-sand py-24 dark:bg-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-petrol px-8 py-16 text-center sm:px-16 sm:py-24">
            <div
              aria-hidden
              className="absolute -left-32 top-[-30%] size-[420px] rounded-full bg-coral opacity-25 blur-[130px]"
            />
            <div
              aria-hidden
              className="absolute -bottom-40 -right-24 size-[380px] rounded-full bg-sage opacity-15 blur-[120px]"
            />
            <div className="relative mx-auto max-w-3xl">
              <Eyebrow
                index="09"
                label={eyebrow}
                className="justify-center text-sand/70"
              />
              <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.06] text-sand sm:text-6xl">
                {headline}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-sand/70">
                {subcopy}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
                <Button
                  href={secondaryCta.href}
                  variant="secondary"
                  size="lg"
                  className="border-sand/30 text-sand hover:border-sand/70 hover:bg-sand/10"
                >
                  {secondaryCta.label}
                </Button>
              </div>
              <p className="mt-6 text-sm text-sand/55">{footnote}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
