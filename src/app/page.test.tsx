import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Home page", () => {
  it("renders every section in the confirmed order", () => {
    render(<Page />);
    const headings = screen
      .getAllByRole("heading", { level: 2 })
      .map((h) => h.textContent?.replace(/\s+/g, " ").trim());
    expect(headings).toEqual([
      "What we do",
      "A glimpse of what we do",
      "Our clients' portfolio",
      "Numbers behind the work",
      "What collaborators say",
      "Let's build something",
    ]);
  });

  it("no longer carries the personal bio, expertise or experience sections", () => {
    render(<Page />);
    expect(screen.queryByText(/I'm a visual storyteller/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Where the work happened/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /What I bring to a project/i })).not.toBeInTheDocument();
  });

  it("keeps the name in the h1 for search", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { name: /Vivekananda Das/ })
    ).toBeInTheDocument();
  });
});
