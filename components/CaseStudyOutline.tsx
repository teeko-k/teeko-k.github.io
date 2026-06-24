'use client'

import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'cs-overview', label: 'Overview' },
  { id: 'cs-challenge', label: 'The challenge' },
  { id: 'cs-approach', label: 'Approach' },
  { id: 'cs-outcome', label: 'Outcome' },
  { id: 'cs-tools', label: 'Tools & methods' },
]

export default function CaseStudyOutline() {
  const [activeId, setActiveId] = useState(null)
  const [visible, setVisible] = useState(false)

  // Track active section
  useEffect(() => {
    const observers = []

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Show outline only when scrolled past the hero
  useEffect(() => {
    const handleScroll = () => {
      const firstEl = document.getElementById(SECTIONS[0].id)
      if (!firstEl) return
      const rect = firstEl.getBoundingClientRect()
      // visible once the top of the first section is above the middle of the screen
      setVisible(rect.top < window.innerHeight * 0.6)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="hidden xl:block">
      <div
        className="sticky top-40"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        {/* Label */}
        <span
          className="font-sans text-xs text-text-primary block mb-6"
          style={{ letterSpacing: '0.25em', opacity: 0.45 }}
        >
          Contents
        </span>

        {/* Timeline list */}
        <div className="flex flex-col">
          {SECTIONS.map((section, i, arr) => {
            const isActive = activeId === section.id
            const isPast =
              activeId && arr.findIndex((s) => s.id === activeId) > i

            return (
              <div
                key={section.id}
                className="grid gap-x-4"
                style={{ gridTemplateColumns: '8px 1px 1fr' }}
              >
                {/* Dot */}
                <div className="flex flex-col items-center">
                  <div
                    className="rounded-full flex-shrink-0 mt-1 transition-all duration-300"
                    style={{
                      width: isActive ? '10px' : '7px',
                      height: isActive ? '10px' : '7px',
                      marginLeft: isActive ? '-1.5px' : '0',
                      background: isActive
                        ? 'var(--color-accent)'
                        : 'var(--text-secondary)',
                      opacity: isActive ? 1 : isPast ? 0.5 : 0.25,
                    }}
                  />
                  {i < arr.length - 1 && (
                    <div
                      className="flex-1 mt-1"
                      style={{
                        width: '1px',
                        background: 'var(--text-secondary)',
                        opacity: 0.12,
                        minHeight: '32px',
                      }}
                    />
                  )}
                </div>

                {/* Spacer */}
                <div />

                {/* Label */}
                <button
                  onClick={() => handleClick(section.id)}
                  className="text-left pb-8 transition-all duration-300 font-sans text-xs"
                  style={{
                    letterSpacing: '0.18em',
                    color: isActive
                      ? 'var(--color-accent)'
                      : 'var(--text-primary)',
                    opacity: isActive ? 1 : isPast ? 0.5 : 0.35,
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    padding: '0 0 32px 0',
                    lineHeight: 1,
                  }}
                >
                  {section.label}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
