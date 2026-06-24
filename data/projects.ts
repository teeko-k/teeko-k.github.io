// --- Types ---
import { Project } from "@/types/project"

interface ProjectModule {
  slug: string
  data: Omit<Project, "slug">
}

// --- Projects ---
import eaFrostbite from "./projects/ea-frostbite"
import intravelMobileApp from "./projects/intravel-mobile-app"
import officeworksTrackTrace from "./projects/officeworks-track-trace"
import officeworksMailman from "./projects/officeworks-mailman"
import relianceSalesKit from "./projects/reliance-sales-kit"

const ProjectModules: ProjectModule[] = [
  { slug: "ea-fortbite", data: eaFrostbite },
  { slug: "intravel-mobile-app", data: intravelMobileApp },
  { slug: "officeworks-track-trace", data: officeworksTrackTrace },
  { slug: "officeworks-mailman", data: officeworksMailman },
  { slug: "reliance-sales-kit", data: relianceSalesKit },
]

export const projects: Project[] = ProjectModules.map(({ slug, data }) => ({
  ...data,
  slug,
}))

// --- Helper Functions ---
export function getProject(slug: string): Project | null {
  return projects.find((p) => p.slug === slug) ?? null
}

export function getAllSlugs(): { slug: string }[] {
  return projects.map((p) => ({ slug: p.slug }))
}
