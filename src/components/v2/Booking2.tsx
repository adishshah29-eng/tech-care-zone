"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowRight } from "../icons";
import { SectionHead2 } from "./SectionHead2";
import { business, deviceOptions, issueOptions, readBookingForm, whatsappBookingUrl } from "@/lib/content";

const fieldClass =
  "w-full rounded border border-[var(--v2-border)] bg-[var(--v2-bg)] px-3.5 py-2.5 text-[0.95rem] text-[var(--v2-ink)] placeholder:text-[var(--v2-ink-faint)] focus:border-[var(--v2-amber)] focus:outline-none";

export function Booking2() {
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = whatsappBookingUrl(readBookingForm(e.currentTarget));
    setWaUrl(url);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="relative border-b border-[var(--v2-border)] py-20 sm:py-28">
      <div className="absolute inset-0">
        <Image src="/v2/workbench.webp" alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-[var(--v2-bg)]/85" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead2
          title="Book your repair today"
          lede="Fill in the form below or contact us directly. We'll get back to you within minutes."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <ContactRow icon={MapPin} label="Visit Us">
              {business.addressLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </ContactRow>
            <ContactRow icon={Phone} label="Call Us">
              <a href={`tel:${business.phoneHref}`} className="hover:text-[var(--v2-amber)]">
                {business.phone}
              </a>
              <span className="block text-[var(--v2-ink-faint)]">Mon–Sat · 10am–8pm</span>
            </ContactRow>
            <ContactRow icon={MessageCircle} label="WhatsApp">
              <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-[var(--v2-amber)]">
                {business.phone}
              </a>
              <span className="block text-[var(--v2-ink-faint)]">Chat for quick quotes</span>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <span className="block text-[var(--v2-ink-faint)]">Available on request</span>
            </ContactRow>
            <ContactRow icon={Clock} label="Working Hours">
              {business.hours.map((h) => (
                <span key={h.days} className="block">{h.days}: {h.time}</span>
              ))}
            </ContactRow>
          </div>

          <div className="v2-card rounded p-6 sm:p-8">
            <p className="v2-mono text-[11px] uppercase tracking-[0.1em] text-[var(--v2-ink-faint)]">
              Service Request — TCZ-01
            </p>

            {submitted ? (
              <div className="mt-8 rounded border border-[var(--v2-green)] p-6 text-center">
                <p className="text-[1.15rem] font-bold text-[var(--v2-green)]">
                  Request logged.
                </p>
                <p className="mt-2 text-[0.95rem] text-[var(--v2-ink-soft)]">
                  WhatsApp should open with your details filled in, just hit send. <a href={waUrl} target="_blank" rel="noreferrer" className="underline">Didn&apos;t open? Tap here.</a> For anything urgent,
                  call or WhatsApp us at {business.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-1">
                  <span className="v2-mono text-[11px] uppercase tracking-[0.06em] text-[var(--v2-ink-faint)]">
                    Your Name
                  </span>
                  <input required name="name" type="text" placeholder="Full name" className={`${fieldClass} mt-1.5`} />
                </label>

                <label className="sm:col-span-1">
                  <span className="v2-mono text-[11px] uppercase tracking-[0.06em] text-[var(--v2-ink-faint)]">
                    Phone Number
                  </span>
                  <input required name="phone" type="tel" placeholder="10-digit mobile number" className={`${fieldClass} mt-1.5`} />
                </label>

                <label className="sm:col-span-1">
                  <span className="v2-mono text-[11px] uppercase tracking-[0.06em] text-[var(--v2-ink-faint)]">
                    Device
                  </span>
                  <select required name="device" defaultValue="" className={`${fieldClass} mt-1.5`}>
                    <option value="" disabled>Select your device</option>
                    {deviceOptions.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </label>

                <label className="sm:col-span-1">
                  <span className="v2-mono text-[11px] uppercase tracking-[0.06em] text-[var(--v2-ink-faint)]">
                    Issue
                  </span>
                  <select required name="issue" defaultValue="" className={`${fieldClass} mt-1.5`}>
                    <option value="" disabled>Select issue type</option>
                    {issueOptions.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </label>

                <label className="sm:col-span-2">
                  <span className="v2-mono text-[11px] uppercase tracking-[0.06em] text-[var(--v2-ink-faint)]">
                    Describe Your Problem
                  </span>
                  <textarea name="description" rows={3} placeholder="Tell us what happened" className={`${fieldClass} mt-1.5 resize-none`} />
                </label>

                <button
                  type="submit"
                  className="v2-btn v2-btn-amber inline-flex w-fit items-center gap-2 rounded px-6 py-3 v2-mono text-[13px] font-bold uppercase tracking-[0.08em] sm:col-span-2"
                >
                  Send Repair Request
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <Icon size={20} strokeWidth={1.7} className="mt-1 shrink-0 text-[var(--v2-amber)]" />
      <div>
        <p className="text-[0.98rem] font-bold text-[var(--v2-ink)]">{label}</p>
        <div className="mt-1 text-[0.92rem] leading-relaxed text-[var(--v2-ink-soft)]">
          {children}
        </div>
      </div>
    </div>
  );
}
