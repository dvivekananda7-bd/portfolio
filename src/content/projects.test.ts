import { describe, it, expect } from "vitest";
import { projects, getProjectBySlug, getAdjacentProject } from "./projects";

describe("projects content", () => {
  it("has exactly 7 flagship projects", () => {
    expect(projects.length).toBe(7);
  });

  it("includes the confirmed slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toEqual([
      "futurenation-mentorship-campaign",
      "futurenation-impact-stories",
      "futurenation-course-production",
      "prologue",
      "jolpai-ronger-adhar",
      "pran-rfl-campaigns",
      "books-and-more",
    ]);
  });

  it("looks projects up by slug", () => {
    const prologue = getProjectBySlug("prologue");
    expect(prologue?.title).toBe("Prologue");
    expect(prologue?.overview).toContain("Kafka");
  });

  it("wraps around to the first project after the last", () => {
    const { next } = getAdjacentProject("books-and-more");
    expect(next.slug).toBe("futurenation-mentorship-campaign");
  });

  it("marks the 3 Futurenation projects as pending real assets", () => {
    const pending = projects.filter((p) => p.assetsPending);
    expect(pending.map((p) => p.slug)).toEqual([
      "futurenation-mentorship-campaign",
      "futurenation-impact-stories",
      "futurenation-course-production",
    ]);
  });
});
