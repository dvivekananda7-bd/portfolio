import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/content/achievements";
import { StatCounter } from "./StatCounter";

export function Achievements() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Achievements" title="Numbers behind the work" />
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {achievements.map((a) => (
            <StatCounter key={a.label} value={a.value} label={a.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
