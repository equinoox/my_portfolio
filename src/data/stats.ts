import type { Localized } from "@/lib/i18n/types";

export type Stat = { label: string; value: string };

/** `Projekti` still reflects the placeholder project list — update with the real count. */
export const stats: Localized<Stat[]> = {
  sr: [
    { label: "Iskustvo", value: "Junior" },
    { label: "Projekti", value: "6" },
    { label: "Lokacija", value: "Beograd" },
  ],
  en: [
    { label: "Experience", value: "Junior" },
    { label: "Projects", value: "6" },
    { label: "Based in", value: "Belgrade" },
  ],
};
