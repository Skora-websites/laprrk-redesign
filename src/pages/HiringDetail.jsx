import { useState } from "react";
import { getHiringData } from "../data/hiringData";
import { useBooking } from "../booking";
import { useRouter } from "../router";
import TablerIcon from "../components/TablerIcon";
import Reveal from "../components/Reveal";
import FaqDrawer from "../components/ui/faq-drawer";
import Timeline from "../components/ui/timeline";
import BottomCTA from "../components/BottomCTA";
import HeroBackdrop from "../components/HeroBackdrop";
import FlowButton from "../components/ui/flow-button";

function getNormalizedMatrix(rawMatrix, hiringTitle) {
  if (!rawMatrix || !Array.isArray(rawMatrix)) return [];

  const items = rawMatrix.map((tier, idx) => {
    const tierNum = idx + 1;
    const title = tier.level || tier.category || `Tier ${tierNum} Specialist`;

    // Primary Focus & Scope
    let focus = tier.focus || tier.desc;
    if (!focus) {
      if (tier.category) {
        focus = `Standardized operational protocol covering ${tier.category.toLowerCase()} with strict SLA governance, agile ceremony integration, and production-tested delivery standards.`;
      } else {
        focus = `Hands-on practitioner execution, sprint backlog ownership, and system reliability calibrated for ${title.toLowerCase()}.`;
      }
    }

    // Stack Depth & Tooling
    let stackList = [];
    if (Array.isArray(tier.items) && tier.items.length > 0) {
      stackList = tier.items;
    } else if (typeof tier.stack === "string" && tier.stack.trim()) {
      stackList = tier.stack.split(",").map((s) => s.trim()).filter(Boolean);
    } else {
      stackList = ["Production Code Quality", "CI/CD Deployment", "Git Hygiene", "System Design"];
    }

    // Typical Notice Period
    const notice =
      tier.notice ||
      (idx === 0
        ? "Immediate to 15 Days"
        : idx === 1
        ? "15–30 Days"
        : idx === 2
        ? "30–45 Days"
        : "30–60 Days");

    return {
      tierNumber: `Tier ${tierNum}`,
      title,
      focus,
      stackList,
      notice,
      image: tier.image,
    };
  });

  // If there are exactly 3 items, add Tier 4 to guarantee an even 2x2 grid
  if (items.length === 3) {
    items.push({
      tierNumber: "Tier 4",
      title: "Staff / Principal Director (12+ yrs)",
      focus:
        "Cross-pod architectural governance, high-stakes system resilience, multi-cloud strategy, and executive tech steering.",
      stackList: ["Enterprise Architecture", "Multi-Region Cloud", "Tech Roadmap", "High-Volume SLAs"],
      notice: "30–60 Days",
      image: items[2]?.image || "/images/tiers/role-ai-ml-genai-tier-1.svg",
    });
  }

  return items;
}

