export default function Footer() {
  return (
    <footer
      className="py-10 px-8 md:px-12 border-t flex flex-col md:flex-row items-center justify-center gap-4"
      style={{ borderColor: 'rgba(60,60,60,0.2)' }}
    >
      <p
        className="font-mono text-bold-ink text-xs"
        style={{ letterSpacing: '0.15em', opacity: 0.7 }}
      >
        © 2026 Ahmed Kassem. All rights reserved.
      </p>
      {/* <div className="flex items-center gap-8">
        <a
          href="https://www.linkedin.com/in/ahmedtkassem"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-dimmed-ink text-xs hover:text-accent-color transition-colors duration-300"
          style={{ letterSpacing: '0.15em', opacity: 0.4 }}
        >
          Linkedin
        </a>
        <span
          className="font-mono text-dimmed-ink text-xs"
          style={{ opacity: 0.15 }}
        >
          —
        </span>
        <a
          href="https://www.artstation.com/ahmedtkassem"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-dimmed-ink text-xs hover:text-accent-color transition-colors duration-300"
          style={{ letterSpacing: '0.15em', opacity: 0.4 }}
        >
          Artstation
        </a>
      </div> */}
    </footer>
  )
}
