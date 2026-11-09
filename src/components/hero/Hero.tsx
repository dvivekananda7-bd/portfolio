"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { asset } from "@/lib/basePath";
import { site } from "@/content/site";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export function Hero() {
  return (
    <section className="glow-top relative flex min-h-screen items-center overflow-hidden pt-32 pb-28">
      {/* Portrait, pushed right and scrimmed hard so type stays readable */}
      {/* Portrait panel.
          The panel is masked rather than simply placed: without the mask its
          left edge painted opaque black straight over the glow, which read as
          a hard vertical seam down the middle of the hero. The mask dissolves
          the whole panel — image and overlay together — into the glow. */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[66%] lg:block
                   [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.35)_26%,rgba(0,0,0,0.8)_52%,#000_78%)]
                   [-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.35)_26%,rgba(0,0,0,0.8)_52%,#000_78%)]"
      >
        <Image
          src={asset("/images/portrait.jpg")}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="66vw"
          className="object-cover object-[30%_22%] opacity-45 grayscale"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.6)_38%,rgba(0,0,0,0.28)_66%,rgba(255,90,0,0.16)_100%)]"
        />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.h1
            {...rise(0.04)}
            className="display display-xl mb-8 text-[clamp(2.8rem,7vw,6.25rem)]"
          >
            <span className="sr-only">
              {site.name} — {site.title}
            </span>
            <span aria-hidden="true" className="block text-white">
              We design <span className="text-accent">Stories</span>
            </span>
            <span aria-hidden="true" className="block text-white">
              to communicate
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mb-10 max-w-2xl text-lg leading-relaxed text-text-secondary"
          >
            We build brand films and campaigns to travel further. Our expert
            team handles your video production, brand content strategy,
            influencer portfolio management and AI brand content.
          </motion.p>

          <motion.div {...rise(0.26)} className="flex flex-wrap gap-3">
            <Button href="#contact">Book a call</Button>
            <Button href="#work" variant="outline">
              See the work
            </Button>
          </motion.div>

          <motion.p
            {...rise(0.34)}
            className="mt-10 text-sm text-text-faint"
          >
            50+ national campaigns · 101 countries reached · 4 festival
            selections
          </motion.p>
        </div>
      </Container>

      {/* Discipline ticker */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 overflow-hidden border-y border-border py-4"
      >
        <div className="marquee-track [--marquee-duration:38s] gap-8">
          {[0, 1].map((pass) =>
            site.disciplines.map((d) => (
              <span
                key={`${pass}-${d}`}
                className="label flex items-center gap-8 text-text-secondary"
              >
                {d}
                <span className="h-1 w-1 rounded-full bg-accent" />
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
