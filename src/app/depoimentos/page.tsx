import type { Metadata } from "next";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const metadata: Metadata = {
  title: "Depoimentos",
  description: "Depoimentos de clientes atendidos em processos previdenciários e cíveis.",
};

// TODO(Dra. Sueli): substituir pelos depoimentos reais dos seus clientes antes de publicar o site.
const testimonials = [
  {
    quote:
      "A Dra. Sueli me explicou cada etapa do processo de aposentadoria com muita paciência. Me senti segura do início ao fim.",
    author: "Cliente de Direito Previdenciário",
    context: "Aposentadoria por tempo de contribuição",
  },
  {
    quote:
      "Consegui o benefício assistencial para o meu pai depois de anos tentando sozinho. Atendimento muito atencioso.",
    author: "Cliente de Direito Previdenciário",
    context: "BPC/LOAS",
  },
  {
    quote:
      "Resolveu uma questão contratual que parecia complicada de forma simples e rápida, sempre me mantendo informado.",
    author: "Cliente de Direito Civil",
    context: "Contrato comercial",
  },
];

export default function DepoimentosPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
        O que dizem os clientes
      </p>
      <h1 className="font-serif text-4xl text-brand-brown-dark">Depoimentos</h1>
      <p className="mt-4 max-w-2xl text-brand-brown-dark/75">
        Alguns exemplos de como o acompanhamento próximo faz diferença na resolução do seu caso.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.quote} {...t} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <h2 className="font-serif text-2xl text-brand-brown-dark">
          Quer ser o próximo caso de sucesso?
        </h2>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
