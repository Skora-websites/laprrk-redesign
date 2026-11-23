import FaqDrawer from "./ui/faq-drawer";
import { useBooking } from "../booking";

export default function Faq() {
  const { openBooking } = useBooking();

  return (
    <section className="faq-drawer-section" id="faq" aria-label="Frequently asked questions">
      <FaqDrawer
        label="FAQ Index"
        title="Questions that come up before signing."
        lead="Answered in full rather than tucked away. If your specific question isn't filed here, our engineering directors respond promptly."
        drawer="Laprrk · Q–Z"
        askLabel="Book a call"
        askNote="Have an active software requirement, AI project, or GCC hiring plan? Talk directly with a technical lead."
        onAsk={() => openBooking({ topic: "Technical or commercial inquiry" })}
      />
    </section>
  );
}
