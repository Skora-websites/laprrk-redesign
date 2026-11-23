# Design plan — Laprrk Technology Solutions

A redesign brief for an IT services, IT hiring and corporate training firm with offices in Greater
Noida and Louisville. Reviewed against the client's constraints: clean and professional, a unique
identity, striking visuals, light theme only, no pure black or white, palette relevant to the logo,
and a hard no on anything that reads as generated.

---

## 1. The premise

The logo already contains the identity. The wordmark runs **royal blue → azure → cyan**, and the
mirrored R carries a handshake. That gives two facts to design with:

- **Two stops, one gradient** — read as the two offices: deep blue for India delivery, cyan for US
  client hours. The gradient is not decoration; it is the company's geography.
- **The convergence** — three practices that meet in one team. The swooshes under the wordmark
  become a strand: three lines that run separately and join into one path.

So the site's organising idea is **one line, three disciplines**: three quiet, parallel tracks that
converge into a single point labelled "one roadmap". It appears exactly once, as a drawn diagram at
the top of the page, and then governs the layout: rows that align, a single left reading edge, and
one accent that marks the joins.

Everything else stays disciplined. No illustration system, no icon family, no gradient text, no
glassmorphism.

---

## 2. Colour

All core values are tinted blue and derived from the logo's gradient. No pure white or black.

| Token | Hex | Role |
| --- | --- | --- |
| `--canvas` | `#E5ECF3` | Page ground. Cool pale steel, not white. |
| `--surface` | `#F4F8FB` | Raised panels (hero frame stage, form card, open practice row). |
| `--ink` | `#0B1B2B` | Text, headings, primary button ground. Deep navy-black. |
| `--line` | `#C8D6E2` | Rules, table borders, input borders. |
| `--blue-800` | `#0A3E96` | Primary action, links, sector labels. Straight from the logo. |
| `--cyan-500` | `#12AFD8` | The signal: live dot, strand diagram, ticks, focus ring. |
| `--blue-900` | `#062A55` | The one accent section (consultation) gradient start. |

Supporting: `--ink-soft #3A5468` for body copy, `--ink-mute #566E83` for secondary labels,
`--canvas-2 #DBE4ED` for the footer, `--frame #F3F7FA` for the hero shell, `--navy #0D2136` for dark
cards and buttons, `--wash-cyan #D7F1F7` / `--wash-blue #E2EFF9` for the hero stage and bento, and
`--cyan-100 #D6EDF6` for the success state.

