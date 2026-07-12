import Link from "next/link";
import { site } from "@/content/site";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const titleClass = tone === "dark" ? "text-white" : "";
  const descriptionClass = tone === "dark" ? "text-white/75" : "text-muted";
  const eyebrowClass = tone === "dark" ? "text-primary-soft" : "text-primary";

  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowClass}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`text-3xl leading-tight sm:text-4xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-relaxed ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}

export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-accent via-[#123834] to-primary-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(204,251,241,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-primary-soft/90">
          {site.fullName}
        </p>
        <h1 className="animate-fade-up delay-1 mt-3 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="animate-fade-up delay-2 mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function CtaBanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-y border-border bg-gradient-to-r from-primary-soft/60 via-surface to-primary-soft/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-3 text-muted">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="inline-flex rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-accent transition hover:border-primary hover:text-primary"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
