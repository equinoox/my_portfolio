"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Lang } from "@/lib/i18n/types";

const NAV_LINKS: { href: string; key: "work" | "stack" | "experience" | "contact" }[] = [
  { href: "#projekti", key: "work" },
  { href: "#stack", key: "stack" },
  { href: "#iskustvo", key: "experience" },
  { href: "#kontakt", key: "contact" },
];

export function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border-subtle bg-background/82 px-6 py-4.5 backdrop-blur-md sm:px-10">
      <a href="#top" className="flex items-baseline gap-2.5">
        <span className="text-[15px] font-bold tracking-tight">{t.name}</span>
        <span className="font-mono text-[11px] tracking-wide text-muted-700">{t.role}</span>
      </a>

      <nav className="flex items-center gap-5 sm:gap-7">
        {NAV_LINKS.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className="font-mono text-xs tracking-wide text-muted-400 transition-colors hover:text-foreground"
          >
            {t.nav[link.key]}
          </a>
        ))}
        <LanguageToggle lang={lang} setLang={setLang} />
      </nav>
    </header>
  );
}

function LanguageToggle({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="ml-1 flex items-center rounded-full border border-border-strong p-0.5">
      <ToggleButton active={lang === "sr"} onClick={() => setLang("sr")}>
        SR
      </ToggleButton>
      <ToggleButton active={lang === "en"} onClick={() => setLang("en")}>
        EN
      </ToggleButton>
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-1 font-mono text-[11px] tracking-wide transition-colors ${
        active ? "bg-accent text-accent-foreground" : "text-muted-500"
      }`}
    >
      {children}
    </button>
  );
}
