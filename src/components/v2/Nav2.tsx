"use client";

import { useState } from "react";
import { Menu, X } from "../icons";
import { business } from "@/lib/content";

const links = [
  { href: "#why-us", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#devices", label: "Devices" },
  { href: "#contact", label: "Contact" },
];

export function Nav2() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--v2-border)] bg-[var(--v2-bg)]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="v2-mono flex h-9 w-9 items-center justify-center rounded border border-[var(--v2-amber)] text-[13px] font-bold text-[var(--v2-amber)]">
            {business.shortName}
          </span>
          <span className="hidden text-[1.05rem] font-bold text-[var(--v2-ink)] sm:inline">
            {business.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="v2-mono text-[12px] uppercase tracking-[0.14em] text-[var(--v2-ink-soft)] transition-colors hover:text-[var(--v2-amber)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="v2-btn v2-btn-amber hidden rounded px-4 py-2 v2-mono text-[12px] font-bold uppercase tracking-[0.1em] sm:inline-block"
          >
            Book Repair
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded border border-[var(--v2-border)] text-[var(--v2-ink)] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--v2-border)] px-5 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="v2-mono py-2 text-[12px] uppercase tracking-[0.14em] text-[var(--v2-ink-soft)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="v2-btn v2-btn-amber mt-2 rounded px-4 py-2 text-center v2-mono text-[12px] font-bold uppercase tracking-[0.1em]"
          >
            Book Repair
          </a>
        </nav>
      )}
    </header>
  );
}
