"use client"

import { useEffect, useRef, useState } from "react"
import { socialLinks } from "../data/social"
import SocialLink from "./SocialLink"

export default function Contact() {
  const sectionRef = useRef(null)
  const [focused, setFocused] = useState(null)

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

  const inputStyle = (name) => ({
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === name ? "var(--text-primary)" : "var(--text-secondary)"}`,
    borderRadius: 0,
    color: "var(--text-secondary)",
    outline: "none",
    width: "100%",
    padding: "12px 0",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "15px",
    fontWeight: 300,
    transition: "border-color 0.3s ease",
    letterSpacing: "0.03em",
  })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pb-24 pt-0 px-8 md:px-12 xl:max-w-[1280px] xl:mx-auto relative"
    >
      {/* Bordered box */}
      <div
        className="fade-section p-8 md:p-16"
        style={{
          border: "1px solid var(--text-secondary)",
          opacity: 1,
          borderRadius: "2px",
          borderColor:
            "color-mix(in srgb, var(--text-secondary) 40%, transparent)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div>
            <span
              className="font-mono text-text-secondary text-sm"
              style={{ letterSpacing: "0.3em" }}
            >
              04 — Contact
            </span>
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

            {/* Social links */}
            <div className="flex flex-col flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((social) => (
                <SocialLink key={social.label} social={social} />
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <form
              className="space-y-8 max-w-md"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Message sent! (wire up your endpoint)")
              }}
            >
              <div>
                <label
                  className="font-mono text-text-secondary text-xs block mb-3"
                  style={{ letterSpacing: "0.2em", opacity: 0.5 }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  style={inputStyle("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label
                  className="font-mono text-text-secondary text-xs block mb-3"
                  style={{ letterSpacing: "0.2em", opacity: 0.5 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={inputStyle("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label
                  className="font-mono text-text-secondary text-xs block mb-3"
                  style={{ letterSpacing: "0.2em", opacity: 0.5 }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle("message"), resize: "none" }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-4 group transition-all duration-300"
              >
                <span
                  className="font-mono text-xs text-color-accent group-hover:text-color-accent transition-colors duration-300"
                  style={{ letterSpacing: "0.25em" }}
                >
                  Send message
                </span>
                <span className="block w-12 h-px bg-text-primary group-hover:w-20 group-hover:bg-color-accent transition-all duration-500" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
