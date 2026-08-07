import './landing.css'
import { professionals } from '../../data/bookingData'
import { clientsSummary, reviews, reviewsSummary, rooms } from '../../data/mockData'
import { formatCurrency } from '../booking/formatters'

type View = 'home' | 'dashboard' | 'booking'

interface LandingPageProps {
  view: View
  onNavigate: (view: View) => void
}

const steps = [
  { emoji: '🧑‍⚕️', title: 'Escolha o profissional', text: 'Veja especialidade, avaliações e valor da hora antes de decidir.' },
  { emoji: '🗓️', title: 'Escolha o horário', text: 'Disponibilidade em tempo real, sem trocar mensagens pra confirmar.' },
  { emoji: '💳', title: 'Pague e pronto', text: 'O valor vai direto pra conta do profissional. Reserva confirmada na hora.' },
]

export function LandingPage({ view, onNavigate }: LandingPageProps) {
  return (
    <div className="landing-modern">
      <section className="modern-hero">
        <div className="section-inner">
          <nav className="modern-nav">
            <div className="modern-logo">
              <span className="modern-logo-mark" />
              Focus Business Hub
            </div>
            <div className="modern-tabs">
              <button className={view === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>
                Início
              </button>
              <button className={view === 'dashboard' ? 'active' : ''} onClick={() => onNavigate('dashboard')}>
                Painel geral
              </button>
              <button className={view === 'booking' ? 'active' : ''} onClick={() => onNavigate('booking')}>
                Agendamento
              </button>
            </div>
          </nav>

          <div className="hero-body">
            <span className="hero-eyebrow">💸 Repasse direto ao profissional</span>
            <h1>
              Seu espaço, seus profissionais, <span className="grad">um agendamento só.</span>
            </h1>
            <p>
              Encontre o profissional certo, escolha o melhor horário e pague com o valor indo direto
              pra conta de quem te atendeu — sem burocracia.
            </p>
            <div className="hero-actions">
              <button className="btn-gradient" onClick={() => onNavigate('booking')}>
                Agendar horário
              </button>
              <button className="btn-ghost" onClick={() => onNavigate('dashboard')}>
                Ver painel do espaço
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
          </div>
        </div>
      </section>

      <section className="modern-section">
        <div className="section-inner">
          <div className="modern-section-head">
            <div>
              <span className="eyebrow">Simples assim</span>
              <h2>Como funciona</h2>
            </div>
          </div>
          <div className="steps-row">
            {steps.map((step, i) => (
              <div key={step.title} className="step-card">
                <span className="step-index">{i + 1}</span>
                <div className="step-badge">{step.emoji}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modern-section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="modern-section-head">
            <div>
              <span className="eyebrow">Time selecionado</span>
              <h2>Profissionais em destaque</h2>
            </div>
            <button className="link-more" onClick={() => onNavigate('booking')}>
              Ver todos os horários →
            </button>
          </div>
          <div className="pros-grid">
            {professionals.map((professional) => (
              <button key={professional.id} className="pro-card" onClick={() => onNavigate('booking')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="pro-avatar" style={{ background: professional.color }}>
                    {professional.initials}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div className="pro-card-name">{professional.name}</div>
                    <div className="pro-card-specialty">{professional.specialty}</div>
                  </div>
                </div>
                <div className="pro-card-footer">
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>★ {professional.rating.toFixed(1)}</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{formatCurrency(professional.hourlyRate)}/h</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="modern-section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="modern-section-head">
            <div>
              <span className="eyebrow">Prova social</span>
              <h2>O que dizem os clientes</h2>
            </div>
          </div>
          <div className="testimonials-row">
            {reviews.map((review) => (
              <div key={review.id} className="testimonial-card">
                <span className="testimonial-quote-mark">“</span>
                <p>{review.comment}</p>
                <span className="who">{review.client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modern-section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="modern-cta">
            <div>
              <h2>Pronto pra reservar seu horário?</h2>
              <p>Leva menos de um minuto — escolha o profissional, o horário e pague na hora.</p>
            </div>
            <button className="btn-gradient" onClick={() => onNavigate('booking')}>
              Agendar agora
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
