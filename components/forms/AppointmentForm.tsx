"use client";

import { useActionState } from "react";
import { submitAppointment } from "@/app/actions/appointment";
import type { ActionResult } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import {
  FieldError,
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui/Field";
import { serviceTypeOptions } from "@/content/services";
import {
  LOCATION_OPTIONS,
  PAIN_LEVELS,
  TIME_SLOTS,
} from "@/lib/validation";

const initialState: ActionResult | null = null;

export function AppointmentForm() {
  const [state, formAction, pending] = useActionState(
    submitAppointment,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="Enter your first name"
            autoComplete="given-name"
          />
          <FieldError message={state?.fieldErrors?.firstName?.[0]} />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Enter your last name"
            autoComplete="family-name"
          />
          <FieldError message={state?.fieldErrors?.lastName?.[0]} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            autoComplete="email"
          />
          <FieldError message={state?.fieldErrors?.email?.[0]} />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(+92) 000 0000000"
            autoComplete="tel"
          />
          <FieldError message={state?.fieldErrors?.phone?.[0]} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="preferredLocation">Preferred Location *</Label>
          <Select
            id="preferredLocation"
            name="preferredLocation"
            required
            defaultValue="Tariq-Road"
          >
            {LOCATION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <FieldError message={state?.fieldErrors?.preferredLocation?.[0]} />
        </div>
        <div>
          <Label htmlFor="serviceType">Service Type *</Label>
          <Select id="serviceType" name="serviceType" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {serviceTypeOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Select>
          <FieldError message={state?.fieldErrors?.serviceType?.[0]} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="preferredDate">Preferred Date *</Label>
          <Input id="preferredDate" name="preferredDate" type="date" required />
          <FieldError message={state?.fieldErrors?.preferredDate?.[0]} />
        </div>
        <div>
          <Label htmlFor="preferredTime">Preferred Time *</Label>
          <Select id="preferredTime" name="preferredTime" required defaultValue="">
            <option value="" disabled>
              Select a time
            </option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </Select>
          <FieldError message={state?.fieldErrors?.preferredTime?.[0]} />
        </div>
      </div>

      <div>
        <Label htmlFor="painLevel">Pain Level</Label>
        <Select id="painLevel" name="painLevel" defaultValue="">
          <option value="">Optional</option>
          {PAIN_LEVELS.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </Select>
        <FieldError message={state?.fieldErrors?.painLevel?.[0]} />
      </div>

      <div>
        <Label htmlFor="chiefComplaint">Chief Complaint *</Label>
        <Textarea
          id="chiefComplaint"
          name="chiefComplaint"
          required
          placeholder="Briefly describe your symptoms, injury, or reason for visit..."
        />
        <FieldError message={state?.fieldErrors?.chiefComplaint?.[0]} />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          defaultChecked
          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
        />
        <span>
          I consent to being contacted about this appointment request and
          understand this is not an emergency service. *
        </span>
      </label>
      <FieldError message={state?.fieldErrors?.consent?.[0]} />

      {state ? (
        <p
          className={`rounded-md px-3 py-2 text-sm ${
            state.success
              ? "bg-primary-soft text-accent"
              : "bg-red-50 text-red-800"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Submitting..." : "Request Appointment"}
      </Button>
    </form>
  );
}
