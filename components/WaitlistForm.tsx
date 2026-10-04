"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * WaitlistForm — client-side email capture for the validation slice.
 *
 * TODO (before launch): wire this to a real provider. Two options:
 *   1. Formspree — POST the email to your form endpoint:
 *        await fetch("https://formspree.io/f/YOUR_FORM_ID", {
 *          method: "POST",
 *          headers: { "Content-Type": "application/json" },
 *          body: JSON.stringify({ email }),
 *        });
 *   2. Gumroad — send buyers to your $0+ lite product page instead of
 *      collecting email here (Gumroad handles the list for you).
 * Until then, submissions only flip the local success state.
 */
export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const errorRef = useRef<HTMLParagraphElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError("Enter a valid email address — e.g. you@company.com.");
      // Move keyboard/screen-reader focus to the error message.
      requestAnimationFrame(() => errorRef.current?.focus());
      return;
    }
    setError(null);
    // TODO: replace with a real provider call (see comment above).
    setDone(true);
  }

  if (done) {
    return (
      <div
        role="status"
        className="flex items-center justify-center gap-3 rounded-2xl border border-sage/40 bg-sage/15 px-6 py-5"
      >
        <CheckCircle2 className="size-6 shrink-0 text-sage" aria-hidden />
        <p className="text-left text-[15px] font-medium text-sand">
          You&apos;re on the list. We&apos;ll email you the moment SectionForge
          launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "waitlist-error" : undefined}
          className="h-14 flex-1 rounded-full border border-sand/20 bg-sand/[0.07] px-6 text-[15px] text-sand placeholder:text-sand/60 focus:border-coral focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-coral px-8 text-[15px] font-semibold text-ink transition-[background-color,box-shadow,transform] duration-200 hover:bg-coral-deep active:scale-[0.98]"
        >
          Notify me
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
      {error && (
        <p
          id="waitlist-error"
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="mt-3 text-sm text-coral"
        >
          {error}
        </p>
      )}
      <p className="mt-3 text-sm text-sand/60">
        One email at launch. No spam, no newsletter — unsubscribe anytime.
      </p>
    </form>
  );
}
