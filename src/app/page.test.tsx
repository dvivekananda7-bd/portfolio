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
      "Contents we are best at",
      "Our clients' portfolio",
      "Numbers behind the work",
      "Let's build something",
    ]);
  });

  it("does not publish the testimonials while the quotes are unconfirmed", () => {
    render(<Page />);
    expect(
      screen.queryByRole("heading", { name: /What collaborators say/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/Jyotish Talukder/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Nafiz Reza/)).not.toBeInTheDocument();
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
