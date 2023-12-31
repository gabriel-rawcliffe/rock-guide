import { useAuth0 } from '@auth0/auth0-react'
import { ReactEventHandler, useEffect, useState } from 'react'
import { addUser, checkUser } from '../../apis/apiClient'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'

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
  const queryClient = useQueryClient()

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

    queryClient.invalidateQueries(['user'])

    return navigate('/Home/')
  }
  // if (userExists) return navigate('/')
  if (userExists) {
    return <Navigate to="/" replace />
  }
  return (
    <Box>
      <Center>
        <Heading size="lg">Registry information</Heading>
      </Center>
      <Flex flexDir="column">
        <Center>
          <Box w="60%">
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
                <Button w="20%" type="submit" colorScheme="yellow">
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Center>
      </Flex>
    </Box>
  )
}
