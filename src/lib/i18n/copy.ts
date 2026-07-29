import type { Localized } from "./types";

export type Copy = {
  name: string;
  role: string;
  nav: { work: string; stack: string; experience: string; contact: string };
  available: string;
  heroLine1: string;
  heroLine2: string;
  heroBody: string;
  ctaWork: string;
  ctaContact: string;
  sectionWork: string;
  linkLive: string;
  linkCode: string;
  sectionStack: string;
  stackNote: string;
  sectionExperience: string;
  sectionContact: string;
  contactLead: string;
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    submitted: string;
  };
  footer: string;
  backToTop: string;
  projectShotLabel: string;
};

export const copy: Localized<Copy> = {
  sr: {
    name: "Lazar Pavlović",
    role: "Software Developer",
    nav: { work: "Projekti", stack: "Stack", experience: "Iskustvo", contact: "Kontakt" },
    available: "Otvoren za nove pozicije",
    heroLine1: "Software developer",
    heroLine2: "fokusiran na razvoj pouzdanih softverskih rešenja",
    heroBody:
      "Radim na razvoju web i mobilnih aplikacija, backend sistema i kompletnih softverskih rešenja — od arhitekture, baza podataka i poslovne logike do korisničkog interfejsa. Ovde su predstavljeni projekti na kojima sam radio, korišćene tehnologije i moja uloga u svakom od njih.",
    ctaWork: "Pogledaj projekte",
    ctaContact: "Kontaktiraj me",
    sectionWork: "Odabrani projekti",
    linkLive: "Live →",
    linkCode: "Kod →",
    sectionStack: "Veštine",
    stackNote: "Tehnologije i alati koje koristim svakodnevno u radu.",
    sectionExperience: "Iskustvo",
    sectionContact: "Kontakt",
    contactLead:
      "Ukoliko smatrate da moje iskustvo i dosadašnji rad mogu biti relevantni za vaš tim ili projekat, biće mi zadovoljstvo da stupimo u kontakt.",
    form: {
      name: "Ime",
      email: "Email",
      message: "Poruka",
      submit: "Pošalji poruku",
      sending: "Slanje...",
      submitted: "Poslato ✓",
    },
    footer: "© 2026 Lazar Pavlović",
    backToTop: "Na vrh ↑",
    projectShotLabel: "screenshot projekta",
  },
  en: {
    name: "Lazar Pavlović",
    role: "Software Developer",
    nav: { work: "Work", stack: "Stack", experience: "Experience", contact: "Contact" },
    available: "Open to new roles",
    heroLine1: "Software developer",
    heroLine2: "focused on building reliable software solutions",
    heroBody:
      "I build web and mobile applications, backend systems and complete software solutions — from architecture, databases and business logic through to the user interface. Below are the projects I've worked on, the technologies behind them and my role in each one.",
    ctaWork: "View projects",
    ctaContact: "Get in touch",
    sectionWork: "Selected work",
    linkLive: "Live →",
    linkCode: "Code →",
    sectionStack: "Skills",
    stackNote: "Technologies and tools I work with day to day.",
    sectionExperience: "Experience",
    sectionContact: "Contact",
    contactLead:
      "If you feel my experience and previous work could be relevant to your team or project, I'd be glad to get in touch.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      sending: "Sending...",
      submitted: "Sent ✓",
    },
    footer: "© 2026 Lazar Pavlović",
    backToTop: "Back to top ↑",
    projectShotLabel: "project screenshot",
  },
};
