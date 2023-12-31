import { useAuth0 } from '@auth0/auth0-react'
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { User } from '../../models/User'
import { useContext } from 'react'
import { userContext } from '../context'
import { Link } from 'react-router-dom'

export default function UserMenu() {
  const { logout } = useAuth0()
  const user: User[] = useContext(userContext)

  const handleSignOut = () => {
    logout()
  }
  return (
    <Menu>
      <MenuButton as={Button} colorScheme="yellow">
        {user[0].user_name}
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>
            <Link to={'/user/ticklist'}>Ticklist</Link>
          </MenuItem>
          <MenuItem>Hitlist </MenuItem>
          <MenuItem>
            <Link to={'/user/edit'}>Edit details</Link>
          </MenuItem>
          <MenuItem>
            <button onClick={handleSignOut}>Sign out</button>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}
