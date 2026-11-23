# Laprrk Technology Solutions Website

Modern static website for **Laprrk Technology Solutions LLP**, an IT services, IT hiring, and corporate technical training company with operations in Greater Noida (India) and Louisville (USA).

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with design token architecture (`src/styles/tokens.css` and `src/styles/app.css`)
- **Typography**: Oxanium (Headings), Exo 2 (Navigation & Subheadings), Source Sans 3 (Body)
- **Icons**: Custom Tabler SVG Icon system (`src/components/TablerIcon.jsx`)
- **Routing**: Zero-dependency client-side SPA routing (`src/router.jsx`)
- **Submission**: Stateless consultation forms dispatching directly to WhatsApp and mailto links

## Project Structure

```
laprrk/
├── public/                 # Static assets, branding, and images
│   ├── brand/              # Logos and wordmarks
│   ├── images/             # Case study and blog imagery
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/         # Reusable UI sections, navigation, and modals
│   │   ├── Header.jsx      # Sticky navbar with mega menus
│   │   ├── Footer.jsx      # Site footer with official channels
│   │   ├── MegaMenu.jsx    # Multi-panel & card dropdown menus
│   │   └── TablerIcon.jsx  # SVG stroke icons
│   ├── data/               # Structured content & menu definitions
│   │   ├── site.js         # Site metadata, contacts, social links, FAQs
│   │   ├── menus.js        # Mega menu navigation architecture
│   │   ├── servicesData.js # Dedicated service detail pages data
│   │   ├── hiringData.js   # Dedicated hiring practice pages data
│   │   └── trainingData.js # Corporate training cohorts data
│   ├── pages/              # Top-level page routes
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Terms.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── HiringDetail.jsx
│   │   ├── TrainingPage.jsx
│   │   ├── Blog.jsx
│   │   └── CaseStudies.jsx
│   └── styles/
│       ├── tokens.css      # Core brand palette, radii, shadows, fonts
│       └── app.css         # Component styling and layout system
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start local development server
npm run dev
```

The application runs at `http://localhost:5173/`.

### Production Build

```bash
# Build optimized static production bundle in dist/
npm run build

# Preview production build locally
npm run preview
```

## License

Commercial rights reserved by Laprrk Technology Solutions LLP.

