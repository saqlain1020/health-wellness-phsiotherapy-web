export type HeroSlide = {
  id: number;
  eyebrow: string;
  title: string;
  buttonText: string;
  buttonHref: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "Health and Wellness Physiotherapy",
    title: "Your Healing Path Starts With Us",
    buttonText: "More On Our Services",
    buttonHref: "/services",
  },
  {
    id: 2,
    eyebrow: "Get Your Life Back",
    title: "You and Your Health Are Our Priority",
    buttonText: "Book an Appointment",
    buttonHref: "/book-appointment",
  },
  {
    id: 3,
    eyebrow: "Best Medical Team With Care You Can Trust",
    title: "Car Accident? We're The Best Recovery Team",
    buttonText: "Contact Us Today!",
    buttonHref: "/contact-us",
  },
  {
    id: 4,
    eyebrow: "Committed To Your Recovery",
    title: "We Have The Best Licensed Therapists",
    buttonText: "More About Us",
    buttonHref: "/about-us",
  },
  {
    id: 5,
    eyebrow: "Go Back To What You Love",
    title: "Heal Faster With Better Results",
    buttonText: "Book An Appointment",
    buttonHref: "/book-appointment",
  },
];
