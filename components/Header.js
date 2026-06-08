'use client'

import { useState, useEffect } from 'react'
import OverlayNav from './OverlayNav'
import ThemeToggle from './ThemeToggle'

export default function Header({ isProjectPage = false }) {
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
    if (href.startsWith('/#')) {
      setTimeout(() => {
        window.location.href = href
      }, 600)
    } else {
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 600)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out`}
        style={{
          background: scrolled ? 'var(--color-bg)' : 'transparent',
          // borderColor: scrolled ? 'var(--text-secondary)' : 'transparent',
        }}
      >
        <div className={`py-6 px-8 md:px-12 flex items-center justify-between`}>
          {/* Logo */}
          <a
            href="/"
            className="relative z-50 flex flex-col leading-none group"
          >
            <span
              className={`${isProjectPage && !scrolled ? 'text-white' : 'text-text-primary'} tracking-widest-3 uppercase text-sm lg:text-base font-sans font-bold`}
              style={{ letterSpacing: '0.5em' }}
            >
              Ahmed'
              <span
                style={{
                  color:
                    isProjectPage && !scrolled
                      ? 'white'
                      : 'var(--text-secondary)',
                }}
              >
                Tiko
              </span>
              'Kassem
            </span>
            <span
              className={`${isProjectPage && !scrolled ? 'text-white' : 'text-text-secondary'} text-sm font-[200] font-sans mt-0.5`}
              style={{ letterSpacing: '0.2em', fontSize: '12px' }}
            >
              UX | Product Designer
            </span>
          </a>

          {/* Center — theme toggle, md+ only */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <ThemeToggle isProjectHeader={isProjectPage} scrolled={scrolled} />
          </div>

          {/* Burger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
            aria-label="Toggle navigation"
          >
            <span
              className={`burger-line block h-[2px] ${isProjectPage && !scrolled && !isOpen ? 'bg-white' : 'bg-text-secondary'}`}
              style={{
                width: '28px',
                transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className={`burger-line block h-[2px] ${isProjectPage && !scrolled && !isOpen ? 'bg-white' : 'bg-text-secondary'}`}
              style={{
                width: '20px',
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? 'scaleX(0)' : 'none',
              }}
            />
            <span
              className={`burger-line block h-[2px] ${isProjectPage && !scrolled && !isOpen ? 'bg-white' : 'bg-text-secondary'}`}
              style={{
                width: '25px',
                transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      <OverlayNav
        isOpen={isOpen}
        hoveredLink={hoveredLink}
        setHoveredLink={setHoveredLink}
        onNavClick={handleNavClick}
      />
    </>
  )
}
