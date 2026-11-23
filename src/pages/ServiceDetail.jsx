import { getServiceData } from "../data/servicesData";
import { useBooking } from "../booking";
import { useRouter } from "../router";
import TablerIcon from "../components/TablerIcon";
import Reveal from "../components/Reveal";
import FaqDrawer from "../components/ui/faq-drawer";
import BottomCTA from "../components/BottomCTA";
import HeroBackdrop from "../components/HeroBackdrop";
import FlowButton from "../components/ui/flow-button";

export default function ServiceDetail({ slug }) {
  const service = getServiceData(slug);
  const { openBooking } = useBooking();
  const { navigate } = useRouter();

  return (
    <div className="service-detail-page">
      {/* SECTION 1: HERO & TELEMETRY */}
      <section className="service-hero" aria-labelledby="service-title">
        <HeroBackdrop />
        <div className="shell">
          {/* Breadcrumb */}
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
                <span>IT Services</span>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{service.title}</li>
            </ol>
          </nav>

          <div className="service-hero-grid">
            <div className="service-hero-content">
              <span className="service-kicker">{service.heroKicker}</span>
              <h1 id="service-title" className="service-headline">
                {service.headline}
              </h1>
              <p className="service-lead">{service.lead}</p>

              <div className="service-actions">
                <FlowButton
                  text="Scope Project"
                  variant="solid"
                  onClick={() =>
                    openBooking({
                      topic: service.title,
                      prefill: `We would like to scope a project around ${service.title}.`,
                    })
                  }
                />
                <FlowButton href="#capabilities" text="Explore Capabilities" variant="primary" />
              </div>
            </div>

            {/* Telemetry Indicator Strip */}
            <div className="service-telemetry-box" aria-label="Service delivery commitments">
              <div className="service-telemetry-header">
                <span className="live-status-dot" aria-hidden="true"></span>
                <span className="telemetry-label">Delivery benchmark</span>
              </div>
              <dl className="service-telemetry-list">
                {service.facts.map((fact, idx) => (
                  <div key={idx} className="telemetry-item">
                    <dt>{fact.label}</dt>
                    <dd>{fact.num}</dd>
                  </div>
                ))}
              </dl>
              <div className="telemetry-note">
                <TablerIcon name="shield-check" size={16} />
                <span>NDA & complete IP assignment before sprint one</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE SHIFT (CHALLENGE VS DELIVERY STANDARD) */}
      <section className="section service-shift-section" aria-labelledby="shift-title">
        <div className="shell">
          <Reveal className="section-head">
            <h2 id="shift-title">The engineering standard</h2>
            <div>
              <p>Why conventional implementations stall, and how our senior engineering pods solve it.</p>
            </div>
          </Reveal>

          <div className="service-shift-grid">
            <article className="shift-card challenge-card">
              <div className="shift-card-header">
                <div className="shift-badge challenge-badge">Common Industry Pitfall</div>
                <h3>{service.challenge.title}</h3>
              </div>
              <p>{service.challenge.text}</p>
              <ul className="shift-points challenge-points">
                <li>Fragmented architectures with hidden technical debt</li>
                <li>Unpredictable timelines and shifting delivery teams</li>
                <li>Vendor lock-in with closed repositories</li>
              </ul>
            </article>

            <article className="shift-card approach-card">
              <div className="shift-card-header">
                <div className="shift-badge approach-badge">The Laprrk Standard</div>
                <h3>{service.approach.title}</h3>
              </div>
              <p>{service.approach.text}</p>
              <ul className="shift-points approach-points">
                <li>
                  <TablerIcon name="check" size={18} />
                  <span>Two-week sprint cadences with live working software demos</span>
                </li>
                <li>
                  <TablerIcon name="check" size={18} />
                  <span>100% intellectual property commits directly to your private cloud</span>
                </li>
                <li>
                  <TablerIcon name="check" size={18} />
                  <span>The senior engineer who scopes your project leads delivery</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE CAPABILITIES & DELIVERABLES */}
      <section id="capabilities" className="section service-caps-section" aria-labelledby="caps-title">
        <div className="shell">
          <Reveal className="section-head">
            <h2 id="caps-title">Capabilities & production deliverables</h2>
            <div>
              <p>Concrete engineering capabilities backed by verifiable architectural deliverables.</p>
            </div>
          </Reveal>

          <div className="service-caps-grid">
            {service.capabilities.map((cap, idx) => (
              <article key={idx} className="cap-card">
                <div className="cap-icon-box">
                  <TablerIcon name={cap.icon || "code"} size={26} />
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
                <div className="cap-outputs">
                  <span className="outputs-label">Deliverables:</span>
                  <ul>
                    {cap.outputs.map((out, oIdx) => (
                      <li key={oIdx}>
                        <TablerIcon name="check" size={15} />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNOLOGY ECOSYSTEM & STANDARDS */}
      <section className="section-tonal service-tech-section" aria-labelledby="tech-title">
        <div className="shell">
          <Reveal className="section-head">
            <h2 id="tech-title">Technology ecosystem & quality standards</h2>
            <div>
              <p>We work within your production constraints using vetted open standards and frameworks.</p>
            </div>
          </Reveal>

          <div className="service-tech-grid">
            {/* Tech Stack Matrix */}
            <div className="tech-matrix">
              <h3>Supported Tooling & Frameworks</h3>
              <div className="tech-categories">
                {service.techStack.map((cat, idx) => (
                  <div key={idx} className="tech-category">
                    <span className="tech-cat-name">{cat.category}</span>
                    <ul className="tech-tags">
                      {cat.items.map((item, iIdx) => (
                        <li key={iIdx} className="tech-tag">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Standards */}
            <div className="service-standards-col">
              <h3>Engineering Governance</h3>
              <div className="standards-list">
                {service.standards.map((std, idx) => (
                  <div key={idx} className="standard-item-card">
                    <div className="std-num">0{idx + 1}</div>
                    <div>
                      <h4>{std.title}</h4>
                      <p>{std.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DELIVERY LIFECYCLE & SPRINTS */}
      <section className="section service-lifecycle-section" aria-labelledby="lifecycle-title">
        <div className="shell">
          <Reveal className="section-head">
            <h2 id="lifecycle-title">Delivery lifecycle & sprint progression</h2>
            <div>
              <p>From day one discovery to production hardening: predictable milestones without lock-in.</p>
            </div>
          </Reveal>

          <div className="service-lifecycle-grid">
            {service.process.map((phase, idx) => (
              <div key={idx} className="lifecycle-step-card">
                <div className="step-badge-row">
                  <span className="step-num">{phase.step}</span>
                  <span className="step-timing">{phase.timing}</span>
                </div>
                <h3>{phase.title}</h3>
                <p>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: IN PRACTICE CASE STUDY */}
      <section className="section service-case-section" aria-labelledby="case-title">
        <div className="shell">
          <article className="service-case-card">
            <div className="case-content">
              <span className="case-kicker">In practice · {service.caseStudy.sector}</span>
              <h2 id="case-title">{service.caseStudy.headline}</h2>
              <p>{service.caseStudy.summary}</p>
              <div className="case-cta-row">
                <FlowButton
                  text="Discuss Case Study"
                  variant="solid"
                  onClick={() =>
                    openBooking({
                      topic: service.title,
                      prefill: `Discussing ${service.caseStudy.sector} case study for ${service.title}.`,
                    })
                  }
                />
              </div>
            </div>
            <div className="case-metric-box">
              <div className="case-metric-val">{service.caseStudy.metric}</div>
              <div className="case-metric-label">{service.caseStudy.metricLabel}</div>
              <div className="case-metric-sub">Audited client engagement metric</div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 7: TECHNICAL & COMMERCIAL FAQS */}
      <section className="faq-drawer-section" id="faq" aria-labelledby="faq-title">
        <FaqDrawer
          label="Clear Answers"
          title={`Technical & commercial questions on ${service.title.toLowerCase()}.`}
          lead="Direct answers regarding team integration, code ownership, and delivery timelines. Pull an index card to inspect."
          drawer={`${service.title} · FAQ`}
          count={service.faqs?.length || 4}
          cards={service.faqs?.map((f, i) => ({
            id: `faq-${i}`,
            tab: ["Ownership", "Integration", "Commercials", "Timeline", "Process"][i % 5],
            q: f.q,
            a: f.a,
          }))}
          askLabel="Ask an engineer"
          askNote={`Have a specific question about ${service.title.toLowerCase()}? Our engineering leads answer directly.`}
          onAsk={() => openBooking({ topic: `${service.title} consultation` })}
        />
      </section>

      {/* SECTION 8: BOTTOM CTA */}
      <BottomCTA
        topic={service.title}
        prefill={`Initial scoping inquiry for ${service.title}`}
      />
    </div>
  );
}

