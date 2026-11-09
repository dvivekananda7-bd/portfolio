import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { ProjectSpotlight } from "@/components/spotlight/ProjectSpotlight";
import { ClientPortfolio } from "@/components/work/ClientPortfolio";
import { Achievements } from "@/components/achievements/Achievements";
import { WorkedWithStrip } from "@/components/workedWith/WorkedWithStrip";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Services />
        <ProjectSpotlight />
        <ClientPortfolio />
        <Achievements />
        <WorkedWithStrip />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
