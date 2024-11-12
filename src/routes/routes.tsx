import { loader as postLoader } from 'src/components/features/PostDetails/PostDetails.tsx'

import ErrorPage from '../ErrorPage'
import Root from 'src/routes/components/Root.tsx'
import MainContent from 'src/layouts/MainContent/MainContent.tsx'
import PostForm from 'src/components/features/PostForm/PostForm.tsx'
import PostDetails from 'src/components/features/PostDetails/PostDetails.tsx'

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainContent />,
        children: [
          {
            path: '/create-post',
            element: <PostForm />,
          },
          {
            path: '/:postId',
            element: <PostDetails />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]
