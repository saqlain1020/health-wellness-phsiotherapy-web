import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner, PageHero } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { getServiceBySlug, services } from "@/content/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero title={service.title} description={service.shortDescription} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="text-3xl">About This Service</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{service.fullDescription}</p>
            <h3 className="mt-10 text-2xl">Benefits</h3>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="border-l-2 border-primary pl-4 text-sm text-muted">
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/book-appointment">Book an Appointment</ButtonLink>
              <ButtonLink href="/services" variant="outline">
                All Services
              </ButtonLink>
            </div>
          </div>
          <aside
            className="min-h-72 border border-border bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(160deg, rgba(15,118,110,0.25), rgba(15,31,28,0.15)), url('${service.imgSrc || "/images/placeholders/service.svg"}')`,
            }}
            role="img"
            aria-label={`${service.title} placeholder`}
          />
        </div>
      </section>

      <CtaBanner
        title="Ready to start treatment?"
        description="Tell us about your symptoms and preferred location — clinic or home-based care."
        primaryHref="/book-appointment"
        primaryLabel="Book an Appointment"
        secondaryHref="/contact-us"
        secondaryLabel="Ask a Question"
      />
    </>
  );
}
