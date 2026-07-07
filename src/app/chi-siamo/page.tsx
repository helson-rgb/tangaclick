import type { Metadata } from "next";
import Button from "@/components/Button";
import Section, { Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Chi siamo | Targaclick",
  description:
    "La missione, la storia e i valori di Targaclick, l'agenda digitale privata per officine di revisione.",
};

const values = [
  {
    title: "Semplicità",
    description: "Ogni funzione deve essere immediata, senza manuali né formazione.",
  },
  {
    title: "Fiducia",
    description: "I dati dei tuoi clienti restano privati, sotto il nome della tua officina.",
  },
  {
    title: "Vicinanza",
    description: "Costruiamo Targaclick ascoltando ogni giorno chi lavora in officina.",
  },
];

export default function ChiSiamo() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <div className="text-center">
          <Eyebrow>Chi siamo</Eyebrow>
          <h1 className="mx-auto mt-3 max-w-2xl font-heading text-4xl uppercase leading-tight text-brand-navy sm:text-5xl">
            Nati in officina, costruiti per le officine
          </h1>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Mission</Eyebrow>
            <h2 className="mt-3 font-heading text-2xl uppercase text-brand-navy">
              Rendere la gestione della revisione semplice come un click
            </h2>
            <p className="mt-4 text-sm text-brand-navy/70">
              Ogni giorno le officine perdono tempo tra telefonate, agende cartacee e
              portali esterni. Targaclick nasce per restituire quel tempo a chi lavora sui
              veicoli, non sulle scartoffie.
            </p>
          </div>
          <div>
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-3 font-heading text-2xl uppercase text-brand-navy">
              Un&apos;agenda digitale privata in ogni officina d&apos;Italia
            </h2>
            <p className="mt-4 text-sm text-brand-navy/70">
              Immaginiamo un settore dove ogni scadenza diventa un appuntamento confermato,
              e dove la relazione tra officina e cliente resta diretta, senza intermediari.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Eyebrow>La nostra storia</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Da un&apos;esigenza reale a uno strumento quotidiano
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-navy/70">
            Targaclick nasce nel 2026 dall&apos;osservazione diretta di officine di
            revisione italiane, stanche di rincorrere i clienti al telefono per ricordare
            le scadenze. Da lì, un&apos;idea semplice: automatizzare i promemoria dove i
            clienti già rispondono, su WhatsApp.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-heading text-lg uppercase text-brand-orange">
                {value.title}
              </p>
              <p className="mt-2 text-sm text-brand-navy/70">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-navy text-white">
        <div className="text-center">
          <Eyebrow>Il nostro scopo</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-2xl font-heading text-3xl uppercase sm:text-4xl">
            Dare tempo alle officine, fiducia ai loro clienti
          </h2>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Vuoi conoscerci meglio?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/prenota-demo">Prenota una demo</Button>
            <Button href="/contatti" variant="secondary">
              Contattaci
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
