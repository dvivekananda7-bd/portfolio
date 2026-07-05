import { Container } from "@/components/ui/Container";
import { workedWith } from "@/content/workedWith";

export function WorkedWithStrip() {
  return (
    <section className="border-y border-border bg-background py-12">
      <Container>
        <p className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-text-secondary">
          Where I&apos;ve Worked
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {workedWith.map((name) => (
            <li key={name} className="font-heading text-lg text-text-secondary">
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
