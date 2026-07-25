"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import {
  inquiryInterests,
  type InquiryFieldErrors,
  type InquiryInterest,
} from "@/lib/contact";
import { cx } from "@/lib/cx";

type FormState = {
  name: string;
  email: string;
  interest: InquiryInterest | "";
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  interest: "",
  message: "",
  website: "",
};

const fieldClassName =
  "w-full border border-border/80 bg-transparent px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<InquiryFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerError(null);

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        errors?: InquiryFieldErrors;
        error?: string;
      };

      if (!response.ok) {
        if (payload.errors) setErrors(payload.errors);
        setServerError(payload.error ?? "Unable to send your message right now.");
        setStatus("error");
        return;
      }

      setForm(initialState);
      setStatus("success");
    } catch {
      setServerError("Unable to send your message right now.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border/70 bg-surface/40 px-6 py-10 text-center sm:px-8">
        <p className="font-display text-2xl tracking-tight text-text">
          Message sent.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Thanks for reaching out. I will get back to you soon.
        </p>
        <button
          type="button"
          className="mt-6 text-sm tracking-wide text-muted transition-colors hover:text-text"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          error={errors.name}
        >
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className={fieldClassName}
            placeholder="Your name"
            required
          />
        </Field>

        <Field
          id="email"
          label="Email"
          error={errors.email}
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className={fieldClassName}
            placeholder="you@email.com"
            required
          />
        </Field>
      </div>

      <Field id="interest" label="Interest" error={errors.interest}>
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              interest: event.target.value as InquiryInterest | "",
            }))
          }
          className={cx(fieldClassName, "appearance-none")}
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          {inquiryInterests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className={cx(fieldClassName, "resize-y min-h-36")}
          placeholder="Tell me about your trip, collaboration, or project."
          required
        />
      </Field>

      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) =>
            setForm((current) => ({ ...current, website: event.target.value }))
          }
        />
      </div>

      {serverError ? (
        <p className="text-sm text-muted" role="alert">
          {serverError}
        </p>
      ) : null}

      <div className="pt-1">
        <Button type="submit" disabled={status === "submitting"} className="min-w-40">
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="space-y-2 text-left">
      <label htmlFor={id} className="block text-xs font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-muted" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
