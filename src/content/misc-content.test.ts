import { describe, it, expect } from "vitest";
import { workedWith } from "./workedWith";
import { achievements } from "./achievements";
import { testimonials } from "./testimonials";

describe("worked-with, achievements, testimonials", () => {
  it("lists the 6 institutions/sectors", () => {
    expect(workedWith).toEqual([
      "UNDP",
      "BILIA",
      "TNY Legal",
      "Amit & Associates",
      "NCSC",
      "PRAN-RFL",
    ]);
  });

  it("includes both UNDP stats and filmmaker/social stats", () => {
    const labels = achievements.map((a) => a.label).join(" | ");
    expect(labels).toContain("International Mentors");
    expect(labels).toContain("Countries");
    expect(labels).toContain("Students Reached");
    expect(labels).toContain("Festival Selections");
    expect(labels).toContain("YouTube Subscribers");
  });

  it("has 3 testimonials attributed to the confirmed names, all flagged as placeholders", () => {
    expect(testimonials.length).toBe(3);
    const names = testimonials.map((t) => t.name);
    expect(names).toEqual(["Nishita Sanaul", "Athai Das", "Jyotish Talukder"]);
    expect(testimonials.every((t) => t.isPlaceholder)).toBe(true);
  });
});
