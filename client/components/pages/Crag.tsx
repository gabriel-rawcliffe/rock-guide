import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getSectors } from '../../apis/apiClient'
import SectorList from '../SectorList'

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
      <div className="centred">
        <h1>{sectors[0]?.crag_name}</h1>
        <h3>{sectors[0]?.crag_description}</h3>
        <img
          className="topo"
          src={`/client/public/images/${sectors[0]?.crag_topo}`}
          alt={`${sectors[0]?.crag_name} topo`}
        />
      </div>
      <SectorList sectors={sectors} />
    </>
  )
}
