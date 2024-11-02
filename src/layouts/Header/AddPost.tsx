import { SquarePlus } from 'lucide-react'

const AddPost = () => {
  const logHello = (): void => {
    console.log('Hello')
  }

  return (
    <button className='flex items-center rounded bg-gray-200 px-3 py-2.5' onClick={logHello}>
      <span className='mr-2'>New Post</span>
      <span>
        <SquarePlus />
      </span>
    </button>
  )
}

export default AddPost
