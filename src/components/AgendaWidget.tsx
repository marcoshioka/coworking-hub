import { Card } from './Card'
import { agendaToday } from '../data/mockData'

export function AgendaWidget() {
  return (
    <Card title="Agenda consolidada" emoji="📅" span={6} subtitle="Todos os agendamentos de hoje, por horário">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {agendaToday.map((item, i) => (
          <div
            key={item.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '52px 1fr',
              gap: 12,
              padding: '8px 0',
              borderTop: i === 0 ? undefined : '1px solid var(--gridline)',
            }}
          >
            <div style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{item.time}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.client} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>· {item.room}</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{item.type}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
