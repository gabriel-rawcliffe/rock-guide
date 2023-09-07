import { Center, ChakraProvider, Flex, Image, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Login from '../Login'
import { useAuth0 } from '@auth0/auth0-react'
import { checkUser } from '../../apis/apiClient'
import { Navigate } from 'react-router-dom'

export default function Landing() {
  const [userExists, setUserExists] = useState(false)
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    const userCheck = async () => {
      const token = await getAccessTokenSilently()
      const userCheck = await checkUser(token)
      setUserExists(userCheck)
    }
    userCheck()
  }, [])

  if (!userExists)
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
  if (userExists) {
    return <Navigate to="/Home/" replace />
  }
}
