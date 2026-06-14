"use client"

import Link from "next/link"

// Sweep span — slides in from left on hover
const Sweep = () => (
  <span
    aria-hidden="true"
    className="sweep-fill absolute inset-0 -translate-x-full transition-transform duration-300"
    style={{
      background: "var(--color-accent)",
      borderRadius: "inherit",
      transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
    }}
  />
)

export default function BorderButton({
  href,
  onClick,
  label,
  icon,
  external = false,
}) {
  const base = `sweep-btn group relative inline-flex items-center overflow-hidden border px-6 py-3 font-sans text-sm font-medium`
  const style = {
    borderColor: "var(--text-secondary)",
    color: "var(--text-primary)",
    borderRadius: "6px",
    letterSpacing: "0.08em",
  }

  const content = (
    <>
      <Sweep />
      <span className="sweep-content relative z-10 flex items-center gap-3">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{label}</span>
      </span>
    </>
  )

  if (href?.startsWith("mailto:") || external) {
    return (
      <a
        href={href}
        className={base}
        style={style}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={base} style={style}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={base} style={style}>
      {content}
    </button>
  )
}
