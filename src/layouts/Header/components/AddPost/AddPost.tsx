import { SquarePlus } from 'lucide-react'
import { Link } from 'react-router-dom'

const AddPost = () => {
  return (
    <Link to='/create-post' className='flex items-center rounded bg-secondary-color px-3 py-2.5'>
      <span className='mr-2 hidden sm:inline'>New Post</span>
      <span>
        <SquarePlus />
      </span>
    </Link>
  )
}

export default AddPost
