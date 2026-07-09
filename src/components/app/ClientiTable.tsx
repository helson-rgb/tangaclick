"use client";

import { useState } from "react";
import { clienti, type StatoCliente } from "@/lib/mock-data";
import Avatar from "./Avatar";
import { IconSearch } from "./icons";

const statoLabel: Record<StatoCliente, string> = {
  confermato: "Confermato",
  "in-coda": "Promemoria in coda",
  "da-contattare": "Da contattare",
  scaduto: "Scaduto",
};

const statoClass: Record<StatoCliente, string> = {
  confermato: "bg-brand-blue/10 text-brand-blue",
  "in-coda": "bg-orange-100 text-brand-orange",
  "da-contattare": "bg-black/5 text-brand-navy/60",
  scaduto: "bg-red-100 text-red-600",
};

export default function ClientiTable() {
  const [query, setQuery] = useState("");

  const filtered = clienti.filter((c) => {
    const q = query.toLowerCase();
    return c.nome.toLowerCase().includes(q) || c.targa.toLowerCase().includes(q);
  });

  return (
    <div className="rounded-2xl border border-black/5 bg-white shadow-sm">
      <div className="border-b border-black/5 p-4">
        <div className="flex max-w-sm items-center gap-2 rounded-lg border border-black/10 px-3 py-2 focus-within:border-brand-blue">
          <IconSearch className="h-4 w-4 shrink-0 text-brand-navy/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca per nome o targa..."
            className="w-full text-sm text-brand-navy placeholder:text-brand-navy/40 focus:outline-none"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-brand-navy/40">
              <th className="px-5 py-3">Cliente</th>
              <th className="px-5 py-3">Telefono</th>
              <th className="px-5 py-3">Scadenza revisione</th>
              <th className="px-5 py-3">Stato</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {filtered.map((c) => (
              <tr key={c.id} className="transition-colors hover:bg-brand-cream/60">
                <td className="flex items-center gap-3 px-5 py-3.5">
                  <Avatar name={c.nome} size="sm" />
                  <div>
                    <p className="font-medium text-brand-navy">{c.nome}</p>
                    <p className="text-xs text-brand-navy/40">{c.targa}</p>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-brand-navy/70">{c.telefono}</td>
                <td className="px-5 py-3.5 text-brand-navy/70">
                  {new Date(c.scadenza).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${statoClass[c.stato]}`}
                  >
                    {statoLabel[c.stato]}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-sm text-brand-navy/50">
                  Nessun cliente trovato.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
