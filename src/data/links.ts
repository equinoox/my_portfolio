import type { Localized } from "@/lib/i18n/types";

export type ContactLink = { label: string; value: string; href: string };

/** `value` is the visible text, `href` the real target. */
const EMAIL = "novuspavlovic.lazar@gmail.com";
const GITHUB = "https://github.com/equinoox";
const LINKEDIN = "https://www.linkedin.com/in/pavlovic-lazar/";

const contactLinks: ContactLink[] = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "GitHub", value: "github.com/equinoox", href: GITHUB },
  { label: "LinkedIn", value: "linkedin.com/in/pavlovic-lazar", href: LINKEDIN },
];

// Labels and values are identical in both languages here, so both point at the
// same list rather than duplicating it.
export const links: Localized<ContactLink[]> = {
  sr: contactLinks,
  en: contactLinks,
};
