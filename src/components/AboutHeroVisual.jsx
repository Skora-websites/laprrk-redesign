import TablerIcon from "./TablerIcon";

export default function AboutHeroVisual() {
  return (
    <div className="about-hero-telemetry" aria-label="Laprrk Global Engineering Bench Telemetry">
      <div className="telemetry-glass-card">
        {/* Status header with live pulse */}
        <div className="telemetry-glass-head">
          <div className="telemetry-live-badge">
            <span className="live-status-dot" aria-hidden="true" />
            <span className="telemetry-live-text">Synchronous Delivery Overlap</span>
          </div>
          <span className="telemetry-time-zones">UTC+5:30 ↔ EST</span>
        </div>

        {/* Operating Hubs Grid */}
        <div className="telemetry-hubs-grid">
          {/* Hub 1: Greater Noida */}
          <div className="telemetry-hub-box">
            <div className="hub-box-head">
              <span className="hub-dot" aria-hidden="true" />
              <strong>Greater Noida, IN</strong>
            </div>
            <p className="hub-desc">Delivery Center, R&amp;D &amp; Hands-on Labs</p>
            <div className="hub-meta-chips">
              <span className="hub-chip">200+ Screened Devs</span>
              <span className="hub-chip">17 Services</span>
            </div>
          </div>

          {/* Hub 2: Louisville, USA */}
          <div className="telemetry-hub-box">
            <div className="hub-box-head">
              <span className="hub-dot hub-dot-us" aria-hidden="true" />
              <strong>Louisville, KY, USA</strong>
            </div>
            <p className="hub-desc">Client Architecture &amp; Executive Steering</p>
            <div className="hub-meta-chips">
              <span className="hub-chip">US Business Hours</span>
              <span className="hub-chip">Direct IP Assignment</span>
            </div>
          </div>
        </div>

        {/* Bench Metric Ribbon */}
        <div className="telemetry-bench-ribbon">
          <div className="bench-stat-col">
            <strong className="bench-val">2019</strong>
            <span className="bench-lbl">Founded</span>
          </div>
          <div className="bench-stat-col">
            <strong className="bench-val">50+</strong>
            <span className="bench-lbl">Global Clients</span>
          </div>
          <div className="bench-stat-col">
            <strong className="bench-val">~70%</strong>
            <span className="bench-lbl">Lab Ratio</span>
          </div>
          <div className="bench-stat-col">
            <strong className="bench-val">2-Wk</strong>
            <span className="bench-lbl">Sprint Demos</span>
          </div>
        </div>

        {/* Bottom guarantee badge */}
        <div className="telemetry-foot-promise">
          <TablerIcon name="shield-check" size={16} />
          <span>One accountable engineering team — zero vendor hand-offs.</span>
        </div>
      </div>
    </div>
  );
}

