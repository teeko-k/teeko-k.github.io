'use client'

import { socialLinks } from '../data/social'
import { navLinks } from '../data/navLinks'
import SocialLink from './SocialLink'
import ThemeToggle from './ThemeToggle'

const navBgColors = [
  'rgba(180, 140, 80, 0.12)',
  'rgba(80, 120, 180, 0.1)',
  'rgba(150, 100, 100, 0.1)',
  'rgba(80, 160, 120, 0.08)',
]

export default function OverlayNav({
  isOpen,
  hoveredLink,
  setHoveredLink,
  onNavClick,
}) {
  return (
    <div
      className={`nav-overlay fixed inset-0 z-40 bg-color-bg flex flex-col safe-area-top ${isOpen ? 'open' : ''}`}
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

      {/* Nav Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 pb-16">
        {/* Nav number indicator */}
        <div
          className="absolute top-28 right-8 md:right-16 text-color-accent font-mono text-xs"
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
                  onClick={() => onNavClick(link.href)}
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group flex items-baseline gap-6 py-2 text-left"
                >
                  <span
                    className="font-mono text-dimmed-ink text-sm transition-opacity duration-300"
                    style={{
                      opacity: hoveredLink === i ? 1 : 0.3,
                      letterSpacing: '0.15em',
                    }}
                  >
                    {link.sub}
                  </span>
                  <span
                    className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-none transition-all duration-300"
                    style={{
                      color:
                        hoveredLink === i
                          ? 'var(--color-accent)'
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

        {/* Bottom row: social + theme toggle */}
        <div
          className="nav-social-item border-t pt-6"
          style={{ borderColor: 'rgba(25,25,25,0.3)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-3">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} social={social} />
              ))}
            </div>
            {/* Mobile only — hidden on md+ since toggle is in header */}
            <div className="md:hidden">
              <ThemeToggle inNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
