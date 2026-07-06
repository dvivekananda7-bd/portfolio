import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/content/education";

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="About" title="I'm a visual storyteller" />
        <div className="grid gap-16 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-text-secondary">
            I'm a visual storyteller — I imagine, and then I love to turn it into moving pictures
            and designs. I've been doing this for more than five years, working on communication,
            filmmaking, content development, and branding for clients ranging from corporates to
            international organizations. Whatever the brief, the goal is the same: use that
            storytelling and creative sense to help my clients communicate better and reach more
            people.
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
