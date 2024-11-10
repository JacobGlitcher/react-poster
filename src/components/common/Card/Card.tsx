import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return <div className={`bg-secondary-color container rounded ${className}`}>{children}</div>
}

export default Card
