import type { Metadata } from "next";
import { CtaBanner, PageHero, SectionHeading } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { treatmentCategories } from "@/content/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Pain management, physical therapy, orthopedic, and specialized treatment options.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Treatments"
        description="Evidence-informed treatment options across pain management, physical therapy, orthopedic care, and specialized modalities."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Clinical Options"
          title="Treatment Categories"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {treatmentCategories.map((category) => (
            <article
              key={category.category}
              className="border border-border bg-surface p-6 sm:p-8"
            >
              <h2 className="text-2xl">{category.category}</h2>
              <ul className="mt-5 space-y-2">
                {category.treatments.map((treatment) => (
                  <li
                    key={treatment}
                    className="border-b border-border/70 py-2 text-sm text-muted last:border-0"
                  >
                    {treatment}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/services" variant="outline">
            Browse Services
          </ButtonLink>
        </div>
      </section>

      <CtaBanner
        title="Not sure which treatment fits?"
        description="Book a consultation and our therapists will recommend a plan based on your assessment."
        primaryHref="/book-appointment"
        primaryLabel="Book an Appointment"
      />
    </>
  );
}
