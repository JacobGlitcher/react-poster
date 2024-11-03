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

    getById: async (id: number): Promise<Post> => {
      const response = await fetch(`${API_URL}/posts/${id}`)
      return handleResponse<Post>(response)
    },

    create: async (product: Omit<Post, 'id'>): Promise<Post> => {
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })
      return handleResponse<Post>(response)
    },

    update: async (id: number, updates: Partial<Post>): Promise<Post> => {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      })
      return handleResponse<Post>(response)
    },

    delete: async (id: number): Promise<void> => {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE',
      })
      return handleResponse<void>(response)
    },
  },
}
