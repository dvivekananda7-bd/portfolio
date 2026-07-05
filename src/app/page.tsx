import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { WorkedWithStrip } from "@/components/workedWith/WorkedWithStrip";
import { FeaturedWork } from "@/components/work/FeaturedWork";
import { Expertise } from "@/components/expertise/Expertise";
import { Services } from "@/components/services/Services";
import { Achievements } from "@/components/achievements/Achievements";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <WorkedWithStrip />
      <FeaturedWork />
      <Expertise />
      <Services />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
