/* ------------------------------------------------------------------
   UI strings + page copy — both locales, nested per section.
   Homepage body copy is verbatim from reference/homepage-copy-anibal-rojas.md
   (v2, approved). Do not rewrite, "improve," or retranslate.
   ------------------------------------------------------------------ */

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const en = {
  meta: {
    title: 'Aníbal Rojas — AI-assisted development, without breaking your teams',
    description:
      'I help engineering organizations adopt AI-assisted development — without breaking their teams or their codebase. AI readiness diagnostics, fractional VP of Engineering, executive coaching.',
  },
  a11y: {
    skip: 'Skip to content',
    language: 'Language',
    elsewhere: 'Elsewhere',
  },
  cta: {
    // TODO(calendly): swap mailto for the Calendly URL once that decision lands
    book: 'Book a conversation',
    bookHref: 'mailto:i@usedtocode.com?subject=Conversation',
  },
  hero: {
    eyebrow: 'anibal rojas — engineering leadership · medellín',
    title:
      'I help engineering organizations adopt AI-assisted development — <em>without breaking their teams or their codebase</em>',
    lede: "Generative AI is rewriting the SDLC end to end. Most companies are responding with tool licenses and hype. The hard part — changing how engineers, leaders, and processes actually work — is where transformations quietly die. That's the part I do.",
    secondary: 'How we can work together',
  },
  thesis: {
    title: 'The problem is still the people and the teams. It just got more complex.',
    p1: "Software is knowledge work: humans making decisions together inside a complex system. AI multiplies how fast code gets written — it does not multiply how well an organization decides, coordinates, and learns. Inject AI into every stage of the SDLC and the bottleneck doesn't disappear; it moves — to judgment, to trust, to how teams actually work.",
    p2: "That's why I approach every engagement through two lenses I've spent my career sharpening: <strong>systems thinking</strong> and <strong>building high-performance teams</strong>.",
  },
  who: {
    eyebrow: 'whoami',
    portraitLabel: '[ portrait ]',
    paragraphs: [
      "I'm Aníbal Rojas. I've spent 30 years building and leading software organizations — telecom, oil & gas, aviation, and startups. For six years I was VP of Engineering at Platzi, Latin America's leading tech education company, where I built and scaled high-performance teams and helped hundreds of people grow into engineers and leaders.",
      'Then I did something unusual for an executive: I went back to the code. I spent a full year hands-deep in AI-assisted development — agentic systems, coding assistants, their real limits and possibilities — and reached an uncomfortable conclusion: models, harnesses, skills, and plugins evolve too fast for any playbook to survive. The only durable way to work with these tools is <strong>from first principles</strong>. That\'s what my <em>Fundamental Principles</em> series proposes — written from the terminal, not from a conference stage.',
      'That combination is what I offer: an executive who has run engineering at scale, and a practitioner who knows exactly what these tools do when a system is collapsing non-linearly trying to scale.',
    ],
  },
  proof: {
    eyebrow: 'proof',
    cards: [
      {
        title: 'high-performance teams',
        text: 'Three decades building teams from 5 to 100+ engineers across four industries and two continents — including 6 years as VP of Engineering / SVP of Technology at Platzi.',
      },
      {
        title: 'first principles',
        text: 'A year of full-time, hands-on research into AI-assisted development, distilled into the <em>Fundamental Principles</em> series — hallucination as a feature, steering, backpressure — read by engineers and leaders across Latin America.',
      },
      {
        title: 'systems and people',
        text: 'Systems thinking applied to knowledge work, plus formal training in executive coaching and Gestalt. Technology adoption is a human process inside a complex system; I work on both at once.',
      },
      {
        title: 'the public conversation',
        text: 'I co-host <a href="https://ocorres.com" target="_blank" rel="noopener"><em>O corres o te encaramas</em></a> with Freddy Montes — a podcast on the impact of AI on software engineering. The name is a Venezuelan expression: when things move this fast, you either run or you climb.',
      },
    ],
  },
  services: {
    eyebrow: 'services',
    items: [
      {
        num: '01',
        title: 'Diagnostic',
        text: "A fixed-scope, fixed-fee assessment (2–4 weeks) of your engineering organization's AI readiness across the SDLC: tools, workflows, skills, incentives, team dynamics, and risks. You get a clear-eyed report and a prioritized roadmap — whether or not we ever work together again.",
      },
      {
        num: '02',
        title: 'Advisory & Fractional VP of Engineering',
        text: 'Ongoing, embedded leadership on a monthly retainer. I work with your CTO, your leaders, and your teams to turn the roadmap into working practice: adoption strategy, engineering processes, team structure, and the honest conversations in between.',
      },
      {
        num: '03',
        title: 'Executive coaching',
        text: 'One-on-one work with CTOs, VPs, and Directors navigating this transition — or their own. 3–6 month engagements. Grounded in three decades of operating experience and formal training in coaching and Gestalt practice.',
      },
    ],
    after: 'Not sure which fits? Start with a conversation.',
  },
  ideas: {
    eyebrow: 'ideas',
    intro: 'I write regularly about AI-assisted development, engineering leadership, systems thinking, and the messy human reality between them.',
    writing: {
      tag: 'writing',
      // TODO(session-4): link to /principles/ once the series landing exists
      title: 'Fundamental Principles for working with coding assistants',
    },
    podcast: {
      tag: 'podcast',
      title: 'O corres o te encaramas',
      href: 'https://ocorres.com',
    },
  },
  bottleneck: {
    ariaLabel:
      'Delivery pipeline simulation: work items flow left to right through ideas, code, review, integration and production. Amber queues show where the system is constrained.',
    control: 'ai velocity:',
    controlAria: 'AI velocity',
    stages: ['ideas', 'code', 'review', 'integration', 'production'],
    captions: {
      '2019': 'bottleneck: code',
      '2024': 'bottleneck: code review',
      now: 'bottleneck: judgment & coordination',
    },
  },
  footer: {
    eyebrow: 'contact',
    title: 'Ready to talk about your team?',
    colophon: 'built from the terminal',
  },
};

