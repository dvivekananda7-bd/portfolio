import { describe, it, expect } from "vitest";
import { workedWith } from "./workedWith";
import { achievements } from "./achievements";
import { testimonials } from "./testimonials";
import { clientTabs } from "./clients";

describe("worked-with, achievements, testimonials", () => {
  it("lists the brands the portfolio actually shows work for", () => {
    expect(workedWith).toContain("BRAC");
    expect(workedWith).toContain("UNDP");
    expect(workedWith).toContain("BBC");
    expect(workedWith).toContain("PRAN-RFL");
  });

  it("names no brand that has no work behind it", () => {
    const tabbed = new Set(clientTabs.map((t) => t.label));
    const claimed = workedWith.filter((w) =>
      ["BRAC", "UNDP", "BBC", "PRAN-RFL", "University of Scholars"].includes(w)
    );
    for (const brand of claimed) {
      expect(tabbed.has(brand)).toBe(true);
    }
  });

  it("carries the briefed figures, including brands solved", () => {
    const byLabel = Object.fromEntries(
      achievements.map((a) => [a.label, a.value])
    );
    expect(byLabel["Brands Solved"]).toBe("15+");
    expect(byLabel["Stories Produced"]).toBe("100+");
    expect(byLabel["Workshops"]).toBe("50+");
    expect(byLabel["Festival Selections"]).toBe("4");
    expect(byLabel["Social Media Followers"]).toBe("200K+");
    expect(byLabel["Views on a Single Video"]).toBe("3M+");
    expect(byLabel["Creator Network"]).toBe("20");
    expect(byLabel["Crews in One Team"]).toBe("8");
  });

  it("fills the four-column grid exactly", () => {
    expect(achievements.length % 4).toBe(0);
  });

  it("gives every stat a value the counter can animate", () => {
    for (const a of achievements) {
      expect(a.value).toMatch(/^\d/);
    }
  });

  it("drops the UNDP-programme stats that no longer have a section to explain them", () => {
    const labels = achievements.map((a) => a.label).join(" | ");
    expect(labels).not.toContain("International Mentors");
    expect(labels).not.toContain("Students Reached");
    expect(labels).not.toContain("YouTube Subscribers");
  });

  it("has 3 testimonials attributed to the confirmed names", () => {
    expect(testimonials.length).toBe(3);
    expect(testimonials.map((t) => t.name)).toEqual([
      "Jyotish Talukder",
      "Athai Das",
      "Nafiz Reza",
    ]);
  });

  it("ships no placeholder marker to the page", () => {
    for (const t of testimonials) {
      expect(t.quote).not.toMatch(/placeholder/i);
      expect(t.quote).not.toMatch(/replace with/i);
    }
  });

  it("still records that the quotes are unconfirmed by the people named", () => {
    expect(testimonials.every((t) => t.unverified)).toBe(true);
  });
});
