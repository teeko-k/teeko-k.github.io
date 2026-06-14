"use client"

import { useEffect, useRef } from "react"
import { socialLinks } from "@/data/social"
import SocialLink from "@/components/SocialLink"
import Overline from "@/components/Overline"
import BorderButton from "@/components/BorderButton"

const EmailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      const els = section.querySelectorAll(".fade-section")
      els.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pb-24 pt-0 px-8 md:px-12 2xl:max-w-[70%] 2xl:mx-auto relative"
    >
      {/* Bordered box */}
      <div
        className="fade-section p-8 md:p-16"
        style={{
          border: "1px solid var(--text-secondary)",
          opacity: 1,
          borderRadius: "20px",
          borderColor:
            "color-mix(in srgb, var(--text-secondary) 40%, transparent)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div>
            <Overline sectionTitle={"04. Contact"} />
            <h2
              className="font-sans font-semibold text-5xl 2xl:text-6xl mt-4 mb-8 text-text-primary leading-tight"
              style={{ letterSpacing: "-0.01em" }}
            >
              Get in touch
            </h2>

            <p
              className="font-sans text-text-secondary font-light leading-relaxed mb-10"
              style={{ fontSize: "18px", maxWidth: "380px" }}
            >
              If you're working on an interesting problem, building something
              new, or simply want to connect, I'd be happy to hear from you.
            </p>

            <BorderButton
              href="mailto:a.taher.kassem@gmail.com"
              label="Send me an email"
              icon={<EmailIcon />}
            />
          </div>

          {/* Right — Socials */}
          <div className="flex flex-col justify-center">
            <span
              className="font-mono text-text-secondary text-xs block mb-6"
              style={{ letterSpacing: "0.2em", opacity: 0.5 }}
            >
              Find me elsewhere
            </span>
            <div className="flex flex-col flex-wrap gap-y-4">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} social={social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
