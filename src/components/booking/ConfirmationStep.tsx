import { platformFeeRate, type Professional, type TimeSlot } from '../../data/bookingData'
import { firstName, formatCurrency, formatDate } from './formatters'

interface ConfirmationStepProps {
  professional: Professional
  slot: TimeSlot
  onNewBooking: () => void
}

export function ConfirmationStep({ professional, slot, onNewBooking }: ConfirmationStepProps) {
  const total = professional.hourlyRate
  const professionalAmount = Math.round(total * (1 - platformFeeRate) * 100) / 100

  return (
    <div style={{ maxWidth: 440 }}>
      <div className="card" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'var(--status-good)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
          }}
        >
          ✓
        </div>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>Reserva confirmada!</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
          Você vai ser atendido por <strong style={{ color: 'var(--text-primary)' }}>{professional.name}</strong> em{' '}
          {formatDate(slot.date)} às {slot.time}.
        </p>

        <div style={{ width: '100%', borderTop: '1px solid var(--gridline)', paddingTop: 12, fontSize: 13, color: 'var(--text-secondary)' }}>
          {formatCurrency(professionalAmount)} já foram repassados diretamente para a conta de {firstName(professional.name)}.
        </div>

        <button onClick={onNewBooking} className="pay-button" style={{ background: 'var(--text-primary)' }}>
          Fazer nova reserva
        </button>
      </div>
    </div>
  )
}
