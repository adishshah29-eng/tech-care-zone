import { Nav2 } from "@/components/v2/Nav2";
import { Hero2 } from "@/components/v2/Hero2";
import { WhyUs2 } from "@/components/v2/WhyUs2";
import { Reviews2 } from "@/components/v2/Reviews2";
import { Services2 } from "@/components/v2/Services2";
import { Devices2 } from "@/components/v2/Devices2";
import { Process2 } from "@/components/v2/Process2";
import { Booking2 } from "@/components/v2/Booking2";
import { ClosingCta2 } from "@/components/v2/ClosingCta2";
import { Footer2 } from "@/components/v2/Footer2";

export default function V2Page() {
  return (
    <>
      <Nav2 />
      <main>
        <Hero2 />
        <WhyUs2 />
        <Reviews2 />
        <Services2 />
        <Devices2 />
        <Process2 />
        <Booking2 />
        <ClosingCta2 />
      </main>
      <Footer2 />
    </>
  );
}
