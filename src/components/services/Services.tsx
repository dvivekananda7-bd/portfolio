import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Services" title="How I can help" />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-text-primary">{service.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
