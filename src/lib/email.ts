import { Resend } from "resend";
import { siteConfig } from "./siteConfig";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendContactEmail(input: {
  name: string;
  phone: string;
  subject: string;
  message: string;
}) {
  if (!resend) {
    console.warn(
      "[email] RESEND_API_KEY não configurada — mensagem de contato não foi enviada por e-mail.",
      input,
    );
    return;
  }

  await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Site Dra. Sueli <onboarding@resend.dev>",
    to: siteConfig.emails.primary,
    subject: `Novo contato pelo site: ${input.subject}`,
    text: [
      `Nome: ${input.name}`,
      `Telefone: ${input.phone}`,
      `Assunto: ${input.subject}`,
      "",
      input.message,
    ].join("\n"),
  });
}
