import { Crag } from '../../models/Crags'
import { Link, Params, useParams } from 'react-router-dom'
import { dashedUrl } from '../helpers'
import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

interface AreaCrag extends Crag {
  area_name: string
  area_description: string
}

export default function SectorList({ sectors }: { sectors: AreaCrag[] }) {
  return (
    <>
      <Flex>
        <Box>
          <Heading as="h2" size="md" padding="10px">
            Sector List:
          </Heading>
          <UnorderedList>
            {sectors?.map((sector: AreaCrag) => {
              const url = `${dashedUrl(sector.name, sector.id)}`
              return (
                <Link
                  to={`/area/crag/${url}`}
                  className="area-block"
                  key={sector.id}
                >
                  <ListItem paddingLeft="10px">
                    <Image src="#" alt="" />
                    <Heading _hover={{ color: '#911919' }} as="h3" size="sm">
                      {sector.name}
                    </Heading>
                  </ListItem>
                </Link>
              )
            })}
          </UnorderedList>
        </Box>
      </Flex>
    </>
  )
}
