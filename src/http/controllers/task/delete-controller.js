import { z } from "zod"
import { prisma } from "../../../lib/prisma.js"

export async function deleteController(request, reply) {

    const taskIdParamsSchema = z.object({
        taskId: z.string().uuid()
    })

    const { taskId } = taskIdParamsSchema.parse(request.params)

    const existsTask = await prisma.task.findUnique({
        where: {
            id: taskId
        }
    })

    if (!existsTask) {
        return reply.status(400).send({ message: 'Task not exists.' })
    }

    await prisma.task.delete({
        where: {
            id: taskId
        }
    })

    reply.status(200).send({ message: 'Successful delete task.' })

}