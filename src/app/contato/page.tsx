import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Dra. Sueli Parizotto por WhatsApp, e-mail ou formulário de contato.",
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
        Fale comigo
      </p>
      <h1 className="font-serif text-4xl text-brand-brown-dark">Contato</h1>
      <p className="mt-4 max-w-2xl text-brand-brown-dark/75">
        A forma mais rápida de conversar é pelo WhatsApp. Se preferir, envie uma mensagem pelo
        formulário abaixo.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <div className="rounded-2xl border border-brand-brown/10 bg-white p-6">
            <h2 className="font-serif text-xl text-brand-brown-dark">Envie uma mensagem</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-brand-cream-dark p-6">
            <h2 className="font-serif text-xl text-brand-brown-dark">WhatsApp</h2>
            <p className="mt-1 text-sm text-brand-brown-dark/75">
              Atendimento rápido para tirar suas primeiras dúvidas.
            </p>
            <div className="mt-4">
              <WhatsAppButton />
            </div>
          </div>

          <div className="rounded-2xl border border-brand-brown/10 bg-white p-6">
            <h2 className="font-serif text-xl text-brand-brown-dark">Outros canais</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-brown-dark/80">
              <li>
                Telefone/WhatsApp:{" "}
                <a href={whatsappLink()} className="text-brand-gold-dark hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                E-mail:{" "}
                <a
                  href={`mailto:${siteConfig.emails.primary}`}
                  className="text-brand-gold-dark hover:underline"
                >
                  {siteConfig.emails.primary}
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold-dark hover:underline"
                >
                  {siteConfig.instagram.handle}
                </a>
              </li>
              <li className="pt-2 text-brand-brown-dark/60">{siteConfig.oab}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
