'use client'

const statsData = [
  { value: '15+', label: 'Years' },
  { value: '200+', label: 'Projects' },
  { value: '2', label: 'Continents' },
]

export default function StatsSection() {
  return (
    <div
      className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t"
      style={{ borderColor: 'rgba(113, 113, 113, 0.3)' }}
    >
      {statsData.map((stat) => (
        <div key={stat.label}>
          <p
            className="font-display text-3xl font-light text-dimmed-ink"
            style={{ letterSpacing: '-0.02em' }}
          >
            {stat.value}
          </p>
          <p
            className="font-mono text-dimmed-ink text-xs mt-1"
            style={{ letterSpacing: '0.12em', opacity: 0.5 }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
