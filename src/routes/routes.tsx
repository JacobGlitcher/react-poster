import ErrorPage from '../ErrorPage'
import Root from 'src/routes/components/Root.tsx'
import MainContent from 'src/layouts/MainContent/MainContent.tsx'
import PostForm from 'src/components/features/PostForm/PostForm.tsx'

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
        ],
      },
    ],
  },
]
