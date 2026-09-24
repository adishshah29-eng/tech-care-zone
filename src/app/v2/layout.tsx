import type { Metadata } from "next";
import { Sora, Inter, Space_Mono } from "next/font/google";
import "./v2.css";

const displayFont = Sora({
  variable: "--v2-font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--v2-font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = Space_Mono({
  variable: "--v2-font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tech Care Zone — Diagnostic Repair, Powai",
  description:
    "Powai's diagnostic-grade repair centre for iPhone, iPad, MacBook, iMac and all laptop brands.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} v2-root`}>
      {children}
    </div>
  );
}
