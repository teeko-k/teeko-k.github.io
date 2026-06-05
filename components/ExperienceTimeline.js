'use client'

const ExperienceArray = [
  {
    years: '2025 — Present',
    role: 'UX/Product Design Consultant',
    company: 'Freelance',
    detail: 'Ongoing freelance work with various clients',
    tag: 'Small businesses & startups',
    logo: '/logos/ea.png',
    current: true,
  },
  {
    years: '2021 — 2025',
    role: 'Senior UX Designer',
    company: 'Electronic Arts',
    detail: '4 years · Frostbite Engine',
    tag: 'AAA game tooling',
    logo: '/logos/ea.png',
    current: false,
  },
  {
    years: '2021',
    role: 'Senior Product Designer',
    company: 'Australia Post',
    detail: '3-month contract',
    tag: 'Contract',
    logo: '/logos/auspost.png',
    current: false,
  },
  {
    years: '2017 — 2021',
    role: 'Senior UX Designer',
    company: 'Officeworks',
    detail: '4 years',
    tag: 'Retail & logistics',
    logo: '/logos/officeworks.png',
    current: false,
  },
  {
    years: '2008 — 2017',
    role: 'UX Designer',
    company: 'ITWorx',
    detail: '9 years',
    tag: 'Enterprise software',
    logo: '/logos/itworx.png',
    current: false,
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="mt-14 mb-12">
      <span
        className="font-mono text-xs text-text-secondary block mb-8"
        style={{ letterSpacing: '0.25em', opacity: 0.45 }}
      >
        Experience
      </span>

      <div className="flex flex-col">
        {ExperienceArray.map((item, i, arr) => (
          <div
            key={i}
            className="grid gap-x-5"
            style={{ gridTemplateColumns: '90px 1px 1fr' }}
          >
            {/* Year */}
            <span
              className="font-mono text-xs text-text-secondary text-right pt-1 leading-relaxed"
              style={{ opacity: 0.45, letterSpacing: '0.08em' }}
            >
              {item.years}
            </span>

            {/* Line + dot */}
            <div className="flex flex-col items-center">
              <div
                className="rounded-full flex-shrink-0 mt-1.5"
                style={{
                  width: item.current ? '10px' : '8px',
                  height: item.current ? '10px' : '8px',
                  background: item.current
                    ? 'var(--color-accent)'
                    : 'var(--text-secondary)',
                }}
              />
              {i < arr.length - 1 && (
                <div
                  className="flex-1 mt-1.5"
                  style={{
                    width: '1px',
                    background: 'var(--text-secondary)',
                    opacity: 0.15,
                    minHeight: '40px',
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div className="pb-10">
              {/* Company logo */}
              {/* {item.logo && (
                <div
                  className="mb-3 flex items-center justify-center bg-white border"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderColor: 'rgba(25,25,25,0.08)',
                    borderRadius: '6px',
                    padding: '6px',
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.company}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                    }}
                  />
                </div>
              )} */}

              <p className="font-sans text-bold-ink font-medium text-base leading-snug">
                {item.role}
              </p>
              <p
                className="font-sans text-text-secondary text-sm font-light mt-0.5"
                style={{ opacity: 0.7 }}
              >
                {item.company}
              </p>
              <p
                className="font-mono text-xs text-text-secondary mt-1"
                style={{ letterSpacing: '0.08em', opacity: 0.4 }}
              >
                {item.detail}
              </p>
              <span
                className="inline-block font-mono text-xs px-2 py-0.5 mt-2 border"
                style={{
                  letterSpacing: '0.12em',
                  fontSize: '10px',
                  borderColor: item.current
                    ? 'var(--color-accent)'
                    : 'var(--text-secondary)',
                  color: item.current
                    ? 'var(--color-accent)'
                    : 'var(--text-secondary)',
                  opacity: item.current ? 1 : 0.6,
                }}
              >
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
