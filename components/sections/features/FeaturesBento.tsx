/**
 * FeaturesBento — bento-grid feature showcase.
 * One oversized metric card plus three supporting cards: real numbers, real copy.
 * Props: override headline/copy/features. Dependencies: ui/Eyebrow, lib/reveal, lucide-react, motion.
 */
"use client";

import { BarChart3, BellRing, Layers, Zap } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/lib/reveal";

export type BentoFeature = {
  icon: "layers" | "zap" | "bell";
  title: string;
  copy: string;
};

const ICONS = {
  layers: Layers,
  zap: Zap,
  bell: BellRing,
} as const;

export type FeaturesBentoProps = {
  eyebrow?: string;
  headline?: string;
  subcopy?: string;
  metric?: { value: string; label: string; delta: string };
  features?: BentoFeature[];
};

const DEFAULT_FEATURES: BentoFeature[] = [
  {
    icon: "layers",
    title: "Every source, one picture",
    copy: "Stripe, your product database, ad spend, and CRM pipeline land in a single live model. No exports, no duct-tape spreadsheets.",
  },
  {
    icon: "zap",
    title: "Answers in seconds, not sprints",
    copy: "Ask why revenue dipped last Thursday and get the cohort, the channel, and the plan tier behind it — before your standup ends.",
  },
  {
    icon: "bell",
    title: "Alerts before the board meeting",
    copy: "Set thresholds on churn, expansion, or pipeline coverage. Meridian pings you when a number moves, with the reason attached.",
  },
];

export function FeaturesBento({
  eyebrow = "Features",
  headline = "The numbers behind the numbers.",
  subcopy = "Dashboards tell you revenue moved. Meridian tells you which customers, which channels, and which decisions moved it.",
  metric = { value: "11 days", label: "average time to first answered question", delta: "down from 34 days with manual reporting" },
  features = DEFAULT_FEATURES,
}: FeaturesBentoProps) {
  return (
    <section className="bg-sand py-24 dark:bg-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow index="07" label={eyebrow} />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.06] text-ink dark:text-sand sm:text-5xl">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink/65 dark:text-sand/65">
            {subcopy}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* oversized metric card */}
          <Reveal className="md:col-span-1 md:row-span-2" y={36}>
            <div className="grain relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl bg-petrol p-8">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 size-72 rounded-full bg-coral opacity-25 blur-[100px]"
              />
              <div className="relative">
                <BarChart3 className="size-9 text-coral" aria-hidden />
                <p className="font-display mt-8 text-6xl font-semibold tracking-tight text-sand">
                  {metric.value}
                </p>
                <p className="mt-3 text-lg font-medium text-sand/85">
                  {metric.label}
                </p>
              </div>
              <p className="relative mt-8 text-sm leading-relaxed text-sand/60">
                {metric.delta}
              </p>
            </div>
          </Reveal>

          {/* supporting cards */}
          {features.map((feature, i) => {
            const Icon = ICONS[feature.icon];
            return (
              <Reveal key={feature.title} delay={0.08 * (i + 1)} y={36}>
                <div className="group h-full rounded-3xl border border-ink/10 bg-white/60 p-8 transition-colors hover:border-coral/50 dark:border-sand/10 dark:bg-sand/[0.04] dark:hover:border-coral/40">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-coral/15 text-coral transition-transform group-hover:scale-110">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink dark:text-sand">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink/65 dark:text-sand/65">
                    {feature.copy}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
