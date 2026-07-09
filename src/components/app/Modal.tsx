"use client";

import type { ReactNode } from "react";
import { IconClose } from "./icons";

export default function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/40 p-4">
      <div
        role="presentation"
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <p className="font-heading text-lg uppercase text-brand-navy">{title}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi"
            className="flex h-8 w-8 items-center justify-center rounded-full text-brand-navy/50 hover:bg-brand-cream hover:text-brand-navy"
          >
            <IconClose className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
