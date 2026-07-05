import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the confirmed headline and both CTAs", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { name: /Vivekananda Das/ })).toBeInTheDocument();
    expect(screen.getByText(/Communications Strategist & Filmmaker/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Portfolio" })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: "Let's Talk" })).toHaveAttribute("href", "#contact");
  });

  it("does not mention a law background", () => {
    render(<Hero />);
    expect(screen.queryByText(/LL\.B|LL\.M|law/i)).not.toBeInTheDocument();
  });
});
