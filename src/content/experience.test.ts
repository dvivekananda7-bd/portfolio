import { describe, it, expect } from "vitest";
import { experience, experienceGroups } from "./experience";

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

  it("groups entries into Development, Legal, Corporate in that order", () => {
    expect(experienceGroups.map((g) => g.sector)).toEqual(["Development", "Legal", "Corporate"]);
    expect(experienceGroups[0].entries.map((e) => e.org)).toEqual(["UNDP Futurenation"]);
    expect(experienceGroups[1].entries.map((e) => e.org)).toEqual([
      "TNY Legal Bangladesh Ltd",
      "Amit & Associates",
      "BILIA",
      "NCSC (International Center for State Courts)",
    ]);
    expect(experienceGroups[2].entries.map((e) => e.org)).toEqual(["PRAN-RFL Group"]);
  });
});
