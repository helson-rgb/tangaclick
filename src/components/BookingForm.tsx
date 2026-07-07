"use client";

import { useRouter } from "next/navigation";

const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-blue focus:outline-none";

export default function BookingForm() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/prenota-demo/grazie");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="nome" placeholder="Nome e cognome" className={inputClass} />
        <input required name="officina" placeholder="Nome officina" className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required type="email" name="email" placeholder="Email" className={inputClass} />
        <input required type="tel" name="telefono" placeholder="Telefono" className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required type="date" name="data" className={inputClass} />
        <select required name="orario" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Scegli un orario
          </option>
          <option value="09:00">09:00</option>
          <option value="11:00">11:00</option>
          <option value="14:30">14:30</option>
          <option value="16:30">16:30</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-orange px-6 py-3 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
      >
        Conferma data
      </button>
    </form>
  );
}
