import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Advocacia previdenciária (aposentadoria, BPC/LOAS, auxílio-doença, revisões) e Direito Civil, com atendimento 100% online.",
};

const areas = [
  {
    href: "/areas-de-atuacao/previdenciario",
    title: "Direito Previdenciário",
    description:
      "Área de atuação principal: aposentadorias, benefícios por incapacidade, BPC/LOAS, pensão por morte e revisões perante o INSS.",
    items: [
      "Aposentadoria por idade e por tempo de contribuição",
      "Aposentadoria por invalidez e auxílio-doença",
      "BPC/LOAS para idosos e pessoas com deficiência",
      "Pensão por morte e auxílio-reclusão",
      "Revisão de benefícios já concedidos",
    ],
  },
  {
    href: "/areas-de-atuacao/civil",
    title: "Direito Civil",
    description:
      "Nova área de atuação: contratos, cobranças, indenizações e outras questões cíveis do dia a dia.",
    items: [
      "Elaboração e revisão de contratos",
      "Ações de cobrança",
      "Indenizações por danos morais e materiais",
      "Orientação em questões cíveis diversas",
    ],
  },
];

export default function AreasDeAtuacaoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
        Como posso ajudar
      </p>
      <h1 className="font-serif text-4xl text-brand-brown-dark">Áreas de atuação</h1>
      <p className="mt-4 max-w-2xl text-brand-brown-dark/75">
        Atendimento especializado em Direito Previdenciário — minha área de maior experiência —
        com expansão recente para Direito Civil.
      </p>

      <div className="mt-12 space-y-10">
        {areas.map((area) => (
          <div
            key={area.href}
            className="rounded-2xl border border-brand-brown/10 bg-white p-8 shadow-sm"
          >
            <h2 className="font-serif text-2xl text-brand-brown-dark">{area.title}</h2>
            <p className="mt-2 text-brand-brown-dark/75">{area.description}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {area.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-brand-brown-dark/80">
                  <span className="text-brand-gold-dark">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={area.href}
              className="mt-6 inline-block text-sm font-medium text-brand-gold-dark hover:underline"
            >
              Ver detalhes de {area.title} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
