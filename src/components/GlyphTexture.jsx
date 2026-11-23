import { useEffect, useRef } from "react";

/*
 * GlyphTexture — animated WebGL character texture.
 *
 * Ported to plain React 18 with no extra dependencies (the project ships only
 * react + react-dom). Visual behaviour matches the backgrounds-glyph source:
 * a slow cloud of drifting monospace glyphs with occasional expanding rings
 * and a hover/click trail.
 */

const CHARACTERS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const MAX_WAVES = 12;
const TRAIL = 12;
const TRAIL_LIFE = 700;
const WAVE_LIFE = 4;
const WAVE_GAP = 0.3;
const WAVE_SPEED = 560;
const WAVE_SLOWDOWN = 0.66;
const WAVE_EDGE = 10;
const WAVE_TAIL = 30;
const DRIFT = [-30, 12];
const ACTIVITY_DECAY = 900;

const VERTEX = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT = `
precision highp float;
uniform sampler2D atlas;
uniform vec2 size;
uniform vec2 cell;
uniform float dpr;
uniform float count;
uniform float time;
uniform float rest;
uniform float haze;
uniform float hoverInk;
uniform float activity;
uniform vec2 drift;
uniform vec3 color;
uniform vec3 accent;
uniform vec4 waves[${MAX_WAVES * 2}];
uniform vec4 trail[${TRAIL}];

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float smoothNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float outline(float kind, float angle, float phase) {
  if (kind < 0.5) return 1.0;
  if (kind < 1.5) {
    float s = sin(angle);
    float c = cos(angle);
    return (2.0 - 2.0 * s + s * sqrt(abs(c)) / (s + 1.4)) * 0.42;
  }
  return 1.0 + 0.14 * sin(3.0 * angle + phase) + 0.08 * sin(5.0 * angle - phase * 1.3);
}

void main() {
  vec2 pixel = vec2(gl_FragCoord.x, size.y - gl_FragCoord.y);
  vec2 index = floor(pixel / cell);
  vec2 point = (index + 0.5) * cell / dpr;

  float ring = 0.0;
  for (int i = 0; i < ${MAX_WAVES}; i++) {
    vec4 a = waves[i * 2];
    vec4 b = waves[i * 2 + 1];
    if (a.w <= 0.0) continue;
    vec2 v = point - a.xy;
    float angle = atan(-v.y, v.x);
    float shape = mix(1.0, outline(b.x, angle, b.z), b.y);
    shape *= 1.0 + 0.07 * sin(3.0 * angle + b.z + b.w) + 0.05 * sin(5.0 * angle - b.z * 1.7 - b.w * 1.3) + 0.03 * sin(9.0 * angle + b.w * 2.1);
    float d = length(v) - a.z * shape;
    float k = d > 0.0 ? d / ${WAVE_EDGE.toFixed(1)} : d / ${WAVE_TAIL.toFixed(1)};
    ring = max(ring, exp(-k * k) * a.w);
  }

  float hover = 0.0;
  for (int i = 0; i < ${TRAIL}; i++) {
    vec4 t = trail[i];
    if (t.w <= 0.0) continue;
    vec2 v = point - t.xy;
    hover += t.w * exp(-dot(v, v) / (2.0 * t.z * t.z));
  }
  hover = min(hover, 1.0);

  mat2 turn = mat2(0.82, 0.57, -0.57, 0.82);
  vec2 q = turn * (point - drift);
  float blob = smoothNoise(vec2(q.x / 140.0, q.y / 80.0) + vec2(time * 0.04, 0.0)) * 0.62
    + smoothNoise(vec2(q.x / 62.0, q.y / 36.0) + vec2(3.7, time * 0.06)) * 0.38;
  float grain = smoothNoise(vec2(q.x / 30.0, q.y / 14.0) + vec2(time * 0.2, 7.3));
  float cloud = blob * (0.82 + 0.24 * grain);
  float mask = pow(smoothstep(0.47 - 0.2 * activity, 0.84, cloud), 2.6);

  float seed = hash(index);
  float epoch = floor(time * 0.08 * (0.4 + seed) + seed * 97.0);
  float character = floor(hash(index + epoch * 0.137) * count);
  vec2 local = fract(pixel / cell);
  float ink = pow(texture2D(atlas, vec2((character + local.x) / count, local.y)).a, 1.7);

  float grey = ink * clamp(rest + haze * mask * (1.0 + 0.3 * activity) + hoverInk * hover * (0.6 + 0.4 * mask), 0.0, 1.0);
  float blue = ink * ring * 0.72;
  float alpha = grey + blue - grey * blue;
  vec3 tint = color * grey * (1.0 - blue) + accent * blue;
  gl_FragColor = vec4(tint, alpha);
}
`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
}

