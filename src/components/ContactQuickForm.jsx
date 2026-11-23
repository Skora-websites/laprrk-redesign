import { useState } from "react";
import { CONTACT } from "../data/site";
import FlowButton from "./ui/flow-button";
import TablerIcon from "./TablerIcon";
import { Link } from "../router";

const TOPICS = [
  "Custom Software / AI Build",
  "Hire Engineers / Pods",
  "Team & Corporate Training",
  "General Technical Inquiry",
];

export default function ContactQuickForm() {
  const [values, setValues] = useState({
    name: "",
    contact: "",
    topic: TOPICS[0],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sentLink, setSentLink] = useState(null);

  const setField = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      errs.name = "Please provide your name.";
    }
    if (!values.contact.trim() || values.contact.trim().length < 4) {
      errs.contact = "Please provide a work email or phone number.";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstErr = Object.keys(errs)[0];
      document.getElementById(`quick-${firstErr}`)?.focus();
      return;
    }

    const lines = [
      "Hi Laprrk team,",
      "",
      `*Name:* ${values.name.trim()}`,
      `*Contact:* ${values.contact.trim()}`,
      `*Inquiry:* ${values.topic}`,
    ];

    if (values.message.trim()) {
      lines.push(`*Note:* ${values.message.trim()}`);
    }

    lines.push("", "Sent from Laprrk Quick Contact");

    const messageText = lines.join("\n");
    const waUrl = `https://wa.me/918860664929?text=${encodeURIComponent(messageText)}`;

    setSentLink(waUrl);

    try {
      const opened = window.open(waUrl, "_blank", "noopener,noreferrer");
      if (!opened) {
        // Fallback handled by UI state
      }
    } catch {
      // Handled by UI
    }
  };

  if (sentLink) {
    return (
      <div className="contact-quick-form-success">
        <span className="quick-success-mark" aria-hidden="true">
          <TablerIcon name="check" size={24} />
        </span>
        <h3>Your message is prepared in WhatsApp!</h3>
        <p>
          WhatsApp has opened in a new tab with your inquiry formatted. Hit send when ready, and a
          senior specialist will reply within one business day.
        </p>
        <div style={{ marginTop: "18px" }}>
          <FlowButton
            href={sentLink}
            text="Open WhatsApp Directly"
            variant="solid"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100%" }}
          />
        </div>
        <button
          type="button"
          className="link-inline"
          style={{ marginTop: "14px", display: "inline-block", fontSize: "0.85rem" }}
          onClick={() => {
            setSentLink(null);
            setValues({ name: "", contact: "", topic: TOPICS[0], message: "" });
          }}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-quick-form" onSubmit={handleSubmit} noValidate>
      <div className="quick-form-header">
        <span className="quick-form-kicker">Fast Track Inquiry</span>
        <h3>Start a Conversation</h3>
        <p>
          Fill in three quick details to chat directly with our engineering desk in Greater Noida and
          Louisville.
        </p>
      </div>

      <div className="quick-form-fields">
        {/* Name */}
        <div className="quick-field">
          <label htmlFor="quick-name">
            Your name <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="quick-name"
            type="text"
            value={values.name}
            onChange={setField("name")}
            placeholder="Jane Doe"
            autoComplete="name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "quick-err-name" : undefined}
          />
          {errors.name && (
            <span className="field-error" id="quick-err-name" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        {/* Contact Info (Email or Phone) */}
        <div className="quick-field">
          <label htmlFor="quick-contact">
            Work email or phone <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="quick-contact"
            type="text"
            value={values.contact}
            onChange={setField("contact")}
            placeholder="jane@company.com or +1 (555) 000-0000"
            autoComplete="email"
            aria-required="true"
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "quick-err-contact" : undefined}
          />
          {errors.contact && (
            <span className="field-error" id="quick-err-contact" role="alert">
              {errors.contact}
            </span>
          )}
        </div>

        {/* Topic Selector */}
        <div className="quick-field">
          <span id="quick-topic-label" className="quick-topic-label">
            Area of interest
          </span>
          <div className="quick-topic-pills" role="radiogroup" aria-labelledby="quick-topic-label">
            {TOPICS.map((t) => (
              <button
                type="button"
                key={t}
                role="radio"
                aria-checked={values.topic === t}
                className={`quick-topic-pill ${values.topic === t ? "is-selected" : ""}`}
                onClick={() => setValues((prev) => ({ ...prev, topic: t }))}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Message / Brief */}
        <div className="quick-field">
          <label htmlFor="quick-message">
            Brief context <span className="optional">(optional)</span>
          </label>
          <textarea
            id="quick-message"
            rows={3}
            value={values.message}
            onChange={setField("message")}
            placeholder="A few words on what you need built, hired or trained..."
          />
        </div>
      </div>

      <div className="quick-form-submit">
        <FlowButton
          type="submit"
          text="Send on WhatsApp"
          variant="solid"
          style={{ width: "100%" }}
        />
        <p className="quick-privacy-note">
          <TablerIcon name="lock" size={13} />
          <span>
            Opens WhatsApp directly. See our{" "}
            <Link to="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
            . Zero data stored on site.
          </span>
        </p>
      </div>
    </form>
  );
}

