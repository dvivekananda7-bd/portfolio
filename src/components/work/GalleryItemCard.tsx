"use client";

import { useState } from "react";
import { Play, ExternalLink, Image as ImageIcon, FileVideo } from "lucide-react";
import type { GalleryItem } from "@/content/categories";
import { getThumbnail } from "@/content/categories";

const platformIcon = {
  youtube: Play,
  facebook: ExternalLink,
  instagram: ExternalLink,
  "drive-image": ImageIcon,
  "drive-video": FileVideo,
};

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
  const Icon = platformIcon[item.platform];

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group relative block aspect-video overflow-hidden rounded-xl border border-border bg-card"
    >
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt={item.title}
          loading="lazy"
          onError={() => setThumbnailFailed(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center">
          <Icon className="text-accent" size={24} />
          <p className="text-xs uppercase tracking-wide text-accent">{platformLabel[item.platform]}</p>
          <p className="text-xs text-text-secondary">{item.title}</p>
        </div>
      )}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-xs font-medium text-text-primary">{item.title}</p>
      </div>
    </a>
  );
}
