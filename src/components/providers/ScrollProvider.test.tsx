import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScrollProvider } from "./ScrollProvider";

describe("ScrollProvider", () => {
  it("renders its children without crashing", () => {
    render(
      <ScrollProvider>
        <div>content</div>
      </ScrollProvider>
    );
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
