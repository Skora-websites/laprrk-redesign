import { Link } from "../router";
import PageHero from "../components/PageHero";
import BottomCTA from "../components/BottomCTA";
import FlowButton from "../components/ui/flow-button";

export default function NotFound() {
  return (
    <>
      <PageHero
        crumb="Not found"
        title="That page has moved or never existed."
        lead="The six sections below are the whole site. Pick one, or start a conversation and we will point you to the right place."
        actions={
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <FlowButton to="/" text="Back to Home" variant="solid" />
            <FlowButton to="/contact" text="Contact Team" variant="primary" />
          </div>
        }
      />
      <BottomCTA />
    </>
  );
}
