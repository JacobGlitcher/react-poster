import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return <div className={`container rounded bg-gray-200 ${className}`}>{children}</div>
}

export default Card
