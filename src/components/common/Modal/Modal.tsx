import { ReactNode } from 'react'

import { usePostsContext } from 'src/store/PostsContext.tsx'

interface AddPostProps {
  children: ReactNode
  isOpen: boolean
}

const Modal = ({ children, isOpen }: AddPostProps) => {
  const { setIsOpen } = usePostsContext()

  const closeModalHandler = (): void => {
    setIsOpen(false)
  }

  return (
    isOpen && (
      <>
        <div
          className='fixed left-0 top-0 h-lvh w-full bg-gray-950 opacity-50'
          onClick={closeModalHandler}
        ></div>
        <dialog open={isOpen} className='absolute top-1/2 -translate-y-1/2 bg-transparent'>
          {children}
        </dialog>
      </>
    )
  )
}

export default Modal
