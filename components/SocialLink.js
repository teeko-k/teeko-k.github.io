export default function SocialLink({ social }) {
  const isMail = social.href.startsWith('mailto')

  return (
    <a
      href={social.href}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      className="flex items-center gap-2 text-text-secondary hover:text-color-accent transition-colors duration-300 font-sans text-sm font-light"
      style={{ letterSpacing: '0.12em' }}
    >
      {social.path && (
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="currentColor"
          viewBox={social.viewBox || undefined}
          aria-hidden="true"
        >
          {social.path}
        </svg>
      )}
      <span>{social.label}</span>
    </a>
  )
}
