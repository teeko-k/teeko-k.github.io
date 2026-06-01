'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [focused, setFocused] = useState(null)

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

  const inputStyle = (name) => ({
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === name ? 'var(--dimmed-ink)' : 'rgba(25,25,25,0.3)'}`,
    borderRadius: 0,
    color: 'var(--dimmed-ink)',
    outline: 'none',
    width: '100%',
    padding: '12px 0',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '15px',
    fontWeight: 300,
    transition: 'border-color 0.3s ease',
    letterSpacing: '0.03em',
  })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-8 md:px-12 relative"
    >
      {/* Ambient separator */}
      <div
        className="absolute top-0 left-8 right-8 md:left-12 md:right-12 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(33,33,33,0.3), transparent)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div className="fade-section">
            <span
              className="font-mono text-dimmed-ink text-sm"
              style={{ letterSpacing: '0.3em' }}
            >
              04 — Contact
            </span>
            <h2
              className="font-sans font-semibold text-5xl md:text-6xl mt-4 mb-8 text-bold-ink leading-tight"
              style={{ letterSpacing: '-0.01em' }}
            >
              Get in touch
            </h2>

            <p
              className="font-sans text-dimmed-ink font-light leading-relaxed mb-10"
              style={{ fontSize: '18px', maxWidth: '380px' }}
            >
              If you're working on an interesting problem, building something
              new, or simply want to connect, I'd be happy to hear from you.
            </p>

            {/* Direct links */}
            <div className="space-y-4">
              <a
                href="mailto:a.taher.kassem@gmail.com"
                className="flex items-center gap-4 text-dimmed-ink hover:text-accent-color transition-colors duration-300 group"
              >
                <svg
                  className="w-4 h-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span
                  className="font-sans font-light text-sm"
                  style={{ letterSpacing: '0.05em' }}
                >
                  a.taher.kassem@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmedtkassem/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-dimmed-ink hover:text-accent-color transition-colors duration-300 group"
              >
                <svg
                  className="w-4 h-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <g transform="scale(0.04)">
                    <path d="M116.504,500.219V170.654H6.975v329.564H116.504L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z" />
                  </g>
                </svg>
                <span
                  className="font-sans font-light text-sm"
                  style={{ letterSpacing: '0.05em' }}
                >
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="fade-section">
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Message sent! (wire up your endpoint)')
              }}
            >
              <div>
                <label
                  className="font-mono text-dimmed-ink text-xs block mb-3"
                  style={{ letterSpacing: '0.2em', opacity: 0.5 }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  style={inputStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label
                  className="font-mono text-dimmed-ink text-xs block mb-3"
                  style={{ letterSpacing: '0.2em', opacity: 0.5 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label
                  className="font-mono text-dimmed-ink text-xs block mb-3"
                  style={{ letterSpacing: '0.2em', opacity: 0.5 }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle('message'), resize: 'none' }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-4 group transition-all duration-300"
              >
                <span
                  className="font-mono text-xs text-accent-color group-hover:text-accent-color transition-colors duration-300"
                  style={{ letterSpacing: '0.25em' }}
                >
                  Send message
                </span>
                <span className="block w-12 h-px bg-bold-ink group-hover:w-20 group-hover:bg-accent-color transition-all duration-500" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
