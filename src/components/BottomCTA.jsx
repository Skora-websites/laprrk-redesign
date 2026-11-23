import { BOTTOM_CTA, CONTACT } from "../data/site";
import { useBooking } from "../booking";
import { FlowButton } from "./ui/flow-button";
import Reveal from "./Reveal";

export default function BottomCTA({ topic, prefill } = {}) {
  const { openBooking } = useBooking();
  const { title, body, note } = BOTTOM_CTA;

  return (
    <section className="bottom-cta" aria-labelledby="bottom-cta-title">
      <div className="shell">
        <div className="cta-panel">
          <Reveal className="cta-copy">
            <h2 id="bottom-cta-title">{title}</h2>
            <p>{body}</p>
            <div className="cta-actions">
              <FlowButton
                text="Book 30-min Call"
                variant="light"
                onClick={() => openBooking({ topic, prefill })}
              />
              <FlowButton
                href={CONTACT.waBase}
                text="Direct WhatsApp"
                variant="light"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
            <p className="cta-note">{note}</p>
          </Reveal>

          <div className="cta-dial" aria-hidden="true">
            <span className="cta-dial-ring cta-dial-ring-outer" />
            <span className="cta-dial-ring cta-dial-ring-inner" />
            <span className="cta-dial-tick cta-dial-tick-1" />
            <span className="cta-dial-tick cta-dial-tick-2" />
            <span className="cta-dial-tick cta-dial-tick-3" />
            <span className="cta-dial-tick cta-dial-tick-4" />
            <span className="cta-dial-core">
              <strong>30</strong>
              <small>minutes</small>
            </span>
            <span className="cta-dial-label cta-dial-label-top">A working call, not a demo</span>
            <span className="cta-dial-label cta-dial-label-bottom">Reply in one business day</span>
          </div>
        </div>
      </div>
    </section>
  );
}
