import GlyphTexture from "./GlyphTexture";

export default function HeroBackdrop({
  glowColor = "#0A3E96",
  shapeColor = "#12AFD8",
  fontSize = 11,
  haze = 0.35,
  rest = 0.048,
}) {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-grid" />
      <span className="hero-glow hero-glow-a" />
      <span className="hero-glow hero-glow-b" />
      <GlyphTexture
        className="hero-glyph"
        glowColor={glowColor}
        shapeColor={shapeColor}
        fontSize={fontSize}
        haze={haze}
        rest={rest}
      />
    </div>
  );
}
