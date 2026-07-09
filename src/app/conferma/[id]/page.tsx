import { notFound } from "next/navigation";
import Logo from "@/components/Logo";
import ConfirmAppointment from "@/components/app/ConfirmAppointment";
import { appuntamenti, clienteById, officina } from "@/lib/mock-data";

export default async function ConfermaAppuntamento({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cliente = clienteById(id);
  const appuntamento = appuntamenti.find((a) => a.clienteId === id);

  if (!cliente || !appuntamento) notFound();

  const dataLabel = new Date(appuntamento.data).toLocaleDateString("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="flex min-h-full flex-col items-center bg-brand-cream px-6 py-16">
      <p className="text-xs uppercase tracking-wide text-brand-navy/50">
        Messaggio da {officina.nome}
      </p>
      <h1 className="mt-2 text-center font-heading text-2xl uppercase text-brand-navy">
        Ciao {cliente.nome.split(" ")[0]}!
      </h1>
      <p className="mt-2 max-w-sm text-center text-sm text-brand-navy/70">
        La revisione della tua auto <strong>{cliente.targa}</strong> è in scadenza. Conferma
        il tuo appuntamento in un click, senza registrazione.
      </p>

      <div className="mt-8 w-full max-w-sm rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <ConfirmAppointment cliente={cliente} ora={appuntamento.ora} dataLabel={dataLabel} />
      </div>

      <div className="mt-10 flex items-center gap-2 opacity-60">
        <Logo className="scale-90" />
      </div>
    </div>
  );
}
