import type { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Grazie | Targaclick",
  description: "La tua demo Targaclick è stata prenotata con successo.",
};

export default function Grazie() {
  return (
    <Section className="pt-24 pb-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange text-2xl text-white">
          &#10003;
        </span>
        <h1 className="mt-6 font-heading text-4xl uppercase leading-tight text-brand-navy">
          Demo confermata
        </h1>
        <p className="mt-4 text-brand-navy/70">
          Grazie! Abbiamo ricevuto la tua richiesta. Riceverai a breve una email di
          conferma con tutti i dettagli per il collegamento.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Torna alla home</Button>
          <Button href="/come-funziona" variant="secondary">
            Scopri come funziona
          </Button>
        </div>
      </div>
    </Section>
  );
}
