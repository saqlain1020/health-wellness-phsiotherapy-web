"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <span className="block font-display text-base font-semibold tracking-[0.02em] text-accent sm:text-lg">
            {site.name}
          </span>
          <span className="block truncate text-[10px] uppercase tracking-[0.12em] text-muted group-hover:text-primary sm:text-[11px]">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.href === "/book-appointment" ? (
              <ButtonLink key={link.href} href={link.href}>
                {link.label}
              </ButtonLink>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-accent/90 transition hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-accent lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-surface px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-accent hover:bg-primary-soft"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
