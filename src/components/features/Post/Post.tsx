import Card from 'src/components/common/Card/Card'
import { useNavigate } from 'react-router-dom'

interface PostProps {
  posterName: string
  content: string
  id?: string
}

const Post = ({ posterName, content, id }: PostProps) => {
  const navigate = useNavigate()
  const modalCardOpenHandler = (): void => {
    navigate(`/${id}`)
  }

  const cardStyles: string = `cursor-pointer sm:max-w-[48%] md:max-w-[31%] lg:max-w-[20%]`

  return (
    <Card
      className={`w-full p-4 ${id && cardStyles}`}
      {...(id && { onClick: modalCardOpenHandler })}
    >
      <p className='mb-3 text-xl font-bold'>{posterName}</p>
      <p>{content}</p>
    </Card>
  )
}

export default Post
