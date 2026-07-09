"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconSettings } from "./icons";
import { navLinks } from "./Sidebar";

export default function MobileNav() {
  const pathname = usePathname();
  const items = [...navLinks, { href: "/app/impostazioni", label: "Impostazioni", Icon: IconSettings }];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-black/10 bg-white lg:hidden">
      {items.map(({ href, label, Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium ${
              active ? "text-brand-orange" : "text-brand-navy/50"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="truncate">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
