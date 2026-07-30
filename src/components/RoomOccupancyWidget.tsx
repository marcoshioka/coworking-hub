import { Card } from './Card'
import { rooms, type RoomStatus } from '../data/mockData'

const statusConfig: Record<RoomStatus, { label: string; color: string }> = {
  ocupada: { label: 'Ocupada', color: 'var(--series-1)' },
  reservada: { label: 'Reservada', color: 'var(--status-warning)' },
  livre: { label: 'Livre', color: 'var(--status-good)' },
}

export function RoomOccupancyWidget() {
  const occupied = rooms.filter((r) => r.status === 'ocupada').length

  return (
    <Card title="Ocupação das salas em tempo real" emoji="📊" span={6} subtitle={`${occupied} de ${rooms.length} salas em uso agora`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rooms.map((room) => {
          const cfg = statusConfig[room.status]
          return (
            <div
              key={room.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 10px',
                borderRadius: 8,
                border: '1px solid var(--border)',
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                <span
                  aria-hidden
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: cfg.color,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>{room.name}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>· cap. {room.capacity}</span>
              </div>
              <div style={{ textAlign: 'right', fontSize: 12, color: 'var(--text-secondary)', minWidth: 0 }}>
                <div style={{ fontWeight: 600, color: cfg.color }}>{cfg.label}</div>
                {room.occupant && (
                  <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 220 }}>
                    {room.occupant}{room.until ? ` · até ${room.until}` : ''}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
