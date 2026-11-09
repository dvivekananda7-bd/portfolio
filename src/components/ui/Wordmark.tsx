import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * The mark is the name, set precisely — no icon.
 *
 * A logo glyph for a one-person studio is almost always a cliché (a play
 * triangle, an aperture, a lens). A tightly tracked wordmark carries the
 * same recognition without borrowing a symbol everyone else is using.
 */
export function Wordmark({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  return (
    <span
      className={cn(
        "display inline-flex items-baseline whitespace-nowrap",
        size === "sm" ? "text-[1.05rem]" : "text-2xl",
        className
      )}
      aria-label={site.name}
    >
      <span className="text-white">Vivek</span>
      <span className="text-accent">Ananda</span>
    </span>
  );
}
