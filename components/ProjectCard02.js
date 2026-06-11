"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false)
  const isEven = index % 2 === 0

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`fade-section group flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-16 items-center py-16 md:py-24 border-b`}
      style={{
        borderColor:
          "color-mix(in srgb, var(--text-secondary) 15%, transparent)",
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden flex-shrink-0 w-full md:w-[55%]"
        style={{
          background: project.accent,
          borderRadius: "12px",
          aspectRatio: "16/10",
        }}
      >
        {!imgError && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ filter: "brightness(0.85) saturate(0.9)" }}
            onError={() => setImgError(true)}
          />
        )}
        {/* Index + year */}
        <span
          className="absolute top-4 left-4 font-mono text-xs"
          style={{ letterSpacing: "0.2em", color: "#fff", opacity: 0.6 }}
        >
          {project.index}
        </span>
        <span
          className="absolute top-4 right-4 font-mono text-xs"
          style={{ letterSpacing: "0.2em", color: "#fff", opacity: 0.6 }}
        >
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Client */}
        <span
          className="font-mono text-xs text-text-secondary mb-4"
          style={{ letterSpacing: "0.25em", opacity: 0.5 }}
        >
          {project.client}
        </span>

        {/* Title */}
        <h3
          className="font-sans font-semibold text-3xl md:text-4xl text-text-primary group-hover:text-color-accent transition-colors duration-300 mb-4 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          {project.title}
        </h3>

        {/* Accent bar */}
        <div
          className="w-8 h-[3px] rounded-full mb-6 transition-all duration-500 group-hover:w-14"
          style={{ backgroundColor: project.accent }}
        />

        {/* Subtitle */}
        <p
          className="font-sans text-text-primary leading-relaxed mb-6 italic"
          style={{ fontSize: "16px", maxWidth: "380px" }}
        >
          {project.subtitle}
        </p>

        {/* Overview */}
        <p
          className="font-sans text-text-secondary leading-relaxed text-lg mb-8"
          style={{ maxWidth: "500px", opacity: 0.75 }}
        >
          {project.overview}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs text-text-secondary px-3 py-1 border rounded-full"
              style={{
                letterSpacing: "0.05em",
                borderColor:
                  "color-mix(in srgb, var(--text-secondary) 30%, transparent)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <span
            className="font-mono text-xs text-color-accent"
            style={{ letterSpacing: "0.2em" }}
          >
            View case study
          </span>
          <span className="block h-px bg-color-accent transition-all duration-500 group-hover:w-12 w-6" />
        </div>
      </div>
    </Link>
  )
}
