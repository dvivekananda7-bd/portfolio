import { Container } from "@/components/ui/Container";
import { achievements } from "@/content/achievements";
import { StatCounter } from "./StatCounter";

export function Achievements() {
  return (
    <section className="glow-bottom py-20 md:py-28">
      <Container>
        <h2 className="sr-only">Numbers behind the work</h2>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {achievements.map((a) => (
            <StatCounter key={a.label} value={a.value} label={a.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
