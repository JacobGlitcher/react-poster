import { MessageSquareText } from 'lucide-react'

import AddPost from './components/AddPost/AddPost'

const Header = () => {
  return (
    <div className='mb-10 flex items-center justify-between rounded-b border-b-4 border-b-gray-300 pb-5'>
      <div className='flex items-center'>
        <MessageSquareText className='fill-secondary-color mr-2 hidden sm:inline' />
        <h1 className='text-secondary-color text-2xl font-bold'>React Poster</h1>
      </div>
      <AddPost />
    </div>
  )
}

export default Header
