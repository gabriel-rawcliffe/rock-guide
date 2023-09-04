import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function Header() {
  const { logout, loginWithRedirect } = useAuth0()

  const user = {
    nickname: useAuth0().user?.nickname,
  }

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <header>
        <Link to={'/'}>
          <img src="client/public/images/CliffTop.png" alt="CliffTop logo" />
        </Link>
        <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button onClick={handleSignIn}>Sign in</button>
        </IfNotAuthenticated>
      </header>
    </>
  )
}
