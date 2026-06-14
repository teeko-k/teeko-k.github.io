"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { FlowNode, Arrow } from "@/components/FlowNode"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Overline from "@/components/Overline"

export default function NotFound() {
  return (
    <main>
      <Header />

      {/* Content */}
      <div
        className="min-h-screen bg-color-bg flex flex-col"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-48 2xl:max-w-[70%] mx-auto w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left — text */}
            <div>
              {/* Overline */}
              <Overline sectionTitle={"404 - Page Not Found"} />

              {/* Big 404 */}
              <p
                className="font-mono font-light text-text-primary text-9xl leading-none mb-8 select-none"
                style={{
                  letterSpacing: "-0.04em",
                  lineHeight: 0.85,
                }}
              >
                404
              </p>

              {/* Heading */}
              <h1
                className="font-sans font-semibold text-text-primary text-4xl leading-tight mb-6 -mt-4 md:-mt-8"
                style={{
                  letterSpacing: "-0.02em",
                }}
              >
                Looks like things got a little{" "}
                <span
                  className="font-display text-6xl italic"
                  style={{
                    color: "var(--color-accent)",
                    fontWeight: 400,
                  }}
                >
                  complicated.
                </span>
              </h1>

              {/* Body */}
              <p
                className="font-sans text-text-secondary font-light leading-relaxed mb-4"
                style={{ fontSize: "16px", maxWidth: "380px", opacity: 0.75 }}
              >
                The page you're looking for doesn't exist, has moved, or was
                never here to begin with.
              </p>
              <p
                className="font-sans text-text-secondary font-light leading-relaxed mb-12"
                style={{ fontSize: "16px", maxWidth: "380px", opacity: 0.75 }}
              >
                Let's make things simple again.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-16">
                <Link
                  href="/"
                  className="flex items-center gap-3 border px-6 py-3 font-sans text-sm font-medium transition-all duration-300 hover:border-color-accent hover:text-color-accent"
                  style={{
                    borderColor: "var(--text-secondary)",
                    color: "var(--text-primary)",
                    borderRadius: "6px",
                    letterSpacing: "0.08em",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Back Home
                </Link>
                <Link
                  href="/#work"
                  className="flex items-center gap-3 border px-6 py-3 font-sans text-sm font-medium transition-all duration-300 hover:border-color-accent hover:text-color-accent"
                  style={{
                    borderColor: "var(--text-secondary)",
                    color: "var(--text-primary)",
                    borderRadius: "6px",
                    letterSpacing: "0.08em",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                  </svg>
                  View Projects
                </Link>
              </div>

              {/* Go back */}
              {/* <button
                onClick={() => router.back()}
                className="flex items-center gap-2 font-sans text-sm text-text-secondary opacity-40 hover:opacity-80 transition-opacity duration-300"
                style={{ letterSpacing: "0.1em" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Go back
              </button> */}
            </div>

            {/* Right — flowchart (hidden on mobile) */}
            <div className="hidden md:flex flex-col items-center">
              <FlowNode type="pill" label="Start" />
              <Arrow />
              <FlowNode type="rect" label="Open Link" />
              <Arrow />
              <FlowNode type="diamond" label="404" accent />
              <Arrow dashed />
              <FlowNode type="rect" label="Make it Simple" accent />
              <Arrow dashed />
              <FlowNode type="circle" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
