import { Climb } from '../../models/Climbs'

import { dashedUrl, generateStarString } from '../helpers'
import { useState } from 'react'

interface ClimbSector extends Climb {
  sector_name: string
  sector_description: string
}

export default function ClimbList({ climbs }: { climbs: ClimbSector[] }) {
  const [visibleClimb, setVisibleClimb] = useState({})

  const handleClick = (climb: ClimbSector) => {
    visibleClimb === climb ? setVisibleClimb({}) : setVisibleClimb(climb)
  }

  return (
    <>
      <div className="climb-container">
        <ul className="climb-list">
          {climbs?.map((climb: ClimbSector) => {
            const url = `${dashedUrl(climb.name, climb.id)}`
            return (
              <li
                onClick={() => handleClick(climb)}
                className="climb-block"
                key={climb.id}
              >
                <div>
                  <h2>{`${climb.name} | ${climb.grade} | ${generateStarString(
                    climb.rating
                  )} | ${climb.type}`}</h2>
                </div>
                {visibleClimb === climb ? (
                  <div>
                    <p>{climb.description}</p>
                    <p>{`${climb.fa_climber}: ${climb.fa_year}`}</p>
                  </div>
                ) : (
                  ''
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
