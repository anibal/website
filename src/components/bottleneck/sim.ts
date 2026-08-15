/**
 * The Bottleneck — pure simulation core (no DOM).
 * Used twice: at build time (Bottleneck.astro renders the deterministic SSR
 * snapshot) and client-side (client.ts animates it). One engine, no drift.
 *
 * The thesis made visible: arrival pressure exceeds every stage; "AI velocity"
 * multiplies only the CODE stage's rate. The queues migrate right on their own.
 */

export const PRESETS = ['2019', '2024', 'now'] as const;
export type Preset = (typeof PRESETS)[number];

export const STAGES = ['ideas', 'code', 'review', 'integration', 'production'] as const;

/** viewBox geometry (labels are HTML — only geometry lives in the SVG) */
export const VIEW = {
  w: 960,
  h: 210,
  y: 96, // main flow line
  xs: [96, 288, 480, 672, 864], // stage centers: 10/30/50/70/90%
  reworkY: 172, // return arc depth
  queueX: -34, // queue stack offset left of a node
  queueGap: 6, // px between queued ticks
  queueCap: 12, // rendered slots; beyond that a "+n" counter appears above
} as const;

/** ms to process one token, per stage. Arrays index by preset. */
const SERVICE: Record<string, number | number[]> = {
  ideas: 900,
  code: [1400, 700, 350], // the stage AI touches: 1× / 2× / 4×
  review: [1100, 1050, 1000], // AI helps review — a little. It stays human.
  integration: 1250, // coordination does not accelerate
  production: 500,
};

/** arrival pressure per preset: AI velocity also means more, smaller PRs */
const ARRIVAL = [850, 850, 700];

/** rework probability at review, per preset — the polite non-linear collapse */
const REWORK = [0, 0.04, 0.08];

const SPEED = 0.09; // px per ms — one link (192px) in ~2.1s, calm and legible
const MAX_TOKENS = 64; // WIP cap: the backlog gate holds here

export interface Token {
  x: number;
  y: number;
  /** travel → toStage | service at stage | queued at stage | rework → code */
  kind: 'travel' | 'service' | 'queued' | 'rework';
  stage: number; // meaning depends on kind
  until: number; // service end time (kind === 'service')
  slot: number; // queue slot (kind === 'queued')
  dead: boolean;
}

export interface Sim {
  now: number;
  preset: Preset;
  presetIdx: number;
  tokens: Token[];
  queues: number[]; // queued count per stage
  busy: boolean[]; // stage currently serving
  shipped: number;
  nextArrival: number;
  rng: () => number;
}

