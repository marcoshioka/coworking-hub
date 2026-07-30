import { Card } from './Card'
import { StatTile } from './StatTile'
import { reviews, reviewsSummary } from '../data/mockData'

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} de 5 estrelas`} style={{ letterSpacing: 1 }}>
      <span style={{ color: 'var(--status-warning)' }}>{'★'.repeat(rating)}</span>
      <span style={{ color: 'var(--text-muted)' }}>{'☆'.repeat(5 - rating)}</span>
    </span>
  )
}

export function ReviewsWidget() {
  return (
    <Card title="Avaliações dos clientes" emoji="⭐" span={4} subtitle={`${reviewsSummary.total} avaliações no total`}>
      <StatTile value={reviewsSummary.average.toFixed(1)} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {reviews.map((r) => (
          <div key={r.id} style={{ fontSize: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600 }}>{r.client}</span>
              <Stars rating={r.rating} />
            </div>
            <div style={{ color: 'var(--text-secondary)', marginTop: 2 }}>{r.comment}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