function toRgb(color) {
  const probe = document.createElement("canvas").getContext("2d");
  if (!probe) return [0.9, 0.9, 0.9];
  probe.fillStyle = color;
  probe.fillRect(0, 0, 1, 1);
  const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
  return [r / 255, g / 255, b / 255];
}

function drawAtlas(cellWidth, cellHeight, font) {
  const atlas = document.createElement("canvas");
  atlas.width = Math.ceil(cellWidth * CHARACTERS.length);
  atlas.height = Math.ceil(cellHeight);
  const context = atlas.getContext("2d");
  context.font = font;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#fff";
  for (let i = 0; i < CHARACTERS.length; i += 1) {
    context.fillText(CHARACTERS[i], (i + 0.5) * cellWidth, cellHeight / 2);
  }
  return atlas;
}

function createRenderer(gl) {
  const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 3, -1, -1, 3]),
    gl.STATIC_DRAW,
  );
  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  const at = (name) => gl.getUniformLocation(program, name);
  const uniforms = {
    atlas: at("atlas"),
    size: at("size"),
    cell: at("cell"),
    dpr: at("dpr"),
    count: at("count"),
    time: at("time"),
    rest: at("rest"),
    haze: at("haze"),
    hoverInk: at("hoverInk"),
    activity: at("activity"),
    drift: at("drift"),
    color: at("color"),
    accent: at("accent"),
    waves: at("waves"),
    trail: at("trail"),
  };
  gl.uniform1i(uniforms.atlas, 0);
  gl.uniform1f(uniforms.count, CHARACTERS.length);

  return {
    atlas(image) {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image,
      );
    },
    draw(frame) {
      gl.viewport(0, 0, frame.width, frame.height);
      gl.uniform2f(uniforms.size, frame.width, frame.height);
      gl.uniform2f(uniforms.cell, frame.cell[0], frame.cell[1]);
      gl.uniform1f(uniforms.dpr, frame.dpr);
      gl.uniform1f(uniforms.time, frame.time);
      gl.uniform1f(uniforms.rest, frame.rest);
      gl.uniform1f(uniforms.haze, frame.haze);
      gl.uniform1f(uniforms.hoverInk, frame.hoverInk);
      gl.uniform1f(uniforms.activity, frame.activity);
      gl.uniform2f(uniforms.drift, frame.drift[0], frame.drift[1]);
      gl.uniform3f(uniforms.color, frame.color[0], frame.color[1], frame.color[2]);
      gl.uniform3f(uniforms.accent, frame.accent[0], frame.accent[1], frame.accent[2]);
      gl.uniform4fv(uniforms.waves, frame.waves);
      gl.uniform4fv(uniforms.trail, frame.trail);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
  };
}

