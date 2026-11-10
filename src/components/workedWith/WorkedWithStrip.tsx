/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { clients } from "@/content/workedWith";
import { asset } from "@/lib/basePath";

export function WorkedWithStrip() {
  return (
    <section
      aria-label="Clients and collaborators"
      className="overflow-hidden border-y border-border py-8"
    >
      <div className="marquee-track [--marquee-duration:46s] gap-14">
        {[0, 1].map((pass) =>
          clients.map((client) => (
            <span
              key={`${pass}-${client.name}`}
              className="flex items-center gap-14"
            >
              {client.logo ? (
                <img
                  src={asset(client.logo)}
                  alt={client.name}
                  loading="lazy"
                  /* brightness(0) flattens any logo to black, invert(1) then
                     makes it white — one treatment that works for BBC's black
                     mark and BRAC's magenta alike. */
                  className={cn(
                    "w-auto opacity-70 brightness-0 invert transition-opacity duration-300 hover:opacity-100",
                    client.tall ? "h-11 md:h-14" : "h-7 md:h-9"
                  )}
                />
              ) : (
                <span className="display text-[clamp(1.1rem,2vw,1.6rem)] text-text-secondary">
                  {client.name}
                </span>
              )}
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
            </span>
          ))
        )}
      </div>
    </section>
  );
}