export function createSim(preset: Preset, seed = 7): Sim {
  let s = seed >>> 0;
  const rng = () => {
    // mulberry32 — deterministic snapshots for SSR/OG
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return {
    now: 0,
    preset,
    presetIdx: PRESETS.indexOf(preset),
    tokens: [],
    queues: [0, 0, 0, 0, 0],
    busy: [false, false, false, false, false],
    shipped: 0,
    nextArrival: 400,
    rng,
  };
}

export function setPreset(sim: Sim, preset: Preset): void {
  sim.preset = preset;
  sim.presetIdx = PRESETS.indexOf(preset);
}

function serviceMs(sim: Sim, stage: number): number {
  const v = SERVICE[STAGES[stage]];
  return Array.isArray(v) ? v[sim.presetIdx] : v;
}

function spawn(sim: Sim): void {
  if (sim.tokens.length >= MAX_TOKENS) return; // backlog gate
  sim.tokens.push({ x: 0, y: VIEW.y, kind: 'travel', stage: 0, until: 0, slot: 0, dead: false });
}

function enqueue(sim: Sim, t: Token, stage: number): void {
  t.kind = 'queued';
  t.stage = stage;
  t.slot = sim.queues[stage];
  sim.queues[stage]++;
}

function startService(sim: Sim, t: Token, stage: number): void {
  t.kind = 'service';
  t.stage = stage;
  t.x = VIEW.xs[stage];
  t.y = VIEW.y;
  t.until = sim.now + serviceMs(sim, stage);
  sim.busy[stage] = true;
}

function releaseQueue(sim: Sim, stage: number): void {
  // promote the first queued token at this stage, compact the rest
  let first: Token | undefined;
  for (const t of sim.tokens) {
    if (t.kind === 'queued' && t.stage === stage) {
      if (!first) first = t;
      t.slot--;
    }
  }
  sim.queues[stage] = Math.max(0, sim.queues[stage] - 1);
  if (first) startService(sim, first, stage);
}

/** deterministic position for a queued token (also used by the SSR snapshot) */
export function queuePos(stage: number, slot: number): { x: number; y: number } {
  const capped = Math.min(slot, VIEW.queueCap - 1);
  return {
    x: VIEW.xs[stage] + VIEW.queueX,
    y: VIEW.y - 10 - capped * VIEW.queueGap,
  };
}

export function step(sim: Sim, dtMs: number): void {
  sim.now += dtMs;

  while (sim.now >= sim.nextArrival) {
    spawn(sim);
    sim.nextArrival += ARRIVAL[sim.presetIdx];
  }

  for (const t of sim.tokens) {
    if (t.dead) continue;

    if (t.kind === 'travel') {
      const stage = t.stage;
      const nodeX = VIEW.xs[stage];
      const intakeX = nodeX + VIEW.queueX; // queues form at the stage's input side
      t.x += SPEED * dtMs;
      t.y = VIEW.y;
      if (sim.busy[stage] && t.x >= intakeX) {
        enqueue(sim, t, stage);
        const p = queuePos(stage, t.slot);
        t.x = p.x;
        t.y = p.y;
      } else if (!sim.busy[stage] && t.x >= nodeX) {
        startService(sim, t, stage);
      }
    } else if (t.kind === 'rework') {
      // return along the lower arc: review → code
      t.x -= SPEED * 1.15 * dtMs;
      const codeX = VIEW.xs[1];
      const mid = (VIEW.xs[2] + codeX) / 2;
      const depth = 1 - Math.min(1, Math.abs(t.x - mid) / (mid - codeX));
      t.y = VIEW.y + (VIEW.reworkY - VIEW.y) * depth;
      if (t.x <= codeX) {
        t.y = VIEW.y;
        if (sim.busy[1]) {
          t.x = codeX;
          enqueue(sim, t, 1);
        } else {
          startService(sim, t, 1);
        }
      }
    } else if (t.kind === 'service') {
      if (sim.now < t.until) continue;
      const stage = t.stage;
      sim.busy[stage] = false;
      if (STAGES[stage] === 'review' && sim.rng() < REWORK[sim.presetIdx]) {
        t.kind = 'rework';
        releaseQueue(sim, stage);
        continue;
      }
      if (stage === STAGES.length - 1) {
        t.dead = true;
        sim.shipped++;
      } else {
        t.kind = 'travel';
        t.stage = stage + 1;
        // resume from this node's right edge
        t.x = VIEW.xs[stage];
      }
      releaseQueue(sim, stage);
    }
  }

  if (sim.tokens.length && sim.tokens.every((t) => t.dead)) sim.tokens = [];
  else sim.tokens = sim.tokens.filter((t) => !t.dead);
}

export interface Snapshot {
  tokens: { x: number; y: number }[];
  queues: number[];
  shipped: number;
}

/** Run the sim headless to a believable steady state (SSR / reduced-motion). */
export function snapshot(preset: Preset, seconds = 25, seed = 7): Snapshot {
  const sim = createSim(preset, seed);
  const dt = 50;
  for (let t = 0; t < seconds * 1000; t += dt) step(sim, dt);
  return {
    tokens: sim.tokens.map((t) => {
      const p = t.kind === 'queued' ? queuePos(t.stage, t.slot) : t;
      return { x: Math.round(p.x), y: Math.round(p.y) };
    }),
    queues: [...sim.queues],
    shipped: sim.shipped,
  };
}
