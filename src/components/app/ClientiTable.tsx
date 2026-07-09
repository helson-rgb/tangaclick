"use client";

import { useState } from "react";
import { clienti, type StatoCliente } from "@/lib/mock-data";

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
    <div className="rounded-2xl border border-black/10 bg-white">
      <div className="border-b border-black/10 p-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca per nome o targa..."
          className="w-full max-w-sm rounded-lg border border-black/15 px-4 py-2 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-blue focus:outline-none"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-black/10 text-xs uppercase tracking-wide text-brand-navy/50">
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">Targa</th>
              <th className="px-4 py-3">Telefono</th>
              <th className="px-4 py-3">Scadenza revisione</th>
              <th className="px-4 py-3">Stato</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-b border-black/5 last:border-0">
                <td className="px-4 py-3 font-medium text-brand-navy">{c.nome}</td>
                <td className="px-4 py-3 text-brand-navy/70">{c.targa}</td>
                <td className="px-4 py-3 text-brand-navy/70">{c.telefono}</td>
                <td className="px-4 py-3 text-brand-navy/70">
                  {new Date(c.scadenza).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${statoClass[c.stato]}`}
                  >
                    {statoLabel[c.stato]}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-sm text-brand-navy/50">
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
