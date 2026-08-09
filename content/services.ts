export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  imgSrc?: string;
};

export const services: Service[] = [
  {
    slug: "physical-therapy",
    title: "Physical Therapy",
    shortDescription:
      "Your personal physical therapy begins with a comprehensive assessment and a tailored recovery plan.",
    fullDescription:
      "We provide Physical Therapy services tailored to your condition. Your personal physical therapy begins with a comprehensive evaluation of movement, strength, and pain patterns, followed by a customized plan that may include manual therapy, therapeutic exercise, and education for lasting results.",
    benefits: [
      "Individualized assessment and treatment plan",
      "Improved mobility and functional strength",
      "Reduced pain and faster return to daily activity",
    ],
    imgSrc: "/images/physical_therapy.jpeg",
  },
  {
    slug: "acupuncture",
    title: "Acupuncture",
    shortDescription: "Fine-needle therapy at specific points to ease pain, support recovery, and restore balance.",
    fullDescription:
      "Acupuncture is a traditional therapy that involves the insertion of fine needles at specific points on the body. It is used to reduce pain, improve circulation, and support neurological and musculoskeletal recovery as part of an integrated physiotherapy approach.",
    benefits: [
      "Drug-free pain relief support",
      "Helps with stiffness and muscle tension",
      "Complements manual and exercise therapy",
    ],
    imgSrc: "/images/accupunture.jpeg",
  },
  {
    slug: "osteo-adjustment",
    title: "Osteo-adjustment",
    shortDescription: "Hands-on techniques to realign the spine and joints for better movement and comfort.",
    fullDescription:
      "Osteo-adjustment focuses on hands-on techniques to realign the spine and joints. This therapy aims to restore joint mobility, reduce mechanical stress, and improve posture-related discomfort under licensed clinical care.",
    benefits: [
      "Improved joint alignment and range of motion",
      "Relief from mechanical back and neck strain",
      "Better posture and movement efficiency",
    ],
    imgSrc: "/images/osteo.jpeg",
  },
  {
    slug: "deep-tissue-therapy",
    title: "Deep Tissue Therapy",
    shortDescription: "Targets deeper muscle layers and connective tissue to release chronic tension.",
    fullDescription:
      "Deep tissue therapy targets the deeper layers of muscles and connective tissues. It is especially helpful for chronic tightness, overuse injuries, and postural strain when delivered with clinical assessment and graded pressure.",
    benefits: [
      "Releases stubborn muscle knots",
      "Supports recovery from overuse injuries",
      "Improves tissue flexibility",
    ],
    imgSrc: "/images/deep_tissue.jpeg",
  },
  {
    slug: "neurodynamics-strengthening",
    title: "Neurodynamics & Strengthening",
    shortDescription: "Gentle nerve mobilization combined with targeted strengthening for lasting function.",
    fullDescription:
      "Neurodynamic therapy combines gentle nerve mobilization with targeted strengthening exercises. This approach helps address nerve-related symptoms while rebuilding the strength and control needed for everyday movement.",
    benefits: [
      "Addresses nerve sensitivity and restriction",
      "Builds supportive muscular control",
      "Improves confidence in movement",
    ],
    imgSrc: "/images/neuro.jpeg",
  },
  {
    slug: "soft-tissue-healing",
    title: "Soft Tissue Healing & Eccentric Exercise",
    shortDescription: "Tissue-specific care plus eccentric loading to rebuild resilient soft tissue.",
    fullDescription:
      "This therapy combines tissue-specific treatments with eccentric exercises that gradually lengthen and load soft tissues. It supports tendon and muscle recovery while reducing the risk of re-injury.",
    benefits: [
      "Structured soft-tissue recovery",
      "Progressive loading for tendon health",
      "Lower risk of symptom return",
    ],
    imgSrc: "/images/soft_tissue.jpeg",
  },
  {
    slug: "geriatric-rehabilitation",
    title: "Geriatric Rehabilitation with TENS Therapy",
    shortDescription: "Safe rehabilitation for older adults with TENS for pain relief and mobility support.",
    fullDescription:
      "This therapy combines safe physical rehabilitation with TENS (Transcutaneous Electrical Nerve Stimulation) to relieve pain and support mobility in older adults. Plans emphasize balance, strength, and independence.",
    benefits: [
      "Age-appropriate exercise progression",
      "Pain relief support with TENS",
      "Focus on safe mobility and independence",
    ],
  },
  {
    slug: "recovery-exercises",
    title: "Recovery Exercises",
    shortDescription: "Structured programs that gradually rebuild mobility, strength, and endurance.",
    fullDescription:
      "Recovery exercises are structured programs that gradually rebuild mobility and strength. They help patients return to work, sport, and daily routines with clear progressions and home guidance.",
    benefits: ["Clear, progressive exercise plans", "Home program support", "Return-to-activity focus"],
  },
  {
    slug: "postpartum-physiotherapy",
    title: "Postpartum Physiotherapy",
    shortDescription: "Pelvic and core recovery care to help women heal after pregnancy and delivery.",
    fullDescription:
      "Postpartum physiotherapy helps women recover from pregnancy and delivery by focusing on pelvic floor health, core control, posture, and safe return to activity under specialized guidance.",
    benefits: [
      "Pelvic floor and core recovery",
      "Posture and back comfort support",
      "Safe return to exercise and daily life",
    ],
  },
  {
    slug: "pain-management",
    title: "Pain Management",
    shortDescription: "Holistic physiotherapy combining manual therapy, TENS, acupuncture, and exercise.",
    fullDescription:
      "Physiotherapy-based pain management uses a holistic approach that combines manual therapy, TENS, acupuncture, and therapeutic exercise. Care plans target root contributing factors rather than symptoms alone.",
    benefits: ["Multi-modal pain strategies", "Root-cause focused assessment", "Sustainable self-management education"],
  },
  {
    slug: "kinesiology-taping",
    title: "Kinesiology Taping (KT Tape)",
    shortDescription: "Strategic taping to reduce swelling, support muscles, and improve lymphatic flow.",
    fullDescription:
      "Kinesiology tape is applied strategically to reduce swelling, improve lymphatic flow, and support muscles and joints during recovery and activity without restricting natural movement.",
    benefits: ["Support during rehab and sport", "May reduce swelling and discomfort", "Allows functional movement"],
  },
  {
    slug: "pediatric-physiotherapy",
    title: "Pediatric Physiotherapy",
    shortDescription: "Developmental and recovery care for infants, children, and adolescents.",
    fullDescription:
      "Pediatric physiotherapy focuses on infants, children, and adolescents with developmental, postural, or injury-related needs. Sessions are age-appropriate, engaging, and family-centered.",
    benefits: [
      "Age-appropriate therapy approaches",
      "Support for developmental milestones",
      "Family education and home strategies",
    ],
  },
  {
    slug: "postural-correction-therapy",
    title: "Postural Correction Therapy",
    shortDescription: "Assessment, exercise, and ergonomic training to restore healthier posture.",
    fullDescription:
      "Postural correction therapy uses assessment, exercises, and ergonomic training to restore proper alignment, reduce strain from desk or lifestyle habits, and build lasting postural awareness.",
    benefits: [
      "Workplace and lifestyle ergonomics",
      "Strength and mobility for better posture",
      "Reduced neck, shoulder, and back strain",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceTypeOptions = services.map((service) => service.title);
