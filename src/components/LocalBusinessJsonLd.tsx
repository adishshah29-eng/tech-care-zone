import { appleServices, business, laptopServices } from "@/lib/content";
import { siteUrl } from "@/lib/site";


export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    slogan: business.tagline,
    url: siteUrl,
    image: `${siteUrl}/og.png`,
    logo: `${siteUrl}/brand/logo-full.png`,
    telephone: business.phone,
    description:
      "Repair centre for iPhone, iPad, MacBook, iMac and Lenovo, Dell, HP, Acer and Asus laptops, with genuine parts, a 6-month warranty and free diagnosis.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, Powai Plaza, 184, Hiranandani Gardens",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400076",
      addressCountry: "IN",
    },
    areaServed: ["Powai", "Hiranandani Gardens", "Chandivali", "Kanjurmarg", "Mumbai"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "18:00" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Repair services",
      itemListElement: [...appleServices, ...laptopServices].map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.copy },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
