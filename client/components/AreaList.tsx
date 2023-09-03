import { getAreas } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { Area } from '../../models/Areas'
import { Link } from 'react-router-dom'
import { dashedUrl } from '../helpers'

export default function AreaList() {
  const {
    data: areas,
    isLoading,
    isError,
  } = useQuery(['areas'], () => getAreas())
  if (isError)
    return (
      <>
        <h2>Sorry we could not find any areas</h2>
      </>
    )
  if (isLoading)
    return (
      <>
        <h2>...Loading climbing areas</h2>
      </>
    )

  return (
    <>
      <div className="area-container">
        <ul className="area-list">
          {areas?.map((area: Area) => {
            const url = dashedUrl(area.name, area.id)
            return (
              <Link to={`/${url}`} className="area-block" key={area.id}>
                <li>
                  <img
                    className="area-img"
                    src={`client/public/images/${area.image}`}
                    alt={area.name}
                  />
                  <h2>{area.name}</h2>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}
