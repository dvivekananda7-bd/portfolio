import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";
import robots from "./robots";

describe("SEO files", () => {
  it("sitemap includes the home page", () => {
    const entries = sitemap();
    expect(entries.length).toBeGreaterThanOrEqual(1);
    expect(entries[0].url).toBeTruthy();
  });

  it("robots allows all crawling and references the sitemap", () => {
    const config = robots();
    expect(config.rules).toMatchObject({ userAgent: "*", allow: "/" });
    expect(config.sitemap).toContain("/sitemap.xml");
  });
});
