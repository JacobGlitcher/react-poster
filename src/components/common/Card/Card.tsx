import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`container rounded bg-secondary-color ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
