import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Section, { Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contatti | Targaclick",
  description: "Contatta il team Targaclick per informazioni, supporto o piani su misura.",
};

const directContacts = [
  { label: "Email", value: "ciao@targaclick.com", href: "mailto:ciao@targaclick.com" },
  { label: "Telefono", value: "+39 000 000 0000", href: "tel:+390000000000" },
  {
    label: "WhatsApp",
    value: "Scrivici su WhatsApp",
    href: "https://wa.me/390000000000",
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

const faqItems = [
  {
    question: "In quanto tempo ricevo una risposta?",
    answer: "Rispondiamo entro un giorno lavorativo, spesso anche prima via WhatsApp.",
  },
  {
    question: "Posso richiedere supporto tecnico da qui?",
    answer:
      "Sì, descrivi il problema nel form e il nostro team ti risponderà con i prossimi passi.",
  },
  {
    question: "Fate assistenza anche telefonica?",
    answer: "Sì, puoi chiamarci direttamente al numero indicato in questa pagina.",
  },
];

export default function Contatti() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <div className="text-center">
          <Eyebrow>Contatti</Eyebrow>
          <h1 className="mx-auto mt-3 max-w-2xl font-heading text-4xl uppercase leading-tight text-brand-navy sm:text-5xl">
            Parliamo della tua officina
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-navy/70">
            Scrivici un messaggio o contattaci direttamente: siamo qui per rispondere a
            ogni domanda su Targaclick.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-brand-cream p-6 sm:p-8">
            <p className="font-heading text-lg uppercase text-brand-navy">
              Inviaci un messaggio
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <Eyebrow>Contatti diretti</Eyebrow>
            <ul className="mt-4 space-y-4">
              {directContacts.map((contact) => (
                <li key={contact.label}>
                  <p className="text-xs uppercase tracking-wide text-brand-navy/50">
                    {contact.label}
                  </p>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-heading text-lg text-brand-navy transition-colors hover:text-brand-orange"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Eyebrow>Social media</Eyebrow>
              <div className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white transition-opacity hover:opacity-80"
                    aria-label={social.label}
                  >
                    <span className="text-xs font-heading uppercase">
                      {social.label.slice(0, 2)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
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
    </>
  );
}
