"use client";

import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/content/testimonials";

const avatarPalettes = [
  "from-primary to-sky",
  "from-amber to-coral",
  "from-sky to-primary",
  "from-coral to-amber",
  "from-primary-dark to-primary",
  "from-sky to-amber",
  "from-coral to-primary",
  "from-amber to-primary-dark",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Stars({ keyPrefix }: { keyPrefix: string }) {
  return (
    <div className="flex items-center gap-1" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`${keyPrefix}-${i}`}
          className="animate-star-pop h-5 w-5 fill-amber text-amber"
          style={{ animationDelay: `${i * 0.06}s` }}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const item = testimonials[index] ?? testimonials[0];

  useEffect(() => {
    const id = window.setInterval(() => {
      setDirection("next");
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const go = (nextIndex: number, dir: "next" | "prev") => {
    setDirection(dir);
    setIndex(nextIndex);
  };

  const prev = () =>
    go(index === 0 ? testimonials.length - 1 : index - 1, "prev");
  const next = () => go((index + 1) % testimonials.length, "next");

  return (
    <section className="relative overflow-hidden border-y border-border">
      <div className="review-glow absolute inset-0" />
      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 animate-pulse-soft rounded-full bg-amber/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 animate-float rounded-full bg-sky/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Patient Stories
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
              What Our Patients Say
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Real recoveries from Google reviews — pain relief, mobility, and
              care that feels personal.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-amber/30 bg-amber-soft/80 px-4 py-2 text-sm font-medium text-amber shadow-sm">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sky shadow-sm">
              G
            </span>
            Google 5★ reviews
          </div>
        </div>

        {/* Marquee strip of names */}
        <div className="mt-10 overflow-hidden rounded-full border border-border/80 bg-white/50 py-2 backdrop-blur-sm">
          <div className="animate-marquee flex w-max gap-8 px-4 text-sm font-medium text-muted">
            {[...testimonials, ...testimonials].map((t, i) => (
              <span key={`${t.name}-${i}`} className="inline-flex items-center gap-2">
                <Star className="h-3.5 w-3.5 fill-amber text-amber" aria-hidden />
                {t.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-stretch">
          <figure
            key={item.name}
            className={`relative overflow-hidden rounded-3xl border border-primary/15 bg-white/90 p-7 shadow-[0_24px_60px_-36px_rgba(15,118,110,0.55)] backdrop-blur sm:p-10 ${
              direction === "next" ? "animate-slide-in" : "animate-scale-in"
            }`}
          >
            <Quote
              className="absolute -right-2 -top-2 h-28 w-28 text-primary/10"
              strokeWidth={1.25}
              aria-hidden
            />
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <Stars keyPrefix={item.name} />
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Verified review
              </span>
            </div>

            <blockquote className="relative mt-6 font-display text-xl leading-relaxed text-accent sm:text-2xl">
              “{item.quote}”
            </blockquote>

            <figcaption className="relative mt-8 flex items-center gap-4 border-t border-border pt-6">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-bold text-white shadow-md ${avatarPalettes[index % avatarPalettes.length]}`}
              >
                {initials(item.name)}
              </div>
              <div>
                <p className="text-lg font-semibold text-accent">{item.name}</p>
                <p className="text-sm text-muted">{item.source}</p>
              </div>
            </figcaption>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-accent transition hover:border-primary hover:bg-primary hover:text-white"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-accent transition hover:border-primary hover:bg-primary hover:text-white"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="ml-2 flex flex-wrap gap-1.5">
                {testimonials.map((testimonial, testimonialIndex) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Go to review ${testimonialIndex + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      testimonialIndex === index
                        ? "w-8 bg-gradient-to-r from-amber to-coral"
                        : "w-2.5 bg-border hover:bg-primary/50"
                    }`}
                    onClick={() =>
                      go(
                        testimonialIndex,
                        testimonialIndex > index ? "next" : "prev",
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </figure>

          <div className="flex flex-col gap-4">
            {testimonials
              .filter((_, i) => i !== index)
              .slice(0, 3)
              .map((preview, previewIndex) => {
                const previewIndexAbsolute = testimonials.findIndex(
                  (t) => t.name === preview.name,
                );
                return (
                  <button
                    key={preview.name}
                    type="button"
                    onClick={() =>
                      go(
                        previewIndexAbsolute,
                        previewIndexAbsolute > index ? "next" : "prev",
                      )
                    }
                    className="card-lift group rounded-2xl border border-border bg-white/80 p-4 text-left backdrop-blur transition hover:border-amber/40"
                    style={{ animationDelay: `${previewIndex * 0.08}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xs font-bold text-white ${avatarPalettes[previewIndexAbsolute % avatarPalettes.length]}`}
                      >
                        {initials(preview.name)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-amber text-amber"
                              aria-hidden
                            />
                          ))}
                        </div>
                        <p className="mt-1 truncate text-sm font-semibold text-accent group-hover:text-primary">
                          {preview.name}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                          {preview.quote}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}

            <div className="mt-auto rounded-2xl bg-gradient-to-br from-accent via-primary-dark to-primary p-5 text-white shadow-lg">
              <p className="font-display text-2xl">98%</p>
              <p className="mt-1 text-sm text-white/80">
                patients recommend our care based on public reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
