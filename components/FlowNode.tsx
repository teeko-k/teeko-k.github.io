import { JSX } from "react/jsx-runtime"

interface FlowNodeInt {
  type?: string
  label?: string
  accent?: boolean
  className?: string
}

function FlowNode({ type = "rect", label, accent = false, className = "" }: FlowNodeInt): JSX.Element {
  if (type === "pill") {
    return (
      <div
        className={`flex items-center justify-center px-6 py-2 rounded-full border font-sans text-sm ${className}`}
        style={{
          borderColor: accent ? "var(--color-accent)" : "var(--text-secondary)",
          color: accent ? "var(--color-accent)" : "var(--text-primary)",
          minWidth: "120px",
          opacity: accent ? 1 : 0.7,
        }}
      >
        {label}
      </div>
    )
  }

  if (type === "diamond") {
    return (
      <div
        className={`relative flex items-center justify-center ${className}`}
        style={{ width: "120px", height: "120px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            border: `2px solid var(--color-accent)`,
            transform: "rotate(45deg)",
            borderRadius: "6px",
          }}
        />
        <span
          className="relative font-sans font-semibold text-lg"
          style={{ color: "var(--color-accent)", letterSpacing: "-0.02em" }}
        >
          {label}
        </span>
      </div>
    )
  }

  if (type === "circle") {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-full border-2 ${className}`}
        style={{
          borderColor: "var(--color-accent)",
          width: "100px",
          height: "100px",
          color: "var(--text-primary)",
        }}
      >
        {/* Home icon */}
        <svg
          width="22"
          height="22"
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
        <span
          className="font-sans text-xs mt-1"
          style={{ letterSpacing: "0.1em", opacity: 0.7 }}
        >
          Home
        </span>
      </div>
    )
  }

  // Default: rect
  return (
    <div
      className={`flex items-center justify-center px-6 py-3 border font-sans text-sm ${className}`}
      style={{
        borderColor: accent ? "var(--color-accent)" : "var(--text-secondary)",
        color: accent ? "var(--color-accent)" : "var(--text-primary)",
        minWidth: "160px",
        borderRadius: "8px",
        opacity: accent ? 1 : 0.7,
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </div>
  )
}

function Arrow({ dashed = false }) {
  return (
    <div className="flex flex-col items-center" style={{ height: "40px" }}>
      <div
        style={{
          width: "1px",
          flex: 1,
          borderLeft: dashed
            ? "1.5px dashed var(--color-accent)"
            : "1.5px solid var(--text-secondary)",
          opacity: dashed ? 1 : 0.4,
        }}
      />
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
        <path
          d="M1 1L5 5L9 1"
          stroke={dashed ? "var(--color-accent)" : "var(--text-secondary)"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={dashed ? 1 : 0.4}
        />
      </svg>
    </div>
  )
}

export { FlowNode, Arrow }
