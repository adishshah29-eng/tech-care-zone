import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Devices } from "@/components/Devices";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { BookingSection } from "@/components/BookingSection";
import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";
import { TraceDivider } from "@/components/PcbArt1";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Nav />
      <main className="flex-1">
        <Hero />
        <TraceDivider />
        <Services />
        <Devices />
        <TraceDivider chip />
        <WhyUs />
        <Process />
        <Reviews />
        <TraceDivider />
        <BookingSection />
        <ClosingCta />
      </main>
      <TraceDivider chip />
      <Footer />
    </>
  );
}
