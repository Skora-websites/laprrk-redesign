import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CONTACT } from "../data/site";
import { useBooking } from "../booking";
import BookingForm from "./BookingForm";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function BookingModal() {
  const { request, closeBooking } = useBooking();
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!request) return undefined;

    triggerRef.current = document.activeElement;
    const body = document.body;
    const root = document.documentElement;
    const gap = window.innerWidth - root.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;

    const first = panelRef.current?.querySelector("[data-autofocus]");
    first?.focus({ preventScroll: true });

    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeBooking();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll(FOCUSABLE)).filter(
        (node) => node.offsetParent !== null
      );
      if (focusable.length === 0) return;
      const firstFocusable = focusable[0];
      const lastFocusable = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      if (triggerRef.current && typeof triggerRef.current.focus === "function") {
        triggerRef.current.focus();
      }
    };
  }, [request, closeBooking]);

  if (!request) return null;

  return createPortal(
    <div
      className="booking-layer"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeBooking();
      }}
    >
      <div
        className="booking-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        aria-describedby="booking-intro"
        ref={panelRef}
      >
        <aside className="booking-aside">
          <p className="booking-kicker">30 minutes · no retainer</p>
          <h2 id="booking-title">Tell us what you’re trying to do.</h2>
          <p id="booking-intro">
            A short brief is enough. It goes straight to a specialist, and you get a reply within one
            business day from the person who would run the work.
          </p>

          <ul className="booking-points">
            <li>Written proposal within 48 hours of the call</li>
            <li>Mutual NDA before you share anything sensitive</li>
            <li>One lead from first call to delivery</li>
          </ul>

          <div className="booking-direct">
            <a href={`tel:${CONTACT.telIN}`}>
              <span>India</span>
              {CONTACT.phoneIN}
            </a>
            <a href={`tel:${CONTACT.telUS}`}>
              <span>USA</span>
              {CONTACT.phoneUS}
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <span>Email</span>
              {CONTACT.email}
            </a>
          </div>
        </aside>

        <div className="booking-main">
          <button type="button" className="booking-close" onClick={closeBooking}>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Close
          </button>
          <BookingForm
            key={`${request.prefill}|${request.topic}`}
            initialPrefill={request.prefill}
            initialTopic={request.topic}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
