"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { timeline } from "@/data/timeline";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section id="iskustvo" className="border-b border-border-subtle px-6 py-26 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="m-0 mb-13 font-mono text-[15px] font-medium tracking-[0.14em] uppercase">
          {t.sectionExperience}
        </h2>

        <div className="grid">
          {timeline[lang].map((entry, i) => (
            <Reveal
              key={i}
              className="grid grid-cols-[minmax(110px,150px)_1fr] gap-x-10 gap-y-6 border-t border-border py-7.5 transition-colors hover:bg-surface-hover"
            >
              <span className="pt-1 font-mono text-xs tracking-wide text-muted-700">
                {entry.period}
              </span>
              <div className="max-w-[720px]">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="m-0 text-[21px] font-medium tracking-tight">{entry.title}</h3>
                  <span className="font-mono text-xs text-accent-2">{entry.org}</span>
                </div>
                <p className="m-0 mt-3 text-[15px] leading-[1.65] text-balance text-muted-300">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
