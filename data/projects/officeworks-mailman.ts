import { Project } from "@/types/project"

const project: Omit<Project, "slug"> = {
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
}

export default project
