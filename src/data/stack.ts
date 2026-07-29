import type { Localized } from "@/lib/i18n/types";

export type StackGroup = { label: string; items: string[] };

/** Group labels are translated; the technology names themselves are not. */
export const stack: Localized<StackGroup[]> = {
  sr: [
    { label: "Jezici", items: ["Java", "C#", "PHP", "Python", "JavaScript", "TypeScript", "SQL"] },
    {
      label: "Okviri",
      items: ["React.js", "Next.js", "React Native", "Expo", "Laravel", "ASP.NET Core"],
    },
    {
      label: "Baze podataka",
      items: ["PostgreSQL", "MySQL", "SQLite", "SQL Server", "Drizzle ORM"],
    },
    { label: "Alati", items: ["Git", "GitHub", "Postman", "Vercel", "Supabase", "Docker"] },
    {
      label: "Ostalo",
      items: ["REST APIs", "OOP", "MVC", "Agile/Scrum", "AI-Assisted Development"],
    },
  ],
  en: [
    { label: "Languages", items: ["Java", "C#", "PHP", "Python", "JavaScript", "TypeScript", "SQL"] },
    {
      label: "Frameworks",
      items: ["React.js", "Next.js", "React Native", "Expo", "Laravel", "ASP.NET Core"],
    },
    { label: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "SQL Server", "Drizzle ORM"] },
    { label: "Tools", items: ["Git", "GitHub", "Postman", "Vercel", "Supabase", "Docker"] },
    { label: "Other", items: ["REST APIs", "OOP", "MVC", "Agile/Scrum", "AI-Assisted Development"] },
  ],
};
