'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

// Placeholder photos — replace with your actual images via Next.js Image component
const photos = [
  {
    id: 1,
    src: '/Boudoir_01.jpg',
    caption: 'Aim - Boudoir Photoshoot',
    location: 'Melbourne, AU',
    year: '2023',
    span: 'row-span-2',
  },
  {
    id: 2,
    src: '/Landscape.jpg',
    caption: 'Dusk View',
    location: 'Australia',
    year: '2022',
    span: '',
  },
  {
    id: 3,
    src: '/Portrait_01.jpg',
    caption: 'Forest light',
    location: 'Melbourne, AU',
    year: '2021',
    span: '',
  },
  {
    id: 4,
    src: '/P_02.jpg',
    caption: 'Still waters',
    location: 'Patagonia, AR',
    year: '2024',
    span: 'row-span-2',
  },
  {
    id: 5,
    src: '/Portrait_04.jpg',
    caption: 'Into the mist',
    location: 'Faroe Islands',
    year: '2023',
    span: '',
  },
]

export default function Photography() {
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
    <section id="photography" ref={sectionRef} className="py-32 px-8 md:px-12">
      {/* Section header */}
      <div className="fade-section flex items-end justify-between mb-16">
        <div>
          <span
            className="font-mono text-amber text-xs"
            style={{ letterSpacing: '0.3em' }}
          >
            01 — Photography
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-light mt-3 text-warm-white"
            style={{ letterSpacing: '-0.01em' }}
          >
            Still Frames
          </h2>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-3 text-dim-white hover:text-amber transition-colors duration-300 font-sans text-sm font-light group"
          style={{ letterSpacing: '0.1em' }}
        >
          <span>View all</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Masonry-ish photo grid */}
      <div className="fade-section grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[280px] md:auto-rows-[320px]">
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className={`photo-item img-zoom relative cursor-pointer ${photo.span}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.85) saturate(0.9)' }}
              fill
            />

            {/* Hover overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)',
              }}
            />
            {/* Caption */}
            <div className="photo-caption absolute bottom-0 left-0 right-0 p-5">
              <p className="font-display text-warm-white text-lg font-light italic">
                {photo.caption}
              </p>
              <div className="flex items-center justify-between mt-1">
                <span
                  className="font-mono text-dim-white text-xs"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {photo.location}
                </span>
                <span
                  className="font-mono text-amber text-xs"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {photo.year}
                </span>
              </div>
            </div>

            {/* Index number */}
            <div className="absolute top-4 left-4 photo-caption">
              <span className="photo-number text-dim-white text-sm opacity-60">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
