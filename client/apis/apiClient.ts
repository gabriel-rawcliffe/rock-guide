import { Params } from 'react-router-dom'
import request from 'superagent'
import { User } from '../../models/User'

export async function getAreas() {
  const response = await request.get(`/api/v1/climbs`)

  return response.body
}

export async function getCrags(area: string | undefined) {
  const response = await request.get(`/api/v1/climbs/${area}`)

  return response.body
}

export async function getSectors(crag: string | undefined) {
  const response = await request.get(`/api/v1/climbs/area/${crag}`)

  return response.body
}

export async function getClimbs(sector: string | undefined) {
  const response = await request.get(`/api/v1/climbs/area/crag/${sector}`)

  return response.body
}

export async function addUser(token: string, userData: User) {
  const response = await request
    .post('/api/v1/users/register')
    .set('Authorization', `Bearer ${token}`)
    .send(userData)
  return response.body
}

export async function getUserDetails(token: string) {
  const response = await request
    .get('/api/v1/users/userData')
    .set('Authorization', `Bearer ${token}`)

  return response.body
}

export async function checkUser(token: string) {
  const response = await request
    .get('/api/v1/users/userCheck')
    .set('Authorization', `Bearer ${token}`)

  return response.body
}

export async function getUserTicklist(token: string) {
  const response = await request
    .get(`/api/v1/users/ticklist`)
    .set('Authorization', `Bearer ${token}`)

  return response.body
}

export async function addClimbToTicklist(climbId: number, token: string) {
  const response = await request
    .post(`/api/v1/users/ticklist/add`)
    .set('Authorization', `Bearer ${token}`)
    .send({ climbId })

  return response.statusCode
}

export async function deleteClimbFromTicklist(climbId: number, token: string) {
  const response = await request

    .delete(`/api/v1/users/ticklist/delete`)
    .set('Authorization', `Bearer ${token}`)
    .send({ climbId })
  return response.statusCode
}

export async function editUser(token: string, userData: User) {
  const response = await request
    .patch('/api/v1/users/edit')
    .set('Authorization', `Bearer ${token}`)
    .send(userData)
  return response.statusCode
}

export async function deleteUser(token: string) {
  const response = await request

    .delete(`/api/v1/users/profile`)
    .set('Authorization', `Bearer ${token}`)

  return response.statusCode
}
