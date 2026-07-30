import { RoomOccupancyWidget } from './components/RoomOccupancyWidget'
import { RevenueWidget } from './components/RevenueWidget'
import { AgendaWidget } from './components/AgendaWidget'
import { ActiveClientsWidget } from './components/ActiveClientsWidget'
import { OccupancyRateWidget } from './components/OccupancyRateWidget'
import { ReviewsWidget } from './components/ReviewsWidget'
import { IdleHoursWidget } from './components/IdleHoursWidget'

function App() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Coworking Hub — Painel geral</h1>
        <span className="subtitle">Dados de exemplo · atualizado agora</span>
      </div>
      <div className="grid">
        <RoomOccupancyWidget />
        <RevenueWidget />
        <AgendaWidget />
        <ActiveClientsWidget />
        <OccupancyRateWidget />
        <ReviewsWidget />
        <IdleHoursWidget />
      </div>
    </div>
  )
}

export default App
