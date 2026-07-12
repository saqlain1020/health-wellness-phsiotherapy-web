export const site = {
  name: "Health and Wellness",
  shortName: "H&W",
  tagline: "Physiotherapy Healing Center",
  fullName: "Health and Wellness Physiotherapy Healing Center",
  description:
    "Comprehensive physical therapy and rehabilitation services across Karachi, including clinic and home-based care.",
  phonePrimary: "+92 323 9571533",
  phonePrimaryHref: "tel:+923239571533",
  phoneSecondary: "+92 334 3655597",
  phoneSecondaryHref: "tel:+923343655597",
  hours: "Mon–Sat: 11AM – 11PM",
  hoursShort: "Mon-Sat 11AM to 11PM",
  emailPlaceholder: "info@physiohealinghealthcentre.com",
  url: "https://www.physiohealinghealthcentre.com",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/book-appointment", label: "Book an Appointment" },
] as const;

export const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
  { href: "/book-appointment", label: "Book Appointment" },
] as const;
