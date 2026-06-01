'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function Work() {
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)

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
      section
        .querySelectorAll('.fade-section')
        .forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])

  const scroll = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: dir === 'left' ? -420 : 420,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="work" ref={sectionRef} className="py-32 relative">
      {/* Section header */}
      <div className="fade-section flex items-end justify-between mb-12 px-8 md:px-12">
        <div>
          <span
            className="font-mono text-dimmed-ink text-sm"
            style={{ letterSpacing: '0.3em' }}
          >
            01 — Work
          </span>
          <h2
            className="font-sans font-semibold text-5xl md:text-6xl mt-3 text-bold-ink"
            style={{ letterSpacing: '-0.02em' }}
          >
            Featured Projects
          </h2>
        </div>

        {/* Arrow controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 border border-dimmed-ink/20 flex items-center justify-center hover:border-accent-color hover:text-accent-color transition-colors duration-300 text-dimmed-ink"
            style={{ borderRadius: '50%' }}
          >
            <svg
              className="w-4 h-4"
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
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 border border-dimmed-ink/20 flex items-center justify-center hover:border-accent-color hover:text-accent-color transition-colors duration-300 text-dimmed-ink"
            style={{ borderRadius: '50%' }}
          >
            <svg
              className="w-4 h-4"
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
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex flex-col md:flex-row md:overflow-x-auto"
        style={{
          gap: '24px',
          paddingLeft: '32px',
          paddingRight: '32px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="fade-section flex justify-center mt-10 md:hidden">
        <Link
          href="/work"
          className="font-mono text-xs text-dimmed-ink border border-dimmed-ink/20 px-6 py-3 hover:border-accent-color hover:text-accent-color transition-colors duration-300"
          style={{ letterSpacing: '0.2em', borderRadius: '999px' }}
        >
          View all projects
        </Link>
      </div>
    </section>
  )
}
