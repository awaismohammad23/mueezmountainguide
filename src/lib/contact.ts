export const inquiryInterests = [
  "Guiding",
  "Photography",
  "Expedition",
  "Collaboration",
  "Karakoram Ascents",
  "Other",
] as const;

export type InquiryInterest = (typeof inquiryInterests)[number];

export type InquiryPayload = {
  name: string;
  email: string;
  interest: InquiryInterest;
  message: string;
  website?: string;
};

export type InquiryFieldErrors = Partial<
  Record<"name" | "email" | "interest" | "message", string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseInquiryPayload(input: unknown): {
  data?: InquiryPayload;
  errors?: InquiryFieldErrors;
} {
  if (!input || typeof input !== "object") {
    return {
      errors: {
        message: "Invalid request.",
      },
    };
  }

  const body = input as Record<string, unknown>;
  const errors: InquiryFieldErrors = {};

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const interest =
    typeof body.interest === "string" ? body.interest.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";

  if (!name || name.length < 2) {
    errors.name = "Please enter your name.";
  } else if (name.length > 100) {
    errors.name = "Name is too long.";
  }

  if (!email || !emailPattern.test(email)) {
    errors.email = "Please enter a valid email.";
  } else if (email.length > 200) {
    errors.email = "Email is too long.";
  }

  if (!inquiryInterests.includes(interest as InquiryInterest)) {
    errors.interest = "Please select an interest.";
  }

  if (!message || message.length < 20) {
    errors.message = "Please share a bit more detail (at least 20 characters).";
  } else if (message.length > 5000) {
    errors.message = "Message is too long.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return {
    data: {
      name,
      email,
      interest: interest as InquiryInterest,
      message,
      website,
    },
  };
}
