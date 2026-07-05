import { describe, it, expect } from "vitest";
import { site } from "./site";
import { expertise } from "./expertise";
import { services } from "./services";

describe("site content", () => {
  it("has real contact info, not placeholders", () => {
    expect(site.email).toBe("dvivekananda7@gmail.com");
    expect(site.links.facebook).toBe("https://www.facebook.com/vivek.anup.7");
    expect(site.links.linkedin).toBe("https://www.linkedin.com/in/vivekananda7");
    expect(site.links.instagram).toBe(
      "https://www.instagram.com/vivek_ananda_das/"
    );
    expect(site.links.contactForm).toBe("https://forms.gle/85t4kde6rDfahAPa9");
  });

  it("has the exact confirmed expertise list", () => {
    expect(expertise).toContain("Communications");
    expect(expertise).toContain("Brand Collaboration");
    expect(expertise.length).toBe(14);
  });

  it("has 9 services from the brief", () => {
    expect(services.length).toBe(9);
    expect(services.map((s) => s.title)).toContain("Digital Storytelling");
  });
});
