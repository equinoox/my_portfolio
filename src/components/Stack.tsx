"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { stack } from "@/data/stack";
import { Reveal } from "@/components/Reveal";

export function Stack() {
  const { lang, t } = useLanguage();

  return (
    <section id="stack" className="border-b border-border-subtle px-6 py-26 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start gap-x-16 gap-y-10">
        <div className="min-w-0 flex-1 basis-[260px]">
          <h2 className="m-0 mb-4 font-mono text-[15px] font-medium tracking-[0.14em] uppercase">
            {t.sectionStack}
          </h2>
          <p className="m-0 text-[15px] leading-[1.6] text-balance text-muted-500">
            {t.stackNote}
          </p>
        </div>

        <div className="grid min-w-0 flex-[3_1_480px] gap-0.5">
          {stack[lang].map((group) => (
            <Reveal
              key={group.label}
              className="grid grid-cols-[minmax(110px,190px)_1fr] items-start gap-7 border-t border-border py-5.5"
            >
              <span className="pt-0.75 font-mono text-[11.5px] tracking-[0.1em] text-accent-2 uppercase">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {group.items.map((item, i) => (
                  <span key={i} className="text-[15.5px] text-muted-150">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
