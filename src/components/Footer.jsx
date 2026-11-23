import { CONTACT, FOOTER, SOCIAL_LINKS } from "../data/site";
import { Link } from "../router";
import TablerIcon from "./TablerIcon";

function FooterLink({ href, children }) {
  if (href.startsWith("/")) {
    return <Link to={href}>{children}</Link>;
  }
  return <a href={href}>{children}</a>;
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-panel">
        <div className="footer-inner">
          <div className="footer-panel-grid">
            <div className="footer-brand">
              <span className="footer-logo-plate">
                <img src="/brand/laprrk-logo-white.webp" alt="Laprrk Technology Solutions" width="160" height="40" />
              </span>
              <p className="footer-tagline">{FOOTER.tagline}</p>

              <div className="footer-channels">
                <a href={CONTACT.waBase} target="_blank" rel="noopener noreferrer" aria-label="Message Laprrk on WhatsApp">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 2.8a7 7 0 00-6 10.6L3 17l3.7-1a7 7 0 106.3-12.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.6 6.7c.3-.1.6 0 .8.3l.7 1.2c.1.2.1.5-.1.6l-.5.5c.5 1 1.4 1.9 2.5 2.4l.5-.5c.2-.2.4-.2.6-.1l1.2.7c.2.2.4.4.3.7-.2.8-.9 1.4-1.7 1.4-2.7-.2-5-2.5-5.2-5.2 0-.8.5-1.5 1.3-1.7" fill="currentColor" />
                  </svg>
                </a>
                <a href={`mailto:${CONTACT.email}`} aria-label={`Email ${CONTACT.email}`}>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="2.6" y="4.4" width="14.8" height="11.2" rx="2" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M3.4 5.6L10 10.5l6.6-4.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href={`tel:${CONTACT.telUS}`} aria-label={`Call the US office at ${CONTACT.phoneUS}`}>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M6.2 3.4l1.5 3-1.2 1.3a9.4 9.4 0 005.8 5.8l1.3-1.2 3 1.5-.4 2.3c-.1.6-.7 1-1.3 1A12.1 12.1 0 013 5.4c0-.6.4-1.2 1-1.3l2.2-.7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="footer-socials" aria-label="Official Social Channels">
                <span className="footer-socials-label">Follow us</span>
                <div className="footer-socials-list">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="footer-social-btn"
                      aria-label={item.label}
                      title={item.name}
                    >
                      <TablerIcon name={item.icon} size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-columns">
              {FOOTER.columns.map((column) => (
                <div className="footer-col" key={column.title}>
                  <h2>{column.title}</h2>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <FooterLink href={link.href}>{link.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="footer-col footer-col-contact">
                <h2>Contact</h2>
                <ul className="footer-contact-list">
                  <li>
                    <a href={`tel:${CONTACT.telIN}`} className="footer-contact-link">
                      <span className="footer-contact-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M6.2 3.4l1.5 3-1.2 1.3a9.4 9.4 0 005.8 5.8l1.3-1.2 3 1.5-.4 2.3c-.1.6-.7 1-1.3 1A12.1 12.1 0 013 5.4c0-.6.4-1.2 1-1.3l2.2-.7z" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{CONTACT.phoneIN} · India</span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${CONTACT.telUS}`} className="footer-contact-link">
                      <span className="footer-contact-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M6.2 3.4l1.5 3-1.2 1.3a9.4 9.4 0 005.8 5.8l1.3-1.2 3 1.5-.4 2.3c-.1.6-.7 1-1.3 1A12.1 12.1 0 013 5.4c0-.6.4-1.2 1-1.3l2.2-.7z" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{CONTACT.phoneUS} · USA</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${CONTACT.email}`} className="footer-contact-link">
                      <span className="footer-contact-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2.6" y="4.4" width="14.8" height="11.2" rx="2" />
                          <path d="M3.4 5.6L10 10.5l6.6-4.9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{CONTACT.email}</span>
                    </a>
                  </li>
                  <li className="footer-col-note">
                    <span className="footer-contact-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6z" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="10" cy="8" r="2" />
                      </svg>
                    </span>
                    <span>{CONTACT.addressUS}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-base">
            <div className="footer-base-actions">
              <nav aria-label="Legal" className="footer-legal-nav">
                <Link to="/privacy-policy">Privacy</Link>
                <span className="footer-base-sep" aria-hidden="true">/</span>
                <Link to="/terms">Terms</Link>
              </nav>

              <button type="button" className="footer-back-to-top" onClick={scrollTop} aria-label="Scroll back to top">
                <span>Back to top</span>
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 12V4M4 8l4-4 4 4" />
                </svg>
              </button>
            </div>

            <div className="footer-base-meta">
              <p className="footer-copyright">
                © {new Date().getFullYear()} {CONTACT.legal}
              </p>
              <p className="footer-credit">
                Created by{" "}
                <a href="https://skorainfotech.com" target="_blank" rel="noopener noreferrer">
                  SkoraInfotech
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="footer-mark" aria-hidden="true">
          Laprrk
        </p>
      </div>
    </footer>
  );
}
