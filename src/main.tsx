import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { PostsContextProvider } from 'src/store/PostsContext.tsx'
import './index.scss'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostsContextProvider>
      <App />
    </PostsContextProvider>
  </StrictMode>
)
