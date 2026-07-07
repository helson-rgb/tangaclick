import Image from "next/image";
import logoMarkNavy from "../../public/logo-mark-navy.png";
import logoMarkWhite from "../../public/logo-mark-white.png";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const base = variant === "dark" ? "text-brand-navy" : "text-white";
  const accent = variant === "dark" ? "text-brand-blue" : "text-brand-orange";
  const mark = variant === "dark" ? logoMarkNavy : logoMarkWhite;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image src={mark} alt="" priority className="h-8 w-auto shrink-0" />
      <span className={`font-heading text-2xl uppercase tracking-tight ${base}`}>
        Targa<span className={accent}>click</span>
      </span>
    </span>
  );
}
