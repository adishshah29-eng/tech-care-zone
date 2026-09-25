"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Menu, X } from "../icons";

const links = [
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#devices", label: "Devices" },
  { href: "#contact", label: "Contact" },
];

export function Nav4() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--v4-trace-dim)] bg-[var(--v4-mask)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center">
          <Logo variant="light" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="v4-mono text-[12px] uppercase tracking-[0.14em] text-[var(--v4-silk-soft)] transition-colors hover:text-[var(--v4-gold)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span
            className="v4-mono hidden text-[11px] uppercase tracking-[0.12em] text-[var(--v4-silk-faint)] lg:inline"
            aria-hidden
          >
            Board <span id="pcb-progress" className="text-[var(--v4-gold)]">0%</span>
          </span>
          <a
            href="#contact"
            className="v4-btn-gold v4-mono hidden rounded-sm px-4 py-2 text-[12px] font-bold uppercase tracking-[0.1em] sm:inline-block"
          >
            Book Repair
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border border-[var(--v4-trace-dim)] text-[var(--v4-silk)] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--v4-trace-dim)] px-5 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="v4-mono py-2 text-[12px] uppercase tracking-[0.14em] text-[var(--v4-silk-soft)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="v4-btn-gold v4-mono mt-2 rounded-sm px-4 py-2 text-center text-[12px] font-bold uppercase tracking-[0.1em]"
          >
            Book Repair
          </a>
        </nav>
      )}
    </header>
  );
}
