import type { Metadata } from "next";
import { Chakra_Petch, Barlow, JetBrains_Mono } from "next/font/google";
import "./v4.css";

const displayFont = Chakra_Petch({
  variable: "--v4-font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Barlow({
  variable: "--v4-font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = JetBrains_Mono({
  variable: "--v4-font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Tech Care Zone — Board-Level Repair, Powai",
  description:
    "Board-level repair for iPhone, iPad, MacBook, iMac and every major laptop brand in Powai, Mumbai.",
};

export default function V4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} v4-root`}>
      {children}
    </div>
  );
}
