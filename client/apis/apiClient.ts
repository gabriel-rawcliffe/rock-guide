import request from 'superagent'

export async function getAreas() {
  const response = await request.get(`/api/v1/climbs`)

  return response.body
}
