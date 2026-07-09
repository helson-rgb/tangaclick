"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Login() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/app/dashboard");
  }

  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-brand-cream px-6 py-16">
      <Link href="/">
        <Logo className="mb-10" />
      </Link>

      <div className="w-full max-w-sm rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
        <p className="font-heading text-lg uppercase text-brand-navy">Accedi alla tua agenda</p>
        <p className="mt-1 text-sm text-brand-navy/60">
          Demo: inserisci qualsiasi email e password per continuare.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wide text-brand-navy/50">Email</label>
            <input
              type="email"
              defaultValue="marco@officinabianchi.it"
              className="mt-1 w-full rounded-lg border border-black/15 px-4 py-3 text-sm text-brand-navy focus:border-brand-blue focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wide text-brand-navy/50">Password</label>
            <input
              type="password"
              defaultValue="••••••••"
              className="mt-1 w-full rounded-lg border border-black/15 px-4 py-3 text-sm text-brand-navy focus:border-brand-blue focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-brand-orange px-6 py-3 font-heading text-sm uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
          >
            Accedi
          </button>
        </form>
      </div>

      <Link href="/" className="mt-8 text-sm text-brand-navy/50 hover:text-brand-navy">
        &larr; Torna al sito
      </Link>
    </div>
  );
}
