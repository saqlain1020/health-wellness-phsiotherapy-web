import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero, SectionHeading } from "@/components/layout/Section";
import { locations } from "@/content/locations";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch to schedule your appointment or ask questions about our physiotherapy services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Get in touch with us today to schedule your appointment or ask any questions about our services."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Visit Us"
          title="Visit Us Today! Or Get Home Based Service"
          description="Clinic care at Tariq Road and DHA Phase V, plus home-based physiotherapy across Karachi."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.id}
              className="border border-border bg-surface p-6"
            >
              <h3 className="text-2xl">{location.name}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-accent">Address</dt>
                  <dd className="mt-1 text-muted">
                    {location.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-accent">Phone</dt>
                  <dd className="mt-1 space-y-1 text-muted">
                    {location.phones.map((phone, index) => (
                      <a
                        key={phone}
                        href={location.phoneHrefs[index]}
                        className="block hover:text-primary"
                      >
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-accent">Hours</dt>
                  <dd className="mt-1 text-muted">{location.hours}</dd>
                </div>
              </dl>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm font-semibold text-primary"
              >
                Get Directions
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Message"
              title="Send Us a Message"
              description="Fill out the form and we'll get back to you as soon as possible."
            />
            <div className="mt-8 border border-border bg-background/60 p-5">
              <h3 className="text-lg">Need Immediate Assistance?</h3>
              <p className="mt-2 text-sm text-muted">
                For urgent inquiries, call our offices directly.
              </p>
              <a
                href={site.phonePrimaryHref}
                className="mt-4 block text-lg font-semibold text-primary"
              >
                {site.phonePrimary}
              </a>
              <a
                href={site.phoneSecondaryHref}
                className="mt-1 block text-lg font-semibold text-primary"
              >
                {site.phoneSecondary}
              </a>
            </div>
          </div>
          <div className="border border-border bg-background p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
