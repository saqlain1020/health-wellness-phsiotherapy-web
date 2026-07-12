import type { Metadata } from "next";
import { PageHero } from "@/components/layout/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service placeholder for ${site.fullName}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="Placeholder terms page. Replace with final legal copy before production launch."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-4 text-sm leading-relaxed text-muted">
          <p>
            By using the {site.fullName} website, you agree to use the forms and
            content for personal, non-emergency communication about physiotherapy
            services.
          </p>
          <p>
            Appointment requests submitted online are not confirmed until our
            team contacts you. This page is a placeholder for full terms of
            service.
          </p>
        </div>
      </section>
    </>
  );
}
