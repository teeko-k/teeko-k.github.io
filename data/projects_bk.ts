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
    title: "EA - Frostbite Engine",
    subtitle: "Developer tooling for AAA game development",
    year: "2021 - 2025",
    tags: ["UX Design", "Design Systems", "Research", "WPF"],
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
      "At EA, I worked for four years on Frostbite, the company’s proprietary game engine powering AAA titles including FIFA 23, FC 24, and the Dead Space remake. My role focused on developer-facing tooling, including cinematics editors, AI behaviour trees, and physics debug panels used daily by engineers and technical artists across multiple studios.",
    challenge:
      "The tools were highly powerful but developed in isolation over more than a decade. As a result, workflows were inconsistent across modules, onboarding new developers often took weeks, and there was no shared design language connecting hundreds of individual panels and editors. At the same time, expert users resisted simplification; they required flexibility and depth, not abstraction.",
    approach: [
      {
        step: "Discovery",
        detail:
          "Conducted research sessions and interviews with developers across multiple disciplines in studios in Melbourne, Stockholm, and Los Angeles. By observing and discussing their day-to-day workflows, I mapped user journeys, identified key pain points and opportunities, and developed personas that informed subsequent design decisions.",
      },
      {
        step: "Audit",
        detail:
          "Audited existing and emerging UI components within the Frostbite design system, reviewing both implemented and development-ready elements to ensure consistency with the Frostbite design language. Where discrepancies were identified, I prioritised them based on frequency, severity, and estimated cost of change to guide remediation efforts.",
      },
      {
        step: "Design system",
        detail:
          "Contributed to the evolution of the Frostbite design system as part of the UX team, developing and refining components within the Figma library, including design tokens, layout grids, and interaction patterns. Partnered with engineering by providing detailed specifications to support accurate implementation within the component library.",
      },
      {
        step: "Validation",
        detail:
          "Conducted usability testing sessions with developers using interactive prototypes to validate key workflows. Insights from testing were synthesised and used to iterate on core flows across two rounds of refinement prior to release.",
      },
    ],
    outcome:
      "Across my contributions at EA Frostbite, I helped reduce onboarding friction for new developers and improve the efficiency of key workflows. More broadly, my work supported the establishment of UX as a strategic partner within the development pipeline, shifting its role from a finishing step to a core part of how tools and systems are designed and built.",
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
    tags: ["Product Design", "Mobile App", "Interaction Design"],
    thumbnail: "/Work/Intravel/Intravel-cover.png",
    accent: "#f8991d",
    size: "normal",

    client: "Intravel Group",
    role: "UX/UI Designer",
    duration: "2 months",
    tools: ["Adobe XD", "Figma", "Miro", "Invision", "Adobe Illustrator"],
    overview:
      "Intravel is a mobile-first travel planning concept designed to help users plan trips collaboratively, discover local experiences, and manage itineraries in one place. The experience was primarily designed for business users looking to plan trips and generate travel quotes, alongside secondary independent traveller personas.",
    challenge:
      "The brief was to define a clear product direction for a travel planning and quotation experience in a highly competitive space. The focus was not on feature breadth, but on establishing a coherent information architecture, interaction model, and visual language that could support structured trip planning and quote generation while remaining flexible for different user needs.",
    approach: [
      {
        step: "Persona development",
        detail:
          "Defined key user types through interviews and exploratory research, with a primary focus on business users responsible for planning trips and requesting travel quotes, alongside secondary personas such as the Solo Planner and Group Coordinator. These personas informed how different workflows and entry points were structured.",
      },
      {
        step: "Information Architecture & Prototyping",
        detail:
          "Explored multiple information architecture models through three divergent low- to mid-fidelity prototypes. Conducted moderated usability testing with 15 participants across two rounds to evaluate navigation clarity, workflow efficiency, and quote-building logic, refining toward the most intuitive structure.",
      },
      {
        step: "Visual design",
        detail:
          "Developed a warm, editorial visual language supported by a card-based system that surfaced contextual information such as weather, local events, and transport alongside itinerary and quote-building steps. The design balanced clarity for structured planning with a sense of exploration.",
      },
    ],
    outcome:
      "Delivered a concept-level prototype and defined product direction for the Intravel travel planning and quotation experience. The work was well received by the client, with positive feedback on the clarity of the information architecture and the strength of the proposed design language and interaction model.",
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
    subtitle: "End-to-end parcel visibility for customers and operations",
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
      "Officeworks needed a unified parcel tracking experience across web, mobile, and in-store channels. Customers had limited visibility into delivery status, which resulted in frequent customer support enquiries around order tracking.",

    challenge:
      "The experience was constrained by multiple carriers, inconsistent tracking data formats, and a legacy order management system. The key challenge was to design a coherent customer-facing experience without relying on backend unification.",

    approach: [
      {
        step: "Research",
        detail:
          "Interviewed 20 customers and 8 support agents to map the end-to-end WISMO journey. Identified three key moments of high user anxiety: post-purchase silence, unexpected delays, and missed deliveries.",
      },
      {
        step: "Service blueprint",
        detail:
          "Mapped front stage interactions against back stage systems to identify where data was available, where gaps existed, and what could be surfaced in the short term versus requiring longer term engineering work.",
      },
      {
        step: "Interaction design",
        detail:
          "Designed a progressive tracking timeline that gracefully handled incomplete carrier data by surfacing estimated delivery windows rather than empty or broken states.",
      },
    ],

    outcome:
      "Customer support contact rates related to delivery tracking decreased by 30% in the first three months after launch, improving overall delivery experience efficiency and reducing operational load on support teams.",
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
      "Reliance, a Canadian home heating and cooling provider with over 50 years in operation, relied on paper brochures, printed spec sheets, and spreadsheets to support its sales process. Sales representatives often improvised during client meetings, and inconsistencies in materials led to an uneven sales experience across the team. The goal was to design a tablet-based sales tool that provided a consistent, interactive experience to support client conversations.",

    challenge:
      "The project began under tight timelines with unclear requirements and outdated source materials. Sales representatives had already developed informal workarounds, resulting in inconsistent messaging and missed opportunities during client pitches. The challenge was to quickly define a usable MVP by aligning stakeholders, understanding the real sales workflow, and translating fragmented materials into a structured digital experience.",

    approach: [
      {
        step: "Sales journey mapping",
        detail:
          "Interviewed 12 field sales representatives and 4 sales managers to map the real-world pitch flow, identifying key moments of engagement, drop-off points, and recurring objections that impacted deal conversion.",
      },
      {
        step: "Information architecture and wireframing",
        detail:
          "Synthesised complex product and sales information into a structured, navigable tablet experience. Explored IA models that allowed non-linear navigation based on client interest, while introducing light gamification elements to provide a sense of progression and payoff during the sales pitch.",
      },
      {
        step: "Visual design",
        detail:
          "Designed a clean, minimal interface focused on clarity and hierarchy of information. Due to outdated vendor-provided materials, I recreated mechanical system components as custom illustrations and SVG assets to ensure visual consistency across the experience.",
      },
      {
        step: "Implementation and motion design",
        detail:
          "Produced supporting animations in After Effects to clarify complex system behaviour during the sales pitch, enhancing comprehension where static diagrams were insufficient.",
      },
    ],

    outcome:
      "The interactive sales kit was deployed to field teams, resulting in a 40% increase in sales performance and a 60% reduction in sales preparation time. Sales teams reported improved consistency across pitches and a smoother overall client experience, with shorter deal cycles for mid-market accounts.",
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
