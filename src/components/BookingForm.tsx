"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Calendar from "./Calendar";

const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-blue focus:outline-none";

export default function BookingForm() {
  const router = useRouter();
  const [slot, setSlot] = useState<{ data: string; orario: string } | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/prenota-demo/grazie");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <p className="mb-3 font-heading text-sm uppercase tracking-wide text-brand-navy">
          1. Scegli data e orario
        </p>
        <Calendar onSelect={(data, orario) => setSlot({ data, orario })} />
      </div>

      <div>
        <p className="mb-3 font-heading text-sm uppercase tracking-wide text-brand-navy">
          2. I tuoi dati
        </p>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="nome" placeholder="Nome e cognome" className={inputClass} />
            <input required name="officina" placeholder="Nome officina" className={inputClass} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required type="email" name="email" placeholder="Email" className={inputClass} />
            <input required type="tel" name="telefono" placeholder="Telefono" className={inputClass} />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!slot}
        className="w-full rounded-full bg-brand-orange px-6 py-3 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Conferma data
      </button>
    </form>
  );
}
