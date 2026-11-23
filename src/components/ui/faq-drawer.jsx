import { useState, useId } from "react";
import { FAQS, CONTACT } from "../../data/site";
import { useBooking } from "../../booking";

/**
 * FAQ Drawer - Tactile Card-Index UI component
 * Tuned to Laprrk Technology Solutions brand palette and typography:
 * - Headings: Oxanium (700)
 * - Navigation & Subheadings: Exo 2 (600)
 * - Body text: Source Sans 3 (400-500)
 * - Monospace & Index: Oxanium (600)
 */

const DEFAULT_CARDS = [
  {
    id: "locations",
    tab: "Offices",
    q: "Where are you based, and who do you work with?",
    a: "Offices in Greater Noida West, India and Louisville, Kentucky. Clients are across India and the United States. The two locations overlap: US clients meet us during their own business day while delivery continues in India.",
  },
  {
    id: "nda",
    tab: "Security",
    q: "Will you sign an NDA before we share details?",
    a: "Yes, from the first conversation if you prefer. Team members are bound by confidentiality terms, and access to client systems is limited to the people working on the engagement, with MFA and access removed at exit.",
  },
  {
    id: "kickoff",
    tab: "Process",
    q: "How does an engagement actually start?",
    a: "A 30-minute call, then a written proposal inside 48 hours covering scope, approach, team, timeline and commercials. If it's right, we sign, agree a kickoff date and name one person who stays with you for the whole engagement.",
  },
  {
    id: "ip",
    tab: "IP & Code",
    q: "Who owns the code and the IP?",
    a: "You do. Work happens in repositories and cloud accounts you own, with IP assignment written into the agreement.",
  },
  {
    id: "pricing",
    tab: "Commercials",
    q: "How do you price work, and how do we pay?",
    a: "Fixed scope, monthly team or milestone billing for projects; success fees for permanent hiring; per-batch pricing for training. Indian clients are invoiced in INR with GST-compliant invoices, international clients in USD.",
  },
  {
    id: "scale",
    tab: "Scope",
    q: "Do you work with companies smaller than yours?",
    a: "Yes. Engagements range from one contract engineer or a single key hire to a 40-person centre build and a 120-person training programme. The model scales down as readily as it scales up.",
  },
];

const TAB_STATIONS = [0.04, 0.36, 0.68];
const tabStation = (i) => TAB_STATIONS[i % TAB_STATIONS.length];
const depthOf = (i, n) => (n <= 1 ? 0 : (n - 1 - i) / (n - 1));
const cardNumber = (i) => `Q.${String(i + 1).padStart(2, "0")}`;

