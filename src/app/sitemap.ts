import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const BASE_URL = "https://vivekanandadas.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date() },
    ...projects.map((p) => ({
      url: `${BASE_URL}/work/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
