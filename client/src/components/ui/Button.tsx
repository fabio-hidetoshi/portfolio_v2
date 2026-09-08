import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "border-ink bg-ink text-paper hover:bg-accent hover:border-accent dark:border-fog dark:bg-fog dark:text-night dark:hover:bg-accent dark:hover:border-accent dark:hover:text-paper"
      : "border-line text-ink hover:border-accent hover:text-accent dark:border-line-dark dark:text-fog dark:hover:border-accent dark:hover:text-accent";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
