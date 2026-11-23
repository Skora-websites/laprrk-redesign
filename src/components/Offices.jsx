import { CONTACT } from "../data/site";
import Reveal from "./Reveal";

export default function Offices() {
  return (
    <section className="section offices" id="offices" aria-labelledby="offices-title">
      <div className="shell">
        <div className="offices-grid">
          <Reveal as="figure" className="offices-figure">
            <img
              src="/images/office-facade.jpg"
              alt="The glass and stone facade of an office building against a pale morning sky"
              width="1248"
              height="832"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Delivery from Greater Noida West; client hours from Louisville.</figcaption>
          </Reveal>

          <Reveal className="offices-copy" delay={100}>
            <h2 id="offices-title">Two offices, so nobody waits a day for an answer.</h2>
            <p>
              The India team works your morning; the US team covers your afternoon. One coordinator
              sits across both, which is why a question asked in Louisville at 9am is usually
              answered before the end of the Indian working day.
            </p>

            <div className="office-list">
              <div className="office">
                <h3>Greater Noida, India</h3>
                <p>{CONTACT.addressIN}</p>
                <p className="office-meta">
                  <a href={`tel:${CONTACT.telIN}`}>{CONTACT.phoneIN}</a>
                  <span>{CONTACT.hoursIN}</span>
                </p>
              </div>
              <div className="office">
                <h3>Louisville, Kentucky</h3>
                <p>{CONTACT.addressUS}</p>
                <p className="office-meta">
                  <a href={`tel:${CONTACT.telUS}`}>{CONTACT.phoneUS}</a>
                  <span>{CONTACT.hoursUS}</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
