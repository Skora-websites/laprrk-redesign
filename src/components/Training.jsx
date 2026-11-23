import { TRAINING } from "../data/site";
import Reveal from "./Reveal";

export default function Training({ title = "Training that ends with something built." }) {
  return (
    <section className="section training" id="training" aria-labelledby="training-title">
      <div className="shell">
        <div className="training-grid">
          <Reveal className="training-copy">
            <h2 id="training-title">{title}</h2>
            <p className="training-lead">
              Live trainers, real repositories, code review. About 70% of every programme is lab time,
              and each track closes with a capstone reviewed by a senior engineer — not a certificate
              for attendance.
            </p>

            <div className="training-tracks">
              <div>
                <h3>For company teams</h3>
                <ul className="tick-list">
                  {TRAINING.corporate.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>For colleges and institutes</h3>
                <ul className="tick-list">
                  {TRAINING.institutes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <dl className="training-stats">
              <div>
                <dt>Lab time</dt>
                <dd>~70%</dd>
              </div>
              <div>
                <dt>Batch size</dt>
                <dd>15–30</dd>
              </div>
              <div>
                <dt>Tracks</dt>
                <dd>18</dd>
              </div>
              <div>
                <dt>Score lift, average</dt>
                <dd>38%</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal as="figure" className="training-figure" delay={100}>
            <img
              src="/images/training-lab.jpg"
              alt="Engineers working at monitors in a Laprrk training lab, one pointing out a line of code"
              width="1248"
              height="832"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              A live batch in progress. Every participant works on their own branch and gets review
              on it.
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
