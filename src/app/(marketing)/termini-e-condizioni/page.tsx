import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termini e condizioni | Targaclick",
};

export default function TerminiECondizioni() {
  return (
    <LegalPage title="Termini e condizioni" updatedAt="3 luglio 2026">
      <p>
        L&apos;utilizzo del servizio Targaclick è disciplinato dai presenti termini e
        condizioni, che l&apos;officina accetta al momento della sottoscrizione di un
        piano.
      </p>
      <p>
        Targaclick fornisce l&apos;agenda digitale e l&apos;invio di promemoria automatici
        via WhatsApp secondo il piano sottoscritto. L&apos;officina resta responsabile
        dell&apos;esattezza dei dati inseriti relativi a targhe e scadenze.
      </p>
      <p>
        I piani si rinnovano automaticamente su base mensile e possono essere disdetti in
        qualsiasi momento senza penali, con effetto dal periodo di fatturazione
        successivo.
      </p>
    </LegalPage>
  );
}
