import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import UserMenu from './chakra/UserMenu'
import { Box, Flex, Spacer } from '@chakra-ui/react'

export default function Header() {
  const { logout, loginWithRedirect } = useAuth0()

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <Flex>
        <header>
          <Box>
            <Link to={'/'}>
              <img
                src="client/public/images/CliffTop.png"
                alt="CliffTop logo"
              />
            </Link>
          </Box>
          <Spacer />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            padding="1rem"
          >
            <UserMenu />
          </Box>
        </header>
      </Flex>
    </>
  )
}
