import Topbar from "@/components/app/Topbar";
import Avatar from "@/components/app/Avatar";
import { IconAlert, IconCalendar, IconMessage, IconTrendUp, IconUsers } from "@/components/app/icons";
import { appuntamenti, clienteById, kpi, officina, promemoria } from "@/lib/mock-data";

const kpiCards = [
  {
    label: "Promemoria in coda",
    sublabel: "mese prossimo",
    value: kpi.promemoriaInCodaMeseProssimo,
    icon: IconMessage,
    tint: "bg-brand-orange/10 text-brand-orange",
    delta: "+18% vs mese scorso",
  },
  {
    label: "Appuntamenti",
    sublabel: "oggi",
    value: kpi.appuntamentiOggi,
    icon: IconCalendar,
    tint: "bg-brand-blue/10 text-brand-blue",
    delta: "Tutti confermati",
  },
  {
    label: "Clienti",
    sublabel: "totali in agenda",
    value: kpi.clientiTotali,
    icon: IconUsers,
    tint: "bg-brand-navy/10 text-brand-navy",
    delta: "+2 questa settimana",
  },
  {
    label: "Revisioni",
    sublabel: "scadute",
    value: kpi.revisioniScadute,
    icon: IconAlert,
    tint: "bg-red-100 text-red-600",
    delta: "-1 vs settimana scorsa",
  },
];

const trendSettimanale = [42, 58, 51, 68, 60, 74, 85];

export default function Dashboard() {
  const confermeRecenti = promemoria.filter((p) => p.stato === "confermato").slice(0, 4);

  const prossimiAppuntamenti = appuntamenti
    .filter((a) => a.data === "2026-07-09")
    .sort((a, b) => a.ora.localeCompare(b.ora));

  return (
    <>
      <Topbar title="Dashboard" subtitle={`Ciao ${officina.operatore.split(" ")[0]}, ecco la tua giornata`} />
      <div className="space-y-6 p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpiCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.tint}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                    <IconTrendUp className="h-3.5 w-3.5" />
                    {card.delta}
                  </span>
                </div>
                <p className="mt-4 font-heading text-3xl text-brand-navy">{card.value}</p>
                <p className="mt-1 text-sm text-brand-navy/60">
                  {card.label} <span className="text-brand-navy/40">· {card.sublabel}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-brand-navy p-8 text-white">
          <div
            className="tire-track-bg absolute inset-0"
            style={{ maskImage: "linear-gradient(to left, black, transparent 65%)" }}
          />
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-lg">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/60 px-3 py-1 text-xs font-heading uppercase tracking-wide text-brand-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                Pilota automatico attivo
              </span>
              <p className="mt-4 font-heading text-2xl uppercase leading-snug sm:text-3xl">
                Mese prossimo: {kpi.promemoriaInCodaMeseProssimo} promemoria WhatsApp in coda
              </p>
              <p className="mt-3 max-w-md text-sm text-white/60">
                Non sperare nel mese prossimo, pianificalo. Targaclick calcola le scadenze e
                mette in coda i promemoria da solo.
              </p>
            </div>

            <div className="flex items-end gap-1.5">
              {trendSettimanale.map((v, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-5 rounded-t-sm bg-linear-to-t from-brand-orange/40 to-brand-orange"
                    style={{ height: `${v}px` }}
                  />
                  <span className="text-[10px] text-white/30">S{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="font-heading text-sm uppercase text-brand-navy">Conferme recenti</p>
              <span className="text-xs text-brand-navy/40">Ultime {confermeRecenti.length}</span>
            </div>
            <ul className="mt-4 divide-y divide-black/5">
              {confermeRecenti.map((p) => {
                const cliente = clienteById(p.clienteId);
                if (!cliente) return null;
                return (
                  <li key={p.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                    <Avatar name={cliente.nome} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-brand-navy">
                        <strong>{cliente.nome}</strong> ha confermato
                      </p>
                    </div>
                    <span className="text-xs text-brand-navy/40">{cliente.targa}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="font-heading text-sm uppercase text-brand-navy">
                Appuntamenti di oggi
              </p>
              <span className="text-xs text-brand-navy/40">
                {prossimiAppuntamenti.length} totali
              </span>
            </div>
            <ul className="mt-4 divide-y divide-black/5">
              {prossimiAppuntamenti.map((a) => {
                const cliente = clienteById(a.clienteId);
                if (!cliente) return null;
                return (
                  <li key={a.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                    <Avatar name={cliente.nome} size="sm" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-brand-navy">{cliente.nome}</p>
                      <p className="text-xs text-brand-navy/40">{a.ora}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
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
