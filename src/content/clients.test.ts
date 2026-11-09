import { describe, it, expect } from "vitest";
import { clientTabs } from "./clients";

describe("client portfolio tabs", () => {
  it("carries every client group that was briefed", () => {
    expect(clientTabs.map((t) => t.label)).toEqual([
      "BRAC",
      "UNDP",
      "BBC",
      "Banks",
      "University of Scholars",
      "PRAN-RFL",
      "Indie Films",
      "Books and More",
    ]);
  });

  it("gives every tab a unique slug and at least one item", () => {
    const slugs = clientTabs.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const tab of clientTabs) {
      expect(tab.items.length).toBeGreaterThan(0);
    }
  });

  it("has no duplicate URLs within a tab", () => {
    for (const tab of clientTabs) {
      const urls = tab.items.map((i) => i.url);
      expect(new Set(urls).size).toBe(urls.length);
    }
  });

  it("uses only https links", () => {
    for (const tab of clientTabs) {
      for (const item of tab.items) {
        expect(item.url.startsWith("https://")).toBe(true);
      }
    }
  });

  it("keeps the corrected PRAN-RFL pairings", () => {
    const pran = clientTabs.find((t) => t.slug === "pran-rfl")!;
    const byTitle = (t: string) => pran.items.find((i) => i.title.includes(t))!;
    expect(byTitle("Father's Day").url).toContain("IYD-QpOI6rE");
    expect(byTitle("Lemon White").url).toContain("56BajV-05SI");
    expect(byTitle("Sticky Adhesive").url).toContain("jkYD7eV1VDQ");
    expect(byTitle("Chinigura").url).toContain("w7PISWAwpMo");
  });
});
