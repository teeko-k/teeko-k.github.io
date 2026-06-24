'use client'

import { useEffect, useRef, useState } from 'react'

const packages = [
  {
    id: 'short',
    index: '01',
    title: 'Short Session',
    subtitle: 'Portraits & headshots',
    price: 250,
    duration: '1 hr',
    photos: 10,
    description:
      'Good for portraits, dating profiles, headshots, or quick creative shoots.',
    inclusions: [
      'Up to 1 hour on location',
      '10 professionally edited photos',
      'Online gallery delivery',
    ],
    tag: 'Most popular',
  },
  {
    id: 'standard',
    index: '02',
    title: 'Standard Session',
    subtitle: 'Branding & creative',
    price: 450,
    duration: '2 hrs',
    photos: 20,
    description:
      'Good for portraits, boudoir, personal branding, or creative work.',
    inclusions: [
      'Up to 2 hours on location',
      '20 professionally edited photos',
      'Online gallery delivery',
    ],
    tag: null,
  },
  {
    id: 'extended',
    index: '03',
    title: 'Extended Session',
    subtitle: 'Editorial & concepts',
    price: 800,
    duration: '4 hrs',
    photos: 40,
    description: 'For editorial shoots, brands, or more complex concepts.',
    inclusions: [
      'Up to 4 hours on location',
      '40 professionally edited photos',
      'Online gallery delivery',
    ],
    tag: null,
  },
  {
    id: 'custom',
    index: '04',
    title: 'Custom Project',
    subtitle: 'Campaigns & brands',
    price: null,
    duration: null,
    photos: null,
    description:
      'For brands, campaigns, or editorial work requiring a tailored approach.',
    inclusions: [
      'Full project scoping call',
      'Custom deliverable agreement',
      'Dedicated creative direction',
    ],
    tag: 'Enquire',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 },
    )
    const section = sectionRef.current
    if (section) {
      section
        .querySelectorAll('.fade-section')
        .forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])

  const pkg = packages[active]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 px-8 md:px-12 relative"
    >
      {/* Separator */}
      <div
        className="absolute top-0 left-8 right-8 md:left-12 md:right-12 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)',
        }}
      />

      {/* Section header */}
      <div className="fade-section flex items-end justify-between mb-16">
        <div>
          <span
            className="font-mono text-amber text-xs"
            style={{ letterSpacing: '0.3em' }}
          >
            05 — Services
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-light mt-3 text-warm-white"
            style={{ letterSpacing: '-0.01em' }}
          >
            Sessions &amp; packages
          </h2>
        </div>
        <p
          className="hidden md:block font-sans text-dim-white font-light text-sm text-right"
          style={{ maxWidth: '220px', lineHeight: '1.6', opacity: 0.6 }}
        >
          All sessions include full creative collaboration and post-processing.
        </p>
      </div>

      {/* Package selector row */}
      <div
        className="fade-section grid grid-cols-2 md:grid-cols-4 gap-px mb-px"
        style={{ background: 'rgba(245,240,235,0.06)' }}
      >
        {packages.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            className="relative flex flex-col justify-between p-6 md:p-8 text-left transition-all duration-500 group"
            style={{
              background:
                active === i ? 'rgba(201,169,110,0.06)' : 'rgba(10,10,10,0.95)',
              minHeight: '130px',
            }}
          >
            {/* Active indicator line */}
            <div
              className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
              style={{
                background: active === i ? 'var(--amber)' : 'transparent',
              }}
            />

            <div className="flex items-start justify-between">
              <span
                className="font-mono text-xs transition-colors duration-300"
                style={{
                  letterSpacing: '0.18em',
                  color:
                    active === i ? 'var(--amber)' : 'rgba(184,176,168,0.35)',
                }}
              >
                {p.index}
              </span>
              {p.tag && (
                <span
                  className="font-mono text-xs px-2 py-0.5"
                  style={{
                    letterSpacing: '0.12em',
                    fontSize: '9px',
                    border: `1px solid ${active === i ? 'var(--amber)' : 'rgba(201,169,110,0.25)'}`,
                    color:
                      active === i ? 'var(--amber)' : 'rgba(201,169,110,0.5)',
                  }}
                >
                  {p.tag}
                </span>
              )}
            </div>

            <div>
              <p
                className="font-display text-xl md:text-2xl font-light transition-colors duration-300"
                style={{
                  color:
                    active === i
                      ? 'var(--warm-white)'
                      : 'rgba(245,240,235,0.4)',
                  letterSpacing: '-0.01em',
                }}
              >
                {p.title}
              </p>
              <p
                className="font-mono text-xs mt-1 transition-colors duration-300"
                style={{
                  letterSpacing: '0.1em',
                  color:
                    active === i
                      ? 'rgba(184,176,168,0.7)'
                      : 'rgba(184,176,168,0.25)',
                }}
              >
                {p.subtitle}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Expanded detail panel */}
      <div
        className="fade-section border-x border-b transition-all duration-500"
        style={{ borderColor: 'rgba(245,240,235,0.06)' }}
      >
        <div
          key={pkg.id}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            animation: 'panelReveal 0.5s cubic-bezier(0.22,1,0.36,1) forwards',
          }}
        >
          {/* Left — description + inclusions */}
          <div
            className="col-span-2 p-8 md:p-12 border-b md:border-b-0 md:border-r"
            style={{ borderColor: 'rgba(245,240,235,0.06)' }}
          >
            <p
              className="font-display text-2xl md:text-3xl font-light text-warm-white mb-6 leading-snug"
              style={{ letterSpacing: '-0.01em', maxWidth: '520px' }}
            >
              {pkg.description}
            </p>

            <ul className="space-y-3 mb-10">
              {pkg.inclusions.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span
                    className="w-4 h-px flex-shrink-0"
                    style={{ background: 'var(--amber)', opacity: 0.7 }}
                  />
                  <span
                    className="font-sans text-dim-white font-light text-sm"
                    style={{ letterSpacing: '0.04em' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Quick stats (only if not custom) */}
            {pkg.duration && (
              <div
                className="flex gap-10 pt-8 border-t"
                style={{ borderColor: 'rgba(245,240,235,0.07)' }}
              >
                <div>
                  <p
                    className="font-display text-3xl font-light text-amber"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {pkg.duration}
                  </p>
                  <p
                    className="font-mono text-dim-white text-xs mt-1"
                    style={{ letterSpacing: '0.15em', opacity: 0.45 }}
                  >
                    Duration
                  </p>
                </div>
                <div>
                  <p
                    className="font-display text-3xl font-light text-amber"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {pkg.photos}
                  </p>
                  <p
                    className="font-mono text-dim-white text-xs mt-1"
                    style={{ letterSpacing: '0.15em', opacity: 0.45 }}
                  >
                    Edited photos
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right — price + CTA */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p
                className="font-mono text-dim-white text-xs mb-4"
                style={{ letterSpacing: '0.2em', opacity: 0.45 }}
              >
                Starting from
              </p>
              {pkg.price ? (
                <div className="flex items-start gap-1 mb-2">
                  <span
                    className="font-display font-light mt-2"
                    style={{
                      fontSize: '18px',
                      color: 'var(--amber)',
                      opacity: 0.7,
                    }}
                  >
                    $
                  </span>
                  <span
                    className="font-display font-light leading-none"
                    style={{
                      fontSize: 'clamp(52px, 8vw, 80px)',
                      color: 'var(--warm-white)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {pkg.price}
                  </span>
                </div>
              ) : (
                <p
                  className="font-display font-light italic leading-none mb-2"
                  style={{
                    fontSize: 'clamp(32px, 5vw, 52px)',
                    color: 'var(--warm-white)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Let's talk
                </p>
              )}
              {pkg.price && (
                <p
                  className="font-mono text-dim-white text-xs"
                  style={{ letterSpacing: '0.12em', opacity: 0.35 }}
                >
                  AUD, incl. GST
                </p>
              )}
            </div>

            <div className="mt-10 space-y-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center justify-between w-full group py-4 px-6 transition-all duration-300"
                style={{
                  background: 'var(--amber)',
                  color: 'var(--obsidian)',
                }}
              >
                <span
                  className="font-mono text-xs font-medium"
                  style={{ letterSpacing: '0.2em' }}
                >
                  {pkg.price ? 'Book this session' : 'Get a quote'}
                </span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
              </a>
              <p
                className="font-mono text-dim-white text-xs text-center"
                style={{ letterSpacing: '0.1em', opacity: 0.3 }}
              >
                Travel fees may apply
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes panelReveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
