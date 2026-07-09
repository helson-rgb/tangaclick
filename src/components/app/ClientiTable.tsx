"use client";

import { useState } from "react";
import { clienti as clientiIniziali, type Cliente, type StatoCliente } from "@/lib/mock-data";
import Avatar from "./Avatar";
import Modal from "./Modal";
import { IconPlus, IconSearch } from "./icons";

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

const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-brand-navy focus:border-brand-blue focus:outline-none";

export default function ClientiTable() {
  const [clienti, setClienti] = useState<Cliente[]>(clientiIniziali);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filtered = clienti.filter((c) => {
    const q = query.toLowerCase();
    return c.nome.toLowerCase().includes(q) || c.targa.toLowerCase().includes(q);
  });

  function handleAdd(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nuovo: Cliente = {
      id: `c${Date.now()}`,
      nome: String(form.get("nome")),
      targa: String(form.get("targa")).toUpperCase(),
      telefono: String(form.get("telefono")),
      scadenza: String(form.get("scadenza")),
      stato: "da-contattare",
    };
    setClienti((prev) => [nuovo, ...prev]);
    setShowModal(false);
  }

  return (
    <div className="rounded-2xl border border-black/5 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-black/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 focus-within:border-brand-blue sm:max-w-sm sm:flex-1">
          <IconSearch className="h-4 w-4 shrink-0 text-brand-navy/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca per nome o targa..."
            className="w-full text-sm text-brand-navy placeholder:text-brand-navy/40 focus:outline-none"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-2.5 text-sm font-heading uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
        >
          <IconPlus className="h-4 w-4" />
          Nuovo cliente
        </button>
      </div>

      {/* Vista tabella per schermi grandi */}
      <div className="hidden overflow-x-auto sm:block">
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

      {/* Vista a lista per mobile */}
      <div className="divide-y divide-black/5 sm:hidden">
        {filtered.map((c) => (
          <div key={c.id} className="flex items-center gap-3 px-4 py-3.5">
            <Avatar name={c.nome} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-brand-navy">{c.nome}</p>
              <p className="truncate text-xs text-brand-navy/40">
                {c.targa} · {c.telefono}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-xs text-brand-navy/50">
                {new Date(c.scadenza).toLocaleDateString("it-IT", {
                  day: "numeric",
                  month: "short",
                })}
              </p>
              <span
                className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${statoClass[c.stato]}`}
              >
                {statoLabel[c.stato]}
              </span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="px-4 py-10 text-center text-sm text-brand-navy/50">
            Nessun cliente trovato.
          </p>
        )}
      </div>

      {showModal && (
        <Modal title="Nuovo cliente" onClose={() => setShowModal(false)}>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wide text-brand-navy/50">
                Nome e cognome
              </label>
              <input required name="nome" className={`mt-1 ${inputClass}`} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wide text-brand-navy/50">
                  Targa
                </label>
                <input required name="targa" className={`mt-1 ${inputClass}`} />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-brand-navy/50">
                  Telefono
                </label>
                <input required name="telefono" className={`mt-1 ${inputClass}`} />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-brand-navy/50">
                Scadenza revisione
              </label>
              <input required type="date" name="scadenza" className={`mt-1 ${inputClass}`} />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-orange px-6 py-3 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
            >
              Aggiungi cliente
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
