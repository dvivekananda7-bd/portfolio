import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ClientPortfolio } from "./ClientPortfolio";
import { clientTabs } from "@/content/clients";

describe("ClientPortfolio tabs", () => {
  it("renders one tab per client group", () => {
    render(<ClientPortfolio />);
    expect(screen.getAllByRole("tab")).toHaveLength(clientTabs.length);
    expect(screen.getByRole("tab", { name: "BRAC" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "UNDP" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Books and More" })).toBeInTheDocument();
  });

  it("shows the first tab's items by default and marks it selected", () => {
    render(<ClientPortfolio />);
    expect(screen.getByRole("tab", { name: "BRAC" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(
      screen.getByRole("link", { name: /প্রান্তিক স্কুল/ })
    ).toHaveAttribute("href", "https://www.youtube.com/watch?v=p0ODvAfUiN4");
  });

  it("does not mount any Facebook iframe until the viewer asks for one", () => {
    render(<ClientPortfolio />);
    expect(document.querySelector("iframe")).toBeNull();
    expect(
      screen.getByRole("button", { name: /Load reel: BRAC — Reel 01/ })
    ).toBeInTheDocument();
  });

  it("loads the Facebook plugin only after the reel is clicked", () => {
    render(<ClientPortfolio />);
    fireEvent.click(
      screen.getByRole("button", { name: /Load reel: BRAC — Reel 01/ })
    );

    const frame = screen.getByTitle("BRAC — Reel 01") as HTMLIFrameElement;
    expect(frame.tagName).toBe("IFRAME");
    expect(frame.getAttribute("src")).toContain(
      "facebook.com/plugins/video.php"
    );
    expect(frame.getAttribute("src")).toContain(
      encodeURIComponent("https://www.facebook.com/reel/1976386446412281")
    );
  });

  it("swaps the panel when another tab is chosen", () => {
    render(<ClientPortfolio />);
    fireEvent.click(screen.getByRole("tab", { name: "Indie Films" }));

    expect(screen.getByRole("tab", { name: "Indie Films" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(screen.getByRole("link", { name: /Prologue/ })).toHaveAttribute(
      "href",
      "https://www.youtube.com/watch?v=Hm3Tg1Gi0JI"
    );
    expect(
      screen.queryByRole("button", { name: /Load reel: BRAC — Reel 01/ })
    ).not.toBeInTheDocument();
  });

  it("gives every YouTube item a real thumbnail", () => {
    render(<ClientPortfolio />);
    fireEvent.click(screen.getByRole("tab", { name: "PRAN-RFL" }));
    for (const img of screen.getAllByRole("img")) {
      expect(img.getAttribute("src")).toContain("img.youtube.com");
    }
  });

  it("wires each tab to its own panel for assistive tech", () => {
    render(<ClientPortfolio />);
    const tab = screen.getByRole("tab", { name: "BRAC" });
    const panel = screen.getByRole("tabpanel");
    expect(tab.getAttribute("aria-controls")).toBe(panel.getAttribute("id"));
    expect(panel.getAttribute("aria-labelledby")).toBe(tab.getAttribute("id"));
  });

  it("every item opens in a new tab", () => {
    render(<ClientPortfolio />);
    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAttribute("target", "_blank");
    }
  });
});
