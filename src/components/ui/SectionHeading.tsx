export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accentFrom,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /**
   * Word index at which the heading switches to electric orange.
   * Two-tone headings give a plain sentence a focal point without
   * needing a larger size.
   */
  accentFrom?: number;
}) {
  const words = title.split(" ");
  const split =
    typeof accentFrom === "number" ? Math.max(0, accentFrom) : words.length;

  return (
    <div className="mb-14 md:mb-20">
      {eyebrow && (
        <span className="label mb-5 inline-block rounded-full border border-border px-4 py-1.5 text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="display max-w-[18ch] text-[clamp(2rem,4.4vw,3.5rem)]">
        <span className="text-white">{words.slice(0, split).join(" ")}</span>
        {split < words.length && (
          <>
            {" "}
            <span className="text-accent">{words.slice(split).join(" ")}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
