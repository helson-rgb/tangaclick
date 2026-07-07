import type { Metadata } from "next";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import Section, { Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Come funziona | Targaclick",
  description:
    "Scopri come Targaclick trasforma la gestione delle revisioni della tua officina in un'agenda digitale automatica.",
};

const steps = [
  {
    number: "01",
    title: "Registra la targa",
    description:
      "Inserisci targa e scadenza di revisione del cliente in pochi secondi, direttamente dal tuo pannello.",
  },
  {
    number: "02",
    title: "Targaclick monitora le scadenze",
    description:
      "Il sistema tiene traccia di ogni revisione in agenda e calcola automaticamente quando avvisare il cliente.",
  },
  {
    number: "03",
    title: "Il promemoria parte da solo",
    description:
      "Un messaggio WhatsApp firmato con il nome della tua officina raggiunge il cliente al momento giusto.",
  },
  {
    number: "04",
    title: "L'appuntamento si conferma",
    description:
      "Il cliente conferma con un click, l'agenda si aggiorna e tu vedi tutto in un'unica schermata.",
  },
];

const features = [
  {
    title: "Agenda unificata",
    description: "Tutte le revisioni in scadenza, ordinate per data, in un'unica vista.",
  },
  {
    title: "Promemoria WhatsApp",
    description: "Messaggi automatici sotto il nome della tua officina, senza costi per SMS.",
  },
  {
    title: "Storico clienti",
    description: "Ogni targa, ogni revisione, ogni contatto: sempre a portata di click.",
  },
  {
    title: "Conferme in un click",
    description: "Il cliente conferma direttamente dalla chat, senza scaricare nulla.",
  },
];

const integrations = [
  "WhatsApp Business",
  "Calendario Google",
  "Esportazione dati clienti",
  "Accesso multi-postazione",
];

const faqItems = [
  {
    question: "Devo installare qualcosa in officina?",
    answer:
      "No, Targaclick funziona interamente via browser. Basta una connessione internet per accedere all'agenda da computer, tablet o smartphone.",
  },
  {
    question: "I miei clienti devono scaricare un'app?",
    answer:
      "No. I promemoria arrivano direttamente su WhatsApp, l'app che i tuoi clienti già usano ogni giorno.",
  },
  {
    question: "Posso gestire più postazioni o meccanici?",
    answer:
      "Sì, il piano Officina e superiori includono accessi multipli con la stessa agenda condivisa.",
  },
];

export default function ComeFunziona() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <div className="text-center">
          <Eyebrow>Come funziona</Eyebrow>
          <h1 className="mx-auto mt-3 max-w-2xl font-heading text-4xl uppercase leading-tight text-brand-navy sm:text-5xl">
            Dalla targa al promemoria, in automatico
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-navy/70">
            Targaclick sostituisce telefonate, agende cartacee e portali esterni con
            un&apos;unica azione digitale: una targa, un click.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-black/5 p-6">
              <p className="font-heading text-3xl text-brand-orange">{step.number}</p>
              <p className="mt-3 font-heading text-lg uppercase text-brand-navy">
                {step.title}
              </p>
              <p className="mt-2 text-sm text-brand-navy/70">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Eyebrow>Funzionalità chiave</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Tutto quello che serve alla tua officina
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
              <div>
                <p className="font-heading text-base uppercase text-brand-navy">
                  {feature.title}
                </p>
                <p className="mt-1 text-sm text-brand-navy/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-navy text-white">
        <div className="text-center">
          <Eyebrow>Integrazioni</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase sm:text-4xl">
            Si integra con gli strumenti che già usi
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {integrations.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center">
          <Eyebrow>Perché scegliere Targaclick</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Uno strumento privato, pensato per le officine
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-navy/70">
            Nessun portale esterno, nessun marchio terzo davanti al cliente: Targaclick
            lavora sotto il nome della tua officina, rafforzando la relazione diretta con
            chi ti sceglie ogni anno.
          </p>
        </div>
      </Section>

      <Section id="faq">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Domande frequenti
          </h2>
        </div>
        <div className="mt-10">
          <Faq items={faqItems} />
        </div>
      </Section>

      <Section className="bg-brand-orange">
        <div className="flex flex-col items-center gap-6 text-center text-white">
          <h2 className="font-heading text-3xl uppercase sm:text-4xl">
            Vuoi vederlo in azione?
          </h2>
          <Button href="/prenota-demo" variant="invert">
            Prenota la demo
          </Button>
        </div>
      </Section>
    </>
  );
}
