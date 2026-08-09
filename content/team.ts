export type TeamMember = {
  name: string;
  role: string;
  specialization: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. Aimen Riaz PT",
    role: "Physiotherapist · Co-Founder & Managing Partner",
    specialization:
      "Founder, owner, and clinic manager focused on personalized physiotherapy and recovery care.",
  },
  {
    name: "Dr. Ali Raza Khan PT",
    role: "Physiotherapist · Co-Founder & Owner",
    specialization:
      "Founder, owner, and practice manager dedicated to hands-on treatment and clinic operations.",
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
