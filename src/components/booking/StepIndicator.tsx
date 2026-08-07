const steps = [
  { key: 'professional', label: 'Profissional' },
  { key: 'time', label: 'Horário' },
  { key: 'payment', label: 'Pagamento' },
  { key: 'confirmation', label: 'Confirmação' },
] as const

export type BookingStep = (typeof steps)[number]['key']

interface StepIndicatorProps {
  current: BookingStep
}

export function StepIndicator({ current }: StepIndicatorProps) {
  const currentIndex = steps.findIndex((s) => s.key === current)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
      {steps.map((step, i) => {
        const isDone = i < currentIndex
        const isActive = i === currentIndex
        return (
          <div key={step.key} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: i < steps.length - 1 ? 1 : undefined }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 600,
                  flexShrink: 0,
                  background: isDone || isActive ? 'var(--series-1)' : 'var(--gridline)',
                  color: isDone || isActive ? '#fff' : 'var(--text-muted)',
                }}
              >
                {isDone ? '✓' : i + 1}
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{ height: 1, flex: 1, background: isDone ? 'var(--series-1)' : 'var(--gridline)' }} />
            )}
          </div>
        )
      })}
    </div>
  )
}
