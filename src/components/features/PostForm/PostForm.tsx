import React from 'react'

import { usePostsContext } from 'src/store/PostsContext.tsx'

const PostForm = () => {
  const { setIsOpen } = usePostsContext()

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  const cancelModalHandler = (): void => {
    setIsOpen(false)
  }

  return (
    <form className='bg-primary-color rounded px-4 py-6' onSubmit={submitHandler}>
      <div className='mb-5 flex flex-col'>
        <label className='text-secondary-color mb-1 text-lg' htmlFor='post-text-input'>
          Text
        </label>
        <textarea
          className='text-text-primary resize-none rounded p-2 focus:outline-none'
          id='post-text-input'
          rows={3}
          required
        />
      </div>
      <div className='mb-5 flex flex-col'>
        <label className='text-secondary-color mb-1 text-lg' htmlFor='post-name-input'>
          Your Name
        </label>
        <input
          className='text-text-primary rounded p-2 focus:outline-none'
          type='text'
          id='post-name-input'
          required
        />
      </div>
      <div className='flex justify-self-end'>
        <button type='button' className='text-secondary-color mr-2' onClick={cancelModalHandler}>
          Cancel
        </button>
        <button className='bg-primary-dark-color text-secondary-color flex items-center rounded px-3 py-2.5'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default PostForm
