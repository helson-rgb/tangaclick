const LogoMark = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-8 w-8 shrink-0"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 34 L18 34 L18 44 L26 44 L26 34 L26 18 L38 18 L38 26 L46 16 L38 6 L38 14 L18 14 L18 26 L4 26 Z"
      fill="var(--color-brand-orange)"
    />
  </svg>
);

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const base = variant === "dark" ? "text-brand-navy" : "text-white";
  const accent = variant === "dark" ? "text-brand-blue" : "text-brand-orange";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark />
      <span className={`font-heading text-2xl uppercase tracking-tight ${base}`}>
        Targa<span className={accent}>click</span>
      </span>
    </span>
  );
}
