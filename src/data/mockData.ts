export type RoomStatus = 'ocupada' | 'livre' | 'reservada'

export interface Room {
  id: string
  name: string
  capacity: number
  status: RoomStatus
  occupant?: string
  until?: string
  monthlyOccupancyRate: number
}

export const rooms: Room[] = [
  { id: 'r1', name: 'Sala Foco 1', capacity: 1, status: 'ocupada', occupant: 'Camila Duarte', until: '15:30', monthlyOccupancyRate: 78 },
  { id: 'r2', name: 'Sala Foco 2', capacity: 1, status: 'livre', monthlyOccupancyRate: 41 },
  { id: 'r3', name: 'Sala Reunião A', capacity: 6, status: 'ocupada', occupant: 'Equipe Nimbus', until: '16:00', monthlyOccupancyRate: 85 },
  { id: 'r4', name: 'Sala Reunião B', capacity: 8, status: 'reservada', occupant: 'Consultoria Vetta (16:00)', monthlyOccupancyRate: 62 },
  { id: 'r5', name: 'Sala Criativa', capacity: 4, status: 'livre', monthlyOccupancyRate: 35 },
  { id: 'r6', name: 'Auditório', capacity: 20, status: 'reservada', occupant: 'Workshop UX (18:00)', monthlyOccupancyRate: 29 },
]

export interface RevenuePoint {
  day: number
  value: number
}

export const revenueThisMonth: RevenuePoint[] = Array.from({ length: 29 }, (_, i) => {
  const day = i + 1
  const base = 1800 + Math.sin(day / 3) * 400
  const weekday = ((day - 1) % 7 < 5) ? 1 : 0.5
  return { day, value: Math.round(base * weekday + (day > 20 ? 300 : 0)) }
})

export const revenueSummary = {
  total: revenueThisMonth.reduce((s, p) => s + p.value, 0),
  previousMonthTotal: 54200,
  breakdown: [
    { label: 'Planos mensalistas', value: 32400 },
    { label: 'Salas avulsas', value: 14100 },
    { label: 'Eventos e auditório', value: 6800 },
    { label: 'Café e serviços', value: 3200 },
  ],
}

export interface AgendaItem {
  id: string
  time: string
  room: string
  client: string
  type: string
}

export const agendaToday: AgendaItem[] = [
  { id: 'a1', time: '09:00', room: 'Sala Reunião A', client: 'Equipe Nimbus', type: 'Reunião recorrente' },
  { id: 'a2', time: '10:30', room: 'Sala Criativa', client: 'Beatriz Nogueira', type: 'Sessão de brainstorm' },
  { id: 'a3', time: '11:00', room: 'Sala Foco 1', client: 'Camila Duarte', type: 'Hot desk' },
  { id: 'a4', time: '14:00', room: 'Sala Reunião B', client: 'Consultoria Vetta', type: 'Apresentação a cliente' },
  { id: 'a5', time: '16:00', room: 'Sala Reunião A', client: 'André Salgado', type: 'Entrevista' },
  { id: 'a6', time: '18:00', room: 'Auditório', client: 'Workshop UX', type: 'Evento' },
]

export interface Client {
  id: string
  name: string
  plan: 'Mensalista' | 'Avulso' | 'Dia'
  since: string
}

export const activeClients: Client[] = [
  { id: 'c1', name: 'Camila Duarte', plan: 'Mensalista', since: '2025-02-10' },
  { id: 'c2', name: 'Equipe Nimbus', plan: 'Mensalista', since: '2024-11-03' },
  { id: 'c3', name: 'Beatriz Nogueira', plan: 'Avulso', since: '2026-05-20' },
  { id: 'c4', name: 'Consultoria Vetta', plan: 'Mensalista', since: '2025-08-15' },
  { id: 'c5', name: 'André Salgado', plan: 'Dia', since: '2026-07-28' },
]

export const clientsSummary = {
  activeCount: 148,
  previousMonthCount: 139,
  byPlan: [
    { label: 'Mensalista', value: 92 },
    { label: 'Avulso', value: 41 },
    { label: 'Dia', value: 15 },
  ],
}

export interface Review {
  id: string
  client: string
  rating: number
  comment: string
  date: string
}

export const reviews: Review[] = [
  { id: 'rv1', client: 'Camila Duarte', rating: 5, comment: 'Ambiente muito tranquilo para focar, recomendo a Sala Foco.', date: '2026-07-25' },
  { id: 'rv2', client: 'Equipe Nimbus', rating: 4, comment: 'Boa estrutura, só faltou mais tomadas na sala de reunião.', date: '2026-07-22' },
  { id: 'rv3', client: 'Beatriz Nogueira', rating: 5, comment: 'Atendimento excelente, voltarei sempre que precisar.', date: '2026-07-18' },
  { id: 'rv4', client: 'André Salgado', rating: 3, comment: 'Wi-fi instável durante a tarde.', date: '2026-07-15' },
]

export const reviewsSummary = {
  average: reviews.reduce((s, r) => s + r.rating, 0) / reviews.length,
  total: 63,
}

export const weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
export const hours = ['8h', '10h', '12h', '14h', '16h', '18h', '20h']

export const idleHoursMatrix: number[][] = [
  [30, 55, 70, 60, 65, 40, 15],
  [35, 60, 75, 65, 68, 42, 18],
  [28, 58, 72, 62, 66, 38, 16],
  [32, 57, 74, 63, 67, 41, 20],
  [40, 62, 78, 68, 70, 50, 25],
  [15, 20, 25, 22, 18, 12, 8],
]
