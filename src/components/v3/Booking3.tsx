"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowRight } from "../icons";
import { SectionHead3 } from "./SectionHead3";
import { business, deviceOptions, issueOptions, readBookingForm, whatsappBookingUrl } from "@/lib/content";

const fieldClass =
  "v3-border w-full bg-[var(--v3-white)] px-3.5 py-2.5 text-[0.95rem] font-medium text-[var(--v3-ink)] placeholder:text-[var(--v3-ink)]/40 focus:outline-none";

export function Booking3() {
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
    <section id="contact" className="border-b-4 border-[var(--v3-ink)] bg-[var(--v3-blue)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead3 title="Book your repair" tone="ink" lede="Fill this out or just call us. We reply fast." />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <Row icon={MapPin} label="Visit Us">
              {business.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </Row>
            <Row icon={Phone} label="Call Us">
              <a href={`tel:${business.phoneHref}`}>{business.phone}</a>
              <span className="block">Mon–Sat · 10am–8pm</span>
            </Row>
            <Row icon={MessageCircle} label="WhatsApp">
              <a href={business.whatsappHref} target="_blank" rel="noreferrer">{business.phone}</a>
            </Row>
            <Row icon={Mail} label="Email">
              <span className="block">Available on request</span>
            </Row>
            <Row icon={Clock} label="Hours">
              {business.hours.map((h) => (
                <span key={h.days} className="block">{h.days}: {h.time}</span>
              ))}
            </Row>
          </div>

          <div className="v3-border v3-shadow-lg bg-[var(--v3-white)] p-6 sm:p-8">
            {submitted ? (
              <div className="v3-border bg-[var(--v3-yellow)] p-6 text-center">
                <p className="text-[1.2rem] font-bold uppercase">Got it!</p>
                <p className="mt-2 text-[0.95rem] font-medium">
                  WhatsApp should open with your details filled in, just hit send. <a href={waUrl} target="_blank" rel="noreferrer" className="underline">Didn&apos;t open? Tap here.</a> Urgent? Call or WhatsApp {business.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-1">
                  <span className="text-[11px] font-bold uppercase">Your Name</span>
                  <input required name="name" type="text" placeholder="Full name" className={`${fieldClass} mt-1.5`} />
                </label>
                <label className="sm:col-span-1">
                  <span className="text-[11px] font-bold uppercase">Phone Number</span>
                  <input required name="phone" type="tel" placeholder="10-digit mobile number" className={`${fieldClass} mt-1.5`} />
                </label>
                <label className="sm:col-span-1">
                  <span className="text-[11px] font-bold uppercase">Device</span>
                  <select required name="device" defaultValue="" className={`${fieldClass} mt-1.5`}>
                    <option value="" disabled>Select your device</option>
                    {deviceOptions.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </label>
                <label className="sm:col-span-1">
                  <span className="text-[11px] font-bold uppercase">Issue</span>
                  <select required name="issue" defaultValue="" className={`${fieldClass} mt-1.5`}>
                    <option value="" disabled>Select issue type</option>
                    {issueOptions.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </label>
                <label className="sm:col-span-2">
                  <span className="text-[11px] font-bold uppercase">Describe Your Problem</span>
                  <textarea name="description" rows={3} placeholder="Tell us what happened" className={`${fieldClass} mt-1.5 resize-none`} />
                </label>
                <button
                  type="submit"
                  className="v3-border v3-shadow v3-press inline-flex w-fit items-center gap-2 bg-[var(--v3-red)] px-6 py-3 text-[14px] font-bold uppercase text-white sm:col-span-2"
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

function Row({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="v3-border flex h-9 w-9 shrink-0 items-center justify-center bg-[var(--v3-white)]">
        <Icon size={17} strokeWidth={2} />
      </span>
      <div>
        <p className="text-[0.95rem] font-bold uppercase">{label}</p>
        <div className="mt-1 text-[0.9rem] font-medium leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
