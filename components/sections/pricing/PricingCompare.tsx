/**
 * PricingCompare — 3-column feature comparison table.
 * Sticky first column on mobile via horizontal scroll; Check/Minus icons, no color-only encoding.
 * Props: override plans/rows. Dependencies: ui/Button, ui/Eyebrow, lib/reveal, lucide-react.
 */
"use client";

import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/lib/reveal";

type Cell = boolean | string;

export type CompareRow = {
  feature: string;
  values: [Cell, Cell, Cell];
};

const PLAN_NAMES = ["Starter", "Growth", "Scale"] as const;
const PLAN_PRICES = ["$29/mo", "$79/mo", "$199/mo"] as const;

const ROWS: CompareRow[] = [
  { feature: "Data sources", values: ["3", "Unlimited", "Unlimited"] },
  { feature: "Live dashboards", values: [true, true, true] },
  { feature: "Revenue alerts", values: [false, true, true] },
  { feature: "Cohort & retention analysis", values: [false, true, true] },
  { feature: "Board-ready exports", values: [true, true, true] },
  { feature: "Custom warehouse sync", values: [false, false, true] },
  { feature: "Team seats", values: ["1", "10", "Unlimited"] },
  { feature: "SSO / SAML", values: [false, false, true] },
  { feature: "Support", values: ["Email", "Slack", "Dedicated manager"] },
  { feature: "Uptime SLA", values: [false, false, "99.99%"] },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center">
        <Check className="size-5 text-sage-deep dark:text-sage" aria-label="Included" />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="size-5 text-ink/25 dark:text-sand/25" aria-label="Not included" />
      </span>
    );
  return (
    <span className="text-[15px] font-medium text-ink/80 dark:text-sand/80">
      {value}
    </span>
  );
}

export function PricingCompare({
  eyebrow = { index: "06", label: "Compare plans" },
  headline = "Every plan, side by side.",
  subcopy = "No hidden tiers, no “contact us for the real price.” Pick the row that matches where you are today.",
}: {
  eyebrow?: { index: string; label: string };
  headline?: string;
  subcopy?: string;
}) {
  return (
    <section className="bg-sand dark:bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
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
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-ink/12 dark:border-sand/12">
            <table className="w-full min-w-[640px] border-collapse bg-sand-deep/30 text-left dark:bg-sand/[0.03]">
              <caption className="sr-only">
                Feature comparison of Meridian Starter, Growth, and Scale plans
              </caption>
              <thead>
                <tr className="border-b border-ink/12 dark:border-sand/12">
                  <th scope="col" className="w-[34%] p-5 align-bottom">
                    <span className="sr-only">Feature</span>
                  </th>
                  {PLAN_NAMES.map((name, i) => (
                    <th key={name} scope="col" className="p-5 text-center align-top">
                      <p className="font-display text-xl font-semibold text-ink dark:text-sand">
                        {name}
                      </p>
                      <p className="mt-1 text-sm text-ink/65 dark:text-sand/65">
                        {PLAN_PRICES[i]}
                      </p>
                      <Button
                        href="#waitlist"
                        size="sm"
                        variant={i === 1 ? "primary" : "secondary"}
                        className="mt-3 w-full"
                      >
                        Choose {name}
                      </Button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr
                    key={row.feature}
                    className={
                      ri % 2 === 1
                        ? "bg-ink/[0.03] dark:bg-sand/[0.04]"
                        : undefined
                    }
                  >
                    <th
                      scope="row"
                      className="p-4 pl-5 text-[15px] font-medium text-ink/80 dark:text-sand/80"
                    >
                      {row.feature}
                    </th>
                    {row.values.map((v, ci) => (
                      <td
                        key={ci}
                        className={`p-4 text-center ${
                          ci === 1
                            ? "bg-coral/[0.07] dark:bg-coral/[0.10]"
                            : undefined
                        }`}
                      >
                        <CellValue value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-ink/60 dark:text-sand/60">
            All plans include bank-grade encryption, daily backups, and the
            14-day free trial.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
