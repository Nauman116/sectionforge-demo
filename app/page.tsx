import { ThemeToggle } from "@/components/ThemeToggle";
import { WaitlistForm } from "@/components/WaitlistForm";
import { HeroEditorial } from "@/components/sections/heroes/HeroEditorial";
import { HeroSplit } from "@/components/sections/heroes/HeroSplit";
import { HeroCinematic } from "@/components/sections/heroes/HeroCinematic";
import { PricingToggle } from "@/components/sections/pricing/PricingToggle";
import { PricingSingle } from "@/components/sections/pricing/PricingSingle";
import { PricingCompare } from "@/components/sections/pricing/PricingCompare";
import { Reveal } from "@/lib/reveal";

/** Sticky demo chrome — not part of the shipped kit. */
function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/85 backdrop-blur-md dark:border-sand/10 dark:bg-ink/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <p className="text-sm font-bold tracking-tight">
          <span className="font-display text-lg">SectionForge</span>
          <span className="ml-2.5 rounded-full bg-coral/15 px-2.5 py-1 text-xs font-semibold text-ink dark:text-coral">
            validation preview
          </span>
        </p>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Demo sections">
          <a
            href="#heroes"
            className="rounded-full px-3 py-2 text-sm font-medium text-ink/65 hover:text-ink dark:text-sand/65 dark:hover:text-sand"
          >
            Heroes
          </a>
          <a
            href="#pricing"
            className="rounded-full px-3 py-2 text-sm font-medium text-ink/65 hover:text-ink dark:text-sand/65 dark:hover:text-sand"
          >
            Pricing
          </a>
          <a
            href="#waitlist"
            className="ml-1 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-sand transition-transform hover:scale-[1.03] active:scale-[0.98] dark:bg-sand dark:text-ink"
          >
            Join waitlist
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

function BandLabel({ children }: { children: string }) {
  return (
    <div className="border-y border-ink/10 bg-ink/[0.04] py-3 text-center dark:border-sand/10 dark:bg-sand/[0.04]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/60 dark:text-sand/60">
        {children}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-sand"
      >
        Skip to content
      </a>
      <TopBar />
      <main id="main">
        <div id="heroes" className="scroll-mt-16">
          <BandLabel>Heroes — 01 / 02 / 03</BandLabel>
          <HeroEditorial />
          <HeroSplit />
          <HeroCinematic />
        </div>
        <div id="pricing" className="scroll-mt-16">
          <BandLabel>Pricing — 04 / 05 / 06</BandLabel>
          <PricingToggle />
          <PricingSingle />
          <PricingCompare />
        </div>

        {/* waitlist */}
        <section id="waitlist" className="grain relative scroll-mt-16 overflow-hidden bg-petrol">
          <div
            aria-hidden
            className="absolute -right-32 top-[-20%] size-[480px] rounded-full bg-coral opacity-20 blur-[140px]"
          />
          <div className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
            <Reveal>
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-sage">
                68 sections · docs-first · $49 launch price
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.06] text-sand sm:text-6xl">
                Get the full kit before everyone else.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-sand/65">
                These 6 sections are the validation slice. Join the waitlist and
                get launch pricing ($39 instead of $49) plus the free 10-section
                lite pack on day one.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mx-auto mt-10 max-w-md">
                <WaitlistForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-sand py-10 dark:border-sand/10 dark:bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="font-display text-lg font-semibold">SectionForge</p>
          <p className="text-sm text-ink/60 dark:text-sand/60">
            Validation preview — 6 of 68 sections. Built to be judged.
          </p>
        </div>
      </footer>
    </>
  );
}
