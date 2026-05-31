'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { projects } from '@/data/projects'

export default function Work() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 },
    )

    const section = sectionRef.current
    if (section) {
      section.querySelectorAll('.fade-section').forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-32 px-8 md:px-12">
      {/* Section header */}
      <div className="fade-section flex items-end justify-between mb-16">
        <div>
          <span
            className="font-mono text-amber text-xs"
            style={{ letterSpacing: '0.3em' }}
          >
            01 — Work
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-light mt-3 text-bold-ink"
            style={{ letterSpacing: '-0.01em' }}
          >
            Selected projects
          </h2>
        </div>
        <Link
          href="/work"
          className="hidden md:flex items-center gap-3 text-dimmed-ink hover:text-accent-color transition-colors duration-300 font-sans text-sm font-light group"
          style={{ letterSpacing: '0.1em' }}
        >
          <span>View all</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Project grid */}
      <div className="fade-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bold-ink/10">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative flex flex-col bg-ash-grey overflow-hidden ${
        project.size === 'wide' ? 'md:col-span-2' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: project.size === 'wide' ? '16/7' : '4/3',
        }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ filter: 'brightness(0.75) saturate(0.8)' }}
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.1) 55%, transparent 100%)',
          }}
        />

        {/* Index number */}
        <span
          className="absolute top-5 left-5 font-mono text-xs opacity-40"
          style={{ letterSpacing: '0.2em', color: '#f5f0eb' }}
        >
          {project.index}
        </span>

        {/* Year */}
        <span
          className="absolute top-5 right-5 font-mono text-xs opacity-40"
          style={{ letterSpacing: '0.2em', color: '#f5f0eb' }}
        >
          {project.year}
        </span>

        {/* Hover accent line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
          style={{ background: project.accent }}
        />
      </div>

      {/* Card body */}
      <div className="p-6 md:p-8 flex flex-col flex-1 border-b border-bold-ink/10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-dimmed-ink"
              style={{ letterSpacing: '0.15em', opacity: 0.45 }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="font-display text-2xl md:text-3xl font-light text-bold-ink group-hover:text-accent-color transition-colors duration-300 mb-2"
          style={{ letterSpacing: '-0.01em' }}
        >
          {project.title}
        </h3>

        <p
          className="font-sans text-dimmed-ink text-sm font-light leading-relaxed flex-1"
          style={{ opacity: 0.65 }}
        >
          {project.subtitle}
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-bold-ink/8">
          <span
            className="font-mono text-xs text-dimmed-ink"
            style={{ letterSpacing: '0.18em', opacity: 0.4 }}
          >
            {project.client}
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-accent-color opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ letterSpacing: '0.15em' }}>
            View case study
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
