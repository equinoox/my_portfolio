"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { links } from "@/data/links";
import { Loader } from "@/components/Loader";

const SUBMIT_DELAY_MS = 900;

export function Contact() {
  const { lang, t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, SUBMIT_DELAY_MS);
  }

  return (
    <section id="kontakt" className="px-6 pt-26 pb-22 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start gap-x-20 gap-y-14">
        <div className="min-w-0 flex-1 basis-[380px]">
          <h2 className="m-0 mb-5 font-mono text-[15px] font-medium tracking-[0.14em] uppercase">
            {t.sectionContact}
          </h2>
          <p className="m-0 mb-10 max-w-[460px] text-[clamp(21px,2.4vw,27px)] leading-[1.32] tracking-[-0.02em] text-balance">
            {t.contactLead}
          </p>

          <div className="grid gap-px">
            {links[lang].map((link) => {
              // mailto: should hand off to the mail client in place, not a new tab.
              const external = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between gap-5 border-t border-border py-4 transition-colors hover:text-accent"
                >
                  <span className="font-mono text-[11px] tracking-[0.1em] text-muted-700 uppercase">
                    {link.label}
                  </span>
                  <span className="text-[15px]">{link.value}</span>
                </a>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid min-w-0 flex-1 basis-[380px] gap-4.5 rounded-lg border border-border bg-surface p-8"
        >
          <label className="grid gap-2">
            <span className="font-mono text-[11px] tracking-[0.1em] text-muted-600 uppercase">
              {t.form.name}
            </span>
            <input
              type="text"
              required
              className="rounded border border-border-strong bg-background px-3.5 py-3 text-[15px] text-foreground outline-none focus:border-accent"
            />
          </label>

          <label className="grid gap-2">
            <span className="font-mono text-[11px] tracking-[0.1em] text-muted-600 uppercase">
              {t.form.email}
            </span>
            <input
              type="email"
              required
              className="rounded border border-border-strong bg-background px-3.5 py-3 text-[15px] text-foreground outline-none focus:border-accent"
            />
          </label>

          <label className="grid gap-2">
            <span className="font-mono text-[11px] tracking-[0.1em] text-muted-600 uppercase">
              {t.form.message}
            </span>
            <textarea
              rows={5}
              required
              className="resize-y rounded border border-border-strong bg-background px-3.5 py-3 text-[15px] text-foreground outline-none focus:border-accent"
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="mt-1.5 flex cursor-pointer items-center justify-center gap-2 rounded bg-accent px-5 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting && <Loader />}
            {submitting ? t.form.sending : sent ? t.form.submitted : t.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
