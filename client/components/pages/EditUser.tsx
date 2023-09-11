import { useAuth0 } from '@auth0/auth0-react'
import { ReactEventHandler, useContext, useEffect, useState } from 'react'
import { addUser, checkUser, deleteUser, editUser } from '../../apis/apiClient'
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
import { userContext } from '../../context'
import { User } from '../../../models/User'

export default function EditUser() {
  const { logout } = useAuth0()
  const userArr = useContext(userContext)
  const user = userArr[0]
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    user_name: user.user_name,
    email: user.email,
  })

  const queryClient = useQueryClient()

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
    await editUser(token, formData)

    queryClient.invalidateQueries(['user'])

    return navigate('/Home/')
  }

  const handleDeleteUser = async () => {
    const token = await getAccessTokenSilently()
    await deleteUser(token)

    queryClient.invalidateQueries(['user'])
    logout()
    return navigate('/')
  }

  return (
    <Box>
      <Center>
        <Heading as="h1" size="lg">
          User Details
        </Heading>
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
            <Button
              onClick={handleDeleteUser}
              w="20%"
              background="#a83832"
              color="white"
            >
              Delete
            </Button>
          </Box>
        </Center>
      </Flex>
    </Box>
  )
}
