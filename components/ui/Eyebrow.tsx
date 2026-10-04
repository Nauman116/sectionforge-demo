type EyebrowProps = {
  /** section number, e.g. "01" */
  index: string;
  /** section label, e.g. "Heroes" */
  label: string;
  className?: string;
};

/** Numbered section eyebrow label — the SectionForge signature detail. */
export function Eyebrow({ index, label, className = "" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink/65 dark:text-sand/65 ${className}`}
    >
      <span className="text-coral">{index}</span>
      <span aria-hidden className="h-px w-8 bg-ink/25 dark:bg-sand/25" />
      <span>{label}</span>
    </p>
  );
}