export default function GlyphTexture({
  glowColor,
  shapeColor,
  fontSize = 10,
  haze = 0.12,
  rest = 0,
  hoverInk = 0.3,
  interactive = true,
  className = "",
  ...props
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const optionsRef = useRef({});

  optionsRef.current = { glowColor, shapeColor, fontSize, haze, rest, hoverInk };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return undefined;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
    });
    const renderer = gl ? createRenderer(gl) : null;
    if (!renderer) return undefined;

    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const state = {
      waves: [],
      trail: [],
      activity: { value: 0, at: 0 },
      time: 0,
      width: 0,
      height: 0,
      dpr: 1,
      cell: [7, 13],
      colorKey: "",
      color: [0.9, 0.9, 0.9],
      accent: [0.9, 0.9, 0.9],
    };
    const waveData = new Float32Array(MAX_WAVES * 8);
    const trailData = new Float32Array(TRAIL * 4);

    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth <= 768 || window.matchMedia("(max-width: 768px)").matches);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      state.width = rect.width;
      state.height = rect.height;
      state.dpr = isMobile ? 1.0 : Math.max(1, Math.min(window.devicePixelRatio || 1, 1.5));
      canvas.width = Math.max(1, Math.round(rect.width * state.dpr));
      canvas.height = Math.max(1, Math.round(rect.height * state.dpr));
      const { fontSize: size } = optionsRef.current;
      const font = `${size * state.dpr}px Menlo, ui-monospace, SFMono-Regular, Consolas, monospace`;
      const measure = document.createElement("canvas").getContext("2d");
      measure.font = font;
      state.cell = [
        Math.round(measure.measureText("0").width),
        Math.round(size * 1.25 * state.dpr),
      ];
      renderer.atlas(drawAtlas(state.cell[0], state.cell[1], font));
    };

    const draw = (looping = false) => {
      if (state.width === 0 || state.height === 0) return;
      const { glowColor: glow, shapeColor: shape, haze: hazeValue, rest: restValue, hoverInk: hoverValue } =
        optionsRef.current;

      if (!looping) {
        const text = getComputedStyle(container).color || "#e5e5e5";
        const key = `${glow ?? text}|${shape ?? text}`;
        if (key !== state.colorKey) {
          state.colorKey = key;
          state.color = toRgb(glow ?? text);
          state.accent = toRgb(shape ?? text);
        }
      }

      state.waves = state.waves.filter(
        (wave) => (state.time - wave.start) / 1000 - wave.delay <= WAVE_LIFE,
      );

      waveData.fill(0);
      const activeWaveLimit = isMobile ? 4 : MAX_WAVES;
      state.waves.forEach((wave, i) => {
        if (i >= activeWaveLimit) return;
        const age = (state.time - wave.start) / 1000 - wave.delay;
        if (age <= 0) return;
        const radius = (WAVE_SPEED * age) / (1 + WAVE_SLOWDOWN * age);
        const fade =
          Math.min(1, age / 0.05) *
          Math.exp(-Math.max(0, age - 0.4) / 1.3) *
          Math.min(1, (WAVE_LIFE - age) / 0.5);
        waveData[i * 8] = wave.x;
        waveData[i * 8 + 1] = wave.y;
        waveData[i * 8 + 2] = radius;
        waveData[i * 8 + 3] = fade * wave.strength;
        waveData[i * 8 + 4] = wave.kind;
        waveData[i * 8 + 5] = 0.12 + 0.5 * Math.min(1, age / 2.2);
        waveData[i * 8 + 6] = wave.phase;
        waveData[i * 8 + 7] = age * 3;
      });

      state.trail = state.trail.filter((point) => state.time - point.t < TRAIL_LIFE);
      trailData.fill(0);
      state.trail.forEach((point, i) => {
        if (i >= TRAIL) return;
        const age = (state.time - point.t) / TRAIL_LIFE;
        if (age < 0 || age >= 1) return;
        trailData[i * 4] = point.x;
        trailData[i * 4 + 1] = point.y;
        trailData[i * 4 + 2] = 40 + 25 * age;
        trailData[i * 4 + 3] = 0.3 * (1 - age) * (1 - age);
      });

      const seconds = state.time / 1000;
      const energy = state.activity;
      const activity =
        energy.value *
        Math.exp(-Math.max(0, state.time - energy.at) / ACTIVITY_DECAY);

      renderer.draw({
        width: canvas.width,
        height: canvas.height,
        dpr: state.dpr,
        cell: state.cell,
        time: seconds,
        rest: restValue,
        haze: hazeValue,
        hoverInk: hoverValue,
        activity,
        drift: [DRIFT[0] * seconds, DRIFT[1] * seconds],
        color: state.color,
        accent: state.accent,
        waves: waveData,
        trail: trailData,
      });
    };

    resize();
    draw();

    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(container);

    let raf = 0;
    let last = performance.now();
    let lastPaint = 0;
    let inView = false;
    let pageVisible = !document.hidden;

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      const delta = Math.min(now - last, 64);
      last = now;
      state.time += delta;
      // Cap the texture at ~20fps on mobile (saves battery/GPU) and ~30fps on desktop
      const targetFps = isMobile ? 20 : 30;
      if (now - lastPaint < 1000 / targetFps) return;
      lastPaint = now;
      draw(true);
    };

    const start = () => {
      if (raf || !inView || !pageVisible || reduceQuery.matches) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const sync = () => {
      if (inView && pageVisible && !reduceQuery.matches) start();
      else stop();
    };

    const onContextLost = (e) => {
      e.preventDefault();
      stop();
    };

    const onContextRestored = () => {
      resize();
      start();
    };

    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);

    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? false;
        sync();
      },
      { rootMargin: "80px" },
    );
    io.observe(container);

    const onVisibility = () => {
      pageVisible = !document.hidden;
      sync();
    };
    const onMotion = () => sync();

    document.addEventListener("visibilitychange", onVisibility);
    if (reduceQuery.addEventListener) reduceQuery.addEventListener("change", onMotion);

    const inside = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return null;
      return { x, y };
    };

    const onPointerMove = (event) => {
      if (!interactive || reduceQuery.matches) return;
      const at = inside(event);
      if (!at) return;
      const now = state.time;
      const lastPoint = state.trail[state.trail.length - 1];
      const energy = state.activity;
      const current =
        energy.value * Math.exp(-Math.max(0, now - energy.at) / ACTIVITY_DECAY);
      state.activity = {
        value: Math.min(
          1,
          current + (lastPoint ? Math.hypot(at.x - lastPoint.x, at.y - lastPoint.y) : 0) / 600,
        ),
        at: now,
      };
      if (lastPoint && Math.hypot(at.x - lastPoint.x, at.y - lastPoint.y) < 18) return;
      state.trail = [...state.trail.slice(1 - TRAIL), { x: at.x, y: at.y, t: now }];
      if (!raf) draw();
    };

    const onPointerDown = (event) => {
      if (!interactive || reduceQuery.matches) return;
      const at = inside(event);
      if (!at) return;
      const kind = 1 + Math.floor(Math.random() * 2);
      const phase = Math.random() * Math.PI * 2;
      for (const [delay, strength] of [
        [0, 1],
        [WAVE_GAP, 0.55],
      ]) {
        state.waves.push({
          x: at.x,
          y: at.y,
          kind,
          phase,
          strength,
          delay,
          start: state.time,
        });
      }
      if (state.waves.length > MAX_WAVES) {
        state.waves = state.waves.slice(-MAX_WAVES);
      }
      if (!raf) draw();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    // Periodic ambient pulse keeps the backdrop visibly alive and continuously animated
    const triggerAmbientPulse = () => {
      if (document.hidden || reduceQuery.matches) return;
      if (!state.width || !state.height) return;
      const x = (0.15 + Math.random() * 0.7) * state.width;
      const y = (0.15 + Math.random() * 0.7) * state.height;
      const kind = 1 + Math.floor(Math.random() * 2);
      const phase = Math.random() * Math.PI * 2;
      for (const [delay, strength] of [
        [0, 0.95],
        [WAVE_GAP, 0.55],
      ]) {
        state.waves.push({
          x,
          y,
          kind,
          phase,
          strength,
          delay,
          start: performance.now(),
        });
      }
      if (state.waves.length > MAX_WAVES) {
        state.waves = state.waves.slice(-MAX_WAVES);
      }
      if (!raf) draw();
    };

    const initialTimer = setTimeout(triggerAmbientPulse, 400);
    const ambientPulseInterval = setInterval(triggerAmbientPulse, 3600);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(ambientPulseInterval);
      stop();
      io.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (reduceQuery.removeEventListener) {
        reduceQuery.removeEventListener("change", onMotion);
      }
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={`glyph-texture ${className}`.trim()}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
