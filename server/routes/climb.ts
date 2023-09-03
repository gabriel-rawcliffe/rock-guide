import express from 'express'
import * as db from '../db/db'
import { areaIdFromUrl } from '../../client/helpers'
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

router.get(`/:area`, async (req, res) => {
  try {
    const areaUrl = req.params.area
    // console.log(`areaURL: ${areaUrl}`)
    const area = areaIdFromUrl(areaUrl)
    // console.log(`area: ${area}`)

    const crags = await db.getCragsByArea(area)
    // console.log(`crags: ${crags}`)
    res.json(crags)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

router.get(`/area/:crag`, async (req, res) => {
  const cragUrl = req.params.crag
  // console.log(`cragURL: ${cragUrl}`)

  try {
    const crag = areaIdFromUrl(cragUrl)
    // console.log(`crag: ${crag}`)

    const sectors = await db.getSectorsByCrag(crag)
    // console.log(`crags: ${sectors}`)
    res.json(sectors)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

router.get(`/area/crag/:sector`, async (req, res) => {
  const sectorUrl = req.params.sector
  console.log(`sectorURL: ${sectorUrl}`)

  try {
    const sector = areaIdFromUrl(sectorUrl)
    console.log(`sector: ${sector}`)

    const climbs = await db.getClimbsBySector(sector)
    console.log(`climbs: ${climbs}`)
    res.json(climbs)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response.status || 500).json(error.response.body)
  }
})

export default router
