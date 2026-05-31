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
            'linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)',
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
              className="font-mono text-dimmed-ink text-xs"
              style={{ letterSpacing: '0.3em' }}
            >
              04 — Contact
            </span>
            <h2
              className="font-display text-5xl md:text-6xl font-light mt-4 mb-8 text-bold-ink leading-tight"
              style={{ letterSpacing: '-0.01em' }}
            >
              Let's make
              <br />
              <span className="italic">something together</span>
            </h2>

            <p
              className="font-sans text-dimmed-ink font-light leading-relaxed mb-10"
              style={{ fontSize: '15px', maxWidth: '380px' }}
            >
              Available for commercial commissions, editorial assignments, and
              creative collaborations. I'm always open to interesting
              conversations.
            </p>

            {/* Direct links */}
            <div className="space-y-4">
              <a
                href="mailto:a.taher.kassem@gmail.com"
                className="flex items-center gap-4 text-dimmed-ink hover:text-amber transition-colors duration-300 group"
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
                href="https://instagram.com/akassphoto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-dimmed-ink hover:text-amber transition-colors duration-300 group"
              >
                <svg
                  className="w-4 h-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span
                  className="font-sans font-light text-sm"
                  style={{ letterSpacing: '0.05em' }}
                >
                  @akassphoto
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
