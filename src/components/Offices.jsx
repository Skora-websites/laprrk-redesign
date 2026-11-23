import { CONTACT } from "../data/site";
import Reveal from "./Reveal";
import TablerIcon from "./TablerIcon";

export default function Offices() {
  return (
    <section className="section offices" id="offices" aria-labelledby="offices-title">
      <div className="shell">
        <div className="offices-grid">
          <Reveal as="figure" className="offices-figure">
            <div className="offices-img-frame">
              <img
                src="/images/office-facade.jpg"
                alt="The glass and stone facade of an office building against a pale morning sky"
                width="1248"
                height="832"
                loading="lazy"
                decoding="async"
              />
              <div className="offices-visual-overlay">
                <div className="visual-overlay-badge">
                  <span className="live-status-dot" aria-hidden="true" />
                  <span>Dual Hub Synchronization</span>
                </div>
                <div className="visual-overlay-hubs">
                  <div className="overlay-hub-item">
                    <span className="overlay-hub-tz">IST · UTC+5:30</span>
                    <span className="overlay-hub-loc">Greater Noida West</span>
                  </div>
                  <div className="overlay-hub-sep">⟷</div>
                  <div className="overlay-hub-item">
                    <span className="overlay-hub-tz">ET · UTC-5</span>
                    <span className="overlay-hub-loc">Louisville, KY</span>
                  </div>
                </div>
              </div>
            </div>
            <figcaption>Delivery from Greater Noida West; client hours from Louisville.</figcaption>
          </Reveal>

          <Reveal className="offices-copy" delay={100}>
            <span className="section-kicker">Global Presence</span>
            <h2 id="offices-title">Two offices, so nobody waits a day for an answer.</h2>
            <p className="offices-lede">
              The India team works your morning; the US team covers your afternoon. One coordinator
              sits across both, which is why a question asked in Louisville at 9am is usually
              answered before the end of the Indian working day.
            </p>

            <div className="office-list">
              <div className="office-hub-card">
                <div className="office-card-top">
                  <span className="office-type-tag">Delivery &amp; Engineering HQ</span>
                  <span className="office-active-indicator" title="Active Delivery Hub">
                    <span className="active-dot" aria-hidden="true" />
                    <span>Active Hub</span>
                  </span>
                </div>
                <h3 className="office-title">Greater Noida, India</h3>
                <p className="office-address">
                  <TablerIcon name="map-pin" size={16} />
                  <span>{CONTACT.addressIN}</span>
                </p>
                <div className="office-meta">
                  <a href={`tel:${CONTACT.telIN}`} className="office-phone-link">
                    <TablerIcon name="phone" size={15} />
                    <span>{CONTACT.phoneIN}</span>
                  </a>
                  <span className="office-hours-info">
                    <TablerIcon name="clock" size={15} />
                    <span>{CONTACT.hoursIN}</span>
                  </span>
                </div>
                <div className="office-focus-foot">
                  <span>Sprint engineering, candidate labs &amp; corporate upskilling</span>
                </div>
              </div>

              <div className="office-hub-card">
                <div className="office-card-top">
                  <span className="office-type-tag">Client Operations</span>
                  <span className="office-active-indicator" title="Active Client Operations">
                    <span className="active-dot" aria-hidden="true" />
                    <span>Active Hub</span>
                  </span>
                </div>
                <h3 className="office-title">Louisville, Kentucky</h3>
                <p className="office-address">
                  <TablerIcon name="map-pin" size={16} />
                  <span>{CONTACT.addressUS}</span>
                </p>
                <div className="office-meta">
                  <a href={`tel:${CONTACT.telUS}`} className="office-phone-link">
                    <TablerIcon name="phone" size={15} />
                    <span>{CONTACT.phoneUS}</span>
                  </a>
                  <span className="office-hours-info">
                    <TablerIcon name="clock" size={15} />
                    <span>{CONTACT.hoursUS}</span>
                  </span>
                </div>
                <div className="office-focus-foot">
                  <span>Commercial governance, scoping &amp; US business day overlap</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
