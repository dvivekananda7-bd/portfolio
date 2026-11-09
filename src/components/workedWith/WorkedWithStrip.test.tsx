import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WorkedWithStrip } from "./WorkedWithStrip";
import { workedWith } from "@/content/workedWith";

describe("WorkedWithStrip", () => {
  it("lists all 6 institutions", () => {
    render(<WorkedWithStrip />);
    for (const name of workedWith) {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0);
    }
  });

  it("duplicates the track so the marquee can loop seamlessly", () => {
    render(<WorkedWithStrip />);
    expect(screen.getAllByText("UNDP")).toHaveLength(2);
  });
});
