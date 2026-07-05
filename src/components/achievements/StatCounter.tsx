"use client";

import { useEffect, useRef, useState } from "react";

export function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    const totalFrames = 45;
    let frame = 0;
    function tick() {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setDisplay(Math.floor(progress * numeric));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, numeric]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-bold text-accent md:text-5xl">
        {Number.isNaN(numeric) ? value : `${display}${suffix}`}
      </p>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </div>
  );
}
