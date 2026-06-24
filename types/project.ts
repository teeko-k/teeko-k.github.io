// types/projects.ts

export interface ProjectImage {
  src: string
  caption?: string
}

export interface ApprochStep {
  step: string
  detail: string
}

export type ProjectSize = "wide" | "normal"

export interface Project {
  slug: string
  index: string

  title: string
  subtitle: string
  year: string
  tags: string[]
  thumbnail: string
  accent: string
  size: ProjectSize

  client: string
  role: string
  duration: string
  tools: string[]
  overview: string
  challenge: string
  approach: ApprochStep[]
  outcome: string
  images?: ProjectImage[]
}
