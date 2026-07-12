export type TreatmentCategory = {
  category: string;
  treatments: string[];
};

export const treatmentCategories: TreatmentCategory[] = [
  {
    category: "Pain Management Treatments",
    treatments: [
      "Chronic Pain Management",
      "Acute Pain Relief",
      "Joint Pain Treatment",
      "Muscle Pain Therapy",
      "Nerve Pain Management",
      "Post-Surgical Pain Relief",
    ],
  },
  {
    category: "Physical Therapy Treatments",
    treatments: [
      "Manual Therapy",
      "Exercise Therapy",
      "Gait Training",
      "Balance Training",
      "Strength Training",
      "Range of Motion Therapy",
    ],
  },
  {
    category: "Orthopedic Treatments",
    treatments: [
      "Joint Mobilization",
      "Soft Tissue Mobilization",
      "Sports Injury Rehabilitation",
      "Post-Fracture Therapy",
      "Arthritis Management",
      "Tendon and Ligament Repair",
    ],
  },
  {
    category: "Specialized Treatments",
    treatments: [
      "Extracorporeal Shock Wave Therapy",
      "Electrical Stimulation",
      "Ultrasound Therapy",
      "Heat and Cold Therapy",
      "Dry Needling",
      "Cupping Therapy",
    ],
  },
];
