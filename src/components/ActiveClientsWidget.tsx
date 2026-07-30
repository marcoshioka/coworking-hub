import { Card } from './Card'
import { StatTile } from './StatTile'
import { clientsSummary } from '../data/mockData'

export function ActiveClientsWidget() {
  const delta = ((clientsSummary.activeCount - clientsSummary.previousMonthCount) / clientsSummary.previousMonthCount) * 100
  const max = Math.max(...clientsSummary.byPlan.map((p) => p.value))
  const colors = ['var(--series-1)', 'var(--series-3)', 'var(--series-4)']

  return (
    <Card title="Clientes ativos" emoji="👥" span={4} subtitle="Clientes com uso registrado nos últimos 30 dias">
      <StatTile value={String(clientsSummary.activeCount)} delta={delta} deltaLabel="vs. mês anterior" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {clientsSummary.byPlan.map((plan, i) => (
          <div key={plan.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
              <span style={{ color: 'var(--text-secondary)' }}>{plan.label}</span>
              <span style={{ fontWeight: 600 }}>{plan.value}</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: 'var(--gridline)', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${(plan.value / max) * 100}%`,
                  height: '100%',
                  borderRadius: 3,
                  background: colors[i % colors.length],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
