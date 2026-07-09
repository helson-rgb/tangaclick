"use client";

import { useState } from "react";

export default function Toggle({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => setChecked((v) => !v)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        checked ? "bg-brand-orange" : "bg-black/15"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
