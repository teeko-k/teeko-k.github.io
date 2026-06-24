import { notFound } from 'next/navigation'
import { getProject, getAllSlugs, projects } from '@/data/projects'
import ProjectPage from '@/components/ProjectPage'

export async function generateStaticParams() {
  return getAllSlugs()
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Ahmed Kassem`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} — Ahmed Kassem`,
      description: project.subtitle,
      images: [{ url: project.thumbnail }],
    },
  }
}

export default async function WorkCaseStudy({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === slug)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return <ProjectPage project={project} prev={prev} next={next} />
}
