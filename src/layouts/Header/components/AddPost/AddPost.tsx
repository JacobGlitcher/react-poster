import { SquarePlus } from 'lucide-react'

import { usePostsContext } from 'src/store/PostsContext.tsx'

const AddPost = () => {
  const { setIsOpen } = usePostsContext()

  const handleAddPost = (): void => {
    setIsOpen(true)
  }

  return (
    <button className='flex items-center rounded bg-gray-200 px-3 py-2.5' onClick={handleAddPost}>
      <span className='mr-2 hidden sm:inline'>New Post</span>
      <span>
        <SquarePlus />
      </span>
    </button>
  )
}

export default AddPost