export default function HiringDetail({ slug }) {
  const hiring = getHiringData(slug);
  const { openBooking } = useBooking();
  const { navigate } = useRouter();
  const [activeTierIdx, setActiveTierIdx] = useState(0);
  const normalizedTiers = getNormalizedMatrix(hiring.matrix, hiring.title);

  const pipelineTopItems = [
    {
      id: "stage-01",
      title: `${hiring.pipeline?.[0]?.timing || "Day 1"} · ${hiring.pipeline?.[0]?.title || "Role Intake & Calibration"}`,
      content:
        hiring.pipeline?.[0]?.desc ||
        "JD calibration locks down non-negotiable tech skills, system constraints, team dynamic, and compensation band.",
      order: 1,
    },
    {
      id: "stage-03",
      title: `${hiring.pipeline?.[2]?.timing || "Day 5"} · ${hiring.pipeline?.[2]?.title || "Verified Shortlist Delivery"}`,
      content:
        hiring.pipeline?.[2]?.desc ||
        "3 to 5 candidate profiles delivered with live pair-coding recordings, code repos, and compensation alignment.",
      order: 3,
    },
  ];

  const pipelineBottomItems = [
    {
      id: "stage-02",
      title: `${hiring.pipeline?.[1]?.timing || "Days 2–3"} · ${hiring.pipeline?.[1]?.title || "Practitioner Pair-Coding Screen"}`,
      content:
        hiring.pipeline?.[1]?.desc ||
        "Senior developer conducts live coding interview, Git commit review, and production scenario test.",
      order: 2,
    },
    {
      id: "stage-04",
      title: `${hiring.pipeline?.[3]?.timing || "Day 7+"} · ${hiring.pipeline?.[3]?.title || "Offer & 90-Day Guarantee"}`,
      content:
        hiring.pipeline?.[3]?.desc ||
        "Offer acceptance management, resignation verification, onboarding support, and 90-day replacement window.",
      order: 4,
    },
  ];

  return (
    <div className="hiring-detail-page">
      {/* SECTION 1: HERO & CANDIDATE CALIBRATION PASSPORT */}
      <section className="hiring-hero-section" aria-labelledby="hiring-page-title">
        <HeroBackdrop />
        <div className="shell">
          {/* Breadcrumb showing category hierarchy */}
          <nav className="service-crumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span>IT Hiring</span>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span>{hiring.category}</span>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{hiring.title}</li>
            </ol>
          </nav>

          <div className="hiring-hero-grid">
            <div className="hiring-hero-content">
              <span className="hiring-category-tag">
                <TablerIcon name={hiring.category === "Roles we recruit" ? "cpu" : "user-check"} size={14} />
                <span>{hiring.category}</span>
              </span>
              <h1 id="hiring-page-title" className="hiring-hero-title">
                {hiring.headline}
              </h1>
              <p className="hiring-hero-lead">{hiring.lead}</p>

              <div className="hiring-hero-actions">
                <FlowButton
                  text="Request Shortlist"
                  variant="solid"
                  onClick={() =>
                    openBooking({
                      topic: `Hire: ${hiring.title}`,
                      prefill: `We would like to request an engineering shortlist for ${hiring.title}.`,
                    })
                  }
                />
                <FlowButton href="#rubric" text="View Rubric" variant="primary" />
              </div>

              <div className="hiring-guarantees-strip">
                <span className="hiring-guarantee-item">
                  <TablerIcon name="shield-check" size={16} />
                  <span>90-day free replacement</span>
                </span>
                <span className="hiring-guarantee-item">
                  <TablerIcon name="code" size={16} />
                  <span>Practitioner-screened</span>
                </span>
                <span className="hiring-guarantee-item">
                  <TablerIcon name="file-text" size={16} />
                  <span>Mutual NDA protected</span>
                </span>
              </div>
            </div>

            {/* Candidate Calibration Passport Card with Live Telemetry Radar */}
            <div className="hiring-passport-card" aria-label="Candidate calibration spec">
              <div className="hiring-passport-header">
                <div className="hiring-passport-title-wrap">
                  <span className="hiring-passport-title">Candidate Vetting Passport</span>
                  <span className="hiring-passport-sub">Verified Practitioner Calibration</span>
                </div>
                <span className="hiring-status-pill">
                  <span className="hiring-status-dot" aria-hidden="true"></span>
                  <span>Active pipeline</span>
                </span>
              </div>

              <div className="hiring-passport-body">
                {/* Circular Gauge & Vetting Chips Header */}
                <div className="hiring-passport-gauge-row">
                  <div className="hiring-score-gauge" aria-label="94% Technical Benchmark Match">
                    <svg viewBox="0 0 80 80" className="gauge-svg">
                      <circle cx="40" cy="40" r="34" className="gauge-bg" />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        className="gauge-val"
                        strokeDasharray="213.6"
                        strokeDashoffset="21.36"
                      />
                    </svg>
                    <div className="gauge-inner">
                      <span className="gauge-number">94%</span>
                      <span className="gauge-label">Match</span>
                    </div>
                  </div>
                  <div className="hiring-vetting-tags">
                    <span className="vetting-tag">
                      <TablerIcon name="check" size={13} />
                      <span>Live Pair-Coded</span>
                    </span>
                    <span className="vetting-tag">
                      <TablerIcon name="check" size={13} />
                      <span>Concurrency Tested</span>
                    </span>
                    <span className="vetting-tag">
                      <TablerIcon name="check" size={13} />
                      <span>Notice Locked</span>
                    </span>
                  </div>
                </div>

                {/* 4-Axis Telemetry Radar Bars */}
                <div className="hiring-radar-telemetry">
                  <span className="radar-telemetry-heading">Technical Calibration Rubric</span>
                  <div className="radar-bars-list">
                    {hiring.radarScores?.map((item, idx) => (
                      <div key={idx} className="radar-bar-item">
                        <div className="radar-bar-meta">
                          <span className="radar-axis-name">{item.axis}</span>
                          <span className="radar-axis-score">{item.score}%</span>
                        </div>
                        <div className="radar-bar-track">
                          <div
                            className="radar-bar-fill"
                            style={{ width: `${item.score}%` }}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facts Metric Row */}
                <div className="hiring-metrics-row">
                  {hiring.facts.map((fact, idx) => (
                    <div key={idx} className="hiring-metric-box">
                      <div className="hiring-metric-val">{fact.num}</div>
                      <div className="hiring-metric-label">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hiring-passport-footer">
                <span>Vetted by active practitioners</span>
                <span>Greater Noida & Louisville</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 5–7 DAY SOURCING VELOCITY TIMELINE (HYPERIUX ANIMATED ROADMAP) */}
      <section className="hiring-velocity-section" id="pipeline" aria-labelledby="pipeline-heading">
        <div className="shell">
          <Reveal className="hiring-section-heading">
            <span className="hiring-section-kicker">Delivery Velocity</span>
            <h2 id="pipeline-heading" className="hiring-section-title">
              From JD Calibration to Day-One Joining
            </h2>
            <p className="hiring-section-lead">
              Our 4-stage sourcing funnel eliminates recruitment lag. Scroll down to experience the horizontal velocity roadmap.
            </p>
          </Reveal>
        </div>

        {/* Hyperiux GSAP Animated Horizontal Timeline Component */}
        <Timeline
          title="Sourcing Roadmap"
          periodLabel="5–7 Business Days"
          activeColor="var(--cyan-500, #12afd8)"
          backgroundColor="var(--bg, #fbfbf9)"
          textColor="var(--ink, #0b1f3b)"
          mutedTextColor="var(--ink-soft, #425b76)"
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Engineering team pair programming"
          topItems={pipelineTopItems}
          bottomItems={pipelineBottomItems}
        />
      </section>

      {/* SECTION 3: DARK PRACTITIONER EVALUATION RUBRIC */}
      <section className="hiring-rubric-section dark-accent-section" id="rubric" aria-labelledby="rubric-heading">
        <div className="shell">
          <Reveal className="hiring-section-heading">
            <span className="hiring-section-kicker kicker-bright">Practitioner Technical Rubric</span>
            <h2 id="rubric-heading" className="hiring-section-title title-light">
              How We Screen Code Before You Review It
            </h2>
            <p className="hiring-section-lead lead-light">
              Every candidate is screened in a 45-minute live pair-coding and system design session
              by an active practitioner who has shipped the same stack in production.
            </p>
          </Reveal>

          <div className="hiring-rubric-cards-grid">
            {hiring.rubric?.map((item, idx) => (
              <Reveal as="div" key={idx} className="hiring-rubric-card-dark" delay={idx * 80}>
                <div className="rubric-card-top">
                  <div className="rubric-icon-badge">
                    <TablerIcon name={item.icon} size={22} />
                  </div>
                  <div className="rubric-proficiency-gauge">
                    <span className="proficiency-pct">{item.proficiency || 92}%</span>
                    <span className="proficiency-label">Pass bar</span>
                  </div>
                </div>

                <h3 className="rubric-card-title">{item.title}</h3>
                <p className="rubric-card-desc">{item.desc}</p>

                {item.testScenario && (
                  <div className="rubric-scenario-box">
                    <div className="scenario-label">
                      <TablerIcon name="terminal" size={13} />
                      <span>Live Outage Scenario</span>
                    </div>
                    <p className="scenario-text">{item.testScenario}</p>
                  </div>
                )}

                <div className="rubric-outputs-box">
                  <span className="rubric-outputs-title">Verified Dossier Outputs:</span>
                  <ul className="rubric-outputs-list">
                    {item.outputs?.map((out, oIdx) => (
                      <li key={oIdx} className="rubric-output-item">
                        <TablerIcon name="check" size={14} />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SENIORITY CALIBRATION MATRIX (INTERACTIVE ATTACHED TABS WITH GRAPHICS) */}
      <section className="hiring-matrix-section bright-azure-section" id="matrix" aria-labelledby="matrix-heading">
        <div className="shell">
          <Reveal className="hiring-section-heading">
            <span className="hiring-section-kicker">Seniority Calibration</span>
            <h2 id="matrix-heading" className="hiring-section-title">
              Expectations & Experience Bands
            </h2>
            <p className="hiring-section-lead">
              Clear calibration across seniority tiers ensures compensation alignment, scope
              readiness, and predictable delivery from day one.
            </p>
          </Reveal>

          {/* Interactive Tier Tabs Container attached to card below */}
          <div className="tier-interactive-container">
            {/* Top Attached Tab Bar */}
            <div
              className="tier-tabs-bar"
              role="tablist"
              aria-label="Seniority calibration tiers"
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                  e.preventDefault();
                  const next = (activeTierIdx + 1) % normalizedTiers.length;
                  setActiveTierIdx(next);
                  document.getElementById(`tier-tab-${next}`)?.focus();
                } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  const prev = (activeTierIdx - 1 + normalizedTiers.length) % normalizedTiers.length;
                  setActiveTierIdx(prev);
                  document.getElementById(`tier-tab-${prev}`)?.focus();
                }
              }}
            >
              {normalizedTiers.map((tier, idx) => {
                const isActive = idx === activeTierIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    id={`tier-tab-${idx}`}
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    aria-controls={`tier-panel-${idx}`}
                    className={`tier-tab-btn ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveTierIdx(idx)}
                  >
                    <span className="tier-tab-badge">{tier.tierNumber}</span>
                    <span className="tier-tab-title">{tier.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Display wrapper sizing to the largest tier (grid-area: 1 / 1) */}
            <div className="tier-display-wrapper">
              {normalizedTiers.map((tier, idx) => {
                const isActive = idx === activeTierIdx;
                return (
                  <div
                    key={idx}
                    className={`tier-display-card ${isActive ? "is-active" : "is-inactive"}`}
                    role="tabpanel"
                    id={`tier-panel-${idx}`}
                    aria-labelledby={`tier-tab-${idx}`}
                    hidden={!isActive}
                  >
                    {/* Left Column: Relevant Technical Image Frame */}
                    <div className="tier-image-col">
                      <div className="tier-image-frame">
                        <img
                          src={tier.image || "/images/tiers/staff-augmentation-tier-1.svg"}
                          alt={`${tier.title} technical specification`}
                          className="tier-graphic-img"
                          loading="lazy"
                          decoding="async"
                          width="520"
                          height="340"
                        />
                      </div>
                    </div>

                    {/* Right Column: Tier Specs & Details */}
                    <div className="tier-info-col">
                      <div className="tier-info-top">
                        <span className="tier-level-pill">{tier.tierNumber} Calibration</span>
                        <h3 className="tier-active-title">{tier.title}</h3>
                      </div>

                      <div className="tier-spec-row">
                        <span className="tier-spec-label">Primary Focus & Scope</span>
                        <p className="tier-spec-desc">{tier.focus}</p>
                      </div>

                      <div className="tier-spec-row">
                        <span className="tier-spec-label">Verified Scope & Tooling</span>
                        <div className="tier-stack-tags">
                          {tier.stackList.map((stk, sIdx) => (
                            <span key={sIdx} className="tier-stack-chip">
                              <TablerIcon name="check" size={13} />
                              <span>{stk}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="tier-info-bottom">
                        <div className="tier-notice-meta">
                          <span className="tier-notice-label">Vetting Standard:</span>
                          <span className="tier-notice-val">{tier.notice}</span>
                        </div>

                        <FlowButton
                          text="Request Candidate"
                          variant="solid"
                          onClick={() =>
                            openBooking({
                              topic: `Hire: ${hiring.title} (${tier.title})`,
                              prefill: `We would like to request an engineering shortlist for ${hiring.title} calibrated at the ${tier.title} tier.`,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VERIFIED PLACEMENT CASE STUDY */}
      {hiring.caseStudy && (
        <section className="hiring-case-section" aria-labelledby="hiring-case-title">
          <div className="shell">
            <Reveal className="hiring-case-card">
              <div className="hiring-case-header">
                <span className="hiring-case-tag">Verified Engagement Study</span>
                <h2 id="hiring-case-title" className="hiring-case-client">
                  {hiring.caseStudy.client}
                </h2>
              </div>
              <div className="hiring-case-grid">
                <div className="hiring-case-narrative">
                  <div className="narrative-block">
                    <span className="narrative-label">The Challenge</span>
                    <p>{hiring.caseStudy.challenge}</p>
                  </div>
                  <div className="narrative-block">
                    <span className="narrative-label">Practitioner Solution</span>
                    <p>{hiring.caseStudy.solution}</p>
                  </div>
                </div>
                <div className="hiring-case-results">
                  <span className="results-label">Verified Results</span>
                  <div className="results-chips">
                    {hiring.caseStudy.results?.map((res, rIdx) => (
                      <div key={rIdx} className="result-chip">
                        <span className="result-chip-num">{res.num}</span>
                        <span className="result-chip-label">{res.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* SECTION 6: FAQ ACCORDION DRAWER */}
      {hiring.faqs && hiring.faqs.length > 0 && (
        <section className="hiring-faq-section" id="faq" aria-labelledby="faq-heading">
          <div className="shell shell--narrow">
            <Reveal className="hiring-section-heading">
              <span className="hiring-section-kicker">Transparent Terms</span>
              <h2 id="faq-heading" className="hiring-section-title">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <FaqDrawer faqs={hiring.faqs} />
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <BottomCTA
        topic={`Hire: ${hiring.title}`}
        prefill={`We would like to request an engineering shortlist for ${hiring.title}.`}
      />
    </div>
  );
}
