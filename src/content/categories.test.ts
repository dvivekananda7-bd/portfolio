import { describe, it, expect } from "vitest";
import {
  getYouTubeThumbnail,
  getThumbnail,
  driveThumbnail,
  driveViewUrl,
} from "./categories";

describe("media helpers", () => {
  it("extracts a YouTube thumbnail URL from a watch URL", () => {
    expect(getYouTubeThumbnail("https://www.youtube.com/watch?v=Hm3Tg1Gi0JI")).toBe(
      "https://img.youtube.com/vi/Hm3Tg1Gi0JI/hqdefault.jpg"
    );
  });

  it("returns null for a non-YouTube URL", () => {
    expect(getYouTubeThumbnail("https://www.facebook.com/reel/123")).toBeNull();
  });

  it("builds correct Drive thumbnail and view URLs", () => {
    expect(driveThumbnail("abc123")).toBe(
      "https://drive.google.com/thumbnail?id=abc123&sz=w800"
    );
    expect(driveViewUrl("abc123")).toBe(
      "https://drive.google.com/file/d/abc123/view"
    );
  });

  it("has no thumbnail for Facebook or Instagram, which expose none publicly", () => {
    expect(
      getThumbnail({
        title: "x",
        platform: "facebook",
        url: "https://www.facebook.com/reel/123",
      })
    ).toBeNull();
    expect(
      getThumbnail({
        title: "x",
        platform: "instagram",
        url: "https://www.instagram.com/reel/abc/",
      })
    ).toBeNull();
  });

  it("prefers an explicit thumbnail when one is supplied", () => {
    expect(
      getThumbnail({
        title: "x",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=Hm3Tg1Gi0JI",
        thumbnail: "https://example.com/custom.jpg",
      })
    ).toBe("https://example.com/custom.jpg");
  });
});