**Discipline:** cyan stays a signal — focus ring, live dot, connector, ticks, chips. It is allowed to
fill two contained objects (the slab behind the phone, the consultation panel's radial glow) and the
five small service chips; it never becomes a full-width section fill. There is no second chromatic
accent — no warm counterpoint, no terracotta, no green. The warmth in the page comes from photography
(pale daylight on stone and glass) rather than from an off-brand hue.

Contrast: ink on canvas ≈ 15:1, ink-soft on canvas ≈ 7.4:1, ink-mute on canvas ≈ 4.7:1, `#EAF3FB`
on blue-800 ≈ 8.6:1. All body text clears WCAG AA.

---

## 3. Typography

| Role | Face | Why |
| --- | --- | --- |
| Display / headings / buttons | **Inter Tight** 500–700 | Neutral grotesque with tight, constructed counters. At headline size it stacks into a solid three-line block without a display-serif mannerism, and it matches the reference composition. |
| Body / UI | **Inter** 400–500 | The screen face the display face is drawn from; extremely legible at 17px, with a tall x-height that keeps dense service lists readable. |
| Figures / compact labels | **Inter Tight** 500–600 | Numbers, table columns, chips and small caps use the display face with `font-variant-numeric: tabular-nums`; no third family is loaded. |

Scale (fluid, `clamp`):

- H1 `2.9rem → 5rem`, line-height 1.01, tracking −0.047em
- H2 `1.85rem → 2.9rem`, line-height 1.06, tracking −0.035em
- H3 `1.35rem → 1.85rem` (cases), `1.06rem` (timeline), tracking −0.02em
- Body `1.0625rem` / 1.62, measure capped at 48–54ch
- Small `0.89rem`, captions `0.71–0.78rem`

No uppercase tracking-wide labels above headings. Sentence case everywhere, including the nav and
the buttons.

---

## 4. Layout

- 1400px shell, gutters `clamp(20px, 3vw, 40px)`, one left reading edge for every section.
- Vertical rhythm `clamp(56px, 7vw, 104px)`; optical, not symmetrical (the space above a heading is
  always larger than the space below it).
- Asymmetry is structural, not decorative: hero copy 1.02/0.98 art, evidence 1.02/0.98 with the second
  case set smaller, offices 0.85/1.15.
- Hairlines are used where a row genuinely ends (tables, ledgers, FAQ). Cards are not the default
  container; the only shadowed surfaces are the hero frame, the phone, the three floating proof cards,
  the intro plate and the form.
- Radii are restrained and hierarchical: 2px inputs and indicators, 4px images, 14px rows and tiles,
  22px bento cards, 26px hero stage, 36px hero frame, 47px phone.

### Hero

```
┌───────────────────────────────────────────────────────────────────────────┐
│ LAPRRK     IT Services  Hiring  Training  Resources  About  Contact  [>]  │
├───────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────── hero frame · 36px ───────────────────────────┐ │
│ │ ┌────────────────── stage · 26px · mesh + 76px grid ───────────────┐ │ │
│ │ │  Software built.             ┌ 5–7 days ┐        ╭───────────╮    │ │ │
│ │ │  Engineers placed.           └──────────┘        │   phone   │    │ │ │
│ │ │  Teams [mark] trained.       ┌ 48h card ┐        │  238×460  │    │ │ │
│ │ │                              └──────────┘        ╰───────────╯    │ │ │
│ │ │  Production software and AI…   ╭ 500+ placed ╮      slab ╱        │ │ │
│ │ │  [ What do you need?  Book a call ]╰─────────────╯── connector──  │ │ │
│ │ │  NDA before details · 48h proposal · No retainer                  │ │ │
│ │ └───────────────────────────────────────────────────────────────────┘ │ │
│ │ [ 50+ clients ] [ service waves + 5 chips ] [ sprint model + 4 tiles ]│ │
│ └───────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────────┘
```

Left-aligned copy throughout. The striking element is the right column: a titanium phone running the
mobile site, a rotated cyan slab, three floating proof cards and a drawn connector. It answers the
buyer's first questions — what the work looks like, how fast a shortlist arrives, how fast a proposal
arrives — without a stock photograph. The bento row under the frame carries the remaining proof
(clients, service range, sprint model) before the page moves into the strand.

### Section order (new, deliberately different from the current site)

| # | Section | What the buyer gets | Old site equivalent |
| --- | --- | --- | --- |
| 1 | Hero + phone proof stage | Who this is, what the work looks like, how fast the first answer arrives | Hero + delivery board |
| 2 | Strand diagram | The one-team claim, drawn | — (new) |
| 3 | "Most partners fix a third of it" | Three problem statements that name the buyer's actual situation | — (new) |
| 4 | Practices ledger (expandable) | Full scope without 17 separate pages, no scrolling wall | 3 equal cards + service lists |
| 5 | Engagement models table | How it is priced and how fast it starts — before a call | 4-step "how to start" |
| 6 | Evidence | One large case + two smaller, with real numbers | Three equal case cards |
| 7 | First 30 days | A dated, checkable onboarding sequence | 4-step process |
| 8 | Stack, in four groups | Technical credibility without a marquee | Logo marquee + 8 role cards |
| 9 | Training tracks | Corporate vs institute split, with a real lab photo | Training card block |
| 10 | Industries | Domain context per sector | Undescribed chip list |
| 11 | Two offices | Addresses, hours, one image | Footer-only |
| 12 | FAQ, side by side | All answers visible, no clicking | Accordion |
| 13 | Consultation panel + WhatsApp form | The actual conversion | Formless contact page |
| 14 | Footer | Legal, offices, direct lines | Link farm + map-less footer |

Removed on purpose: the scrolling tech marquee (motion for its own sake), the 16-role card grid
(replaced by four compact groups), the blog teaser row (no archive to support it yet), and every
duplicated CTA block.

---

## 5. Motion

One orchestrated entry, in two acts. A dark intro curtain holds a pale logo plate, then collapses
vertically after ~760ms; it runs once per browser session (`sessionStorage`). Behind it the hero
frame settles, the three headline lines rise in sequence (85ms apart), the lede and pill follow, the
slab and phone rise from below, the three proof cards pop in, the connector draws, and the bento row
lifts in. The strand diagram runs its own 1.7s draw on load, independent of the intro. Nothing else
animates on entry — no scroll reveals, no staggered section cards.

Interaction motion is functional only: 200–250ms transitions on hover, focus and the practice
disclosure; the service chips drift slowly to keep the bento card alive; presses shift by 1px.

`prefers-reduced-motion` skips the intro, removes every animation and pins the hero, connector and
diagram to their finished states.

---

## 6. Photography

Three images, all dry, daylight, and cool:

1. **System diagram on a desk** — evidence section. Speaks to the document-AI case and to how the
   work is actually planned. Not a stock team photo.
2. **Training lab, over the shoulder** — training section. Real screens, real posture, no eye contact
   with the camera, no boardroom.
3. **Facade against pale sky** — offices. Ties to the two-location story without a map graphic.

All are treated with `saturate(0.92) contrast(1.03)` and a blue/cyan multiply overlay so they sit in
the palette rather than beside it. Captions are mono and factual.

---

## 7. Self-critique: what was rejected and why

| Default I would have reached for | What I used instead |
| --- | --- |
| Cream `#F4F1EA` ground + high-contrast serif + terracotta | Cool steel `#E5ECF3`, Inter Tight, logo-derived blue. The client's logo dictates a blue family; a cream/terracotta page would fight it. |
| Near-black hero with an acid-green accent | Light page throughout, one saturated blue panel for the conversion section. |
| Purple/blue "AI gradient" wash | A single brand gradient that exists only inside the diagram stroke and the consultation panel, where it is literal (blue → cyan = India → US). |
| Three equal feature cards for the three practices | An expandable ledger: one row per practice, full service list inside, one open at a time. Reads like a capabilities document, not a template. |
| Eyebrow labels above every heading | A single mono kicker in the hero only; sections are headed by the sentence that does the work. |
| Numbered markers `01 / 02 / 03` everywhere | Numbers appear where the content is genuinely sequential: the 30-day timeline and the three problem statements. |
| Accordion FAQ | A two-column definition list; every answer is visible and skimmable. |
| Icon set (Lucide/Feather) for services | No icons at all. Service scope is text, which is what a technical buyer reads. |
| "Book a demo" ghost + filled button pair on every band | One primary per section at most; quiet underlined links for secondary paths. |
| Full-bleed stock photo hero | A phone running the product, three floating proof cards and a drawn connector. |
| Cards with border + shadow + radius for everything | Hairline-separated rows; shadows reserved for the hero frame, phone, proof cards and form. |

Additions worth flagging to the client: the engagement-models table (buyers ask for this before
they will take a call), the dated 30-day plan (replaces vague "how we work"), and the two-office
section with local time (makes the India/US story operational rather than a footnote).

---

## 8. Accessibility and performance

- Skip link, semantic landmarks, one `h1`, labelled sections.
- Focus visible on every control; cyan ring on light ground, blue ring inside the form.
- Practice disclosure is a real `button` with `aria-expanded` and `aria-controls`.
- Nav marks the current section with `aria-current`.
- Form: labels, inline errors tied by `aria-describedby`, `aria-invalid`, focus moved to the first
  invalid field, and a `role="status"` confirmation with a manual WhatsApp fallback.
- Mobile menu closes on Escape and on selection.
- Fonts: three families, two weights each, `display=swap`. No icon library, no animation library, no
  image carousel — the bundle is React plus ~30KB of CSS.
- Images are lazy-loaded with intrinsic dimensions to avoid layout shift.

---

## 9. Reference points (Endava, EPAM) — taken and rejected

Both references are large enterprise IT firms, light, type-led and dense with credibility signals.
What was borrowed is the discipline, not the layout:

- **Taken:** restrained neutral grounds with one strong brand colour; service architecture that is
  browsable without a dozen clicks; numbers used as proof rather than decoration; a calm,
  left-aligned reading grid; real sector language instead of marketing adjectives.
- **Rejected:** their mega-menu navigation (this firm has three practices, not thirty), the
  full-bleed corporate photography hero (stock imagery is exactly what the client has been reacting
  to), and EPAM's dense card walls — a small firm imitating an enterprise grid reads as
  over-compensating.

The result keeps Laprrk's scale: one page, three practices, an honest set of numbers, and a
conversion path that takes ninety seconds instead of a lead-qualification funnel.

---

## 10. Navigation: six items, four mega menus

The client asked for the navigation of the current site — **IT Services, Hiring, Training,
Resources, About, Contact** — with a dotCMS-style mega menu behind the first four.

Each panel uses the same three-part anatomy, so the interaction is learned once:

```
┌──────────────┬──────────────────────────────┬──────────────┐
│ GROUP RAIL   │ LINKS FOR THE ACTIVE GROUP   │ FEATURED     │
│ Build/apps   │ Custom software development  │ In practice  │
│ AI and data  │ Web application development  │ a proof      │
│ Cloud/plat.  │ Mobile app development       │ statement    │
│ Quality/sec. │ UI/UX and product discovery  │ [CTA]        │
│              │                              │ NDA note     │
└──────────────┴──────────────────────────────┴──────────────┘
```

- **Rail** carries four groups for IT Services, three each for Hiring, Training and Resources. The
  active card is marked by the same cyan inset bar used in the practice ledger, so the two
  disclosure patterns feel related without being identical.
- **Middle** lists every service in the active group, one line each, with the cyan tick used
  elsewhere in the site. A mono link at the foot of the column jumps to the whole practice.
- **Right** is a tinted panel with a real proof point and the relevant CTA — it earns its space
  instead of holding a decorative illustration.
- **Behaviour:** hover intent opens a panel (160ms grace on leave), hovering another trigger swaps
  the content in place, a click confirms rather than dismisses, and Escape, outside click, item
  selection or leaving the header closes it. Focusing a rail card with the keyboard switches the
  list. Below 960px the whole mega structure is replaced by the six items in the mobile drawer.
- All 45 services plus every page section are reachable from the menus; `src/data/menus.js` is the
  single source of truth.
