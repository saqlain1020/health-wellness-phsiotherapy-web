import type { ComponentProps } from "react";

const fieldClass =
  "w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

export function Label({
  className = "",
  ...props
}: ComponentProps<"label">) {
  return (
    <label
      className={`mb-1.5 block text-sm font-medium text-accent ${className}`}
      {...props}
    />
  );
}

export function Input({ className = "", ...props }: ComponentProps<"input">) {
  return <input className={`${fieldClass} ${className}`} {...props} />;
}

export function Textarea({
  className = "",
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea className={`${fieldClass} min-h-28 resize-y ${className}`} {...props} />
  );
}

export function Select({
  className = "",
  children,
  ...props
}: ComponentProps<"select">) {
  return (
    <select className={`${fieldClass} ${className}`} {...props}>
      {children}
    </select>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-700">{message}</p>;
}
