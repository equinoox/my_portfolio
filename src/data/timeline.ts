import type { Localized } from "@/lib/i18n/types";

export type TimelineEntry = { period: string; title: string; org: string; description: string };

/**
 * Most recent first. `title` renders large, `org` as the small violet meta text
 * beside it — currently company + city, since no job titles were supplied.
 */
export const timeline: Localized<TimelineEntry[]> = {
  sr: [
    {
      period: "Jul 2026 — Avgust 2026",
      title: "AppWorks",
      org: "Beograd",
      description:
        "Full-stack razvoj web i mobilnih aplikacija koristeći React Native, Laravel, MySQL, CMS platforme, WebView integracije i moderne alate za razvoj uz pomoć veštačke inteligencije.",
    },
    {
      period: "Jun 2024 — Avgust 2024",
      title: "MultiMedia Research Centre",
      org: "Beograd",
      description:
        "Razvoj bekend servisa, integracija baza podataka i implementacija RESTful API-ja za web aplikacije.",
    },
    {
      period: "Jun 2022 — Jul 2022",
      title: "Trust IT",
      org: "Beograd",
      description:
        "Učešće u fazama istraživanja, implementacije i testiranja softvera korišćenjem .NET tehnologije.",
    },
  ],
  en: [
    {
      period: "Jul 2026 — Aug 2026",
      title: "AppWorks",
      org: "Belgrade",
      description:
        "Full-stack development of web and mobile applications using React Native, Laravel, MySQL, CMS platforms, WebView integrations and modern AI-assisted development tools.",
    },
    {
      period: "Jun 2024 — Aug 2024",
      title: "MultiMedia Research Centre",
      org: "Belgrade",
      description:
        "Backend service development, database integration and implementation of RESTful APIs for web applications.",
    },
    {
      period: "Jun 2022 — Jul 2022",
      title: "Trust IT",
      org: "Belgrade",
      description:
        "Took part in the research, implementation and testing phases of software development using .NET technologies.",
    },
  ],
};
