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
    slug: "ea-frostbite",
    index: "01",

    // ── card (landing) ───────────────────────────────────────────────────────
    title: "Frostbite Engine",
    subtitle: "Developer tooling for AAA game development",
    year: "2021 - 2025",
    tags: ["UX Design", "Design Systems", "Research"],
    // A 16:9 or 3:2 hero image. Replace with your actual project image.
    thumbnail: "/Work/EA/EA-cover.png",
    // accent used for the card hover line + case-study page accent
    accent: "#251bf3",
    // 'wide' cards span 2 columns on desktop; 'tall' span 2 rows
    size: "wide",

    // ── case study page ──────────────────────────────────────────────────────
    client: "Electronic Arts",
    role: "Senior UX Designer",
    duration: "4 years",
    tools: [
      "Figma",
      "Dovetail",
      "Miro",
      "Prototyping",
      "Journey Mapping",
      "Design Systems",
      "Usability Testing",
    ],
    overview:
      "At EA, I worked for four years on Frostbite - the company's proprietary game engine powering AAA titles including FIFA 23, FC 24, and the Dead Space remake. My role focused entirely on developer-facing tooling: cinematics editors, AI behaviour trees, and physics debug panels used daily by engineers and technical artists across multiple studios.",
    challenge:
      "The tools were extraordinarily powerful, but each had been built in isolation over a decade. Workflows were inconsistent across modules, onboarding new developers took weeks, and there was no shared design language connecting the hundreds of individual panels and editors. Expert users resisted simplification; they needed power, not hand-holding.",
    approach: [
      {
        step: "Discovery",
        detail:
          "Ran structured research sessions with developers across three studios — Melbourne, Stockholm, and LA. Used contextual inquiry and diary studies to map actual workflows rather than stated ones.",
      },
      {
        step: "Heuristic audit",
        detail:
          "Catalogued 200+ UI patterns across Frostbite's tools, identifying the 40 that caused the most friction. Prioritised by frequency × severity × fix cost.",
      },
      {
        step: "Design system",
        detail:
          "Built Frostbite's first cross-tool component library in Figma, covering tokens, layout grids, and interaction patterns. Contributed the spec to the engineering component library.",
      },
      {
        step: "Validation",
        detail:
          "Ran usability testing with developers using prototype builds. Iterated on 6 core workflows across two rounds before shipping.",
      },
    ],
    outcome:
      "This work dramatically decreased the onboarding friction for new developers and increased the efficiency of critical workflows. But it wasn’t just about features; it helped establish UX as a true strategic partner in the development pipeline of Frostbite. Moving design from a finishing step to an integral part of how tools get built.",
    // Add as many images as you like. caption is optional.
    images: [
      {
        src: "/Work/EA/Workshop.jpg",
        caption:
          "Workshop — aligning global stakeholders on research insights and priorities",
      },
      {
        src: "/Work/EA/Editor.png",
        caption: "Editor UI - modal redesign with new component library",
      },
      {
        src: "/Work/EA/Timelines.png",
        caption:
          "Cinematics timeline - Mono and split view modes for different user needs",
      },
    ],
  },

  // Intravel Mobile App case study is intentionally brief to show how you can adjust the level of detail based on the project. Follow the same structure for new projects, but feel free to expand or condense sections as appropriate for the story you want to tell.
  {
    slug: "intravel-mobile-app",
    index: "03",
    title: "Travel Planning App",
    subtitle: "Mobile App design",
    year: "2019",
    tags: ["Product Design", "Mobile", "Interaction Design"],
    thumbnail: "/Work/Intravel/Intravel-cover.png",
    accent: "#f8991d",
    size: "normal",

    client: "Intravel Group",
    role: "UX/UI Designer",
    duration: "2 months",
    tools: ["Adobe XD", "Figma", "Miro", "Invision", "Adobe Illustrator"],
    overview:
      "Intravel is a mobile-first travel planning app designed for independent travellers who want to build itineraries collaboratively, discover local experiences, and manage bookings in one place — without the rigidity of packaged tours.",
    challenge:
      "The market is crowded with generic itinerary tools. Intravel needed a product that felt like a local friend rather than a travel agent — opinionated, contextual, and genuinely useful when you're already on the ground.",
    approach: [
      {
        step: "Persona development",
        detail:
          "Defined three core traveller archetypes through diary studies and interviews: the Solo Planner, the Group Coordinator, and the Spontaneous Explorer. Each needed a different entry point.",
      },
      {
        step: "Prototype & test",
        detail:
          "Built 3 divergent prototypes exploring different IA models. Ran moderated testing with 15 participants across two rounds to narrow down the winning direction.",
      },
      {
        step: "Visual design",
        detail:
          "Designed a warm, editorial visual language with a card-based layout that surfaces context (weather, local events, transport) alongside itinerary steps.",
      },
    ],
    outcome:
      "Delivered a production-ready design system and prototype to the engineering team. App launched on iOS with a 4.6 App Store rating in its first month.",
    images: [
      {
        src: "/Work/Intravel/Wireframes.png",
        caption:
          "Itinerary builder — card-first layout with contextual overlays",
      },
      {
        src: "/Work/Intravel/PlanWalkthrough01.png",
        caption:
          "Itinerary builder — card-first layout with contextual overlays",
      },
      {
        src: "/Work/Intravel/PlanWalkthrough02.png",
        caption:
          "Itinerary builder — card-first layout with contextual overlays",
      },
    ],
  },

  // Officeworks Track & Trace case study is a more concise example. Follow the same structure for new projects, adjusting the level of detail as needed.
  {
    slug: "officeworks-track-trace",
    index: "02",
    title: "Officeworks Track & Trace",
    subtitle: "End-to-end parcel visibility for customers & ops",
    year: "2018 - 2019",
    tags: ["UX Design", "Mobile", "Service Design"],
    thumbnail: "/Work/TrackTrace/TrackTrace-cover.png",
    accent: "#008f66",
    size: "normal",

    client: "Officeworks",
    role: "UX Designer",
    duration: "6 months",
    tools: ["Adobe XD", "Axure RP", "UserTesting", "Miro", "Zeplin"],
    overview:
      'Officeworks needed a unified parcel tracking experience spanning their web, app, and in-store channels. Customers had no real-time visibility into deliveries, leading to a high volume of "where is my order" contacts hitting the support team.',
    challenge:
      "Multiple carriers, inconsistent tracking data formats, and a legacy order management system made a clean front-end experience technically constrained. The solution had to work across all carriers without waiting for backend unification.",
    approach: [
      {
        step: "Research",
        detail:
          'Interviewed 20 customers and 8 support agents to map the full "WISMO" journey. Identified the 3 moments of highest anxiety: post-purchase silence, unexpected delays, and missed deliveries.',
      },
      {
        step: "Service blueprint",
        detail:
          "Mapped front-stage interactions against back-stage systems to identify where data gaps lived and what could be surfaced immediately vs. required engineering work.",
      },
      {
        step: "Interaction design",
        detail:
          "Designed a progressive tracking timeline that degrades gracefully when carrier data is incomplete — showing estimated windows rather than blank states.",
      },
    ],
    outcome:
      "WISMO contact rate dropped 22% in the three months post-launch. Customer satisfaction scores for delivery experience increased by 14 points.",
    images: [
      {
        src: "/Work/TrackTrace/TrackTrace-prep.png",
        caption:
          "Journey mapping — identifying key pain points across the delivery journey",
      },
      {
        src: "/Work/TrackTrace/TrackTrace-Wireframes.png",
        caption:
          "Wireframes — designing a progressive tracking timeline that degrades gracefully with incomplete data",
      },
      {
        src: "/Work/TrackTrace/TrackTrace-screens.png",
        caption:
          "Screens — implementing the progressive tracking timeline - building the design system components and interaction patterns for the final UI",
      },
    ],
  },

  // The Officeworks Mailman case study is intentionally concise to show how you can adjust the level of detail based on the project. Follow the same structure for new projects, but feel free to expand or condense sections as appropriate for the story you want to tell.
  {
    slug: "officeworks-mailman",
    index: "04",
    title: "Mailman",
    subtitle: "Parcel Delivery Service Design",
    year: "2018",
    tags: ["Product Design", "Service Design", "Interaction Design"],
    thumbnail: "/Work/Mailman/Mailman-cover.png",
    accent: "#0084ff",
    size: "normal",

    client: "Officeworks",
    role: "UX Designer",
    duration: "4 months",
    tools: [
      "Adobe Illustrator",
      "Adobe After Effects",
      "Axure RP",
      "Askable",
      "Miro",
      "Journey Mapping",
      "Heuristic Evaluation",
      "Prototyping",
      "Design Systems",
      "Agile",
    ],
    overview:
      "Mailman was a parcel delivery service offered by Officeworks, allowing customers to send parcels between capital cities directly from store. I was brought in to redesign the end-to-end experience, from how customers discovered and navigated the in-store space, to a self-serve kiosk interface that removed the need for staff assistance.",
    challenge:
      "The in-store Mailman experience had significant drop-off — customers couldn't find the space in store, and those who did were unsure how to use the service without staff help. The business needed a path toward full self-service that would scale across multiple Officeworks locations.",
    approach: [
      {
        step: "Research & discovery",
        detail:
          "Met with stakeholders across departments, visited stores to experience the service firsthand, reviewed customer feedback, and conducted user interviews to map pain points across the full journey.",
      },
      {
        step: "In-store space design",
        detail:
          "Developed store layout concepts with signage, floor markings, and zoned areas guiding customers through each step: choose your package, pack your item, pay and print label, send your parcel. Concepts were used by the business for store rollout planning.",
      },
      {
        step: "Kiosk interface",
        detail:
          "Designed a touch-screen kiosk interface that guided users through the process of booking a delivery, printing labels, and scheduling pickups. The design focused on clarity and simplicity to accommodate users of all tech comfort levels.",
      },
      {
        step: "Validation & iteration",
        detail:
          "Conducted usability testing with 20 participants across two rounds, iterating on the kiosk interface and in-store signage based on feedback and observed pain points.",
      },
    ],
    outcome:
      "'The store space concept was adopted as a planning reference for Officeworks store layouts. The kiosk UI concept established the interaction framework for Mailman's self-serve ambition. While the service was eventually discontinued for business reasons, the design work laid the groundwork for future self-service initiatives within the company.",
    images: [
      {
        src: "/Work/Mailman/mailman_store_iso.png",
        caption:
          "In-store space design — guiding customers through the Mailman journey",
      },
      {
        src: "/Work/Mailman/Mailman-storyboard.png",
        caption: "Storyboard - mapping the Kiosk interaction flow",
      },
      {
        src: "/Work/Mailman/Components.png",
        caption: "Kiosk interface — core component library",
      },
    ],
  },

  // The Reliance case study is intentionally minimal to show how you can adjust the level of detail based on the project. Follow the same structure for new projects, but feel free to expand or condense sections as appropriate for the story you want to tell.

  {
    slug: "reliance-sales-kit",
    index: "05",
    title: "Interactive Sales Kit",
    subtitle: "Pitch-ready product experience for field sales teams",
    year: "2017",
    tags: ["Interaction Design", "Prototyping"],
    thumbnail: "/Work/Reliance/Reliance-cover.png",
    accent: "#a10b2b",
    size: "normal",

    client: "Reliance™",
    role: "UX/UI Designer",
    duration: "3 months",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects"],
    overview:
      "Reliance, a Canadian home heating and cooling provider with over 50 years in business, ran their entire sales process on paper brochures, printed spec sheets, and spreadsheets. Reps were improvising during client meetings, updates couldn't keep pace with new product lines, and the experience varied wildly depending on who was presenting. Reliance needed a tablet sales app that gave reps one consistent, interactive tool to guide every client conversation.",
    challenge:
      "The brief arrived with the project already behind schedule and the requirements unclear. The existing materials were outdated the moment they were printed, and reps had built their own workarounds, creating an inconsistent brand experience and losing deals on objections that better information could have solved. As the lead designer, I ran client workshops to clarify scope, mapped the gap between the paper-based process reps actually used and the digital experience we needed to design, and worked from client-provided materials to get a usable MVP defined fast.To help reps explain complex heating and cooling systems during a pitch, I also produced custom animations in After Effects, giving the sales conversation a level of visual clarity static diagrams couldn't match.",
    approach: [
      {
        step: "Sales journey mapping",
        detail:
          "Interviewed 12 field reps and 4 sales managers to map the actual pitch flow: where clients engaged, where they dropped off, and what questions repeatedly derailed deals.",
      },
      {
        step: "Interactive prototype",
        detail:
          "Designed a non-linear presentation tool that let reps navigate to any product area based on client interest, with custom After Effects animations and configurable spec sheets embedded inline.",
      },
    ],
    outcome:
      "Deployed to field reps, the app increased sales by 40% and cut sales preparation time by 60%. Reps described it as a major step up from paper, and sales management saw a clear gain in pitch consistency across the team along with a shorter deal cycle for mid-market accounts.",
    images: [
      {
        src: "/Work/Reliance/EarlySketches.png",
        caption: "Product configurator — embedded inline in the pitch flow",
      },
      {
        src: "/Work/Reliance/SystemDiagram.png",
        caption: "Product configurator — embedded inline in the pitch flow",
      },
      {
        src: "/Work/Reliance/EngineeringAnalysis.png",
        caption: "Product configurator — embedded inline in the pitch flow",
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
