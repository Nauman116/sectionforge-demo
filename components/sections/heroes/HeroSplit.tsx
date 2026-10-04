/**
 * HeroSplit — split hero with a CSS-built app screenshot in a browser frame.
 * Left: eyebrow, headline, checklist, CTA. Right: dashboard mockup (pure CSS, no images).
 * Props: override copy. Dependencies: ui/Button, ui/Eyebrow, lib/reveal, lucide-react.
 */
"use client";

import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/lib/reveal";

export type HeroSplitProps = {
  eyebrow?: { index: string; label: string };
  headline?: string;
  subcopy?: string;
  checklist?: string[];
  cta?: { label: string; href: string };
};

const BARS = [38, 56, 44, 72, 60, 88, 76, 96, 68, 84, 92, 100];

const KPIS = [
  { label: "MRR", value: "$128.4k", delta: "+12.4%" },
  { label: "Net churn", value: "1.8%", delta: "-0.6 pts" },
  { label: "LTV : CAC", value: "4.2×", delta: "+0.3" },
];

/** Pure-CSS dashboard mockup rendered inside the browser frame. */
function DashboardMockup() {
  return (
    <div className="p-5 sm:p-6">
      <div className="grid grid-cols-3 gap-3">
        {KPIS.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-sand/10 bg-sand/[0.04] p-3"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-sand/60">
              {kpi.label}
            </p>
            <p className="font-display mt-1 text-xl font-semibold text-sand">
              {kpi.value}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-sage">{kpi.delta}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-sand/10 bg-sand/[0.04] p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-sand">Revenue by month</p>
          <p className="text-xs text-sand/60">Last 12 months</p>
        </div>
        <div
          className="mt-4 flex h-32 items-end gap-1.5"
          role="img"
          aria-label="Bar chart showing revenue growing over the last 12 months"
        >
          {BARS.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-[4px] bg-gradient-to-t from-petrol to-sage"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSplit({
  eyebrow = { index: "02", label: "Product tour" },
  headline = "Your metrics, finally in one place.",
  subcopy = "Stop stitching CSVs together every Monday. Meridian pulls billing, product usage, and ad spend into live dashboards your whole team actually opens.",
  checklist = [
    "Connect Stripe, your warehouse, and ad platforms in minutes",
    "Live dashboards — no more Monday spreadsheet scrambles",
    "Board-ready exports your investors will compliment",
  ],
  cta = { label: "See it in action", href: "#waitlist" },
}: HeroSplitProps) {
  return (
    <section className="bg-sand-deep/60 dark:bg-petrol-deep">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow index={eyebrow.index} label={eyebrow.label} />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.06] text-ink dark:text-sand sm:text-6xl">
              {headline}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-ink/65 dark:text-sand/65">
              {subcopy}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-3.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sage/25 dark:bg-sage/20">
                    <Check
                      className="size-3.5 text-petrol dark:text-sage"
                      aria-hidden
                    />
                  </span>
                  <span className="text-[15px] font-medium text-ink/80 dark:text-sand/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10">
              <Button href={cta.href} size="lg">
                {cta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={40}>
          {/* browser frame */}
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-petrol shadow-[0_32px_64px_-24px_rgba(8,39,35,0.45)] dark:border-sand/10">
            <div className="flex items-center gap-2 border-b border-sand/10 bg-petrol-deep px-4 py-3">
              <span className="flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-coral/80" />
                <span className="size-2.5 rounded-full bg-sand/25" />
                <span className="size-2.5 rounded-full bg-sand/25" />
              </span>
              <span className="ml-3 flex-1 truncate rounded-md bg-sand/10 px-3 py-1 text-xs text-sand/65">
                app.meridian.io/overview
              </span>
            </div>
            <DashboardMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
