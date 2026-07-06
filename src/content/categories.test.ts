import { describe, it, expect } from "vitest";
import { categories, getYouTubeThumbnail, getThumbnail, driveThumbnail, driveViewUrl } from "./categories";

describe("categories content", () => {
  it("has exactly the 4 confirmed categories in order", () => {
    expect(categories.map((c) => c.slug)).toEqual([
      "futurenation",
      "prologue",
      "pran-rfl",
      "books-and-more",
    ]);
  });

  it("Futurenation has real Google Drive photos and videos, no longer coming soon", () => {
    const futurenation = categories.find((c) => c.slug === "futurenation")!;
    expect(futurenation.comingSoon).toBeUndefined();
    expect(futurenation.items.length).toBeGreaterThan(20);
    expect(futurenation.items.every((i) => i.url.includes("drive.google.com"))).toBe(true);
    expect(futurenation.items.some((i) => i.platform === "drive-video")).toBe(true);
    expect(futurenation.items.some((i) => i.platform === "drive-image")).toBe(true);
    expect(futurenation.items.every((i) => getThumbnail(i))).toBe(true);
  });

  it("drive helpers build correct thumbnail and view URLs", () => {
    expect(driveThumbnail("abc123")).toBe("https://drive.google.com/thumbnail?id=abc123&sz=w800");
    expect(driveViewUrl("abc123")).toBe("https://drive.google.com/file/d/abc123/view");
  });

  it("Prologue category includes both Prologue and Jolpai Ronger Adhar as items, not a separate section", () => {
    const prologue = categories.find((c) => c.slug === "prologue")!;
    const titles = prologue.items.map((i) => i.title);
    expect(titles).toContain("Prologue");
    expect(titles.some((t) => t.includes("Jolpai Ronger Adhar"))).toBe(true);
  });

  it("PRAN-RFL category has multiple real campaign videos", () => {
    const pranRfl = categories.find((c) => c.slug === "pran-rfl")!;
    expect(pranRfl.items.length).toBeGreaterThanOrEqual(8);
    expect(pranRfl.items.every((i) => i.url.includes("youtube.com"))).toBe(true);
  });

  it("Books and More includes YouTube, Facebook, and Instagram items", () => {
    const booksAndMore = categories.find((c) => c.slug === "books-and-more")!;
    const platforms = booksAndMore.items.map((i) => i.platform);
    expect(platforms).toContain("youtube");
    expect(platforms).toContain("facebook");
    expect(platforms).toContain("instagram");
  });

  it("extracts a YouTube thumbnail URL from a watch URL", () => {
    expect(getYouTubeThumbnail("https://www.youtube.com/watch?v=Hm3Tg1Gi0JI")).toBe(
      "https://img.youtube.com/vi/Hm3Tg1Gi0JI/hqdefault.jpg"
    );
  });
});
