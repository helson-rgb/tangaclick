import type { Metadata } from "next";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import Section, { Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Prezzi | Targaclick",
  description:
    "Piani semplici e trasparenti per officine di ogni dimensione. Scegli il tuo o richiedi un piano su misura.",
};

const plans = [
  {
    name: "Base",
    price: "29€",
    period: "/mese",
    description: "Per officine singole che vogliono digitalizzare l'agenda revisioni.",
    features: [
      "Fino a 200 targhe attive",
      "Promemoria automatici via WhatsApp",
      "Agenda unificata",
      "1 postazione",
    ],
    highlighted: false,
  },
  {
    name: "Officina",
    price: "59€",
    period: "/mese",
    description: "Il piano più scelto dalle officine con più meccanici e clienti.",
    features: [
      "Targhe illimitate",
      "Promemoria automatici via WhatsApp",
      "Storico clienti completo",
      "Fino a 3 postazioni",
      "Supporto prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Multi-sede",
    price: "Su misura",
    period: "",
    description: "Per reti di officine e catene con più sedi da coordinare.",
    features: [
      "Tutto del piano Officina",
      "Postazioni illimitate",
      "Reportistica multi-sede",
      "Account manager dedicato",
    ],
    highlighted: false,
  },
];

const included = [
  "Nessun costo di attivazione",
  "Nessun vincolo di durata",
  "Aggiornamenti inclusi",
  "Assistenza in italiano",
];

const faqItems = [
  {
    question: "Come vengono fatturati i piani Base e Officina?",
    answer:
      "Il canone è mensile e viene addebitato automaticamente. Puoi disdire in qualsiasi momento senza penali.",
  },
  {
    question: "Cosa succede se supero le targhe incluse nel piano Base?",
    answer:
      "Ti avvisiamo prima di arrivare al limite e puoi passare al piano Officina in un click, senza perdere dati.",
  },
  {
    question: "Come funziona il piano Multi-sede?",
    answer:
      "Il prezzo viene definito insieme al nostro team in base al numero di sedi e postazioni. Contattaci per un preventivo.",
  },
];

export default function Prezzi() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <div className="text-center">
          <Eyebrow>Prezzi</Eyebrow>
          <h1 className="mx-auto mt-3 max-w-2xl font-heading text-4xl uppercase leading-tight text-brand-navy sm:text-5xl">
            Un piano chiaro per ogni officina
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-navy/70">
            Prezzi trasparenti, senza sorprese. Inizia con una demo gratuita e scegli il
            piano adatto alla tua officina.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-brand-orange bg-brand-cream shadow-lg"
                  : "border border-black/10"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-brand-orange px-3 py-1 text-xs font-heading uppercase text-white">
                  Più scelto
                </span>
              )}
              <p className="font-heading text-xl uppercase text-brand-navy">{plan.name}</p>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-4xl text-brand-navy">{plan.price}</span>
                <span className="text-sm text-brand-navy/60">{plan.period}</span>
              </p>
              <p className="mt-3 text-sm text-brand-navy/70">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-brand-navy/80">
                    <span className="text-brand-orange">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={plan.name === "Multi-sede" ? "/contatti" : "/prenota-demo"}
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-8"
              >
                {plan.name === "Multi-sede" ? "Contattaci" : "Prenota la demo"}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Eyebrow>Cosa è incluso</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Sempre incluso, in ogni piano
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {included.map((item) => (
            <span
              key={item}
              className="rounded-full border border-brand-navy/15 bg-white px-5 py-2 text-sm font-medium text-brand-navy"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center">
          <Eyebrow>FAQ sui pagamenti</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Domande sui piani
          </h2>
        </div>
        <div className="mt-10">
          <Faq items={faqItems} />
        </div>
      </Section>

      <Section className="bg-brand-navy text-white">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl uppercase sm:text-4xl">
            Serve un piano su misura?
          </h2>
          <p className="max-w-xl text-white/70">
            Se gestisci più sedi o hai esigenze particolari, il nostro team costruisce un
            piano fatto apposta per te.
          </p>
          <Button href="/contatti" variant="ghost">
            Contattaci per piani custom
          </Button>
        </div>
      </Section>
    </>
  );
}
