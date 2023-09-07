import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import { userContext } from '../../context'
import { deleteClimbFromTicklist, getUserTicklist } from '../../apis/apiClient'
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  ListItem,
  Spacer,
  Spinner,
  UnorderedList,
  Text,
  Heading,
  Divider,
} from '@chakra-ui/react'
import { Climb } from '../../../models/Climbs'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function Ticklist() {
  const queryClient = useQueryClient()

  const { getAccessTokenSilently } = useAuth0()

  const {
    data: ticklist,
    isLoading,
    isError,
  } = useQuery(['ticklist'], () => {
    async function ticklistData() {
      const token = await getAccessTokenSilently()
      return getUserTicklist(token)
    }
    return ticklistData()
  })

  const handleTicklistDelete = (climb: Climb) => {
    async function deleteTicklistFromDb() {
      const token = await getAccessTokenSilently()
      deleteClimbFromTicklist(climb.id, token)
    }
    deleteTicklistFromDb()
    queryClient.invalidateQueries(['ticklist'])
  }

  if (isLoading)
    return (
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
    )

  if (isError) return <>Sorry could not find ticklist</>

  return (
    <Box padding={2}>
      <Heading padding={2} size="lg">
        Your Ticklist:
      </Heading>
      <Divider />
      <Box>
        <UnorderedList>
          {ticklist.map((climb: Climb) => (
            <>
              <Box w="250px">
                <Flex>
                  <Text fontSize="20px">
                    <Link to={`/area/crag/${climb.sector_id}`} key={climb.id}>
                      <ListItem>{`${climb.name} | ${climb.grade}`}</ListItem>
                    </Link>
                  </Text>
                  <Spacer />
                  <Button onClick={() => handleTicklistDelete(climb)} size="xs">
                    Delete
                  </Button>
                </Flex>
              </Box>
            </>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  )
}
