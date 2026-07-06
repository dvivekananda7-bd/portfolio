import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Home page", () => {
  it("renders every section in the confirmed order", () => {
    render(<Page />);
    const headings = screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual([
      "I'm a visual storyteller",
      "Campaigns and films, side by side",
      "Where the work happened",
      "What I bring to a project",
      "How I can help",
      "Numbers behind the work",
      "What collaborators say",
      "Let's build something",
    ]);
  });
});
