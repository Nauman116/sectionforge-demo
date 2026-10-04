/**
 * FaqAccordion — accessible FAQ with animated expand/collapse.
 * Real objections answered plainly: security, migration, pricing, lock-in.
 * Props: override headline/items. Dependencies: ui/Eyebrow, lib/reveal, lucide-react, motion.
 */
"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/lib/reveal";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqAccordionProps = {
  eyebrow?: string;
  headline?: string;
  items?: FaqItem[];
};

const DEFAULT_ITEMS: FaqItem[] = [
  {
    question: "How long does it take to get set up?",
    answer:
      "Most teams connect their first data source and see a live revenue picture within a day. Full historical backfill depends on your data volume, but Meridian's guided import walks you through it — no consultants, no six-week onboarding.",
  },
  {
    question: "Is our financial data safe with Meridian?",
    answer:
      "Yes. Data is encrypted in transit and at rest, hosted in SOC 2 Type II certified infrastructure, and never sold or shared. You can revoke any source connection at any time, and deletion is complete — not archived, deleted.",
  },
  {
    question: "We already have a data team and a warehouse. Why Meridian?",
    answer:
      "Meridian doesn't replace your warehouse — it sits on top of it. Your data team keeps the pipeline; everyone else finally gets to ask questions without filing a ticket and waiting two sprints.",
  },
  {
    question: "What happens when the trial ends?",
    answer:
      "Your data stays intact for 90 days. Pick a plan and everything resumes where you left off, or export everything and walk away — no lock-in, no ransom on your own numbers.",
  },
  {
    question: "Can we switch plans as we grow?",
    answer:
      "Anytime. Upgrades apply instantly with prorated billing; downgrades take effect at the next cycle. Seats and data sources scale independently, so you never pay for capacity you don't use.",
  },
];

export function FaqAccordion({
  eyebrow = "Questions, answered",
  headline = "Everything teams ask before they switch.",
  items = DEFAULT_ITEMS,
}: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const regionId = useId();

  return (
    <section className="border-t border-ink/10 bg-sand py-24 dark:border-sand/10 dark:bg-ink sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Eyebrow index="10" label={eyebrow} />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.06] text-ink dark:text-sand sm:text-5xl">
            {headline}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white/50 px-8 dark:divide-sand/10 dark:border-sand/10 dark:bg-sand/[0.03]">
          {items.map((item, i) => {
            const isOpen = open === i;
            const buttonId = `${regionId}-button-${i}`;
            const panelId = `${regionId}-panel-${i}`;
            return (
              <Reveal key={item.question} delay={0.04 * i}>
                <div className="py-2">
                  <h3>
                    <button
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-lg font-semibold tracking-tight text-ink dark:text-sand">
                        {item.question}
                      </span>
                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-coral bg-coral text-ink"
                            : "border-ink/20 text-ink/60 dark:border-sand/20 dark:text-sand/60"
                        }`}
                      >
                        <Plus className="size-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 text-pretty leading-relaxed text-ink/70 dark:text-sand/70">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
