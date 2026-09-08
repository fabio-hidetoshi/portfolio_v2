import { Resend } from "resend";
import { env } from "../../env.js";
import type { ContactInput } from "./contact.validation.js";

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

export async function sendContactNotification(input: ContactInput): Promise<boolean> {
  if (!resend) {
    console.warn("[contact.mailer] RESEND_API_KEY não configurado — e-mail não enviado, apenas persistido.");
    return false;
  }

  try {
    await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: env.CONTACT_RECEIVER_EMAIL,
      replyTo: input.email,
      subject: `Novo contato pelo portfólio: ${input.name}`,
      text: `Nome: ${input.name}\nE-mail: ${input.email}\nIdioma: ${input.locale}\n\nMensagem:\n${input.message}`,
    });
    return true;
  } catch (err) {
    console.error("[contact.mailer] Falha ao enviar e-mail:", err);
    return false;
  }
}
