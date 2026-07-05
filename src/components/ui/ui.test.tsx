import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

describe("UI primitives", () => {
  it("renders a section heading with eyebrow, title, and subtitle", () => {
    render(
      <SectionHeading eyebrow="Work" title="Featured Work" subtitle="Selected projects" />
    );
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Featured Work" })).toBeInTheDocument();
    expect(screen.getByText("Selected projects")).toBeInTheDocument();
  });

  it("renders a button as a link when href is provided", () => {
    render(<Button href="/work/prologue">View Project</Button>);
    const link = screen.getByRole("link", { name: "View Project" });
    expect(link).toHaveAttribute("href", "/work/prologue");
  });
});
