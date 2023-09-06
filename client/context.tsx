import { createContext } from 'react'

export const areaContext = createContext('')

export const userContext = createContext([
  {
    id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
  },
])
