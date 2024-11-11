import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'

import { Post as IPostData } from 'src/types/types'

interface Posts {
  currentPosts: IPostData[]
  setCurrentPosts: Dispatch<SetStateAction<IPostData[]>>
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
  const [currentPosts, setCurrentPosts] = useState<IPostData[]>([])

  const value: Posts = {
    currentPosts,
    setCurrentPosts,
  }

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}
