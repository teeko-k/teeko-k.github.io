'use client'

import { useEffect, useRef, useState } from 'react'
import { socialLinks } from '../data/social'
import SocialLink from './SocialLink'

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
              className="font-sans font-semibold text-5xl 2xl:text-6xl mt-4 mb-8 text-bold-ink leading-tight"
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

            {/* Social links */}
            <div className="flex flex-col flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} social={social} />
              ))}
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
