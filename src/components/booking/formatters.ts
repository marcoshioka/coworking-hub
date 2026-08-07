export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  const label = date.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' })
  return label.charAt(0).toUpperCase() + label.slice(1).replace('.', '')
}

const nameTitles = new Set(['dr.', 'dr', 'dra.', 'dra'])

export function firstName(fullName: string): string {
  const parts = fullName.split(' ')
  const first = nameTitles.has(parts[0].toLowerCase()) ? parts[1] : parts[0]
  return first ?? fullName
}
