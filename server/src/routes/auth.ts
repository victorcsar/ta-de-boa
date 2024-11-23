import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function authRoutes(app: FastifyInstance) {
  app.post('/login', async (request, reply) => {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    })


    const { email, password } = bodySchema.parse(request.body)


    console.log(email,password)

    try {

      const existingUser = await prisma.user.findUnique({
        where: { email },
      })

      if (!existingUser) {
        return reply
          .status(404)
          .send({ error: 'Usuario não encontrado no banco' })
      }

      // const passwordMatch = await bcrypt.compare(
      //   password,
      //   existingUser.password,
      // )

      const passwordMatch = password === existingUser.password

      console.log(passwordMatch)

      if (!passwordMatch) {
        return reply.status(401).send({ error: 'Senha incorreta' })
      }

      const token = app.jwt.sign(
        {
          name: existingUser.name,
        },
        {
          sub: existingUser.id,
          expiresIn: '7 days',
        },
      )

      // console.log(token)

      return { token }
    } catch (error) {
      reply
        .status(400)
        .send({ error: 'Erro ao salvar informações no banco, tente novamente' })
    }
  })
}
