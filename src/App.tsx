import { useState } from 'react'
import { RoomOccupancyWidget } from './components/RoomOccupancyWidget'
import { WorkstationsWidget } from './components/WorkstationsWidget'
import { RevenueWidget } from './components/RevenueWidget'
import { AgendaWidget } from './components/AgendaWidget'
import { ActiveClientsWidget } from './components/ActiveClientsWidget'
import { OccupancyRateWidget } from './components/OccupancyRateWidget'
import { ReviewsWidget } from './components/ReviewsWidget'
import { IdleHoursWidget } from './components/IdleHoursWidget'
import { BookingFlow } from './components/booking/BookingFlow'
import { LandingPage } from './components/landing/LandingPage'

type View = 'home' | 'dashboard' | 'booking'

const titles: Record<View, string> = {
  home: '',
  dashboard: ' — Painel geral',
  booking: ' — Agendamento',
}

function App() {
  const [view, setView] = useState<View>('home')

  if (view === 'home') {
    return <LandingPage view={view} onNavigate={setView} />
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Focus Business Hub{titles[view]}</h1>
        <nav className="view-tabs">
          <button onClick={() => setView('home')}>Início</button>
          <button className={view === 'dashboard' ? 'active' : ''} onClick={() => setView('dashboard')}>
            Painel geral
          </button>
          <button className={view === 'booking' ? 'active' : ''} onClick={() => setView('booking')}>
            Agendamento
          </button>
        </nav>
      </div>

      {view === 'dashboard' && (
        <div className="grid">
          <RoomOccupancyWidget />
          <WorkstationsWidget />
          <RevenueWidget />
          <AgendaWidget />
          <ActiveClientsWidget />
          <OccupancyRateWidget />
          <ReviewsWidget />
          <IdleHoursWidget />
        </div>
      )}

      {view === 'booking' && <BookingFlow />}
    </div>
  )
}

export default App
