import { useQuery } from '@tanstack/react-query'
import { Crag } from '../../models/Crags'
import { Link, Params, useParams } from 'react-router-dom'
import { dashedUrl } from '../helpers'
import { getCrags } from '../apis/apiClient'
import { Heading } from '@chakra-ui/react'

interface AreaCrag extends Crag {
  area_name: string
  area_description: string
}

export default function CragList({ crags }: { crags: AreaCrag[] }) {
  return (
    <>
      <div className="area-container">
        <ul className="area-list">
          {crags?.map((crag: AreaCrag) => {
            const url = `${dashedUrl(crag.name, crag.id)}`
            return (
              <Link to={`/area/${url}`} className="area-block" key={crag.id}>
                <li>
                  <img
                    className="area-img"
                    src="/images/dunedin.png"
                    alt={`${crag.name} crag`}
                  />
                  <Heading size="md">{crag.name}</Heading>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}
