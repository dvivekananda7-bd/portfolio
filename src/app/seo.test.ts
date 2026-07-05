import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";
import robots from "./robots";

describe("SEO files", () => {
  it("sitemap includes home and all 7 project pages", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);
    expect(urls.filter((u) => u.includes("/work/")).length).toBe(7);
  });

  it("robots allows all crawling and references the sitemap", () => {
    const config = robots();
    expect(config.rules).toMatchObject({ userAgent: "*", allow: "/" });
    expect(config.sitemap).toContain("/sitemap.xml");
  });
});
