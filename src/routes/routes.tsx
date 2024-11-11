import ErrorPage from '../ErrorPage'
import Root from 'src/routes/components/Root.tsx'
import MainContent from 'src/layouts/MainContent/MainContent.tsx'

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainContent />,
      },
    ],
  },
]
