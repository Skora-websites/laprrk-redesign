"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type React from "react";

export interface LayeredTextProps {
  lines?: Array<{ top: string; bottom: string }>;
  fontSize?: string;
  fontSizeMd?: string;
  lineHeight?: number;
  lineHeightMd?: number;
  className?: string;
}

const DEFAULT_LAPRRK_LINES = [
  { top: "\u00A0", bottom: "SOFTWARE" },
  { top: "SOFTWARE", bottom: "ENGINEERING" },
  { top: "ENGINEERING", bottom: "TALENT" },
  { top: "TALENT", bottom: "TRAINING" },
  { top: "TRAINING", bottom: "VELOCITY" },
  { top: "VELOCITY", bottom: "DELIVERY" },
  { top: "DELIVERY", bottom: "SCALE" },
  { top: "SCALE", bottom: "\u00A0" },
];

export function LayeredText({
  lines = DEFAULT_LAPRRK_LINES,
  fontSize = "46px",
  fontSizeMd = "28px",
  lineHeight = 54,
  lineHeightMd = 34,
  className = "",
}: LayeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>();

  const calculateTranslateX = (index: number) => {
    const baseOffset = 28;
    const baseOffsetMd = 8;
    const centerIndex = Math.floor(lines.length / 2);
    return {
      desktop: (index - centerIndex) * baseOffset,
      mobile: (index - centerIndex) * baseOffsetMd,
    };
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Respect reduced-motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.current;
    const sliders = container.querySelectorAll<HTMLElement>(".layered-text-slider");
    if (!sliders.length) return;

    // Set clean initial state using percentage-based translation for exact line-height alignment
    gsap.set(sliders, { yPercent: 0 });

    // Smooth, continuous harmonic wave animation:
    // 1. Rolls smoothly from top to bottom (yPercent: -50%)
    // 2. Holds cleanly at state 2 so the text can be comfortably read
    // 3. Rolls smoothly back to initial state (yPercent: 0%)
    // 4. Holds cleanly at state 1 before seamlessly repeating
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "power2.inOut",
        duration: 0.85,
      },
    });

    tl.to(sliders, {
      yPercent: -50,
      stagger: 0.07,
    })
      .to({}, { duration: 1.5 })
      .to(sliders, {
        yPercent: 0,
        stagger: 0.07,
      })
      .to({}, { duration: 1.5 });

    timelineRef.current = tl;

    // Viewport observer: pause when out of view, resume smoothly when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tl.play();
        } else {
          tl.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, [lines]);

  return (
    <div
      ref={containerRef}
      className={`layered-text-root ${className}`}
      style={
        {
          "--layered-font-size": fontSize,
          "--layered-font-size-md": fontSizeMd,
        } as React.CSSProperties
      }
    >
      <ul className="layered-text-list">
        {lines.map((line, index) => {
          const translateX = calculateTranslateX(index);
          const isEven = index % 2 === 0;

          return (
            <li
              key={index}
              className={`layered-text-item ${isEven ? "is-even-layer" : "is-odd-layer"}`}
              style={
                {
                  height: `${lineHeight}px`,
                  transform: `translateX(${translateX.desktop}px) skew(${isEven ? "60deg, -30deg" : "0deg, -30deg"}) scaleY(${isEven ? "0.66667" : "1.33333"})`,
                  "--item-height": `${lineHeight}px`,
                  "--item-height-md": `${lineHeightMd}px`,
                  "--item-tx-desktop": `${translateX.desktop}px`,
                  "--item-tx-mobile": `${translateX.mobile}px`,
                } as React.CSSProperties
              }
            >
              <div className="layered-text-slider">
                <p
                  className="layered-text-p p-top"
                  style={{
                    height: `${lineHeight}px`,
                    lineHeight: `${lineHeight}px`,
                  }}
                >
                  {line.top}
                </p>
                <p
                  className="layered-text-p p-bottom"
                  style={{
                    height: `${lineHeight}px`,
                    lineHeight: `${lineHeight}px`,
                  }}
                >
                  {line.bottom}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LayeredText;
