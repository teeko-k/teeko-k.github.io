'use client'

import { useState, useEffect } from 'react'
import OverlayNav from './OverlayNav'

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
      {/* Notch fill */}
      <div
        className="fixed top-0 left-0 right-0 z-[53] bg-red-500"
        style={{ minHeight: 'env(safe-area-inset-top)' }}
      />
      {/* Sticky Header */}
      <header
        className={`fixed top-[-80px] left-0 right-0 border-b z-50 flex items-center justify-between px-8 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'bg-color-bg' : 'transparent'}`}
        style={{
          paddingTop: '80px !important',
          borderColor: scrolled ? 'rgba(25,25,25,0.3)' : 'transparent',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          className="relative z-50 flex flex-col leading-none group"
          style={{ opacity: isOpen ? 0 : 1, transition: 'opacity 0.3s ease' }}
        >
          <span
            className={`${isProjectPage && !scrolled ? 'text-white' : 'text-text-primary'} tracking-widest-3 uppercase text-xs font-sans font-normal`}
            style={{
              letterSpacing: '0.3em',
            }}
          >
            Ahmed 'Tiko' K.
          </span>
          <span
            className={`${isProjectPage && !scrolled ? 'text-white' : 'text-text-secondary'} text-sm font-[200] font-sans mt-0.5`}
            style={{ letterSpacing: '0.2em', fontSize: '12px' }}
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
            className={`burger-line block h-[2px] ${isProjectPage && !scrolled && !isOpen ? 'bg-white' : 'bg-text-secondary'} `}
            style={{
              width: '28px',
              transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className={`burger-line block h-[2px] ${isProjectPage && !scrolled && !isOpen ? 'bg-white' : 'bg-text-secondary'} `}
            style={{
              width: '20px',
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className={`burger-line block h-[2px] ${isProjectPage && !scrolled && !isOpen ? 'bg-white' : 'bg-text-secondary'} `}
            style={{
              width: '25px',
              transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
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
