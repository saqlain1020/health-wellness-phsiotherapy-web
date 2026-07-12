"use server";

import {
  getContactSheetUrl,
  postToSheetDb,
} from "@/lib/sheetdb";
import { contactSchema } from "@/lib/validation";

export type ActionResult = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};


export async function submitContact(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || "",
    preferredLocation: formData.get("preferredLocation"),
    subject: formData.get("subject") || "",
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const payload = {
    ...parsed.data,
    date: new Date().toISOString(),
  };

  const result = await postToSheetDb(getContactSheetUrl(), payload);
  if (!result.ok) {
    return {
      success: false,
      message: result.message || "Something went wrong. Please try again.",
    };
  }

  return {
    success: true,
    message: "Message sent! We'll get back to you within 24 hours.",
  };
}
