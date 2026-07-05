import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/content/education";

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="About" title="Story-first, format-agnostic" />
        <div className="grid gap-16 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-text-secondary">
            For more than five years, Vivekananda has built communications, campaigns, and
            mentorship programs for international organizations — turning complex programs into
            stories that travel, from national summits to a global mentorship network spanning
            101 countries. Alongside that, an independent filmmaking practice runs in parallel:
            short films, commercial production, and a growing content channel, all driven by the
            same instinct for finding the story inside a frame. Books and music round out the
            rest.
          </p>
          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold text-text-primary">Education</h3>
            <ul className="space-y-4">
              {education.map((entry) => (
                <li key={entry.degree + entry.institution} className="border-b border-border pb-4">
                  <p className="text-text-primary font-medium">
                    {entry.degree} — {entry.institution}
                  </p>
                  {entry.dates && <p className="text-sm text-text-secondary">{entry.dates}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
