import { SquarePlus } from 'lucide-react'

const AddPost = () => {
  const handleAddPost = (): void => {}

  return (
    <button className='flex items-center rounded bg-gray-200 px-3 py-2.5'>
      <span className='mr-2 hidden sm:inline' onClick={handleAddPost}>
        New Post
      </span>
      <span>
        <SquarePlus />
      </span>
    </button>
  )
}

export default AddPost
