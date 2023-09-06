import { useAuth0 } from '@auth0/auth0-react'
import { ReactEventHandler, useEffect, useState } from 'react'
import { addUser, checkUser } from '../../apis/apiClient'
import { Navigate, useNavigate } from 'react-router-dom'
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'

export default function Register() {
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
  })

  // check if user exists using useState and useEffect
  const [userExists, setUserExists] = useState(false)

  useEffect(() => {
    const userCheck = async () => {
      const token = await getAccessTokenSilently()
      const userCheck = await checkUser(token)
      setUserExists(userCheck)
    }
    userCheck()
  }, [])

  console.log(userExists)

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
    return navigate('/Home/')
  }
  // if (userExists) return navigate('/')
  if (userExists) {
    return <Navigate to="/" replace />
  }
  return (
    <div>
      <h1>Registry information</h1>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel htmlFor="first_name">First Name:</FormLabel>
            <Input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="last_name">Surname:</FormLabel>
            <Input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="user_name">Username:</FormLabel>
            <Input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  )
}
