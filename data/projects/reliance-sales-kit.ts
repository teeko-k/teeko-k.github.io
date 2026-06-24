import { Project } from "@/types/project"

const project: Omit<Project, "slug"> = {
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
}

export default project
