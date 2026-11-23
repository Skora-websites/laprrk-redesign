import { EVIDENCE, TRAINING_PAGE } from "../data/site";
import { useBooking } from "../booking";
import { Link } from "../router";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Evidence from "../components/Evidence";
import BottomCTA from "../components/BottomCTA";
import FlowButton from "../components/ui/flow-button";

export default function TrainingPage() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        crumb="Training"
        title={TRAINING_PAGE.hero.title}
        lead={TRAINING_PAGE.hero.lead}
        facts={TRAINING_PAGE.hero.facts}
        actions={
          <FlowButton
            text="Plan Program"
            variant="solid"
            onClick={() => openBooking({ topic: "Train a team" })}
          />
        }
      />

      {TRAINING_PAGE.categories.map((cat) => (
        <section
          key={cat.id}
          className={`section training-${cat.id} ${cat.id === "institutes" ? "section-dark-brand" : ""}`}
          id={cat.id}
          aria-labelledby={`${cat.id}-title`}
        >
          <div className="shell">
            <Reveal className="section-head">
              <h2 id={`${cat.id}-title`}>{cat.name}</h2>
              <div>
                <p>{cat.lead}</p>
              </div>
            </Reveal>

            <div className="role-grid">
              {cat.items.map((item, index) => (
                <Reveal as="article" key={item.slug} className={`role-card ${cat.id === "institutes" ? "dark-card" : ""}`} delay={index * 50}>
                  <h3>{item.label}</h3>
                  <p>{item.note}</p>
                  <div style={{ marginTop: "auto", paddingTop: "14px" }}>
                    <Link to={`/training/${item.slug}`} className={`service-link-item ${cat.id === "institutes" ? "dark-link" : ""}`}>
                      <span>Explore syllabus & lab tracks</span>
                      <span className="service-item-arrow" aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="section-bright-azure">
        <section className="section training-process" aria-labelledby="training-process-title">
          <div className="shell">
            <Reveal className="section-head">
              <h2 id="training-process-title">{TRAINING_PAGE.process.title}</h2>
              <div>
                <p>{TRAINING_PAGE.process.lead}</p>
              </div>
            </Reveal>

            <ol className="step-list">
              {TRAINING_PAGE.process.steps.map((step, index) => (
                <Reveal as="li" key={step.title} delay={index * 70}>
                  <span className="step-when">{step.when}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <Evidence
        items={[EVIDENCE[2]]}
        id="train-work"
        title="A programme, measured at both ends."
        intro="One cohort, twelve weeks, three roles. The assessment was sat before the first lab and repeated after the capstone."
      />

      <BottomCTA topic="Corporate training" />
    </>
  );
}
