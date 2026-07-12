"use server";

import {
  getAppointmentSheetUrl,
  postToSheetDb,
} from "@/lib/sheetdb";
import { appointmentSchema } from "@/lib/validation";
import type { ActionResult } from "@/app/actions/contact";

export async function submitAppointment(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const consentRaw = formData.get("consent");
  const parsed = appointmentSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    preferredLocation: formData.get("preferredLocation"),
    serviceType: formData.get("serviceType"),
    preferredDate: formData.get("preferredDate"),
    preferredTime: formData.get("preferredTime"),
    chiefComplaint: formData.get("chiefComplaint"),
    painLevel: formData.get("painLevel") || "",
    consent: consentRaw === "on" || consentRaw === "true" || consentRaw === "1",
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { consent, ...rest } = parsed.data;
  const payload = {
    ...rest,
    consent,
    date: new Date().toISOString(),
  };

  const result = await postToSheetDb(getAppointmentSheetUrl(), payload);
  if (!result.ok) {
    return {
      success: false,
      message: result.message || "Something went wrong. Please try again.",
    };
  }

  return {
    success: true,
    message:
      "Appointment request submitted! We'll contact you within 24 hours to confirm.",
  };
}
