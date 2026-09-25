import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const specFont = IBM_Plex_Mono({
  variable: "--font-spec",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = "iPhone, MacBook & Laptop Repair in Powai | Tech Care Zone";
const description =
  "Apple and laptop repair in Powai, Mumbai: iPhone, iPad, MacBook, iMac, Dell, HP, Lenovo. Genuine parts, 6-month warranty, same-day repairs, free diagnosis.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Tech Care Zone" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tech Care Zone",
    title,
    description,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tech Care Zone logo" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${specFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
