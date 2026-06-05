'use client'

import { useEffect, useRef } from 'react'
import ExperienceTimeline from './ExperienceTimeline'
import StatsSection from './StatsSection'

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
      className="py-24 px-8 md:px-12 relative 2xl:py-24 2xl:flex 2xl:items-center"
    >
      {/* Ambient separator */}
      {/* <div
        className="absolute top-0 left-8 right-8 md:left-12 md:right-12 2xl:left-0 2xl:right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(33,33,33,0.3), transparent)',
        }}
      /> */}

      <div className="max-w-full 2xl:max-w-full 2xl:w-full 2xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] 2xl:grid-cols-[1fr_2fr_0.9fr] gap-16 md:gap-24 items-start 2xl:h-full">
          {/* Image */}
          <div className="fade-section relative">
            <div
              className="img-zoom relative overflow-hidden rounded-full"
              style={{ aspectRatio: '1/1' }}
            >
              <img
                src="/images/AboutImg.JPEG"
                alt="Portrait"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.8) saturate(0.85)' }}
              />
              {/* Corner accent removed for circular frame */}
            </div>

            {/* Floating label */}
            {/* <div
              className="absolute -bottom-6 -right-0 md:-right-6 bg-charcoal border px-6 py-4"
              style={{ borderColor: 'rgba(201,169,110,0.2)' }}
            >
              <p
                className="font-mono text-text-secondary text-xs"
                style={{ letterSpacing: '0.2em' }}
              >
                Visual Artist
              </p>
              <p className="font-sans text-text-secondary text-xs mt-1 font-light">
                Available for commissions
              </p>
            </div> */}
          </div>

          {/* Text */}
          <div className="fade-section md:col-start-2 md:row-start-1">
            <span
              className="font-mono text-text-secondary text-sm"
              style={{ letterSpacing: '0.3em' }}
            >
              03 — About
            </span>
            <h2
              className="font-sans font-semibold text-4xl md:text-5xl 2xl:text-6xl mt-4 mb-8 text-text-primary leading-tight"
              style={{ letterSpacing: '-0.01em' }}
            >
              Designing for people, not screens
            </h2>

            <div
              className="space-y-5 font-sans text-text-secondary font-light leading-relaxed"
              style={{ fontSize: '18px' }}
            >
              <p>
                My interest in design started long before I ever called myself a
                designer.
              </p>
              <p>
                I've always been curious about people. Why certain things feel
                effortless while others create friction. Why we make the
                decisions we do. Why some experiences leave an impression while
                others are quickly forgotten.
              </p>
              <p>
                Over the last 15 years, that curiosity has shaped my career in
                product design. I've worked across complex products and problem
                spaces, helping teams turn ambiguity into experiences that feel
                clear, intuitive, and useful.
              </p>
              <p>
                What continues to draw me to the work isn't the screens
                themselves, but the people on the other side of them.
                Understanding their goals, behaviours, and motivations is often
                where the most meaningful design decisions begin.
              </p>
              <p>
                That same curiosity extends beyond product design. Through
                photography, filmmaking, and 3D, I've developed a deeper
                appreciation for observation, storytelling, and the details that
                influence how people experience the world around them.
              </p>
              <p>
                Whether I'm designing a product, framing a photograph, or
                exploring somewhere new with a camera, I'm usually chasing the
                same thing: understanding people a little better than I did
                yesterday.
              </p>
            </div>

            {/* Stats */}
            <StatsSection />
          </div>

          {/* Career Timeline */}
          <div className="fade-section md:col-start-2 md:row-start-2 2xl:col-start-3 2xl:row-start-1">
            <ExperienceTimeline />
          </div>
        </div>
      </div>
    </section>
  )
}
