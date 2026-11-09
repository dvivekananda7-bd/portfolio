import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <Container>
        <SectionHeading eyebrow="Services" title="What we do" accentFrom={2} />

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <li
              key={service}
              className="lit group flex items-baseline gap-4 rounded-xl border border-border px-6 py-6 transition-colors hover:border-accent"
            >
              <span className="display text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display text-lg leading-snug text-white md:text-xl">
                {service}
              </h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
