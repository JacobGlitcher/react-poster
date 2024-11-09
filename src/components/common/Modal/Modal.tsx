import { ReactNode } from 'react'

interface AddPostProps {
  children: ReactNode
  isOpen: boolean
}

const Modal = ({ children, isOpen }: AddPostProps) => {
  return (
    isOpen && (
      <>
        <div className='fixed left-0 top-0 h-lvh w-full bg-gray-950 opacity-50'></div>
        <dialog open={isOpen} className='absolute top-1/2 -translate-y-1/2'>
          {children}
        </dialog>
      </>
    )
  )
}

export default Modal
