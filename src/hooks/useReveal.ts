"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades an element up into view when it scrolls into the viewport.
 * Visible by default (fail-safe): content already on-screen at mount, or
 * running where IntersectionObserver isn't available, just renders visible
 * with no animation instead of risking getting stuck hidden.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const alreadyInView = el.getBoundingClientRect().top < window.innerHeight * 0.94;
    if (alreadyInView) return;

    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);

    const fallback = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const revealClass = `transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  return { ref, revealClass };
}
