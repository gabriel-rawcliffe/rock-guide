import { Outlet } from 'react-router-dom'
import Header from './Header'
import { userContext } from '../context'
import { Center, ChakraProvider, Flex, Image, Spinner } from '@chakra-ui/react'
import { IfAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { getUserDetails } from '../apis/apiClient'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Login from './Login'

export default function App() {
  const { getAccessTokenSilently } = useAuth0()

  const {
    data: user,
    isError,
    isLoading,
  } = useQuery(['user'], () => userDetails(), { retry: false })

  async function userDetails() {
    const token = await getAccessTokenSilently()
    const userDetails = await getUserDetails(token)

    return userDetails
  }

  if (isError)
    return (
      <ChakraProvider>
        <Center>
          <Flex direction="column" alignItems="center">
            <Image
              margin="50px"
              w="250px"
              src="client/public/images/CliffTop.png"
              alt="CliffTop logo"
            />
            <Login />
          </Flex>
        </Center>
      </ChakraProvider>
    )
  if (isLoading)
    return (
      <ChakraProvider>
        <Center>
          <Spinner
            margin="100px"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </ChakraProvider>
    )
  console.log(`User from app useQuery ${JSON.stringify(user)}`)
  return (
    <ChakraProvider>
      <userContext.Provider value={user}>
        <Header />
        <Outlet />
      </userContext.Provider>
    </ChakraProvider>
  )
}
