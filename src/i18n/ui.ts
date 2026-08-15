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
        href: '/services/diagnostic/',
        text: "A fixed-scope, fixed-fee assessment (2–4 weeks) of your engineering organization's AI readiness across the SDLC: tools, workflows, skills, incentives, team dynamics, and risks. You get a clear-eyed report and a prioritized roadmap — whether or not we ever work together again.",
      },
      {
        num: '02',
        title: 'Advisory & Fractional VP of Engineering',
        href: '/services/fractional/',
        text: 'Ongoing, embedded leadership on a monthly retainer. I work with your CTO, your leaders, and your teams to turn the roadmap into working practice: adoption strategy, engineering processes, team structure, and the honest conversations in between.',
      },
      {
        num: '03',
        title: 'Executive coaching',
        href: '/services/coaching/',
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
      title: 'Fundamental Principles for working with coding assistants',
      href: '/principles/',
    },
    podcast: {
      tag: 'podcast',
      title: 'O corres o te encaramas',
      href: 'https://ocorres.com',
    },
  },
  /* ------------------------------------------------------------------
     Service pages (session 4) — drafts pending Aníbal's sign-off.
     Homepage blurbs expanded ~3×, dry-confidence register.
     ------------------------------------------------------------------ */
  servicePages: {
    whoFor: 'Who this is for',
    howItRuns: 'How it runs',
    whatYouGet: 'What you get',
    diagnostic: {
      slug: 'diagnostic',
      eyebrow: 'services/diagnostic',
      meta: {
        title: 'AI Readiness Diagnostic — Aníbal Rojas',
        description:
          "A fixed-scope, fixed-fee assessment (2–4 weeks) of your engineering organization's AI readiness across the SDLC — a clear-eyed report and a prioritized roadmap.",
      },
      headline:
        'Find out where AI actually pays off in your organization — before you commit budget, roadmap, or credibility.',
      lede: "A fixed-scope, fixed-fee assessment (2–4 weeks) of your engineering organization's AI readiness across the whole SDLC. No vendor pitch, no tool survey — an outside pair of eyes that has run engineering at scale.",
      whoFor: [
        'CEOs and CTOs who must commit to an AI strategy this quarter and want evidence instead of demos.',
        'VPs and Directors watching pilots multiply while nothing changes in how teams actually work.',
        'Organizations that bought the licenses and are quietly wondering where the returns are.',
      ],
      steps: [
        {
          name: 'Listen',
          text: 'Structured conversations with leadership and with the engineers doing the work. The two versions rarely match; the gap is data.',
        },
        {
          name: 'Observe',
          text: 'Your actual SDLC under AI: tools in use, workflows as they are — not as diagrammed — code in review, incentives in play.',
        },
        {
          name: 'Report',
          text: 'A clear-eyed written assessment and a prioritized roadmap, presented to leadership. Yours to keep, whoever executes it.',
        },
      ],
      deliverables: [
        'A written report: AI readiness across tools, workflows, skills, incentives, team dynamics, and risks.',
        'A prioritized roadmap: what to do first, what to stop doing, what to ignore.',
        'A readout session with your leadership team — the honest version, in plain language.',
        'Fixed scope, fixed fee, 2–4 weeks. Whether or not we ever work together again.',
      ],
      ctaSubject: 'Diagnostic',
    },
    fractional: {
      slug: 'fractional',
      eyebrow: 'services/fractional',
      meta: {
        title: 'Advisory & Fractional VP of Engineering — Aníbal Rojas',
        description:
          'Ongoing, embedded engineering leadership on a monthly retainer — AI adoption strategy, engineering processes, team structure, and the honest conversations in between.',
      },
      headline:
        'Senior engineering leadership, embedded part-time — until the new way of working sticks.',
      lede: 'Ongoing, embedded leadership on a monthly retainer. I work with your CTO, your leaders, and your teams to turn the AI-adoption roadmap into working practice: strategy, processes, team structure, and the honest conversations in between.',
      whoFor: [
        'Organizations with a diagnostic or a roadmap in hand that need someone accountable for making it real.',
        'CTOs who want a peer in the room — someone who has run engineering at scale and can say the hard thing kindly.',
        'Teams adopting AI-assisted development without breaking their delivery cadence or their culture.',
      ],
      steps: [
        {
          name: 'Plan',
          text: 'We turn the roadmap into a sequence of small, reversible moves with owners and dates. Strategy you can operate.',
        },
        {
          name: 'Embed',
          text: 'I work inside your cadence: staff meetings, 1:1s with your leaders, design reviews, the corridor conversations.',
        },
        {
          name: 'Fade',
          text: "The engagement succeeds when I'm unnecessary. The practice gets built into your leaders, and I step back.",
        },
      ],
      deliverables: [
        'Adoption strategy, owned and sequenced — not a deck.',
        'Engineering process design for AI-assisted work: review, quality gates, the new backpressure.',
        'Regular 1:1s with your engineering leaders — the multiplier layer.',
        'Team structure and hiring support as roles shift.',
        'Monthly retainer. Embedded, but fractionally priced.',
      ],
      ctaSubject: 'Advisory / fractional VP',
    },
    coaching: {
      slug: 'coaching',
      eyebrow: 'services/coaching',
      meta: {
        title: 'Executive Coaching — Aníbal Rojas',
        description:
          'One-on-one coaching for CTOs, VPs, and Directors navigating the AI transition — or their own. 3–6 month engagements.',
      },
      headline: 'One-on-one work with someone who has sat in your chair.',
      lede: 'Executive coaching for CTOs, VPs, and Directors navigating the AI transition — or their own. Three-to-six-month engagements grounded in three decades of operating experience and formal training in coaching and Gestalt practice.',
      whoFor: [
        'Technology leaders whose organization just changed shape under them — new scope, new expectations, new tools.',
        'CTOs and VPs who need a confidential thinking partner, not another report.',
        'Engineers-turned-executives building their leadership practice deliberately.',
      ],
      steps: [
        {
          name: 'Contract',
          text: 'We define what success looks like, in your words, with your constraints. Coaching without a contract is just conversation.',
        },
        {
          name: 'Practice',
          text: "Regular sessions working on what's live for you: decisions, conversations, the system around you. Between sessions, you practice.",
        },
        {
          name: 'Autonomy',
          text: "The goal is a leader who doesn't need me. We review against the contract and close deliberately.",
        },
      ],
      deliverables: [
        'A confidential one-on-one space with a trained coach who has operated at your level.',
        'Three decades of pattern recognition across telecom, oil & gas, aviation, and startups.',
        'Gestalt-grounded practice: awareness before technique.',
        '3–6 month engagements, scoped together.',
      ],
      ctaSubject: 'Coaching',
    },
  },
  ideasPage: {
    meta: {
      title: 'Ideas — Aníbal Rojas',
      description:
        'Writing on AI-assisted development, engineering leadership, systems thinking, and the messy human reality between them.',
    },
    eyebrow: 'ideas',
    heading: 'Ideas',
    minuteRead: 'min read',
    archive: 'archive → i.usedtocode.com',
    archiveHref: 'https://i.usedtocode.com',
  },
  post: {
    minuteRead: 'min read',
    alsoIn: 'también en español',
    originally: 'Originally published at',
  },
  principles: {
    meta: {
      title: 'Fundamental Principles — Aníbal Rojas',
      description:
        'Five articles on the fundamental principles of AI-assisted development — hallucination as a feature, the math of value, systems, steering, backpressure.',
    },
    eyebrow: 'principles',
    heading: 'Fundamental Principles for working with coding assistants',
    intro:
      'Playbooks expire with every model release; principles don’t. This is a five-article series for software developers who are skeptical, disappointed, or frustrated by generative AI — and for the leaders and managers exploring what these tools do to their teams and their processes. It starts from the one fact that won’t change — hallucination is the mechanism, not the bug — and builds the two practices that follow from it: steering and backpressure.',
    note: 'the series is written in spanish — five articles, 2025',
    articles: [
      {
        num: '01',
        title: 'La Alucinación es el Feature Fundamental de los LLMs',
        summary:
          'Hallucination is not a bug of LLMs; it is the mechanism. The only question that matters is whether each hallucination adds value or subtracts it.',
        href: 'https://i.usedtocode.com/2025/10/20/la-alucinacion-es-el-feature-fundamental-de-los-llms',
      },
      {
        num: '02',
        title: 'Las matemáticas del Código Asistido por IA',
        summary:
          'A working arithmetic of AI-assisted code: value equals your codebase plus the positive hallucinations, minus the negative ones, minus the cost of detecting them.',
        href: 'https://i.usedtocode.com/2025/10/28/las-matematicas-del-codigo-asistido-por-ia',
      },
      {
        num: '03',
        title: 'Una Visión de Sistemas para la Programación Asistida por IA',
        summary:
          'The assistant as a system — environment, user, model, tools, context. Your prompt is a small part of the context; the rest is yours to design.',
        href: 'https://i.usedtocode.com/2025/11/03/una-vision-de-sistemas-para-la-programacion-asistida-por-ia',
      },
      {
        num: '04',
        title: 'Steering - Favoreciendo las Alucinaciones Positivas en los Asistentes de Programación',
        summary:
          'The craft of curating instructions, examples, and artifacts so the model’s output converges on good software — and why steering itself has a non-trivial cost.',
        href: 'https://i.usedtocode.com/2025/11/06/steering-favoreciendo-las-alucinaciones-positivas',
      },
      {
        num: '05',
        title: 'Backpressure - Rechazando las Alucinaciones Negativas en los Asistentes de Programación',
        summary:
          'The verification loop — deterministic checks first, structured verification prompts second — that lets the system reject its own negative hallucinations.',
        href: 'https://i.usedtocode.com/2025/11/26/backpressure-rechazando-las-alucinaciones-negativas',
      },
    ],
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
        href: '/es/servicios/diagnostico/',
        text: 'Una evaluación de alcance y precio fijos (2–4 semanas) de la preparación de tu organización de ingeniería para la IA, a lo largo de todo el SDLC: herramientas, flujos de trabajo, habilidades, incentivos, dinámica de equipos y riesgos. Recibes un informe sin adornos y una hoja de ruta priorizada — trabajemos juntos después o no.',
      },
      {
        num: '02',
        title: 'Advisory y VP de Ingeniería Fraccional',
        href: '/es/servicios/fractional/',
        text: 'Liderazgo continuo y embebido, con retainer mensual. Trabajo con tu CTO, tus líderes y tus equipos para convertir la hoja de ruta en práctica real: estrategia de adopción, procesos de ingeniería, estructura de equipos, y las conversaciones honestas que hay en el medio.',
      },
      {
        num: '03',
        title: 'Coaching ejecutivo',
        href: '/es/servicios/coaching/',
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
      title: 'Principios Fundamentales para trabajar con asistentes de programación',
      href: '/es/principios/',
    },
    podcast: {
      tag: 'podcast',
      title: 'O corres o te encaramas',
      href: 'https://ocorres.com',
    },
  },
  /* ------------------------------------------------------------------
     Páginas de servicios (sesión 4) — borradores pendientes de la
     aprobación de Aníbal. Escritos para el idioma más largo.
     ------------------------------------------------------------------ */
  servicePages: {
    whoFor: 'Para quién es',
    howItRuns: 'Cómo funciona',
    whatYouGet: 'Lo que recibes',
    diagnostic: {
      slug: 'diagnostico',
      eyebrow: 'servicios/diagnostico',
      meta: {
        title: 'Diagnóstico de Preparación para IA — Aníbal Rojas',
        description:
          'Una evaluación de alcance y precio fijos (2–4 semanas) de la preparación de tu organización de ingeniería para la IA, a lo largo de todo el SDLC — un informe sin adornos y una hoja de ruta priorizada.',
      },
      headline:
        'Descubre dónde rinde de verdad la IA en tu organización — antes de comprometer presupuesto, hoja de ruta o credibilidad.',
      lede: 'Una evaluación de alcance y precio fijos (2–4 semanas) de la preparación de tu organización de ingeniería para la IA, a lo largo de todo el SDLC. Sin pitch de vendors ni encuesta de herramientas — un par de ojos externos que ya dirigieron ingeniería a escala.',
      whoFor: [
        'CEOs y CTOs que deben comprometerse con una estrategia de IA este trimestre y quieren evidencia en lugar de demos.',
        'VPs y Directores que ven multiplicarse los pilotos mientras nada cambia en la forma real de trabajar de los equipos.',
        'Organizaciones que compraron las licencias y se preguntan en silencio dónde están los resultados.',
      ],
      steps: [
        {
          name: 'Escuchar',
          text: 'Conversaciones estructuradas con el liderazgo y con los ingenieros que hacen el trabajo. Las dos versiones rara vez coinciden; esa brecha es información.',
        },
        {
          name: 'Observar',
          text: 'Tu SDLC real bajo IA: herramientas en uso, flujos como son — no como están diagramados — código en revisión, incentivos en juego.',
        },
        {
          name: 'Reportar',
          text: 'Un informe escrito, sin adornos, y una hoja de ruta priorizada, presentados al liderazgo. Tuyos, los ejecute quien los ejecute.',
        },
      ],
      deliverables: [
        'Un informe escrito: preparación para IA en herramientas, flujos de trabajo, habilidades, incentivos, dinámica de equipos y riesgos.',
        'Una hoja de ruta priorizada: qué hacer primero, qué dejar de hacer, qué ignorar.',
        'Una sesión de lectura con tu equipo directivo — la versión honesta, en lenguaje claro.',
        'Alcance fijo, precio fijo, 2–4 semanas. Trabajemos juntos después o no.',
      ],
      ctaSubject: 'Diagnóstico',
    },
    fractional: {
      slug: 'fractional',
      eyebrow: 'servicios/fractional',
      meta: {
        title: 'Advisory y VP de Ingeniería Fraccional — Aníbal Rojas',
        description:
          'Liderazgo de ingeniería continuo y embebido, con retainer mensual — estrategia de adopción de IA, procesos de ingeniería, estructura de equipos, y las conversaciones honestas que hay en el medio.',
      },
      headline:
        'Liderazgo senior de ingeniería, embebido a tiempo parcial — hasta que la nueva forma de trabajar se sostenga sola.',
      lede: 'Liderazgo continuo y embebido, con retainer mensual. Trabajo con tu CTO, tus líderes y tus equipos para convertir la hoja de ruta de adopción de IA en práctica real: estrategia, procesos, estructura de equipos, y las conversaciones honestas que hay en el medio.',
      whoFor: [
        'Organizaciones con un diagnóstico o una hoja de ruta en la mano que necesitan a alguien responsable de hacerla realidad.',
        'CTOs que quieren un par en la sala — alguien que ya dirigió ingeniería a escala y sabe decir lo difícil con amabilidad.',
        'Equipos adoptando el desarrollo asistido por IA sin romper su cadencia de entrega ni su cultura.',
      ],
      steps: [
        {
          name: 'Planear',
          text: 'Convertimos la hoja de ruta en una secuencia de movimientos pequeños y reversibles, con responsables y fechas. Estrategia que se puede operar.',
        },
        {
          name: 'Embeber',
          text: 'Trabajo dentro de tu cadencia: staff meetings, 1:1s con tus líderes, revisiones de diseño, las conversaciones de pasillo.',
        },
        {
          name: 'Retirarme',
          text: 'El trabajo tiene éxito cuando dejo de ser necesario. La práctica queda instalada en tus líderes y yo me hago a un lado.',
        },
      ],
      deliverables: [
        'Estrategia de adopción con dueño y secuencia — no una presentación.',
        'Diseño de procesos de ingeniería para el trabajo asistido por IA: revisión, quality gates, el nuevo backpressure.',
        '1:1s regulares con tus líderes de ingeniería — la capa multiplicadora.',
        'Acompañamiento en estructura de equipos y contratación a medida que los roles cambian.',
        'Retainer mensual. Embebido, a precio fraccional.',
      ],
      ctaSubject: 'Advisory / VP fraccional',
    },
    coaching: {
      slug: 'coaching',
      eyebrow: 'servicios/coaching',
      meta: {
        title: 'Coaching Ejecutivo — Aníbal Rojas',
        description:
          'Coaching uno a uno para CTOs, VPs y Directores que navegan la transición de la IA — o la suya propia. Procesos de 3 a 6 meses.',
      },
      headline: 'Trabajo uno a uno con alguien que ya estuvo sentado en tu silla.',
      lede: 'Coaching ejecutivo para CTOs, VPs y Directores que navegan la transición de la IA — o la suya propia. Procesos de 3 a 6 meses, con el respaldo de tres décadas de experiencia operativa y formación formal en coaching y práctica gestáltica.',
      whoFor: [
        'Líderes de tecnología cuya organización acaba de cambiarles de forma: nuevo alcance, nuevas expectativas, nuevas herramientas.',
        'CTOs y VPs que necesitan un par confidencial para pensar, no otro informe.',
        'Ingenieros convertidos en ejecutivos que construyen su práctica de liderazgo deliberadamente.',
      ],
      steps: [
        {
          name: 'Contrato',
          text: 'Definimos cómo se ve el éxito, en tus palabras y con tus restricciones. Coaching sin contrato es solo conversación.',
        },
        {
          name: 'Práctica',
          text: 'Sesiones regulares trabajando sobre lo que está vivo para ti: decisiones, conversaciones, el sistema a tu alrededor. Entre sesiones, practicas.',
        },
        {
          name: 'Autonomía',
          text: 'La meta es un líder que no me necesita. Revisamos contra el contrato y cerramos deliberadamente.',
        },
      ],
      deliverables: [
        'Un espacio confidencial, uno a uno, con un coach formado que ha operado a tu nivel.',
        'Tres décadas de reconocimiento de patrones en telecomunicaciones, petróleo, aviación y startups.',
        'Práctica con base gestáltica: conciencia antes que técnica.',
        'Procesos de 3 a 6 meses, delimitados juntos.',
      ],
      ctaSubject: 'Coaching',
    },
  },
  ideasPage: {
    meta: {
      title: 'Ideas — Aníbal Rojas',
      description:
        'Escritos sobre desarrollo asistido por IA, liderazgo de ingeniería, pensamiento sistémico, y la desordenada realidad humana entre ellos.',
    },
    eyebrow: 'ideas',
    heading: 'Ideas',
    minuteRead: 'min de lectura',
    archive: 'archivo → i.usedtocode.com',
    archiveHref: 'https://i.usedtocode.com',
  },
  post: {
    minuteRead: 'min de lectura',
    alsoIn: 'also in english',
    originally: 'Publicado originalmente en',
  },
  principles: {
    meta: {
      title: 'Principios Fundamentales — Aníbal Rojas',
      description:
        'Cinco artículos sobre los principios fundamentales del desarrollo asistido por IA — la alucinación como feature, las matemáticas del valor, sistemas, steering, backpressure.',
    },
    eyebrow: 'principios',
    heading: 'Principios Fundamentales para trabajar con Asistentes de Programación',
    intro:
      'Los playbooks caducan con cada modelo nuevo; los principios no. Esta es una serie de cinco artículos para desarrolladores de software escépticos, decepcionados o frustrados por la IA Generativa; y para los líderes y managers que exploran el impacto de estas tecnologías en sus equipos y procesos. Parte del único hecho que no va a cambiar — la alucinación es el mecanismo, no el defecto — y construye las dos prácticas que se derivan de él: steering y backpressure.',
    note: 'cinco artículos, publicados primero en i.usedtocode.com — 2025',
    articles: [
      {
        num: '01',
        title: 'La Alucinación es el Feature Fundamental de los LLMs',
        summary:
          'La alucinación no es un defecto de los LLMs: es el mecanismo. La única pregunta que importa es si cada alucinación agrega valor o lo resta.',
        href: 'https://i.usedtocode.com/2025/10/20/la-alucinacion-es-el-feature-fundamental-de-los-llms',
      },
      {
        num: '02',
        title: 'Las matemáticas del Código Asistido por IA',
        summary:
          'Una aritmética de trabajo del código asistido: el valor es tu codebase más las alucinaciones positivas, menos las negativas, menos el costo de detectarlas.',
        href: 'https://i.usedtocode.com/2025/10/28/las-matematicas-del-codigo-asistido-por-ia',
      },
      {
        num: '03',
        title: 'Una Visión de Sistemas para la Programación Asistida por IA',
        summary:
          'El asistente como sistema — entorno, usuario, modelo, herramientas, contexto. Tu prompt es una parte pequeña del contexto; el resto también se diseña.',
        href: 'https://i.usedtocode.com/2025/11/03/una-vision-de-sistemas-para-la-programacion-asistida-por-ia',
      },
      {
        num: '04',
        title: 'Steering - Favoreciendo las Alucinaciones Positivas en los Asistentes de Programación',
        summary:
          'El oficio de curar instrucciones, ejemplos y artefactos para que la salida del modelo converja hacia buen software — y por qué el steering mismo tiene un costo no trivial.',
        href: 'https://i.usedtocode.com/2025/11/06/steering-favoreciendo-las-alucinaciones-positivas',
      },
      {
        num: '05',
        title: 'Backpressure - Rechazando las Alucinaciones Negativas en los Asistentes de Programación',
        summary:
          'El ciclo de verificación — primero mecanismos determinísticos, luego prompts de verificación estructurados — para que el sistema rechace sus propias alucinaciones negativas.',
        href: 'https://i.usedtocode.com/2025/11/26/backpressure-rechazando-las-alucinaciones-negativas',
      },
    ],
  },
  footer: {
    eyebrow: 'contacto',
    title: '¿Listo para hablar de tu equipo?',
    colophon: 'construido desde la terminal',
  },
};

export const ui = { en, es } as const;
export type Dict = typeof en;
