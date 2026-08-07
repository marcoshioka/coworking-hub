import { useState } from 'react'
import type { Professional, TimeSlot } from '../../data/bookingData'
import { StepIndicator, type BookingStep } from './StepIndicator'
import { SelectProfessionalStep } from './SelectProfessionalStep'
import { SelectTimeStep } from './SelectTimeStep'
import { PaymentStep } from './PaymentStep'
import { ConfirmationStep } from './ConfirmationStep'

export function BookingFlow() {
  const [step, setStep] = useState<BookingStep>('professional')
  const [professional, setProfessional] = useState<Professional | null>(null)
  const [slot, setSlot] = useState<TimeSlot | null>(null)

  function reset() {
    setProfessional(null)
    setSlot(null)
    setStep('professional')
  }

  return (
    <div className="booking-flow">
      <StepIndicator current={step} />

      {step === 'professional' && (
        <SelectProfessionalStep
          onSelect={(p) => {
            setProfessional(p)
            setStep('time')
          }}
        />
      )}

      {step === 'time' && professional && (
        <SelectTimeStep
          professional={professional}
          onBack={() => setStep('professional')}
          onSelect={(s) => {
            setSlot(s)
            setStep('payment')
          }}
        />
      )}

      {step === 'payment' && professional && slot && (
        <PaymentStep
          professional={professional}
          slot={slot}
          onBack={() => setStep('time')}
          onPaid={() => setStep('confirmation')}
        />
      )}

      {step === 'confirmation' && professional && slot && (
        <ConfirmationStep professional={professional} slot={slot} onNewBooking={reset} />
      )}
    </div>
  )
}
