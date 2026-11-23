import Hero from "../components/Hero";
import TypographicStatement from "../components/TypographicStatement";
import Problems from "../components/Problems";
import Practices from "../components/Practices";
import Evidence from "../components/Evidence";
import Training from "../components/Training";
import Faq from "../components/Faq";
import BottomCTA from "../components/BottomCTA";
import { EVIDENCE } from "../data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <TypographicStatement />
      <Problems />
      <Practices />
      <div className="section-dark-brand evidence-dark">
        <Evidence
          items={EVIDENCE}
          title="Work you can check, not just read."
          intro="Three engagements from the last few years. Client names stay private; the numbers, constraints and the parts that were hard do not."
        />
      </div>
      <Training />
      <Faq />
      <BottomCTA />
    </>
  );
}
