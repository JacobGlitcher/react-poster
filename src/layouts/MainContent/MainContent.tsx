import Post from 'src/components/features/Post/Post.tsx'

const MainContent = () => {
  return (
    <div className='px-4 sm:px-8'>
      <div className='mx-auto flex max-w-[1280px] flex-wrap justify-center gap-4'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MainContent
