# Handoff — Laprrk Technology Solutions website

_Last updated: 20 November 2026 (EPAM-inspired dedicated Service Pages & Hiring Pages, dotCMS Mega Menu with Tabler Icons)_

A ground-up redesign of laprrk.com / laprrk.vercel.app as a **static React 18 + Vite site**. Fast client-side routing, dedicated IT service & hiring pages, mega menu navigation with Tabler icons, and zero backend dependencies. The consultation form hands off to WhatsApp.

---

## 1. Status & Deliverables Matrix

| Item | State | Key Files / References |
| --- | --- | --- |
| Content audit of the old site | Done | `docs/CONTENT-AUDIT.md` |
| Design plan | Done | `docs/DESIGN-PLAN.md` |
| Services Architecture Plan | Done | `services-architecture-plan.md` artifact (8 EPAM-inspired sections) |
| Hero redesign | Done | `src/components/Hero.jsx` (Comer AI–style frame, phone mockup, proof cards, bento row) |
| Header cleanup | Done | `src/components/Header.jsx` (WhatsApp removed from navbar; only `Book a call` remains; active menu indicator) |
| Mega Menu redesign | Done | `src/components/MegaMenu.jsx` (dotCMS 3-column reference layout: rail cards, vertical offerings with Tabler icons, circular `↗` action) |
| Tabler Icons component | Done | `src/components/TablerIcon.jsx` (24x24 SVG Tabler icons with `stroke=currentColor`) |
| Futuristic Typography System | Done | `index.html`, `tokens.css`, `app.css` (Oxanium for headings, Exo 2 for navigation/subheadings, Source Sans 3 for body) |
| Tactile Card-Index FAQ Drawer | Done | `src/components/ui/faq-drawer.jsx`, `src/components/Faq.jsx` (tactile card-index drawer with staggered tabs, cup pull & brand styling applied to Home, Resources, all 17 ServiceDetail pages, and all 10 HiringDetail pages) |
| Dedicated Service Pages | Done | `src/pages/ServiceDetail.jsx` (universal 8-section EPAM-style template with integrated FaqDrawer for all 17 services) |
| Services Data Repository | Done | `src/data/servicesData.js` (complete profiles for all 17 IT services + fallback helper) |
| Dedicated Hiring Pages | Done | `src/pages/HiringDetail.jsx` (universal 8-section template with integrated FaqDrawer for all 10 hiring routes) |
| Hiring Data Repository | Done | `src/data/hiringData.js` (complete profiles for all 10 hiring services + fallback helper) |
| Dynamic Routing | Done | `src/App.jsx` (`/it-services/:slug`, `/services/:slug`, and `/hiring/:slug` client routes) |
| Directory Overviews | Done | `src/pages/Services.jsx` and `src/pages/Hiring.jsx` (interactive links to detail pages) |
| Production Build | Done | `npm run build` compiles `dist/` in ~800ms with 0 warnings/errors |
| Responsive layout | Done | Verified at 1440px, 1024px, 768px, and 390px with zero horizontal overflow |
| Client content sign-off | Outstanding | See §7 |

Run it:

```bash
npm install
npm run dev -- --port 5173 --host   # http://localhost:5173
npm run build                      # -> dist/
npm run preview                    # serve dist/ locally
```

Environment: Node 24 / npm 11 on Windows. Pure React 18 + Vite — strictly zero external heavy router or CSS framework dependencies.

---

## 2. Architecture & Design Principles

### A. Dedicated Service Pages (17 Services at `/it-services/:slug`)
Each of the 17 IT services has its own dedicated page (`src/pages/ServiceDetail.jsx`) populated from `src/data/servicesData.js`:
1. Hero with Breadcrumb (`Home / IT Services / [Title]`), Kicker, Headline, Lead, 3-pill Telemetry bar, and `Scope This Project` CTA.
2. "The Shift" Executive Overview (Common Industry Pitfalls vs Laprrk Delivery Standard).
3. Core Capabilities & Deliverables (4-card grid with Tabler icons and bulleted technical outputs).
4. Technology Ecosystem & Standards (Categorized stack badges + 4 quality governance standards).
5. Delivery Lifecycle & Sprints (4-phase timeline: Discovery, Foundation, Sprints, Hardening).
6. "In Practice" Case Study Spotlight (70% reduction in manual operations in 6 weeks).
7. Technical & Commercial FAQs (Tactile Card-Index FAQ Drawer with staggered tabs and cup pull).
8. Bottom CTA: Universal `<BottomCTA />` component with dial clock telemetry and direct booking trigger.

