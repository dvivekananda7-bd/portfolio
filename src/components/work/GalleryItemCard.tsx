"use client";

import { useState } from "react";
import type { GalleryItem } from "@/content/categories";
import { getThumbnail } from "@/content/categories";

const platformLabel = {
  youtube: "YouTube",
  facebook: "Facebook",
  instagram: "Instagram",
  "drive-image": "Photo",
  "drive-video": "Video",
};

export function GalleryItemCard({ item }: { item: GalleryItem }) {
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const thumbnail = thumbnailFailed ? null : getThumbnail(item);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-video overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent"
    >
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt={item.title}
          loading="lazy"
          onError={() => setThumbnailFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="lit flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
          <span className="label text-accent">
            {platformLabel[item.platform]}
          </span>
          <p className="text-xs text-text-secondary">{item.title}</p>
        </div>
      )}

      {/* Scrim — keeps the caption readable over any still */}
      <div className="absolute inset-0 flex items-end bg-[linear-gradient(0deg,rgba(0,0,0,0.85),transparent_55%)] p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-xs font-medium text-white">{item.title}</p>
      </div>
    </a>
  );
}
