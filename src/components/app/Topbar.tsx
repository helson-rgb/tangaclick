import { officina } from "@/lib/mock-data";

export default function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex items-center justify-between border-b border-black/5 bg-white/80 px-8 py-6 backdrop-blur">
      <div>
        <h1 className="font-heading text-2xl uppercase tracking-tight text-brand-navy">
          {title}
        </h1>
        <p className="mt-0.5 text-sm text-brand-navy/50">
          {subtitle ?? `${officina.nome} · ${officina.citta}`}
        </p>
      </div>
      <div className="hidden items-center gap-2 rounded-full bg-brand-cream px-3 py-1.5 sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
        <span className="text-xs font-medium uppercase tracking-wide text-brand-navy/60">
          Demo · dati di esempio
        </span>
      </div>
    </header>
  );
}
