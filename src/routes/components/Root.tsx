import { Outlet } from 'react-router-dom'
import Header from 'src/layouts/Header/Header.tsx'

const Root = () => {
  return (
    <div className='wrapper mx-auto max-w-[1536px]'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Root
