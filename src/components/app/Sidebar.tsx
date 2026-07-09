"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { officina } from "@/lib/mock-data";
import { IconCalendar, IconGrid, IconLogout, IconMessage, IconUsers } from "./icons";

const links = [
  { href: "/app/dashboard", label: "Dashboard", Icon: IconGrid },
  { href: "/app/agenda", label: "Agenda", Icon: IconCalendar },
  { href: "/app/clienti", label: "Clienti", Icon: IconUsers },
  { href: "/app/promemoria", label: "Promemoria", Icon: IconMessage },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-brand-navy px-4 py-6">
      <Link href="/app/dashboard" className="px-2">
        <Logo variant="light" />
      </Link>

      <nav className="mt-10 flex-1 space-y-1">
        {links.map(({ href, label, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:bg-white/5 hover:text-white/90"
              }`}
            >
              {active && (
                <span className="absolute -left-1 top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-brand-orange" />
              )}
              <Icon className={`h-5 w-5 ${active ? "text-brand-orange" : ""}`} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-3 border-t border-white/10 pt-4">
        <div className="flex items-center gap-3 px-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange font-heading text-sm text-white">
            {officina.operatore
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">{officina.operatore}</p>
            <p className="truncate text-xs text-white/40">{officina.nome}</p>
          </div>
        </div>
        <Link
          href="/app/login"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/50 transition-colors hover:bg-white/5 hover:text-white/90"
        >
          <IconLogout className="h-5 w-5" />
          Esci
        </Link>
      </div>
    </aside>
  );
}
