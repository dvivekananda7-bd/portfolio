/**
 * The GitHub Pages project path this site is served under.
 *
 * `next.config.ts` reads this for `basePath` / `assetPrefix`, so the value is
 * defined once. Next prefixes the chunks it emits itself, but it does NOT
 * prefix `src` values that point into `public/` — including the ones passed to
 * `next/image` when `images.unoptimized` is set. Those must go through
 * `asset()` or they 404 in production.
 */
export const basePath = "/portfolio";

export function asset(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
