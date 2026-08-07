import { useState } from 'react'
import { platformFeeRate, type Professional, type TimeSlot } from '../../data/bookingData'
import { firstName, formatCurrency, formatDate } from './formatters'

interface PaymentStepProps {
  professional: Professional
  slot: TimeSlot
  onBack: () => void
  onPaid: () => void
}

export function PaymentStep({ professional, slot, onBack, onPaid }: PaymentStepProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const total = professional.hourlyRate
  const platformFee = Math.round(total * platformFeeRate * 100) / 100
  const professionalAmount = Math.round((total - platformFee) * 100) / 100

  function handlePay() {
    setIsProcessing(true)
    setTimeout(onPaid, 900)
  }

  return (
    <div>
      <button onClick={onBack} className="link-back" disabled={isProcessing}>← Trocar horário</button>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Confirme e pague</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginBottom: 20 }}>
        Revise os detalhes da reserva antes de pagar.
      </p>

      <div className="card" style={{ maxWidth: 440 }}>
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
          <div>
            <div style={{ fontWeight: 600 }}>{professional.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{professional.specialty}</div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--gridline)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span style={{ color: 'var(--text-secondary)' }}>Data</span>
            <span>{formatDate(slot.date)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span style={{ color: 'var(--text-secondary)' }}>Horário</span>
            <span>{slot.time} (1h)</span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--gridline)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span style={{ color: 'var(--text-secondary)' }}>Valor da sessão</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span style={{ color: 'var(--text-secondary)' }}>Taxa da plataforma ({Math.round(platformFeeRate * 100)}%)</span>
            <span>− {formatCurrency(platformFee)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600 }}>
            <span>Repassado direto a {firstName(professional.name)}</span>
            <span>{formatCurrency(professionalAmount)}</span>
          </div>
        </div>

        <div className="split-notice">
          🔒 O pagamento é processado com repasse automático: {formatCurrency(professionalAmount)} vão direto para a
          conta do profissional, sem passar pelo caixa do espaço.
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid var(--gridline)', paddingTop: 12 }}>
          <span style={{ fontWeight: 600 }}>Total a pagar</span>
          <span style={{ fontWeight: 700, fontSize: 22 }}>{formatCurrency(total)}</span>
        </div>

        <button onClick={handlePay} disabled={isProcessing} className="pay-button">
          {isProcessing ? 'Processando pagamento…' : `Pagar ${formatCurrency(total)}`}
        </button>
      </div>
    </div>
  )
}
