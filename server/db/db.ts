import { useRangeSlider } from '@chakra-ui/react'
import { User } from '../../models/User.ts'
import db from './connection.ts'

export function getAreas() {
  return db('areas').select()
}

export function getCragsByArea(areaId: number) {
  return db('crags')
    .join('areas', 'crags.area_id', 'areas.id')
    .where('crags.area_id', areaId)
    .select(
      'crags.*',
      'areas.name as area_name',
      'areas.description as area_description'
    )
}

export function getSectorsByCrag(cragId: number) {
  return db('sectors')
    .join('crags', 'sectors.crag_id', 'crags.id')
    .where('sectors.crag_id', cragId)
    .select(
      'sectors.*',
      'crags.name as crag_name',
      'crags.description as crag_description',
      'crags.topo as crag_topo'
    )
}

export function getClimbsBySector(sector: number) {
  return db('climbs')
    .join('sectors', 'climbs.sector_id', 'sectors.id')
    .where('climbs.sector_id', sector)
    .select(
      'climbs.*',
      'sectors.name as sector_name',
      'sectors.description as sector_description',
      'sectors.topo as sector_topo'
    )
}

export function getClimbById(id: string) {}

export function addUser(newUser: User) {
  return db('users').insert(newUser).returning('*')
}

export function getUserByAuth(auth0Id: string | undefined) {
  return db('users').where('id', auth0Id).select()
}
export async function checkUserAuth(auth0Id: string | undefined) {
  const userCheck = await db('users').where('id', auth0Id).first()
  return !!userCheck
}
export function getUserTicklist(auth0Id: string | undefined) {
  return db('climbs')
    .join('ticklist', 'ticklist.climb_id', 'climbs.id')
    .join('users', 'ticklist.user_id', 'users.id')
    .where('users.id', auth0Id)
    .select('climbs.*')
}
