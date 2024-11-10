import React, { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Post as IPost } from 'src/types/types.ts'
import { usePostsContext } from 'src/store/PostsContext.tsx'
import { api } from 'src/api/api.ts'

const PostForm = () => {
  const [postData, setPostData] = useState<Omit<IPost, 'id'>>({
    name: '',
    content: '',
  })

  const { setIsOpen, setCurrentPosts } = usePostsContext()

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const createPost: IPost = await api.posts.create({ ...postData, id: uuidv4() })

    setCurrentPosts((prevPosts) => [...prevPosts, createPost])

    setIsOpen(false)
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target

    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
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
          name='content'
          rows={3}
          required
          value={postData.content}
          onChange={changeHandler}
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
          name='name'
          required
          value={postData.name}
          onChange={changeHandler}
        />
      </div>
      <div className='flex justify-self-end'>
        <button
          type='button'
          className='text-secondary-color mr-3 font-bold underline'
          onClick={cancelModalHandler}
        >
          Cancel
        </button>
        <button className='bg-primary-dark-color text-secondary-color flex items-center rounded px-3 py-2.5 font-bold'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default PostForm
