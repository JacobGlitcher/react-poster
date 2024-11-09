import './App.module.scss'

import Header from './layouts/Header/Header'
import MainContent from 'src/layouts/MainContent/MainContent'

const App = () => {
  return (
    <div className='wrapper mx-auto max-w-[1536px]'>
      <Header />
      <MainContent />
    </div>
  )
}

export default App
