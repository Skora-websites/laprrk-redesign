import { CONTACT, CONTACT_PAGE, SOCIAL_LINKS } from "../data/site";
import { useBooking } from "../booking";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Offices from "../components/Offices";
import { FlowButton } from "../components/ui/flow-button";
import ContactHeroVisual from "../components/ContactHeroVisual";
import ContactQuickForm from "../components/ContactQuickForm";
import TablerIcon from "../components/TablerIcon";

export default function Contact() {
  const { openBooking } = useBooking();

  return (
    <>
      <PageHero
        crumb="Contact"
        title={CONTACT_PAGE.hero.title}
        lead={CONTACT_PAGE.hero.lead}
        visual={<ContactHeroVisual />}
        actions={
          <>
            <FlowButton text="Schedule Call" variant="solid" onClick={() => openBooking()} />
            <FlowButton
              href={CONTACT.waBase}
              text="Direct WhatsApp"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            />
          </>
        }
      />

      {/* Unified Fast Contact Studio: WhatsApp Quick Form + Direct Desk */}
      <section className="section contact-studio-section" aria-labelledby="contact-studio-title">
        <div className="shell">
          <div className="contact-studio-grid">
            {/* Left Column: Streamlined WhatsApp Quick Contact Form */}
            <Reveal className="contact-studio-form-col">
              <ContactQuickForm />
            </Reveal>

            {/* Right Column: Direct Engineering Channels & Commitments */}
            <Reveal className="contact-studio-desk-col" delay={100}>
              <div className="contact-desk-card">
                <div className="contact-desk-head">
                  <span className="mono-sm">Direct Engineering Lines</span>
                  <h2 id="contact-studio-title">Talk directly with the team.</h2>
                  <p>
                    No phone trees, qualification gates, or SDR sequences. These channels connect you
                    directly with our delivery leads across Greater Noida and Louisville.
                  </p>
                </div>

                <div className="contact-desk-channels">
                  {/* WhatsApp Direct */}
                  <a
                    href={CONTACT.waBase}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="desk-channel-item"
                  >
                    <span className="desk-channel-icon" aria-hidden="true">
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
                    <div className="desk-channel-info">
                      <span className="desk-channel-label">Instant WhatsApp</span>
                      <strong>{CONTACT.phoneIN}</strong>
                      <small>Fastest response · Online now</small>
                    </div>
                  </a>

                  {/* India Direct Phone */}
                  <a href={`tel:${CONTACT.telIN}`} className="desk-channel-item">
                    <span className="desk-channel-icon" aria-hidden="true">
                      <TablerIcon name="phone" size={18} />
                    </span>
                    <div className="desk-channel-info">
                      <span className="desk-channel-label">India Delivery Center</span>
                      <strong>{CONTACT.phoneIN}</strong>
                      <small>{CONTACT.hoursIN}</small>
                    </div>
                  </a>

                  {/* US Direct Phone */}
                  <a href={`tel:${CONTACT.telUS}`} className="desk-channel-item">
                    <span className="desk-channel-icon" aria-hidden="true">
                      <TablerIcon name="phone" size={18} />
                    </span>
                    <div className="desk-channel-info">
                      <span className="desk-channel-label">US Client Office (EST)</span>
                      <strong>{CONTACT.phoneUS}</strong>
                      <small>{CONTACT.hoursUS}</small>
                    </div>
                  </a>

                  {/* Direct Email */}
                  <a href={`mailto:${CONTACT.email}`} className="desk-channel-item">
                    <span className="desk-channel-icon" aria-hidden="true">
                      <TablerIcon name="mail" size={18} />
                    </span>
                    <div className="desk-channel-info">
                      <span className="desk-channel-label">Architecture Briefs &amp; NDAs</span>
                      <strong>{CONTACT.email}</strong>
                      <small>Reply guaranteed within 1 business day</small>
                    </div>
                  </a>
                </div>

                {/* Promises Checklist */}
                <div className="contact-desk-commitments">
                  <div className="desk-commitment-item">
                    <TablerIcon name="lock" size={15} />
                    <span>Mutual NDA executed before technical scoping</span>
                  </div>
                  <div className="desk-commitment-item">
                    <TablerIcon name="file-text" size={15} />
                    <span>Formal written proposal within 48 hours</span>
                  </div>
                  <div className="desk-commitment-item">
                    <TablerIcon name="shield-check" size={15} />
                    <span>Zero retainer required to start technical conversations</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Official Social Channels & Profiles Dedicated Section */}
      <section className="section contact-socials-section" aria-labelledby="contact-socials-title">
        <div className="shell">
          <Reveal className="contact-socials-card">
            <div className="contact-socials-head">
              <span className="mono-sm">Social Profiles</span>
              <h2 id="contact-socials-title">Official channels &amp; updates</h2>
              <p>
                Follow our engineering teardowns, hiring playbooks, and company announcements across our verified networks.
              </p>
            </div>
            <div className="contact-social-grid">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="contact-social-card"
                  title={item.label}
                >
                  <span className="contact-social-icon" aria-hidden="true">
                    <TablerIcon name={item.icon} size={18} />
                  </span>
                  <div className="contact-social-meta">
                    <span className="contact-social-name">{item.name}</span>
                    <span className="contact-social-handle">{item.handle}</span>
                  </div>
                  <TablerIcon name="arrow-up-right" size={14} className="contact-social-arrow" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Physical Office Hubs */}
      <Offices />
    </>
  );
}
