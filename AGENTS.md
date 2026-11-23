# Project rules — Laprrk Technology Solutions website

These rules are binding for anyone (human or agent) working in this repository. They encode the
client brief. If a rule blocks a real requirement, raise it with the client before changing it.

## 1. What this project is

- A **static marketing website** for Laprrk Technology Solutions LLP, an IT services, IT hiring and
  corporate training company with offices in Greater Noida (India) and Louisville (USA).
- Built with **React 18 + Vite**, client-side only. Output is plain static files in `dist/`.
- **No backend, no server functions, no database, no CMS, no forms endpoint.** The only interactive
  submission is the consultation form, which composes a message and opens **WhatsApp**
  (`https://wa.me/918860664929`). Nothing is stored by the site.
- No router, no state library, no CSS framework. One page, anchor navigation, plain CSS with tokens.

## 2. Design constraints from the client

1. **Light theme only.** No dark theme, no dark-mode toggle. Accent sections are allowed and are
   built from the brand blue gradient (see `#consult`).
2. **Never use pure `#FFFFFF` or pure `#000000`.** Not in backgrounds, text, borders, shadows or
   gradients. Use the tokens in `src/styles/tokens.css`.
3. **The palette is derived from the logo** — the wordmark runs royal blue → azure → cyan:
   `#0A3E96` → `#0B6FC4` → `#12AFD8`. Do not introduce off-brand hues (no purple, no green, no
   orange/terracotta accents). Neutrals stay cool and tinted blue.
4. **Cyan is a signal, not a fill.** It is reserved for: the live status dot, the strand diagram, the
   active/hover indicator under nav items, list ticks, focus rings and small diagram marks.
5. **Clean and professional, but distinctive.** The client is an IT-industry professional who has
   rejected many "AI-looking" designs. Read `docs/DESIGN-PLAN.md` before designing anything new.
6. **No AI-slop patterns**: no cream + serif + terracotta palette, no purple/blue gradient washes, no
   identical three-column card rows, no uniform border-radius + generic shadow on every card, no
   pill badges, no rocket/shield icons, no emoji as UI icons, no all-caps eyebrow above every
   heading, no "→" appended to every link, no accordion FAQ, no `100vh` heroes.
7. Content must read like a real engineering firm wrote it: specific, plain, no "elevate",
   "seamless", "unleash", "next-gen", "cutting-edge", "in today's fast-paced world".

## 3. Content rules

- The approved facts and numbers live in `src/data/site.js` and `docs/CONTENT-AUDIT.md`. Do not
  invent new metrics, client names, testimonials or certifications.
- Figures currently in use: founded 2019 · 50+ clients · 200+ IT professionals placed · 500+
  professionals trained · first shortlist in 5–7 business days · 40 joiners in one GCC programme ·
  120 engineers in one training cohort · ~70% lab time · 38% average assessment improvement ·
  two-week sprints · written proposal within 48 hours. Use them consistently.
- Case studies are anonymised: never name a client without written permission.
- Sentence case for headings and buttons. Active voice. No exclamation marks.
- Keep the promise wording intact: NDA before detailed discussions, no retainer to start a
  conversation, 30-minute call, proposal within 48 hours.

## 4. Implementation rules

- All colours, fonts and spacing come from `src/styles/tokens.css`. Hard-coded hex values belong
  only in that file (the two brand-gradient stops in the consult section are the single exception).
- One stylesheet for layout: `src/styles/app.css`. Section components live in `src/components/`.
- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `dl`, `ol`, `figure`. One `h1` on the
  page, sequential headings after that.
- Every interactive element needs hover, active and `:focus-visible` states. Focus rings use cyan on
  light grounds and are never removed.
- All motion uses `transform`/`opacity` and is disabled inside `@media (prefers-reduced-motion:
  reduce)`. There is exactly one orchestrated entrance (hero + strand diagram); do not add
  scroll-reveal animations to every section.
- Images live in `public/images`, are lazy-loaded, have descriptive `alt` text and a fixed
  `aspect-ratio` to prevent layout shift. Do not use stock "diverse team" photography.
- The WhatsApp message is built in `src/components/ConsultForm.jsx`; keep validation inline (no
  `window.alert`), keep the manual link fallback, and keep the wording of the privacy note.
- Do not add a dependency without the client's approval. Current dependencies: `react`,
  `react-dom`, `vite`, `@vitejs/plugin-react`.
- Navigation is fixed at six items, matching the client's reference: **IT Services, Hiring, Training,
  Resources, About, Contact**. The first four open three-panel mega menus (group rail, link list,
  featured panel). All menu content lives in `src/data/menus.js`; add or move services there, never in
  the component. Keep every service reachable from a menu — the mega menu is the site directory.
  Panels open on hover intent and on click, switch on hovering another trigger, and close on Escape,
  outside click, item selection or leaving the header.

## 5. Accessibility floor

Skip link, visible focus, labelled form fields with inline errors, `aria-expanded` on the practice
disclosure, `aria-current` on the active nav item, tabular figures for numbers, colour contrast at
least WCAG AA for body text, and a keyboard-reachable mobile menu.

## 6. Commands

```bash
npm install     # once
npm run dev     # local dev server
npm run build   # static production build in dist/
npm run preview # serve the built output
```

Deployment target is any static host (Vercel or Cloudflare Pages). `vite.config.js` uses a relative
base so `dist/` can also be opened from a sub-path.

## 7. Documentation

- `docs/CONTENT-AUDIT.md` — everything the current site says, page by page, plus inconsistencies the
  client must resolve.
- `docs/DESIGN-PLAN.md` — palette, type, layout system, section map, motion and the self-critique
  pass. Read before extending the design.
