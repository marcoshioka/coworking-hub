import { professionals } from '../../data/bookingData'
import { clientsSummary, reviews, reviewsSummary, rooms } from '../../data/mockData'
import { formatCurrency } from '../booking/formatters'

interface LandingPageProps {
  onNavigate: (view: 'booking' | 'dashboard') => void
}

const steps = [
  { emoji: '🧑‍⚕️', title: 'Escolha o profissional', text: 'Veja especialidade, avaliações e valor da hora antes de decidir.' },
  { emoji: '🗓️', title: 'Escolha o horário', text: 'Disponibilidade em tempo real, sem trocar mensagens pra confirmar.' },
  { emoji: '💳', title: 'Pague e pronto', text: 'O valor vai direto pra conta do profissional. Reserva confirmada na hora.' },
]

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="landing">
      <section className="hero">
        <h1>Seu espaço, seus profissionais, um agendamento só.</h1>
        <p>
          Encontre o profissional certo, escolha o melhor horário e pague com o valor indo direto
          pra conta de quem te atendeu — sem burocracia.
        </p>
        <div className="hero-actions">
          <button className="pay-button" style={{ width: 'auto' }} onClick={() => onNavigate('booking')}>
            Agendar horário
          </button>
          <button className="link-back" style={{ marginBottom: 0, fontSize: 13 }} onClick={() => onNavigate('dashboard')}>
            Ver painel do espaço →
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <span className="hero-stat-value">{clientsSummary.activeCount}</span>
            <span className="hero-stat-label">clientes ativos</span>
          </div>
          <div>
            <span className="hero-stat-value">{professionals.length}</span>
            <span className="hero-stat-label">profissionais parceiros</span>
          </div>
          <div>
            <span className="hero-stat-value">{rooms.length}</span>
            <span className="hero-stat-label">salas e espaços</span>
          </div>
          <div>
            <span className="hero-stat-value">★ {reviewsSummary.average.toFixed(1)}</span>
            <span className="hero-stat-label">avaliação média ({reviewsSummary.total})</span>
          </div>
        </div>
      </section>

      <section className="landing-section">
        <h2>Como funciona</h2>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={step.title} className="card">
              <div className="step-number">{i + 1}</div>
              <div className="step-emoji">{step.emoji}</div>
              <div style={{ fontWeight: 600 }}>{step.title}</div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
          <h2>Profissionais em destaque</h2>
          <button className="link-back" style={{ marginBottom: 0 }} onClick={() => onNavigate('booking')}>
            Ver todos os horários →
          </button>
        </div>
        <div className="professionals-grid">
          {professionals.map((professional) => (
            <button key={professional.id} className="card" style={{ textAlign: 'left', cursor: 'pointer', font: 'inherit', color: 'inherit' }} onClick={() => onNavigate('booking')}>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 'auto' }}>
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>★ {professional.rating.toFixed(1)}</span>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{formatCurrency(professional.hourlyRate)}/h</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <h2>O que dizem os clientes</h2>
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="card">
              <span style={{ color: 'var(--status-warning)', letterSpacing: 1 }}>
                {'★'.repeat(review.rating)}
                <span style={{ color: 'var(--text-muted)' }}>{'☆'.repeat(5 - review.rating)}</span>
              </span>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>“{review.comment}”</p>
              <span style={{ fontSize: 12, fontWeight: 600 }}>{review.client}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Pronto pra reservar seu horário?</h2>
          <p>Leva menos de um minuto — escolha o profissional, o horário e pague na hora.</p>
        </div>
        <button className="pay-button" style={{ width: 'auto' }} onClick={() => onNavigate('booking')}>
          Agendar agora
        </button>
      </section>
    </div>
  )
}
