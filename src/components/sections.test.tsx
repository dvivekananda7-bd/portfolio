import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FeaturedWork } from "./work/FeaturedWork";
import { Expertise } from "./expertise/Expertise";
import { Services } from "./services/Services";
import { Achievements } from "./achievements/Achievements";
import { Testimonials } from "./testimonials/Testimonials";
import { Contact } from "./contact/Contact";
import { Footer } from "./layout/Footer";

describe("remaining home sections", () => {
  it("FeaturedWork links all 7 projects", () => {
    render(<FeaturedWork />);
    expect(screen.getAllByRole("link")).toHaveLength(7);
    expect(screen.getByRole("link", { name: /Prologue/ })).toHaveAttribute(
      "href",
      "/work/prologue"
    );
  });

  it("Expertise lists all 14 skills", () => {
    render(<Expertise />);
    expect(screen.getByText("Brand Collaboration")).toBeInTheDocument();
  });

  it("Services lists all 9 services", () => {
    render(<Services />);
    expect(screen.getByText("Digital Storytelling")).toBeInTheDocument();
  });

  it("Achievements renders every stat value and label", async () => {
    render(<Achievements />);
    expect(await screen.findByText("600+", {}, { timeout: 5000, interval: 50 })).toBeInTheDocument();
    expect(screen.getByText("Festival Selections")).toBeInTheDocument();
  });

  it("Testimonials renders all 3 attributed names", () => {
    render(<Testimonials />);
    expect(screen.getByText("Nishita Sanaul")).toBeInTheDocument();
    expect(screen.getByText("Jyotish Talukder")).toBeInTheDocument();
  });

  it("Contact links to the real Google Form", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /Send a Message/i })).toHaveAttribute(
      "href",
      "https://forms.gle/85t4kde6rDfahAPa9"
    );
  });

  it("Footer includes email and social links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /dvivekananda7@gmail.com/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Instagram/ })).toHaveAttribute(
      "href",
      "https://www.instagram.com/vivek_ananda_das/"
    );
  });
});
