import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client testimonials"
          title="What collaborators say"
          accentFrom={1}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="lit flex flex-col rounded-xl border border-border p-7"
            >
              <blockquote className="mb-7 flex-1 text-white">
                {t.quote}
              </blockquote>
              <figcaption className="border-t border-border-soft pt-5">
                <b className="block font-semibold text-white">{t.name}</b>
                <span className="text-sm text-text-secondary">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
