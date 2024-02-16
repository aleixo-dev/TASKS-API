
import { fastify } from 'fastify'
import { taskRoutes } from './src/http/controllers/task/routes.js'
import { ZodError } from 'zod'

export const app = fastify()

app.register(taskRoutes)

app.setErrorHandler((error, _, response) => {

    if (error instanceof ZodError) {
        return response
            .status(400)
            .send({ message: 'Invalid variables', issues: error.format() })
    }

    return response.status(500).send({ message: 'Internal server error' })
})
