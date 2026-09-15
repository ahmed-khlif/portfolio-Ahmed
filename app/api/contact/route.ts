import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  social?: string;
}

/**
 * Contact delivery, in order of preference:
 *
 * 1. SMTP via nodemailer  — set SMTP_HOST / SMTP_USER / SMTP_PASSWORD
 *    (optionally SMTP_PORT, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).
 * 2. Google Form fallback — set GOOGLE_FORM_LINK + the entry field ids,
 *    which is the mechanism this template shipped with.
 * 3. Neither configured   — return a 503 that tells the caller exactly
 *    what to do instead of a generic 500.
 */
export async function POST(req: Request) {
  let payload: ContactPayload;

  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();
  const social = payload.social?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  // ── 1. SMTP (preferred) ────────────────────────────────────────────────
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const toAddress = process.env.CONTACT_TO_EMAIL || smtpUser;
  const fromAddress = process.env.CONTACT_FROM_EMAIL || smtpUser;

  if (smtpHost && smtpUser && smtpPassword && toAddress && fromAddress) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPassword },
      });

      await transporter.sendMail({
        from: `"Portfolio contact" <${fromAddress}>`,
        to: toAddress,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          social ? `Social: ${social}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });

      return NextResponse.json({ ok: true, channel: "smtp" });
    } catch (error) {
      console.error("[contact] SMTP delivery failed, falling back:", error);
    }
  }

  // ── 2. Google Form fallback ───────────────────────────────────────────
  const formLink = process.env.GOOGLE_FORM_LINK;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  if (formLink && fieldIdName && fieldIdEmail && fieldIdMessage) {
    try {
      const params = new URLSearchParams();
      params.set(fieldIdName, name);
      params.set(fieldIdEmail, email);
      params.set(fieldIdMessage, message);
      if (fieldIdSocial) params.set(fieldIdSocial, social);

      const res = await fetch(`${formLink}/formResponse`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!res.ok) {
        throw new Error(`Google Form responded with ${res.status}`);
      }

      return NextResponse.json({ ok: true, channel: "google-form" });
    } catch (error) {
      console.error("[contact] Google Form delivery failed:", error);
      return NextResponse.json(
        { error: "The message could not be delivered. Please email me directly." },
        { status: 502 }
      );
    }
  }

  // ── 3. Nothing configured ─────────────────────────────────────────────
  return NextResponse.json(
    {
      error:
        "The contact form is not configured yet. Please email khlif.ahmed.dev@gmail.com directly.",
    },
    { status: 503 }
  );
}
