import Image from "next/image"

// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyImage — renders a single case study image with optional caption.
// Pass `dim` to apply the slightly darkened/desaturated treatment used for
// the first image after the Challenge section.
// ─────────────────────────────────────────────────────────────────────────────
export default function CaseStudyImage({ image, alt, dim = false }) {
  return (
    <div className="fade-section py-12">
      <div
        className="relative rounded-xl overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={image.src}
          alt={image.caption ?? alt}
          fill
          className="object-cover"
          style={
            dim ? { filter: "brightness(0.85) saturate(0.85)" } : undefined
          }
        />
      </div>
      {image.caption && (
        <p
          className="font-sans italic text-text-secondary text-sm mt-4"
          style={{ letterSpacing: "0.15em", opacity: 0.4 }}
        >
          ↑ {image.caption}
        </p>
      )}
    </div>
  )
}
