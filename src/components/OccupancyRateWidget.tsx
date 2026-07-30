import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'
import { Card } from './Card'
import { rooms } from '../data/mockData'

export function OccupancyRateWidget() {
  const data = [...rooms]
    .sort((a, b) => b.monthlyOccupancyRate - a.monthlyOccupancyRate)
    .map((r) => ({ name: r.name, rate: r.monthlyOccupancyRate }))

  return (
    <Card title="Taxa de ocupação por sala" emoji="📈" span={4} subtitle="Média dos últimos 30 dias">
      <div style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 4, right: 24, bottom: 4, left: 4 }}>
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis
              type="category"
              dataKey="name"
              width={100}
              tick={{ fill: 'var(--text-secondary)', fontSize: 11 }}
              axisLine={{ stroke: 'var(--baseline)' }}
              tickLine={false}
            />
            <Tooltip
              formatter={(value) => [`${value}%`, 'Ocupação']}
              contentStyle={{
                background: 'var(--surface-1)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Bar dataKey="rate" radius={[0, 4, 4, 0]} maxBarSize={16}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.rate < 35 ? 'var(--status-warning)' : 'var(--series-1)'} />
              ))}
              <LabelList dataKey="rate" position="right" formatter={(v) => `${v}%`} style={{ fill: 'var(--text-secondary)', fontSize: 11 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
