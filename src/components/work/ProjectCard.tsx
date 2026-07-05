import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-8 transition-transform duration-300 hover:-translate-y-1"
    >
      <p className="text-sm uppercase tracking-[0.15em] text-accent">
        {project.category} · {project.year}
      </p>
      <h3 className="mt-3 font-heading text-2xl font-semibold text-text-primary">{project.title}</h3>
      <p className="mt-3 text-sm text-text-secondary">{project.summary}</p>
    </Link>
  );
}
