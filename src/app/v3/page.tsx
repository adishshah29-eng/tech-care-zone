import { Nav3 } from "@/components/v3/Nav3";
import { Hero3 } from "@/components/v3/Hero3";
import { Services3 } from "@/components/v3/Services3";
import { Process3 } from "@/components/v3/Process3";
import { Devices3 } from "@/components/v3/Devices3";
import { WhyUs3 } from "@/components/v3/WhyUs3";
import { Reviews3 } from "@/components/v3/Reviews3";
import { Booking3 } from "@/components/v3/Booking3";
import { ClosingCta3 } from "@/components/v3/ClosingCta3";
import { Footer3 } from "@/components/v3/Footer3";
import { PageShell3 } from "@/components/v3/PageShell3";

export default function V3Page() {
  return (
    <PageShell3>
      <Nav3 />
      <main>
        <Hero3 />
        <Services3 />
        <Process3 />
        <Devices3 />
        <WhyUs3 />
        <Reviews3 />
        <Booking3 />
        <ClosingCta3 />
      </main>
      <Footer3 />
    </PageShell3>
  );
}
