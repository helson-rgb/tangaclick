"use client";

import { useState } from "react";
import type { Cliente } from "@/lib/mock-data";

const ALTERNATIVE_SLOTS = [
  { label: "Gio 10 luglio", time: "09:00" },
  { label: "Gio 10 luglio", time: "15:30" },
  { label: "Ven 11 luglio", time: "10:00" },
  { label: "Sab 12 luglio", time: "09:30" },
];

export default function ConfirmAppointment({
  cliente,
  ora,
  dataLabel,
}: {
  cliente: Cliente;
  ora: string;
  dataLabel: string;
}) {
  const [status, setStatus] = useState<"proposto" | "confermato">("proposto");
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [slot, setSlot] = useState({ dataLabel, ora });

  if (status === "confermato") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl text-white">
          &#10003;
        </span>
        <p className="mt-4 font-heading text-lg uppercase text-brand-navy">
          Appuntamento confermato
        </p>
        <p className="mt-2 text-sm text-brand-navy/70">
          Ti aspettiamo <strong>{slot.dataLabel}</strong> alle <strong>{slot.ora}</strong>.
          Riceverai un promemoria il giorno prima.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-brand-cream p-5">
        <p className="text-sm text-brand-navy/60">Appuntamento proposto</p>
        <p className="mt-1 font-heading text-xl uppercase text-brand-navy">
          {slot.dataLabel} · {slot.ora}
        </p>
        <p className="mt-1 text-sm text-brand-navy/60">
          {cliente.nome} · {cliente.targa}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setStatus("confermato")}
          className="flex-1 rounded-full bg-brand-orange px-6 py-3 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
        >
          Confermo l&apos;appuntamento
        </button>
        <button
          type="button"
          onClick={() => setShowAlternatives((v) => !v)}
          className="flex-1 rounded-full border-2 border-brand-navy px-6 py-3 font-heading text-sm uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
        >
          Scegli un altro orario
        </button>
      </div>

      {showAlternatives && (
        <div>
          <p className="mb-2 text-xs uppercase tracking-wide text-brand-navy/50">
            Prossime disponibilità
          </p>
          <div className="grid grid-cols-2 gap-2">
            {ALTERNATIVE_SLOTS.map((alt) => (
              <button
                key={`${alt.label}-${alt.time}`}
                type="button"
                onClick={() => {
                  setSlot({ dataLabel: alt.label, ora: alt.time });
                  setStatus("confermato");
                }}
                className="rounded-lg border border-black/10 px-3 py-2 text-sm text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                {alt.label} · {alt.time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
