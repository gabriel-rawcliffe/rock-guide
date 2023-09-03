import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getCrags } from '../apis/apiClient'
import CragList from './CragList'
import { Crag } from '../../models/Crags'

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
      <div className="centred">
        <h1>{crags[0]?.area_name}</h1>
        <h3>{crags[0]?.area_description}</h3>
      </div>
      <CragList crags={crags} />
    </>
  )
}
