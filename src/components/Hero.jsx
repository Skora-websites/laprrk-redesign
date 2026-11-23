import { useEffect, useState } from "react";
import { Link } from "../router";
import { useBooking } from "../booking";
import HeroBackdrop from "./HeroBackdrop";
import FlowButton from "./ui/flow-button";

const INTRO_KEY = "laprrk.intro.seen";

function shouldRunIntro() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return window.sessionStorage.getItem(INTRO_KEY) !== "1";
  } catch {
    return true;
  }
}

function Intro({ phase }) {
  return (
    <div className={`intro ${phase === "out" ? "is-out" : ""}`} aria-hidden="true">
      <div className="intro-plate">
        <img src="/brand/laprrk-logo.webp" alt="" width="400" height="98" fetchPriority="high" />
      </div>
    </div>
  );
}

function PhoneUI() {
  return (
    <div className="pui pui-website-preview">
      {/* Phone Status Bar */}
      <div className="pui-status">
        <span className="pui-time">9:41</span>
        <span className="pui-signal" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className="pui-wifi" aria-hidden="true" />
        <span className="pui-battery" aria-hidden="true" />
      </div>

      {/* Screenshot of this website */}
      <div className="pui-screen-scroll">
        <img
          src="/images/mobile-site-preview.svg"
          alt="Laprrk mobile website preview"
          className="pui-screen-img"
          width="252"
          height="490"
          loading="eager"
        />
      </div>

      <div className="pui-home-bar" aria-hidden="true" />
    </div>
  );
}

