"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { heroSlides } from "@/content/heroSlides";
import { site } from "@/content/site";

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index] ?? heroSlides[0];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-accent text-white">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(8,35,32,0.82), rgba(15,118,110,0.45)), url('/images/hero.jpg')",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(204,251,241,0.18),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(217,119,6,0.15),transparent_40%)]" />
      <div className="pointer-events-none absolute left-[12%] top-[22%] h-40 w-40 animate-float rounded-full bg-sky/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[18%] right-[10%] h-48 w-48 animate-pulse-soft rounded-full bg-amber/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="animate-fade-up font-display text-3xl leading-tight tracking-[0.04em] text-white sm:text-5xl md:text-6xl">
          {site.name}
        </p>
        <p className="animate-fade-up delay-1 mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber sm:text-base">
          {site.tagline}
        </p>
        <p className="animate-fade-up delay-1 mt-4 text-xs uppercase tracking-[0.2em] text-primary-soft/90">
          {slide.eyebrow}
        </p>
        <h1
          key={slide.id}
          className="animate-fade-up delay-2 mt-4 max-w-3xl font-display text-3xl leading-tight text-white sm:text-5xl"
        >
          {slide.title}
        </h1>
        <p className="animate-fade-up delay-3 mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          Comprehensive physiotherapy and home-based rehabilitation across Karachi — clinic care when you need it,
          recovery support where you live.
        </p>
        <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-3">
          <ButtonLink href={slide.buttonHref}>{slide.buttonText}</ButtonLink>
          <ButtonLink href="/book-appointment" variant="ghost">
            Book an Appointment
          </ButtonLink>
        </div>

        <div className="mt-10 flex items-center gap-2">
          {heroSlides.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${itemIndex + 1}`}
              className={`h-2 rounded-full transition-all ${
                itemIndex === index ? "w-8 bg-gradient-to-r from-white to-amber" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
      </div>

      <Link
        href="#services"
        className="absolute bottom-6 right-6 hidden animate-float items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 sm:inline-flex"
      >
        Scroll
        <ChevronDown className="h-4 w-4" />
      </Link>
    </section>
  );
}
