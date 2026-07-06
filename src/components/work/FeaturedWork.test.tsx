import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FeaturedWork } from "./FeaturedWork";

describe("FeaturedWork galleries", () => {
  it("renders all 4 category headings with descriptions, no click-through required", () => {
    render(<FeaturedWork />);
    expect(screen.getByRole("heading", { name: "Futurenation" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Prologue" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "PRAN-RFL Commercial Campaigns" })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Books and More" })).toBeInTheDocument();
  });

  it("shows a coming-soon note for Futurenation instead of fabricated thumbnails", () => {
    render(<FeaturedWork />);
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it("includes Jolpai Ronger Adhar as an item inside Prologue, not a separate section", () => {
    render(<FeaturedWork />);
    expect(
      screen.getByRole("link", { name: /Jolpai Ronger Adhar/i })
    ).toHaveAttribute("href", "https://www.youtube.com/watch?v=fPnsjhxEvmw");
  });

  it("every gallery thumbnail links directly to the real external content and opens in a new tab", () => {
    render(<FeaturedWork />);
    const pranLink = screen.getByRole("link", { name: /PRAN Frooto TVC/i });
    expect(pranLink).toHaveAttribute("href", "https://www.youtube.com/watch?v=kKF1L6eI9Xo");
    expect(pranLink).toHaveAttribute("target", "_blank");
  });

  it("renders a YouTube thumbnail image for video items", () => {
    render(<FeaturedWork />);
    const pranLink = screen.getByRole("link", { name: /PRAN Frooto TVC/i });
    const img = pranLink.querySelector("img");
    expect(img).toHaveAttribute("src", "https://img.youtube.com/vi/kKF1L6eI9Xo/hqdefault.jpg");
  });
});
