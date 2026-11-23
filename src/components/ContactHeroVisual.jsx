import TablerIcon from "./TablerIcon";
import { CONTACT } from "../data/site";

export default function ContactHeroVisual() {
  return (
    <div className="contact-hero-telemetry" aria-label="Direct Engineering Access and SLAs">
      <div className="telemetry-glass-card contact-telemetry-card">
        {/* Status header */}
        <div className="telemetry-glass-head">
          <div className="telemetry-live-badge">
            <span className="live-status-dot" aria-hidden="true" />
            <span className="telemetry-live-text">Engineering Desk Online</span>
          </div>
          <span className="telemetry-time-zones">Louisville &amp; Noida</span>
        </div>

        {/* Rapid SLAs Strip */}
        <div className="contact-sla-grid">
          <div className="contact-sla-item">
            <span className="contact-sla-val">1 Day</span>
            <span className="contact-sla-lbl">Reply Commitment</span>
            <p className="contact-sla-sub">Direct response from an active engineering lead.</p>
          </div>

          <div className="contact-sla-item">
            <span className="contact-sla-val">48h</span>
            <span className="contact-sla-lbl">Written Proposal</span>
            <p className="contact-sla-sub">Transparent scope, timelines, team and pricing.</p>
          </div>

          <div className="contact-sla-item">
            <span className="contact-sla-val">Zero</span>
            <span className="contact-sla-lbl">Retainer Required</span>
            <p className="contact-sla-sub">No lock-in or fee to start scoping your roadmap.</p>
          </div>
        </div>

        {/* Direct WhatsApp Quick-Touch Pill */}
        <a
          href={CONTACT.waBase}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-whatsapp-direct-pill"
          aria-label="Direct WhatsApp Message to Laprrk"
        >
          <div className="wa-pill-left">
            <span className="wa-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                <path
                  d="M10 2.8a7 7 0 00-6 10.6L3 17l3.7-1a7 7 0 106.3-12.6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.6 6.7c.3-.1.6 0 .8.3l.7 1.2c.1.2.1.5-.1.6l-.5.5c.5 1 1.4 1.9 2.5 2.4l.5-.5c.2-.2.4-.2.6-.1l1.2.7c.2.2.4.4.3.7-.2.8-.9 1.4-1.7 1.4-2.7-.2-5-2.5-5.2-5.2 0-.8.5-1.5 1.3-1.7"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div className="wa-pill-meta">
              <strong>Instant WhatsApp Hotline</strong>
              <span>{CONTACT.phoneIN}</span>
            </div>
          </div>
          <span className="wa-pill-arrow" aria-hidden="true">↗</span>
        </a>

        {/* Security / NDA assurance */}
        <div className="telemetry-foot-promise">
          <TablerIcon name="lock" size={15} />
          <span>Mutual NDA executed prior to reviewing sensitive technical briefs.</span>
        </div>
      </div>
    </div>
  );
}

