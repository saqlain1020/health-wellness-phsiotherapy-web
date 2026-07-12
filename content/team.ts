export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  specialization: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. Selal Ahmed",
    role: "Head of Geriatric in Liaquat National Hospital",
    experience: "8+ years",
    specialization: "Internal Medicine & Geriatrics",
  },
  {
    name: "Dr. Noor Ul Ain (PT) (DPT),(DFT)",
    role: "Pain Management Specialist",
    experience: "5+ years",
    specialization: "Antenatal & Postnatal Exercise Specialist - Educord",
  },
  {
    name: "Dr. Hussain Yasir Ali (PT)",
    role: "Rehab Specialist",
    experience: "8+ years",
    specialization: "Chiropractor, Physiotherapist, Acupuncturist",
  },
  {
    name: "Dr. Mehwish Khan (PT)",
    role: "CCRP, CHPE",
    experience: "8+ years",
    specialization: "Certified Kinesiology taping from UK",
  },
  {
    name: "Dr. Quratulain Qureshi (PT)",
    role: "BSPT, CHPE",
    experience: "6+ years",
    specialization: "Certified Manual Therapy from UK",
  },
];

export const aboutStory = {
  intro:
    "Dedicated to restoring your health and helping you achieve your wellness goals through personalized care and innovative treatments.",
  paragraphs: [
    "At Health and Wellness Physiotherapy Healing Center, our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health, quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue.",
    "This includes, but is not limited to, your work and home stressors, overall body condition, nutrition, genetic & postural habits, or if you've suffered any type of injuries. We are here for you.",
    "Our commitment extends beyond treatment — we're dedicated to making a positive social impact in the community where we live and work.",
  ],
};

export const values = [
  {
    title: "Patient-Centered Care",
    description:
      "We put our patients first, tailoring every treatment plan to meet individual needs and goals.",
  },
  {
    title: "Excellence in Treatment",
    description:
      "We maintain the highest standards of care using evidence-based practices and cutting-edge technology.",
  },
  {
    title: "Experienced Team",
    description:
      "Our licensed therapists bring years of experience and specialized training to every treatment session.",
  },
  {
    title: "State-of-the-Art Facility",
    description:
      "Our modern facilities are equipped with the latest therapeutic equipment and technology.",
  },
] as const;
