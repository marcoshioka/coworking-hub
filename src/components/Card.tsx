import type { ReactNode } from 'react'

interface CardProps {
  title: string
  emoji?: string
  subtitle?: string
  span?: 3 | 4 | 6 | 8 | 12
  children: ReactNode
}

export function Card({ title, emoji, subtitle, span = 4, children }: CardProps) {
  return (
    <div className={`card col-${span}`}>
      <div>
        <div className="card-title">
          {emoji && <span className="emoji">{emoji}</span>}
          {title}
        </div>
        {subtitle && <div className="card-subtitle">{subtitle}</div>}
      </div>
      {children}
    </div>
  )
}
