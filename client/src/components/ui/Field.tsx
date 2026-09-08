import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldStyles =
  "w-full border border-line bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-accent focus:outline-none dark:border-line-dark dark:text-fog dark:placeholder:text-fog-soft/60";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={fieldStyles} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldStyles} resize-none`} />;
}
