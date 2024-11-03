import { SquarePlus } from 'lucide-react'

const AddPost = () => {
  return (
    <button className='flex items-center rounded bg-gray-200 px-3 py-2.5'>
      <span className='mr-2'>New Post</span>
      <span>
        <SquarePlus />
      </span>
    </button>
  )
}

export default AddPost
