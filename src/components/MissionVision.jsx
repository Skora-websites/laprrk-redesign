import Reveal from "./Reveal";
import TablerIcon from "./TablerIcon";

export default function MissionVision() {
  return (
    <section className="section about-mission-vision" aria-labelledby="mission-vision-title">
      <div className="shell">
        <Reveal className="section-head text-center">
          <span className="section-kicker">Purpose &amp; Direction</span>
          <h2 id="mission-vision-title">Mission &amp; Vision</h2>
          <div>
            <p>
              Why we built Laprrk around a unified engineering bench — eliminating vendor hand-offs,
              bloated retainers, and the gap between ambitious roadmaps and working production code.
            </p>
          </div>
        </Reveal>

        {/* Dual Flagship Cards: Mission and Vision */}
        <div className="mission-cards-grid">
          {/* Mission Card */}
          <Reveal className="mission-card card-mission" delay={60}>
            <div className="mission-card-badge">
              <span className="mission-badge-pill">
                <span className="mission-badge-dot" aria-hidden="true" />
                <span className="mono-sm">01 · Mission</span>
              </span>
              <div className="mission-badge-icon" aria-hidden="true">
                <TablerIcon name="target" size={18} />
              </div>
            </div>

            <h3 className="mission-card-title">
              Engineer with discipline. Ship without hand-offs.
            </h3>

            <p className="mission-card-body">
              To eliminate the costly friction between software vendors, staffing recruiters, and
              corporate trainers. We engineer production-ready systems, screen engineers with active
              practitioners who run the same stacks, and upskill cohorts through hands-on labs —
              delivering velocity and pure IP ownership from day one.
            </p>

            <ul className="mission-card-points">
              <li>
                <div className="mission-point-icon" aria-hidden="true">
                  <TablerIcon name="check" size={14} />
                </div>
                <span>Two-week sprints with working demo at every cadence</span>
              </li>
              <li>
                <div className="mission-point-icon" aria-hidden="true">
                  <TablerIcon name="check" size={14} />
                </div>
                <span>100% repositories and CI/CD pipelines in your cloud accounts</span>
              </li>
              <li>
                <div className="mission-point-icon" aria-hidden="true">
                  <TablerIcon name="check" size={14} />
                </div>
                <span>Mutual NDA before reviewing sensitive architecture</span>
              </li>
            </ul>
          </Reveal>

          {/* Vision Card */}
          <Reveal className="mission-card card-vision" delay={120}>
            <div className="mission-card-badge">
              <span className="mission-badge-pill">
                <span className="mission-badge-dot" aria-hidden="true" />
                <span className="mono-sm">02 · Vision</span>
              </span>
              <div className="mission-badge-icon" aria-hidden="true">
                <TablerIcon name="compass" size={18} />
              </div>
            </div>

            <h3 className="mission-card-title">
              The premier cross-border engineering bench for product velocity.
            </h3>

            <p className="mission-card-body">
              To set the global benchmark for modern technical partnerships — where US client
              architecture and Indian engineering depth operate as one seamless, high-velocity engine.
              No middle managers, no bloated retainers, and zero marketing fluff.
            </p>

            <ul className="mission-card-points">
              <li>
                <div className="mission-point-icon" aria-hidden="true">
                  <TablerIcon name="check" size={14} />
                </div>
                <span>Continuous capability growth with ~70% hands-on lab time</span>
              </li>
              <li>
                <div className="mission-point-icon" aria-hidden="true">
                  <TablerIcon name="check" size={14} />
                </div>
                <span>First calibrated candidate shortlist delivered in 5–7 business days</span>
              </li>
              <li>
                <div className="mission-point-icon" aria-hidden="true">
                  <TablerIcon name="check" size={14} />
                </div>
                <span>38% average measured lift in technical assessment benchmarks</span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* 3 Core Architectural Pillars */}
        <div className="mission-pillars-row">
          <Reveal className="mission-pillar" delay={80}>
            <div className="pillar-top-bar">
              <div className="pillar-icon-wrap" aria-hidden="true">
                <TablerIcon name="user-check" size={20} />
              </div>
              <span className="pillar-kicker">Scope Continuity</span>
            </div>
            <h4>Practitioner-Led Accountability</h4>
            <p>
              The senior lead who scopes your proposal stays with the engagement. There is no
              hand-off to a secondary delivery manager you meet after signing.
            </p>
            <div className="pillar-foot-tag">
              <span className="pillar-tag-dot" aria-hidden="true" />
              <span>Zero Account Relays</span>
            </div>
          </Reveal>

          <Reveal className="mission-pillar" delay={140}>
            <div className="pillar-top-bar">
              <div className="pillar-icon-wrap" aria-hidden="true">
                <TablerIcon name="dna" size={20} />
              </div>
              <span className="pillar-kicker">Single Standard</span>
            </div>
            <h4>Unified Bench DNA</h4>
            <p>
              Our code reviewers teach labs, our trainers ship production software, and our
              technical interviewers have deployed the same tech stacks in production.
            </p>
            <div className="pillar-foot-tag">
              <span className="pillar-tag-dot" aria-hidden="true" />
              <span>Full Cross-Stack Competency</span>
            </div>
          </Reveal>

          <Reveal className="mission-pillar" delay={200}>
            <div className="pillar-top-bar">
              <div className="pillar-icon-wrap" aria-hidden="true">
                <TablerIcon name="shield-check" size={20} />
              </div>
              <span className="pillar-kicker">Client Sovereignty</span>
            </div>
            <h4>Direct IP Hygiene</h4>
            <p>
              Repositories, cloud accounts, architectural diagrams, and documentation remain 100%
              yours. Complete IP assignment is guaranteed in writing.
            </p>
            <div className="pillar-foot-tag">
              <span className="pillar-tag-dot" aria-hidden="true" />
              <span>100% In-Cloud Ownership</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

