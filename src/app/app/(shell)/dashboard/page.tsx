import Topbar from "@/components/app/Topbar";
import { appuntamenti, clienteById, kpi, promemoria } from "@/lib/mock-data";

const kpiCards = [
  { label: "Promemoria in coda (mese prossimo)", value: kpi.promemoriaInCodaMeseProssimo },
  { label: "Appuntamenti oggi", value: kpi.appuntamentiOggi },
  { label: "Clienti totali", value: kpi.clientiTotali },
  { label: "Revisioni scadute", value: kpi.revisioniScadute },
];

export default function Dashboard() {
  const confermeRecenti = promemoria
    .filter((p) => p.stato === "confermato")
    .slice(0, 5);

  const prossimiAppuntamenti = appuntamenti
    .filter((a) => a.data === "2026-07-09")
    .sort((a, b) => a.ora.localeCompare(b.ora));

  return (
    <>
      <Topbar title="Dashboard" />
      <div className="space-y-8 p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpiCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="font-heading text-3xl text-brand-navy">{card.value}</p>
              <p className="mt-1 text-xs text-brand-navy/60">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-brand-navy p-6 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="rounded-full border border-brand-orange px-3 py-1 text-xs font-heading uppercase tracking-wide text-brand-orange">
                Pilota automatico attivo
              </span>
              <p className="mt-3 font-heading text-2xl uppercase">
                Mese prossimo: {kpi.promemoriaInCodaMeseProssimo} promemoria WhatsApp in coda
              </p>
              <p className="mt-2 max-w-xl text-sm text-white/70">
                Non sperare nel mese prossimo, pianificalo. Targaclick calcola le scadenze e
                mette in coda i promemoria da solo: tu guardi l&apos;agenda che si riempie, al
                resto ci pensa il sistema.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="font-heading text-sm uppercase text-brand-navy">
              Conferme recenti
            </p>
            <ul className="mt-4 space-y-3">
              {confermeRecenti.map((p) => {
                const cliente = clienteById(p.clienteId);
                return (
                  <li key={p.id} className="flex items-center justify-between text-sm">
                    <span className="text-brand-navy">
                      <strong>{cliente?.nome}</strong> ha confermato
                    </span>
                    <span className="text-xs text-brand-navy/50">{cliente?.targa}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="font-heading text-sm uppercase text-brand-navy">
              Appuntamenti di oggi
            </p>
            <ul className="mt-4 space-y-3">
              {prossimiAppuntamenti.map((a) => {
                const cliente = clienteById(a.clienteId);
                return (
                  <li key={a.id} className="flex items-center justify-between text-sm">
                    <span className="text-brand-navy">
                      {a.ora} · <strong>{cliente?.nome}</strong>
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        a.stato === "confermato"
                          ? "bg-brand-blue/10 text-brand-blue"
                          : "bg-orange-50 text-brand-orange"
                      }`}
                    >
                      {a.stato === "confermato" ? "Confermato" : "In attesa"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
