"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { stats } from "@/data/stats";
import { useReveal } from "@/hooks/useReveal";
import { HeroBackdrop } from "@/components/HeroBackdrop";

export function Hero() {
  const { lang, t } = useLanguage();
  const { ref: badgeRef, revealClass: badgeReveal } = useReveal<HTMLDivElement>();
  const { ref: bodyRef, revealClass: bodyReveal } = useReveal<HTMLParagraphElement>();
  const { ref: ctasRef, revealClass: ctasReveal } = useReveal<HTMLDivElement>();
  const { ref: statsRef, revealClass: statsReveal } = useReveal<HTMLDListElement>();

  return (
    <section
      id="top"
      className="relative border-b border-border-subtle px-6 pt-33 pb-27 sm:px-10"
    >
      <HeroBackdrop />
      <div className="hero-hairline" />

      <div className="relative z-1 mx-auto flex max-w-6xl flex-wrap items-end gap-x-18 gap-y-14">
        <div className="min-w-0 flex-1 basis-[520px]">
          <div ref={badgeRef} className={`mb-8.5 flex items-center gap-2.5 ${badgeReveal}`}>
            <span className="h-1.75 w-1.75 animate-blink rounded-full bg-accent" />
            <span className="font-mono text-[11.5px] tracking-[0.12em] text-muted-500 uppercase">
              {t.available}
            </span>
          </div>

          {/* Each line slides up out of its own mask — see .hero-line in globals.css */}
          <h1 className="m-0 text-[clamp(40px,6.4vw,76px)] leading-[1.14] font-bold tracking-[-0.035em] text-balance">
            <span className="hero-line-mask">
              <span className="hero-line" style={{ animationDelay: "0.05s" }}>
                {t.heroLine1}
              </span>
            </span>
            <span className="hero-line-mask">
              <span
                className="hero-line text-accent-2"
                style={{ animationDelay: "0.18s" }}
              >
                {t.heroLine2}
              </span>
            </span>
          </h1>

          <p
            ref={bodyRef}
            style={{ transitionDelay: "120ms" }}
            className={`mt-8.5 max-w-[620px] text-[18.5px] leading-[1.62] text-balance text-muted-200 ${bodyReveal}`}
          >
            {t.heroBody}
          </p>

          <div
            ref={ctasRef}
            style={{ transitionDelay: "180ms" }}
            className={`mt-10.5 flex flex-wrap gap-3 ${ctasReveal}`}
          >
            <a
              href="#projekti"
              className="rounded bg-accent px-6.5 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              {t.ctaWork}
            </a>
            <a
              href="#kontakt"
              className="rounded border border-border-button px-6.5 py-3.5 text-sm font-medium text-muted-100 transition-colors hover:border-accent-2 hover:text-white"
            >
              {t.ctaContact}
            </a>
          </div>
        </div>

        <dl
          ref={statsRef}
          style={{ transitionDelay: "240ms" }}
          className={`m-0 grid min-w-0 flex-1 basis-[220px] gap-6.5 border-l border-border-subtle pl-7 ${statsReveal}`}
        >
          {stats[lang].map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[11px] tracking-[0.1em] text-accent-2 uppercase">
                {stat.label}
              </dt>
              <dd className="mt-2 text-[30px] font-medium tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
