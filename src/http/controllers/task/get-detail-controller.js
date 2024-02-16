import { z } from "zod";
import { prisma } from "../../../lib/prisma.js"

export async function getDetailController(request, reply) {

    const getDetailParamsSchema = z.object({
        taskId: z.string().uuid()
    })

    const { taskId } = getDetailParamsSchema.parse(request.params)

    const taskDetail = await prisma.task.findUnique({
        where: {
            id: taskId
        }
    })

    reply.status(200).send({ taskDetail })

}