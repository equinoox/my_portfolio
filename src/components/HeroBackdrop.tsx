"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative hero backdrop: a drifting grid, two breathing glow orbs and a
 * sweeping light beam — plus a grid "dent" that follows the cursor.
 *
 * The dent swaps a hole in the base grid for a magnified copy of the same grid
 * in the same spot (see the `.hero-grid*` rules), so it deforms the existing
 * surface rather than layering a second grid over it.
 *
 * Pointer coords are written straight to CSS custom properties (`--mx`/`--my`)
 * on the root node and consumed by the `.hero-*` rules in globals.css, so
 * moving the mouse never re-renders React. Writes are throttled to one per
 * animation frame.
 */
export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const hero = el?.parentElement;
    if (!el || !hero) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const flush = () => {
      frame = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const handleMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      el.style.setProperty("--dent", "1");
      if (!frame) frame = requestAnimationFrame(flush);
    };

    const handleLeave = () => {
      el.style.setProperty("--dent", "0");
    };

    hero.addEventListener("pointermove", handleMove);
    hero.addEventListener("pointerleave", handleLeave);

    return () => {
      hero.removeEventListener("pointermove", handleMove);
      hero.removeEventListener("pointerleave", handleLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="hero-backdrop">
      <div className="hero-grid-layer">
        <div className="hero-grid" />
        <div className="hero-grid-dent" />
      </div>
      <div className="hero-dent-shade" />
      <div className="hero-orb hero-orb-teal" />
      <div className="hero-orb hero-orb-violet" />
      <div className="hero-beam" />
    </div>
  );
}