export function FaqDrawer({
  label = "FAQ Index",
  title = "Questions that come up before signing.",
  lead = "The practical questions every engineering leader and hiring partner asks before kickoff, filed where you can inspect them. Pull a card to read it.",
  drawer = "Laprrk · Q–Z",
  count = 6,
  open = "1",
  single = true,
  askNote = "Have a specific project or engineering role in mind? Talk directly with a technical lead.",
  askLabel = "Book a call",
  askHref = `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent("Hello Laprrk, I have a question about your services.")}`,
  onAsk,
  cards = DEFAULT_CARDS,
  className = "",
  style = {},
}) {
  const uid = useId().replace(/:/g, "fq");
  const [openCard, setOpenCard] = useState(open === "none" ? null : Number(open) - 1);
  const { openBooking } = useBooking ? useBooking() : { openBooking: null };

  const displayCards = cards.slice(0, count);
  const n = displayCards.length;

  const handleToggle = (index, e) => {
    // When using native <details>, let the state synchronize
    if (single) {
      setOpenCard((prev) => (prev === index ? null : index));
    }
  };

  const handleAsk = (e) => {
    if (onAsk) {
      e.preventDefault();
      onAsk();
    } else if (openBooking) {
      e.preventDefault();
      openBooking({ topic: "General inquiry" });
    }
  };

  return (
    <>
      <style>{CSS}</style>
      <section
        className={`fq ${className}`}
        data-block="faq-drawer"
        style={{ width: "100%", ...style }}
        aria-labelledby={`${uid}-title`}
      >
        <div className="fq-wrap">
          <header className="fq-head">
            {label && <p className="fq-label">{label}</p>}
            <h2 className="fq-title" id={`${uid}-title`}>
              {title}
            </h2>
            {lead && <p className="fq-lead">{lead}</p>}
          </header>

          <div className="fq-cabinet">
            <div className="fq-drawer">
              <div className="fq-tray">
                {displayCards.map((c, i) => {
                  const isOpen = single ? openCard === i : undefined;
                  const depth = depthOf(i, n).toFixed(3);
                  const tabAt = tabStation(i);

                  return (
                    <details
                      key={c.id || c.q}
                      className="fq-card"
                      name={single ? uid : undefined}
                      open={isOpen}
                      style={{
                        "--k": i,
                        "--depth": depth,
                        "--tab-at": tabAt,
                      }}
                      onToggle={(e) => {
                        if (e.target.open && single) {
                          setOpenCard(i);
                        } else if (!e.target.open && single && openCard === i) {
                          setOpenCard(null);
                        }
                      }}
                    >
                      <summary className="fq-edge">
                        <span className="fq-tab" aria-hidden="true">
                          {c.tab || "Topic"}
                        </span>
                        <span className="fq-no" aria-hidden="true">
                          {cardNumber(i)}
                        </span>
                        <span className="fq-q">{c.q}</span>
                        <span className="fq-mark" aria-hidden="true" />
                      </summary>
                      <div className="fq-face">
                        <p className="fq-a">{c.a}</p>
                        <p className="fq-filed" aria-hidden="true">
                          Filed under {c.tab || "Engineering"} · {cardNumber(i)}
                        </p>
                      </div>
                    </details>
                  );
                })}
              </div>

              {/* The Drawer Front with Label Holder and Cup Pull */}
              <div className="fq-front" aria-hidden="true">
                <span className="fq-holder">
                  <span className="fq-holder-card">{drawer}</span>
                </span>
                <span className="fq-pull" />
              </div>
            </div>

            {/* The Ask Us Action Bar */}
            <div className="fq-ask">
              <p className="fq-note">{askNote}</p>
              <a
                className="fq-key"
                href={askHref}
                onClick={handleAsk}
                target={askHref.startsWith("http") ? "_blank" : undefined}
                rel={askHref.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{askLabel}</span>
                <span className="fq-key-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqDrawer;

const CSS = `
/* ------------------------------------------------------------------ FAQ Drawer Tokens (Laprrk Brand System) */
.fq {
  color-scheme: light;
  --tui-desk: var(--canvas);
  --tui-face: var(--surface);
  --tui-face-hi: #ffffff;
  --tui-face-lo: var(--canvas-2);
  --tui-well: #d7e4ef;
  --tui-skirt: #a0b6cb;
  --tui-ink: var(--ink);
  --tui-ink-2: var(--ink-soft);
  --tui-rule: rgba(10, 62, 150, 0.12);
  --tui-cap: var(--navy);
  --tui-cap-hi: var(--blue-900);
  --tui-cap-skirt: #031427;
  --tui-cap-ink: #ffffff;
  --tui-cap-hl: rgba(18, 175, 216, 0.35);
  --tui-hl: rgba(255, 255, 255, 0.85);
  --tui-sh: 6 42 85;
  --tui-sh-a: 0.18;
  --tui-focus: var(--cyan-500);
  --tui-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --tui-well-fill: linear-gradient(to bottom, #cbdbe9, #dce7f2 55%);
  --tui-raised:
    inset 0 1px 0 var(--tui-hl),
    0 0 0 1px rgba(6, 42, 85, 0.08),
    0 2px 4px rgba(6, 42, 85, 0.08),
    0 12px 30px -8px rgba(6, 42, 85, 0.14);
  --tui-inset:
    inset 0 3px 4px -2px rgba(6, 42, 85, 0.35),
    inset 0 10px 14px -9px rgba(6, 42, 85, 0.22),
    inset 0 0 0 1px rgba(6, 42, 85, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.6),
    0 1px 0 var(--tui-hl);
  --tui-pressed:
    inset 0 4px 5px -3px rgba(6, 42, 85, 0.4),
    0 1px 0 var(--tui-hl);

  /* Card Stock: Clean archival technical card with subtle blue hint */
  --fq-paper: #f8fbfe;
  --fq-type: var(--ink);
  --fq-type-2: var(--ink-soft);
  --fq-accent: var(--blue-800);
  --fq-rule: rgba(10, 62, 150, 0.08);
  --fq-rule-2: rgba(10, 62, 150, 0.28);
  --fq-drop: rgba(6, 42, 85, 0.18);

  /* Typography variables */
  --fq-title-font: var(--font-display), "Oxanium", system-ui, sans-serif;
  --fq-sub-font: var(--font-subheading), "Exo 2", system-ui, sans-serif;
  --fq-body-font: var(--font-body), "Source Sans 3", system-ui, sans-serif;
  --fq-mono-font: var(--font-mono), "Oxanium", monospace;

  position: relative;
  container: fq / inline-size;
  interpolate-size: allow-keywords;
  background: var(--tui-desk);
  color: var(--tui-ink);
  font: 400 15px/1.55 var(--fq-body-font);
  -webkit-font-smoothing: antialiased;
}

.fq *, .fq *::before, .fq *::after {
  box-sizing: border-box;
}

.fq-head > *, .fq-card p, .fq-ask p {
  margin: 0;
}

/* ------------------------------------------------------------------ layout */
.fq-wrap {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.35fr);
  gap: 40px clamp(40px, 6cqi, 104px);
  align-items: start;
  width: min(100% - 2 * clamp(20px, 5cqi, 64px), 1280px);
  margin-inline: auto;
  padding-block: clamp(56px, 7vw, 104px);
}

.fq-head {
  position: sticky;
  top: 96px;
  padding-top: 18px;
}

.fq-head .fq-label {
  margin-bottom: 14px;
  font-family: var(--fq-mono-font);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--blue-800);
}

.fq-title {
  font-family: var(--fq-title-font);
  font-size: clamp(30px, 3.8cqi, 48px);
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.1;
  color: var(--ink);
  text-wrap: balance;
}

.fq-head .fq-lead {
  margin-top: 20px;
  max-width: 38ch;
  font-family: var(--fq-body-font);
  font-size: clamp(15px, 1.25cqi, 17px);
  line-height: 1.55;
  color: var(--ink-soft);
  text-wrap: pretty;
}

/* ------------------------------------------------------------------ the drawer box */
.fq-drawer {
  position: relative;
  isolation: isolate;
  padding: 12px 12px 0;
  border-radius: 16px;
  background: var(--tui-face);
  box-shadow: var(--tui-raised);
  border: 1px solid rgba(10, 62, 150, 0.08);
}

/* The tray */
.fq-tray {
  display: grid;
  padding: 44px 14px 18px;
  border-radius: 10px 10px 4px 4px;
  background: var(--tui-well-fill);
  box-shadow: var(--tui-inset);
}

/* ------------------------------------------------------------------ a card */
.fq-card {
  --shade: calc(var(--depth, 0) * 0.07);
  position: relative;
  margin-inline: calc(var(--depth, 0) * 5px);
  border-radius: 6px 6px 2px 2px;
  background:
    linear-gradient(rgba(10, 62, 150, var(--shade)), rgba(10, 62, 150, var(--shade))),
    var(--fq-paper);
  color: var(--fq-type);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.98),
    inset 0 2px 0 rgba(10, 62, 150, 0.03),
    0 -1px 0 rgba(10, 62, 150, 0.08),
    0 -7px 12px -5px var(--fq-drop);
  transition: transform 240ms var(--tui-ease), box-shadow 240ms var(--tui-ease);
}

.fq-card:first-child {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.98),
    0 -1px 0 rgba(10, 62, 150, 0.07);
}

.fq-card:not([open]):hover {
  transform: translateY(-4px);
}

.fq-card[open] {
  z-index: 2;
  margin-top: 10px;
  transform: translateY(-12px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.98),
    0 -5px 10px -4px var(--fq-drop),
    0 24px 34px -16px var(--fq-drop),
    0 2px 4px rgba(10, 62, 150, 0.1);
}

/* Card edge (summary button) */
.fq-edge {
  display: grid;
  grid-template-columns: 5.4ch minmax(0, 1fr) auto;
  align-items: baseline;
  column-gap: 12px;
  padding: 16px 20px 22px;
  list-style: none;
  cursor: pointer;
  border-radius: inherit;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.fq-edge::-webkit-details-marker {
  display: none;
}

.fq-edge::marker {
  content: '';
}

.fq-edge:focus-visible {
  outline: 2px solid var(--tui-focus);
  outline-offset: -3px;
}

.fq-no {
  font-family: var(--fq-mono-font);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--blue-800);
}

.fq-q {
  font-family: var(--fq-sub-font);
  font-size: 15.5px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--ink);
  text-wrap: pretty;
}

.fq-mark {
  width: 14px;
  height: 14px;
  align-self: center;
  position: relative;
  margin-left: 8px;
}

.fq-mark::before,
.fq-mark::after {
  content: '';
  position: absolute;
  left: 1px;
  right: 1px;
  top: 6px;
  height: 1.5px;
  background: var(--blue-800);
  border-radius: 1px;
}

.fq-mark::after {
  transform: rotate(90deg);
  transition: transform 220ms var(--tui-ease);
}

.fq-card[open] .fq-mark::after {
  transform: rotate(0deg);
}

/* Staggered Tab */
.fq-tab {
  position: absolute;
  bottom: 100%;
  left: calc(var(--tab-at, 0) * 100%);
  height: 20px;
  padding: 3px 12px 0;
  border-radius: 6px 6px 0 0;
  background:
    linear-gradient(rgba(10, 62, 150, var(--shade)), rgba(10, 62, 150, var(--shade))),
    var(--fq-paper);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.98),
    0 -4px 7px -4px var(--fq-drop);
  font-family: var(--fq-sub-font);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--blue-800);
  white-space: nowrap;
  pointer-events: none;
}

/* The Face */
.fq-card::details-content {
  block-size: 0;
  overflow: clip;
  transition: block-size 320ms var(--tui-ease), content-visibility 320ms allow-discrete;
}

.fq-card[open]::details-content {
  block-size: auto;
}

.fq-face {
  margin: -6px 20px 0;
  padding: 16px 0 24px calc(5.4ch + 12px);
  border-top: 3px double var(--fq-rule-2);
  font-family: var(--fq-body-font);
  font-size: 14.5px;
  line-height: 26px;
  color: var(--ink-soft);
  background: repeating-linear-gradient(to bottom, transparent 0 25px, var(--fq-rule) 25px 26px) 0 20px / 100% calc(100% - 42px) no-repeat;
}

.fq-a {
  max-width: 62ch;
  color: var(--ink-soft);
}

.fq-filed {
  margin-top: 24px;
  font-family: var(--fq-mono-font);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--ink-mute);
  text-align: right;
}

/* ------------------------------------------------------------------ the drawer front */
.fq-front {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 12px;
  margin: 0 -12px;
  padding: 18px 0 20px;
  border-radius: 0 0 15px 15px;
  background: linear-gradient(to bottom, var(--surface-2), var(--surface));
  box-shadow:
    inset 0 1px 0 var(--tui-hl),
    inset 0 2px 0 rgba(6, 42, 85, 0.06),
    0 -1px 0 rgba(6, 42, 85, 0.08);
}

.fq-holder {
  display: block;
  padding: 3px;
  border-radius: 4px;
  background: linear-gradient(#d3e1ee, #f4f8fc);
  box-shadow:
    0 0 0 1px rgba(6, 42, 85, 0.12),
    0 1px 0 var(--tui-hl),
    inset 0 1px 1px rgba(6, 42, 85, 0.2);
}

.fq-holder-card {
  display: block;
  min-width: 140px;
  padding: 4px 14px 3px;
  border-radius: 2px;
  background: var(--fq-paper);
  box-shadow: inset 0 1px 2px rgba(6, 42, 85, 0.18);
  font-family: var(--fq-sub-font);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  color: var(--ink);
}

.fq-pull {
  display: block;
  width: 114px;
  height: 22px;
  border-radius: 3px 3px 57px 57px / 3px 3px 22px 22px;
  background: var(--tui-well-fill);
  box-shadow: var(--tui-inset);
}

/* ------------------------------------------------------------------ ask bar */
.fq-ask {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px 24px;
  margin-top: 28px;
  padding-inline: 4px;
}

.fq-note {
  font-family: var(--fq-body-font);
  font-size: 14.5px;
  color: var(--ink-soft);
  max-width: 44ch;
}

.fq-key {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 24px;
  border-radius: 9999px;
  font-family: var(--fq-sub-font);
  font-size: 14px;
  font-weight: 600;
  color: var(--tui-cap-ink);
  text-decoration: none;
  background:
    radial-gradient(120% 90% at 50% 0%, rgba(255, 255, 255, 0.15), transparent 60%),
    linear-gradient(var(--tui-cap-hi), var(--tui-cap));
  box-shadow:
    inset 0 1px 0 var(--tui-cap-hl),
    0 3px 0 var(--tui-cap-skirt),
    0 6px 16px -4px rgba(6, 42, 85, 0.35);
  cursor: pointer;
  transition: transform 120ms var(--tui-ease), box-shadow 120ms var(--tui-ease);
}

.fq-key:hover {
  transform: translateY(-1px);
  box-shadow:
    inset 0 1px 0 var(--tui-cap-hl),
    0 4px 0 var(--tui-cap-skirt),
    0 8px 20px -4px rgba(6, 42, 85, 0.45);
}

.fq-key:active {
  transform: translateY(2px);
  box-shadow: var(--tui-pressed);
}

.fq-key:focus-visible {
  outline: 2px solid var(--tui-focus);
  outline-offset: 3px;
}

.fq-key-arrow {
  font-size: 15px;
  transition: transform 150ms ease;
}

.fq-key:hover .fq-key-arrow {
  transform: translate(2px, -2px);
}

/* ------------------------------------------------------------------ responsive container */
@container fq (max-width: 959px) {
  .fq-wrap {
    grid-template-columns: minmax(0, 1fr);
  }
  .fq-head {
    position: static;
    padding-top: 0;
    max-width: 640px;
  }
}

@container fq (max-width: 559px) {
  .fq-drawer {
    padding: 8px 8px 0;
  }
  .fq-tray {
    padding: 36px 8px 14px;
  }
  .fq-card {
    margin-inline: calc(var(--depth, 0) * 3px);
  }
  .fq-edge {
    grid-template-columns: minmax(0, 1fr) auto;
    padding: 14px 14px 20px;
    font-size: 14px;
    line-height: 21px;
  }
  .fq-no {
    display: none;
  }
  .fq-tab {
    font-size: 9.5px;
    padding-inline: 8px;
  }
  .fq-face {
    margin-inline: 14px;
    padding-left: 0;
    font-size: 13.5px;
  }
  .fq-front {
    margin-inline: -8px;
  }
  .fq-ask {
    flex-direction: column;
    align-items: stretch;
  }
  .fq-key {
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fq-card,
  .fq-mark::after,
  .fq-key,
  .fq-card::details-content {
    transition: none;
  }
  .fq-card:not([open]):hover {
    transform: none;
  }
}
`;

