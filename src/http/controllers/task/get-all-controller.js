import { prisma } from "../../../lib/prisma.js";

export async function getAllController(request, reply) {

    const tasks = await prisma.task.findMany({
        select: {
            id: true,
            title: true,
            description: true
        }
    })

    reply.status(200).send({ tasks })
}