import { useRouteError } from 'react-router-dom'

interface RouterError {
  statusText?: string
  message?: string
}

const ErrorPage = () => {
  const error: RouterError = useRouteError() as RouterError

  return (
    <div id='error-page' className='text-secondary-color'>
      <h1>Oops!</h1>
      <p className='mb-3'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='font-bold'>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
