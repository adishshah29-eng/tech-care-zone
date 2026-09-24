import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./v3.css";

const displayFont = Space_Grotesk({
  variable: "--v3-font-display",
  subsets: ["latin"],
  weight: ["700"],
});

const bodyFont = Work_Sans({
  variable: "--v3-font-body",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tech Care Zone — Repair Squad, Powai",
  description:
    "Powai's loudest, fastest repair centre for iPhone, iPad, MacBook, iMac and all laptop brands.",
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} v3-root`}>
      {children}
    </div>
  );
}