export default function Hero({ screenshotSrc = null }) {
  const { openBooking } = useBooking();
  const [introRun] = useState(shouldRunIntro);
  const [introPhase, setIntroPhase] = useState(introRun ? "hold" : "done");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!introRun) return undefined;
    const t1 = window.setTimeout(() => setIntroPhase("out"), 760);
    const t2 = window.setTimeout(() => {
      setIntroPhase("done");
      try {
        window.sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        /* private mode */
      }
    }, 1220);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [introRun]);

  const handleQuickSubmit = (event) => {
    event.preventDefault();
    openBooking({ prefill: query.trim() });
  };

  const stageStyle = { "--intro": introRun ? "0.6s" : "0.05s" };

  return (
    <>
      {introPhase !== "done" && <Intro phase={introPhase} />}

      <section className="hero" id="top" aria-labelledby="hero-title" style={stageStyle}>
        <HeroBackdrop />

        <div className="hero-shell">
          <div className="hero-layout">
                <div className="hero-copy">
                  <h1 className="hero-title" id="hero-title">
                    <span className="hero-line" style={{ "--i": 0 }}>
                      <span className="hero-line-inner">Software built.</span>
                    </span>
                    <span className="hero-line" style={{ "--i": 1 }}>
                      <span className="hero-line-inner">Engineers placed.</span>
                    </span>
                    <span className="hero-line" style={{ "--i": 2 }}>
                      <span className="hero-line-inner">
                        Teams trained.
                      </span>
                    </span>
                  </h1>

                  <p className="hero-lede">
                    Production software and AI systems, screened engineers in five to seven
                    business days, and hands-on training with about 70% lab time. One senior team
                    across Greater Noida and Louisville.
                  </p>

                  <form className="hero-pill" onSubmit={handleQuickSubmit}>
                    <label className="sr-only" htmlFor="hero-need">
                      What do you need built, hired or trained?
                    </label>
                    <input
                      id="hero-need"
                      type="text"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="What do you need?"
                      autoComplete="off"
                    />
                    <FlowButton type="submit" text="Book Call" size="sm" variant="solid" />
                  </form>

                  <p className="hero-note">
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <rect x="3" y="6.5" width="10" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M5.4 6.5V4.4a2.6 2.6 0 015.2 0v2.1" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                    NDA before details · Written proposal within 48 hours · No retainer
                  </p>
                </div>

                <div className="hero-art">
                  {/* Concentric luminous cyan aura circles behind phone */}
                  <div className="hero-aura-circles" aria-hidden="true">
                    <span className="aura-halo-soft" />
                    <span className="aura-ring-outer" />
                    <span className="aura-ring-inner" />
                    <span className="aura-disk-glow" />
                  </div>

                  {/* Circuit connecting lines between cards and phone */}
                  <svg className="hero-circuit-lines" viewBox="0 0 540 560" fill="none" aria-hidden="true">
                    <defs>
                      <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Trace 1: Shortlist card right edge -> phone bezel */}
                    <path
                      className="circuit-path"
                      d="M 212 72 H 250"
                      stroke="#12AFD8"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      filter="url(#circuitGlow)"
                    />
                    <circle
                      cx="256"
                      cy="72"
                      r="4"
                      fill="#ffffff"
                      stroke="#12AFD8"
                      strokeWidth="1.6"
                      filter="url(#circuitGlow)"
                    />

                    {/* Trace 2: Time card right edge -> phone bezel */}
                    <path
                      className="circuit-path"
                      d="M 194 216 H 250"
                      stroke="#12AFD8"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      filter="url(#circuitGlow)"
                    />
                    <circle
                      cx="256"
                      cy="216"
                      r="4"
                      fill="#ffffff"
                      stroke="#12AFD8"
                      strokeWidth="1.6"
                      filter="url(#circuitGlow)"
                    />

                    {/* Trace 3: Time card bottom -> elbow -> satisfied card left edge */}
                    <path
                      className="circuit-path"
                      d="M 100 280 V 368 Q 100 380 112 380 H 141"
                      stroke="#12AFD8"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      filter="url(#circuitGlow)"
                    />
                    <circle
                      cx="100"
                      cy="280"
                      r="3"
                      fill="#ffffff"
                      stroke="#12AFD8"
                      strokeWidth="1.6"
                      filter="url(#circuitGlow)"
                    />
                    <circle
                      cx="145"
                      cy="380"
                      r="3"
                      fill="#ffffff"
                      stroke="#12AFD8"
                      strokeWidth="1.6"
                      filter="url(#circuitGlow)"
                    />
                  </svg>

                  {/* 3D Hyperrealistic Phone */}
                  <div className="hero-phone-wrap">
                    <div
                      className="hero-phone"
                      role="img"
                      aria-label="Preview of the Laprrk mobile website"
                    >
                      <div className="phone-bezel">
                        <span className="phone-island" aria-hidden="true">
                          <i className="phone-camera-lens" />
                        </span>
                        {screenshotSrc ? (
                          <div className="phone-shot-wrap">
                            <img className="phone-shot" src={screenshotSrc} alt="Laprrk mobile site" />
                            <div className="pui-live-card pui-live-card-overlay">
                              <div className="pui-card-top">
                                <span className="pui-live-status">
                                  <i className="pui-live-dot" />
                                  Live Shortlist
                                </span>
                                <span className="pui-card-pill">5–7 days</span>
                              </div>
                              <div className="pui-card-content">
                                <div className="pui-card-stat">
                                  <strong>5 Senior Devs</strong>
                                  <small>Screened &amp; Vetted</small>
                                </div>
                                <div className="pui-card-badge">Top 3%</div>
                              </div>
                              <div className="pui-card-progress">
                                <div className="pui-progress-fill" />
                              </div>
                              <div className="pui-card-tags">
                                <span>React</span>
                                <span>Node</span>
                                <span>AWS</span>
                                <span>AI Eng</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <PhoneUI />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card 1: Top-Left Milestone Card */}
                  <div className="hero-card hero-card-shortlist" aria-label="Written proposal in 48 hours">
                    <div className="card-shortlist-head">
                      <span className="card-shortlist-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" fill="none">
                          <rect x="2.5" y="3.5" width="15" height="14" rx="3.5" stroke="#0B6FC4" strokeWidth="1.6" />
                          <path d="M2.5 7.5h15" stroke="#0B6FC4" strokeWidth="1.4" />
                          <path d="M6.5 1.5v3M13.5 1.5v3" stroke="#12AFD8" strokeWidth="1.6" strokeLinecap="round" />
                          <path d="M6.5 11.5l2 2 5-5" stroke="#12AFD8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div className="card-shortlist-meta">
                        <strong className="shortlist-days">48 hours</strong>
                        <span className="shortlist-lbl">Written proposal</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Middle-Left Time to Shortlist Card */}
                  <div className="hero-card hero-card-time" aria-label="Time to shortlist: 5 days">
                    <div className="card-time-head">
                      <span className="card-time-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.3" />
                          <path
                            d="M8 1.5v1.8M8 12.7v1.8M1.5 8h1.8M12.7 8h1.8M3.4 3.4l1.3 1.3M11.3 11.3l1.3 1.3M3.4 12.6l1.3-1.3M11.3 4.7l1.3-1.3"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span className="card-time-title">Time to Shortlist</span>
                    </div>

                    <div className="card-time-wave" aria-hidden="true">
                      <svg viewBox="0 0 140 34" fill="none">
                        <path
                          className="time-wave-path"
                          d="M2 24 C 20 24, 28 8, 46 12 C 64 16, 72 4, 90 6 C 108 8, 122 24, 138 20"
                          stroke="#12AFD8"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle className="time-wave-dot" cx="90" cy="6" r="3.2" fill="#FFFFFF" stroke="#12AFD8" strokeWidth="2.2" />
                      </svg>
                    </div>

                    <div className="card-time-val">
                      <strong className="time-number">5</strong>
                      <span className="time-unit">days</span>
                    </div>
                  </div>

                  {/* Card 3: Bottom Satisfied Clients & Engineers Card (overlapping phone) */}
                  <div className="hero-card hero-card-satisfied" aria-label="500+ satisfied clients and engineers">
                    <div className="satisfied-top-row" aria-hidden="true">
                      <div className="satisfied-avatars-cluster">
                        <span className="avatar-chip">
                          <img src="/images/avatar-1.svg" alt="Engineer" width="28" height="28" />
                        </span>
                        <span className="avatar-chip">
                          <img src="/images/avatar-2.svg" alt="Client" width="28" height="28" />
                        </span>
                        <span className="avatar-chip">
                          <img src="/images/avatar-3.svg" alt="Placed professional" width="28" height="28" />
                        </span>
                      </div>
                      <svg className="satisfied-ribbon" viewBox="0 0 92 26" fill="none">
                        <defs>
                          <linearGradient id="satisfiedRibbonGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
                            <stop offset="45%" stopColor="#12AFD8" stopOpacity="0.75" />
                            <stop offset="100%" stopColor="#7fd3e9" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M2 13 C 24 2, 44 24, 68 11 C 78 5, 85 9, 90 13"
                          stroke="url(#satisfiedRibbonGrad)"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <strong className="satisfied-number">500+</strong>
                    <span className="satisfied-label">SATISFIED CLIENTS &amp; ENGINEERS</span>
                  </div>
                </div>
              </div>

            <div className="hero-bento">
              <article className="bento bento-metric" aria-label="Clients since 2019">
                <strong className="bento-metric-value">50+</strong>
                <div className="bento-metric-foot">
                  <span className="bento-pill">Since 2019</span>
                  <p>Clients across India and the US</p>
                </div>
              </article>

              <article className="bento bento-services" aria-label="Core Engineering Capabilities">
                {/* Refined subtle blueprint topography wireframe */}
                <svg className="bento-waves" viewBox="0 0 420 220" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="bento-wire" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#7FD3E9" stopOpacity="0.4" />
                      <stop offset="0.5" stopColor="#12AFD8" stopOpacity="0.25" />
                      <stop offset="1" stopColor="#0B6FC4" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="url(#bento-wire)" strokeWidth="1.2">
                    <path d="M-20 180 C80 180 110 90 220 95 C330 100 370 150 440 120" />
                    <path d="M-20 150 C80 150 120 70 230 75 C340 80 370 125 440 100" />
                    <path d="M-20 120 C80 120 130 50 240 55 C350 60 380 100 440 80" />
                    <path d="M-20 90 C80 90 140 30 250 35 C360 40 390 75 440 60" />
                  </g>
                </svg>

                <div className="bento-services-head">
                  <span className="bento-services-title">
                    <span className="bento-status-dot" aria-hidden="true" />
                    Core Practices
                  </span>
                  <span className="bento-pill-count">17 Specialisms</span>
                </div>

                <div className="bento-chips-grid">
                  <span className="svc-chip">Custom Software</span>
                  <span className="svc-chip">Applied AI &amp; LLMs</span>
                  <span className="svc-chip">Cloud &amp; DevOps</span>
                  <span className="svc-chip">GCC Squads</span>
                  <span className="svc-chip">Tech Bootcamps</span>
                </div>

                <div className="bento-services-foot">
                  <span>Two-week sprints · Repos in your cloud</span>
                </div>
              </article>

              <article className="bento bento-model">
                <div className="model-suggest">
                  <p className="model-label">
                    <span className="model-mark" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 16V9M12 16V5M19 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    Laprrk sprint model
                  </p>
                  <p className="model-body">
                    Two-week sprints with direct code access. A working demo at the end of every
                    one.
                  </p>
                  <Link className="model-link" to="/case-studies">
                    See verified case studies
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3.5 8h9M9.2 4.7L12.5 8l-3.3 3.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="model-tiles">
                  <div className="model-tile">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <rect x="2.8" y="4" width="14.4" height="12.6" rx="2.4" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M2.8 7.7h14.4M6.6 2.6v2.6M13.4 2.6v2.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <span>5–7 day shortlist</span>
                  </div>
                  <div className="model-tile">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M8 2.8h4M8.8 2.8v4.6l-3.4 6.2a2.3 2.3 0 002 3.4h5.2a2.3 2.3 0 002-3.4l-3.4-6.2V2.8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                      <path d="M7.2 12.6h5.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <span>70% lab time</span>
                  </div>
                  <div className="model-tile">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <rect x="3.4" y="8.2" width="13.2" height="9" rx="2.2" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M6.4 8.2V5.8a3.6 3.6 0 017.2 0v2.4" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                    <span>NDA before details</span>
                  </div>
                  <div className="model-tile">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="7.4" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M2.8 10h14.4M10 2.6c2 2 3.1 4.6 3.1 7.4S12 15.4 10 17.4C8 15.4 6.9 12.8 6.9 10S8 4.6 10 2.6Z" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    <span>US and India offices</span>
                  </div>
                </div>
              </article>
            </div>
        </div>
      </section>
    </>
  );
}
