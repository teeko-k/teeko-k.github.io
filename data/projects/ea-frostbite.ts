import { Project } from "@/types/project"

const project: Omit<Project, "slug"> = {
  // Card title
  index: "01",
  title: "EA - Frostbite Engine",
  subtitle: "Developer tooling for AAA game development",
  year: "2021 - 2025",
  tags: ["UX Design", "Design Systems", "Research", "WPF"],
  thumbnail: "/Work/EA/EA-cover.png",
  accent: "#251bf3",
  size: "wide",

  // Page
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
    "At EA, I worked for four years on Frostbite, the company's proprietary game engine powering AAA titles including FIFA 23, FC 24, and the Dead Space remake. My role focused on developer-facing tooling, including cinematics editors, AI behaviour trees, and physics debug panels used daily by engineers and technical artists across multiple studios.",
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
}

export default project
