import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WorkedWithStrip } from "./WorkedWithStrip";
import { clients, workedWith } from "@/content/workedWith";

describe("WorkedWithStrip", () => {
  it("shows every client, as a logo or as its name", () => {
    render(<WorkedWithStrip />);
    for (const client of clients) {
      if (client.logo) {
        expect(screen.getAllByAltText(client.name).length).toBeGreaterThan(0);
      } else {
        expect(screen.getAllByText(client.name).length).toBeGreaterThan(0);
      }
    }
  });

  it("points logos at the basePath-prefixed asset", () => {
    render(<WorkedWithStrip />);
    const brac = screen.getAllByAltText("BRAC")[0];
    expect(brac.getAttribute("src")).toBe("/portfolio/images/logos/brac.svg");
  });

  it("gives a tall logo more height so it stays legible", () => {
    render(<WorkedWithStrip />);
    const undp = screen.getAllByAltText("UNDP")[0];
    const bbc = screen.getAllByAltText("BBC")[0];
    expect(undp.className).toContain("h-11");
    expect(bbc.className).toContain("h-7");
  });

  it("uses a transparent PNG for PRAN-RFL, not the white-backed JPEG", () => {
    render(<WorkedWithStrip />);
    const pran = screen.getAllByAltText("PRAN-RFL")[0];
    expect(pran.getAttribute("src")).toMatch(/pran-rfl\.png$/);
    expect(pran.getAttribute("src")).not.toMatch(/\.jpg$/);
  });

  it("renders logos white so BBC's black mark stays visible on the dark strip", () => {
    render(<WorkedWithStrip />);
    const bbc = screen.getAllByAltText("BBC")[0];
    expect(bbc.className).toContain("brightness-0");
    expect(bbc.className).toContain("invert");
  });

  it("falls back to type for clients with no logo file", () => {
    render(<WorkedWithStrip />);
    expect(screen.getAllByText("BILIA").length).toBeGreaterThan(0);
    expect(screen.queryByAltText("BILIA")).not.toBeInTheDocument();
  });

  it("duplicates the track so the marquee can loop seamlessly", () => {
    render(<WorkedWithStrip />);
    expect(screen.getAllByAltText("BRAC")).toHaveLength(2);
  });

  it("keeps the name list in step with the client list", () => {
    expect(workedWith).toEqual(clients.map((c) => c.name));
  });
});
