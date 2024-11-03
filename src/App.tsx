import './App.module.scss'

import Header from './layouts/Header/Header'
import Post from './components/features/Post/Post'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Post />
    </div>
  )
}

export default App
