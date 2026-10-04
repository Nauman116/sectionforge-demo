/**
 * PricingToggle — 3-tier pricing with a spring-animated monthly/annual toggle.
 * The money section: featured middle tier, real feature lists, honest footnotes.
 * Props: override plans/copy. Dependencies: ui/Button, ui/Eyebrow, lib/reveal, lucide-react, motion.
 */
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/lib/reveal";

export type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  cta: string;
  featured?: boolean;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "For solo founders finding product-market fit.",
    monthly: 29,
    annual: 23,
    cta: "Start free trial",
    features: [
      "Up to 3 data sources",
      "Core revenue dashboard",
      "Monthly investor export",
      "Email support",
      "1 team seat",
    ],
  },
  {
    name: "Growth",
    tagline: "For teams that live in their numbers.",
    monthly: 79,
    annual: 63,
    cta: "Start free trial",
    featured: true,
    features: [
      "Unlimited data sources",
      "Live dashboards + alerts",
      "Cohort & retention analysis",
      "Board-ready exports",
      "Slack support",
      "10 team seats",
    ],
  },
  {
    name: "Scale",
    tagline: "For finance teams with serious volume.",
    monthly: 199,
    annual: 159,
    cta: "Talk to sales",
    features: [
      "Everything in Growth",
      "Custom data warehouse sync",
      "SSO / SAML",
      "Dedicated success manager",
      "Unlimited seats",
      "99.99% uptime SLA",
    ],
  },
];

export function PricingToggle({
  eyebrow = { index: "04", label: "Pricing" },
  headline = "Pricing that pays for itself.",
  subcopy = "One recovered churn insight covers a year of Meridian. Start free — upgrade when the numbers convince you.",
}: {
  eyebrow?: { index: string; label: string };
  headline?: string;
  subcopy?: string;
}) {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="bg-sand dark:bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
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
            <p className="mt-5 text-pretty text-lg text-ink/65 dark:text-sand/65">
              {subcopy}
            </p>
          </Reveal>

          {/* billing toggle */}
          <Reveal delay={0.22}>
            <div
              className="mt-8 inline-flex items-center rounded-full border border-ink/15 bg-ink/[0.03] p-1.5 dark:border-sand/20 dark:bg-sand/[0.06]"
              role="group"
              aria-label="Billing period"
            >
              {(["Monthly", "Annual"] as const).map((label) => {
                const isAnnual = label === "Annual";
                const active = annual === isAnnual;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setAnnual(isAnnual)}
                    aria-pressed={active}
                    className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "text-sand"
                        : "text-ink/65 hover:text-ink dark:text-sand/65 dark:hover:text-sand"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="billing-pill"
                        className="absolute inset-0 rounded-full bg-petrol dark:bg-coral"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative">
                      {label}
                      {isAnnual && (
                        <span
                          className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[11px] ${
                            active
                              ? "bg-sand/20 text-sand dark:bg-ink/15 dark:text-ink"
                              : "bg-sage/25 text-petrol dark:text-sage"
                          }`}
                        >
                          −20%
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <Reveal key={plan.name} delay={0.08 * i} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-transform duration-300 ${
                    plan.featured
                      ? "border-coral bg-petrol text-sand shadow-[0_24px_48px_-16px_rgba(224,120,86,0.35)] dark:bg-petrol-deep lg:-my-4 lg:py-12"
                      : "border-ink/12 bg-sand-deep/40 hover:-translate-y-1 dark:border-sand/12 dark:bg-sand/[0.04]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                      Most popular
                    </span>
                  )}
                  <h3
                    className={`font-display text-2xl font-semibold ${
                      plan.featured ? "text-sand" : "text-ink dark:text-sand"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1.5 text-[15px] ${
                      plan.featured
                        ? "text-sand/65"
                        : "text-ink/60 dark:text-sand/60"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                  <p className="mt-6 flex items-baseline gap-1.5">
                    <span
                      className={`font-display text-5xl font-semibold tracking-tight ${
                        plan.featured ? "text-sand" : "text-ink dark:text-sand"
                      }`}
                    >
                      ${price}
                    </span>
                    <span
                      className={
                        plan.featured
                          ? "text-sand/65"
                          : "text-ink/65 dark:text-sand/65"
                      }
                    >
                      /mo{annual ? ", billed annually" : ""}
                    </span>
                  </p>
                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check
                          className={`mt-0.5 size-4 shrink-0 ${
                            plan.featured
                              ? "text-coral"
                              : "text-sage-deep dark:text-sage"
                          }`}
                          aria-hidden
                        />
                        <span
                          className={`text-[15px] ${
                            plan.featured
                              ? "text-sand/85"
                              : "text-ink/75 dark:text-sand/75"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="#waitlist"
                    variant={plan.featured ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    {plan.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-sm text-ink/60 dark:text-sand/60">
            Prices in USD. Every plan starts with a 14-day free trial — no
            credit card required. Cancel anytime, keep your data exports.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
