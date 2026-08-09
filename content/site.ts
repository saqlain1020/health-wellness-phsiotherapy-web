export const site = {
  name: "Health and Wellness",
  shortName: "H&W",
  tagline: "Physiotherapy Healing Center",
  fullName: "Health and Wellness Physiotherapy Healing Center",
  description:
    "Comprehensive physical therapy and rehabilitation services across Karachi, including clinic and home-based care.",
  phonePrimary: "0324-1458751",
  phonePrimaryHref: "tel:+923241458751",
  phoneSecondary: "0325-7269231",
  phoneSecondaryHref: "tel:+923257269231",
  hours: "Mon–Sat: 5PM – 8PM",
  hoursShort: "Mon-Sat 5PM to 8PM",
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
