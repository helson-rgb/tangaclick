"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const links = [
  { href: "/app/dashboard", label: "Dashboard", icon: "▦" },
  { href: "/app/agenda", label: "Agenda", icon: "▤" },
  { href: "/app/clienti", label: "Clienti", icon: "☰" },
  { href: "/app/promemoria", label: "Promemoria WhatsApp", icon: "◔" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-black/10 bg-white px-4 py-6">
      <Link href="/app/dashboard">
        <Logo className="px-2" />
      </Link>

      <nav className="mt-10 flex-1 space-y-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-brand-orange/10 text-brand-orange"
                  : "text-brand-navy/70 hover:bg-brand-cream hover:text-brand-navy"
              }`}
            >
              <span aria-hidden className="text-base">
                {link.icon}
              </span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/app/login"
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy/50 transition-colors hover:bg-brand-cream hover:text-brand-navy"
      >
        <span aria-hidden>⏻</span>
        Esci
      </Link>
    </aside>
  );
}
