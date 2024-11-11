import { ReactNode } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

interface AddPostProps {
  children: ReactNode
}

const Modal = ({ children }: AddPostProps) => {
  const navigate: NavigateFunction = useNavigate()
  const closeModalHandler = (): void => {
    navigate('..')
  }

  return (
    <>
      <div
        className='fixed left-0 top-0 h-lvh w-full bg-gray-950 opacity-50'
        onClick={closeModalHandler}
      ></div>
      <dialog open className='absolute top-1/2 -translate-y-1/2 bg-transparent'>
        {children}
      </dialog>
    </>
  )
}

export default Modal