const es: typeof en = {
  meta: {
    title: 'Aníbal Rojas — Desarrollo asistido por IA, sin romper equipos ni código',
    description:
      'Ayudo a organizaciones de ingeniería a adoptar el desarrollo asistido por IA — sin romper sus equipos ni su código. Diagnóstico de preparación para IA, VP de Ingeniería fraccional, coaching ejecutivo.',
  },
  a11y: {
    skip: 'Saltar al contenido',
    language: 'Idioma',
    elsewhere: 'En otros sitios',
  },
  cta: {
    // TODO(calendly): cambiar el mailto por la URL de Calendly cuando se decida
    book: 'Agenda una conversación',
    bookHref: 'mailto:i@usedtocode.com?subject=Conversación',
  },
  hero: {
    eyebrow: 'anibal rojas — liderazgo de ingeniería · medellín',
    title:
      'Ayudo a organizaciones de ingeniería a adoptar el desarrollo asistido por IA — <em>sin romper sus equipos ni su código</em>',
    lede:
      'La IA Generativa está reescribiendo el SDLC de punta a punta. La mayoría de las empresas responde comprando licencias y repitiendo el hype. La parte difícil — cambiar cómo trabajan de verdad los ingenieros, los líderes y los procesos — es donde las transformaciones mueren en silencio. Esa es la parte que yo hago.',
    secondary: 'Cómo podemos trabajar juntos',
  },
  thesis: {
    title: 'El problema siguen siendo las personas y los equipos. Solo que ahora es más complejo.',
    p1: 'El software es trabajo de conocimiento: humanos tomando decisiones juntos dentro de un sistema complejo. La IA multiplica la velocidad a la que se escribe código — no multiplica qué tan bien una organización decide, coordina y aprende. Mete IA en cada etapa del SDLC y el cuello de botella no desaparece: se mueve — hacia el criterio, la confianza, y la forma en que los equipos realmente trabajan.',
    p2: 'Por eso abordo cada proyecto con los dos lentes que llevo toda mi carrera afilando: <strong>pensamiento sistémico</strong> y <strong>construcción de equipos de alto desempeño</strong>.',
  },
  who: {
    eyebrow: 'whoami',
    portraitLabel: '[ foto ]',
    paragraphs: [
      'Soy Aníbal Rojas. Llevo 30 años construyendo y liderando organizaciones de software: telecomunicaciones, petróleo, aviación y startups. Durante seis años fui VP de Ingeniería en Platzi, la empresa de educación en tecnología más importante de Latinoamérica, donde construí y escalé equipos de alto desempeño y ayudé a cientos de personas a crecer como ingenieros y como líderes.',
      'Después hice algo poco común para un ejecutivo: volví al código. Pasé un año entero metido hasta los codos en el desarrollo asistido por IA — sistemas de agentes, asistentes de programación, sus límites y posibilidades reales — y llegué a una conclusión incómoda: los modelos, los harnesses, los skills y los plugins evolucionan demasiado rápido para que cualquier playbook sobreviva. La única forma durable de trabajar con estas herramientas es <strong>desde primeros principios</strong>. Eso es lo que propone mi serie <em>Principios Fundamentales</em> — escrita desde la terminal, no desde el escenario de una conferencia.',
      'Esa combinación es lo que ofrezco: un ejecutivo que ha dirigido ingeniería a escala, y un practicante que sabe exactamente qué hacen estas herramientas cuando un sistema colapsa de forma no lineal intentando escalar.',
    ],
  },
  proof: {
    eyebrow: 'credenciales',
    cards: [
      {
        title: 'equipos de alto desempeño',
        text: 'Tres décadas construyendo equipos de 5 a más de 100 ingenieros en cuatro industrias y dos continentes — incluyendo 6 años como VP de Ingeniería / SVP de Tecnología en Platzi.',
      },
      {
        title: 'primeros principios',
        text: 'Un año de investigación práctica, a tiempo completo, en desarrollo asistido por IA, destilado en la serie <em>Principios Fundamentales</em> — la alucinación como feature, steering, backpressure — que leen ingenieros y líderes en toda Latinoamérica.',
      },
      {
        title: 'sistemas y personas',
        text: 'Pensamiento sistémico aplicado al trabajo de conocimiento, más formación en coaching ejecutivo y Gestalt. La adopción de tecnología es un proceso humano dentro de un sistema complejo; trabajo en ambos a la vez.',
      },
      {
        title: 'la conversación pública',
        text: 'Co-conduzco <a href="https://ocorres.com" target="_blank" rel="noopener"><em>O corres o te encaramas</em></a> con Freddy Montes — un podcast sobre el impacto de la IA en la Ingeniería de Software. El nombre lo dice todo: cuando las cosas van así de rápido, o corres o te encaramas.',
      },
    ],
  },
  services: {
    eyebrow: 'servicios',
    items: [
      {
        num: '01',
        title: 'Diagnóstico',
        text: 'Una evaluación de alcance y precio fijos (2–4 semanas) de la preparación de tu organización de ingeniería para la IA, a lo largo de todo el SDLC: herramientas, flujos de trabajo, habilidades, incentivos, dinámica de equipos y riesgos. Recibes un informe sin adornos y una hoja de ruta priorizada — trabajemos juntos después o no.',
      },
      {
        num: '02',
        title: 'Advisory y VP de Ingeniería Fraccional',
        text: 'Liderazgo continuo y embebido, con retainer mensual. Trabajo con tu CTO, tus líderes y tus equipos para convertir la hoja de ruta en práctica real: estrategia de adopción, procesos de ingeniería, estructura de equipos, y las conversaciones honestas que hay en el medio.',
      },
      {
        num: '03',
        title: 'Coaching ejecutivo',
        text: 'Trabajo uno a uno con CTOs, VPs y Directores navegando esta transición — o la suya propia. Procesos de 3 a 6 meses. Con el respaldo de tres décadas de experiencia operativa y formación formal en coaching y práctica gestáltica.',
      },
    ],
    after: '¿No sabes cuál encaja? Empecemos por una conversación.',
  },
  ideas: {
    eyebrow: 'ideas',
    intro: 'Escribo con frecuencia sobre desarrollo asistido por IA, liderazgo de ingeniería, pensamiento sistémico, y la desordenada realidad humana entre ellos.',
    writing: {
      tag: 'escritura',
      // TODO(session-4): enlazar a /es/principios/ cuando exista
      title: 'Principios Fundamentales para trabajar con asistentes de programación',
    },
    podcast: {
      tag: 'podcast',
      title: 'O corres o te encaramas',
      href: 'https://ocorres.com',
    },
  },
  bottleneck: {
    ariaLabel:
      'Simulación del pipeline de entrega: los ítems de trabajo fluyen de izquierda a derecha por ideas, código, revisión, integración y producción. Las colas ámbar muestran dónde está limitado el sistema.',
    control: 'velocidad ia:',
    controlAria: 'Velocidad de IA',
    stages: ['ideas', 'código', 'revisión', 'integración', 'producción'],
    captions: {
      '2019': 'cuello de botella: código',
      '2024': 'cuello de botella: revisión de código',
      now: 'cuello de botella: criterio y coordinación',
    },
  },
  footer: {
    eyebrow: 'contacto',
    title: '¿Listo para hablar de tu equipo?',
    colophon: 'construido desde la terminal',
  },
};

export const ui = { en, es } as const;
export type Dict = typeof en;
