import { getTrainingData } from "../data/trainingData";
import { useBooking } from "../booking";
import { useRouter } from "../router";
import TablerIcon from "../components/TablerIcon";
import Reveal from "../components/Reveal";
import FaqDrawer from "../components/ui/faq-drawer";
import BottomCTA from "../components/BottomCTA";
import HeroBackdrop from "../components/HeroBackdrop";
import FlowButton from "../components/ui/flow-button";

export default function TrainingDetail({ slug }) {
  const training = getTrainingData(slug);
  const { openBooking } = useBooking();
  const { navigate } = useRouter();

  return (
    <div className="training-detail-page">
      {/* SECTION 1: HERO & INTERACTIVE COHORT LAB TERMINAL */}
      <section className="training-hero-section" aria-labelledby="training-page-title">
        <HeroBackdrop />
        <div className="shell">
          {/* Breadcrumb showing clear category hierarchy */}
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
                <a
                  href="/training"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/training");
                  }}
                >
                  Training
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a
                  href={training.category === "For institutes" ? "/training#institutes" : "/training#corporate"}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(training.category === "For institutes" ? "/training#institutes" : "/training#corporate");
                  }}
                >
                  {training.category}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{training.title}</li>
            </ol>
          </nav>

          <div className="training-hero-grid">
            <div className="training-hero-content">
              <span className="training-audience-tag">
                <TablerIcon name={training.category === "For institutes" ? "school" : "brain"} size={14} />
                <span>{training.category}</span>
              </span>
              <h1 id="training-page-title" className="training-hero-title">
                {training.headline}
              </h1>
              <p className="training-hero-lead">{training.lead}</p>

              <div className="training-hero-actions">
                <FlowButton
                  text="Plan Cohort"
                  variant="solid"
                  onClick={() =>
                    openBooking({
                      topic: `Training: ${training.title}`,
                      prefill: `We would like to plan a training cohort for ${training.title}.`,
                    })
                  }
                />
                <FlowButton href="#syllabus" text="View Curriculum" variant="primary" />
              </div>

              <div className="training-guarantees-strip">
                <span className="training-guarantee-item">
                  <TablerIcon name="code" size={16} />
                  <span>~70% Hands-on lab time</span>
                </span>
                <span className="training-guarantee-item">
                  <TablerIcon name="chart-bar" size={16} />
                  <span>38% Average assessment lift</span>
                </span>
                <span className="training-guarantee-item">
                  <TablerIcon name="device-laptop" size={16} />
                  <span>Cloud sandboxes provided</span>
                </span>
              </div>
            </div>

            {/* Interactive Cohort Lab Terminal Widget with Twin Circular Dials */}
            <div className="training-terminal-card" aria-label="Cohort lab terminal">
              {/* Terminal Window Header */}
              <div className="terminal-window-bar">
                <div className="terminal-dots" aria-hidden="true">
                  <span className="dot dot--red"></span>
                  <span className="dot dot--yellow"></span>
                  <span className="dot dot--green"></span>
                </div>
                <div className="terminal-file-tab">
                  <TablerIcon name="file-code" size={13} />
                  <span>{training.terminalSnippet?.filename || "cohort_lab.py"}</span>
                </div>
                <span className="terminal-status-live">
                  <span className="terminal-live-dot" aria-hidden="true"></span>
                  <span>LIVE LAB</span>
                </span>
              </div>

              {/* Terminal Monospace Code Body */}
              <div className="terminal-code-body">
                <pre>
                  <code>{training.terminalSnippet?.code || "# Loading sandbox environment..."}</code>
                </pre>
              </div>

              {/* Twin Animated Circular Dials */}
              <div className="terminal-telemetry-dials">
                <div className="telemetry-dial-item">
                  <div className="dial-circle-wrap">
                    <svg viewBox="0 0 70 70" className="dial-svg">
                      <circle cx="35" cy="35" r="28" className="dial-bg" />
                      <circle
                        cx="35"
                        cy="35"
                        r="28"
                        className="dial-val dial-val--cyan"
                        strokeDasharray="175.9"
                        strokeDashoffset="52.77"
                      />
                    </svg>
                    <span className="dial-center-val">~70%</span>
                  </div>
                  <div className="dial-meta">
                    <span className="dial-meta-title">Lab Time</span>
                    <span className="dial-meta-sub">Live coding sandboxes</span>
                  </div>
                </div>

                <div className="telemetry-dial-item">
                  <div className="dial-circle-wrap">
                    <svg viewBox="0 0 70 70" className="dial-svg">
                      <circle cx="35" cy="35" r="28" className="dial-bg" />
                      <circle
                        cx="35"
                        cy="35"
                        r="28"
                        className="dial-val dial-val--blue"
                        strokeDasharray="175.9"
                        strokeDashoffset="66.84"
                      />
                    </svg>
                    <span className="dial-center-val">+38%</span>
                  </div>
                  <div className="dial-meta">
                    <span className="dial-meta-title">Score Lift</span>
                    <span className="dial-meta-sub">Pre vs Post baseline</span>
                  </div>
                </div>
              </div>

              <div className="training-terminal-footer">
                <span>Practitioner-led labs</span>
                <span>Max 120 Engineers per cohort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4-STAGE PROGRESSIVE CURRICULUM ROADMAP (VERTICAL TIMELINE) */}
      <section className="training-roadmap-section" id="syllabus" aria-labelledby="syllabus-heading">
        <div className="shell">
          <Reveal className="training-section-heading">
            <span className="training-section-kicker">Lab Curriculum</span>
            <h2 id="syllabus-heading" className="training-section-title">
              Four Progressive Modules Built on Real Stacks
            </h2>
            <p className="training-section-lead">
              Our curriculum combines foundational architectural design with extensive guided labs,
              culminating in an unassisted production-grade capstone defense.
            </p>
          </Reveal>

          <div className="training-roadmap-timeline">
            {training.syllabus?.map((mod, idx) => (
              <Reveal as="div" key={idx} className="training-roadmap-node" delay={idx * 70}>
                <div className="roadmap-left-col">
                  <div className="roadmap-number-bubble">{mod.module}</div>
                  <div className="roadmap-rail-line" aria-hidden="true" />
                </div>
                <div className="roadmap-content-card">
                  <div className="roadmap-card-header">
                    <span className="roadmap-duration-chip">{mod.duration}</span>
                    <h3 className="roadmap-card-title">{mod.title}</h3>
                  </div>
                  <p className="roadmap-card-desc">{mod.desc}</p>
                  {mod.deliverable && (
                    <div className="roadmap-deliverable-box">
                      <div className="deliverable-label">
                        <TablerIcon name="terminal" size={14} />
                        <span>Hands-On Lab Deliverable:</span>
                      </div>
                      <span className="deliverable-text">{mod.deliverable}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DARK 70/30 ENGINEERING DELIVERY ARCHITECTURE */}
      <section className="training-architecture-section section-dark-brand" id="architecture" aria-labelledby="arch-heading">
        <div className="shell">
          <Reveal className="training-section-heading">
            <span className="training-section-kicker kicker-bright">Delivery Architecture</span>
            <h2 id="arch-heading" className="training-section-title title-light">
              The 70/30 Hands-On Engineering Methodology
            </h2>
            <p className="training-section-lead lead-light">
              We reject passive slide presentations. Approximately 70% of cohort hours are spent
              writing code, running containers, and debugging distributed systems in live cloud sandboxes.
            </p>
          </Reveal>

          <div className="training-arch-grid">
            <Reveal as="div" className="training-arch-card-dark" delay={0}>
              <div className="arch-card-icon">
                <TablerIcon name="cloud-computing" size={24} />
              </div>
              <h3 className="arch-card-title">1. Ephemeral Cloud Sandboxes</h3>
              <p className="arch-card-desc">
                Every engineer receives an isolated, pre-budgeted cloud sandbox (AWS, Azure, or Docker/K8s)
                pre-configured with container registries and telemetry monitoring.
              </p>
              <div className="arch-card-chip">Zero Local Machine Bloat</div>
            </Reveal>

            <Reveal as="div" className="training-arch-card-dark" delay={60}>
              <div className="arch-card-icon">
                <TablerIcon name="git-pull-request" size={24} />
              </div>
              <h3 className="arch-card-title">2. GitHub Classroom & Automated CI</h3>
              <p className="arch-card-desc">
                Assignments are submitted via GitHub Pull Requests. Automated test suites verify unit tests,
                code formatting, and performance benchmarks before mentor review.
              </p>
              <div className="arch-card-chip">Automated PR Verification</div>
            </Reveal>

            <Reveal as="div" className="training-arch-card-dark" delay={120}>
              <div className="arch-card-icon">
                <TablerIcon name="code" size={24} />
              </div>
              <h3 className="arch-card-title">3. Live Practitioner Pair-Coding</h3>
              <p className="arch-card-desc">
                Instructors are active senior developers who code live, introduce intentional bugs,
                and run simulated war-room outages that squads triage in real time.
              </p>
              <div className="arch-card-chip">Simulated War Rooms</div>
            </Reveal>

            <Reveal as="div" className="training-arch-card-dark" delay={180}>
              <div className="arch-card-icon">
                <TablerIcon name="award" size={24} />
              </div>
              <h3 className="arch-card-title">4. Capstone Defense & Verification</h3>
              <p className="arch-card-desc">
                Cohorts conclude with an unassisted team capstone defense evaluated against our 38%
                average assessment lift benchmark by practicing enterprise architects.
              </p>
              <div className="arch-card-chip">Verified Digital Credentials</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRE VS POST BENCHMARK SCORECARD (BRIGHT AZURE SECTION) */}
      <section className="training-benchmark-section section-bright-azure" id="benchmarks" aria-labelledby="benchmark-heading">
        <div className="shell">
          <Reveal className="training-section-heading">
            <span className="training-section-kicker">Verified Assessment Lift</span>
            <h2 id="benchmark-heading" className="training-section-title">
              Pre vs Post Cohort Competency Benchmarks
            </h2>
            <p className="training-section-lead">
              We measure technical proficiency before and after the cohort. Our historical track record
              shows a verified 38% average assessment improvement across 500+ trained professionals.
            </p>
          </Reveal>

          <div className="training-benchmark-scorecard">
            <div className="scorecard-header">
              <span className="scorecard-title">Technical Skill Dimension</span>
              <div className="scorecard-legend">
                <span className="legend-item legend-pre">Baseline Pre-Cohort</span>
                <span className="legend-item legend-post">Post-Cohort Benchmark</span>
              </div>
            </div>

            <div className="scorecard-rows-list">
              {training.benchmarks?.map((bench, idx) => (
                <Reveal as="div" key={idx} className="benchmark-row" delay={idx * 60}>
                  <div className="benchmark-meta">
                    <span className="benchmark-skill-name">{bench.skill}</span>
                    <span className="benchmark-delta-badge">{bench.delta}</span>
                  </div>
                  <div className="benchmark-bars-container">
                    {/* Pre-score bar */}
                    <div className="bar-track bar-track--pre">
                      <div className="bar-fill bar-fill--pre" style={{ width: `${bench.pre}%` }} />
                      <span className="bar-num">{bench.pre}%</span>
                    </div>
                    {/* Post-score bar */}
                    <div className="bar-track bar-track--post">
                      <div className="bar-fill bar-fill--post" style={{ width: `${bench.post}%` }} />
                      <span className="bar-num">{bench.post}%</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="scorecard-footer">
              <span className="scorecard-footer-note">
                *Verified across 500+ engineers and students in Greater Noida and Louisville cohorts.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VERIFIED COHORT ENGAGEMENT STUDY */}
      {training.caseStudy && (
        <section className="training-case-section" aria-labelledby="training-case-title">
          <div className="shell">
            <Reveal className="training-case-card">
              <div className="training-case-header">
                <span className="training-case-tag">Verified Cohort Engagement</span>
                <h2 id="training-case-title" className="training-case-client">
                  {training.caseStudy.client}
                </h2>
              </div>
              <div className="training-case-grid">
                <div className="training-case-narrative">
                  <div className="narrative-block">
                    <span className="narrative-label">The Challenge</span>
                    <p>{training.caseStudy.challenge}</p>
                  </div>
                  <div className="narrative-block">
                    <span className="narrative-label">Cohort Architecture</span>
                    <p>{training.caseStudy.solution}</p>
                  </div>
                </div>
                <div className="training-case-results">
                  <span className="results-label">Verified Cohort Outcomes</span>
                  <div className="results-chips">
                    {training.caseStudy.results?.map((res, rIdx) => (
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
      {training.faqs && training.faqs.length > 0 && (
        <section className="section training-faq-section" id="faq" aria-labelledby="faq-heading">
          <div className="shell shell--narrow">
            <Reveal className="training-section-heading">
              <span className="training-section-kicker">Program Details</span>
              <h2 id="faq-heading" className="training-section-title">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <FaqDrawer faqs={training.faqs} />
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <BottomCTA
        topic={`Training: ${training.title}`}
        prefill={`We would like to plan a training cohort for ${training.title}.`}
      />
    </div>
  );
}
