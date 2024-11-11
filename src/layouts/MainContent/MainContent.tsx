import Posts from 'src/components/features/Posts/Posts'

import { Outlet } from 'react-router-dom'

const MainContent = () => {
  return (
    <div>
      <Outlet />
      <Posts />
    </div>
  )
}

export default MainContent
