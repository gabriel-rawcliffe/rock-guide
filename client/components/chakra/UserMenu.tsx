import { useAuth0 } from '@auth0/auth0-react'
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { User } from '../../../models/User'
import { useContext } from 'react'
import { userContext } from '../../context'

export default function UserMenu() {
  const { logout } = useAuth0()
  const user: User[] = useContext(userContext)
  console.log(`UserMenu user: ${JSON.stringify(user)}`)
  const handleSignOut = () => {
    logout()
  }
  return (
    <Menu>
      <MenuButton as={Button} colorScheme="teal">
        {user[0].user_name}
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>Ticklist</MenuItem>
          <MenuItem>Hitlist </MenuItem>
          <MenuItem>
            <button onClick={handleSignOut}>Sign out</button>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}
