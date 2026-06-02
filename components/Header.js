'use client'

import { useState, useEffect } from 'react'
import { socialLinks } from '../data/social'
import { navLinks } from '../data/navLinks'
import SocialLink from './SocialLink'

// Placeholder image colors for nav hover backgrounds
const navBgColors = [
  'rgba(180, 140, 80, 0.12)',
  'rgba(80, 120, 180, 0.1)',
  'rgba(150, 100, 100, 0.1)',
  'rgba(80, 160, 120, 0.08)',
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (href) => {
    setIsOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 600)
  }

  return (
    <>
      {/* Notch fill */}
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-ash-grey"
        style={{ height: 'env(safe-area-inset-top)' }}
      />
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 border-b z-50 flex items-center justify-between px-8 md:px-12 py-6 transition-all duration-500 bg-ash-grey`}
        style={{
          top: 0,
          paddingTop: 'max(1.5rem, env(safe-area-inset-top))',
          borderColor: scrolled ? 'rgba(25,25,25,0.3)' : 'transparent',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="relative z-50 flex flex-col leading-none group"
          style={{ opacity: isOpen ? 0 : 1, transition: 'opacity 0.3s ease' }}
        >
          <span
            className="text-bold-ink tracking-widest-3 uppercase text-xs font-sans font-normal"
            style={{ letterSpacing: '0.3em' }}
          >
            Ahmed 'Tiko' K.
          </span>
          <span
            className="text-dimmed-ink text-xs font-mono mt-0.5"
            style={{ letterSpacing: '0.2em', fontSize: '10px' }}
          >
            UX | Product Designer
          </span>
        </a>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
          aria-label="Toggle navigation"
        >
          <span
            className={`burger-line block h-[2px] ${isOpen ? 'bg-accent-color' : 'bg-dimmed-ink'} `}
            style={{
              width: '28px',
              transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="burger-line block h-px bg-dimmed-ink"
            style={{
              width: '20px',
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className={`burger-line block h-[2px] ${isOpen ? 'bg-accent-color' : 'bg-dimmed-ink'} `}
            style={{
              width: '25px',
              transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </header>

      {/* Overlay Navigation */}
      <div
        className={`nav-overlay fixed inset-0 z-40 bg-ash-grey flex flex-col ${isOpen ? 'open' : ''}`}
      >
        {/* Ambient hover background */}
        <div
          className="absolute inset-0 transition-all duration-700 pointer-events-none"
          style={{
            background:
              hoveredLink !== null
                ? `radial-gradient(ellipse 70% 60% at 70% 50%, ${navBgColors[hoveredLink]} 0%, transparent 70%)`
                : 'transparent',
          }}
        />

        {/* Decorative top rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber to-transparent opacity-30" />

        {/* Nav Content — links at bottom-left */}
        <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 pb-16">
          {/* Nav number indicator */}
          <div
            className="absolute top-28 right-8 md:right-16 text-accent-color font-mono text-xs"
            style={{ letterSpacing: '0.2em' }}
          >
            <span>{hoveredLink !== null ? `0${hoveredLink + 1}` : '—'}</span>
            <span className="mx-2 opacity-30">/</span>
            <span className="opacity-40">04</span>
          </div>

          {/* Main nav links */}
          <nav className="mb-12">
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li key={link.href} className="nav-link-item overflow-hidden">
                  <button
                    onClick={() => handleNavClick(link.href)}
                    onMouseEnter={() => setHoveredLink(i)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-baseline gap-6 py-2 text-left"
                  >
                    <span
                      className="font-mono text-dimmed-ink text-xs transition-opacity duration-300"
                      style={{
                        opacity: hoveredLink === i ? 1 : 0.3,
                        letterSpacing: '0.15em',
                      }}
                    >
                      {link.sub}
                    </span>
                    <span
                      className="font-sans text-4xl md:text-6xl lg:text-7xl font-light leading-none transition-all duration-300"
                      style={{
                        color:
                          hoveredLink === i
                            ? 'var(--accent-color)'
                            : 'var(--bold-ink)',
                        letterSpacing: hoveredLink === i ? '-0.01em' : '0.01em',
                      }}
                    >
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom row: social + label */}
          <div
            className="nav-social-item border-t pt-6"
            style={{ borderColor: 'rgba(25,25,25,0.3)' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {socialLinks.map((social) => (
                  <SocialLink key={social.label} social={social} />
                ))}
              </div>
            </div>

            {/* Copyrights */}
            <span
              className="text-dimmed-ink font-mono text-xs opacity-40"
              style={{ letterSpacing: '0.15em' }}
            >
              © 2026
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
