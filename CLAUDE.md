@AGENTS.md

# Portfolio

Personal portfolio site, ported from a Claude Design mock (`Portfolio.dc.html`) into Next.js.
Single page: sticky header, hero with stats, projects grid, skills, experience timeline, contact.
Bilingual (Serbian default, English toggle) via client-side context — no routing/locale URLs.

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS v4
- No UI/animation libraries — reveal-on-scroll is a small `IntersectionObserver` hook, language
  toggle is a small React context. Keep it that way; don't reach for a library where ~20 lines
  of plain React already does the job.

## Structure

```
src/
  app/            layout.tsx (fonts + <LanguageProvider>), page.tsx (assembles sections), globals.css
  components/     one file per page section (Header, Hero, Projects, Stack, Experience, Contact, Footer)
                  + Reveal.tsx, a reveal-on-scroll wrapper for list items (cards/rows)
  hooks/          useReveal.ts — IntersectionObserver-based fade/slide-in, used directly by
                  singular elements (headings, CTAs) and internally by Reveal.tsx for list items
  lib/i18n/       copy.ts (UI strings, sr/en), LanguageContext.tsx (provider + useLanguage())
  data/           placeholder content: projects.ts, stack.ts, timeline.ts, links.ts, stats.ts
```

## Colors & fonts — Tailwind v4 CSS-first config

Tailwind v4 has no `tailwind.config.js`; the theme lives in the `@theme` block at the top of
[globals.css](src/app/globals.css). That block **is** the config — add new colors/fonts there,
not by hardcoding hex values in components.

Semantic tokens (all named, none of these are arbitrary Tailwind grays):

- `background`, `surface`, `surface-2`, `surface-hover` — page vs. card backgrounds
- `foreground` — primary text
- `accent`, `accent-hover`, `accent-foreground` — the oklch teal used for CTAs/links/badges
- `accent-2`, `accent-2-hover` — the oklch violet second accent: hero headline's second
  line, stat labels, stack group labels, project numbers/count, timeline org names. The design
  uses teal for *actions* and violet for *meta/labels* — keep that split when adding elements.
- `grid-line` — line color of the hero's animated background grid
- `border`, `border-subtle`, `border-faint`, `border-strong`, `border-button`, `border-hover`,
  `border-hover-strong` — every border in the design is one of these seven, picked by context
  (section dividers vs. card borders vs. input borders vs. hover states)
- `muted-100` through `muted-950` — the design uses many close-but-different grays for text
  hierarchy; each shade maps to one exact value from the original mock (see the comments in
  `globals.css` if you need to trace a shade back to a specific piece of copy)

Fonts: Space Grotesk (`font-sans`, body/headings) and IBM Plex Mono (`font-mono`, labels/meta
text), both loaded via `next/font/google` in `layout.tsx` — no external `<link>` tags.

## Viewing the dev server from another device

`next dev` also serves on the machine's LAN address (printed as `Network:` on startup). Next
blocks cross-origin dev requests by default, which breaks the HMR websocket from that address,
so LAN ranges are listed in `allowedDevOrigins` in [next.config.ts](next.config.ts). If your
network hands out a different subnet, add it there — and note that editing `next.config.ts`
requires a dev server restart.

## Replacing placeholder content

Everything under `src/data/` is a placeholder and is meant to be edited directly — no CMS, no
build step. Each file exports a `Localized<T>` (an `{ sr: T[]; en: T[] }` record) except
`projects.ts`, where each project carries its own `title`/`description` per language inline.
To add/remove a project, add/remove an entry in the `projects` array in
[projects.ts](src/data/projects.ts) — the grid and the numbering derive from array length, so
nothing else needs updating.

UI chrome strings (nav labels, section headings, button text, form labels) live in
[copy.ts](src/lib/i18n/copy.ts), separate from `data/`, since they're interface text rather than
your content.

## Hero backdrop & the cursor "dent"

[HeroBackdrop.tsx](src/components/HeroBackdrop.tsx) renders the hero's decorative layers
(drifting grid, two breathing glow orbs, sweeping beam); the styling for all of them lives in
the `.hero-*` rules in `globals.css` rather than in JSX, since they're long multi-stop gradients.

The cursor effect is a second, magnified copy of the grid (`.hero-grid-dent`) revealed only in a
soft circle around the pointer and scaled *from that exact point*, plus `.hero-dent-shade` (an
accent bloom in the middle, shadow at the rim). Lines stretch outward from where you point and
the edges darken, so the surface reads as pressed in.

The component writes pointer coords to `--mx`/`--my` (and `--dent` for the enter/leave fade) as
CSS custom properties, throttled to one write per animation frame — **moving the mouse never
re-renders React**. If you extend this, keep it that way; don't put cursor position in state.
Both layers are hidden and every animation is disabled under
`@media (prefers-reduced-motion: reduce)`.

Note the `+ 40px` offsets in the dent's `transform-origin`/`mask-image`: the grid layers are
`inset: -40px` (so the drift never exposes an edge), so hero-space coords need that offset to
land in the layer's own box.

## Conventions

- Every component that needs the current language calls `useLanguage()` from
  `lib/i18n/LanguageContext.tsx`; it's a client component by necessity, but stays a thin
  presentational leaf — no other client state lives outside `Header` (language toggle) and
  `Contact` (form submitted state).
- Spacing utilities use Tailwind v4's dynamic spacing scale (e.g. `pt-33` = `8.25rem` = `132px`)
  to hit exact design pixel values — most numbers are `px / 4`. Font sizes and one-off values use
  arbitrary brackets (`text-[14.5px]`) since they don't sit on the 4px spacing scale.
- Don't destructure a hook's return object and then access its fields as `obj.ref` / `obj.field`
  inside JSX — `eslint-plugin-react-hooks`'s ref-safety rule flags member access on anything that
  contains a ref. Destructure to named variables at the call site instead (see `Hero.tsx`).
