import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Award,
  Building2,
  HeartPulse,
  Home,
  MapPin,
  Phone,
  Scan,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner, SectionHeading } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { homeServiceNote, locations } from "@/content/locations";
import { services } from "@/content/services";
import { aboutStory } from "@/content/team";
import { whyChooseUs } from "@/content/whyChooseUs";

const whyIcons = [Scan, Building2, ShieldCheck, HeartPulse, Award, Sparkles];
const whyColors = [
  "bg-sky-soft text-sky",
  "bg-primary-soft text-primary",
  "bg-amber-soft text-amber",
  "bg-coral-soft text-coral",
  "bg-primary-soft text-primary-dark",
  "bg-amber-soft text-amber",
];

const serviceIcons = [
  Activity,
  Stethoscope,
  HeartPulse,
  Users,
  Sparkles,
  ShieldCheck,
];

export default function HomePage() {
  const previewServices = services.slice(0, 6);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="animate-fade-up">
          <SectionHeading
            eyebrow="If You're in Pain, We Can Help"
            title="Exceeding Your Expectations"
            description="We have what you need to get better, faster, and with the best results. Our caregivers specialize in personalized medical care and rehabilitative therapies."
          />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: HeartPulse,
              label: "Personalized recovery plans",
              tone: "bg-coral-soft text-coral",
              delay: "delay-1",
            },
            {
              icon: Home,
              label: "Clinic & home-based care",
              tone: "bg-primary-soft text-primary",
              delay: "delay-2",
            },
            {
              icon: Award,
              label: "Licensed specialist team",
              tone: "bg-amber-soft text-amber",
              delay: "delay-3",
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`card-lift animate-fade-up flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 ${item.delay}`}
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.tone}`}
              >
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-sm font-semibold text-accent">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-border bg-surface/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Our Care"
            title="Services Built Around Your Recovery"
            description="Comprehensive physiotherapy options for injury recovery, pain relief, and long-term mobility."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((service, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-background/90 p-6"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition group-hover:bg-primary/10" />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl transition group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-10">
            <ButtonLink href="/services" variant="outline">
              Check All Of Our Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Root-Cause Care, Not Quick Fixes"
            description={aboutStory.paragraphs[0]}
          />
          <p className="mt-4 text-muted">{aboutStory.paragraphs[1]}</p>
          <div className="mt-8">
            <ButtonLink href="/about-us" variant="outline">
              Learn More About Us
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 animate-float rounded-full bg-amber/20 blur-2xl" />
          <div className="absolute -bottom-4 -right-4 h-28 w-28 animate-pulse-soft rounded-full bg-sky/25 blur-2xl" />
          <div
            className="relative min-h-72 overflow-hidden rounded-3xl border border-border bg-cover bg-center shadow-lg"
            style={{
              backgroundImage:
                "linear-gradient(160deg, rgba(15,118,110,0.35), rgba(15,31,28,0.2)), url('/images/placeholders/clinic.svg')",
            }}
            role="img"
            aria-label="Clinic care placeholder"
          />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-accent text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.22),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(217,119,6,0.18),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Care Designed For Faster, Safer Results"
            tone="dark"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <div
                  key={item.title}
                  className="card-lift group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/35 hover:bg-white/10"
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${whyColors[i % whyColors.length]} transition group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Whether injury came from sport, work, or a fall — we're ready to help."
        description="Book an appointment at either clinic location or request home-based physiotherapy across Karachi."
        primaryHref="/book-appointment"
        primaryLabel="Book an Appointment"
        secondaryHref="/contact-us"
        secondaryLabel="Contact Us"
      />

      <Testimonials />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Locations"
          title={homeServiceNote}
          description="Two clinic locations plus home-based service across Karachi."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.id}
              className="card-lift rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl">{location.name}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-primary">
                    <MapPin className="h-4 w-4" aria-hidden />
                    {location.area}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft text-sky">
                  <Building2 className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <div className="mt-4 space-y-1 text-sm text-muted">
                {location.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-4 space-y-1 text-sm">
                {location.phones.map((phone, index) => (
                  <a
                    key={phone}
                    href={location.phoneHrefs[index]}
                    className="flex items-center gap-2 font-medium text-accent hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" aria-hidden />
                    {phone}
                  </a>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted">{location.hours}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/contact-us">Get an Initial Consultation</ButtonLink>
        </div>
      </section>
    </>
  );
}
