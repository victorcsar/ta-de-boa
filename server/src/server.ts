import fastify from 'fastify'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'

const app = fastify()

// app.register(cors, {
//   origin: ['http://localhost:3333'],
// })

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'akdgaskodgaskhdgajsdghjkqsgdayjo',
})

app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP RUNNING ON http://localhost:3333')
  })
