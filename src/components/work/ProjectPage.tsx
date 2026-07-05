import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/content/projects";
import { getAdjacentProject } from "@/content/projects";

export function ProjectPage({ project }: { project: Project }) {
  const { next } = getAdjacentProject(project.slug);

  return (
    <article className="bg-background py-24 md:py-32">
      <Container>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-3 font-heading text-5xl font-bold text-text-primary md:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-text-secondary">{project.summary}</p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Overview</h2>
            <p className="mt-3 text-text-secondary">{project.overview}</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Challenge</h2>
            <p className="mt-3 text-text-secondary">{project.challenge}</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Process</h2>
            <p className="mt-3 text-text-secondary">{project.process}</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Outcome</h2>
            <p className="mt-3 text-text-secondary">{project.outcome}</p>
          </section>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-text-secondary">Client</p>
            <p className="mt-1 text-text-primary">{project.client}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-text-secondary">Tools Used</p>
            <p className="mt-1 text-text-primary">{project.tools.join(", ")}</p>
          </div>
        </div>

        {project.videos && project.videos.length > 0 && (
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold text-text-primary">Videos</h2>
            <ul className="mt-3 space-y-2">
              {project.videos.map((v) => (
                <li key={v.url}>
                  <a href={v.url} className="text-accent underline" target="_blank" rel="noreferrer">
                    {v.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.assetsPending && (
          <p className="mt-12 rounded-xl border border-dashed border-border p-6 text-sm text-text-secondary">
            Gallery and video assets coming soon — pending links from the project owner.
          </p>
        )}

        <div className="mt-20 border-t border-border pt-10">
          <p className="text-sm uppercase tracking-[0.15em] text-text-secondary">Next Project</p>
          <Button href={`/work/${next.slug}`} variant="outline" className="mt-4">
            {next.title} — Next Project
          </Button>
        </div>
      </Container>
    </article>
  );
}
