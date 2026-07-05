import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedWork() {
  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Featured Work" title="Campaigns and films, side by side" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
