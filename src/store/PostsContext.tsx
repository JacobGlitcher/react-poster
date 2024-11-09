import { createContext, useContext, useState, ReactNode } from 'react'

interface Posts {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const PostsContext = createContext<Posts | undefined>(undefined)

export const usePostsContext = () => {
  const context = useContext(PostsContext)

  if (!context) {
    throw new Error('usePostsContext must be used within the context')
  }

  return context
}

interface PostsContextProviderProps {
  children: ReactNode
}

export const PostsContextProvider = ({ children }: PostsContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const value: Posts = {
    isOpen,
    setIsOpen,
  }

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
