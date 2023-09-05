import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'

export default function Login() {
  const { loginWithRedirect } = useAuth0()
  const handleSignIn = () => {
    loginWithRedirect()
  }
  return (
    <Button
      onClick={handleSignIn}
      colorScheme="teal"
      size="lg"
      height="48px"
      width="200px"
      border="2px"
    >
      Login/Register
    </Button>
  )
}
