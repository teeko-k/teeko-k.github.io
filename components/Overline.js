export default function Overline({ sectionTitle }) {
  return (
    <div className="reveal-text reveal-text-delay-1 flex md:items-center gap-4 mb-6">
      {/* <span className="hidden md:visible w-8 h-px bg-text-secondary" /> */}
      <span
        className="font-sans font-bold text-text-secondary text-sm 2xl:text-lg"
        style={{ letterSpacing: "0.3em" }}
      >
        {sectionTitle}
      </span>
      {/* <span className="w-8 h-px bg-text-secondary" /> */}
    </div>
  )
}
