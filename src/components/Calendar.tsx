"use client";

import { useState } from "react";

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
const TIME_SLOTS = ["09:00", "11:00", "14:30", "16:30"];

function toISODate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function Calendar({
  onSelect,
}: {
  onSelect?: (isoDate: string, time: string) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = (firstOfMonth.getDay() + 6) % 7; // week starts on Monday

  const canGoPrev = year > today.getFullYear() || month > today.getMonth();

  const days: Array<Date | null> = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  function selectDate(date: Date) {
    setSelectedDate(date);
    if (selectedTime) onSelect?.(toISODate(date), selectedTime);
  }

  function selectTime(time: string) {
    setSelectedTime(time);
    if (selectedDate) onSelect?.(toISODate(selectedDate), time);
  }

  return (
    <div>
      <input type="hidden" name="data" value={selectedDate ? toISODate(selectedDate) : ""} />
      <input type="hidden" name="orario" value={selectedTime ?? ""} />

      <div className="rounded-xl border border-black/10 bg-white p-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            aria-label="Mese precedente"
            disabled={!canGoPrev}
            onClick={() => setViewDate(new Date(year, month - 1, 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-cream disabled:opacity-30"
          >
            &#8249;
          </button>
          <p className="font-heading text-sm uppercase tracking-wide text-brand-navy">
            {MONTHS[month]} {year}
          </p>
          <button
            type="button"
            aria-label="Mese successivo"
            onClick={() => setViewDate(new Date(year, month + 1, 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-cream"
          >
            &#8250;
          </button>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((day) => (
            <span key={day} className="text-xs font-medium text-brand-navy/40">
              {day}
            </span>
          ))}
          {days.map((date, i) => {
            if (!date) return <span key={`blank-${i}`} />;
            const isPast = date < today;
            const isSunday = date.getDay() === 0;
            const disabled = isPast || isSunday;
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            return (
              <button
                key={date.toISOString()}
                type="button"
                disabled={disabled}
                onClick={() => selectDate(date)}
                className={`aspect-square rounded-full text-sm transition-colors ${
                  isSelected
                    ? "bg-brand-orange font-medium text-white"
                    : disabled
                      ? "text-brand-navy/20"
                      : "text-brand-navy hover:bg-brand-cream"
                }`}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-wide text-brand-navy/50">Scegli un orario</p>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {TIME_SLOTS.map((time) => (
            <button
              key={time}
              type="button"
              disabled={!selectedDate}
              onClick={() => selectTime(time)}
              className={`rounded-lg border px-2 py-2 text-sm transition-colors ${
                selectedTime === time
                  ? "border-brand-orange bg-brand-orange text-white"
                  : "border-black/10 text-brand-navy hover:border-brand-orange disabled:opacity-30"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {selectedDate && selectedTime && (
        <p className="mt-4 rounded-lg bg-orange-50 px-4 py-3 text-sm text-brand-navy">
          Hai selezionato <strong>{selectedDate.getDate()} {MONTHS[selectedDate.getMonth()]}</strong>,
          alle <strong>{selectedTime}</strong>.
        </p>
      )}
    </div>
  );
}
