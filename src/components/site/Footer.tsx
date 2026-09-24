import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./nav-links";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-brand-brown/10 bg-brand-brown-dark text-brand-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/images/icon-logo.png"
            alt=""
            width={64}
            height={64}
            className="mb-4 h-14 w-auto opacity-90"
          />
          <p className="font-serif text-lg">{siteConfig.name}</p>
          <p className="text-sm text-brand-cream/70">{siteConfig.tagline}</p>
          <p className="mt-2 text-sm text-brand-cream/70">{siteConfig.oab}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-light">
            Navegação
          </p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-brand-cream/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-light">
            Contato
          </p>
          <ul className="space-y-2 text-sm text-brand-cream/80">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp: {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.emails.primary}`} className="hover:text-white">
                {siteConfig.emails.primary}
              </a>
            </li>
            <li>
              <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram: {siteConfig.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-brand-cream/60 sm:px-6">
        © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.oab}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
