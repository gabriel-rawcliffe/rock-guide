import * as Path from 'node:path'
import express from 'express'
import climbRoutes from './routes/climb'
import userRoutes from './routes/user'

const server = express()
server.use(express.json())

server.use('/api/v1/climbs', climbRoutes)
server.use('/api/v1/users', userRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('client/public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
