import { Resend } from "resend";
import { NextResponse } from "next/server";
import { site } from "@/config/site";
import { parseInquiryPayload } from "@/lib/contact";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function readEnv(name: string) {
  return process.env[name]?.trim() || undefined;
}

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = parseInquiryPayload(json);

  if (parsed.errors || !parsed.data) {
    return NextResponse.json({ errors: parsed.errors }, { status: 400 });
  }

  const { name, email, interest, message, website } = parsed.data;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = readEnv("RESEND_API_KEY");
  const toEmail = readEnv("CONTACT_TO_EMAIL") ?? site.email;
  const fromEmail =
    readEnv("CONTACT_FROM_EMAIL") ??
    "Mueez Mountain Guide <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeInterest = escapeHtml(interest);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New inquiry from ${name} — ${interest}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 8px;">New website inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Interest:</strong> ${safeInterest}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: `New website inquiry

Name: ${name}
Email: ${email}
Interest: ${interest}

Message:
${message}
`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === "development"
              ? error.message
              : "Unable to send your message right now.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry send failed:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 502 },
    );
  }
}
