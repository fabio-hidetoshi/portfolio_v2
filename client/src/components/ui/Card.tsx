import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`border border-line bg-paper p-6 transition-colors hover:border-accent dark:border-line-dark dark:bg-night-dim dark:hover:border-accent ${className}`}
    >
      {children}
    </div>
  );
}
