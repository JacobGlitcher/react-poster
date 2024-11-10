import { useState, useEffect } from 'react'
import { APIError } from '../api/api'

export interface ApiState<T> {
  data: T | null
  loading: boolean
  error: APIError | null
}

export function useApi<T>(apiCall: () => Promise<T>) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }))
        const data = await apiCall()

        if (!signal.aborted) {
          setState({ data, loading: false, error: null })
        }
      } catch (error) {
        if (!signal.aborted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof APIError ? error : new APIError(500, 'Unknown error'),
          })
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [apiCall])

  return state
}
