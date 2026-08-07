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

type View = 'dashboard' | 'booking'

function App() {
  const [view, setView] = useState<View>('dashboard')

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Coworking Hub{view === 'dashboard' ? ' — Painel geral' : ' — Agendamento'}</h1>
        <nav className="view-tabs">
          <button className={view === 'dashboard' ? 'active' : ''} onClick={() => setView('dashboard')}>
            Painel geral
          </button>
          <button className={view === 'booking' ? 'active' : ''} onClick={() => setView('booking')}>
            Agendamento
          </button>
        </nav>
      </div>

      {view === 'dashboard' ? (
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
      ) : (
        <BookingFlow />
      )}
    </div>
  )
}

export default App
