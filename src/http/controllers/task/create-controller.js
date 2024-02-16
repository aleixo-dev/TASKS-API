import { z } from 'zod'
import { prisma } from '../../../lib/prisma.js';

export async function createController(request, reply) {

    const taskBodySchema = z.object({
        title: z.string(),
        description: z.string()
    })

    const { title, description } = taskBodySchema.parse(request.body)

    if (title.length === 0) {
        return reply.status(401)
            .send({
                message: "title can't be empty or null"
            })
    }

    const uuidTask = await prisma.task.create({
        data: {
            title,
            description,
        }
    })

    return reply.status(201).send({ id: uuidTask.id })

}