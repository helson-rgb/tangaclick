"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/come-funziona", label: "Come funziona" },
  { href: "/prezzi", label: "Prezzi" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-sm font-medium text-brand-navy transition-colors hover:text-brand-orange"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/app/login"
            className="font-sans text-sm font-medium text-brand-navy transition-colors hover:text-brand-orange"
          >
            Accedi
          </Link>
          <Link
            href="/prenota-demo"
            className="rounded-full bg-brand-orange px-5 py-2.5 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
          >
            Prenota demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/20 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-brand-cream px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-base font-medium text-brand-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/prenota-demo"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-orange px-5 py-3 font-heading text-sm uppercase tracking-wide text-white"
              >
                Prenota demo
              </Link>
            </li>
            <li>
              <Link
                href="/app/login"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-brand-navy px-5 py-3 font-heading text-sm uppercase tracking-wide text-brand-navy"
              >
                Accedi
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
