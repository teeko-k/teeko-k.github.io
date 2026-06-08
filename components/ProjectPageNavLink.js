'use client'

import Link from 'next/link'

export default function ProjectPageNavLink({
  type,
  project,
  fallbackHref = '/#work',
}) {
  const isPrev = type === 'prev'
  const hasProject = Boolean(project)

  if (isPrev && !hasProject) {
    return <div className="bg-color-bg p-10" />
  }

  return (
    <Link
      href={hasProject ? `/work/${project.slug}` : fallbackHref}
      className={`group bg-color-bg p-10 flex flex-col gap-2 ${!isPrev ? 'items-end text-right' : ''} hover:bg-white/20 transition-colors duration-300 border border-text-secondary`}
      style={{ borderOpacity: 0.12 }}
    >
      <span
        className="font-mono text-sm text-text-secondary"
        style={{ letterSpacing: '0.2em', opacity: 0.35 }}
      >
        {hasProject ? (isPrev ? '← Previous' : 'Next →') : 'All work →'}
      </span>
      <span
        className={`transition-colors duration-300 ${hasProject ? 'font-sans text-2xl font-semibold text-text-primary group-hover:text-accent-color' : 'font-display text-2xl font-light text-text-primary group-hover:text-accent-color'}`}
        style={{ letterSpacing: '-0.01em' }}
      >
        {hasProject ? project.title : 'Back to portfolio'}
      </span>
    </Link>
  )
}
