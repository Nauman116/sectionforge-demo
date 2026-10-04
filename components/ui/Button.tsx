import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

/**
 * SectionForge button primitive. Renders as an anchor (CTAs navigate).
 * Coral primary uses ink text for 6.7:1 contrast.
 */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-[background-color,border-color,color,box-shadow,transform] duration-200 cursor-pointer select-none active:scale-[0.98]";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-base",
  } as const;
  const variants = {
    primary:
      "bg-coral text-ink shadow-[0_8px_24px_-8px_var(--color-coral)] hover:bg-coral-deep hover:shadow-[0_12px_32px_-8px_var(--color-coral-deep)]",
    secondary:
      "border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5 dark:border-sand/25 dark:text-sand dark:hover:border-sand/60 dark:hover:bg-sand/10",
    ghost: "text-ink/70 hover:text-ink dark:text-sand/70 dark:hover:text-sand",
  } as const;
  return (
    <a
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
