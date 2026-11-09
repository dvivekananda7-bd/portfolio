import { describe, it, expect } from "vitest";
import { site } from "./site";
import { services } from "./services";
import { spotlightFormats } from "./spotlight";

describe("site content", () => {
  it("has real contact info, not placeholders", () => {
    expect(site.email).toBe("dvivekananda7@gmail.com");
    expect(site.links.facebook).toBe("https://www.facebook.com/vivek.anup.7");
    expect(site.links.linkedin).toBe("https://www.linkedin.com/in/vivekananda7");
    expect(site.links.instagram).toBe(
      "https://www.instagram.com/vivek_ananda_das/"
    );
    expect(site.links.youtube).toBe("https://www.youtube.com/@vivekanup7");
    expect(site.links.contactForm).toBe("https://forms.gle/85t4kde6rDfahAPa9");
  });

  it("merges services and capabilities into one list, titles only", () => {
    expect(services.every((s) => typeof s === "string")).toBe(true);
    expect(services).toContain("Influencer portfolio management");
    expect(services).toContain("Brand positioning study");
    expect(services).toContain("Insight generation and analytics");
  });

  it("lists the six spotlight formats", () => {
    expect(spotlightFormats).toEqual([
      "Infographic",
      "Talking Head",
      "Documentary",
      "TVC / OVC",
      "Event Cover",
      "Cinematic Content",
    ]);
  });

  it("keeps Editing in services, not in the spotlight formats", () => {
    expect(spotlightFormats).not.toContain("Editing");
    expect(services[6]).toBe("Editing");
  });

  it("lists shooting and editing as separate services", () => {
    expect(services).toContain("Cinematic shooting");
    expect(services).toContain("Editing");
    expect(services.some((s) => /shooting and editing/i.test(s))).toBe(false);
  });

  it("no longer offers formats the studio dropped", () => {
    expect(spotlightFormats).not.toContain("Real Estate");
    expect(spotlightFormats).not.toContain("Games");
    expect(spotlightFormats).not.toContain("VSL");
  });
});