### B. Dedicated Hiring Pages (10 Hiring Services at `/hiring/:slug`)
Each of the 10 hiring routes has its own dedicated page (`src/pages/HiringDetail.jsx`) populated from `src/data/hiringData.js`:
1. Hero with Breadcrumb (`Home / IT Hiring / [Title]`), Kicker, Headline, Lead, 3-pill Telemetry bar (`5–7 Days`, `88% offer-to-join`, `90-Day replacement`), and `Request a shortlist` CTA.
2. "The Shift" Executive Overview (The Resume Spam Trap vs Practitioner-Led Vetting).
3. Core Capabilities & Candidate Deliverables (4-card grid with Tabler icons and candidate dossiers).
4. Technical Specializations & Hiring Governance (Categorized tech disciplines + 4 hiring standards).
5. Recruitment Lifecycle & Pipeline Progression (4-stage timeline: Intake, Vetting, Shortlist, Offer/Joining).
6. "In Practice" Case Study Spotlight (The First 40 Hires for a US Product Company's India Centre).
7. Technical & Commercial FAQs (Tactile Card-Index FAQ Drawer with staggered tabs, commercial terms, and cup pull).
8. Bottom CTA: Universal `<BottomCTA />` component with dial clock telemetry and direct booking trigger.

### C. The 10 Supported Hiring Services
1. `permanent-recruitment` (Permanent IT Recruitment)
2. `contract-staffing` (Contract Staffing & Contract-to-Hire)
3. `staff-augmentation` (Staff Augmentation & Dedicated Teams)
4. `hire-train-deploy` (Hire–Train–Deploy Programmes)
5. `gcc-setup` (GCC & India Team Setup)
6. `executive-search` (Executive & Leadership Search)
7. `campus-hiring` (Campus Hiring & Fresh Talent Intake)
8. `rpo` (Recruitment Process Outsourcing)
9. `niche-roles` (Niche Engineering Roles)
10. `technical-screening` (Embedded Technical Screening)

### D. Mega Menu Navigation (dotCMS Reference Layout)
- Located in `src/components/MegaMenu.jsx` and styled in `src/styles/app.css`.
- Three-column structure:
  - **Left column**: Practice rail cards with active state, hover intent, and arrow circle indicators.
  - **Middle column**: 2-column grid of sub-menu items, each with a dedicated Tabler icon inside a soft blue container (`src/components/TablerIcon.jsx`), linking directly to the service or hiring slug.
  - **Right column**: Featured spotlight card highlighting a real case study, arrow CTA button, and trust note.

---

## 3. File Map

```
src/
  App.jsx                 route dispatch (/it-services/:slug, /hiring/:slug, etc.)
  main.jsx                React 18 root
  router.jsx              HTML5 pushState router + Link component
  booking.jsx             modal context & useBooking hook
  data/
    site.js               all copy, metrics, timeline, and testimonials (single source of truth)
    menus.js              mega menu navigation structure & Tabler icon mappings
    servicesData.js       data models for all 17 IT services + getServiceData()
    hiringData.js         data models for all 10 hiring routes + getHiringData()
  components/
    Header.jsx            navigation header (WhatsApp removed, mega menu triggers)
    MegaMenu.jsx          dotCMS-inspired 3-column mega menu with Tabler icons
    TablerIcon.jsx        clean SVG Tabler icon library (stroke=currentColor)
    Hero.jsx              Comer AI–style hero (mockup, circuit line, bento row)
    BookingModal.jsx      consultation modal with WhatsApp generation
    BookingForm.jsx       form fields with dynamic need prefill
    PageHero.jsx          sub-page hero component with GlyphTexture
    Reveal.jsx            viewport entry animation wrapper
    Strand.jsx            SVG architecture diagram
    Stack.jsx             technology grid
    Timeline.jsx          engagement milestones
    Evidence.jsx          case studies and stats
    Footer.jsx            site footer
  pages/
    Home.jsx              home page
    Services.jsx          IT services directory overview (links to /it-services/:slug)
    ServiceDetail.jsx     universal 8-section EPAM-style service template
    Hiring.jsx            IT hiring directory overview (links to /hiring/:slug)
    HiringDetail.jsx      universal 8-section EPAM-style hiring template
    TrainingPage.jsx      corporate training practice page
    Resources.jsx         engineering resources & articles
    About.jsx             company about page
    Contact.jsx           contact & office details
    NotFound.jsx          404 page
  styles/
    tokens.css            palette, typography, spacing, radii (strictly light theme)
    app.css               all component, hero, mega menu, and detail page styles
docs/
  CONTENT-AUDIT.md        audit of previous copy & figures
  DESIGN-PLAN.md          palette, typography, wireframes, and design rationale
AGENTS.md                 strict project constraints and engineering rules
```

---

## 4. Verification & Testing

- **Production Build**: Verified with `npm run build` (compiles in ~730ms with 0 errors).
- **HTTP Verification**: Confirmed routes `/hiring/permanent-recruitment`, `/hiring/gcc-setup`, etc. return HTTP 200.
- **Form Verification**: Booking modal prefill and dynamic need selection verified.
