import { ABOUT, PRACTICES } from "../data/site";
import { useBooking } from "../booking";
import { Link } from "../router";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Offices from "../components/Offices";
import BottomCTA from "../components/BottomCTA";
import { FlowButton } from "../components/ui/flow-button";
import AboutHeroVisual from "../components/AboutHeroVisual";
import MissionVision from "../components/MissionVision";
import { ContainerScroll, CardSticky } from "../components/ui/cards-stack";
import TablerIcon from "../components/TablerIcon";

const PRINCIPLE_TAGS = [
  "Direct accountability · No hand-off to new teams",
  "Fixed scope & pricing in writing · 48h turnaround",
  "Client-owned cloud & repos · 100% IP transfer",
  "Self-sufficient teams · CI/CD, tests & docs included",
];

export default function About() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        crumb="About"
        title={ABOUT.hero.title}
        lead={ABOUT.hero.lead}
        visual={<AboutHeroVisual />}
        actions={
          <>
            <FlowButton text="Book 30-min Call" variant="solid" onClick={() => openBooking()} />
            <FlowButton to="/contact" text="Contact Team" variant="primary" />
          </>
        }
      />

      {/* Executive Story & Delivery Architecture */}
      <section className="section about-story" aria-labelledby="about-story-title">
        <div className="shell story-grid">
          <Reveal className="story-aside">
            <span className="story-kicker">Operating Manifesto</span>
            <h2 id="about-story-title" className="story-heading">{ABOUT.story.title}</h2>

            <div className="story-arch-card">
              <div className="story-arch-header">
                <span className="story-arch-dot" aria-hidden="true" />
                <span className="story-arch-label">Unified Bench vs. Agency Silos</span>
              </div>
              <p className="story-arch-sub">
                Why we operate Build, Hire, and Train as one engineering team rather than three disconnected vendors.
              </p>
              <div className="story-arch-metrics">
                <div className="story-metric-item">
                  <span className="story-metric-val">0%</span>
                  <span className="story-metric-lbl">Hand-off loss</span>
                </div>
                <div className="story-metric-item">
                  <span className="story-metric-val">100%</span>
                  <span className="story-metric-lbl">Client IP in your cloud</span>
                </div>
                <div className="story-metric-item">
                  <span className="story-metric-val">48h</span>
                  <span className="story-metric-lbl">Written proposal SLA</span>
                </div>
              </div>
              <div className="story-arch-foot">
                <span className="mono-sm">Founded 2019</span>
                <span className="story-arch-sep">·</span>
                <span>Greater Noida &amp; Louisville</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="story-copy" delay={120}>
            <p className="story-lead-para">{ABOUT.story.paragraphs[0]}</p>
            <p className="story-body-para">{ABOUT.story.paragraphs[1]}</p>
            
            <div className="story-quote-card">
              <div className="story-quote-bar" aria-hidden="true" />
              <p className="story-quote-text">{ABOUT.story.paragraphs[2]}</p>
            </div>

            <div className="story-governance-strip">
              <span className="governance-pill">
                <TablerIcon name="check" size={15} />
                Mutual NDA on Day One
              </span>
              <span className="governance-pill">
                <TablerIcon name="check" size={15} />
                Two-Week Demo Cadence
              </span>
              <span className="governance-pill">
                <TablerIcon name="check" size={15} />
                Direct Practitioner Contact
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Refined Mission and Vision Section */}
      <MissionVision />

      {/* Operating Standards - Stacking Cards */}
      <div className="section-tonal">
        <section className="section about-principles" aria-labelledby="principles-title">
          <div className="shell">
            <div className="principles-stack-layout">
              <aside className="principles-sticky-sidebar">
                <Reveal className="principles-sidebar-content">
                  <span className="principles-kicker">
                    <span className="principles-dot" aria-hidden="true" />
                    Operating Standards
                  </span>
                  <h2 id="principles-title" className="principles-title">
                    {ABOUT.principles.title}
                  </h2>
                  <p className="principles-lede">
                    {ABOUT.principles.lead}
                  </p>
                  <div className="principles-sidebar-badge">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 8.5l3.5 3.5 7.5-8"
                        stroke="#12AFD8"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Enforced across 100% of contracts</span>
                  </div>
                </Reveal>
              </aside>

              <div className="principles-stack-column">
                <ContainerScroll className="principles-scroll-track">
                  {ABOUT.principles.items.map((item, index) => (
                    <CardSticky
                      key={item.title}
                      index={index}
                      incrementY={28}
                      incrementZ={12}
                      topOffset="calc(var(--header-h, 72px) + 24px)"
                      className="principle-stack-card"
                    >
                      <div className="principle-card-head">
                        <span className="principle-card-num">0{index + 1}</span>
                        <span className="principle-card-tag">Standard 0{index + 1}</span>
                      </div>
                      <h3 className="principle-card-title">{item.title}</h3>
                      <p className="principle-card-body">{item.body}</p>
                      {PRINCIPLE_TAGS[index] && (
                        <div className="principle-card-foot">
                          <span className="principle-foot-tick" aria-hidden="true">✓</span>
                          <span>{PRINCIPLE_TAGS[index]}</span>
                        </div>
                      )}
                    </CardSticky>
                  ))}
                </ContainerScroll>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Practice Showcase: Architectural Practice Cards */}
      <section className="section practice-map" aria-labelledby="map-title">
        <div className="shell">
          <Reveal className="section-head text-center">
            <span className="section-kicker">Delivery Ecosystem</span>
            <h2 id="map-title">One bench, three practices.</h2>
            <div>
              <p>
                The same senior people move between the three. Follow a practice to explore services,
                delivery rhythms, and real outcome metrics.
              </p>
            </div>
          </Reveal>

          <div className="practice-cards-grid">
            {PRACTICES.map((practice, index) => (
              <Reveal as="article" key={practice.id} className="practice-card" delay={index * 100}>
                <div className="practice-card-top">
                  <div className="practice-badge-group">
                    <span className="practice-idx">0{index + 1}</span>
                    <span className="practice-meta-tag">{practice.meta}</span>
                  </div>
                  <Link to={practice.page} className="practice-corner-link" aria-label={`View ${practice.name} practice`}>
                    <TablerIcon name="arrow-up-right" size={18} />
                  </Link>
                </div>

                <div className="practice-card-heading">
                  <h3 className="practice-title">{practice.name}</h3>
                  <p className="practice-lead-text">{practice.lead}</p>
                </div>

                {practice.services && (
                  <div className="practice-tags-wrap">
                    {practice.services.slice(0, 4).map((service) => (
                      <span key={service} className="practice-tag-chip">
                        {service}
                      </span>
                    ))}
                  </div>
                )}

                {practice.proof && (
                  <div className="practice-proof-box">
                    <div className="practice-proof-label">
                      <span className="practice-proof-dot" aria-hidden="true" />
                      <span>Representative Outcome</span>
                    </div>
                    <p className="practice-proof-quote">{practice.proof}</p>
                  </div>
                )}

                <div className="practice-card-footer">
                  <Link className="practice-action-link" to={practice.page}>
                    <span>{practice.pageLabel}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Offices />
      <BottomCTA />
    </>
  );
}
