import { officina } from "@/lib/mock-data";

export default function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-black/10 bg-white px-8 py-5">
      <div>
        <h1 className="font-heading text-xl uppercase text-brand-navy">{title}</h1>
        <p className="text-xs text-brand-navy/50">{officina.nome} · {officina.citta}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-orange">
          Demo · dati di esempio
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy font-heading text-sm text-white">
          {officina.operatore
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </span>
      </div>
    </header>
  );
}
