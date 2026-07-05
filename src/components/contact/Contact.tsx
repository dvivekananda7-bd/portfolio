import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle={`Based in ${site.location}. Open to campaigns, productions, and collaborations.`}
        />
        <Button href={site.links.contactForm}>Send a Message</Button>
      </Container>
    </section>
  );
}
