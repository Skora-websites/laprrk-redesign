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

      <section className="section about-story" aria-labelledby="about-story-title">
        <div className="shell story-grid">
          <Reveal className="story-aside">
            <h2 id="about-story-title">{ABOUT.story.title}</h2>
            <div className="story-marker">
              <span className="mono-sm">Founded 2019</span>
              <p>Greater Noida · Louisville</p>
            </div>
          </Reveal>
          <Reveal className="story-copy" delay={120}>
            {ABOUT.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Refined Mission and Vision Section */}
      <MissionVision />

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

      <section className="section practice-map" aria-labelledby="map-title">
        <div className="shell">
          <Reveal className="section-head">
            <h2 id="map-title">One bench, three practices.</h2>
            <div>
              <p>
                The same senior people move between the three. Follow a practice to see the services,
                the process and the evidence behind it.
              </p>
            </div>
          </Reveal>

          <div className="map-list">
            {PRACTICES.map((practice, index) => (
              <Reveal as="article" key={practice.id} className="map-row" delay={index * 80}>
                <div className="map-head">
                  <h3>{practice.name}</h3>
                  <span className="mono-sm">{practice.meta}</span>
                </div>
                <p>{practice.lead}</p>
                <Link className="link-inline" to={practice.page}>
                  {practice.pageLabel}
                </Link>
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
