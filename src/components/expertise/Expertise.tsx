import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertise, tools } from "@/content/expertise";

export function Expertise() {
  return (
    <section id="expertise" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Expertise" title="What I bring to a project" />
        <ul className="flex flex-wrap gap-3">
          {expertise.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border px-5 py-2 text-sm text-text-primary"
            >
              {skill}
            </li>
          ))}
        </ul>
        <p className="mt-10 mb-3 text-sm uppercase tracking-[0.2em] text-text-secondary">Tools</p>
        <ul className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <li key={tool} className="rounded-full bg-card px-5 py-2 text-sm text-text-secondary">
              {tool}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
