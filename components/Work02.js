"use client"

import { useEffect, useRef } from "react"
import { projects } from "@/data/projects"
import ProjectCard02 from "./ProjectCard02"

export default function Work02() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.08 },
    )
    const section = sectionRef.current
    if (section) {
      section
        .querySelectorAll(".fade-section")
        .forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="pb-24 2xl:max-w-[70%] 2xl:mx-auto relative"
    >
      {/* Section header */}
      <div className="fade-section mb-4 px-8 md:px-12">
        <span
          className="font-mono text-text-secondary text-sm 2xl:text-lg"
          style={{ letterSpacing: "0.3em" }}
        >
          02 — Work
        </span>
        <h2
          className="font-sans font-semibold text-5xl 2xl:text-6xl mt-3 text-text-primary"
          style={{ letterSpacing: "-0.02em" }}
        >
          Featured Projects
        </h2>
      </div>

      {/* Cards */}
      <div className="px-8 md:px-12">
        {projects.map((project, i) => (
          <ProjectCard02 key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
