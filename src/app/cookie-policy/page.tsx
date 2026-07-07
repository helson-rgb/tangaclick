import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Targaclick",
};

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" updatedAt="3 luglio 2026">
      <p>
        Questo sito utilizza esclusivamente cookie tecnici necessari al corretto
        funzionamento delle pagine, oltre a eventuali cookie statistici in forma anonima.
      </p>
      <p>
        Non vengono utilizzati cookie di profilazione senza il preventivo consenso
        dell&apos;utente.
      </p>
      <p>
        È possibile gestire o disabilitare i cookie direttamente dalle impostazioni del
        proprio browser.
      </p>
    </LegalPage>
  );
}
