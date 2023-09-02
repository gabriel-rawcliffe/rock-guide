import { getAreas } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { Area } from '../../models/Areas'

export default function Home() {
  const {
    data: areas,
    isLoading,
    isError,
  } = useQuery(['crags'], () => getAreas())
  return (
    <>
      <ul>
        {areas?.map((area: Area) => {
          return (
            <li key={area.id}>
              <h2>{area.name}</h2>
            </li>
          )
        })}
      </ul>
    </>
  )
}
