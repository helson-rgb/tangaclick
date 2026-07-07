import Button from "@/components/Button";
import Section, { Eyebrow } from "@/components/Section";

const benefits = [
  {
    title: "Automatico",
    description:
      "Promemoria automatici via WhatsApp sotto il nome della tua officina, senza muovere un dito.",
  },
  {
    title: "Semplice",
    description: "Una targa, un click. Ogni scadenza diventa un appuntamento confermato.",
  },
  {
    title: "Efficiente",
    description: "Zero scadenze perse, zero clienti dimenticati, zero telefonate a vuoto.",
  },
];

const reviews = [
  {
    name: "Marco, Officina Bianchi",
    quote:
      "Da quando usiamo Targaclick non dimentichiamo più una revisione. I clienti tornano da soli, avvisati da WhatsApp.",
  },
  {
    name: "Luca, Autofficina Rossi",
    quote:
      "Ho tagliato le telefonate del 70%. Il calendario si aggiorna da solo e i promemoria partono senza che io debba pensarci.",
  },
  {
    name: "Sara, Carrozzeria Verdi",
    quote:
      "Uno strumento pensato davvero per chi lavora in officina, non per gli sviluppatori. Facilissimo da usare fin dal primo giorno.",
  },
];

export default function Home() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-heading text-5xl uppercase leading-[0.95] tracking-tight text-brand-navy sm:text-6xl">
              Una targa.
              <br />
              <span className="text-brand-orange">Un click.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-brand-navy/80">
              L&apos;agenda digitale privata che gestisce ogni revisione, attraverso
              promemoria automatici via WhatsApp sotto il nome della tua officina.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/prenota-demo">Prenota la demo gratuita</Button>
              <Button href="/come-funziona" variant="secondary">
                Come funziona
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
            <div className="bg-brand-navy px-5 py-3">
              <p className="font-heading text-sm uppercase tracking-wide text-white">
                targaclick
              </p>
            </div>
            <div className="space-y-4 p-5">
              <p className="text-xs uppercase tracking-wide text-brand-navy/50">Oggi</p>
              <div className="rounded-xl border border-black/5 bg-brand-cream p-4">
                <p className="font-medium text-brand-navy">Marco Bianchi &middot; AB123CD</p>
                <p className="text-sm text-brand-blue">10:30 &middot; Confermato</p>
              </div>
              <div className="rounded-xl bg-orange-50 p-3 text-sm font-medium text-brand-orange">
                3 promemoria inviati
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-navy text-white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Il problema</Eyebrow>
            <h2 className="mt-3 font-heading text-3xl uppercase leading-tight sm:text-4xl">
              Stanco di rispondere al <span className="text-brand-orange">telefono</span> tutto
              il giorno?
            </h2>
            <p className="mt-4 text-white/70">
              Telefonate, agende cartacee e portali esterni fanno perdere tempo e clienti.
              Targaclick sostituisce tutto questo con un&apos;unica azione digitale.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Button href="/prenota-demo" variant="ghost">
              Prova Targaclick
            </Button>
          </div>
        </div>
      </Section>

      <Section id="perche">
        <div className="text-center">
          <Eyebrow>Perché Targaclick</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Lo strumento privato che gestisce ogni revisione al posto tuo
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <p className="font-heading text-lg uppercase text-brand-orange">
                {benefit.title}
              </p>
              <p className="mt-2 text-sm text-brand-navy/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="mx-auto max-w-xs overflow-hidden rounded-3xl border border-black/10 bg-[#e9f7ef] p-4 shadow-lg">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs font-medium text-brand-navy/50">Officina Bianchi</p>
                <p className="mt-2 text-sm text-brand-navy">
                  Ciao Marco! La revisione della tua auto (AB123CD) scade il 12/07. Vuoi
                  confermare l&apos;appuntamento di domani alle 10:30?
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
                    Conferma
                  </span>
                  <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-brand-navy/60">
                    Rimanda
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>WhatsApp incluso</Eyebrow>
            <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
              Promemoria che arrivano dove il cliente guarda davvero
            </h2>
            <p className="mt-4 text-brand-navy/70">
              Ogni messaggio parte automaticamente sotto il nome della tua officina, con il
              tono e la fiducia di un contatto diretto: niente app da scaricare, niente
              email che finiscono nello spam.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Eyebrow>Recensioni</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl uppercase text-brand-navy sm:text-4xl">
            Cosa dicono di noi?
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-brand-navy p-6 text-white shadow-sm"
            >
              <div className="flex gap-1 text-brand-orange">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/80">&ldquo;{review.quote}&rdquo;</p>
              <p className="mt-4 font-heading text-sm uppercase tracking-wide text-brand-orange">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-orange">
        <div className="flex flex-col items-center gap-6 text-center text-white">
          <h2 className="font-heading text-3xl uppercase sm:text-4xl">
            Pronto a semplificare la tua officina?
          </h2>
          <p className="max-w-xl text-white/90">
            Prenota una demo gratuita e scopri come Targaclick può gestire le revisioni al
            posto tuo, da oggi.
          </p>
          <Button href="/prenota-demo" variant="invert">
            Prenota la demo
          </Button>
        </div>
      </Section>
    </>
  );
}
