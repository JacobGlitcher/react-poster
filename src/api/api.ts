import { Post } from 'src/types/types.ts'

const API_URL = 'http://localhost:3001'

export class APIError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message)
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new APIError(response.status, await response.text())
  }

  return response.json()
}

export const api = {
  posts: {
    getAll: async (): Promise<Post[]> => {
      const response = await fetch(`${API_URL}/posts`)
      return handleResponse<Post[]>(response)
    },

    getById: async (id: string): Promise<Post> => {
      const response = await fetch(`${API_URL}/posts/${id}`)
      return handleResponse<Post>(response)
    },

    create: async (product: Post): Promise<Post> => {
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })
      return handleResponse<Post>(response)
    },
  },
}
