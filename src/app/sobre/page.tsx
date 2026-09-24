import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça a trajetória de ${siteConfig.name}, advogada especialista em Direito Previdenciário e Civil.`,
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
        <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-brand-cream-dark md:mx-0">
          <Image
            src="/images/icon-logo.png"
            alt=""
            width={140}
            height={140}
            className="h-28 w-auto opacity-90"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
            Sobre
          </p>
          <h1 className="font-serif text-4xl text-brand-brown-dark">{siteConfig.name}</h1>
          <p className="mt-1 text-brand-brown-dark/60">{siteConfig.oab}</p>

          <div className="mt-6 space-y-4 text-brand-brown-dark/80">
            <p>
              Sou advogada dedicada ao Direito Previdenciário, atuando na defesa dos direitos de
              segurados do INSS em processos de aposentadoria, benefícios por incapacidade,
              BPC/LOAS, pensão por morte e revisão de benefícios.
            </p>
            <p>
              Acredito que cada cliente merece atenção próxima e explicações claras sobre o seu
              processo — sem termos técnicos difíceis de entender. Por isso, mantenho contato
              direto durante todas as etapas do caso, para que você nunca fique no escuro sobre
              seus direitos.
            </p>
            <p>
              Mais recentemente, ampliei minha atuação para o Direito Civil, oferecendo apoio
              também em contratos, cobranças e indenizações — sempre com o mesmo compromisso de
              cuidado e transparência.
            </p>
            <p>
              Atendo clientes de todo o Brasil de forma 100% online, tornando o acesso à justiça
              mais simples, independentemente da sua cidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
