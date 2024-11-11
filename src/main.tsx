import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { browserRouterOptions } from './routes/options'
import { routes } from './routes/routes'
import { PostsContextProvider } from 'src/store/PostsContext'
import './index.scss'

const router = createBrowserRouter(routes, browserRouterOptions)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostsContextProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </PostsContextProvider>
  </StrictMode>
)
