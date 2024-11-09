import Card from 'src/components/common/Card/Card'

interface PostProps {
  posterName: string
  content: string
}

const Post = ({ posterName, content }: PostProps) => {
  return (
    <Card className='w-full p-4 sm:max-w-[48%] md:max-w-[31%] lg:max-w-[20%]'>
      <p className='mb-3 text-xl font-bold'>{posterName}</p>
      <p>{content}</p>
    </Card>
  )
}

export default Post
