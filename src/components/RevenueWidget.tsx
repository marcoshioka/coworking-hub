import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { Card } from './Card'
import { StatTile } from './StatTile'
import { revenueThisMonth, revenueSummary } from '../data/mockData'

const currency = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

export function RevenueWidget() {
  const delta = ((revenueSummary.total - revenueSummary.previousMonthTotal) / revenueSummary.previousMonthTotal) * 100

  return (
    <Card title="Faturamento do mês" emoji="💰" span={6} subtitle="Projeção considerando os dias já fechados">
      <StatTile value={currency(revenueSummary.total)} delta={delta} deltaLabel="vs. mês anterior" />

      <div style={{ height: 90 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueThisMonth} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--series-1)" stopOpacity={0.25} />
                <stop offset="100%" stopColor="var(--series-1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" hide />
            <Tooltip
              formatter={(value) => [currency(Number(value)), 'Faturamento']}
              labelFormatter={(day) => `Dia ${day}`}
              contentStyle={{
                background: 'var(--surface-1)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--series-1)"
              strokeWidth={2}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {revenueSummary.breakdown.map((b) => (
          <div key={b.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
            <span style={{ color: 'var(--text-secondary)' }}>{b.label}</span>
            <span style={{ fontWeight: 600 }}>{currency(b.value)}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
