'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Header from './Header'

// ─────────────────────────────────────────────────────────────────────────────
// ProjectPage — renders a full case study from a project data object.
// Used by app/work/[slug]/page.js
// ─────────────────────────────────────────────────────────────────────────────
export default function ProjectPage({ project, prev, next }) {
  const bodyRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 },
    )
    if (bodyRef.current) {
      bodyRef.current
        .querySelectorAll('.fade-section')
        .forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])

  return (
    <main className="grain relative min-h-screen">
      {/*
        Original fixed header commented out — using shared `Header` component
        instead. The block below is preserved for reference.

      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 border-b bg-color-bg"
        style={{ borderColor: 'rgba(25,25,25,0.15)' }}
      >
        <Link
          href="/#work"
          className="flex items-center gap-3 text-text-secondary hover:text-accent-color transition-colors duration-300 font-sans text-md font-light group"
          style={{ letterSpacing: '0.05em' }}
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to work
        </Link>

        <span
          className="font-sans text-text-primary text-xs uppercase hidden md:block"
          style={{ letterSpacing: '0.2em' }}
        >
          Ahmed 'Tiko' K.
        </span>

        <Link
          href="/#contact"
          className="font-mono text-xs text-accent-color transition-colors duration-300 hidden md:block"
          style={{ letterSpacing: '0.2em' }}
        >
          Get in touch →
        </Link>
      </div>
      */}

      <Header isProjectPage={true} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div
        className="relative pb-0 overflow-hidden"
        style={{ minHeight: '70vh' }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover"
            style={{ filter: 'brightness(0.45) saturate(0.6)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${project.accent} 0%, transparent 100%)`,
            }}
          />
        </div>

        {/* Hero content */}
        <div
          className="relative z-10 px-8 md:px-12 pt-16 pb-24 max-w-6xl mx-auto flex flex-col justify-end h-full"
          style={{ minHeight: '65vh' }}
        >
          <div className="mt-auto">
            <Link
              href="/#work"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 font-sans text-sm font-light mb-4"
              style={{ letterSpacing: '0.05em' }}
            >
              <svg
                className="w-4 h-4 -translate-x-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to work
            </Link>

            <h1
              className="font-sans font-semibold text-white mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
              }}
            >
              {project.title}
            </h1>

            {/* Tags */}
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-sm px-3 py-1 border border-white rounded-full text-white"
                  style={{
                    letterSpacing: '0.15em',
                    fontSize: '10px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              className="font-display italic font-light text-white"
              style={{
                fontSize: 'clamp(1.1rem, 3vw, 2rem)',
                letterSpacing: '-0.01em',
              }}
            >
              {project.subtitle}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/50">
              {[
                { label: 'Client', value: project.client },
                { label: 'Role', value: project.role },
                { label: 'Duration', value: project.duration },
                { label: 'Year', value: project.year },
              ].map((m) => (
                <div key={m.label}>
                  <p
                    className="font-mono text-white text-sm mb-1"
                    style={{ letterSpacing: '0.2em', opacity: 0.4 }}
                  >
                    {m.label}
                  </p>
                  <p
                    className="font-sans text-white text-sm font-light"
                    style={{ letterSpacing: '0.03em' }}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div ref={bodyRef} className="px-8 md:px-12 pb-32 max-w-6xl mx-auto">
        {/* Overview */}
        <div
          className="fade-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-20 border-b"
          style={{ borderColor: 'rgba(25,25,25,0.08)' }}
        >
          <div className="md:col-span-3">
            <span
              className="font-mono text-text-secondary block"
              style={{ letterSpacing: '0.25em' }}
            >
              Overview
            </span>
          </div>
          <div className="md:col-span-9">
            <p
              className="font-display text-text-primary italic leading-snug"
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                letterSpacing: '-0.01em',
              }}
            >
              {project.overview}
            </p>
          </div>
        </div>

        {/* Challenge */}
        <div
          className="fade-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-20 border-b"
          style={{ borderColor: 'rgba(25,25,25,0.08)' }}
        >
          <div className="md:col-span-3">
            <span
              className="font-mono text-text-secondary block"
              style={{ letterSpacing: '0.25em' }}
            >
              The challenge
            </span>
          </div>
          <div className="md:col-span-9">
            <p
              className="font-sans text-text-secondary leading-relaxed"
              style={{ fontSize: '18px' }}
            >
              {project.challenge}
            </p>
          </div>
        </div>

        {/* First image (if exists) */}
        {project.images?.[0] && (
          <div className="fade-section py-12">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={project.images[0].src}
                alt={project.images[0].caption ?? project.title}
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.85) saturate(0.85)' }}
              />
            </div>
            {project.images[0].caption && (
              <p
                className="font-mono text-text-secondary text-sm mt-4"
                style={{ letterSpacing: '0.15em', opacity: 0.4 }}
              >
                ↑ {project.images[0].caption}
              </p>
            )}
          </div>
        )}

        {/* Approach */}
        {project.approach && (
          <div
            className="fade-section py-20 border-b"
            style={{ borderColor: 'rgba(25,25,25,0.08)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12">
              <div className="md:col-span-3">
                <span
                  className="font-mono text-text-secondary block"
                  style={{ letterSpacing: '0.25em' }}
                >
                  Approach
                </span>
              </div>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-px"
              style={{ background: 'rgba(25,25,25,0.08)' }}
            >
              {project.approach.map((item, i) => (
                <div key={i} className="bg-color-bg p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="font-mono text-sm text-text-secondary mt-1"
                      style={{ letterSpacing: '0.2em', opacity: 0.3 }}
                    >
                      0{i + 1}
                    </span>
                    <h3
                      className="font-sans text-xl font-light text-text-primary"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {item.step}
                    </h3>
                  </div>
                  <p className="font-sans text-text-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Second image (if exists) */}
        {project.images?.[1] && (
          <div className="fade-section py-12">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={project.images[1].src}
                alt={project.images[1].caption ?? project.title}
                fill
                className="object-cover"
                // style={{ filter: 'brightness(0.85) saturate(0.85)' }}
              />
            </div>
            {project.images[1].caption && (
              <p
                className="font-mono text-text-secondary text-sm mt-4"
                style={{ letterSpacing: '0.15em', opacity: 0.4 }}
              >
                ↑ {project.images[1].caption}
              </p>
            )}
          </div>
        )}

        {/* Third image (if exists) */}
        {project.images?.[2] && (
          <div className="fade-section py-12">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={project.images[2].src}
                alt={project.images[2].caption ?? project.title}
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.85) saturate(0.85)' }}
              />
            </div>
            {project.images[2].caption && (
              <p
                className="font-mono text-text-secondary text-sm mt-4"
                style={{ letterSpacing: '0.15em', opacity: 0.4 }}
              >
                ↑ {project.images[2].caption}
              </p>
            )}
          </div>
        )}

        {/* Fourth image (if exists) */}
        {project.images?.[3] && (
          <div className="fade-section py-12">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={project.images[3].src}
                alt={project.images[3].caption ?? project.title}
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.85) saturate(0.85)' }}
              />
            </div>
            {project.images[3].caption && (
              <p
                className="font-mono text-text-secondary text-sm mt-4"
                style={{ letterSpacing: '0.15em', opacity: 0.4 }}
              >
                ↑ {project.images[3].caption}
              </p>
            )}
          </div>
        )}

        {/* Outcome */}
        <div
          className="fade-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-20 border-b"
          style={{ borderColor: 'rgba(25,25,25,0.08)' }}
        >
          <div className="md:col-span-3">
            <span
              className="font-mono text-text-secondary block"
              style={{ letterSpacing: '0.25em' }}
            >
              Outcome
            </span>
          </div>
          <div className="md:col-span-9">
            <p
              className="font-display font-light text-text-primary italic leading-snug"
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                letterSpacing: '-0.01em',
              }}
            >
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Tools */}
        <div
          className="fade-section py-16 border-b"
          style={{ borderColor: 'rgba(25,25,25,0.08)' }}
        >
          <p
            className="font-mono text-accent-color mb-6 capitalize"
            style={{ letterSpacing: '0.25em' }}
          >
            Tools & methods
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="font-mono text-sm text-text-secondary px-4 py-2 border border-text-secondary"
                style={{
                  letterSpacing: '0.15em',
                  fontSize: '11px',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div
          className="fade-section grid grid-cols-1 md:grid-cols-2 gap-px mt-0"
          style={{ background: 'rgba(25,25,25,0.08)' }}
        >
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group bg-color-bg p-10 flex flex-col gap-2 hover:bg-white/20 transition-colors duration-300"
            >
              <span
                className="font-mono text-sm text-text-secondary"
                style={{ letterSpacing: '0.2em', opacity: 0.35 }}
              >
                ← Previous
              </span>
              <span
                className="font-sans text-2xl font-semibold text-text-primary group-hover:text-accent-color transition-colors duration-300"
                style={{ letterSpacing: '-0.01em' }}
              >
                {prev.title}
              </span>
            </Link>
          ) : (
            <div className="bg-color-bg p-10" />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group bg-color-bg p-10 flex flex-col gap-2 items-end text-right hover:bg-white/20 transition-colors duration-300"
            >
              <span
                className="font-mono text-sm text-text-secondary"
                style={{ letterSpacing: '0.2em', opacity: 0.35 }}
              >
                Next →
              </span>
              <span
                className="font-sans text-2xl font-semibold text-text-primary group-hover:text-accent-color transition-colors duration-300"
                style={{ letterSpacing: '-0.01em' }}
              >
                {next.title}
              </span>
            </Link>
          ) : (
            <Link
              href="/#work"
              className="group bg-color-bg p-10 flex flex-col gap-2 items-end text-right hover:bg-white/20 transition-colors duration-300"
            >
              <span
                className="font-mono text-sm text-text-secondary"
                style={{ letterSpacing: '0.2em', opacity: 0.35 }}
              >
                All work →
              </span>
              <span
                className="font-display text-2xl font-light text-text-primary group-hover:text-accent-color transition-colors duration-300"
                style={{ letterSpacing: '-0.01em' }}
              >
                Back to portfolio
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
