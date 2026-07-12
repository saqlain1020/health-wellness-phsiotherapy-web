const DEFAULT_CONTACT_URL = "https://sheetdb.io/api/v1/vzldv7qmmv2ox";
const DEFAULT_APPOINTMENT_URL = "https://sheetdb.io/api/v1/q0r8m7v5vdvsl";

export function getContactSheetUrl() {
  return process.env.SHEETDB_CONTACT_URL || DEFAULT_CONTACT_URL;
}

export function getAppointmentSheetUrl() {
  return process.env.SHEETDB_APPOINTMENT_URL || DEFAULT_APPOINTMENT_URL;
}

export async function postToSheetDb(
  url: string,
  data: Record<string, unknown>,
): Promise<{ ok: true } | { ok: false; message: string }> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return {
        ok: false,
        message: text || `SheetDB request failed (${response.status})`,
      };
    }

    const json = (await response.json().catch(() => null)) as
      | { created?: number; message?: string }
      | null;

    // Appointment API returns { created: 1 }; contact may return an array/object
    if (json && typeof json === "object" && "created" in json && json.created !== 1) {
      return {
        ok: false,
        message: json.message || "Submission failed",
      };
    }

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error ? error.message : "Unable to reach SheetDB",
    };
  }
}
