'use client'

import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({
  inNav = false,
  isProjectHeader = false,
  scrolled = false,
}) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  // On project pages before scroll, use white; otherwise normal colors
  const isWhiteMode = isProjectHeader && !scrolled

  // Mobile / nav version — plain text
  if (inNav) {
    return (
      <button
        onClick={toggleTheme}
        className="font-sans text-sm text-text-secondary opacity-50 hover:opacity-100 transition-opacity duration-300 text-left md:text-right"
        style={{ letterSpacing: '0.15em' }}
      >
        {isDark ? 'LIGHT MODE' : 'DARK MODE'}
      </button>
    )
  }

  // Header split pill — md+ only
  return (
    <div
      className="hidden md:flex items-center rounded-full overflow-hidden border relative transition-all duration-300"
      style={{
        borderColor: isWhiteMode
          ? 'rgba(255,255,255,0.5)'
          : 'var(--text-secondary)',
        opacity: 0.7,
        height: '28px',
      }}
    >
      {/* Sliding indicator */}
      <div
        className="absolute top-0 bottom-0 w-1/2 rounded-full transition-all duration-300 ease-in-out"
        style={{
          background: isWhiteMode
            ? 'rgba(255,255,255,0.2)'
            : isDark
              ? 'var(--color-bg)'
              : '#f3efef',
          border: `1.5px solid ${isWhiteMode ? 'rgba(255,255,255,0.5)' : 'var(--text-secondary)'}`,
          transform: isDark ? 'translateX(0%)' : 'translateX(100%)',
        }}
      />

      {/* Dark half */}
      <button
        onClick={() => !isDark && toggleTheme()}
        className="relative z-10 flex items-center justify-center gap-1.5 px-3 h-full transition-all duration-300"
        style={{
          color: isWhiteMode
            ? 'white'
            : isDark
              ? 'var(--text-primary)'
              : 'var(--text-secondary)',
          opacity: isDark ? 1 : 0.45,
        }}
        aria-label="Dark mode"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
        <span className="font-sans text-xs" style={{ letterSpacing: '0.12em' }}>
          DARK
        </span>
      </button>

      {/* Light half */}
      <button
        onClick={() => isDark && toggleTheme()}
        className="relative z-10 flex items-center justify-center gap-1.5 px-3 h-full transition-all duration-300"
        style={{
          color: isWhiteMode
            ? 'white'
            : !isDark
              ? 'var(--text-primary)'
              : 'var(--text-secondary)',
          opacity: !isDark ? 1 : 0.45,
        }}
        aria-label="Light mode"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="5" />
          <line
            x1="12"
            y1="1"
            x2="12"
            y2="3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="21"
            x2="12"
            y2="23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4.22"
            y1="4.22"
            x2="5.64"
            y2="5.64"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="18.36"
            y1="18.36"
            x2="19.78"
            y2="19.78"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="1"
            y1="12"
            x2="3"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="21"
            y1="12"
            x2="23"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="4.22"
            y1="19.78"
            x2="5.64"
            y2="18.36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="18.36"
            y1="5.64"
            x2="19.78"
            y2="4.22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-sans text-xs" style={{ letterSpacing: '0.12em' }}>
          LIGHT
        </span>
      </button>
    </div>
  )
}
