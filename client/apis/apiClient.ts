import { Params } from 'react-router-dom'
import request from 'superagent'

export async function getAreas() {
  const response = await request.get(`/api/v1/climbs`)

  return response.body
}

export async function getCrags(area: string | undefined) {
  console.log(`api area: ${area}`)
  const response = await request.get(`/api/v1/climbs/${area}`)

  return response.body
}

export async function getSectors(crag: string | undefined) {
  console.log(`api crag: ${crag}`)
  const response = await request.get(`/api/v1/climbs/area/${crag}`)

  return response.body
}

export async function getClimbs(sector: string | undefined) {
  console.log(`api crag: ${sector}`)
  const response = await request.get(`/api/v1/climbs/area/crag/${sector}`)

  return response.body
}
