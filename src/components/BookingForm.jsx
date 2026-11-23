import { useMemo, useState } from "react";
import { CONTACT } from "../data/site";
import FlowButton from "./ui/flow-button";
import { Link } from "../router";

const NEEDS = [
  "Build software or AI",
  "Hire engineers",
  "Train a team",
  "Fix or modernise something",
  "Not sure yet",
];

const TIMING = ["This month", "Next quarter", "Just exploring"];

const EMPTY = { name: "", company: "", email: "", phone: "", need: "", timing: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name so we know who we’re replying to.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Check the email address — we send the proposal there.";
  if (!values.need) errors.need = "Choose the closest option; you can change it on the call.";
  if (values.message.trim().length < 12)
    errors.message = "A sentence about the problem is enough to start.";
  return errors;
}

export default function BookingForm({ initialPrefill = "", initialTopic = "" }) {
  const needOptions = useMemo(() => {
    if (initialTopic && !NEEDS.includes(initialTopic)) {
      return [initialTopic, ...NEEDS];
    }
    return NEEDS;
  }, [initialTopic]);

  const [values, setValues] = useState({
    ...EMPTY,
    need: initialTopic || "",
    message: initialPrefill || "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);

  const set = (field) => (event) => {
    const value = event.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const waLink = useMemo(() => {
    const lines = [
      "Laprrk consultation request",
      `Name: ${values.name || "—"}`,
      values.company ? `Company: ${values.company}` : null,
      `Email: ${values.email || "—"}`,
      values.phone ? `Phone: ${values.phone}` : null,
      `Need: ${values.need || "—"}`,
      values.timing ? `Timeline: ${values.timing}` : null,
      "",
      values.message || "",
    ].filter(Boolean);
    return `${CONTACT.waBase}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [values]);

  function onSubmit(event) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`booking-${first}`)?.focus();
      return;
    }
    window.open(waLink, "_blank", "noopener,noreferrer");
    setSent(waLink);
  }

  if (sent) {
    return (
      <div className="booking-success" role="status">
        <span className="booking-success-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4.5 12.4l4.6 4.6L19.5 6.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3>Your message is ready in WhatsApp.</h3>
        <p>
          WhatsApp should have opened in a new tab with the message prepared. Send it when you are
          ready, and a specialist replies within one business day.
        </p>
        <FlowButton
          href={sent}
          text="Open Chat Manually"
          variant="solid"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "100%" }}
        />
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="booking-name">Name</label>
          <input
            id="booking-name"
            name="name"
            autoComplete="name"
            data-autofocus
            value={values.name}
            onChange={set("name")}
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "booking-err-name" : undefined}
            placeholder="Who should we ask for"
          />
          {errors.name && (
            <p className="field-error" id="booking-err-name" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="booking-company">
            Company <span className="optional">optional</span>
          </label>
          <input
            id="booking-company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={set("company")}
            placeholder="Company or institution"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="booking-email">Work email</label>
          <input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "booking-err-email" : undefined}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="field-error" id="booking-err-email" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="booking-phone">
            Phone <span className="optional">optional</span>
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder="With country code"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="booking-need">What do you need</label>
          <select
            id="booking-need"
            name="need"
            value={values.need}
            onChange={set("need")}
            aria-required="true"
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? "booking-err-need" : undefined}
          >
            <option value="">Choose one</option>
            {needOptions.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          {errors.need && (
            <p className="field-error" id="booking-err-need" role="alert">
              {errors.need}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="booking-timing">
            Timeline <span className="optional">optional</span>
          </label>
          <select id="booking-timing" name="timing" value={values.timing} onChange={set("timing")}>
            <option value="">Any time</option>
            {TIMING.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="booking-message">What are you working on</label>
        <textarea
          id="booking-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={set("message")}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "booking-err-message" : undefined}
          placeholder="A few lines on the system, team or timeline. Links are fine."
        />
        {errors.message && (
          <p className="field-error" id="booking-err-message" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <FlowButton
        type="submit"
        text="Open WhatsApp"
        variant="solid"
        style={{ width: "100%" }}
      />
      <p className="form-note">
        By continuing, you agree to our{" "}
        <Link to="/privacy-policy" target="_blank">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/terms" target="_blank">
          Terms
        </Link>
        . This opens WhatsApp; zero data is stored on this website.
      </p>
    </form>
  );
}
