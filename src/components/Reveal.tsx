"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  as?: "div" | "article";
  delay?: number;
  className?: string;
  children: ReactNode;
};

/** Block-level reveal-on-scroll wrapper for list items (cards, rows). */
export function Reveal({ as = "div", delay = 0, className = "", children }: RevealProps) {
  const { ref, revealClass } = useReveal<HTMLElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${revealClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
