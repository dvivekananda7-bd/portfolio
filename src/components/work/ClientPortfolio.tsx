"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientTabs } from "@/content/clients";
import { GalleryItemCard } from "./GalleryItemCard";
import { FacebookEmbed } from "./FacebookEmbed";

export function ClientPortfolio() {
  const [active, setActive] = useState(clientTabs[0].slug);
  const baseId = useId();
  const current = clientTabs.find((t) => t.slug === active) ?? clientTabs[0];
  const reels = current.items.filter((i) => i.platform === "facebook");
  const rest = current.items.filter((i) => i.platform !== "facebook");

  return (
    <section id="work" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our clients' portfolio"
          accentFrom={1}
        />

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Clients"
          className="mb-10 flex flex-wrap gap-2.5"
        >
          {clientTabs.map((tab) => {
            const selected = tab.slug === active;
            return (
              <button
                key={tab.slug}
                type="button"
                role="tab"
                id={`${baseId}-tab-${tab.slug}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${tab.slug}`}
                onClick={() => setActive(tab.slug)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
                  selected
                    ? "border-accent bg-accent text-black"
                    : "border-border text-text-secondary hover:border-accent hover:text-accent"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`${baseId}-panel-${current.slug}`}
          aria-labelledby={`${baseId}-tab-${current.slug}`}
        >
          <p className="mb-8 max-w-2xl text-text-secondary">{current.blurb}</p>

          {/* Reels are 9:16 and embed their own player; everything else is a
              16:9 thumbnail card. Keeping them in separate grids stops the
              tall reels from stretching the row. */}
          {reels.length > 0 && (
            <div className="mb-6 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
              {reels.map((item) => (
                <FacebookEmbed
                  key={item.url}
                  url={item.url}
                  title={item.title}
                />
              ))}
            </div>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {rest.map((item) => (
                <GalleryItemCard key={item.url} item={item} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
