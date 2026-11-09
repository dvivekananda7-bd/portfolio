import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Services } from "./services/Services";
import { ProjectSpotlight } from "./spotlight/ProjectSpotlight";
import { Achievements } from "./achievements/Achievements";
import { Testimonials } from "./testimonials/Testimonials";
import { Contact } from "./contact/Contact";
import { Footer } from "./layout/Footer";
import { services } from "@/content/services";

describe("home sections", () => {
  it("Services lists every merged capability, including influencer portfolio management", () => {
    render(<Services />);
    for (const s of services) {
      expect(screen.getByRole("heading", { name: s })).toBeInTheDocument();
    }
    expect(
      screen.getByRole("heading", { name: "Influencer portfolio management" })
    ).toBeInTheDocument();
  });

  it("Project Spotlight lists the formats as headers only", () => {
    render(<ProjectSpotlight />);
    expect(screen.getByRole("heading", { name: "Documentary" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "TVC / OVC" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Cinematic Content" })
    ).toBeInTheDocument();
  });

  it("Achievements renders the briefed figures", async () => {
    render(<Achievements />);
    expect(
      await screen.findByText("15+", {}, { timeout: 5000, interval: 20 })
    ).toBeInTheDocument();
    expect(screen.getByText("Brands Solved")).toBeInTheDocument();
    expect(screen.getByText("Festival Selections")).toBeInTheDocument();
  });

  it("Testimonials renders all 3 attributed names", () => {
    render(<Testimonials />);
    expect(screen.getByText("Jyotish Talukder")).toBeInTheDocument();
    expect(screen.getByText("Nafiz Reza")).toBeInTheDocument();
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
    expect(
      screen.getByRole("link", { name: /dvivekananda7@gmail.com/ })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Instagram/ })).toHaveAttribute(
      "href",
      "https://www.instagram.com/vivek_ananda_das/"
    );
  });
});
