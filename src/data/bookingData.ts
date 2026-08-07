export interface Professional {
  id: string
  name: string
  specialty: string
  initials: string
  color: string
  rating: number
  reviewCount: number
  hourlyRate: number
  bio: string
}

export const professionals: Professional[] = [
  {
    id: 'p1',
    name: 'Dra. Camila Duarte',
    specialty: 'Psicóloga clínica',
    initials: 'CD',
    color: 'var(--series-1)',
    rating: 4.9,
    reviewCount: 87,
    hourlyRate: 180,
    bio: 'Atendimento individual com foco em ansiedade e carreira.',
  },
  {
    id: 'p2',
    name: 'Rafael Prado',
    specialty: 'Consultor financeiro',
    initials: 'RP',
    color: 'var(--series-2)',
    rating: 4.7,
    reviewCount: 52,
    hourlyRate: 220,
    bio: 'Planejamento financeiro para autônomos e pequenas empresas.',
  },
  {
    id: 'p3',
    name: 'Beatriz Nogueira',
    specialty: 'Nutricionista',
    initials: 'BN',
    color: 'var(--series-3)',
    rating: 5.0,
    reviewCount: 34,
    hourlyRate: 150,
    bio: 'Reeducação alimentar e acompanhamento nutricional contínuo.',
  },
  {
    id: 'p4',
    name: 'Thiago Cardoso',
    specialty: 'Advogado trabalhista',
    initials: 'TC',
    color: 'var(--series-4)',
    rating: 4.8,
    reviewCount: 61,
    hourlyRate: 250,
    bio: 'Consultoria jurídica para questões trabalhistas e contratos.',
  },
]

export interface TimeSlot {
  id: string
  professionalId: string
  date: string
  time: string
}

const dates = ['2026-08-10', '2026-08-11', '2026-08-12']
const times = ['09:00', '10:30', '13:00', '14:30', '16:00', '17:30']

const bookedSlots = new Set(['p1_2026-08-10_09:00', 'p1_2026-08-11_14:30', 'p2_2026-08-10_13:00', 'p3_2026-08-12_17:30'])

export const timeSlots: TimeSlot[] = professionals.flatMap((professional) =>
  dates.flatMap((date) =>
    times
      .filter((time) => !bookedSlots.has(`${professional.id}_${date}_${time}`))
      .map((time) => ({
        id: `${professional.id}_${date}_${time}`,
        professionalId: professional.id,
        date,
        time,
      })),
  ),
)

export const platformFeeRate = 0.08
