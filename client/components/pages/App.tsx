import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header'
import { useContext, useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'
import { checkUser, getUserDetails } from '../../apis/apiClient'
import { userContext } from '../../context'
import { useQuery } from '@tanstack/react-query'

export default function App() {
  const location = useLocation()
  const renderHeader = !['/', '/register/'].includes(location.pathname)
  const [userDetails, setUserDetails] = useState([
    {
      id: '',
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
    },
  ])

  const { getAccessTokenSilently } = useAuth0()

  useQuery(['user'], () => {
    const userCheck = async () => {
      const token = await getAccessTokenSilently()
      const userCheck = await checkUser(token)

      if (userCheck) {
        const userData = await getUserDetails(token)
        setUserDetails(userData)
      }
    }
    userCheck()
    return userDetails
  })

  return (
    <userContext.Provider value={userDetails}>
      <ChakraProvider>
        {renderHeader && <Header />}
        <Outlet />
      </ChakraProvider>
    </userContext.Provider>
  )
}
