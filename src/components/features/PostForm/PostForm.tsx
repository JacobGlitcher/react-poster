import React, { ChangeEvent, useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { Post as IPost } from 'src/types/types.ts'
import { usePostsContext } from 'src/store/PostsContext.tsx'
import { api } from 'src/api/api.ts'

import Modal from 'src/components/common/Modal/Modal'

const PostForm = () => {
  const [postData, setPostData] = useState<Omit<IPost, 'id'>>({
    name: '',
    content: '',
  })

  const navigate: NavigateFunction = useNavigate()
  const { setCurrentPosts } = usePostsContext()

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const createPost: IPost = await api.posts.create({ ...postData, id: uuidv4() })

    setCurrentPosts((prevPosts) => [...prevPosts, createPost])

    navigate('..')
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target

    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const cancelModalHandler = (): void => {
    navigate('..')
  }

  return (
    <Modal>
      <form className='rounded bg-primary-color px-4 py-6' onSubmit={submitHandler}>
        <div className='mb-5 flex flex-col'>
          <label className='mb-1 text-lg text-secondary-color' htmlFor='post-text-input'>
            Text
          </label>
          <textarea
            className='resize-none rounded p-2 text-text-primary focus:outline-none'
            id='post-text-input'
            name='content'
            rows={3}
            required
            value={postData.content}
            onChange={changeHandler}
          />
        </div>
        <div className='mb-5 flex flex-col'>
          <label className='mb-1 text-lg text-secondary-color' htmlFor='post-name-input'>
            Your Name
          </label>
          <input
            className='rounded p-2 text-text-primary focus:outline-none'
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
            className='mr-3 font-bold text-secondary-color underline'
            onClick={cancelModalHandler}
          >
            Cancel
          </button>
          <button className='flex items-center rounded bg-primary-dark-color px-3 py-2.5 font-bold text-secondary-color'>
            Submit
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default PostForm
