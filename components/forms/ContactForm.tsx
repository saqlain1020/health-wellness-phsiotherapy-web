"use client";

import { useActionState } from "react";
import { submitContact, type ActionResult } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import {
  FieldError,
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui/Field";
import { LOCATION_OPTIONS } from "@/lib/validation";

const initialState: ActionResult | null = null;

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your full name"
          autoComplete="name"
        />
        <FieldError message={state?.fieldErrors?.name?.[0]} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email Address *</Label>
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
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(+92) 000 0000000"
            autoComplete="tel"
          />
          <FieldError message={state?.fieldErrors?.phone?.[0]} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="preferredLocation">Preferred Location</Label>
          <Select
            id="preferredLocation"
            name="preferredLocation"
            defaultValue="Shadman"
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
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Brief description of your inquiry"
          />
          <FieldError message={state?.fieldErrors?.subject?.[0]} />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Please describe your condition, symptoms, or questions in detail..."
        />
        <FieldError message={state?.fieldErrors?.message?.[0]} />
      </div>

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
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
