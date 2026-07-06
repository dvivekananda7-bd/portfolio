import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders all 6 roles with UNDP first and PRAN-RFL last", () => {
    render(<Experience />);
    const orgs = screen.getAllByRole("heading", { level: 3 }).map((el) => el.textContent);
    expect(orgs[0]).toContain("UNDP Futurenation");
    expect(orgs[orgs.length - 1]).toContain("PRAN-RFL Group");
  });

  it("groups roles under Development, Legal, and Corporate sector labels", () => {
    render(<Experience />);
    expect(screen.getByText("Development")).toBeInTheDocument();
    expect(screen.getByText("Legal")).toBeInTheDocument();
    expect(screen.getByText("Corporate")).toBeInTheDocument();
  });
});
