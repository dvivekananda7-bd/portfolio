import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("names the person and the discipline in the h1 for screen readers and search", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveAccessibleName(
      "Vivekananda Das — Video Production & Brand Content Strategy"
    );
  });

  it("renders both CTAs pointing at contact and work", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Book a call" })).toHaveAttribute(
      "href",
      "#contact"
    );
    expect(screen.getByRole("link", { name: "See the work" })).toHaveAttribute(
      "href",
      "#work"
    );
  });

  it("does not mention a law background", () => {
    render(<Hero />);
    expect(screen.queryByText(/LL\.B|LL\.M|law/i)).not.toBeInTheDocument();
  });
});
