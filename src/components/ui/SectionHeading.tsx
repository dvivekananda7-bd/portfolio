export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent font-body">{eyebrow}</p>
      )}
      <h2 className="font-heading text-4xl md:text-6xl font-bold text-text-primary">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-text-secondary text-lg">{subtitle}</p>}
    </div>
  );
}
