import { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import TablerIcon from "../components/TablerIcon";
import BottomCTA from "../components/BottomCTA";
import { FlowButton } from "../components/ui/flow-button";
import { Link } from "../router";
import { CONTACT } from "../data/site";

const TOC_SECTIONS = [
  { id: "preamble", label: "Commercial Notice" },
  { id: "scope", label: "1. Scope & Inquiries" },
  { id: "ip-rights", label: "2. Intellectual Property" },
  { id: "acceptable-use", label: "3. Acceptable Use" },
  { id: "non-solicitation", label: "4. Non-Solicitation" },
  { id: "invoicing", label: "5. Invoicing & Taxes" },
  { id: "disclaimers", label: "6. Warranty Disclaimers" },
  { id: "liability", label: "7. Limitation of Liability" },
  { id: "governing-law", label: "8. Governing Law" },
  { id: "contact-desk", label: "9. Commercial Desk" },
];

const FACTS = [
  { label: "Effective Date", value: "Nov 21, 2026" },
  { label: "Version", value: "2.0 (Commercial)" },
  { label: "Governing Law", value: "India & USA" },
  { label: "IP Allocation", value: "100% Client Owned" },
];

export default function Terms() {
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
        crumb="Terms of Service"
        title="Commercial Terms of Service"
        lead="Governing access to laprrk.com and commercial engagements across custom software engineering, practitioner IT hiring, and corporate technical training."
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
              text="Commercial Legal Desk"
              variant="primary"
            />
          </>
        }
      />

      <section className="section legal-page-section" aria-label="Terms of Service Document Content">
        <div className="shell">
          <div className="legal-layout">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="legal-sidebar" aria-label="Document Navigation">
              <div className="legal-toc-card">
                <div className="legal-toc-header">
                  <TablerIcon name="scale" size={17} />
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
                  <span className="legal-info-label">Legal Entity</span>
                  <span className="legal-info-val">Laprrk Technology Solutions LLP</span>
                </div>
                <div className="legal-info-item">
                  <span className="legal-info-label">Jurisdictions</span>
                  <span className="legal-info-val">India (Greater Noida) &amp; USA (Louisville)</span>
                </div>
                <div className="legal-info-item">
                  <span className="legal-info-label">Version</span>
                  <span className="legal-info-val">2.0 · Commercial</span>
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
                  <TablerIcon name="info-circle" size={18} />
                  <span>Commercial Legal Notice</span>
                </div>
                <p>
                  These Terms of Service govern your access to the website{" "}
                  <strong>laprrk.com</strong>, operated by{" "}
                  <strong>Laprrk Technology Solutions LLP</strong> ("Laprrk", "we", "our", or "us").
                  This website is intended for business-to-business (B2B) commercial communications,
                  corporate engineering leaders, and enterprise clients.
                </p>
                <div className="legal-meta-strip">
                  <span>Effective Date: <strong>November 21, 2026</strong></span>
                  <span className="meta-sep" aria-hidden="true">·</span>
                  <span>Document ID: <strong>LTS-TOS-2026-V2</strong></span>
                </div>
              </div>

              {/* Section 1 */}
              <section id="scope" className="legal-section">
                <div className="legal-section-tag">01 / ENGAGEMENT SCOPE</div>
                <h2 className="legal-section-title">1. Commercial Scope &amp; Non-Binding Inquiries</h2>
                <div className="legal-prose">
                  <p>
                    Laprrk provides IT services, technical hiring, and corporate engineering training across three specialized practices:
                  </p>
                  <ul className="legal-list">
                    <li>
                      <strong>Build:</strong> Bespoke software engineering, AI/ML pipelines, microservices, cloud DevOps delivery, and legacy modernization.
                    </li>
                    <li>
                      <strong>Hire:</strong> Permanent IT recruitment, contract engineering staffing, GCC incubation, and hands-on technical screening.
                    </li>
                    <li>
                      <strong>Train:</strong> Hands-on corporate engineering cohorts with ~70% lab curriculum and production capstones.
                    </li>
                  </ul>
                  <div className="legal-callout">
                    <h4>Non-Binding Inquiries &amp; Quotations</h4>
                    <p>
                      Information, case studies, technology benchmarks, and consultation forms published on this website do not constitute a binding legal contract or commercial offer. Formal commercial engagements are established solely upon the mutual execution of dedicated Master Services Agreements (MSAs), Statements of Work (SOWs), and Non-Disclosure Agreements (NDAs).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="ip-rights" className="legal-section">
                <div className="legal-section-tag">02 / INTELLECTUAL PROPERTY</div>
                <h2 className="legal-section-title">2. Intellectual Property Rights &amp; Ownership</h2>
                <div className="legal-prose">
                  <p>
                    Intellectual property allocations are governed strictly under our client-first engineering principles:
                  </p>
                  <ul className="legal-list">
                    <li>
                      <strong>Client Deliverables (100% Transfer):</strong> As defined in individual Statements of Work (SOWs), all custom source code, data schemas, application architectures, and proprietary algorithms created exclusively for a client transfer 100% to the client upon full payment of agreed milestone invoices.
                    </li>
                    <li>
                      <strong>Laprrk Background IP &amp; Website Assets:</strong> All proprietary frameworks, training syllabi, website code, wordmarks, graphic marks, branding, and original articles on laprrk.com remain the exclusive intellectual property of Laprrk Technology Solutions LLP.
                    </li>
                    <li>
                      <strong>Open-Source Components:</strong> Any third-party open-source libraries incorporated into deliverables or this website are licensed under their respective open-source licenses (such as MIT, Apache 2.0, or SIL OFL).
                    </li>
                  </ul>
                  <div className="legal-callout legal-callout-highlight">
                    <h4>Zero Lock-In Guarantee</h4>
                    <p>
                      We deliver all engineering work directly into your GitHub, GitLab, or cloud tenant. You retain complete ownership and full control over your infrastructure, build pipelines, and production repositories.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="acceptable-use" className="legal-section">
                <div className="legal-section-tag">03 / USAGE POLICY</div>
                <h2 className="legal-section-title">3. Acceptable Use Policy</h2>
                <div className="legal-prose">
                  <p>When accessing or using laprrk.com, you agree that you will not:</p>
                  <ul className="legal-list">
                    <li>
                      Use automated scrapers, crawlers, or harvesting tools to extract candidate data, service texts, or code without prior written consent.
                    </li>
                    <li>
                      Engage in security scanning, unauthorized vulnerability probing, penetration testing, or breach simulations against our hosting infrastructure without express written authorization.
                    </li>
                    <li>
                      Transmit malicious code, viruses, automated spam, or denial-of-service traffic.
                    </li>
                    <li>
                      Impersonate any Laprrk personnel, partner, or client representative.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section id="non-solicitation" className="legal-section">
                <div className="legal-section-tag">04 / BENCH PROTECTION</div>
                <h2 className="legal-section-title">4. Non-Solicitation of Technical Personnel</h2>
                <div className="legal-prose">
                  <p>
                    To protect our specialized technical bench, prospective and active clients agree not to directly or indirectly solicit, recruit, or hire any Laprrk engineer, instructor, or consultant introduced through our technical discovery or training cohorts during an engagement and for a period of <strong>12 months</strong> following conclusion, except as expressly authorized under a written contract-to-hire staffing agreement.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="invoicing" className="legal-section">
                <div className="legal-section-tag">05 / BILLING &amp; TAXES</div>
                <h2 className="legal-section-title">5. Commercial Invoicing, Currencies &amp; Taxes</h2>
                <div className="legal-prose">
                  <p>
                    Commercial terms for delivered services are structured transparently based on client jurisdiction:
                  </p>
                  <ul className="legal-list">
                    <li>
                      <strong>Indian Clients:</strong> Invoiced in Indian Rupees (INR) with Goods and Services Tax (GST) documentation.
                    </li>
                    <li>
                      <strong>US &amp; International Clients:</strong> Invoiced in US Dollars (USD) through SWIFT wire transfers or verified enterprise accounts.
                    </li>
                    <li>
                      <strong>Payment Cadence:</strong> Two-week sprint milestone acceptance or monthly retainer terms defined in the applicable SOW.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section id="disclaimers" className="legal-section">
                <div className="legal-section-tag">06 / WARRANTIES</div>
                <h2 className="legal-section-title">6. Warranty Disclaimers</h2>
                <div className="legal-prose">
                  <p>
                    Website content is provided on an "as is" and "as available" basis for general informational and marketing purposes. While we verify all case study figures and delivery metrics (e.g. 5–7 business days to shortlist, 200+ placed, 500+ trained), we make no express or implied warranties that the website will be error-free or uninterrupted. Specific performance guarantees, service levels (SLAs), and warranty periods are defined solely within executed commercial SOWs.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="liability" className="legal-section">
                <div className="legal-section-tag">07 / LIABILITY CAPS</div>
                <h2 className="legal-section-title">7. Limitation of Liability</h2>
                <div className="legal-prose">
                  <p>
                    To the maximum extent permitted under applicable law, Laprrk Technology Solutions LLP, its partners, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use this website. For general website visitors, our total aggregate liability is capped at <strong>INR 5,000</strong> or <strong>USD 100</strong>. For commercial clients, liability caps are governed strictly by the applicable Master Services Agreement.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="governing-law" className="legal-section">
                <div className="legal-section-tag">08 / JURISDICTION</div>
                <h2 className="legal-section-title">8. Governing Law &amp; Dispute Resolution</h2>
                <div className="legal-prose">
                  <p>
                    These Terms of Service are governed by and construed in accordance with the laws of the Republic of India:
                  </p>
                  <ul className="legal-list">
                    <li>
                      Any legal suit, action, or proceeding arising out of these website terms shall be instituted exclusively in the competent courts of <strong>Gautam Buddha Nagar (Noida / Greater Noida), Uttar Pradesh, India</strong>.
                    </li>
                    <li>
                      For commercial contracts executed through our US client office in Louisville, Kentucky, dispute resolution and arbitration provisions are stipulated within the respective bilateral Master Services Agreement.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 9: Commercial & Legal Desk */}
              <section id="contact-desk" className="legal-section">
                <div className="legal-section-tag">09 / COMMERCIAL DESK</div>
                <h2 className="legal-section-title">9. Commercial &amp; Legal Desk</h2>
                <div className="legal-contact-card">
                  <div className="legal-contact-head">
                    <TablerIcon name="shield-check" size={20} />
                    <div>
                      <h3>Laprrk Technology Solutions LLP</h3>
                      <p>Corporate Legal &amp; Contract Administration Desk</p>
                    </div>
                  </div>

                  <div className="legal-contact-grid">
                    <div className="legal-contact-item">
                      <span className="contact-item-label">India Delivery Headquarters</span>
                      <p>
                        Office 605, 6th Floor, Raksha Addela Mart, Gaur City 2,<br />
                        Greater Noida West, Uttar Pradesh 201318, India
                      </p>
                      <a href={`tel:${CONTACT.telIN}`} className="contact-inline-link">
                        {CONTACT.phoneIN}
                      </a>
                    </div>

                    <div className="legal-contact-item">
                      <span className="contact-item-label">US Client Office</span>
                      <p>
                        Louisville, Kentucky, United States
                      </p>
                      <a href={`tel:${CONTACT.telUS}`} className="contact-inline-link">
                        {CONTACT.phoneUS}
                      </a>
                    </div>
                  </div>

                  <div className="legal-contact-actions">
                    <a href="mailto:info@laprrk.com" className="legal-channel-btn">
                      <TablerIcon name="mail" size={15} />
                      <span>info@laprrk.com</span>
                    </a>
                    <a href="mailto:grievance@laprrk.com" className="legal-channel-btn">
                      <TablerIcon name="lock" size={15} />
                      <span>grievance@laprrk.com</span>
                    </a>
                    <Link to="/contact" className="legal-channel-btn legal-channel-primary">
                      <span>Visit Contact Page</span>
                      <TablerIcon name="arrow-up-right" size={13} />
                    </Link>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      <BottomCTA topic="Commercial Inquiry" />
    </div>
  );
}

