"use client";

import { useState } from "react";
import { officina } from "@/lib/mock-data";
import { IconBell } from "./icons";

const notifiche = [
  { id: 1, testo: "Luca Ferri ha confermato l'appuntamento di domani", tempo: "5 min fa" },
  { id: 2, testo: "3 promemoria in coda per la prossima settimana", tempo: "2 ore fa" },
  { id: 3, testo: "Revisione di Paolo Rizzo scaduta", tempo: "ieri" },
];

export default function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between border-b border-black/5 bg-white/80 px-6 py-6 backdrop-blur sm:px-8">
      <div>
        <h1 className="font-heading text-2xl uppercase tracking-tight text-brand-navy">
          {title}
        </h1>
        <p className="mt-0.5 text-sm text-brand-navy/50">
          {subtitle ?? `${officina.nome} · ${officina.citta}`}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full bg-brand-cream px-3 py-1.5 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          <span className="text-xs font-medium uppercase tracking-wide text-brand-navy/60">
            Demo · dati di esempio
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Notifiche"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-brand-navy/60 transition-colors hover:bg-brand-cream hover:text-brand-navy"
        >
          <IconBell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-orange" />
        </button>

        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute right-6 top-16 z-50 w-72 rounded-2xl border border-black/5 bg-white p-2 shadow-xl sm:right-8">
              <p className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-brand-navy/40">
                Notifiche
              </p>
              <ul className="divide-y divide-black/5">
                {notifiche.map((n) => (
                  <li key={n.id} className="px-3 py-2.5 text-sm text-brand-navy">
                    <p>{n.testo}</p>
                    <p className="mt-0.5 text-xs text-brand-navy/40">{n.tempo}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
