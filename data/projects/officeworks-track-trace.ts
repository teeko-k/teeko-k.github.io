import { Project } from "@/types/project"

const project: Omit<Project, "slug"> = {
  index: "03",
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
}

export default project
