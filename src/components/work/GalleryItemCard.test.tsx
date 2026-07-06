import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { GalleryItemCard } from "./GalleryItemCard";
import type { GalleryItem } from "@/content/categories";

describe("GalleryItemCard", () => {
  it("renders the thumbnail image when a thumbnail URL is available", () => {
    const item: GalleryItem = {
      title: "Sample Video",
      platform: "drive-video",
      url: "https://drive.google.com/file/d/abc123/view",
      thumbnail: "https://drive.google.com/thumbnail?id=abc123&sz=w800",
    };
    render(<GalleryItemCard item={item} />);
    expect(screen.getByRole("img", { name: "Sample Video" })).toBeInTheDocument();
  });

  it("falls back to a platform icon card if the thumbnail image fails to load", () => {
    const item: GalleryItem = {
      title: "Broken Thumbnail Video",
      platform: "drive-video",
      url: "https://drive.google.com/file/d/xyz789/view",
      thumbnail: "https://drive.google.com/thumbnail?id=xyz789&sz=w800",
    };
    render(<GalleryItemCard item={item} />);
    const img = screen.getByRole("img", { name: "Broken Thumbnail Video" });
    fireEvent.error(img);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("Video")).toBeInTheDocument();
  });
});
