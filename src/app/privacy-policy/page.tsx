import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Targaclick",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updatedAt="3 luglio 2026">
      <p>
        TargaClick S.r.l. tratta i dati personali raccolti attraverso il sito e
        l&apos;applicazione nel rispetto del Regolamento (UE) 2016/679 (GDPR).
      </p>
      <p>
        I dati forniti dalle officine (nome, email, telefono) e dai loro clienti finali
        (targa, contatto, scadenza revisione) sono utilizzati esclusivamente per erogare il
        servizio di promemoria e gestione agenda, e non vengono ceduti a terzi per finalità
        di marketing.
      </p>
      <p>
        Per esercitare i diritti previsti dagli articoli 15-22 del GDPR è possibile
        scrivere a ciao@targaclick.com.
      </p>
    </LegalPage>
  );
}
