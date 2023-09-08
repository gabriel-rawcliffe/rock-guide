import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { checkUser, getCrags } from '../../apis/apiClient'
import CragList from '../CragList'
import { Crag } from '../../../models/Crags'
import { Heading, Center, Text } from '@chakra-ui/react'

interface AreaCrag extends Crag {
  area_name: string
  area_description: string
}

export default function Crags() {
  const { area } = useParams()

  const {
    data: crags,
    isLoading,
    isError,
  } = useQuery<AreaCrag[]>(['crags'], () => getCrags(area))
  if (isError)
    return (
      <>
        <h2>Sorry we could not find any crags in this area</h2>
      </>
    )
  if (isLoading)
    return (
      <>
        <h2>...Loading crags</h2>
      </>
    )
  return (
    <>
      <Center>
        <Heading padding={2}>{crags[0]?.area_name}</Heading>
      </Center>
      <Text padding={3} paddingBottom={10}>
        {crags[0]?.area_description}
      </Text>
      <Center>
        <Heading size="md" padding={3} paddingBottom={10}>
          {`Crags in ${crags[0]?.area_name}`}
        </Heading>
      </Center>

      <CragList crags={crags} />
    </>
  )
}
