import { describe, it, expect } from "vitest";
import { asset, basePath } from "./basePath";

describe("asset()", () => {
  it("prefixes public paths with the GitHub Pages base path", () => {
    expect(asset("/images/portrait.jpg")).toBe("/portfolio/images/portrait.jpg");
  });

  it("tolerates a missing leading slash", () => {
    expect(asset("images/portrait.jpg")).toBe("/portfolio/images/portrait.jpg");
  });

  it("matches the base path the Pages project is served from", () => {
    expect(basePath).toBe("/portfolio");
  });
});
