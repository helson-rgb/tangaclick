import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import Faq from "@/components/Faq";
import Section, { Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Prenota demo | Targaclick",
  description:
    "Prenota una demo gratuita di 20 minuti e scopri come Targaclick può gestire le revisioni della tua officina.",
};

const whatYouWillSee = [
  "Come registrare targhe e scadenze in pochi secondi",
  "L'invio automatico dei promemoria via WhatsApp",
  "L'agenda unificata e lo storico clienti",
  "Risposte a tutte le tue domande, in diretta",
];

const faqItems = [
  {
    question: "Quanto dura la demo?",
    answer: "Circa 20 minuti, in videochiamata con un membro del nostro team.",
  },
  {
    question: "La demo è davvero gratuita?",
    answer: "Sì, senza nessun impegno. Al termine decidi tu se procedere con un piano.",
  },
  {
    question: "Posso prenotare per conto della mia officina?",
    answer: "Certo, basta indicare il nome dell'officina nel form di prenotazione.",
  },
];

export default function PrenotaDemo() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <div className="text-center">
          <Eyebrow>Prenota demo</Eyebrow>
          <h1 className="mx-auto mt-3 max-w-2xl font-heading text-4xl uppercase leading-tight text-brand-navy sm:text-5xl">
            Vediamo insieme come funziona Targaclick
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-navy/70">
            Scegli data e orario: un membro del nostro team ti guiderà in una demo gratuita
            di 20 minuti, su misura per la tua officina.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Cosa vedrai</Eyebrow>
            <h2 className="mt-3 font-heading text-2xl uppercase text-brand-navy">
              In 20 minuti scoprirai
            </h2>
            <ul className="mt-6 space-y-4">
              {whatYouWillSee.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-brand-navy/80">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-black/10 bg-brand-cream p-6">
              <p className="font-heading text-sm uppercase text-brand-navy">
                Preferisci scriverci subito?
              </p>
              <p className="mt-2 text-sm text-brand-navy/70">
                Contattaci direttamente su WhatsApp, ti rispondiamo entro poche ore.
              </p>
              <a
                href="https://wa.me/390000000000?text=Ciao%2C%20vorrei%20prenotare%20una%20demo%20di%20Targaclick"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-blue-800"
              >
                Scrivici su WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-8">
            <p className="font-heading text-lg uppercase text-brand-navy">
              Prenota il tuo orario
            </p>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Domande sulla demo
          </h2>
        </div>
        <div className="mt-10">
          <Faq items={faqItems} />
        </div>
      </Section>
    </>
  );
}
