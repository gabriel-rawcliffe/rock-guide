import { useAuth0 } from '@auth0/auth0-react'
import { ReactEventHandler, useState } from 'react'
import { addUser } from '../apis/apiClient'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
  })

  const { getAccessTokenSilently } = useAuth0()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = await getAccessTokenSilently()
    await addUser(token, formData)
    return navigate('/')
    // add submission function
  }
  return (
    <div>
      <h1>Registry information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name">First-name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="last_name">Surname:</label>
          <input
            type="test"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_name">Username:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
