"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Menu, X } from "../icons";
import { business } from "@/lib/content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#devices", label: "Devices" },
  { href: "#contact", label: "Contact" },
];

export function Nav3() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-[var(--v3-ink)] bg-[var(--v3-bg)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Logo variant="dark" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-[0.02em] transition-colors hover:text-[var(--v3-red)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="v3-border v3-shadow v3-press hidden bg-[var(--v3-red)] px-4 py-2 text-[13px] font-bold uppercase text-white sm:inline-block"
          >
            Book Repair
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="v3-border flex h-10 w-10 items-center justify-center bg-[var(--v3-white)] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t-4 border-[var(--v3-ink)] px-5 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-[13px] font-bold uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="v3-border mt-2 bg-[var(--v3-red)] px-4 py-2 text-center text-[13px] font-bold uppercase text-white"
          >
            Book Repair
          </a>
        </nav>
      )}
    </header>
  );
}
