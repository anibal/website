import type { APIRoute } from 'astro';
import { getPosts } from '../../lib/posts';
import { renderOgPng } from '../../lib/og';

interface OgMeta {
  title: string;
  eyebrow?: string;
  description?: string;
  isHome?: boolean;
}

function routeFromPath(p: string): string {
  if (p === '/') return 'home';
  if (p === '/es/') return 'es/home';
  return p.replace(/^\/|\/$/g, '');
}

export async function getStaticPaths() {
  const paths: { params: { route: string }; props: OgMeta }[] = [];

  const enMeta: Record<string, OgMeta> = {
    '/': {
      title: 'I help engineering organizations adopt AI-assisted development\n— without breaking their teams or their codebase',
      eyebrow: '~/anibal-rojas',
      description: 'AI readiness diagnostics, fractional VP of Engineering, executive coaching.',
      isHome: true,
    },
    '/services/diagnostic/': {
      title: 'Find out where AI actually pays off in your organization — before you commit budget, roadmap, or credibility.',
      eyebrow: '~/anibal-rojas · services',
      description: "A fixed-scope, fixed-fee assessment (2–4 weeks) of your engineering organization's AI readiness across the whole SDLC.",
    },
    '/services/fractional/': {
      title: 'Senior engineering leadership, embedded part-time — until the new way of working sticks.',
      eyebrow: '~/anibal-rojas · services',
      description: 'Ongoing, embedded leadership on a monthly retainer. Strategy, processes, team structure, and the honest conversations in between.',
    },
    '/services/coaching/': {
      title: 'One-on-one work with someone who has sat in your chair.',
      eyebrow: '~/anibal-rojas · services',
      description: 'Executive coaching for CTOs, VPs, and Directors navigating the AI transition — or their own. 3–6 month engagements.',
    },
    '/about/': {
      title: 'I help you turn AI into a boring technology.',
      eyebrow: '~/anibal-rojas · about',
      description: 'Three decades building and leading software organizations. VP of Engineering at Platzi. A year hands-deep in AI-assisted development.',
    },
    '/principles/': {
      title: 'Fundamental Principles for working with coding assistants',
      eyebrow: '~/anibal-rojas · principles',
      description: 'Five articles on the fundamental principles of AI-assisted development — hallucination as a feature, the math of value, systems, steering, backpressure.',
    },
    '/contact/': {
      title: 'Book a conversation',
      eyebrow: '~/anibal-rojas · contact',
      description: 'Every engagement starts with a conversation — no pitch, no deck, no commitment.',
    },
    '/ideas/': {
      title: 'Ideas',
      eyebrow: '~/anibal-rojas · ideas',
      description: 'Writing on AI-assisted development, engineering leadership, systems thinking, and the messy human reality between them.',
    },
  };

  const esMeta: Record<string, OgMeta> = {
    '/es/': {
      title: 'Ayudo a organizaciones de ingeniería a adoptar el desarrollo asistido por IA\n— sin romper sus equipos ni su código',
      eyebrow: '~/anibal-rojas',
      description: 'Diagnóstico de preparación para IA, VP de Ingeniería fraccional, coaching ejecutivo.',
      isHome: true,
    },
    '/es/servicios/diagnostico/': {
      title: 'Descubre dónde rinde de verdad la IA en tu organización — antes de comprometer presupuesto, hoja de ruta o credibilidad.',
      eyebrow: '~/anibal-rojas · servicios',
      description: 'Una evaluación de alcance y precio fijos (2–4 semanas) de la preparación de tu organización de ingeniería para la IA.',
    },
    '/es/servicios/fractional/': {
      title: 'Liderazgo senior de ingeniería, embebido a tiempo parcial — hasta que la nueva forma de trabajar se sostenga sola.',
      eyebrow: '~/anibal-rojas · servicios',
      description: 'Liderazgo continuo y embebido, con retainer mensual. Estrategia de adopción de IA, procesos, estructura de equipos.',
    },
    '/es/servicios/coaching/': {
      title: 'Trabajo uno a uno con alguien que ya estuvo sentado en tu silla.',
      eyebrow: '~/anibal-rojas · servicios',
      description: 'Coaching ejecutivo para CTOs, VPs y Directores navegando la transición de la IA. Procesos de 3 a 6 meses.',
    },
    '/es/sobre-mi/': {
      title: 'Te ayudo a convertir la IA en una tecnología aburrida.',
      eyebrow: '~/anibal-rojas · sobre mí',
      description: 'Tres décadas construyendo y liderando organizaciones de software. VP de Ingeniería en Platzi. Coaching ejecutivo. Pensamiento sistémico.',
    },
    '/es/principios/': {
      title: 'Principios Fundamentales para trabajar con Asistentes de Programación',
      eyebrow: '~/anibal-rojas · principios',
      description: 'Cinco artículos sobre los principios fundamentales del desarrollo asistido por IA — la alucinación como feature, steering, backpressure.',
    },
    '/es/contacto/': {
      title: 'Agenda una conversación',
      eyebrow: '~/anibal-rojas · contacto',
      description: 'Todo empieza con una conversación — sin pitch, sin presentación, sin compromiso.',
    },
    '/es/ideas/': {
      title: 'Ideas',
      eyebrow: '~/anibal-rojas · ideas',
      description: 'Escritos sobre desarrollo asistido por IA, liderazgo de ingeniería, pensamiento sistémico, y la desordenada realidad humana entre ellos.',
    },
  };

  for (const [path, meta] of Object.entries(enMeta)) {
    paths.push({ params: { route: routeFromPath(path) }, props: meta });
  }
  for (const [path, meta] of Object.entries(esMeta)) {
    paths.push({ params: { route: routeFromPath(path) }, props: meta });
  }

  const enPosts = await getPosts('en');
  for (const post of enPosts) {
    const date = post.data.date;
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    paths.push({
      params: { route: `${y}/${m}/${d}/${post.id}` },
      props: {
        title: post.data.title,
        eyebrow: '~/anibal-rojas · ideas',
        description: post.data.description,
      },
    });
  }

  const esPosts = await getPosts('es');
  for (const post of esPosts) {
    const date = post.data.date;
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    paths.push({
      params: { route: `${y}/${m}/${d}/${post.id}` },
      props: {
        title: post.data.title,
        eyebrow: '~/anibal-rojas · ideas',
        description: post.data.description,
      },
    });
  }

  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const meta = props as OgMeta;
  const png = await renderOgPng(meta);
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
