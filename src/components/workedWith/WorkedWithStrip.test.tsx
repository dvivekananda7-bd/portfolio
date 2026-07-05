import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WorkedWithStrip } from "./WorkedWithStrip";

describe("WorkedWithStrip", () => {
  it("lists all 6 institutions", () => {
    render(<WorkedWithStrip />);
    expect(screen.getByText("UNDP")).toBeInTheDocument();
    expect(screen.getByText("PRAN-RFL")).toBeInTheDocument();
  });
});
