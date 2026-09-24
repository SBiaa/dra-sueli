import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { siteConfig } from "@/lib/siteConfig";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/full-logo.png`,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.emails.primary,
  areaServed: "BR",
  sameAs: [siteConfig.instagram.url],
};

const practiceAreas = [
  {
    href: "/areas-de-atuacao/previdenciario",
    title: "Direito Previdenciário",
    description:
      "Aposentadoria, BPC/LOAS, auxílio-doença, pensão por morte e revisão de benefícios do INSS.",
  },
  {
    href: "/areas-de-atuacao/civil",
    title: "Direito Civil",
    description:
      "Contratos, cobranças, indenizações e demais questões cíveis, com atendimento próximo e claro.",
  },
];

const highlights = [
  {
    title: "Atendimento 100% online",
    description: "Todo o processo pode ser feito à distância, para clientes em qualquer cidade do Brasil.",
  },
  {
    title: "Explicações em linguagem simples",
    description: "Você entende cada etapa do seu processo, sem termos jurídicos difíceis.",
  },
  {
    title: "Acompanhamento próximo",
    description: "Contato direto por WhatsApp para tirar dúvidas durante todo o andamento do caso.",
  },
];

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden">
        <Image
          src="/images/themis-silhouette.png"
          alt=""
          width={600}
          height={900}
          priority
          className="pointer-events-none absolute -right-16 top-0 hidden h-full w-auto opacity-[0.06] md:block"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
            Direito Previdenciário e Civil
          </p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-brand-brown-dark sm:text-5xl">
            Seus direitos previdenciários e civis, defendidos com dedicação e transparência.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-brown-dark/80">
            Atendimento humano e próximo para aposentadoria, benefícios do INSS e questões
            cíveis — 100% online, para todo o Brasil.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-medium text-white shadow-sm transition hover:bg-brand-gold-dark" />
            <Link
              href="/areas-de-atuacao"
              className="inline-flex items-center gap-2 rounded-full border border-brand-brown-dark/20 px-6 py-3 font-medium text-brand-brown-dark transition hover:bg-brand-cream-dark"
            >
              Conheça as áreas de atuação
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-brown/10 bg-brand-cream-dark/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-center sm:px-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title}>
              <p className="font-serif text-lg text-brand-brown-dark">{item.title}</p>
              <p className="mt-1 text-sm text-brand-brown-dark/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-brand-brown-dark">Áreas de atuação</h2>
        <p className="mt-2 max-w-2xl text-brand-brown-dark/75">
          Atuação especializada em Direito Previdenciário, com expansão para Direito Civil.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {practiceAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group rounded-2xl border border-brand-brown/10 bg-white p-6 shadow-sm transition hover:border-brand-gold/50 hover:shadow-md"
            >
              <h3 className="font-serif text-xl text-brand-brown-dark group-hover:text-brand-gold-dark">
                {area.title}
              </h3>
              <p className="mt-2 text-sm text-brand-brown-dark/75">{area.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand-gold-dark">
                Saiba mais →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-brand-brown/10 bg-brand-brown-dark py-16 text-brand-cream">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl">Pronto(a) para tirar suas dúvidas?</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-cream/80">
            Fale agora mesmo pelo WhatsApp e entenda os próximos passos do seu caso, sem
            compromisso.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </div>
  );
}
