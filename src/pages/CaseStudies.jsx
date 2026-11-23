import { useState, useEffect, useRef } from "react";
import { CASE_STUDIES } from "../data/caseStudiesData";
import { useBooking } from "../booking";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import TablerIcon from "../components/TablerIcon";
import BottomCTA from "../components/BottomCTA";
import FlowButton from "../components/ui/flow-button";

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const { openBooking } = useBooking();
  const triggerRef = useRef(null);
  const modalRef = useRef(null);

  const openStudy = (study) => {
    triggerRef.current = document.activeElement;
    setSelectedStudy(study);
  };

  const closeStudy = () => {
    setSelectedStudy(null);
  };

  // Close overlay on Escape key, trap focus & lock background scroll
  useEffect(() => {
    if (!selectedStudy) return undefined;

    document.body.style.overflow = "hidden";

    // Auto-focus close button
    const closeBtn = modalRef.current?.querySelector(".overlay-close-btn");
    closeBtn?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeStudy();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = Array.from(
          modalRef.current.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((node) => node.offsetParent !== null);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (triggerRef.current && typeof triggerRef.current.focus === "function") {
        triggerRef.current.focus();
      }
    };
  }, [selectedStudy]);

  return (
    <div className="case-studies-page">
      <PageHero
        crumb="Resources / Case Studies"
        title="Representative engagements across build, hire and train."
        lead="Anonymised production briefs, architectural trade-offs, and verified outcomes from our delivery teams in Greater Noida and Louisville."
        facts={[
          { value: "50+", label: "Clients served" },
          { value: "200+", label: "Placed engineers" },
          { value: "500+", label: "Engineers trained" },
        ]}
        actions={
          <FlowButton
            text="Review Brief"
            variant="solid"
            onClick={() => openBooking({ topic: "Case study discussion" })}
          />
        }
      />

      {/* List-style Case Studies Listing with Associated Imagery */}
      <section className="section case-list-section" aria-label="Case studies">
        <div className="shell">
          <div className="case-studies-list">
            {CASE_STUDIES.map((study, idx) => (
              <Reveal as="article" key={study.id} className="case-study-list-row" delay={idx * 60}>
                {/* Media Image Column */}
                <div
                  className="case-row-media"
                  onClick={() => openStudy(study)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openStudy(study);
                    }
                  }}
                  aria-label={`View dossier for ${study.title}`}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="case-row-image"
                    loading="lazy"
                  />
                  <div className="case-media-badges">
                    <span className="case-discipline-badge">{study.badge}</span>
                    <span className="case-sector-tag">{study.sector}</span>
                  </div>
                  <div className="case-media-hero-metric">
                    <span className="media-metric-val">{study.heroMetric}</span>
                    <span className="media-metric-lbl">{study.heroMetricLabel}</span>
                  </div>
                </div>

                {/* Editorial Details Column */}
                <div className="case-row-content">
                  <div className="case-row-meta">
                    <span className="case-discipline-kicker">{study.discipline}</span>
                  </div>

                  <h2
                    className="case-row-title"
                    onClick={() => setSelectedStudy(study)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setSelectedStudy(study)}
                  >
                    {study.title}
                  </h2>

                  <p className="case-row-summary">{study.summary}</p>

                  {/* Verified Results Teaser Row */}
                  <div className="case-metrics-preview-row">
                    {study.results.slice(0, 3).map((res, rIdx) => (
                      <div key={rIdx} className="metric-preview-box">
                        <span className="metric-preview-val">{res.num}</span>
                        <span className="metric-preview-lbl">{res.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Row: Tech Stack & Action Button */}
                  <div className="case-row-foot">
                    <div className="case-stack-chips-row">
                      {study.techStack.slice(0, 5).map((tech, tIdx) => (
                        <span key={tIdx} className="case-stack-chip">
                          {tech}
                        </span>
                      ))}
                      {study.techStack.length > 5 && (
                        <span className="case-stack-chip more-tag">
                          +{study.techStack.length - 5} more
                        </span>
                      )}
                    </div>

                    <FlowButton
                      text="View Dossier"
                      size="sm"
                      variant="solid"
                      onClick={() => setSelectedStudy(study)}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Full Detail Modal Overlay */}
      {selectedStudy && (
        <div
          className="overlay-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-title"
          onClick={closeStudy}
        >
          <div
            className="overlay-modal-panel overlay-case-panel"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="overlay-header-bar">
              <div className="overlay-header-tags">
                <span className="case-discipline-badge">{selectedStudy.badge}</span>
                <span className="case-sector-tag">{selectedStudy.sector}</span>
                <span className="overlay-timing-chip">{selectedStudy.discipline}</span>
              </div>
              <button
                type="button"
                className="overlay-close-btn"
                onClick={closeStudy}
                aria-label="Close case study overlay"
              >
                <TablerIcon name="x" size={20} />
              </button>
            </div>

            {/* Modal Scrollable Case Study Body */}
            <div className="overlay-content-scroll">
              {selectedStudy.image && (
                <div className="overlay-hero-banner-wrap">
                  <img
                    src={selectedStudy.image}
                    alt={selectedStudy.title}
                    className="overlay-hero-banner"
                  />
                </div>
              )}
              <div className="case-overlay-hero-banner">
                <div className="case-overlay-title-group">
                  <span className="overlay-kicker">Verified Client Engagement</span>
                  <h2 id="modal-case-title" className="overlay-article-title">
                    {selectedStudy.title}
                  </h2>
                </div>

                <div className="case-overlay-stat-highlight">
                  <span className="highlight-metric-val">{selectedStudy.heroMetric}</span>
                  <span className="highlight-metric-lbl">{selectedStudy.heroMetricLabel}</span>
                </div>
              </div>

              <p className="overlay-article-lead">{selectedStudy.summary}</p>

              {/* 2-Column Problem & Solution Architecture */}
              <div className="case-overlay-challenge-solution-grid">
                <div className="case-narrative-card challenge-card">
                  <div className="narrative-card-header">
                    <TablerIcon name="alert-triangle" size={18} />
                    <h3>{selectedStudy.challenge.title}</h3>
                  </div>
                  <p>{selectedStudy.challenge.body}</p>
                </div>

                <div className="case-narrative-card solution-card">
                  <div className="narrative-card-header">
                    <TablerIcon name="cpu" size={18} />
                    <h3>{selectedStudy.solution.title}</h3>
                  </div>
                  <p>{selectedStudy.solution.body}</p>
                </div>
              </div>

              {/* Technical Architecture Workflow */}
              <div className="case-overlay-architecture-section">
                <div className="architecture-section-header">
                  <TablerIcon name="git-merge" size={18} />
                  <h3>Production Architecture & Delivery Workflow</h3>
                </div>
                <div className="architecture-steps-grid">
                  {selectedStudy.architecture.map((arch, aIdx) => (
                    <div key={aIdx} className="architecture-step-card">
                      <div className="arch-step-num">{arch.step}</div>
                      <h4 className="arch-step-title">{arch.title}</h4>
                      <p className="arch-step-desc">{arch.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Grid */}
              <div className="case-overlay-results-section">
                <div className="results-section-header">
                  <TablerIcon name="chart-bar" size={18} />
                  <h3>Verified Quantitative Outcomes</h3>
                </div>
                <div className="results-quad-grid">
                  {selectedStudy.results.map((res, rIdx) => (
                    <div key={rIdx} className="result-metric-card">
                      <div className="result-metric-val">{res.num}</div>
                      <div className="result-metric-lbl">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Tech Stack */}
              <div className="case-overlay-stack-section">
                <span className="stack-section-title">Production Tech Stack:</span>
                <div className="stack-tags-cluster">
                  {selectedStudy.techStack.map((tech, sIdx) => (
                    <span key={sIdx} className="stack-pill-tag">
                      <TablerIcon name="check" size={13} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Executive Client Quote */}
              <blockquote className="case-overlay-quote-card">
                <p className="quote-text">"{selectedStudy.quote}"</p>
                <footer className="quote-author-footer">
                  <cite>{selectedStudy.quoteAuthor}</cite>
                </footer>
              </blockquote>

              {/* Modal Footer CTA Strip */}
              <div className="overlay-article-footer">
                <div className="footer-note">
                  <strong>NDA Assurance:</strong> Detailed technical workflows and code samples can be
                  demonstrated in a live call under mutual NDA.
                </div>
                <div className="footer-actions">
                  <FlowButton
                    text="Discuss Engagement"
                    variant="solid"
                    onClick={() => {
                      const studyTitle = selectedStudy.title;
                      closeStudy();
                      openBooking({
                        topic: `Case Study Brief: ${studyTitle}`,
                        prefill: `I reviewed your case study "${studyTitle}" and would like to explore a similar engagement for our team.`,
                      });
                    }}
                  />
                  <FlowButton
                    text="Close Preview"
                    variant="primary"
                    onClick={closeStudy}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomCTA topic="Case studies discussion" />
    </div>
  );
}
