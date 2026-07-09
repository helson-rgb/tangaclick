import Topbar from "@/components/app/Topbar";
import Avatar from "@/components/app/Avatar";
import { IconMessage } from "@/components/app/icons";
import { clienteById, promemoria } from "@/lib/mock-data";

const statoLabel = {
  confermato: "Confermato",
  consegnato: "Consegnato",
  "in-coda": "In coda",
};

const statoClass = {
  confermato: "bg-brand-blue/10 text-brand-blue",
  consegnato: "bg-emerald-100 text-emerald-700",
  "in-coda": "bg-orange-100 text-brand-orange",
};

const statoDot = {
  confermato: "bg-brand-blue",
  consegnato: "bg-emerald-500",
  "in-coda": "bg-brand-orange",
};

export default function PromemoriaPage() {
  const ordinati = [...promemoria].sort(
    (a, b) => new Date(b.inviato).getTime() - new Date(a.inviato).getTime()
  );

  const counts = {
    confermato: promemoria.filter((p) => p.stato === "confermato").length,
    consegnato: promemoria.filter((p) => p.stato === "consegnato").length,
    "in-coda": promemoria.filter((p) => p.stato === "in-coda").length,
  };

  return (
    <>
      <Topbar title="Promemoria WhatsApp" />
      <div className="space-y-6 p-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {(Object.keys(counts) as Array<keyof typeof counts>).map((key) => (
            <div key={key} className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${statoDot[key]}`} />
              <div>
                <p className="font-heading text-2xl text-brand-navy">{counts[key]}</p>
                <p className="text-xs text-brand-navy/50">{statoLabel[key]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-black/5 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-black/5 px-5 py-4">
            <IconMessage className="h-4 w-4 text-brand-navy/40" />
            <p className="text-xs uppercase tracking-wide text-brand-navy/50">
              Ogni messaggio parte sotto il nome della tua officina
            </p>
          </div>

          <ul className="divide-y divide-black/5">
            {ordinati.map((p) => {
              const cliente = clienteById(p.clienteId);
              if (!cliente) return null;
              return (
                <li key={p.id} className="flex items-center gap-4 px-5 py-4">
                  <Avatar name={cliente.nome} size="sm" />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <p className="truncate text-sm font-medium text-brand-navy">
                        {cliente.nome}
                      </p>
                      <span className="text-xs text-brand-navy/40">{cliente.targa}</span>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-brand-navy/50">{p.messaggio}</p>
                  </div>

                  <div className="hidden shrink-0 text-right text-xs text-brand-navy/40 sm:block">
                    {new Date(p.inviato).toLocaleString("it-IT", {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>

                  <span
                    className={`hidden shrink-0 rounded-full px-2.5 py-1 text-xs font-medium sm:inline-block ${statoClass[p.stato]}`}
                  >
                    {statoLabel[p.stato]}
                  </span>

                  <a
                    href={`/conferma/${p.clienteId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-medium text-brand-blue underline-offset-2 hover:underline"
                  >
                    Vedi chat &rarr;
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
