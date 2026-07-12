import type { Metadata } from "next";
import { PageHero } from "@/components/layout/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy placeholder for ${site.fullName}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Placeholder policy page. Replace with final legal copy before production launch."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-4 text-sm leading-relaxed text-muted">
          <p>
            {site.fullName} respects your privacy. Contact and appointment
            details you submit through this website are used to respond to your
            inquiry and coordinate care.
          </p>
          <p>
            This page is a placeholder. Add your complete privacy policy,
            retention practices, and data-sharing disclosures here.
          </p>
        </div>
      </section>
    </>
  );
}
