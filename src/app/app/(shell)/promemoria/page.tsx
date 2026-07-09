import Topbar from "@/components/app/Topbar";
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

export default function Promemoria() {
  const ordinati = [...promemoria].sort(
    (a, b) => new Date(b.inviato).getTime() - new Date(a.inviato).getTime()
  );

  return (
    <>
      <Topbar title="Promemoria WhatsApp" />
      <div className="space-y-4 p-8">
        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <p className="text-sm text-brand-navy/70">
            Ogni messaggio parte automaticamente sotto il nome della tua officina. Qui vedi lo
            storico di ciò che è già partito e cosa è ancora in coda.
          </p>
        </div>

        <div className="space-y-3">
          {ordinati.map((p) => {
            const cliente = clienteById(p.clienteId);
            return (
              <div
                key={p.id}
                className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-5 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.6 1.4 5.6 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.4-8.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.7 9.7 0 0 1 2.2 12c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium text-brand-navy">
                      {cliente?.nome} <span className="text-brand-navy/40">· {cliente?.targa}</span>
                    </p>
                    <p className="mt-1 max-w-md text-sm text-brand-navy/70">{p.messaggio}</p>
                    <p className="mt-2 text-xs text-brand-navy/40">
                      {new Date(p.inviato).toLocaleString("it-IT", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${statoClass[p.stato]}`}
                  >
                    {statoLabel[p.stato]}
                  </span>
                  <a
                    href={`/conferma/${p.clienteId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-brand-blue underline-offset-2 hover:underline"
                  >
                    Vedi cosa vede il cliente
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
