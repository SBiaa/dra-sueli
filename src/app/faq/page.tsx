import type { Metadata } from "next";
import { FaqAccordion, type FaqItem } from "@/components/site/FaqAccordion";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: "Dúvidas comuns sobre processos previdenciários e cíveis, prazos e atendimento.",
};

// TODO(Dra. Sueli): revisar respostas (prazos e valores variam por caso) antes de publicar.
const faqItems: FaqItem[] = [
  {
    question: "O atendimento é mesmo 100% online?",
    answer:
      "Sim. Todo o atendimento — desde a análise inicial até o acompanhamento do processo — pode ser feito à distância, por WhatsApp, e-mail ou videochamada, para clientes de qualquer cidade do Brasil.",
  },
  {
    question: "Quais documentos preciso reunir para iniciar meu caso?",
    answer:
      "Varia conforme o tipo de benefício ou questão cível. Após o primeiro contato, faço uma análise do seu caso e te envio uma lista personalizada dos documentos necessários.",
  },
  {
    question: "Quanto tempo demora um processo previdenciário?",
    answer:
      "O prazo depende do tipo de benefício e do andamento no INSS ou na Justiça, podendo variar de poucos meses a mais de um ano. Durante a análise do seu caso, te dou uma expectativa realista de prazo.",
  },
  {
    question: "Como funciona a primeira conversa?",
    answer:
      "Você me chama pelo WhatsApp, conta resumidamente sua situação e eu explico se há direito a algum benefício ou ação, além dos próximos passos.",
  },
  {
    question: "Vocês atendem apenas Direito Previdenciário?",
    answer:
      "O Direito Previdenciário é minha principal área de atuação, mas também atendo demandas de Direito Civil, como contratos, cobranças e indenizações.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
        Dúvidas frequentes
      </p>
      <h1 className="font-serif text-4xl text-brand-brown-dark">Perguntas Frequentes</h1>
      <p className="mt-4 text-brand-brown-dark/75">
        Reuni aqui as dúvidas mais comuns. Se a sua não estiver aqui, me chame pelo WhatsApp.
      </p>

      <div className="mt-10">
        <FaqAccordion items={faqItems} />
      </div>
    </div>
  );
}
