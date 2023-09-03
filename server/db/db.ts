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
