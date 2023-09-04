import express from 'express'
import * as db from '../db/db'
import { JwtRequest } from '../db/auth0.ts'
import checkJwt from '../db/auth0.ts'
import { User } from '../../models/User.ts'

const router = express.Router()

// router.get(`/`, async (req, res) => {
//   try {
//     const areas = await db.getAreas()

//     res.json(areas)
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     res.status(error.response.status || 500).json(error.response.body)
//   }
// })

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

export default router
