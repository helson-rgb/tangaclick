import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Prodotto",
    links: [
      { href: "/come-funziona", label: "Come funziona" },
      { href: "/prezzi", label: "Prezzi" },
      { href: "/prenota-demo", label: "Prenota demo" },
      { href: "/come-funziona#faq", label: "FAQ" },
    ],
  },
  {
    title: "Azienda",
    links: [
      { href: "/chi-siamo", label: "Chi siamo" },
      { href: "/contatti", label: "Contatti" },
    ],
  },
  {
    title: "Legale",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/termini-e-condizioni", label: "Termini e condizioni" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 font-heading text-sm uppercase tracking-wide text-brand-orange">
            Una targa, un click.
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            L&apos;agenda digitale privata per officine di revisione.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-heading text-sm uppercase tracking-wide text-brand-orange">
              {col.title}
            </p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-4 px-6 py-6 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>&copy; 2026 TargaClick S.r.l. &middot; P.IVA 00000000000</p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-white transition-opacity hover:opacity-80"
              >
                <span className="text-[10px] font-heading uppercase">
                  {social.label.slice(0, 2)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
