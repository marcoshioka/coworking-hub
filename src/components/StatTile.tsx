interface StatTileProps {
  value: string
  delta?: number
  deltaLabel?: string
}

export function StatTile({ value, delta, deltaLabel }: StatTileProps) {
  const isPositive = (delta ?? 0) >= 0
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
      <span style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.5px' }}>{value}</span>
      {delta !== undefined && (
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: isPositive ? 'var(--status-good)' : 'var(--status-critical)',
          }}
        >
          {isPositive ? '↑' : '↓'} {Math.abs(delta).toFixed(1)}% {deltaLabel}
        </span>
      )}
    </div>
  )
}
