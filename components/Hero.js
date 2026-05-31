'use client'

// import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  // const videoRef = useRef(null)

  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* <div className="absolute inset-0 bg-ash-grey">
        <div className="relative w-full h-full md:h-auto md:aspect-video opacity-80"></div>
      </div> */}

      {/* Hero content */}
      <div className="relative z-10 px-8 md:px-12 pb-20 md:pb-24">
        {/* Overline */}
        <div className="reveal-text reveal-text-delay-1 flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-dimmed-ink" />
          <span
            className="font-mono text-dimmed-ink text-sm uppercase"
            style={{ letterSpacing: '0.3em' }}
          >
            Intro
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display w-[80%] lg:w-[70%] font-light leading-none mb-8">
          <span
            className="reveal-text reveal-text-delay-2 block text-5xl md:text-6xl lg:text-7xl font-sans text-bold-ink"
            style={{ letterSpacing: '-0.02em' }}
          >
            {/* Capturing */}
            Ahmed Kassem is a UX Designer who makes complex things{' '}
            <span className="reveal-text reveal-text-delay-3 text-6xl md:text-7xl lg:text-8xl text-accent-color font-display italic">
              simple.
            </span>
          </span>
        </h1>

        {/* Scroll indicator */}
        <div className="reveal-text reveal-text-delay-3 flex items-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <div
              className="w-[2px] h-12 relative overflow-hidden"
              style={{ background: 'rgba(66,66,66,0.15)' }}
            >
              <div
                className="absolute top-0 w-full"
                style={{
                  height: '40%',
                  background: 'var(--accent-color)',
                  animation:
                    'scrollLine 2s cubic-bezier(0.76, 0, 0.24, 1) infinite',
                }}
              />
            </div>
          </div>
          <span
            className="font-mono text-dimmed-ink text-sm"
            style={{ letterSpacing: '0.2em' }}
          >
            Scroll
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
            opacity: 1;
          }
          100% {
            transform: translateY(300%);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  )
}
