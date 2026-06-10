export default function Footer() {
  return (
    <footer
      className="py-10 px-8 md:px-12 border-t flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderColor: "rgba(60,60,60,0.2)" }}
    >
      <p
        className="font-mono text-text-secondary text-sm"
        style={{ letterSpacing: "0.15em", opacity: 0.7 }}
      >
        © 2026 Ahmed Kassem. All rights reserved.
      </p>
      <p
        className="font-mono text-text-secondary text-sm"
        style={{ letterSpacing: "0.15em", opacity: 0.7 }}
      >
        Developed with ❤️ in Next.js
      </p>
    </footer>
  )
}
