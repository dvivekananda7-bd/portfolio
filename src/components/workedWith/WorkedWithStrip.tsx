import { workedWith } from "@/content/workedWith";

export function WorkedWithStrip() {
  return (
    <section
      aria-label="Clients and collaborators"
      className="overflow-hidden border-y border-border py-7"
    >
      <div className="marquee-track [--marquee-duration:44s] gap-12">
        {[0, 1].map((pass) =>
          workedWith.map((name) => (
            <span key={`${pass}-${name}`} className="flex items-center gap-12">
              <span className="display text-[clamp(1.1rem,2vw,1.6rem)] text-text-secondary">
                {name}
              </span>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
            </span>
          ))
        )}
      </div>
    </section>
  );
}
