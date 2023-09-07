import { Button } from '@chakra-ui/react'
import { Climb } from '../../models/Climbs'

import { dashedUrl, generateStarString } from '../helpers'
import { useState } from 'react'
import { addClimbToTicklist } from '../apis/apiClient'
import { useAuth0 } from '@auth0/auth0-react'

interface ClimbSector extends Climb {
  sector_name: string
  sector_description: string
}

export default function ClimbList({ climbs }: { climbs: ClimbSector[] }) {
  const [visibleClimb, setVisibleClimb] = useState({})

  const handleClick = (climb: ClimbSector) => {
    visibleClimb === climb ? setVisibleClimb({}) : setVisibleClimb(climb)
  }
  const { getAccessTokenSilently } = useAuth0()
  const handleTicklistAdd = (climb: ClimbSector) => {
    async function modifyTicklistdb() {
      const token = await getAccessTokenSilently()
      addClimbToTicklist(climb.id, token)
    }
    modifyTicklistdb()
  }

  return (
    <>
      <div className="climb-container">
        <ul className="climb-list">
          {climbs?.map((climb: ClimbSector) => {
            const url = `${dashedUrl(climb.name, climb.id)}`
            return (
              <li className="climb-block" key={climb.id}>
                <div onClick={() => handleClick(climb)}>
                  <h2>{`${climb.name} | ${climb.grade} | ${generateStarString(
                    climb.rating
                  )} | ${climb.type}`}</h2>
                </div>
                <Button
                  onClick={() => handleTicklistAdd(climb)}
                  colorScheme="teal"
                  size="xs"
                >
                  Add to Ticklist
                </Button>

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
