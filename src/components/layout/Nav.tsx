"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#spotlight", label: "Spotlight" },
  { href: "#work", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          stuck
            ? "border-border bg-black/85 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <Container className="flex items-center gap-8 py-4">
          <a href="#top" className="mr-auto">
            <Wordmark />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-accent-hot lg:inline-flex"
          >
            Book a call
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative h-8 w-8 lg:hidden"
          >
            <span
              className={cn(
                "absolute left-1 h-0.5 w-6 bg-white transition-transform duration-200",
                open ? "top-4 rotate-45" : "top-2.5"
              )}
            />
            <span
              className={cn(
                "absolute left-1 top-4 h-0.5 w-6 bg-white transition-opacity duration-200",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-1 h-0.5 w-6 bg-white transition-transform duration-200",
                open ? "top-4 -rotate-45" : "top-5.5"
              )}
            />
          </button>
        </Container>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[68px] z-40 grid gap-1 border-b border-border bg-black px-5 pb-10 pt-6 lg:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display border-b border-border-soft py-4 text-2xl text-white transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
