import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const metadata: Metadata = {
  title: "Direito Previdenciário",
  description:
    "Aposentadoria, BPC/LOAS, auxílio-doença, pensão por morte e revisão de benefícios do INSS. Atendimento 100% online.",
};

const services = [
  {
    title: "Aposentadoria por idade e por tempo de contribuição",
    description:
      "Análise do seu tempo de contribuição, planejamento previdenciário e condução do pedido de aposentadoria junto ao INSS.",
  },
  {
    title: "Aposentadoria por invalidez e auxílio-doença",
    description:
      "Orientação e acompanhamento em pedidos de benefício por incapacidade, incluindo recursos em caso de negativa.",
  },
  {
    title: "BPC/LOAS",
    description:
      "Benefício assistencial para idosos e pessoas com deficiência em situação de baixa renda, mesmo sem contribuição prévia ao INSS.",
  },
  {
    title: "Pensão por morte e auxílio-reclusão",
    description:
      "Apoio a dependentes na solicitação desses benefícios, com atenção especial ao momento delicado das famílias.",
  },
  {
    title: "Revisão de benefícios",
    description:
      "Análise de benefícios já concedidos para identificar valores pagos a menor e possibilidades de revisão, incluindo revisão da vida toda.",
  },
];

export default function PrevidenciarioPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
        Área de atuação
      </p>
      <h1 className="font-serif text-4xl text-brand-brown-dark">Direito Previdenciário</h1>
      <p className="mt-4 text-brand-brown-dark/75">
        O Direito Previdenciário é minha principal área de atuação. Acompanho cada cliente de
        perto, desde a análise inicial do caso até a concessão ou revisão do benefício junto ao
        INSS, sempre explicando cada etapa em linguagem simples.
      </p>

      <div className="mt-10 space-y-6">
        {services.map((service) => (
          <div key={service.title} className="rounded-xl border border-brand-brown/10 bg-white p-6">
            <h2 className="font-serif text-xl text-brand-brown-dark">{service.title}</h2>
            <p className="mt-2 text-sm text-brand-brown-dark/75">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-brand-cream-dark p-8 text-center">
        <h2 className="font-serif text-2xl text-brand-brown-dark">
          Quer entender se você tem direito a algum benefício?
        </h2>
        <p className="mt-2 text-brand-brown-dark/75">
          Fale comigo pelo WhatsApp e faça uma análise inicial do seu caso.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton message="Olá, Dra. Sueli! Gostaria de entender melhor sobre meu benefício previdenciário." />
        </div>
      </div>
    </div>
  );
}
