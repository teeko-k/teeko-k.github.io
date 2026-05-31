'use client'

import { useEffect, useRef } from 'react'

const films = [
  {
    id: 1,
    title: 'Chasing Light',
    type: 'Short Film',
    year: '2024',
    duration: '4:32',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop',
    description: 'A meditation on dawn and solitude across high alpine terrain.',
  },
  {
    id: 2,
    title: 'Urban Pulse',
    type: 'Documentary',
    year: '2024',
    duration: '12:18',
    thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e6785?w=800&auto=format&fit=crop',
    description: 'Street life and the rhythm of the city, captured through the lens of a wanderer.',
  },
  {
    id: 3,
    title: 'The Quiet Season',
    type: 'Brand Film',
    year: '2023',
    duration: '2:45',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop',
    description: 'Commissioned work exploring seasonal transitions for an outdoor apparel brand.',
  },
]

export default function Filmography() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = sectionRef.current
    if (section) {
      const els = section.querySelectorAll('.fade-section')
      els.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="filmography"
      ref={sectionRef}
      className="py-32 px-8 md:px-12 relative"
    >
      {/* Ambient separator line */}
      <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 h-px" style={{
        background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)'
      }} />

      {/* Section header */}
      <div className="fade-section flex items-end justify-between mb-16">
        <div>
          <span className="font-mono text-amber text-xs" style={{ letterSpacing: '0.3em' }}>
            02 — Filmography
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light mt-3 text-warm-white" style={{ letterSpacing: '-0.01em' }}>
            Moving image
          </h2>
        </div>
      </div>

      {/* Film list */}
      <div className="space-y-0">
        {films.map((film, i) => (
          <div
            key={film.id}
            className="fade-section group border-b cursor-pointer"
            style={{
              borderColor: 'rgba(245,240,235,0.08)',
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <div className="py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-center">
              <div className="flex gap-6 md:gap-10 items-start">
                {/* Thumbnail */}
                <div
                  className="img-zoom flex-shrink-0 w-24 h-16 md:w-36 md:h-24 relative overflow-hidden"
                  style={{ background: '#1a1a1a' }}
                >
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: 'saturate(0.7)' }}
                  />
                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(201,169,110,0.9)' }}
                    >
                      <svg className="w-3 h-3 text-obsidian ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-mono text-amber text-xs"
                      style={{ letterSpacing: '0.15em' }}
                    >
                      {film.type}
                    </span>
                  </div>
                  <h3
                    className="font-display text-2xl md:text-3xl font-light text-warm-white group-hover:text-amber transition-colors duration-300"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {film.title}
                  </h3>
                  <p className="font-sans text-dim-white text-sm font-light mt-2 leading-relaxed hidden md:block" style={{ maxWidth: '480px' }}>
                    {film.description}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2 ml-30 md:ml-0">
                <span className="font-mono text-dim-white text-xs" style={{ letterSpacing: '0.12em', opacity: 0.5 }}>
                  {film.duration}
                </span>
                <span className="font-mono text-dim-white text-xs" style={{ letterSpacing: '0.12em', opacity: 0.4 }}>
                  {film.year}
                </span>
                <svg
                  className="w-5 h-5 text-amber opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 hidden md:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
