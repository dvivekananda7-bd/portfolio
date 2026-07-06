import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceGroups } from "@/content/experience";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where the work happened" />
        <div className="space-y-16">
          {experienceGroups.map((group) => (
            <div key={group.sector}>
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent">
                {group.sector}
              </p>
              <div>
                {group.entries.map((entry) => (
                  <ExperienceCard key={entry.org} entry={entry} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
