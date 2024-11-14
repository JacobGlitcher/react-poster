import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom'

import { Post as IPost } from 'src/types/types'
import { api } from 'src/api/api.ts'

import Modal from 'src/components/common/Modal/Modal'
import Post from 'src/components/features/Post/Post'

interface PostDetailsLoaderData {
  postById: IPost
}

const PostDetails = () => {
  const { postById } = useLoaderData() as PostDetailsLoaderData

  return (
    postById && (
      <Modal>
        <Post posterName={postById.name} content={postById.content} />
      </Modal>
    )
  )
}

export default PostDetails

export const loader = async ({ params }: LoaderFunctionArgs): Promise<PostDetailsLoaderData> => {
  const postById: IPost = await api.posts.getById(params.postId as string)

  return { postById }
}
