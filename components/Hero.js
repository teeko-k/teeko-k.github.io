'use client'

// import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  // const videoRef = useRef(null)

  return (
    <section className="bg-color-bg relative h-screen 2xl:h-[85vh] flex flex-col justify-end overflow-hidden">
      {/* <div className="absolute inset-0 bg-ash-grey">
        <div className="relative w-full h-full md:h-auto md:aspect-video opacity-80"></div>
      </div> */}

      {/* Hero content */}
      <div className="relative z-10 px-8 md:px-12 pb-20 md:pb-24">
        {/* Overline */}
        <div className="reveal-text reveal-text-delay-1 flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-text-secondary" />
          <span
            className="font-mono text-text-secondary text-sm uppercase"
            style={{ letterSpacing: '0.3em' }}
          >
            Intro
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display w-[70%] lg:w-[80%] 2xl:w-[60%] font-light leading-none mb-8">
          <span
            className="reveal-text reveal-text-delay-2 block text-5xl md:text-6xl lg:text-6xl 2xl:text-9xl font-sans font-semibold text-text-primary"
            style={{ letterSpacing: '-0.02em' }}
          >
            {/* Capturing */}
            Ahmed is a UX Designer who makes complex things{' '}
            <span className="reveal-text reveal-text-delay-3 text-6xl md:text-7xl lg:text-7xl 2xl:text-9xl font-display italic text-transparent bg-clip-text bg-gradient-to-tr from-color-accent to-color-accent-secondary">
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
                  background: 'var(--color-accent)',
                  animation:
                    'scrollLine 2s cubic-bezier(0.76, 0, 0.24, 1) infinite',
                }}
              />
            </div>
          </div>

          <span
            className="font-mono text-text-secondary text-sm"
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
