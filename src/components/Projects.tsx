"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

/* Cards sit in a repeat(auto-fill, minmax(340px, 1fr)) grid inside a 1152px
   container, so they top out around 380px wide on desktop and go full-bleed on
   mobile. */
const CARD_IMAGE_SIZES = "(min-width: 1200px) 380px, (min-width: 640px) 50vw, 100vw";

export function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projekti" className="border-b border-border-subtle px-6 py-26 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-13 flex items-baseline justify-between gap-6">
          <h2 className="m-0 font-mono text-[15px] font-medium tracking-[0.14em] uppercase">
            {t.sectionWork}
          </h2>
          <span className="font-mono text-xs text-accent-2">
            {String(projects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5.5">
          {projects.map((project) => (
            <Reveal
              as="article"
              key={project.num}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-border-hover"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-surface-2 bg-[repeating-linear-gradient(135deg,#14181C_0_1px,transparent_1px_9px)]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title[lang]}
                    fill
                    sizes={CARD_IMAGE_SIZES}
                    className="object-cover"
                    priority
                  />
                ) : (
                  <span className="font-mono text-xs tracking-wide text-muted-950">
                    {t.projectShotLabel}
                  </span>
                )}
                {/* Pill keeps the number legible over a screenshot, not just the hatching. */}
                <span className="absolute top-3 left-3.5 rounded-[3px] bg-background/70 px-1.5 py-0.5 font-mono text-xs text-accent-2 backdrop-blur-sm">
                  {project.num}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3.5 px-5.5 pt-5.5 pb-6">
                <div className="flex items-baseline justify-between gap-3.5">
                  <h3 className="m-0 text-xl font-medium tracking-tight">
                    {project.title[lang]}
                  </h3>
                  <span className="font-mono text-xs text-muted-800">{project.year}</span>
                </div>

                <p className="m-0 flex-1 text-[14.5px] leading-[1.6] text-balance text-muted-300">
                  {project.description[lang]}
                </p>

                <div className="flex flex-wrap gap-1.75">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-[3px] border border-border-strong px-2 py-1 font-mono text-[10.5px] tracking-wide text-muted-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-1 flex gap-4.5 border-t border-border-faint pt-1.5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none font-mono text-[11.5px] tracking-wide whitespace-nowrap text-accent"
                  >
                    {t.linkLive}
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none font-mono text-[11.5px] tracking-wide whitespace-nowrap text-muted-500 transition-colors hover:text-foreground"
                  >
                    {t.linkCode}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
