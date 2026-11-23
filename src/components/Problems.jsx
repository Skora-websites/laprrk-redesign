import { PROBLEMS } from "../data/site";
import { Link } from "../router";
import Reveal from "./Reveal";
import LayeredText from "./ui/layered-text";

export default function Problems() {
  return (
    <section className="section problems" id="problems" aria-labelledby="problems-title">
      <div className="shell">
        <Reveal className="section-head">
          <h2 id="problems-title">Most partners fix a third of it.</h2>
        </Reveal>

        <div className="problems-split-layout">
          {/* Left Column: Narrow Problem Table */}
          <div className="problems-content-col">
            <ol className="problem-list problem-list-narrow">
              {PROBLEMS.map((item, i) => (
                <Reveal as="li" key={item.statement} delay={i * 80}>
                  <Link className="problem-row" to={item.href}>
                    <span className="problem-index" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.statement}</h3>
                    <p>{item.detail}</p>
                    <span className="problem-link">{item.link}</span>
                  </Link>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Right Column: Animated Isometric Typography (Floating Naturally, No Card BG) */}
          <div className="problems-visual-col">
            <Reveal delay={120}>
              <div className="problems-layered-wrap">
                <LayeredText
                  fontSize="46px"
                  fontSizeMd="28px"
                  lineHeight={54}
                  lineHeightMd={34}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
