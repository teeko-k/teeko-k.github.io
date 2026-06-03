// ─────────────────────────────────────────────────────────────────────────────
// projects.js  — single source of truth for all case studies
// ─────────────────────────────────────────────────────────────────────────────
// Each project is used in:
//   • Work.js          → landing-page cards
//   • /work/[slug]     → full case-study page
// ─────────────────────────────────────────────────────────────────────────────

export const projects = [
  // EA Frostbite case study is intentionally detailed to serve as a template for future entries. Replace the placeholder text and images with your actual project content, and follow the same structure for new projects you add.
  {
    // ── identifiers ──────────────────────────────────────────────────────────
    slug: 'ea-frostbite',
    index: '01',

    // ── card (landing) ───────────────────────────────────────────────────────
    title: 'EA - Frostbite Engine',
    subtitle: 'Developer tooling for AAA game development',
    year: '2021 - 2025',
    tags: ['UX Design', 'Design Systems', 'Research'],
    // A 16:9 or 3:2 hero image. Replace with your actual project image.
    thumbnail: '/Work/EA.png',
    // accent used for the card hover line + case-study page accent
    accent: '#251bf3',
    // 'wide' cards span 2 columns on desktop; 'tall' span 2 rows
    size: 'wide',

    // ── case study page ──────────────────────────────────────────────────────
    client: 'Electronic Arts',
    role: 'Senior UX Designer',
    duration: '4 years',
    tools: ['Figma', 'Dovetail', 'Miro', 'Prototyping', 'Journey Mapping'],
    overview:
      "At EA, I worked for four years on Frostbite - the company's proprietary game engine powering AAA titles including FIFA 23, FC 24, and the Dead Space remake. My role focused entirely on developer-facing tooling: cinematics editors, AI behaviour trees, and physics debug panels used daily by engineers and technical artists across multiple studios.",
    challenge:
      'The tools were extraordinarily powerful, but each had been built in isolation over a decade. Workflows were inconsistent across modules, onboarding new developers took weeks, and there was no shared design language connecting the hundreds of individual panels and editors. Expert users resisted simplification; they needed power, not hand-holding.',
    approach: [
      {
        step: 'Discovery',
        detail:
          'Ran structured research sessions with developers across three studios — Melbourne, Stockholm, and LA. Used contextual inquiry and diary studies to map actual workflows rather than stated ones.',
      },
      {
        step: 'Heuristic audit',
        detail:
          "Catalogued 200+ UI patterns across Frostbite's tools, identifying the 40 that caused the most friction. Prioritised by frequency × severity × fix cost.",
      },
      {
        step: 'Design system',
        detail:
          "Built Frostbite's first cross-tool component library in Figma, covering tokens, layout grids, and interaction patterns. Contributed the spec to the engineering component library.",
      },
      {
        step: 'Validation',
        detail:
          'Ran usability testing with developers using prototype builds. Iterated on 6 core workflows across two rounds before shipping.',
      },
    ],
    outcome:
      'This work dramatically decreased the onboarding friction for new developers and increased the efficiency of critical workflows. But it wasn’t just about features; it helped establish UX as a true strategic partner in the development pipeline of Frostbite. Moving design from a finishing step to an integral part of how tools get built.',
    // Add as many images as you like. caption is optional.
    images: [
      {
        src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&auto=format&fit=crop',
        caption: 'Cinematics editor — before / after workflow consolidation',
      },
      {
        src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&auto=format&fit=crop',
        caption: 'Component library — core token architecture',
      },
    ],
  },

  // Officeworks Track & Trace case study is a more concise example. Follow the same structure for new projects, adjusting the level of detail as needed.
  {
    slug: 'officeworks-track-trace',
    index: '02',
    title: 'Officeworks - Track & Trace',
    subtitle: 'End-to-end parcel visibility for customers & ops',
    year: '2021',
    tags: ['UX Design', 'Mobile', 'Service Design'],
    thumbnail:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&auto=format&fit=crop',
    accent: '#c9a96e',
    size: 'normal',

    client: 'Officeworks',
    role: 'UX Designer',
    duration: '6 months',
    tools: ['Figma', 'UserTesting', 'Miro', 'Zeplin'],
    overview:
      'Officeworks needed a unified parcel tracking experience spanning their web, app, and in-store channels. Customers had no real-time visibility into deliveries, leading to a high volume of "where is my order" contacts hitting the support team.',
    challenge:
      'Multiple carriers, inconsistent tracking data formats, and a legacy order management system made a clean front-end experience technically constrained. The solution had to work across all carriers without waiting for backend unification.',
    approach: [
      {
        step: 'Research',
        detail:
          'Interviewed 20 customers and 8 support agents to map the full "WISMO" journey. Identified the 3 moments of highest anxiety: post-purchase silence, unexpected delays, and missed deliveries.',
      },
      {
        step: 'Service blueprint',
        detail:
          'Mapped front-stage interactions against back-stage systems to identify where data gaps lived and what could be surfaced immediately vs. required engineering work.',
      },
      {
        step: 'Interaction design',
        detail:
          'Designed a progressive tracking timeline that degrades gracefully when carrier data is incomplete — showing estimated windows rather than blank states.',
      },
    ],
    outcome:
      'WISMO contact rate dropped 22% in the three months post-launch. Customer satisfaction scores for delivery experience increased by 14 points.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format&fit=crop',
        caption: 'Mobile tracking timeline — progressive disclosure pattern',
      },
    ],
  },

  // Intravel Mobile App case study is intentionally brief to show how you can adjust the level of detail based on the project. Follow the same structure for new projects, but feel free to expand or condense sections as appropriate for the story you want to tell.
  {
    slug: 'intravel-mobile-app',
    index: '03',
    title: 'Intravel Flight Booking - Mobile App',
    subtitle: 'Travel planning reimagined for solo adventurers',
    year: '2020',
    tags: ['Product Design', 'Mobile', 'Interaction Design'],
    thumbnail: '/Work/intravel01.jpg',
    accent: '#c9a96e',
    size: 'normal',

    client: 'Intravel Group',
    role: 'UX/UI Designer',
    duration: '2 months',
    tools: ['Adobe XD', 'Figma', 'Notion'],
    overview:
      'Intravel is a mobile-first travel planning app designed for independent travellers who want to build itineraries collaboratively, discover local experiences, and manage bookings in one place — without the rigidity of packaged tours.',
    challenge:
      "The market is crowded with generic itinerary tools. Intravel needed a product that felt like a local friend rather than a travel agent — opinionated, contextual, and genuinely useful when you're already on the ground.",
    approach: [
      {
        step: 'Persona development',
        detail:
          'Defined three core traveller archetypes through diary studies and interviews: the Solo Planner, the Group Coordinator, and the Spontaneous Explorer. Each needed a different entry point.',
      },
      {
        step: 'Prototype & test',
        detail:
          'Built 3 divergent prototypes exploring different IA models. Ran moderated testing with 15 participants across two rounds to narrow down the winning direction.',
      },
      {
        step: 'Visual design',
        detail:
          'Designed a warm, editorial visual language with a card-based layout that surfaces context (weather, local events, transport) alongside itinerary steps.',
      },
    ],
    outcome:
      'Delivered a production-ready design system and prototype to the engineering team. App launched on iOS with a 4.6 App Store rating in its first month.',
    images: [
      {
        src: '/Work/intravel02.png',
        caption:
          'Itinerary builder — card-first layout with contextual overlays',
      },
      {
        src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&auto=format&fit=crop',
        caption:
          'Itinerary builder — card-first layout with contextual overlays',
      },
    ],
  },

  {
    slug: 'officeworks-mailman',
    index: '03',
    title: 'Officeworks — Mailman',
    subtitle: 'Internal logistics communications platform',
    year: '2021',
    tags: ['Product Design', 'Internal Tools'],
    thumbnail:
      'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=1200&auto=format&fit=crop',
    accent: '#c9a96e',
    size: 'normal',

    client: 'Officeworks',
    role: 'UX Designer',
    duration: '4 months',
    tools: ['Figma', 'Confluence', 'Miro'],
    overview:
      'Mailman is an internal tool for Officeworks logistics coordinators to manage carrier communications, exception handling, and delivery escalations — replacing a patchwork of email chains and spreadsheets.',
    challenge:
      'Coordinators were managing 100+ exceptions per day across multiple tabs, with no shared view of status. Critical escalations were getting lost in email threads.',
    approach: [
      {
        step: 'Observation',
        detail:
          'Shadowed logistics coordinators during peak periods to understand how exceptions were triaged in practice vs. the documented process.',
      },
      {
        step: 'Information architecture',
        detail:
          'Restructured the exception queue around urgency and actionability rather than chronological order. Introduced a triage view with keyboard shortcuts for power users.',
      },
    ],
    outcome:
      'Average exception resolution time reduced by 35%. Coordinators reported significantly lower cognitive load during the AM peak window.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&auto=format&fit=crop',
        caption: 'Exception triage queue — priority-first layout',
      },
    ],
  },

  {
    slug: 'reliance-sales-kit',
    index: '05',
    title: 'Reliance™ — Interactive Sales Kit',
    subtitle: 'Pitch-ready product experience for field sales teams',
    year: '2021',
    tags: ['Interaction Design', 'Prototyping'],
    thumbnail:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop',
    accent: '#c9a96e',
    size: 'normal',

    client: 'Reliance™',
    role: 'UX/UI Designer',
    duration: '3 months',
    tools: ['Figma', 'Adobe XD', 'After Effects', 'Keynote'],
    overview:
      'Reliance needed an interactive sales tool their field reps could use on tablets during client meetings — replacing static PDFs and disconnected slide decks with a guided, interactive product experience.',
    challenge:
      'The existing sales materials were outdated the moment they were printed. Reps were improvising presentations on the fly, creating an inconsistent brand experience and losing deals on avoidable objections.',
    approach: [
      {
        step: 'Sales journey mapping',
        detail:
          'Interviewed 12 field reps and 4 sales managers to map the actual pitch flow — where clients engaged, where they dropped off, and what questions repeatedly derailed deals.',
      },
      {
        step: 'Interactive prototype',
        detail:
          'Designed a non-linear presentation tool that let reps navigate to any product area based on client interest, with animated product demos and configurable spec sheets embedded inline.',
      },
    ],
    outcome:
      'Deployed to 60 field reps. Sales management reported a measurable improvement in pitch consistency and a reduction in deal cycle length for mid-market accounts.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop',
        caption: 'Product configurator — embedded inline in the pitch flow',
      },
    ],
  },
]

// Helper: find by slug
export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}

// Helper: all slugs (for generateStaticParams)
export function getAllSlugs() {
  return projects.map((p) => ({ slug: p.slug }))
}
