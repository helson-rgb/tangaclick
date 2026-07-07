import Section from "@/components/Section";

export default function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <Section className="pt-14 pb-24 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl uppercase text-brand-navy">{title}</h1>
        <p className="mt-2 text-sm text-brand-navy/50">Ultimo aggiornamento: {updatedAt}</p>
        <div className="mt-10 space-y-4 text-sm leading-relaxed text-brand-navy/80">
          {children}
        </div>
      </div>
    </Section>
  );
}
