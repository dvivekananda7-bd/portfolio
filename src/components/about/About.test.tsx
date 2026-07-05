import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("renders the communications-first bio without an 'unconventional pivot' law narrative", () => {
    render(<About />);
    expect(screen.getByText(/communications|storytelling|campaigns/i)).toBeInTheDocument();
    expect(screen.queryByText(/unconventional/i)).not.toBeInTheDocument();
  });

  it("lists education facts in a separate strip", () => {
    render(<About />);
    expect(screen.getByText(/LL\.B\./)).toBeInTheDocument();
    expect(screen.getAllByText(/University of Dhaka/).length).toBeGreaterThan(0);
  });
});
