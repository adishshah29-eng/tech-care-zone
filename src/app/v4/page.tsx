import { PcbBackground4 } from "@/components/v4/PcbBackground4";
import { Nav4 } from "@/components/v4/Nav4";
import { Hero4 } from "@/components/v4/Hero4";
import { Process4 } from "@/components/v4/Process4";
import { Services4 } from "@/components/v4/Services4";
import { WhyUs4 } from "@/components/v4/WhyUs4";
import { Devices4 } from "@/components/v4/Devices4";
import { Reviews4 } from "@/components/v4/Reviews4";
import { Booking4 } from "@/components/v4/Booking4";
import { Footer4 } from "@/components/v4/Footer4";

export default function V4Page() {
  return (
    <>
      <PcbBackground4 />
      <div className="v4-content">
        <Nav4 />
        <main>
          <Hero4 />
          <Process4 />
          <Services4 />
          <WhyUs4 />
          <Devices4 />
          <Reviews4 />
          <Booking4 />
        </main>
        <Footer4 />
      </div>
    </>
  );
}
