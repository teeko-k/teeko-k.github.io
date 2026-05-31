'use client'

import { useEffect, useRef } from 'react'

export default function About() {
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
      { threshold: 0.1 },
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
      id="about"
      ref={sectionRef}
      className="py-32 px-8 md:px-12 relative"
    >
      {/* Ambient separator */}
      <div
        className="absolute top-0 left-8 right-8 md:left-12 md:right-12 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <div className="fade-section relative">
            <div
              className="img-zoom relative overflow-hidden"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&auto=format&fit=crop"
                alt="Portrait"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.8) saturate(0.85)' }}
              />
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t border-l border-dimmed-ink"
                style={{ opacity: 0.6 }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-dimmed-ink"
                style={{ opacity: 0.6 }}
              />
            </div>

            {/* Floating label */}
            <div
              className="absolute -bottom-6 -right-0 md:-right-6 bg-charcoal border px-6 py-4"
              style={{ borderColor: 'rgba(201,169,110,0.2)' }}
            >
              <p
                className="font-mono text-dimmed-ink text-xs"
                style={{ letterSpacing: '0.2em' }}
              >
                Visual Artist
              </p>
              <p className="font-sans text-dimmed-ink text-xs mt-1 font-light">
                Available for commissions
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="fade-section">
            <span
              className="font-mono text-dimmed-ink text-xs"
              style={{ letterSpacing: '0.3em' }}
            >
              03 — About
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-light mt-4 mb-8 text-bold-ink leading-tight"
              style={{ letterSpacing: '-0.01em' }}
            >
              Details, decisions
              <br />
              <span className="italic">, and what's in between</span>
            </h2>

            <div
              className="space-y-5 font-sans text-dimmed-ink font-light leading-relaxed"
              style={{ fontSize: '15px' }}
            >
              <p>
                Hi, I’m Ahmed. I’m a product designer in Melbourne. I’ve spent
                years attempting to make complex things feel less complex. For
                real people. Across real products.
              </p>
              <p>
                I really like the human side of it, figuring out why people do
                the things they do and what design decisions are going to make
                things click. I also work in photography, film, and 3D, not as
                side hobbies but as ways of seeing. They’ve influenced the way I
                think about light and story and what makes something feel worth
                looking at.
              </p>
              <p>
                I hike. I travel. I collect perspectives. If you want to work
                together, I’d love to hear from you.
              </p>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t"
              style={{ borderColor: 'rgba(245,240,235,0.08)' }}
            >
              {[
                { value: '15+', label: 'Years' },
                { value: '200+', label: 'Projects' },
                { value: '2', label: 'Continents' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display text-3xl font-light text-dimmed-ink"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-mono text-dimmed-ink text-xs mt-1"
                    style={{ letterSpacing: '0.12em', opacity: 0.5 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
