import { Project } from "@/types/project"

const project: Omit<Project, "slug"> = {
  index: "02",
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
      caption: "Itinerary builder — card-first layout with contextual overlays",
    },
    {
      src: "/Work/Intravel/PlanWalkthrough01.png",
      caption: "Itinerary builder — card-first layout with contextual overlays",
    },
    {
      src: "/Work/Intravel/PlanWalkthrough02.png",
      caption: "Itinerary builder — card-first layout with contextual overlays",
    },
  ],
}

export default project
