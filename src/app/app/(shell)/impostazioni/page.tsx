"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/app/Topbar";
import Toggle from "@/components/app/Toggle";
import { IconCheck, IconLogout } from "@/components/app/icons";
import { officina } from "@/lib/mock-data";

const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-brand-navy focus:border-brand-blue focus:outline-none";

export default function Impostazioni() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  return (
    <>
      <Topbar title="Impostazioni" />
      <div className="mx-auto max-w-2xl space-y-6 p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
            setTimeout(() => setSaved(false), 2500);
          }}
          className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
        >
          <p className="font-heading text-sm uppercase text-brand-navy">Profilo officina</p>
          <div className="mt-4 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-wide text-brand-navy/50">
                  Nome officina
                </label>
                <input defaultValue={officina.nome} className={`mt-1 ${inputClass}`} />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-brand-navy/50">
                  Città
                </label>
                <input defaultValue={officina.citta} className={`mt-1 ${inputClass}`} />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-brand-navy/50">
                Nome operatore
              </label>
              <input defaultValue={officina.operatore} className={`mt-1 ${inputClass}`} />
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button
              type="submit"
              className="rounded-full bg-brand-orange px-6 py-2.5 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
            >
              Salva modifiche
            </button>
            {saved && (
              <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                <IconCheck className="h-4 w-4" />
                Salvato
              </span>
            )}
          </div>
        </form>

        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="font-heading text-sm uppercase text-brand-navy">Integrazioni</p>
          <div className="mt-4 divide-y divide-black/5">
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-brand-navy">WhatsApp Business</p>
                <p className="text-xs text-brand-navy/50">
                  Invia i promemoria sotto il nome della tua officina
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Connesso
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-brand-navy">Google Calendar</p>
                <p className="text-xs text-brand-navy/50">
                  Sincronizza l&apos;agenda per evitare sovrapposizioni
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Connesso
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="font-heading text-sm uppercase text-brand-navy">Notifiche</p>
          <div className="mt-4 divide-y divide-black/5">
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-brand-navy">Riepilogo giornaliero</p>
                <p className="text-xs text-brand-navy/50">
                  Ricevi un riepilogo degli appuntamenti ogni mattina
                </p>
              </div>
              <Toggle defaultChecked />
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-brand-navy">Avviso revisioni scadute</p>
                <p className="text-xs text-brand-navy/50">
                  Notifica quando una revisione supera la scadenza
                </p>
              </div>
              <Toggle defaultChecked />
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-brand-navy">Novità e consigli Targaclick</p>
                <p className="text-xs text-brand-navy/50">Email occasionali con suggerimenti d&apos;uso</p>
              </div>
              <Toggle />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-heading text-sm uppercase text-brand-navy">Piano attuale</p>
              <p className="mt-1 text-2xl font-heading text-brand-navy">
                Officina <span className="text-base font-sans text-brand-navy/50">· 59€/mese</span>
              </p>
              <p className="mt-1 text-xs text-brand-navy/50">Prossimo rinnovo: 1 agosto 2026</p>
            </div>
            <a
              href="/prezzi"
              className="rounded-full border-2 border-brand-navy px-5 py-2.5 font-heading text-sm uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              Cambia piano
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => router.push("/app/login")}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-brand-navy/60 transition-colors hover:bg-white hover:text-red-600"
        >
          <IconLogout className="h-4 w-4" />
          Esci dall&apos;account
        </button>
      </div>
    </>
  );
}
