import { timeSlots, type Professional, type TimeSlot } from '../../data/bookingData'
import { formatDate } from './formatters'

interface SelectTimeStepProps {
  professional: Professional
  onSelect: (slot: TimeSlot) => void
  onBack: () => void
}

export function SelectTimeStep({ professional, onSelect, onBack }: SelectTimeStepProps) {
  const slots = timeSlots.filter((s) => s.professionalId === professional.id)
  const dates = [...new Set(slots.map((s) => s.date))]

  return (
    <div>
      <button onClick={onBack} className="link-back">← Trocar profissional</button>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Escolha o horário</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginBottom: 20 }}>
        Disponibilidade de <strong style={{ color: 'var(--text-primary)' }}>{professional.name}</strong>
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {dates.map((date) => (
          <div key={date}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{formatDate(date)}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {slots
                .filter((s) => s.date === date)
                .map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => onSelect(slot)}
                    className="slot-button"
                  >
                    {slot.time}
                  </button>
                ))}
            </div>
          </div>
        ))}
        {dates.length === 0 && (
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Nenhum horário disponível no momento.</p>
        )}
      </div>
    </div>
  )
}
