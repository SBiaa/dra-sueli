"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./nav-links";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-brown/10 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/full-logo.png"
            alt="Dra. Sueli Parizotto — advocacia e assessoria jurídica"
            width={280}
            height={76}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-brown-dark transition hover:text-brand-gold-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-gold-dark" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand-brown-dark lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-brown/10 bg-brand-cream px-4 pb-4 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-base font-medium text-brand-brown-dark transition hover:bg-brand-cream-dark"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2">
            <WhatsAppButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-medium text-white shadow-sm" />
          </div>
        </nav>
      )}
    </header>
  );
}
