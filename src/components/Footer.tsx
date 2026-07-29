"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="flex items-center justify-between gap-6 border-t border-border-subtle px-6 py-6.5 sm:px-10">
      <span className="font-mono text-xs tracking-wide text-muted-800">{t.footer}</span>
      <a
        href="#top"
        className="font-mono text-xs tracking-wide text-muted-800 transition-colors hover:text-foreground"
      >
        {t.backToTop}
      </a>
    </footer>
  );
}
