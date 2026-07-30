import { Card } from './Card'
import { StatTile } from './StatTile'
import { workstations, workstationsSummary } from '../data/mockData'

export function WorkstationsWidget() {
  return (
    <Card
      title="Estações de trabalho disponíveis"
      emoji="🖥️"
      span={6}
      subtitle="Mapa de assentos da área de hot desk"
    >
      <StatTile value={`${workstationsSummary.available} de ${workstationsSummary.total}`} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 6,
        }}
      >
        {workstations.map((w) => {
          const isOccupied = w.status === 'ocupada'
          return (
            <div
              key={w.id}
              title={isOccupied ? `Estação ${w.number} · ocupada por ${w.occupant}` : `Estação ${w.number} · livre`}
              style={{
                aspectRatio: '1 / 1',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                fontWeight: 600,
                fontVariantNumeric: 'tabular-nums',
                background: isOccupied ? 'var(--series-1)' : 'transparent',
                color: isOccupied ? '#ffffff' : 'var(--text-secondary)',
                border: isOccupied ? '2px solid var(--series-1)' : '2px solid var(--status-good)',
              }}
            >
              {w.number}
            </div>
          )
        })}
      </div>

      <div style={{ display: 'flex', gap: 16, fontSize: 12, color: 'var(--text-secondary)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, border: '2px solid var(--status-good)', display: 'inline-block' }} />
          Livre
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: 'var(--series-1)', display: 'inline-block' }} />
          Ocupada
        </span>
      </div>
    </Card>
  )
}
