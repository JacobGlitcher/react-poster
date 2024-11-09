import { MessageSquareText } from 'lucide-react'

import AddPost from './components/AddPost/AddPost'

const Header = () => {
  return (
    <div className='mb-10 flex items-center justify-between rounded-b border-b-4 border-b-gray-300 pb-5'>
      <div className='flex items-center'>
        <MessageSquareText className='mr-2 hidden fill-gray-200 sm:inline' />
        <h1 className='text-2xl font-bold text-gray-200'>React Poster</h1>
      </div>
      <AddPost />
    </div>
  )
}

export default Header
