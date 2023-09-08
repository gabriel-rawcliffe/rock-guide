import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getClimbs } from '../../apis/apiClient'
import ClimbList from '../ClimbList'

export default function Sector() {
  const { sector } = useParams()

  const {
    data: climbs,
    isLoading,
    isError,
  } = useQuery(['sectors'], () => getClimbs(sector))
  if (isError)
    return (
      <>
        <h2>Sorry we could not find any climbs for this sector</h2>
      </>
    )
  if (isLoading)
    return (
      <>
        <h2>...Loading climbs</h2>
      </>
    )

  return (
    <>
      <div className="centred">
        <h1>{climbs[0]?.sector_name}</h1>
        <h3>{climbs[0]?.sector_description}</h3>
        <img
          className="topo"
          src={`${climbs[0]?.sector_topo}`}
          alt={`${climbs[0]?.sector_name} topo`}
        />
      </div>
      <ClimbList climbs={climbs} />
    </>
  )
}
