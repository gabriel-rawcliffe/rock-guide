import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getSectors } from '../../apis/apiClient'
import SectorList from '../SectorList'
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function Crag() {
  const { crag } = useParams()

  const {
    data: sectors,
    isLoading,
    isError,
  } = useQuery(['sectors'], () => getSectors(crag))
  if (isError)
    return (
      <>
        <h2>Sorry we could not find any sectors at this crag</h2>
      </>
    )
  if (isLoading)
    return (
      <>
        <h2>...Loading sectors</h2>
      </>
    )

  return (
    <>
      <Center>
        <Heading paddingTop="10px">{sectors[0]?.crag_name}</Heading>
      </Center>
      <Text margin="15px" fontSize="sm">
        {sectors[0]?.crag_description}
      </Text>
      <Flex>
        <Box flex="3">
          <Image
            margin="15px"
            w="90%"
            h="auto"
            className="topo"
            src={`/images/${sectors[0]?.crag_topo}`}
            alt={`${sectors[0]?.crag_name} topo`}
          />
        </Box>
        <Box flex="1">
          <SectorList sectors={sectors} />
        </Box>
      </Flex>
    </>
  )
}
