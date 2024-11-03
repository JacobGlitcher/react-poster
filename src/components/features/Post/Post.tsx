import Card from 'src/components/common/Card/Card.tsx'

const Post = () => {
  return (
    <Card className='w-full p-4 sm:max-w-[48%] md:max-w-[31%] lg:max-w-[20%]'>
      <p className='mb-3 text-xl font-bold'>Jacob</p>
      <p>A new post from Jacob</p>
    </Card>
  )
}

export default Post
