import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://dvivekananda7-bd.github.io/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: BASE_URL, lastModified: new Date() }];
}
