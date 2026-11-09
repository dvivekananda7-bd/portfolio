import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { spotlightFormats } from "@/content/spotlight";

export function ProjectSpotlight() {
  return (
    <section id="spotlight" className="glow-bottom relative py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Project spotlight"
          title="Contents we are best at"
          accentFrom={3}
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spotlightFormats.map((format, i) => (
            <li
              key={format}
              className="lit group flex items-center justify-between rounded-xl border border-border px-7 py-8 transition-colors hover:border-accent"
            >
              <h3 className="display text-xl text-white md:text-2xl">
                {format}
              </h3>
              <span className="display text-sm text-text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
