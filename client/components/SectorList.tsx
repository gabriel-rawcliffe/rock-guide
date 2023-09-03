import { Crag } from '../../models/Crags'
import { Link, Params, useParams } from 'react-router-dom'
import { dashedUrl } from '../helpers'

interface AreaCrag extends Crag {
  area_name: string
  area_description: string
}

export default function SectorList({ sectors }: { sectors: AreaCrag[] }) {
  return (
    <>
      <div className="area-container">
        <ul className="area-list">
          {sectors?.map((sector: AreaCrag) => {
            const url = `${dashedUrl(sector.name, sector.id)}`
            return (
              <Link
                to={`/area/crag/${url}`}
                className="area-block"
                key={sector.id}
              >
                <li>
                  <img className="area-img" src="#" alt="" />
                  <h2>{sector.name}</h2>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}
