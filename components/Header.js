'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Work', href: '#work', sub: '01' },
  { label: 'Services', href: '#services', sub: '02' },
  { label: 'About', href: '#about', sub: '03' },
  { label: 'Contact', href: '#contact', sub: '04' },
]

// Placeholder image colors for nav hover backgrounds
const navBgColors = [
  'rgba(180, 140, 80, 0.12)',
  'rgba(80, 120, 180, 0.1)',
  'rgba(150, 100, 100, 0.1)',
  'rgba(80, 160, 120, 0.08)',
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmedtkassem',
    viewBox: '0 0 24 24',
    path: (
      <g transform="scale(0.04)">
        <path d="M116.504,500.219V170.654H6.975v329.564H116.504L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z" />
      </g>
    ),
  },
  {
    label: 'Artstation',
    href: 'https://www.artstation.com/ahmedtkassem',
    viewBox: '0 0 24 24',
    path: (
      <g transform="scale(0.75)">
        <path d="M0 23.63l2.703 4.672c0.552 1.094 1.667 1.781 2.885 1.781h17.943l-3.724-6.453zM32 23.661c0-0.641-0.193-1.245-0.516-1.75l-10.516-18.276c-0.557-1.057-1.656-1.719-2.854-1.719h-5.557l16.24 28.135 2.563-4.432c0.5-0.849 0.641-1.224 0.641-1.958zM17.161 19.047l-7.255-12.568-7.26 12.568z" />
      </g>
    ),
  },
  {
    label: '@akassphoto',
    href: 'https://instagram.com/akassphoto',
    viewBox: '0 0 24 24',
    path: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    ),
  },
  {
    label: 'Youtube',
    href: 'https://youtube.com',
    viewBox: '0 0 24 24',
    path: (
      <g transform="scale(0.75)">
        <path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z" />
      </g>
    ),
  },
  {
    label: 'a.taher.kassem@gmail.com',
    href: 'mailto:a.taher.kassem@gmail.com',
    viewBox: null, // no icon for email
    path: null,
  },
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
        className={`fixed top-0 left-0 right-0 border-b z-50 flex items-center justify-between px-8 md:px-12 py-6 transition-all duration-500 ${scrolled && !isOpen ? 'bg-ash-grey' : 'bg-transparent'}`}
        style={{
          top: 'env(safe-area-inset-top)',
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
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith('mailto') ? undefined : '_blank'
                    }
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dimmed-ink hover:text-accent-color transition-colors duration-300 font-sans text-sm font-light"
                    style={{ letterSpacing: '0.12em' }}
                  >
                    {social.path && (
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="currentColor"
                        viewBox={social.viewBox}
                      >
                        {social.path}
                      </svg>
                    )}
                    <span>{social.label}</span>
                  </a>
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
