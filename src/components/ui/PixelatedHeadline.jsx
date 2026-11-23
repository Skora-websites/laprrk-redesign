import { useEffect, useRef, useState } from "react";

const STEPS = [64, 48, 36, 28, 20, 14, 10, 7, 5, 3, 2];
const DURATION = 1000; // ~1 second

/**
 * PixelatedHeadline
 *
 * Renders headline text with a canvas-based chunky pixelation entrance animation:
 * 1. Measures the exact browser-rendered position of every word or line
 * 2. Draws text onto an offscreen canvas at exact subpixel coordinates
 * 3. Scales down and up with imageSmoothingEnabled = false
 * 4. Steps down block sizes: 64 -> 48 -> 36 -> 28 -> 20 -> 14 -> 10 -> 7 -> 5 -> 3 -> 2 px over ~1s
 * 5. Swaps in the real text crisp and clean
 *
 * Guarantees:
 * - Real text is never hidden unless canvas has successfully drawn its first chunky frame.
 * - Absolute safety timeout prevents vanishing even on slow font load or background tab.
 * - Exact word/line position tracking eliminates misalignment jumps.
 * - Full SEO, screen-reader accessibility, and prefers-reduced-motion support.
 */
export default function PixelatedHeadline({
  as: Component = "h1",
  id,
  className = "",
  style = {},
  children,
  delay = 60,
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const [isFinished, setIsFinished] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  // Check reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Split string children into individual word tokens for exact DOM positioning
  const isStringChildren = typeof children === "string";
  const words = isStringChildren ? children.trim().split(/\s+/) : null;

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsFinished(true);
      return;
    }

    let rafId;
    let startTimeoutId;
    let safetyTimeoutId;
    let isCancelled = false;

    // Fail-safe timeout: text MUST show after 1.4s regardless of any rendering issues
    safetyTimeoutId = setTimeout(() => {
      if (!isCancelled) {
        setIsFinished(true);
      }
    }, Math.max(1400, delay + 1200));

    const startPixelation = () => {
      startTimeoutId = setTimeout(async () => {
        try {
          if (document.fonts && document.fonts.ready) {
            await document.fonts.ready;
          }
        } catch {
          // continue if font API fails
        }

        if (isCancelled) return;

        let retryCount = 0;
        const initCanvas = () => {
          if (isCancelled) return;

          const container = containerRef.current;
          const textEl = textRef.current;
          const canvas = canvasRef.current;

          if (!container || !textEl || !canvas) {
            setIsFinished(true);
            return;
          }

          const containerRect = container.getBoundingClientRect();
          if (containerRect.width === 0 || containerRect.height === 0) {
            if (retryCount < 12) {
              retryCount++;
              rafId = requestAnimationFrame(initCanvas);
              return;
            }
            setIsFinished(true);
            return;
          }

          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const W = Math.ceil(containerRect.width * dpr);
          const H = Math.ceil(containerRect.height * dpr);

          canvas.width = W;
          canvas.height = H;
          canvas.style.width = `${containerRect.width}px`;
          canvas.style.height = `${containerRect.height}px`;

          const mainCtx = canvas.getContext("2d");
          if (!mainCtx) {
            setIsFinished(true);
            return;
          }

          const computedStyle = window.getComputedStyle(textEl);
          const fontSize = computedStyle.fontSize;
          const fontWeight = computedStyle.fontWeight;
          const fontFamily = computedStyle.fontFamily;
          const fontStyle = computedStyle.fontStyle || "normal";
          const color = computedStyle.color || "#062a55";

          // High-res offscreen buffer
          const offscreen = document.createElement("canvas");
          offscreen.width = W;
          offscreen.height = H;
          const offCtx = offscreen.getContext("2d");
          if (!offCtx) {
            setIsFinished(true);
            return;
          }

          offCtx.scale(dpr, dpr);
          offCtx.font = `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}`;
          offCtx.fillStyle = color;
          offCtx.textBaseline = "middle";
          offCtx.textAlign = "left";

          if (computedStyle.letterSpacing && computedStyle.letterSpacing !== "normal") {
            try {
              offCtx.letterSpacing = computedStyle.letterSpacing;
            } catch {
              // ignore if unsupported
            }
          }

          // Gather exact positions of words or child elements
          const wordSpans = textEl.querySelectorAll(".pixel-word");
          const hasWordSpans = wordSpans.length > 0;
          const lineChildren = !hasWordSpans ? Array.from(textEl.children) : [];

          if (hasWordSpans) {
            wordSpans.forEach((wordSpan) => {
              const rect = wordSpan.getBoundingClientRect();
              const text = wordSpan.textContent.trim();
              if (!text) return;
              const x = rect.left - containerRect.left;
              const y = rect.top - containerRect.top + rect.height / 2;
              offCtx.fillText(text, x, y);
            });
          } else if (lineChildren.length > 0) {
            lineChildren.forEach((child) => {
              const rect = child.getBoundingClientRect();
              const text = child.textContent.trim();
              if (!text) return;
              const x = rect.left - containerRect.left;
              const y = rect.top - containerRect.top + rect.height / 2;
              offCtx.fillText(text, x, y);
            });
          } else {
            // Plain single text fallback
            const rect = textEl.getBoundingClientRect();
            const text = textEl.textContent.trim();
            const x = rect.left - containerRect.left;
            const y = rect.top - containerRect.top + rect.height / 2;
            offCtx.fillText(text, x, y);
          }

          // Small canvas for downscale/upscale
          const smallCanvas = document.createElement("canvas");
          const smallCtx = smallCanvas.getContext("2d");

          const renderBlockSize = (blockSize) => {
            const effectiveBlock = Math.max(1, blockSize * dpr);
            const sw = Math.max(1, Math.ceil(W / effectiveBlock));
            const sh = Math.max(1, Math.ceil(H / effectiveBlock));

            smallCanvas.width = sw;
            smallCanvas.height = sh;
            if (!smallCtx) return;

            smallCtx.imageSmoothingEnabled = false;
            smallCtx.clearRect(0, 0, sw, sh);
            smallCtx.drawImage(offscreen, 0, 0, W, H, 0, 0, sw, sh);

            mainCtx.imageSmoothingEnabled = false;
            mainCtx.mozImageSmoothingEnabled = false;
            mainCtx.webkitImageSmoothingEnabled = false;
            mainCtx.msImageSmoothingEnabled = false;
            mainCtx.clearRect(0, 0, W, H);
            mainCtx.drawImage(smallCanvas, 0, 0, sw, sh, 0, 0, W, H);
          };

          // Render initial 64px frame
          renderBlockSize(STEPS[0]);
          // Hide underlying DOM text ONLY now that canvas is actively showing the chunky block
          setCanvasReady(true);

          // Animate down to 2px over DURATION
          const startTime = performance.now();
          const stepDuration = DURATION / STEPS.length;
          let lastStepIndex = 0;

          const animate = (now) => {
            if (isCancelled) return;
            const elapsed = now - startTime;
            const stepIndex = Math.min(STEPS.length - 1, Math.floor(elapsed / stepDuration));

            if (stepIndex !== lastStepIndex) {
              lastStepIndex = stepIndex;
              renderBlockSize(STEPS[stepIndex]);
            }

            if (elapsed < DURATION) {
              rafId = requestAnimationFrame(animate);
            } else {
              // Swap in the real text crisp & clear
              setIsFinished(true);
            }
          };

          rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(initCanvas);
      }, delay);
    };

    // Immediate check if element is in viewport
    const containerEl = containerRef.current;
    if (containerEl) {
      const rect = containerEl.getBoundingClientRect();
      const inView =
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0;

      if (inView) {
        startPixelation();
      } else {
        const observer = new IntersectionObserver(
          (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
              startPixelation();
              observer.disconnect();
            }
          },
          { threshold: 0.05 }
        );
        observer.observe(containerEl);
        return () => observer.disconnect();
      }
    } else {
      startPixelation();
    }

    return () => {
      isCancelled = true;
      if (startTimeoutId) clearTimeout(startTimeoutId);
      if (safetyTimeoutId) clearTimeout(safetyTimeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion, delay]);

  return (
    <Component
      ref={containerRef}
      id={id}
      className={`pixelated-headline-wrapper ${className}`}
      style={{
        position: "relative",
        display: "block",
        ...style,
      }}
    >
      <span
        ref={textRef}
        className={`pixelated-headline-real ${isFinished ? "is-finished" : canvasReady ? "is-animating" : "is-ready"}`}
        style={{
          display: "block",
          opacity: isFinished ? 1 : canvasReady ? 0 : 1,
          visibility: isFinished ? "visible" : canvasReady ? "hidden" : "visible",
        }}
      >
        {isStringChildren && words
          ? words.map((word, i) => (
              <span
                key={i}
                className="pixel-word"
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                }}
              >
                {word + (i < words.length - 1 ? " " : "")}
              </span>
            ))
          : children}
      </span>

      {!isFinished && (
        <canvas
          ref={canvasRef}
          className="pixelated-headline-canvas"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            imageRendering: "pixelated",
            zIndex: 1,
            opacity: canvasReady ? 1 : 0,
          }}
        />
      )}
    </Component>
  );
}
