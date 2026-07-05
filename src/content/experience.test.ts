import { describe, it, expect } from "vitest";
import { experience } from "./experience";

describe("experience content", () => {
  it("has 6 entries in reverse-chronological order, UNDP first and PRAN-RFL last", () => {
    expect(experience.length).toBe(6);
    expect(experience[0].org).toBe("UNDP Futurenation");
    expect(experience[5].org).toBe("PRAN-RFL Group");
  });

  it("keeps the real achievement numbers for UNDP", () => {
    const undp = experience[0];
    expect(undp.achievement.join(" ")).toContain("600+");
    expect(undp.achievement.join(" ")).toContain("101 countries");
  });
});
