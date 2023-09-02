import db from './connection.ts'

export function getAreas() {
  return db('areas').select()
}

export function getCragsByArea(area: string) {}

export function getSectorsByCrag(crag: string) {}

export function getClimbsBySector(sector: string) {}

export function getClimbById(id: string) {}
