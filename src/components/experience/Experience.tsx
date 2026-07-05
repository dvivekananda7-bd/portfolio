import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where the work happened" />
        <div>
          {experience.map((entry) => (
            <ExperienceCard key={entry.org} entry={entry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
