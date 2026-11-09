export type Platform =
  | "youtube"
  | "facebook"
  | "instagram"
  | "drive-image"
  | "drive-video";

export interface GalleryItem {
  title: string;
  platform: Platform;
  url: string;
  thumbnail?: string;
}

export function getYouTubeThumbnail(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube-nocookie\.com\/embed\/)([\w-]+)/
  );
  if (!match) return null;
  return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
}

export function driveThumbnail(fileId: string): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
}

export function driveViewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

/**
 * Facebook and Instagram do not expose a public thumbnail endpoint without an
 * app token, so those items fall back to a labelled card in GalleryItemCard.
 */
export function getThumbnail(item: GalleryItem): string | null {
  if (item.thumbnail) return item.thumbnail;
  if (item.platform === "youtube") return getYouTubeThumbnail(item.url);
  return null;
}
