import { useState } from "react";
import Reveal from "./Reveal";
import TablerIcon from "./TablerIcon";

const PILLARS_DATA = [
  {
    id: "build",
    pillar: "Build",
    icon: "code",
    sector: "Custom Software & Applied AI",
    title: "Intelligent Document Automation & Policy Extraction",
    body: "An insurance broker network was losing dozens of hours manually re-keying policy declarations, loss runs, and commercial applications across three legacy systems. We engineered a secure document AI assistant that classifies, extracts, and validates complex policy forms with 95%+ precision, routing exceptions to reviewers before committing clean data to core agency backends.",
    metrics: [
      { value: "70%", label: "less manual entry" },
      { value: "6 wks", label: "to first release" },
      { value: "95%+", label: "field accuracy" },
    ],
    image: "/images/architecture-desk.jpg",
    imageAlt: "System architecture blueprint on a desk beside engineering tools",
    tagline: "Software built to run in your repositories with zero vendor lock-in.",
  },
  {
    id: "hire",
    pillar: "Hire",
    icon: "users",
    sector: "IT Recruitment & GCC Setup",
    title: "40-Engineer GCC Engineering Subsidiary Mobilisation",
    body: "A high-growth US SaaS product company established its India engineering subsidiary with Laprrk. We deployed a phased acquisition strategy—placing founding technical leadership first, calibrating full-stack pods next, and delivering initial vetted shortlists in 6 business days to assemble a high-retention 40-engineer product centre in eight months.",
    metrics: [
      { value: "40", label: "joiners in 8 months" },
      { value: "6 days", label: "to first shortlist" },
      { value: "88%", label: "offer acceptance" },
    ],
    image: "/images/office-facade.jpg",
    imageAlt: "Modern enterprise product centre office",
    tagline: "Every candidate screened by active practitioners who ship production code.",
  },
  {
    id: "train",
    pillar: "Train",
    icon: "school",
    sector: "Corporate Tech Upskilling",
    title: "Enterprise GenAI & Production Cloud Architecture Cohort",
    body: "A global financial technology enterprise enrolled 120 engineers in a 12-week intensive upskilling program. Combining live sandbox cloud architectures with production capstone projects and rigorous pre/post benchmark rubrics, cohorts spent ~70% of their time in active labs, achieving a 38% average assessment score lift.",
    metrics: [
      { value: "120", label: "engineers upskilled" },
      { value: "38%", label: "average score lift" },
      { value: "~70%", label: "hands-on lab time" },
    ],
    image: "/images/training-lab.jpg",
    imageAlt: "Enterprise engineers in an active technical training lab",
    tagline: "~70% hands-on lab time, concluding with a verified production capstone.",
  },
];

export default function Evidence({
  title = "Work you can check, not just read.",
  intro = "Three verified production engagements across our core pillars — Build, Hire, and Train. Client names stay private under mutual NDA; the architectural constraints, verified metrics, and delivery timelines do not.",
  id = "work",
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = PILLARS_DATA[activeIdx];

  return (
    <section className="section evidence evidence-showcase-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="shell">
        <Reveal className="section-head evidence-section-head">
          <div className="section-head-title-col">
            <span className="section-kicker-cyan">Verified Client Engagements</span>
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
          <div className="section-head-intro-col">
            <p className="evidence-head-lead">{intro}</p>
          </div>
        </Reveal>

        {/* 2-Column Split: Picture on Left + Three Pillar Cards on Right */}
        <div className="evidence-split-layout">
          {/* Left Column: Dynamic Visual Showcase */}
          <div
            className="evidence-visual-col"
            role="tabpanel"
            id={`evidence-panel-${activeItem.id}`}
            aria-labelledby={`evidence-tab-${activeItem.id}`}
          >
            <div className="evidence-figure-frame">
              <img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.imageAlt}
                className="evidence-visual-img"
                width="1184"
                height="880"
                loading="lazy"
                decoding="async"
              />
              <div className="evidence-visual-overlay">
                <div className="evidence-overlay-badge">
                  <span className="evidence-overlay-dot" aria-hidden="true" />
                  <span>{activeItem.pillar} Engagement</span>
                </div>
                <p className="evidence-overlay-text">{activeItem.tagline}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Three Text Cards for Build, Hire, Train */}
          <div
            className="evidence-cards-col"
            role="tablist"
            aria-label="Engagements across Build, Hire, Train"
            onKeyDown={(e) => {
              if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                e.preventDefault();
                const next = (activeIdx + 1) % PILLARS_DATA.length;
                setActiveIdx(next);
                document.getElementById(`evidence-tab-${PILLARS_DATA[next].id}`)?.focus();
              } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                e.preventDefault();
                const prev = (activeIdx - 1 + PILLARS_DATA.length) % PILLARS_DATA.length;
                setActiveIdx(prev);
                document.getElementById(`evidence-tab-${PILLARS_DATA[prev].id}`)?.focus();
              }
            }}
          >
            {PILLARS_DATA.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <article
                  key={item.id}
                  id={`evidence-tab-${item.id}`}
                  aria-controls={`evidence-panel-${activeItem.id}`}
                  className={`evidence-pillar-card ${isActive ? "is-active" : ""}`}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  aria-selected={isActive}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIdx(idx);
                    }
                  }}
                >
                  <div className="pillar-card-top">
                    <span className="pillar-badge">
                      <TablerIcon name={item.icon} size={14} />
                      <span>{item.pillar}</span>
                    </span>
                    <span className="pillar-sector">{item.sector}</span>
                  </div>

                  <h3 className="pillar-card-title">{item.title}</h3>

                  {/* Mobile image right above the paragraph for mobile mode */}
                  <div className="pillar-mobile-frame" aria-hidden="true">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="pillar-mobile-img"
                      loading="lazy"
                    />
                    <div className="pillar-mobile-tagline">
                      <span>{item.tagline}</span>
                    </div>
                  </div>

                  <p className="pillar-card-desc">{item.body}</p>

                  <div className="pillar-metrics-row">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="pillar-metric-item">
                        <span className="pillar-metric-val">{m.value}</span>
                        <span className="pillar-metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
