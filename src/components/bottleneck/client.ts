/**
 * The Bottleneck — client driver. Vanilla, no framework: the whole island is
 * this module (~4KB min). Starts only when the figure is on screen and the tab
 * is visible; reduced motion renders static per-preset snapshots (no rAF).
 * The sim warms to the exact SSR state (same seed/seconds), so the handoff
 * from static markup to live animation is invisible.
 */
import {
  createSim,
  setPreset,
  step,
  snapshot,
  queuePos,
  VIEW,
  PRESETS,
  type Preset,
  type Sim,
} from './sim';

const SSR_PRESET: Preset = 'now';
const SSR_SECONDS = 25;
const SSR_SEED = 7;
const SVGNS = 'http://www.w3.org/2000/svg';

interface I18n {
  captions: Record<Preset, string>;
  hot: Record<Preset, number[]>;
}

export function mount(): void {
  document.querySelectorAll<HTMLElement>('[data-bottleneck]').forEach(init);
}

function init(fig: HTMLElement): void {
  const svg = fig.querySelector('svg');
  const layer = fig.querySelector<SVGGElement>('[data-tokens]');
  const labels = fig.querySelectorAll<HTMLElement>('[data-stage-label]');
  const captionEl = fig.querySelector<HTMLElement>('[data-caption]');
  const buttons = fig.querySelectorAll<HTMLButtonElement>('[data-preset]');
  const counters = fig.querySelectorAll<SVGTextElement>('[data-queue-count]');
  const reworkArc = fig.querySelector<SVGPathElement>('[data-rework-arc]');
  if (!svg || !layer || !captionEl || !buttons.length) return;

  const i18n: I18n = JSON.parse(fig.dataset.i18n ?? '{}');
  const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');

  const sim = createSim(SSR_PRESET, SSR_SEED);
  warm(sim, SSR_SECONDS);

  let raf = 0;
  let last = 0;
  let running = false;
  let onScreen = false;

  function warm(s: Sim, seconds: number): void {
    for (let t = 0; t < seconds * 1000; t += 50) step(s, 50);
  }

  function render(): void {
    // sync rect pool to token count
    while (layer!.childElementCount < sim.tokens.length) {
      layer!.appendChild(document.createElementNS(SVGNS, 'rect'));
    }
    while (layer!.childElementCount > sim.tokens.length) {
      layer!.lastElementChild!.remove();
    }
    let rework = false;
    sim.tokens.forEach((t, i) => {
      const r = layer!.children[i] as SVGRectElement;
      const p = t.kind === 'queued' ? queuePos(t.stage, t.slot) : t;
      r.setAttribute('x', String(p.x - 2.5));
      r.setAttribute('y', String(p.y - 2.5));
      r.setAttribute('width', '5');
      r.setAttribute('height', '5');
      r.setAttribute('class', 'token');
      if (t.kind === 'rework') rework = true;
    });
    counters.forEach((c, i) => {
      const over = sim.queues[i] - VIEW.queueCap;
      c.style.display = over > 0 ? '' : 'none';
      if (over > 0) c.textContent = `+${over}`;
    });
    reworkArc?.classList.toggle('live', rework);
  }

  function frame(ts: number): void {
    if (!running) return;
    const dt = Math.min(100, ts - last || 16);
    last = ts;
    step(sim, dt);
    render();
    raf = requestAnimationFrame(frame);
  }

  function start(): void {
    if (running || motionQuery.matches) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  function stop(): void {
    running = false;
    cancelAnimationFrame(raf);
  }

  function renderStatic(preset: Preset): void {
    // reduced-motion path: steady-state snapshot, no animation
    const snap = snapshot(preset, SSR_SECONDS, SSR_SEED);
    while (layer!.childElementCount < snap.tokens.length) {
      layer!.appendChild(document.createElementNS(SVGNS, 'rect'));
    }
    while (layer!.childElementCount > snap.tokens.length) {
      layer!.lastElementChild!.remove();
    }
    snap.tokens.forEach((t, i) => {
      const r = layer!.children[i] as SVGRectElement;
      r.setAttribute('x', String(t.x - 2.5));
      r.setAttribute('y', String(t.y - 2.5));
      r.setAttribute('width', '5');
      r.setAttribute('height', '5');
      r.setAttribute('class', 'token');
    });
    counters.forEach((c, i) => {
      const over = snap.queues[i] - VIEW.queueCap;
      c.style.display = over > 0 ? '' : 'none';
      if (over > 0) c.textContent = `+${over}`;
    });
    reworkArc?.classList.remove('live');
  }

  function applyPreset(preset: Preset): void {
    setPreset(sim, preset);
    captionEl!.textContent = i18n.captions[preset];
    buttons.forEach((b) => {
      const active = b.dataset.preset === preset;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    labels.forEach((l) => {
      l.classList.toggle('hot', i18n.hot[preset].includes(Number(l.dataset.stageLabel)));
    });
    if (motionQuery.matches) renderStatic(preset);
  }

  buttons.forEach((b) => {
    b.addEventListener('click', () => applyPreset(b.dataset.preset as Preset));
  });

  // gate the rAF: on screen + tab visible (a well-engineered system idles)
  const io = new IntersectionObserver(
    (entries) => {
      onScreen = entries[0].isIntersecting;
      if (onScreen && !document.hidden) start();
      else stop();
    },
    { rootMargin: '100px' }
  );
  io.observe(fig);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else if (onScreen) start();
  });

  // honor a runtime change of the motion preference
  motionQuery.addEventListener('change', () => {
    if (motionQuery.matches) {
      stop();
      renderStatic(sim.preset);
    } else if (onScreen && !document.hidden) {
      start();
    }
  });

  if (!PRESETS.includes(SSR_PRESET)) return;
  render();
}
