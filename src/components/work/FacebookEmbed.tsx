"use client";

import { useState } from "react";

/**
 * Facebook publishes no thumbnail for a reel without an app token — its oEmbed
 * response carries only an embed stub, and fetching the reel page directly
 * returns 400. The video plugin is the one public surface that renders the real
 * poster frame.
 *
 * It is loaded on click, not on mount. Mounting the plugin eagerly pulls in
 * Facebook's SDK and blocked the main thread hard enough to hang the page in
 * testing. Click-to-load also means no Facebook cookies are set for a visitor
 * who never opens a reel.
 */
export function facebookPluginSrc(url: string, width = 400): string {
  const params = new URLSearchParams({
    href: url,
    show_text: "false",
    width: String(width),
  });
  return `https://www.facebook.com/plugins/video.php?${params.toString()}`;
}

export function FacebookEmbed({ url, title }: { url: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent">
      <div className="relative aspect-9/16 w-full">
        {loaded ? (
          <iframe
            src={facebookPluginSrc(url)}
            title={title}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Load reel: ${title}`}
            className="lit group absolute inset-0 flex flex-col items-center justify-center gap-4 p-5 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-black transition-transform duration-200 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10.5-6.5a1 1 0 0 0 0-1.7L9.52 4.65A1 1 0 0 0 8 5.5Z" />
              </svg>
            </span>
            <span className="label text-accent">Reel</span>
            <span className="text-xs text-text-secondary">{title}</span>
          </button>
        )}
      </div>

      <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="truncate text-xs font-medium text-white">{title}</span>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="label shrink-0 text-accent transition-colors hover:text-accent-hot"
        >
          Open
        </a>
      </figcaption>
    </figure>
  );
}
