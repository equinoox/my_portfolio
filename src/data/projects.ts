import type { Localized } from "@/lib/i18n/types";

export type Project = {
  num: string;
  year: string;
  tags: string[];
  live?: string;
  code?: string;
  /** Path under /public. Falls back to the hatched placeholder when omitted. */
  image?: string;
  title: Localized<string>;
  description: Localized<string>;
};

/** Replace each entry with a real project — title, description, tags and links. */
export const projects: Project[] = [
  {
    num: "01",
    year: "2026",
    tags: ["Next.js", "TypeScript", "RAG", "PostgreSQL"],
    live: "https://edusyncappv.vercel.app/",
    code: "https://github.com/equinoox/edusync_app",
    image: "/projects/edusync-v2.png",
    title: { sr: "EduSync", en: "EduSync" },
    description: {
      sr: "AI platforma za personalizovano mikro-učenje, sa RAG arhitekturom, vektorskom PostgreSQL bazom i semantičkom pretragom nastavnih materijala. Obuhvata AI asistenta, upravljanje učionicama i dokumentima, kvizove, praćenje napretka, kalendar i obaveštenja.",
      en: "An AI platform for personalised micro-learning, built on a RAG architecture with a vector PostgreSQL database and semantic search across course materials. Covers an AI assistant, classroom and document management, quizzes, progress tracking, a calendar and notifications.",
    },
  },
  {
    num: "02",
    year: "2026",
    tags: ["React Native", "Expo", "TypeScript"],
    live: "#",
    code: "https://github.com/equinoox/quantivo_app",
    image: "/projects/quantivo.png",
    title: {
      sr: "Quantivo — sistem za upravljanje ugostiteljstvom",
      en: "Quantivo — Hospitality Management System",
    },
    description: {
      sr: "Mobilni CMS sistem namenjen malim i srednjim ugostiteljskim objektima za upravljanje zalihama, proizvodima, finansijama i dnevnim popisima. Razvijen je u React Native-u uz Expo, TypeScript i lokalnu SQLite bazu, sa prilagodljivim kategorijama, jedinicama mere i poslovnim podešavanjima.",
      en: "A mobile CMS platform designed for small and medium-sized hospitality businesses to manage inventory, products, finances, and daily stocktaking. Built with React Native, Expo, TypeScript, and a local SQLite database, with customizable categories, measurement units, and business settings.",
    },
  },
  {
    num: "03",
    year: "2026",
    tags: ["React Native", "Expo", "Supabase"],
    live: "#",
    code: "https://github.com/equinoox/smena_app",
    
    title: {
      sr: "Smena — platforma za pronalazak radnika",
      en: "Smena — Shift Staffing Platform",
    },
    description: {
      sr: "Mobilna platforma koja povezuje ugostiteljske objekte sa radnicima dostupnim za kratkoročne poslove i pojedinačne smene. Omogućava objavljivanje oglasa, prijavljivanje kandidata, pregled profila i upravljanje prijavama, uz odvojene tokove registracije za radnike i poslodavce.",
      en: "A mobile platform connecting hospitality venues with workers available for short-term jobs and individual shifts. It supports job listings, candidate applications, profile discovery, and application management through separate onboarding flows for workers and employers.",
    },
  },
  {
    num: "04",
    year: "2026",
    tags: ["coming soon"],
    live: "#",
    code: "#",
    title: { sr: "Novi projekat uskoro", en: "New project coming soon" },
    description: {
      sr: "Novi projekat je trenutno u fazi planiranja i razvoja. Više detalja biće dostupno uskoro.",
      en: "A new project is currently being planned and developed. More details will be available soon.",
    },
  },
  {
    num: "05",
    year: "2026",
    tags: ["coming soon"],
    live: "#",
    code: "#",
    title: { sr: "Novi projekat uskoro", en: "New project coming soon" },
    description: {
      sr: "Novi projekat je trenutno u fazi planiranja i razvoja. Više detalja biće dostupno uskoro.",
      en: "A new project is currently being planned and developed. More details will be available soon.",
    },
  },
  {
    num: "06",
    year: "2026",
    tags: ["coming soon"],
    live: "#",
    code: "#",
    title: { sr: "Novi projekat uskoro", en: "New project coming soon" },
    description: {
      sr: "Novi projekat je trenutno u fazi planiranja i razvoja. Više detalja biće dostupno uskoro.",
      en: "A new project is currently being planned and developed. More details will be available soon.",
    },
  },
];
