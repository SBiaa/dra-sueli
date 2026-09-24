import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const metadata: Metadata = {
  title: "Direito Civil",
  description:
    "Contratos, cobranças e indenizações. Atendimento próximo e em linguagem simples, 100% online.",
};

const services = [
  {
    title: "Contratos",
    description:
      "Elaboração e revisão de contratos, com atenção aos detalhes que protegem seus interesses.",
  },
  {
    title: "Cobranças",
    description:
      "Ações para recebimento de valores devidos, com orientação sobre a melhor estratégia para o seu caso.",
  },
  {
    title: "Indenizações",
    description:
      "Pedidos de reparação por danos morais e materiais decorrentes de situações que violaram seus direitos.",
  },
  {
    title: "Orientação jurídica cível",
    description:
      "Consultoria para dúvidas do dia a dia que envolvem questões civis, ajudando a decidir os próximos passos com segurança.",
  },
];

export default function CivilPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
        Área de atuação
      </p>
      <h1 className="font-serif text-4xl text-brand-brown-dark">Direito Civil</h1>
      <p className="mt-4 text-brand-brown-dark/75">
        Além do Direito Previdenciário, também atendo demandas de Direito Civil, trazendo a mesma
        atenção e clareza para questões contratuais, cobranças e indenizações.
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
          Tem uma questão cível para resolver?
        </h2>
        <p className="mt-2 text-brand-brown-dark/75">
          Fale comigo pelo WhatsApp e vamos entender juntos o melhor caminho.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton message="Olá, Dra. Sueli! Tenho uma questão de Direito Civil e gostaria de conversar." />
        </div>
      </div>
    </div>
  );
}
