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

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Devices />
        <WhyUs />
        <Process />
        <Reviews />
        <BookingSection />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
