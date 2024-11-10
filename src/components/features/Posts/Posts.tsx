import { useCallback, useEffect } from 'react'

import { Post as IPost } from 'src/types/types.ts'
import { useApi } from 'src/hooks/useApi.ts'
import { api } from 'src/api/api.ts'
import { usePostsContext } from 'src/store/PostsContext.tsx'

import Post from 'src/components/features/Post/Post'

const Posts = () => {
  const { currentPosts, setCurrentPosts } = usePostsContext()

  const getAllPosts: () => Promise<IPost[]> = useCallback(() => api.posts.getAll(), [])
  const { data: posts, loading, error } = useApi<IPost[]>(getAllPosts)

  useEffect(() => {
    setCurrentPosts(posts ?? [])
  }, [posts, setCurrentPosts])

  if (loading) return <div className='text-secondary-color text-xl'>Loading products...</div>
  if (error) return <div className='text-secondary-color text-xl'>Error: {error.message}</div>
  if (!posts) return <div className='text-secondary-color text-xl'>No products found</div>

  return (
    <div className='px-4 sm:px-8'>
      <div className='mx-auto flex max-w-[1280px] flex-wrap justify-center gap-4'>
        {currentPosts?.map((post) => (
          <Post posterName={post.name} content={post.content} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default Posts
