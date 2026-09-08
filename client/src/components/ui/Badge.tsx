import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-soft dark:border-line-dark dark:text-fog-soft">
      {children}
    </span>
  );
}
