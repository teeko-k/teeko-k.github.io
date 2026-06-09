'use client'

const statsData = [
  { value: 'Curiosity', label: 'Asking better questions' },
  { value: 'Empathy', label: 'Understanding people deeply' },
  {
    value: 'Clarity',
    label: 'Making complex things simple',
  },
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
            className="font-display text-3xl font-light text-text-primary"
            style={{ letterSpacing: '-0.02em' }}
          >
            {stat.value}
          </p>
          <p
            className="font-mono text-text-secondary text-xs mt-1"
            style={{ letterSpacing: '0.12em', opacity: 0.5 }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
