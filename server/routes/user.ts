import express from 'express'
import * as db from '../db/db'
import { JwtRequest } from '../db/auth0.ts'
import checkJwt from '../db/auth0.ts'
import { User } from '../../models/User.ts'

const router = express.Router()

router.post('/register', checkJwt, async (req: JwtRequest, res) => {
  const details = req.body
  const auth0Id = req.auth?.sub
  const newUser: User = { ...details, id: auth0Id }
  console.log(`Route New User: ${newUser.id}`)
  if (!details) {
    console.error('No user details')
    console.error(`req: ${req.body.user_name}`)
    return res.status(400).send('Bad request')
  }
  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }
  try {
    const response = await db.addUser(newUser)

    res.status(201).json(response[0])
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong adding user details')
  }
})

router.get(`/userData`, checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    const user = await db.getUserByAuth(auth0Id)

    res.json(user)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

router.get(`/userCheck`, checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    const userCheck = await db.checkUserAuth(auth0Id)

    res.json(userCheck)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

router.get(`/ticklist`, checkJwt, async (req: JwtRequest, res) => {
  console.log('ticklistRoute go')
  try {
    const auth0Id = req.auth?.sub
    const ticklist = await db.getUserTicklist(auth0Id)

    res.json(ticklist)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

router.post(`/ticklist/add`, checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    const climbId = req.body.climbId
    console.log(`climbId: ${climbId}`)

    await db.addUserTicklist(auth0Id, climbId)

    res.sendStatus(204)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

router.delete(`/ticklist/delete`, checkJwt, async (req: JwtRequest, res) => {
  console.log('ticklistRoute go')
  try {
    const auth0Id = req.auth?.sub
    const climbId = req.body.climbId
    console.log(`climbId: ${climbId}`)

    await db.deleteUserTicklist(auth0Id, climbId)

    res.sendStatus(204)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

router.patch('/edit', checkJwt, async (req: JwtRequest, res) => {
  const details = req.body
  const auth0Id = req.auth?.sub
  const editedUser: User = { ...details, id: auth0Id }

  if (!details) {
    console.error('No user details')
    console.error(`req: ${req.body.user_name}`)
    return res.status(400).send('Bad request')
  }
  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }
  try {
    await db.editUser(editedUser)

    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong adding user details')
  }
})

router.delete('/profile', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  try {
    await db.deleteProfile(auth0Id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong deleting user details')
  }
})

export default router
