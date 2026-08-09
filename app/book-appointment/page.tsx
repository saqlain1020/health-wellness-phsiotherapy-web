import type { Metadata } from "next";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PageHero, SectionHeading } from "@/components/layout/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request a physiotherapy appointment at our Shadman clinic or via home service.",
};

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        title="Book an Appointment"
        description="Request your preferred time and location. We'll confirm your appointment within 24 hours."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Schedule"
              title="Start Your Recovery Plan"
              description="Share a few details about your condition and preferred clinic or home visit. Our team will follow up to confirm."
            />
            <ul className="mt-8 space-y-3 text-sm text-muted">
              <li>Hours: {site.hours}</li>
              <li>Clinic & home-based physiotherapy across Karachi</li>
              <li>
                Call us:{" "}
                <a href={site.phonePrimaryHref} className="text-primary">
                  {site.phonePrimary}
                </a>
                {" · "}
                <a href={site.phoneSecondaryHref} className="text-primary">
                  {site.phoneSecondary}
                </a>
              </li>
            </ul>
          </div>
          <div className="border border-border bg-surface p-6 sm:p-8">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
