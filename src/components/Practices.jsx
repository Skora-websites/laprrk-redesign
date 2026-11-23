import { PRACTICES } from "../data/site";
import { useBooking } from "../booking";
import { Link } from "../router";
import Reveal from "./Reveal";
import FlowButton from "./ui/flow-button";
import { ContainerScroll, CardSticky } from "./ui/cards-stack";

const TOPICS = {
  build: "Build software or AI",
  hire: "Hire engineers",
  train: "Train a team",
};

const CTA_LABELS = {
  build: "Scope a Build",
  hire: "Calibrate Shortlist",
  train: "Explore Cohorts",
};

export default function Practices() {
  const { openBooking } = useBooking();

  return (
    <section className="section practices" id="practices" aria-labelledby="practices-title">
      <div className="shell">
        <div className="practices-stack-layout">
          {/* Sticky Left Rail Header */}
          <aside className="practices-sticky-sidebar">
            <Reveal className="practices-sidebar-content">
              <span className="practices-kicker">
                <span className="practices-dot" aria-hidden="true" />
                Three Core Disciplines
              </span>
              <h2 id="practices-title" className="practices-title">
                Three practices, one standard of work.
              </h2>
              <p className="practices-lede">
                The engineers who build your systems screen your candidates and teach your teams.
                Scroll through our three disciplines to see how each practice operates with zero hand-offs.
              </p>

              <div className="practices-rail-index" aria-hidden="true">
                {PRACTICES.map((p, idx) => (
                  <a key={p.id} href={`#practice-card-${p.id}`} className="practices-rail-item">
                    <span className="rail-num">0{idx + 1}</span>
                    <span className="rail-name">{p.name}</span>
                    <span className="rail-line" />
                  </a>
                ))}
              </div>

              <div className="practices-sidebar-cta">
                <FlowButton
                  text="Book Consultation"
                  size="sm"
                  variant="solid"
                  onClick={() => openBooking({ topic: "General Engineering Inquiry" })}
                />
                <span className="practices-cta-note">
                  Written proposal in 48h · NDA upfront
                </span>
              </div>
            </Reveal>
          </aside>

          {/* Right Scroll Stacking Cards */}
          <div className="practices-stack-column">
            <ContainerScroll className="practices-scroll-track">
              {PRACTICES.map((practice, index) => (
                <CardSticky
                  key={practice.id}
                  id={`practice-card-${practice.id}`}
                  index={index}
                  incrementY={32}
                  incrementZ={14}
                  topOffset="calc(var(--header-h, 72px) + 24px)"
                  className="practice-stack-card"
                >
                  <div className="card-top-header">
                    <div className="card-title-group">
                      <span className="card-index-tag">0{index + 1}</span>
                      <h3 className="card-practice-name">{practice.name}</h3>
                    </div>
                    <span className="card-meta-pill">{practice.meta}</span>
                  </div>

                  <p className="card-practice-lead">{practice.lead}</p>

                  <p className="card-practice-summary">{practice.summary}</p>

                  <div className="card-capabilities-section">
                    <span className="capabilities-label">Core Capabilities &amp; Squads</span>
                    <div className="card-chips-grid">
                      {practice.services.map((svc) => (
                        <span key={svc} className="card-chip">
                          <span className="chip-tick" aria-hidden="true">✓</span>
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-proof-strip">
                    <span className="proof-tag">In Practice</span>
                    <p className="proof-text">{practice.proof}</p>
                  </div>

                  <div className="card-footer-actions">
                    <Link className="link-inline card-detail-link" to={practice.page}>
                      {practice.pageLabel}
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M3.5 8h9M9.2 4.7L12.5 8l-3.3 3.3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <FlowButton
                      text={CTA_LABELS[practice.id] || "Consult Practice"}
                      size="sm"
                      variant="solid"
                      onClick={() => openBooking({ topic: TOPICS[practice.id] })}
                    />
                  </div>
                </CardSticky>
              ))}
            </ContainerScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
