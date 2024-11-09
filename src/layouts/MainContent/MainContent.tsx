import { usePostsContext } from 'src/store/PostsContext.tsx'

import Posts from 'src/components/features/Posts/Posts'
import Modal from 'src/components/common/Modal/Modal'

const MainContent = () => {
  const { isOpen } = usePostsContext()

  return (
    <div>
      <Modal isOpen={isOpen}>
        <p>Lorem ipsum dolor sit amet.</p>
      </Modal>
      <Posts />
    </div>
  )
}

export default MainContent
