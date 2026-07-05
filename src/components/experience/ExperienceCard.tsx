"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ExperienceEntry } from "@/content/experience";

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group cursor-pointer border-b border-border py-8"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-heading text-2xl font-semibold text-text-primary">{entry.org}</h3>
        <span className="text-sm text-text-secondary">{entry.dates}</span>
      </div>
      <p className="mt-1 text-accent">{entry.role}</p>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2 overflow-hidden text-text-secondary"
          >
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="text-sm leading-relaxed">
                • {bullet}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
