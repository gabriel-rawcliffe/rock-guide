import { Link } from 'react-router-dom'

import UserMenu from './UserMenu'
import { Box, Flex, Image, Spacer } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
      <Flex>
        <header>
          <Box>
            <Link to={'/'}>
              <Image src="/images/CliffTop.png" alt="CliffTop logo" />
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
