"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-blue focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-orange/30 bg-orange-50 p-6 text-center">
        <p className="font-heading text-lg uppercase text-brand-navy">Messaggio inviato</p>
        <p className="mt-2 text-sm text-brand-navy/70">
          Grazie per averci scritto, ti risponderemo il prima possibile.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="nome" placeholder="Nome e cognome" className={inputClass} />
        <input required name="officina" placeholder="Nome officina" className={inputClass} />
      </div>
      <input required type="email" name="email" placeholder="Email" className={inputClass} />
      <textarea
        required
        name="messaggio"
        placeholder="Come possiamo aiutarti?"
        rows={4}
        className={inputClass}
      />
      <button
        type="submit"
        className="w-full rounded-full bg-brand-orange px-6 py-3 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
      >
        Invia messaggio
      </button>
    </form>
  );
}
