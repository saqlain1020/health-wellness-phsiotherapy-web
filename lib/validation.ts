import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().optional().default(""),
  preferredLocation: z.enum(["Tariq-Road", "DHA-Phase-V", "Home-Service"]),
  subject: z.string().trim().optional().default(""),
  message: z.string().trim().min(10, "Please describe your inquiry"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const appointmentSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().min(7, "Please enter a phone number"),
  preferredLocation: z.enum(["Tariq-Road", "DHA-Phase-V", "Home-Service"]),
  serviceType: z.string().trim().min(1, "Please select a service"),
  preferredDate: z.string().trim().min(1, "Please select a date"),
  preferredTime: z.string().trim().min(1, "Please select a time"),
  chiefComplaint: z.string().trim().min(5, "Please describe your complaint"),
  painLevel: z.string().trim().optional().default(""),
  consent: z.boolean().refine((value) => value === true, {
    message: "Please accept the consent to proceed",
  }),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;

export const LOCATION_OPTIONS = [
  { value: "Tariq-Road", label: "Tariq Road" },
  { value: "DHA-Phase-V", label: "DHA Phase V" },
  { value: "Home-Service", label: "Home Service" },
] as const;

export const TIME_SLOTS = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
] as const;

export const PAIN_LEVELS = [
  "1 - Mild",
  "2",
  "3",
  "4",
  "5 - Moderate",
  "6",
  "7",
  "8",
  "9",
  "10 - Severe",
] as const;
