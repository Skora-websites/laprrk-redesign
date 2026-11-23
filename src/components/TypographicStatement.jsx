import { useState, useEffect } from "react";
import Reveal from "./Reveal";

const WORDS = ["reimagine", "scale", "accelerate", "transform"];

export default function TypographicStatement() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length);
        setIsFading(false);
      }, 350);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  const currentWord = WORDS[index];

  return (
    <section className="typo-statement-section" aria-label="Laprrk Engineering Manifesto">
      {/* Ambient luminous glow on the right matching EPAM reference */}
      <div className="typo-ambient-glow" aria-hidden="true" />
      <div className="typo-ambient-glow-secondary" aria-hidden="true" />

      <div className="shell typo-statement-shell">
        <Reveal>
          <h2 className="typo-headline">
            We can help you{" "}
            <br />
            <span
              className={`typo-highlight-word ${isFading ? "is-transitioning" : ""}`}
              onClick={() => {
                setIsFading(true);
                setTimeout(() => {
                  setIndex((prev) => (prev + 1) % WORDS.length);
                  setIsFading(false);
                }, 200);
              }}
              title="Click to cycle dynamic word"
              aria-label={`Cycle verb, currently ${currentWord}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIndex((prev) => (prev + 1) % WORDS.length);
                }
              }}
            >
              {currentWord}
              <span className="typo-highlight-shimmer" aria-hidden="true" />
            </span>{" "}
            your engineering{" "}
            <br />
            through code, talent, and training.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
