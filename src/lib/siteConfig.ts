export const siteConfig = {
  name: "Dra. Sueli Parizotto",
  tagline: "Advocacia e assessoria jurídica",
  oab: "OAB/SP 519.907",
  description:
    "Advocacia previdenciária e cível, atendimento 100% online para todo o Brasil. Aposentadoria, BPC/LOAS, auxílio-doença, revisão de benefícios e Direito Civil.",
  url: "https://dra-sueli.vercel.app",
  whatsapp: {
    number: "5511999603965",
    defaultMessage:
      "Olá, Dra. Sueli! Encontrei seu site e gostaria de saber mais sobre meu caso.",
  },
  phoneDisplay: "(11) 99960-3965",
  emails: {
    primary: "su.parizotto0209@gmail.com",
    oab: "sueliparizotto@adv.oabsp.org.br",
  },
  instagram: {
    handle: "@drasueliparizotto",
    url: "https://instagram.com/drasueliparizotto",
  },
} as const;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}
