import { usePostsContext } from 'src/store/PostsContext.tsx'

import Posts from 'src/components/features/Posts/Posts'
import Modal from 'src/components/common/Modal/Modal'
import PostForm from 'src/components/features/PostForm/PostForm.tsx'

const MainContent = () => {
  const { isOpen } = usePostsContext()

  return (
    <div>
      <Modal isOpen={isOpen}>
        <PostForm />
      </Modal>
      <Posts />
    </div>
  )
}

export default MainContent
