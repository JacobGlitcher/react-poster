import Post from 'src/components/features/Post/Post.tsx'

import { Post as PostInt } from 'src/types/types.ts'
import { useApi } from 'src/hooks/useApi.ts'
import { api } from 'src/api/api.ts'
import { useCallback } from 'react'

const MainContent = () => {
  const getAllPosts = useCallback(() => api.posts.getAll(), [])
  const { data: posts, loading, error } = useApi<PostInt[]>(getAllPosts)

  if (loading) return <div className='text-xl text-gray-200'>Loading products...</div>
  if (error) return <div className='text-xl text-gray-200'>Error: {error.message}</div>
  if (!posts) return <div className='text-xl text-gray-200'>No products found</div>

  return (
    <div className='px-4 sm:px-8'>
      <div className='mx-auto flex max-w-[1280px] flex-wrap justify-center gap-4'>
        {posts.map((post) => (
          <Post posterName={post.name} content={post.content} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default MainContent
