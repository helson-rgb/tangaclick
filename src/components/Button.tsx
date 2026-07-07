import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "invert";
  className?: string;
};

const variants = {
  primary:
    "bg-brand-orange text-white hover:bg-orange-600 shadow-sm shadow-brand-orange/30",
  secondary:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
  ghost: "border-2 border-white text-white hover:bg-white hover:text-brand-navy",
  invert: "bg-white text-brand-orange hover:bg-brand-navy hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-heading text-sm uppercase tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
