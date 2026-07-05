import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What collaborators say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-8">
              <p className="font-heading text-4xl text-accent">&ldquo;</p>
              <p className="mt-2 text-text-secondary">
                {t.quote.replace("PLACEHOLDER — replace with real quote. ", "")}
              </p>
              <p className="mt-6 font-medium text-text-primary">{t.name}</p>
              <p className="text-sm text-text-secondary">{t.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
