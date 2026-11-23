import { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import TablerIcon from "../components/TablerIcon";
import BottomCTA from "../components/BottomCTA";
import { FlowButton } from "../components/ui/flow-button";
import { Link } from "../router";
import { CONTACT } from "../data/site";

const TOC_SECTIONS = [
  { id: "preamble", label: "Statutory Notice" },
  { id: "fiduciary", label: "1. Data Fiduciary" },
  { id: "zero-db", label: "2. Zero-DB Architecture" },
  { id: "data-categories", label: "3. Categories of Data" },
  { id: "lawful-bases", label: "4. Lawful Bases" },
  { id: "confidentiality", label: "5. Client Confidentiality" },
  { id: "processors", label: "6. Data Processors" },
  { id: "retention", label: "7. Retention & Deletion" },
  { id: "cross-border", label: "8. Cross-Border Transfers" },
  { id: "rights", label: "9. Your Statutory Rights" },
  { id: "cookies", label: "10. Zero Cookie Policy" },
  { id: "breach-notice", label: "11. Incident Response" },
  { id: "grievance", label: "12. Grievance Officer" },
];

const FACTS = [
  { label: "Effective Date", value: "Nov 21, 2026" },
  { label: "On-Site Storage", value: "Zero DB (Stateless)" },
  { label: "Tracking Cookies", value: "0 Cookies / Pixels" },
  { label: "Compliance", value: "DPDPA 2023 & GDPR" },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("preamble");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = TOC_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(TOC_SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(TOC_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="legal-page">
      <PageHero
        crumb="Privacy Policy"
        title="Privacy Policy &amp; Data Protection"
        lead="Comprehensive transparency disclosure covering our stateless zero-database website architecture, India's DPDP Act 2023, EU GDPR, and enterprise confidentiality protocols."
        facts={FACTS}
        actions={
          <>
            <FlowButton
              text="Print / Save PDF"
              variant="outline"
              onClick={handlePrint}
            />
            <FlowButton
              to="/contact"
              text="Contact Privacy Desk"
              variant="primary"
            />
          </>
        }
      />

      <section className="section legal-page-section" aria-label="Privacy Policy Document Content">
        <div className="shell">
          <div className="legal-layout">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="legal-sidebar" aria-label="Document Navigation">
              <div className="legal-toc-card">
                <div className="legal-toc-header">
                  <TablerIcon name="shield-check" size={17} />
                  <span>Document Index</span>
                </div>
                <nav className="legal-toc-list" aria-label="Table of contents">
                  {TOC_SECTIONS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`legal-toc-link ${activeSection === item.id ? "is-active" : ""}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                    >
                      <span className="legal-toc-indicator" aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="legal-doc-info">
                <div className="legal-info-item">
                  <span className="legal-info-label">Data Fiduciary</span>
                  <span className="legal-info-val">Laprrk Technology Solutions LLP</span>
                </div>
                <div className="legal-info-item">
                  <span className="legal-info-label">Statutory Standards</span>
                  <span className="legal-info-val">DPDPA 2023 (India) &amp; GDPR (EU/UK)</span>
                </div>
                <div className="legal-info-item">
                  <span className="legal-info-label">Version</span>
                  <span className="legal-info-val">2.0 · Privacy-by-Design</span>
                </div>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="legal-print-btn"
                  title="Print this document or export to PDF"
                >
                  <TablerIcon name="printer" size={15} />
                  <span>Print Document</span>
                </button>
              </div>
            </aside>

            {/* Main Legal Content Article */}
            <article className="legal-content">
              {/* Preamble / Notice */}
              <div id="preamble" className="legal-preamble-card">
                <div className="legal-preamble-badge">
                  <TablerIcon name="lock" size={18} />
                  <span>Data Protection Disclosure</span>
                </div>
                <p>
                  Laprrk Technology Solutions LLP ("Laprrk", "we", "our", or "us") operates as a{" "}
                  <strong>Data Fiduciary</strong> under India's Digital Personal Data Protection Act, 2023 (DPDPA 2023)
                  and as a <strong>Data Controller</strong> under the EU/UK General Data Protection Regulation (GDPR).
                  This document explains our privacy architecture, zero-database edge design, data flows, and statutory rights.
                </p>
                <div className="legal-meta-strip">
                  <span>Effective Date: <strong>November 21, 2026</strong></span>
                  <span className="meta-sep" aria-hidden="true">·</span>
                  <span>Document ID: <strong>LTS-PRIV-2026-V2</strong></span>
                </div>
              </div>

              {/* Section 1 */}
              <section id="fiduciary" className="legal-section">
                <div className="legal-section-tag">01 / FIDUCIARY IDENTITY</div>
                <h2 className="legal-section-title">1. Data Fiduciary &amp; Controller Identity</h2>
                <div className="legal-prose">
                  <p>
                    The entity responsible for processing personal data through <strong>laprrk.com</strong> is:
                  </p>
                  <div className="legal-callout">
                    <h4>Laprrk Technology Solutions LLP</h4>
                    <p>
                      <strong>Corporate &amp; Delivery Office:</strong> Office 605, 6th Floor, Raksha Addela Mart, Gaur City 2, Greater Noida West, Uttar Pradesh 201318, India<br />
                      <strong>US Client Office:</strong> Louisville, Kentucky, United States<br />
                      <strong>Official Inquiries:</strong> <a href="mailto:info@laprrk.com">info@laprrk.com</a> · Telephones: <a href={`tel:${CONTACT.telIN}`}>{CONTACT.phoneIN}</a> (India) · <a href={`tel:${CONTACT.telUS}`}>{CONTACT.phoneUS}</a> (USA)
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="zero-db" className="legal-section">
                <div className="legal-section-tag">02 / PRIVACY-BY-DESIGN</div>
                <h2 className="legal-section-title">2. Privacy-by-Design: Zero On-Site Database Storage</h2>
                <div className="legal-prose">
                  <p>
                    Our public website is engineered from first principles as an edge-delivered static application. To guarantee maximum data minimization:
                  </p>
                  <ul className="legal-list">
                    <li>
                      <strong>No Web Server Database:</strong> We do not operate or connect this website to a server-side user database, SQL store, or headless CMS. There is no central pool of submitted records vulnerable to website breaches.
                    </li>
                    <li>
                      <strong>No Persistent Account Profiles:</strong> The website does not provide user logins, account creation, or public profile databases.
                    </li>
                    <li>
                      <strong>Direct Client-Side Dispatch:</strong> When you complete a consultation form or quick-contact inquiry, your browser formats the details directly into an end-to-end encrypted WhatsApp communication link (Meta Platforms) or a standard email message on your local device. The website itself stores zero input records.
                    </li>
                  </ul>
                  <div className="legal-callout legal-callout-highlight">
                    <h4>Stateless Edge Architecture</h4>
                    <p>
                      Because our public website maintains zero persistent databases, your submitted inquiry parameters never touch an unencrypted intermediary web server.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="data-categories" className="legal-section">
                <div className="legal-section-tag">03 / DATA CATEGORIES</div>
                <h2 className="legal-section-title">3. Categories of Personal Data Collected</h2>
                <div className="legal-prose">
                  <p>We only receive personal data that you voluntarily transmit through direct inquiry channels:</p>
                  <div className="legal-table-wrap">
                    <table className="legal-table">
                      <thead>
                        <tr>
                          <th>Data Category</th>
                          <th>Specific Data Elements</th>
                          <th>Collection Context</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Identity &amp; Contact</strong></td>
                          <td>Name, business email address, telephone number, job title, company name.</td>
                          <td>Consultation booking modal, quick contact desk, direct email inquiries.</td>
                        </tr>
                        <tr>
                          <td><strong>Project &amp; Technical Brief</strong></td>
                          <td>Technical requirements, architecture stack, hiring specifications, team size, budget timeline.</td>
                          <td>Consultation scoping and technical feasibility review.</td>
                        </tr>
                        <tr>
                          <td><strong>Technical Network Logs</strong></td>
                          <td>IP address, browser user-agent, HTTP request headers (processed transiently in volatile server memory).</td>
                          <td>Edge CDN infrastructure (Cloudflare / Vercel) strictly for DDoS mitigation, TLS encryption, and DNS routing.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="lawful-bases" className="legal-section">
                <div className="legal-section-tag">04 / LEGAL BASES</div>
                <h2 className="legal-section-title">4. Lawful Bases for Processing</h2>
                <div className="legal-prose">
                  <p>We process personal data only when an explicit, legitimate lawful basis exists under applicable data protection law:</p>
                  <ul className="legal-list">
                    <li>
                      <strong>Pre-contractual Steps &amp; Contract Performance (GDPR Art. 6(1)(b) / DPDPA Section 4 &amp; 7):</strong> Processing inquiry data to evaluate technical feasibility, coordinate mutual Non-Disclosure Agreements (NDAs), and prepare formal written commercial proposals (delivered within 48 hours).
                    </li>
                    <li>
                      <strong>Informed Consent (DPDPA Section 6 / GDPR Art. 6(1)(a)):</strong> When you actively click "Open WhatsApp" or send an email inquiry, you consent to transmission of your brief for commercial consultation.
                    </li>
                    <li>
                      <strong>Legitimate Interests &amp; Security (GDPR Art. 6(1)(f) / IT Act 2000):</strong> Transient processing of edge network logs to protect network security, maintain uptime, and defend against denial-of-service attacks.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section id="confidentiality" className="legal-section">
                <div className="legal-section-tag">05 / CONFIDENTIALITY</div>
                <h2 className="legal-section-title">5. Strict Client Confidentiality &amp; Mutual NDAs</h2>
                <div className="legal-prose">
                  <p>
                    As an engineering firm delivering enterprise custom software, practitioner hiring, and corporate training:
                  </p>
                  <ul className="legal-list">
                    <li>
                      All proprietary codebases, technical architectures, candidate compensation rubrics, and organizational charts are governed by formal, bilateral Non-Disclosure Agreements (NDAs) executed prior to technical discovery.
                    </li>
                    <li>
                      Delivery engineers operate under strict least-privilege repository access protocols enforced with Multi-Factor Authentication (MFA), with system privileges revoked immediately upon milestone acceptance.
                    </li>
                    <li>
                      We never sell, broker, or monetize client inquiry details, candidate profiles, or project specifications.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section id="processors" className="legal-section">
                <div className="legal-section-tag">06 / INFRASTRUCTURE</div>
                <h2 className="legal-section-title">6. Third-Party Service Providers (Data Processors)</h2>
                <div className="legal-prose">
                  <p>We engage only reputable enterprise infrastructure providers with verified security controls:</p>
                  <div className="legal-table-wrap">
                    <table className="legal-table">
                      <thead>
                        <tr>
                          <th>Provider</th>
                          <th>Service Purpose</th>
                          <th>Data Handled &amp; Transfer Safeguards</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Meta Platforms Ireland / WhatsApp LLC</strong></td>
                          <td>Client-initiated messaging &amp; technical inquiry routing.</td>
                          <td>End-to-end encrypted messaging content. Subject to WhatsApp standard business terms and encryption protocols.</td>
                        </tr>
                        <tr>
                          <td><strong>Cloudflare Inc. / Vercel Inc.</strong></td>
                          <td>Global Content Delivery Network (CDN) &amp; edge DNS.</td>
                          <td>Transient HTTP server request metadata; TLS 1.3 encryption in transit; SOC 2 Type II certified.</td>
                        </tr>
                        <tr>
                          <td><strong>Google LLC (Alphabet Inc.)</strong></td>
                          <td>Web font asset rendering (Exo 2, Oxanium, Source Sans 3).</td>
                          <td>Transient IP address transmission during font stylesheet retrieval. Open-source font licensing.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="retention" className="legal-section">
                <div className="legal-section-tag">07 / DATA RETENTION</div>
                <h2 className="legal-section-title">7. Data Retention &amp; Deletion Schedule</h2>
                <div className="legal-prose">
                  <p>We adhere to strict data minimization principles:</p>
                  <ul className="legal-list">
                    <li>
                      <strong>Pre-Sales Inquiries:</strong> Communications regarding inquiries that do not result in a commercial engagement are securely deleted after <strong>180 calendar days</strong>.
                    </li>
                    <li>
                      <strong>Client Engagement Records:</strong> Master Service Agreements (MSAs), Statements of Work (SOWs), and tax invoices are retained for <strong>7 years</strong> to comply with statutory Indian LLP and US federal corporate accounting requirements.
                    </li>
                    <li>
                      <strong>Candidate Resumes:</strong> Sourced hiring resumes are retained strictly for the duration of the recruitment mandate and destroyed or anonymized unless candidate consent is obtained for future shortlists.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8 */}
              <section id="cross-border" className="legal-section">
                <div className="legal-section-tag">08 / GLOBAL TRANSFERS</div>
                <h2 className="legal-section-title">8. International Cross-Border Transfers</h2>
                <div className="legal-prose">
                  <p>
                    Laprrk maintains corporate delivery in Greater Noida, India, and client account operations in Louisville, Kentucky, USA. Data submitted via our website may be accessed by authorized team members across both jurisdictions under strict access controls. Cross-border transfers comply with Section 16 of the DPDP Act 2023 and Chapter V of the EU GDPR (using Standard Contractual Clauses where applicable).
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="rights" className="legal-section">
                <div className="legal-section-tag">09 / STATUTORY RIGHTS</div>
                <h2 className="legal-section-title">9. Your Statutory Rights</h2>
                <div className="legal-prose">
                  <p>Depending on your jurisdiction, you possess enforceable rights regarding your personal information:</p>
                  <ul className="legal-list">
                    <li>
                      <strong>Right of Access &amp; Confirmation:</strong> Request a summary of personal data held about you and processing activities.
                    </li>
                    <li>
                      <strong>Right to Correction &amp; Erasure:</strong> Request the correction of inaccurate data or the deletion of personal data no longer necessary for the stated purpose.
                    </li>
                    <li>
                      <strong>Right of Grievance Redressal:</strong> File a formal grievance regarding personal data handling with our designated officer.
                    </li>
                    <li>
                      <strong>Right to Nominate (DPDPA 2023):</strong> Designate an individual to exercise your rights in the event of death or incapacity.
                    </li>
                    <li>
                      <strong>Right to Restrict or Object (GDPR):</strong> Object to processing based on legitimate interests or request processing restriction.
                    </li>
                  </ul>
                  <p>
                    To exercise any right, submit a verified request to <a href="mailto:grievance@laprrk.com">grievance@laprrk.com</a>. We respond to all verified requests within statutory timeframes (within 30 days).
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="cookies" className="legal-section">
                <div className="legal-section-tag">10 / TRACKING DISCLOSURE</div>
                <h2 className="legal-section-title">10. Cookie &amp; Tracking Policy (ePrivacy Compliance)</h2>
                <div className="legal-prose">
                  <div className="legal-callout legal-callout-highlight">
                    <h4>Zero Tracking Cookies &amp; Beacons</h4>
                    <p>
                      <strong>This website uses ZERO tracking cookies, ZERO marketing beacons, and ZERO analytics pixels.</strong> We do not use cookie-based cross-site fingerprinting or advertising identifiers. In accordance with Article 5(3) of the EU ePrivacy Directive (Directive 2002/58/EC) and national implementations, no cookie consent banner is legally required because no non-essential cookies or storage tokens are placed on your terminal device.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11 */}
              <section id="breach-notice" className="legal-section">
                <div className="legal-section-tag">11 / INCIDENT PROTOCOL</div>
                <h2 className="legal-section-title">11. Incident Response &amp; Breach Notification</h2>
                <div className="legal-prose">
                  <p>
                    In the event of a confirmed cybersecurity incident impacting personal data, Laprrk maintains defined response protocols:
                  </p>
                  <ul className="legal-list">
                    <li>
                      Compliance with Indian Computer Emergency Response Team (CERT-In) Cyber Security Directions, reporting reportable incidents to CERT-In within <strong>6 hours</strong> of discovery.
                    </li>
                    <li>
                      Notification to the Data Protection Board of India (DPBI) and affected Data Principals in the form and manner prescribed under Section 8(6) of the DPDP Act 2023.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 12: Grievance Redressal Officer */}
              <section id="grievance" className="legal-section">
                <div className="legal-section-tag">12 / GRIEVANCE DESK</div>
                <h2 className="legal-section-title">12. Designated Grievance Redressal Officer</h2>
                <div className="legal-contact-card">
                  <div className="legal-contact-head">
                    <TablerIcon name="shield-check" size={20} />
                    <div>
                      <h3>Designated Grievance Redressal Officer</h3>
                      <p>Compliance under Section 8(10) DPDP Act 2023 &amp; IT Rules</p>
                    </div>
                  </div>

                  <div className="legal-contact-grid">
                    <div className="legal-contact-item">
                      <span className="contact-item-label">Officer Desk &amp; Address</span>
                      <p>
                        Grievance Redressal Officer<br />
                        Laprrk Technology Solutions LLP<br />
                        Office 605, 6th Floor, Raksha Addela Mart, Gaur City 2,<br />
                        Greater Noida West, Uttar Pradesh 201318, India
                      </p>
                    </div>

                    <div className="legal-contact-item">
                      <span className="contact-item-label">Statutory Resolution Timeline</span>
                      <p>
                        <strong>Acknowledgment:</strong> Within 48 business hours.<br />
                        <strong>Final Resolution:</strong> Within 30 calendar days.<br />
                        Direct line: <a href={`tel:${CONTACT.telIN}`} className="contact-inline-link">{CONTACT.phoneIN}</a>
                      </p>
                    </div>
                  </div>

                  <div className="legal-contact-actions">
                    <a href="mailto:grievance@laprrk.com" className="legal-channel-btn legal-channel-primary">
                      <TablerIcon name="mail" size={15} />
                      <span>grievance@laprrk.com</span>
                    </a>
                    <a href="mailto:info@laprrk.com" className="legal-channel-btn">
                      <TablerIcon name="mail" size={15} />
                      <span>info@laprrk.com</span>
                    </a>
                    <Link to="/contact" className="legal-channel-btn">
                      <span>Visit Contact Desk</span>
                      <TablerIcon name="arrow-up-right" size={13} />
                    </Link>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      <BottomCTA topic="Privacy & Compliance" />
    </div>
  );
}

