"use client";

import { useState } from "react";
import { appuntamenti, clienteById } from "@/lib/mock-data";
import Avatar from "./Avatar";
import { IconChevronLeft, IconChevronRight } from "./icons";

const WEEKDAYS = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
const MONTHS = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

function toISODate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

export default function AgendaCalendar() {
  const initial = new Date(2026, 6, 9); // 9 luglio 2026, in linea con i dati demo
  const [viewDate, setViewDate] = useState(new Date(initial.getFullYear(), initial.getMonth(), 1));
  const [selectedISO, setSelectedISO] = useState(toISODate(initial));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = (firstOfMonth.getDay() + 6) % 7;

  const days: Array<Date | null> = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const appuntamentiDelGiorno = appuntamenti
    .filter((a) => a.data === selectedISO)
    .sort((a, b) => a.ora.localeCompare(b.ora));

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <button
            type="button"
            aria-label="Mese precedente"
            onClick={() => setViewDate(new Date(year, month - 1, 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full text-brand-navy hover:bg-brand-cream"
          >
            <IconChevronLeft className="h-4 w-4" />
          </button>
          <p className="font-heading text-sm uppercase tracking-wide text-brand-navy">
            {MONTHS[month]} {year}
          </p>
          <button
            type="button"
            aria-label="Mese successivo"
            onClick={() => setViewDate(new Date(year, month + 1, 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full text-brand-navy hover:bg-brand-cream"
          >
            <IconChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((day) => (
            <span key={day} className="text-xs font-medium text-brand-navy/40">
              {day}
            </span>
          ))}
          {days.map((date, i) => {
            if (!date) return <span key={`blank-${i}`} />;
            const iso = toISODate(date);
            const count = appuntamenti.filter((a) => a.data === iso).length;
            const isSelected = iso === selectedISO;
            return (
              <button
                key={iso}
                type="button"
                onClick={() => setSelectedISO(iso)}
                className={`flex aspect-square flex-col items-center justify-center gap-0.5 rounded-lg text-sm transition-colors ${
                  isSelected
                    ? "bg-brand-orange font-medium text-white"
                    : "text-brand-navy hover:bg-brand-cream"
                }`}
              >
                {date.getDate()}
                {count > 0 && (
                  <span
                    className={`h-1 w-1 rounded-full ${isSelected ? "bg-white" : "bg-brand-orange"}`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <p className="font-heading text-sm uppercase text-brand-navy">
          {new Date(selectedISO).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
          })}
        </p>
        {appuntamentiDelGiorno.length === 0 ? (
          <p className="mt-4 text-sm text-brand-navy/50">Nessun appuntamento in agenda.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {appuntamentiDelGiorno.map((a) => {
              const cliente = clienteById(a.clienteId);
              if (!cliente) return null;
              return (
                <li key={a.id} className="flex items-start gap-3 rounded-xl bg-brand-cream p-4">
                  <Avatar name={cliente.nome} size="sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="font-heading text-sm text-brand-navy">{a.ora}</p>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                          a.stato === "confermato"
                            ? "bg-brand-blue/10 text-brand-blue"
                            : "bg-orange-100 text-brand-orange"
                        }`}
                      >
                        {a.stato === "confermato" ? "Confermato" : "In attesa"}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-brand-navy">{cliente.nome}</p>
                    <p className="truncate text-xs text-brand-navy/50">
                      {cliente.targa} · {cliente.telefono}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
