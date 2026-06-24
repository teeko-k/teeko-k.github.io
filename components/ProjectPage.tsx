"use client"

import { useEffect, useRef } from "react"
import Header from "./Header"
import CaseStudyOutline from "@/components/CaseStudyOutline"
import ProjectPageNavLink from "@/components/ProjectPageNavLink"
import ProjectHeroSection from "@/components/ProjectHeroSection"
import CaseStudyImage from "@/components/CaseStudyImage"

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
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.08 },
    )
    if (bodyRef.current) {
      bodyRef.current
        .querySelectorAll(".fade-section")
        .forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <Header isProjectPage={true} />
      <ProjectHeroSection project={project} />

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="px-8 md:px-12 2xl:max-w-[70%] 2xl:mx-auto pb-32">
        <div
          className="xl:grid xl:gap-16"
          style={{ gridTemplateColumns: "160px 1fr" }}
        >
          {/* Outline — left column, xl+ only */}
          <CaseStudyOutline />
          {/* Main content — right column */}
          <div ref={bodyRef}>
            {/* Overview */}
            <div
              id="cs-overview"
              className="fade-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-20 border-b"
              style={{ borderColor: "rgba(25,25,25,0.08)" }}
            >
              <div className="md:col-span-3">
                <span
                  className="font-mono text-text-secondary block"
                  style={{ letterSpacing: "0.25em" }}
                >
                  Overview
                </span>
              </div>
              <div className="md:col-span-9">
                <p
                  className="font-display text-text-primary italic leading-snug"
                  style={{
                    fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.overview}
                </p>
              </div>
            </div>

            {/* Challenge */}
            <div
              id="cs-challenge"
              className="fade-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-20 border-b"
              style={{ borderColor: "rgba(25,25,25,0.08)" }}
            >
              <div className="md:col-span-3">
                <span
                  className="font-mono text-text-secondary block"
                  style={{ letterSpacing: "0.25em" }}
                >
                  The challenge
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="font-sans text-text-secondary leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* First image (if exists) */}
            {project.images?.[0] && (
              <CaseStudyImage
                image={project.images[0]}
                alt={project.title}
                dim
              />
            )}

            {/* Approach */}
            {project.approach && (
              <div
                id="cs-approach"
                className="fade-section py-20 border-b"
                style={{ borderColor: "rgba(25,25,25,0.08)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12">
                  <div className="md:col-span-3">
                    <span
                      className="font-mono text-text-secondary block"
                      style={{ letterSpacing: "0.25em" }}
                    >
                      Approach
                    </span>
                  </div>
                </div>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-px"
                  style={{ background: "rgba(25,25,25,0.08)" }}
                >
                  {project.approach.map((item, i) => (
                    <div key={i} className="bg-color-bg p-8 md:p-10">
                      <div className="flex items-start gap-4 mb-4">
                        <span
                          className="font-mono text-sm text-text-secondary mt-1"
                          style={{ letterSpacing: "0.2em", opacity: 0.3 }}
                        >
                          0{i + 1}
                        </span>
                        <h3
                          className="font-sans text-xl font-light text-text-primary"
                          style={{ letterSpacing: "-0.01em" }}
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

            {/* Remaining images — render before Outcome */}
            {project.images?.slice(1).map((image, i) => (
              <CaseStudyImage key={i} image={image} alt={project.title} />
            ))}

            {/* Outcome */}
            <div
              id="cs-outcome"
              className="fade-section grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-20 border-b"
              style={{ borderColor: "rgba(25,25,25,0.08)" }}
            >
              <div className="md:col-span-3">
                <span
                  className="font-mono text-text-secondary block"
                  style={{ letterSpacing: "0.25em" }}
                >
                  Outcome
                </span>
              </div>
              <div className="md:col-span-9">
                <p
                  className="font-display font-light text-text-primary italic leading-snug"
                  style={{
                    fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Tools */}
            <div
              id="cs-tools"
              className="fade-section py-16 border-b"
              style={{ borderColor: "rgba(25,25,25,0.08)" }}
            >
              <p
                className="font-mono text-accent-color mb-6 capitalize"
                style={{ letterSpacing: "0.25em" }}
              >
                Tools & methods
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-sm text-text-secondary px-4 py-2 border border-text-secondary"
                    style={{
                      letterSpacing: "0.15em",
                      fontSize: "11px",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="fade-section grid grid-cols-1 md:grid-cols-2 gap-px mt-0">
              <ProjectPageNavLink type="prev" project={prev} />
              <ProjectPageNavLink
                type="next"
                project={next}
                fallbackHref="/#work"
              />
            </div>
          </div>
          {/* end main content */}
        </div>
        {/* end grid */}
      </div>
      {/* end outer px wrapper */}
    </main>
  )
}
