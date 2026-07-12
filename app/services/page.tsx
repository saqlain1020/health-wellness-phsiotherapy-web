import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore physiotherapy services including physical therapy, acupuncture, pain management, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="We offer a wide range of comprehensive services to meet your needs and goals. Personalized medical care and rehabilitative therapies for every stage of recovery."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="All Services"
          title="Find The Right Path To Feeling Better"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col border border-border bg-surface p-6 transition hover:border-primary"
            >
              <h2 className="text-xl group-hover:text-primary">{service.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {service.shortDescription}
              </p>
              <span className="mt-5 text-sm font-semibold text-primary">
                Learn More
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <ButtonLink href="/treatments" variant="outline">
            View Treatment Categories
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
