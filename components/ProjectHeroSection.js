'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'

export default function ProjectHeroSection({ project }) {
  const { theme } = useTheme()
  const isDarkTheme = theme === 'dark'

  return (
    <div
      className="relative pt-24 pb-0 overflow-hidden"
      data-theme={theme}
      style={{ minHeight: '70vh' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          priority
          className="object-cover"
          style={{ filter: 'brightness(0.45) saturate(0.6)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDarkTheme
              ? `linear-gradient(to bottom, ${project.accent} 0%, transparent 55%, var(--color-bg) 100%)`
              : `linear-gradient(to bottom, ${project.accent} 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Hero content */}
      <div
        className="relative z-10 px-8 md:px-12 pt-16 pb-24 max-w-6xl mx-auto flex flex-col justify-end h-full"
        style={{ minHeight: '65vh' }}
      >
        <div className="mt-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 font-sans text-sm font-light mb-4"
            style={{ letterSpacing: '0.05em' }}
          >
            <svg
              className="w-4 h-4 -translate-x-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to work
          </Link>

          <h1
            className="font-sans font-semibold text-white mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
            }}
          >
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-sm px-3 py-1 border border-white rounded-full text-white"
                style={{
                  letterSpacing: '0.15em',
                  fontSize: '10px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            className="font-display italic font-light text-white"
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 2rem)',
              letterSpacing: '-0.01em',
            }}
          >
            {project.subtitle}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/50">
            {[
              { label: 'Client', value: project.client },
              { label: 'Role', value: project.role },
              { label: 'Duration', value: project.duration },
              { label: 'Year', value: project.year },
            ].map((m) => (
              <div key={m.label}>
                <p
                  className="font-mono text-white text-sm mb-1"
                  style={{ letterSpacing: '0.2em', opacity: 0.4 }}
                >
                  {m.label}
                </p>
                <p
                  className="font-sans text-white text-sm font-light"
                  style={{ letterSpacing: '0.03em' }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
