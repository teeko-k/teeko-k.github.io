"use client"

// import Image from 'next/image'
// import { useEffect, useRef } from 'react'

export default function Hero() {
  // const videoRef = useRef(null)

  return (
    <section
      className="bg-color-bg relative h-screen lg:h-[80vh] flex flex-col justify-end overflow-hidden"
      id="home"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-gradient-to-b from-color-gradient-stop to-color-bg to-85%" />

      {/* Hero content */}
      <div className="relative z-10 px-8 md:px-12 pb-20 md:pb-24 flex flex-col items-start text-left md:items-center md:text-center">
        {/* Overline */}
        <div className="reveal-text reveal-text-delay-1 flex md:items-center gap-4 mb-6">
          {/* <span className="hidden md:visible w-8 h-px bg-text-secondary" /> */}
          <span
            className="font-mono text-text-secondary text-sm 2xl:text-lg"
            style={{ letterSpacing: "0.3em" }}
          >
            01 - Intro
          </span>
          {/* <span className="w-8 h-px bg-text-secondary" /> */}
        </div>

        {/* Main heading */}
        <h1 className="font-display w-full md:w-[80%] 2xl:w-[70%] leading-none mb-8">
          <span
            className="reveal-text reveal-text-delay-2 block text-5xl md:text-6xl lg:text-6xl 2xl:text-9xl font-sans font-semibold text-text-primary"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ahmed is a UX Designer who makes complex things{" "}
            <span className="reveal-text reveal-text-delay-3 text-6xl md:text-7xl lg:text-7xl 2xl:text-9xl font-display italic text-transparent bg-clip-text bg-gradient-to-tr from-color-accent to-color-accent-secondary">
              simple.
            </span>
          </span>
        </h1>

        {/* Scroll indicator */}
        <div className="reveal-text reveal-text-delay-3 flex flex-col items-center gap-2">
          <span
            className="font-sans text-text-secondary text-sm 2xl:text-lg"
            style={{ letterSpacing: "0.2em" }}
          >
            Scroll
          </span>
          <div
            className="w-[2px] h-12 relative overflow-hidden"
            style={{ background: "rgba(99,99,99,0.15)" }}
          >
            <div
              className="absolute top-0 w-full"
              style={{
                height: "40%",
                background: "var(--color-accent)",
                animation:
                  "scrollLine 2s cubic-bezier(0.76, 0, 0.24, 1) infinite",
              }}
            />
          </div>
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
