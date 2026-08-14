/* ------------------------------------------------------------------
   UI strings — all interface copy in both locales lives here.
   Page/body copy that is long-form (hero, thesis, about…) may also live
   here when shared across templates; content collections handle posts.
   NOTE: EN is the source locale; ES must be proofread by Aníbal.
   ------------------------------------------------------------------ */

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'meta.title': 'Aníbal Rojas — AI-assisted development, without breaking your teams',
    'meta.description':
      'I help engineering organizations adopt AI-assisted development — without breaking their teams or their codebase. AI readiness diagnostics, fractional VP of Engineering, executive coaching.',

    'a11y.skip': 'Skip to content',
    'a11y.language': 'Language',

    'cta.book': 'Book a conversation',

    'hero.eyebrow': 'anibal rojas — engineering leadership · medellín',
    'hero.title':
      'I help engineering organizations adopt AI-assisted development — <em>without breaking their teams or their codebase</em>',
    'hero.lede':
      "Generative AI is rewriting the SDLC end to end. Most companies are responding with tool licenses and hype. The hard part — changing how engineers, leaders, and processes actually work — is where transformations quietly die. That's the part I do.",
    'hero.cta.secondary': 'How we can work together',

    'thesis.title': 'The problem is still the people and the teams. It just got more complex.',
    'thesis.p1':
      "Software is knowledge work: humans making decisions together inside a complex system. AI multiplies how fast code gets written — it does not multiply how well an organization decides, coordinates, and learns. Inject AI into every stage of the SDLC and the bottleneck doesn't disappear; it moves — to judgment, to trust, to how teams actually work.",
    'thesis.p2':
      "That's why I approach every engagement through two lenses I've spent my career sharpening: <strong>systems thinking</strong> and <strong>building high-performance teams</strong>.",

    'footer.eyebrow': 'contact',
    'footer.title': 'Ready to talk about your team?',
    'footer.colophon': 'built from the terminal',
  },

  es: {
    'meta.title': 'Aníbal Rojas — Desarrollo asistido por IA, sin romper equipos ni código',
    'meta.description':
      'Ayudo a organizaciones de ingeniería a adoptar el desarrollo asistido por IA — sin romper sus equipos ni su código. Diagnóstico de preparación para IA, VP de Ingeniería fraccional, coaching ejecutivo.',

    'a11y.skip': 'Saltar al contenido',
    'a11y.language': 'Idioma',

    'cta.book': 'Agenda una conversación',

    'hero.eyebrow': 'anibal rojas — liderazgo de ingeniería · medellín',
    'hero.title':
      'Ayudo a organizaciones de ingeniería a adoptar el desarrollo asistido por IA — <em>sin romper sus equipos ni su código</em>',
    'hero.lede':
      'La IA Generativa está reescribiendo el SDLC de punta a punta. La mayoría de las empresas responde comprando licencias y repitiendo el hype. La parte difícil — cambiar cómo trabajan de verdad los ingenieros, los líderes y los procesos — es donde las transformaciones mueren en silencio. Esa es la parte que yo hago.',
    'hero.cta.secondary': 'Cómo podemos trabajar juntos',

    'thesis.title': 'El problema siguen siendo las personas y los equipos. Solo que ahora es más complejo.',
    'thesis.p1':
      'El software es trabajo de conocimiento: humanos tomando decisiones juntos dentro de un sistema complejo. La IA multiplica la velocidad a la que se escribe código — no multiplica qué tan bien una organización decide, coordina y aprende. Mete IA en cada etapa del SDLC y el cuello de botella no desaparece: se mueve — hacia el criterio, la confianza, y la forma en que los equipos realmente trabajan.',
    'thesis.p2':
      'Por eso abordo cada proyecto con los dos lentes que llevo toda mi carrera afilando: <strong>pensamiento sistémico</strong> y <strong>construcción de equipos de alto desempeño</strong>.',

    'footer.eyebrow': 'contacto',
    'footer.title': '¿Listo para hablar de tu equipo?',
    'footer.colophon': 'construido desde la terminal',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLocale];
