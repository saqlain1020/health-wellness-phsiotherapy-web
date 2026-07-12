import Link from "next/link";
import { locations } from "@/content/locations";
import { footerLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-accent text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <h3 className="font-display text-2xl tracking-[0.06em] text-white">
            {site.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-primary-soft/80">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Your trusted partner in healing and recovery. We provide
            comprehensive physical therapy and rehabilitation services.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-soft">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {locations.map((location) => (
          <div key={location.id}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-soft">
              {location.name}
            </h4>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              {location.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {location.phones.map((phone, index) => (
                <a
                  key={phone}
                  href={location.phoneHrefs[index]}
                  className="block transition hover:text-white"
                >
                  {phone}
                </a>
              ))}
              <p>{location.hours}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
