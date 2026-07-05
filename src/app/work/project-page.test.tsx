import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectPage } from "@/components/work/ProjectPage";
import { getProjectBySlug } from "@/content/projects";

describe("ProjectPage", () => {
  it("renders overview/challenge/process/outcome and next-project navigation", () => {
    const project = getProjectBySlug("prologue")!;
    render(<ProjectPage project={project} />);
    expect(screen.getByRole("heading", { name: "Prologue" })).toBeInTheDocument();
    expect(screen.getAllByText(/Kafka/).length).toBeGreaterThan(0);
    expect(
      screen.getByText("Serbia International Film Festival, JIFF, and IIUSFF", { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Next Project/i })).toHaveAttribute(
      "href",
      "/work/jolpai-ronger-adhar"
    );
  });

  it("shows a pending-assets note for Futurenation projects instead of fabricated media", () => {
    const project = getProjectBySlug("futurenation-mentorship-campaign")!;
    render(<ProjectPage project={project} />);
    expect(screen.getByText(/assets coming soon/i)).toBeInTheDocument();
  });
});
