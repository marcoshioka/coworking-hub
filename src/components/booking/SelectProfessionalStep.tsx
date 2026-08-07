import { professionals, type Professional } from '../../data/bookingData'
import { formatCurrency } from './formatters'

interface SelectProfessionalStepProps {
  onSelect: (professional: Professional) => void
}

export function SelectProfessionalStep({ onSelect }: SelectProfessionalStepProps) {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Escolha o profissional</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginBottom: 20 }}>
        Selecione quem vai te atender no espaço.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
        {professionals.map((professional) => (
          <button
            key={professional.id}
            onClick={() => onSelect(professional)}
            className="card"
            style={{
              textAlign: 'left',
              cursor: 'pointer',
              font: 'inherit',
              color: 'inherit',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: professional.color,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {professional.initials}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {professional.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{professional.specialty}</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{professional.bio}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 'auto' }}>
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                ★ {professional.rating.toFixed(1)} · {professional.reviewCount} avaliações
              </span>
              <span style={{ fontWeight: 600, fontSize: 14 }}>{formatCurrency(professional.hourlyRate)}/h</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
