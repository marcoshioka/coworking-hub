import { Card } from './Card'
import { weekdays, hours, idleHoursMatrix } from '../data/mockData'

function colorFor(value: number) {
  if (value < 20) return 'var(--seq-100)'
  if (value < 35) return 'var(--seq-250)'
  if (value < 55) return 'var(--seq-400)'
  if (value < 70) return 'var(--seq-550)'
  return 'var(--seq-700)'
}

function textColorFor(value: number) {
  return value < 35 ? 'var(--text-primary)' : '#ffffff'
}

export function IdleHoursWidget() {
  const opportunities: { day: string; hour: string; value: number }[] = []
  weekdays.forEach((day, dayIdx) => {
    hours.forEach((hour, hourIdx) => {
      const value = idleHoursMatrix[dayIdx][hourIdx]
      if (value < 25) opportunities.push({ day, hour, value })
    })
  })
  opportunities.sort((a, b) => a.value - b.value)

  return (
    <Card
      title="Horários ociosos"
      emoji="📉"
      span={8}
      subtitle="Ocupação média por dia e horário — use os horários mais claros para campanhas promocionais"
    >
      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `70px repeat(${hours.length}, 1fr)`, gap: 3, minWidth: 480 }}>
          <div />
          {hours.map((h) => (
            <div key={h} style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-muted)' }}>{h}</div>
          ))}
          {weekdays.map((day, dayIdx) => (
            <div key={day} style={{ display: 'contents' }}>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}>{day}</div>
              {hours.map((h, hourIdx) => {
                const value = idleHoursMatrix[dayIdx][hourIdx]
                return (
                  <div
                    key={h}
                    title={`${day} ${h}: ${value}% de ocupação`}
                    style={{
                      background: colorFor(value),
                      color: textColorFor(value),
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 600,
                      textAlign: 'center',
                      padding: '8px 0',
                    }}
                  >
                    {value}%
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
        <strong style={{ color: 'var(--text-primary)' }}>Oportunidades de promoção:</strong>{' '}
        {opportunities.slice(0, 3).map((o, i) => (
          <span key={`${o.day}-${o.hour}`}>
            {i > 0 && ', '}
            {o.day} às {o.hour} ({o.value}%)
          </span>
        ))}
      </div>
    </Card>
  )
}
