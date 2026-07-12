import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm shadow-primary/20",
  secondary: "bg-accent text-white hover:bg-foreground",
  ghost: "bg-transparent text-white hover:bg-white/10",
  outline:
    "border border-border bg-surface text-accent hover:border-primary hover:text-primary",
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
