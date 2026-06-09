'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex-shrink-0 flex flex-col md:flex-row bg-color-card-bg overflow-hidden"
      style={{
        minWidth: 'min(800px, 95vw)',
        maxWidth: 'min(800px, 95vw)',
        borderRadius: '20px',
        border: '1px solid rgba(25,25,25,0.05)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        padding: '10px',
        gap: '12px',
      }}
    >
      {/* Image — full width mobile, 60% desktop */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          background: project.accent,
          borderRadius: '12px',
          aspectRatio: '3/2',
          flex: '0 0 60%',
          maxWidth: '100%',
        }}
      >
        {!imgError && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ filter: 'brightness(0.82) saturate(0.85)' }}
            onError={() => setImgError(true)}
          />
        )}
        <span
          className="absolute top-3 left-3 font-mono text-xs"
          style={{ letterSpacing: '0.2em', color: '#fff', opacity: 0.6 }}
        >
          {project.index}
        </span>
        <span
          className="absolute top-3 right-3 font-mono text-xs"
          style={{ letterSpacing: '0.2em', color: '#fff', opacity: 0.6 }}
        >
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-2 pt-2 pb-1">
        <h3
          className="font-sans font-semibold text-xl text-text-primary group-hover:text-color-accent transition-colors duration-300 mb-1"
          style={{ letterSpacing: '-0.01em' }}
        >
          {project.title}
        </h3>

        <p className="font-sans text-text-secondary text-sm font-light leading-relaxed mb-2">
          {project.subtitle}
        </p>

        {/* separator */}
        <div
          className="w-[24px] h-[4px] rounded-full mb-8 transition-all duration-300 group-hover:w-[40px]"
          style={{ backgroundColor: project.accent }}
        ></div>
        <div className="flex-1" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs text-text-secondary px-3 py-1 border rounded-full"
              style={{
                letterSpacing: '0.05em',
                borderColor: 'rgba(128, 184, 241, 0.3)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="flex items-center justify-between pt-3 border-t"
          style={{ borderColor: 'rgba(128, 184, 241, 0.3)' }}
        >
          <span
            className="font-mono text-xs text-text-secondary"
            style={{ letterSpacing: '0.15em', opacity: 0.6 }}
          >
            {project.client}
          </span>
          <span
            className="flex items-center gap-1.5 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: project.accent, letterSpacing: '0.12em' }}
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
