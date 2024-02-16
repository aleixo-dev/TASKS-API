import { z } from "zod";
import { prisma } from "../../../lib/prisma.js";

export async function updateController(request, reply) {

    const taskIdParamsSchema = z.object({
        taskId: z.string().uuid()
    })

    const taskBodySchema = z.object({
        title: z.string(),
        description: z.string()
    })

    const { taskId } = taskIdParamsSchema.parse(request.params)
    const { title, description } = taskBodySchema.parse(request.body)

    await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            title: title,
            description: description
        }
    })

    return reply.status(200).send({ message: 'Updated task.' })
}