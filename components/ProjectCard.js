'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project, index }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex-shrink-0 flex flex-col overflow-hidden bg-white"
      style={{
        width: '100%',
        minWidth: 'min(380px, 80vw)',
        maxWidth: 'min(380px, 80vw)',
        borderRadius: '16px',
        border: '1px solid rgba(25,25,25,0.08)',
      }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-${project.accent}`}
        style={{
          aspectRatio: '3/2',
          borderRadius: '16px 16px 0 0',
        }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ filter: 'brightness(0.78) saturate(0.8)' }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${project.accent} 0%, transparent 60%)`,
          }}
        />

        {/* Index */}
        <span
          className="absolute top-4 left-4 font-mono text-xs opacity-50"
          style={{ letterSpacing: '0.2em', color: '#f5f0eb' }}
        >
          {project.index}
        </span>

        {/* Year */}
        <span
          className="absolute top-4 right-4 font-mono text-xs opacity-50"
          style={{ letterSpacing: '0.2em', color: '#f5f0eb' }}
        >
          {project.year}
        </span>

        {/* Accent line */}
        <div
          className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full transition-all duration-500"
          style={{ background: project.accent }}
        />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title first */}
        <h3
          className="font-sans font-semibold text-xl text-bold-ink group-hover:text-accent-color transition-colors duration-300 mb-1"
          style={{ letterSpacing: '-0.01em' }}
        >
          {project.title}
        </h3>

        <p
          className="font-sans text-dimmed-ink text-sm font-light leading-relaxed flex-1 mb-4"
          style={{ opacity: 0.6 }}
        >
          {project.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-dimmed-ink"
              style={{ letterSpacing: '0.12em', opacity: 0.4 }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer row */}
        <div
          className="flex items-center justify-between pt-4 border-t"
          style={{ borderColor: 'rgba(25,25,25,0.08)' }}
        >
          <span
            className="font-mono text-xs text-dimmed-ink"
            style={{ letterSpacing: '0.15em', opacity: 0.35 }}
          >
            {project.client}
          </span>
          <span
            className="flex items-center gap-1.5 font-mono text-xs text-accent-color opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ letterSpacing: '0.12em' }}
          >
            View
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
