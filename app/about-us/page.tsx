import type { Metadata } from "next";
import { CtaBanner, PageHero, SectionHeading } from "@/components/layout/Section";
import { aboutStory, team, values } from "@/content/team";
import { whyChooseUs } from "@/content/whyChooseUs";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutStory.intro,
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" description={aboutStory.intro} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading eyebrow="Our Story" title="Committed To Your Recovery" />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
          {aboutStory.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides Every Session"
            description="These core values guide everything we do and ensure that we provide the highest quality care to every patient."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="border border-border bg-background/70 p-6"
              >
                <h3 className="text-xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet Our Expert Team"
          description="Licensed professionals with specialized training to support your recovery."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="border border-border bg-surface p-6"
            >
              <div
                className="mb-5 aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(15,118,110,0.15), rgba(15,31,28,0.35)), url('/images/placeholders/team.svg')",
                }}
                role="img"
                aria-label={`${member.name} placeholder portrait`}
              />
              <h3 className="text-xl">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm text-muted">
                Experience: {member.experience}
              </p>
              <p className="mt-1 text-sm text-muted">
                Specialization: {member.specialization}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-primary-soft/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            title="Why Choose Health and Wellness Physiotherapy Healing Center?"
            description="Care that combines clinical expertise with a patient-first experience."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="border border-border bg-surface p-5">
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Begin Your Healing Journey?"
        description="Whether your condition was caused by a car accident, sport, work accident, slip and fall or otherwise; we welcome the opportunity to serve you."
        primaryHref="/book-appointment"
        primaryLabel="Book an Appointment"
        secondaryHref="/contact-us"
        secondaryLabel="Contact Us Today"
      />
    </>
  );
}
