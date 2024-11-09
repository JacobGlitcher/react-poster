import Posts from 'src/components/features/Posts/Posts'
import Modal from 'src/components/common/Modal/Modal'

const MainContent = () => {
  return (
    <div>
      <Modal isOpen={false}>
        <p>Lorem ipsum dolor sit amet.</p>
      </Modal>
      <Posts />
    </div>
  )
}

export default MainContent
