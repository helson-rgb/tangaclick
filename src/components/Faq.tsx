type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base uppercase text-brand-navy">
            {item.question}
            <span className="shrink-0 text-brand-orange transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-brand-navy/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
