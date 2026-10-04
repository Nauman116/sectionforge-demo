import type { AnchorHTMLAttributes } from "react";

type BadgeProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** small dot accent, defaults to coral */
  dotClassName?: string;
};

/** Announcement pill, e.g. "New — Benchmarks 2026 is live". */
export function Badge({
  children,
  dotClassName = "bg-coral",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <a
      className={`inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-ink/[0.03] py-1.5 pl-2 pr-4 text-sm font-medium text-ink/80 transition-colors hover:border-ink/30 hover:text-ink dark:border-sand/20 dark:bg-sand/[0.06] dark:text-sand/80 dark:hover:border-sand/40 dark:hover:text-sand ${className}`}
      {...props}
    >
      <span className="flex items-center gap-1.5 rounded-full bg-ink/[0.06] px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide dark:bg-sand/10">
        <span className={`size-1.5 rounded-full ${dotClassName}`} aria-hidden />
        New
      </span>
      {children}
    </a>
  );
}
