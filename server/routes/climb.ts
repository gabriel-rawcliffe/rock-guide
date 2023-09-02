import express from 'express'
import * as db from '../db/db'
const router = express.Router()

router.get(`/`, async (req, res) => {
  try {
    const areas = await db.getAreas()
    console.log(`areas: ${areas}`)
    res.json(areas)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

export default router
